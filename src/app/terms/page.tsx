import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout, { LegalSection } from "@/components/layout/LegalPageLayout";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions governing technology services, intellectual property ownership, deliverables, and project engagements with Syntrixmesh Solutions.",
  openGraph: {
    title: "Terms & Conditions | Syntrixmesh Solutions",
    description: "Terms and Conditions governing engineering services and client engagements.",
    url: `${company.domain}/terms`,
  },
};

const sections: LegalSection[] = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "services-scope", title: "Services & Project Scope" },
  { id: "payments-invoicing", title: "Payment Terms & Milestones" },
  { id: "intellectual-property", title: "Intellectual Property & Code Ownership" },
  { id: "client-responsibilities", title: "Client Responsibilities" },
  { id: "warranties-liability", title: "Limitation of Liability" },
  { id: "termination", title: "Suspension & Termination" },
  { id: "governing-law", title: "Governing Law & Jurisdiction" },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      badge="SERVICE AGREEMENT"
      lastUpdated="October 2026"
      sections={sections}
    >
      <section id="acceptance" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          1. Acceptance of Terms
        </h2>
        <p>
          These Terms and Conditions (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Client&rdquo;, &ldquo;you&rdquo;) and <strong>{company.name}</strong> (&ldquo;Syntrixmesh&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), having its principal office at {company.contact.address.full}.
        </p>
        <p>
          By accessing our website (<Link href="/" className="text-cyan-400 hover:underline">{company.domain}</Link>), requesting a consultation, or executing a Statement of Work (SOW), you acknowledge that you have read, understood, and agreed to be bound by these Terms and our Privacy Policy.
        </p>
      </section>

      <section id="services-scope" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          2. Services & Project Scope
        </h2>
        <p>
          Syntrixmesh provides professional engineering services across six core disciplines:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-mesh-text">
          <li>Custom Web & Mobile Application Development (Next.js, React Native, TypeScript).</li>
          <li>Enterprise Software Engineering, Microservices & Custom ERP Systems.</li>
          <li>Data-driven Digital Marketing, Technical SEO & Performance Ads.</li>
          <li>Physical Enterprise IT Infrastructure, Networking (UniFi) & Custom Workstation Builds.</li>
          <li>Autonomous AI Chatbots, Multi-Turn RAG Systems & WhatsApp Cloud Automation.</li>
          <li>Web3 Protocol Architecture, Audited Solidity Smart Contracts & dApps.</li>
        </ul>
        <p>
          All specific deliverables, timelines, acceptance criteria, and costs are documented in a mutually approved Statement of Work (SOW) or written engagement contract. Any modifications or scope expansion outside the original SOW will be handled via a formal Change Request and may incur additional charges.
        </p>
      </section>

      <section id="payments-invoicing" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          3. Payment Terms & Milestones
        </h2>
        <p>
          Unless otherwise explicitly stated in an active Statement of Work:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-mesh-text">
          <li>
            <strong className="text-white">Milestone Invoicing:</strong> Fixed-scope projects are phased across predefined milestone stages (e.g., Discovery & Architecture, Prototype UI/UX, Core Integration, Final Production Hardening). Each milestone is billed upon successful delivery.
          </li>
          <li>
            <strong className="text-white">Due Dates:</strong> Invoices are payable within 7 business days of issuance. Late payments may cause work suspension until outstanding balances are cleared.
          </li>
          <li>
            <strong className="text-white">Currencies & Taxes:</strong> Invoices for Indian clients are denominated in INR (₹) subject to applicable taxes. International clients are invoiced in USD ($) or other agreed foreign currencies via wire transfer or international payment gateways.
          </li>
        </ul>
      </section>

      <section id="intellectual-property" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          4. Intellectual Property & Code Ownership
        </h2>
        <p>
          We pride ourselves on a <strong>Zero IP Lock-In</strong> engineering philosophy:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-mesh-text">
          <li>
            <strong className="text-white">Full Client Ownership:</strong> Upon receipt of 100% full and final payment for all delivered milestone work, all proprietary custom codebases, design assets, database schemas, and documentation created specifically for the Client transfer entirely to the Client.
          </li>
          <li>
            <strong className="text-white">Pre-existing Frameworks:</strong> Syntrixmesh retains ownership of its standard reusable utilities, boilerplate libraries, and open-source tooling, and grants the Client a perpetual, royalty-free, irrevocable, worldwide licence to utilize such elements embedded in the deliverables.
          </li>
          <li>
            <strong className="text-white">Portfolio Rights:</strong> Unless otherwise restricted by a signed Non-Disclosure Agreement (NDA), Syntrixmesh reserves the right to display project summaries and non-sensitive case studies in our promotional portfolio.
          </li>
        </ul>
      </section>

      <section id="client-responsibilities" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          5. Client Responsibilities
        </h2>
        <p>
          Prompt execution depends on active collaboration. The Client agrees to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-mesh-text">
          <li>Provide timely approvals, feedback, and access credentials (API tokens, hosting keys, branding assets) necessary for sprint execution.</li>
          <li>Ensure that all content, logos, copy, and media supplied to Syntrixmesh do not violate any third-party intellectual property or copyright laws.</li>
          <li>Conduct milestone acceptance testing within the review window specified in the SOW (typically 5 business days).</li>
        </ul>
      </section>

      <section id="warranties-liability" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          6. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by applicable Indian law:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-mesh-text">
          <li>
            Neither party shall be liable for indirect, incidental, consequential, special, or punitive damages (including loss of profits, revenue, data, or business interruption), even if advised of the possibility of such damages.
          </li>
          <li>
            The total aggregate liability of Syntrixmesh Solutions arising under or related to any project engagement, regardless of the cause of action, shall be limited to the total fees actually received by Syntrixmesh from the Client for the specific phase or service giving rise to the claim in the 3 months preceding the event.
          </li>
        </ul>
      </section>

      <section id="termination" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          7. Suspension & Termination
        </h2>
        <p>
          Either party may terminate a project agreement upon written notice if the other party commits a material breach and fails to cure such breach within 14 days of notice. Upon termination, the Client remains liable for all work performed and approved up to the termination date.
        </p>
      </section>

      <section id="governing-law" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          8. Governing Law & Jurisdiction
        </h2>
        <p>
          These Terms and any dispute, controversy, or claim arising out of or related to them or our services shall be governed by and construed in accordance with the <strong>laws of the Republic of India</strong>.
        </p>
        <p>
          The parties agree to first endeavor to resolve any dispute through amicable good-faith discussions. If unresolved, the courts having jurisdiction over <strong>Ludhiana, Punjab, India</strong> shall have exclusive jurisdiction to settle any disputes arising out of or in connection with these Terms.
        </p>
      </section>
    </LegalPageLayout>
  );
}
