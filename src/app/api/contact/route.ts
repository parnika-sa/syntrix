import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Server-side Zod validation schema
const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  email: z
    .string()
    .email("Please provide a valid business email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone or WhatsApp number")
    .max(20, "Phone number is too long"),
  service: z
    .string()
    .min(1, "Please select a service"),
  budget: z
    .string()
    .min(1, "Please select a budget range"),
  message: z
    .string()
    .min(10, "Project details must be at least 10 characters")
    .max(3000, "Message cannot exceed 3000 characters"),
  honeypot: z
    .string()
    .optional(),
});

// Simple in-memory rate limiter: IP -> [timestamps]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP extraction & Rate limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please wait a few minutes before submitting again or message us directly on WhatsApp.",
        },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await req.json();

    // 3. Honeypot check for spam bots
    if (body.honeypot && body.honeypot.trim().length > 0) {
      console.warn(`[Contact API] Honeypot triggered from IP: ${ip}. Silent drop.`);
      // Return fake success to prevent bot retry
      return NextResponse.json({
        success: true,
        message: "Thank you! We will contact you shortly.",
      });
    }

    // 4. Validate with Zod
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMsg =
        validationResult.error.issues?.[0]?.message || "Invalid input data";
      return NextResponse.json(
        { success: false, error: errorMsg },
        { status: 400 }
      );
    }

    const data = validationResult.data;
    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "info@syntrixmeshsolutions.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Syntrixmesh Inquiries <onboarding@resend.dev>";

    // If RESEND_API_KEY is not configured, log a friendly dev notice and simulate success
    if (!resendApiKey) {
      console.log("=================================================");
      console.log("[Contact API] NOTE: RESEND_API_KEY is not configured.");
      console.log("[Contact API] Received submission successfully in dev mode:");
      console.log(JSON.stringify(data, null, 2));
      console.log("=================================================");

      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Thank you! We will review your project and contact you shortly.",
      });
    }

    // 5. Initialize Resend
    const resend = new Resend(resendApiKey);

    // HTML Email Template for Admin notification
    const adminHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; background: #070B14; color: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid #1E2D54;">
        <div style="background: linear-gradient(135deg, #0A0F1C 0%, #111B33 100%); padding: 32px 24px; border-bottom: 2px solid #2FB8FF;">
          <h2 style="margin: 0; color: #FFFFFF; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">
            SYNTRIX<span style="color: #2FB8FF;">MESH</span> SOLUTIONS
          </h2>
          <p style="margin: 6px 0 0 0; color: #A8B3C7; font-size: 13px;">
            New High-Priority Inbound Client Inquiry
          </p>
        </div>

        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px 0; color: #64748B; width: 140px;">Client Name:</td>
              <td style="padding: 10px 0; color: #FFFFFF; font-weight: 600;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748B;">Email Address:</td>
              <td style="padding: 10px 0; color: #2FB8FF;"><a href="mailto:${data.email}" style="color: #2FB8FF; text-decoration: none;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748B;">Phone / WhatsApp:</td>
              <td style="padding: 10px 0; color: #FFFFFF;"><a href="tel:${data.phone}" style="color: #FFFFFF; text-decoration: none;">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748B;">Service Requested:</td>
              <td style="padding: 10px 0; color: #E5C467; font-weight: 600;">${data.service}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748B;">Budget Range:</td>
              <td style="padding: 10px 0; color: #FFFFFF;">${data.budget}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748B;">Submitted At:</td>
              <td style="padding: 10px 0; color: #A8B3C7;">${submissionTime} (IST)</td>
            </tr>
          </table>

          <div style="background: rgba(17, 27, 51, 0.6); padding: 18px; border-radius: 12px; border-left: 4px solid #2FB8FF; margin-top: 10px;">
            <p style="margin: 0 0 8px 0; color: #2FB8FF; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
              Project Details & Scope:
            </p>
            <p style="margin: 0; color: #F1F5F9; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>

        <div style="background: #050811; padding: 16px 24px; text-align: center; border-top: 1px solid #1E2D54;">
          <p style="margin: 0; color: #64748B; font-size: 12px;">
            Syntrixmesh Solutions · Vill. Jhande, Ludhiana, Punjab, 142021
          </p>
        </div>
      </div>
    `;

    // Customer Auto-reply template
    const customerHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; background: #070B14; color: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid #1E2D54;">
        <div style="background: linear-gradient(135deg, #0A0F1C 0%, #111B33 100%); padding: 32px 24px; border-bottom: 2px solid #2FB8FF; text-align: center;">
          <h2 style="margin: 0; color: #FFFFFF; font-size: 22px; font-weight: 700;">
            SYNTRIX<span style="color: #2FB8FF;">MESH</span> SOLUTIONS
          </h2>
          <p style="margin: 8px 0 0 0; color: #2FB8FF; font-size: 14px; font-weight: 600;">
            Thank you for reaching out, ${data.fullName}!
          </p>
        </div>

        <div style="padding: 28px 24px; line-height: 1.6; font-size: 14px; color: #A8B3C7;">
          <p style="margin-top: 0; color: #FFFFFF; font-size: 16px;">
            We have safely received your inquiry for <strong>${data.service}</strong>.
          </p>
          <p>
            Founder <strong>Manmeet Singh</strong> and our principal technology team are reviewing your project requirements. A dedicated engineer will get back to you with architectural recommendations within <strong>24 business hours</strong>.
          </p>

          <div style="background: #111B33; padding: 16px; border-radius: 12px; margin: 24px 0; border: 1px solid rgba(47, 184, 255, 0.2);">
            <p style="margin: 0 0 6px 0; font-size: 13px; color: #FFFFFF; font-weight: 600;">
              Need an immediate response?
            </p>
            <p style="margin: 0; font-size: 13px;">
              You can connect with us directly on WhatsApp:
              <br/>
              <a href="https://wa.me/918054080370" style="color: #2FB8FF; font-weight: 600; text-decoration: none;">
                +91 80540 80370 →
              </a>
            </p>
          </div>

          <p style="margin-bottom: 0;">
            Best regards,<br/>
            <strong>Manmeet Singh & Team Syntrixmesh</strong><br/>
            <span style="color: #64748B; font-size: 12px;">End-to-End Technology & Growth Partner · Ludhiana, India</span>
          </p>
        </div>
      </div>
    `;

    // Send emails in parallel
    await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        reply_to: data.email,
        subject: `[Inquiry] ${data.service} - ${data.fullName}`,
        html: adminHtml,
      }),
      resend.emails.send({
        from: fromEmail,
        to: [data.email],
        subject: `We have received your project inquiry - Syntrixmesh Solutions`,
        html: customerHtml,
      }),
    ]);

    return NextResponse.json({
      success: true,
      message: "Thank you! We will contact you shortly.",
    });
  } catch (err: any) {
    console.error("[Contact API Error]:", err);
    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong processing your request. Please try again or WhatsApp us directly at +91 80540 80370.",
      },
      { status: 500 }
    );
  }
}
