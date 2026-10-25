import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Globe2, 
  Sparkles, 
  Calendar, 
  FileText, 
  Rocket 
} from "lucide-react";
import dynamic from "next/dynamic";
import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import LazyMap from "@/components/ui/LazyMap";
import { company } from "@/data/company";
import { siteConfig } from "@/data/siteConfig";

const MeshNetworkBackground = dynamic(
  () => import("@/components/canvas/MeshNetworkBackground"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Contact Us & Free Consultation",
  description:
    "Get in touch with Syntrixmesh Solutions in Ludhiana, Punjab. Request a free 30-minute architecture consultation for software development, AI automation, or IT infrastructure.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Syntrixmesh Solutions | Ludhiana & Global Delivery",
    description: "Start your project with our engineering leads. 24-hour response guarantee.",
    url: `${siteConfig.domain}/contact`,
  },
};

const nextSteps = [
  {
    step: "01",
    icon: FileText,
    title: "We Review Your Request",
    timeframe: "Within 2 - 4 Hours",
    description:
      "Founder Manmeet Singh and our lead architects personally examine your project scope, technical requirements, and objectives under strict NDA.",
  },
  {
    step: "02",
    icon: Calendar,
    title: "Free 30-Min Strategy Call",
    timeframe: "Scheduled at Your Convenience",
    description:
      "We hop on Google Meet or Zoom to discuss architecture options, tech stack selection, feasibility, and potential budget optimizations.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Transparent Proposal & Kickoff",
    timeframe: "Delivered in 24 - 48 Hours",
    description:
      "You receive a fixed-price proposal with sprint milestones, deliverables, and architecture blueprints. Once signed, development commences immediately.",
  },
];

const contactFaqs = [
  {
    question: "How quickly will I receive a response after submitting?",
    answer: "We guarantee a direct response within 2 to 4 business hours. Every inquiry is reviewed directly by our principal technology team—never by non-technical call center reps.",
  },
  {
    question: "How much does a typical project cost with Syntrixmesh?",
    answer: "Every project is scoped transparently based on complexity. Single-purpose landing pages or hardware setups start affordably, while bespoke web applications, enterprise ERPs, and custom-trained AI chat agents are phased across transparent sprint milestones with zero hidden fees.",
  },
  {
    question: "Do you offer post-launch technical support and maintenance?",
    answer: "Yes. Every project includes a 30-day post-launch hypercare warranty. Additionally, we provide monthly SLA retainers covering proactive uptime monitoring, security patches, backups, and ongoing feature development.",
  },
  {
    question: "Can we collaborate if our business is located outside India?",
    answer: "Absolutely. While our engineering headquarters are in Ludhiana, Punjab, we deliver digital systems globally. We seamlessly collaborate across North America (EST/PST), Europe (GMT/CET), the Middle East (GST), and Australia with daily async updates and scheduled video conferences.",
  },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 mx-auto w-full overflow-hidden" style={{ maxWidth: "1360px", paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
        {/* Subtle mesh background */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <MeshNetworkBackground />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="inline-flex items-center gap-2 text-xs text-mesh-muted mb-6 glass-panel px-4 py-1.5 rounded-full border border-cyan-400/20">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-cyan-400 font-medium">Contact</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-xs font-semibold text-cyan-400 mb-4 shadow-[0_0_15px_rgba(47,184,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET&apos;S CONNECT</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-gold-400 bg-clip-text text-transparent">
              Great Together
            </span>
            .
          </h1>

          <p className="mt-4 text-base sm:text-lg text-mesh-text leading-relaxed">
            Tell us about your project and our team will get back to you within 24 hours. From modern web applications and AI agents to physical IT infrastructure in Ludhiana and globally.
          </p>
        </div>
      </section>

      {/* 2. TWO-COLUMN LAYOUT: FORM (LEFT) + INFO & MAP (RIGHT) */}
      <section className="pb-24 mx-auto w-full relative z-10" style={{ maxWidth: "1360px", paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Form with Suspense for query param handling */}
          <div className="lg:col-span-7 space-y-6">
            {/* Scope Estimator Quick Callout */}
            <div className="p-4 rounded-2xl glass-panel border border-cyan-400/25 bg-gradient-to-r from-navy-900/90 to-navy-950/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-white block">Need to configure specific project parameters?</span>
                  <span className="text-mesh-muted">Use our interactive 3-step scope estimator.</span>
                </div>
              </div>
              <Link
                href="/get-quote"
                className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-opacity whitespace-nowrap"
              >
                Configure Scope →
              </Link>
            </div>

            <Suspense fallback={<div className="p-12 glass-panel rounded-3xl text-center">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Right Column: Contact Cards + Google Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards Grid */}
            <div className="space-y-4">
              
              {/* Phone Card */}
              <a
                href={`tel:${company.contact.phoneClean}`}
                className="p-5 rounded-2xl glass-panel border border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-cyan-glow transition-all duration-300 flex items-start gap-4 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-navy-950 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-mesh-muted uppercase tracking-wider block">
                    Direct Phone Line
                  </span>
                  <span className="font-heading font-bold text-base text-white group-hover:text-cyan-400 transition-colors block">
                    {company.contact.phone}
                  </span>
                  <span className="text-xs text-mesh-text">
                    Mon - Sat · Direct Engineer Support
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={company.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-panel border border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(37,211,102,0.2)] transition-all duration-300 flex items-start gap-4 group block bg-emerald-950/10"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-navy-950 transition-all">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                      Quick WhatsApp Chat
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Active
                    </span>
                  </div>
                  <span className="font-heading font-bold text-base text-white group-hover:text-emerald-400 transition-colors block">
                    Chat on WhatsApp
                  </span>
                  <span className="text-xs text-mesh-text">
                    Instant quotes, questions & consultations
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${company.contact.email}`}
                className="p-5 rounded-2xl glass-panel border border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-cyan-glow transition-all duration-300 flex items-start gap-4 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-navy-950 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-mesh-muted uppercase tracking-wider block">
                    Official Email
                  </span>
                  <span className="font-heading font-bold text-base text-white group-hover:text-cyan-400 transition-colors block break-all">
                    {company.contact.email}
                  </span>
                  <span className="text-xs text-mesh-text">
                    Guaranteed response within 2-4 hours
                  </span>
                </div>
              </a>

              {/* Address & Hours Card */}
              <div className="p-5 rounded-2xl glass-panel border border-cyan-400/20">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 border border-cyan-400/20 flex items-center justify-center text-gold-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-gold-400 uppercase tracking-wider block">
                      Headquarters
                    </span>
                    <span className="font-heading font-bold text-sm text-white block mt-0.5">
                      {company.contact.address.full}
                    </span>
                    <span className="text-xs text-cyan-400 font-medium block mt-1">
                      {company.contact.deliveryScope}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-cyan-400/10 flex items-center gap-2 text-xs text-mesh-muted">
                  <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{company.contact.workingHours}</span>
                </div>
              </div>

            </div>

            {/* Embedded Google Map with Dark-Mode Styling */}
            <div className="rounded-2xl glass-panel border border-cyan-400/20 overflow-hidden shadow-cyan-glow">
              <div className="p-3 border-b border-cyan-400/10 flex items-center justify-between bg-navy-950/80">
                <span className="text-xs font-heading font-semibold text-white flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                  Ludhiana Office Location (Jhande)
                </span>
                <span className="text-[10px] text-mesh-muted">Punjab, 142021</span>
              </div>
              
              <LazyMap />
            </div>

          </div>

        </div>
      </section>

      {/* 3. WHAT HAPPENS NEXT? (3-STEP TIMELINE) */}
      <section className="py-20 bg-navy-900/40 border-y border-cyan-400/10 mx-auto w-full content-auto" style={{ maxWidth: "1360px", paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
        <SectionHeading
          badge="OUR ENGAGEMENT PROCESS"
          title="What Happens Next?"
          highlight="Zero Friction Onboarding"
          subtitle="Here is exactly what you can expect after sending your inquiry."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {nextSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl glass-panel border border-cyan-400/15 hover:border-cyan-400/40 hover:shadow-cyan-glow transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 border border-cyan-400/25 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-bold text-xs uppercase tracking-widest text-gold-400 bg-navy-950 px-3 py-1 rounded-full border border-gold-400/20">
                    Step {step.step}
                  </span>
                </div>

                <span className="text-xs font-semibold text-cyan-400 block mb-1">
                  {step.timeframe}
                </span>

                <h4 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h4>

                <p className="text-xs sm:text-sm text-mesh-text leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. CONTACT FAQS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto content-auto">
        <SectionHeading
          badge="COMMON INQUIRIES"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Quick answers to help you prepare before reaching out."
          align="center"
        />

        <div className="mt-12">
          <FAQAccordion faqs={contactFaqs} />
        </div>
      </section>

      {/* 5. FINAL CTA STRIP WITH WHATSAPP */}
      <section className="pb-24 mx-auto w-full content-auto" style={{ maxWidth: "1360px", paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
        <div className="rounded-3xl p-8 sm:p-12 glass-panel border border-cyan-400/30 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">
              Prefer an immediate voice or chat response?
            </span>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
              Connect with Founder Manmeet Singh on WhatsApp
            </h3>
          </div>

          <a
            href={company.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full font-heading font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-[0_4px_25px_rgba(37,211,102,0.35)] hover:scale-105 transition-all flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp Now</span>
          </a>
        </div>
      </section>

    </div>
  );
}
