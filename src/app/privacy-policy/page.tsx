import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout, { LegalSection } from "@/components/layout/LegalPageLayout";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Syntrixmesh Solutions. Learn how we handle your personal data in compliance with the Digital Personal Data Protection Act 2023 (DPDPA) and IT Act 2000.",
  openGraph: {
    title: "Privacy Policy | Syntrixmesh Solutions",
    description: "Our commitment to data privacy, protection, and transparent processing.",
    url: `${company.domain}/privacy-policy`,
  },
};

const sections: LegalSection[] = [
  { id: "overview", title: "Overview & Scope" },
  { id: "data-collection", title: "Information We Collect" },
  { id: "purpose-processing", title: "Purpose of Data Processing" },
  { id: "third-parties", title: "Third-Party Sub-processors" },
  { id: "data-retention", title: "Data Retention & Storage" },
  { id: "user-rights", title: "Your Rights under Indian Law" },
  { id: "security", title: "Security Measures" },
  { id: "contact-dpo", title: "Contact Us & Data Requests" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      badge="DATA PROTECTION & PRIVACY"
      lastUpdated="October 2026"
      sections={sections}
    >
      <section id="overview" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          1. Overview & Scope
        </h2>
        <p>
          Welcome to <strong>{company.name}</strong> (&ldquo;Syntrixmesh&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), operating from {company.contact.address.full}. We provide bespoke software engineering, enterprise cloud solutions, AI chat and workflow automation, IT hardware systems, and digital consulting to ambitious businesses across India and globally.
        </p>
        <p>
          We are committed to respecting and protecting your privacy. This Privacy Policy describes how we collect, process, store, and safeguard personal information collected through our website (<Link href="/" className="text-cyan-400 hover:underline">{company.domain}</Link>) and through our service engagement forms.
        </p>
        <p>
          Our data protection practices comply with the applicable laws of India, including the <strong>Information Technology Act, 2000 (IT Act 2000)</strong>, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act 2023)</strong>.
        </p>
      </section>

      <section id="data-collection" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          2. Information We Collect
        </h2>
        <p>We collect only the data necessary to provide you with consulting, software development, and technical support:</p>
        <ul className="list-disc pl-6 space-y-2 text-mesh-text">
          <li>
            <strong className="text-white">Contact & Inquiry Information:</strong> When you submit our project consultation form, we collect your full name, business email address, phone number or WhatsApp number, requested service category, estimated budget range, and your detailed project scope description.
          </li>
          <li>
            <strong className="text-white">Technical & Log Data:</strong> When you browse our website, our servers and edge content delivery network automatically receive technical information, such as your IP address, browser type, operating system version, device type, referring URLs, and timestamps of requests.
          </li>
          <li>
            <strong className="text-white">Cookies and Session Storage:</strong> We use minimal storage tokens (such as sessionStorage to ensure the preloader animation is shown only once per session) and localStorage to remember your cookie consent preferences.
          </li>
        </ul>
      </section>

      <section id="purpose-processing" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          3. Purpose of Data Processing
        </h2>
        <p>We process your personal information strictly for legitimate commercial and engineering purposes:</p>
        <ul className="list-disc pl-6 space-y-2 text-mesh-text">
          <li>To review technical feasibility, architectural requirements, and scope your requested project.</li>
          <li>To send you automated confirmation emails and follow-up correspondence regarding scheduled strategy calls.</li>
          <li>To draft project agreements, statements of work (SOWs), and non-disclosure agreements (NDAs).</li>
          <li>To detect, prevent, and mitigate security threats, abuse, spam submissions, or DDoS attacks against our digital infrastructure.</li>
          <li>To comply with statutory tax, accounting, and legal requirements under Indian law.</li>
        </ul>
        <p className="text-cyan-300 font-medium">
          We do not sell, rent, monetize, or trade your personal data to any third-party marketing brokers or data aggregation networks under any circumstances.
        </p>
      </section>

      <section id="third-parties" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          4. Third-Party Sub-processors
        </h2>
        <p>
          To maintain reliable, enterprise-grade cloud operations, we partner with industry-leading technology vendors who act as data sub-processors under strict confidentiality commitments:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <div className="p-4 rounded-xl glass-panel border border-cyan-400/15">
            <h3 className="font-heading font-bold text-white text-sm mb-1">Resend Inc.</h3>
            <p className="text-xs text-mesh-text">
              Transactional email delivery service used to dispatch inbound client notifications and acknowledgment receipts.
            </p>
          </div>
          <div className="p-4 rounded-xl glass-panel border border-cyan-400/15">
            <h3 className="font-heading font-bold text-white text-sm mb-1">Vercel Inc.</h3>
            <p className="text-xs text-mesh-text">
              Edge serverless cloud platform hosting our Next.js web application and edge routing infrastructure.
            </p>
          </div>
          <div className="p-4 rounded-xl glass-panel border border-cyan-400/15">
            <h3 className="font-heading font-bold text-white text-sm mb-1">Google Maps</h3>
            <p className="text-xs text-mesh-text">
              Provides interactive geographic map display of our Ludhiana headquarters on demand.
            </p>
          </div>
        </div>
      </section>

      <section id="data-retention" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          5. Data Retention & Storage
        </h2>
        <p>
          Client inquiries and contact form submissions are retained for as long as necessary to fulfill the business engagement, maintain audit trails, or resolve contractual discussions (typically up to 24 months from last active correspondence). Client project records, contracts, and invoices are retained as required by Indian taxation and corporate compliance laws.
        </p>
      </section>

      <section id="user-rights" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          6. Your Rights under Indian Law
        </h2>
        <p>
          Under the Digital Personal Data Protection Act, 2023 (DPDP Act 2023) and related Indian regulations, you have explicit rights regarding your personal information:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-mesh-text">
          <li><strong className="text-white">Right to Access:</strong> You may request a summary of the personal data we hold about you.</li>
          <li><strong className="text-white">Right to Correction & Erasure:</strong> You may request the correction of inaccurate details or the erasure of your personal data where it is no longer required.</li>
          <li><strong className="text-white">Right of Grievance Redressal:</strong> You have the right to register a grievance with us regarding data handling and receive timely resolution.</li>
          <li><strong className="text-white">Right to Nominate:</strong> You may nominate an individual to exercise your data rights in the event of death or incapacity.</li>
        </ul>
      </section>

      <section id="security" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          7. Security Measures
        </h2>
        <p>
          We employ robust technical and organizational security controls, including TLS 1.3 encryption in transit, strict access control policies, rate limiting, and automated honeypot spam protection. However, no data transmission across the public internet is completely immune from interception; we urge you to exercise caution when transmitting sensitive credentials.
        </p>
      </section>

      <section id="contact-dpo" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          8. Contact Us & Data Requests
        </h2>
        <p>
          To exercise any of your privacy rights, request data deletion, or address privacy concerns, please contact our Data Grievance Officer:
        </p>
        <div className="p-5 rounded-2xl glass-panel border border-cyan-400/20 bg-navy-900/60 text-sm space-y-1">
          <p className="text-white font-semibold">Grievance Officer: Manmeet Singh</p>
          <p className="text-mesh-text">Syntrixmesh Solutions</p>
          <p className="text-mesh-text">{company.contact.address.full}</p>
          <p className="text-mesh-text">
            Email:{" "}
            <a href={`mailto:${company.contact.email}`} className="text-cyan-400 hover:underline">
              {company.contact.email}
            </a>
          </p>
          <p className="text-mesh-text">
            Phone:{" "}
            <a href={`tel:${company.contact.phoneClean}`} className="text-white hover:underline">
              {company.contact.phone}
            </a>
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
