import type { Metadata } from "next";
import LegalPageLayout, { LegalSection } from "@/components/layout/LegalPageLayout";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Refund & Cancellation Policy of Syntrixmesh Solutions. Transparent guidelines on advance payments, milestone disbursements, and hardware warranties.",
  openGraph: {
    title: "Refund & Cancellation Policy | Syntrixmesh Solutions",
    description: "Clear, fair terms regarding project deposits, milestones, cancellations, and warranties.",
    url: `${company.domain}/refund-policy`,
  },
};

const sections: LegalSection[] = [
  { id: "overview", title: "Overview & Philosophy" },
  { id: "advance-payments", title: "Advance Payments & Project Initiation" },
  { id: "milestone-work", title: "Milestone-Based Custom Development" },
  { id: "cancellations", title: "Cancellation Before & After Project Start" },
  { id: "non-refundable", title: "Non-Refundable Items & Pass-Through Costs" },
  { id: "hardware-warranty", title: "Hardware Procurement & OEM Warranties" },
  { id: "processing-timelines", title: "Refund Request & Processing Timelines" },
  { id: "contact-billing", title: "Billing & Refund Inquiries" },
];

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Refund & Cancellation Policy"
      badge="BILLING & REFUND POLICY"
      lastUpdated="October 2026"
      sections={sections}
    >
      <section id="overview" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          1. Overview & Philosophy
        </h2>
        <p>
          At <strong>{company.name}</strong>, based in {company.contact.address.full}, we engineer mission-critical digital systems, custom web applications, AI automations, and enterprise physical IT infrastructure. Because our deliverables require dedicated senior engineering time, bespoke system architecture, and upfront infrastructure commitments, we maintain a clear, fair, and transparent Refund & Cancellation Policy.
        </p>
        <p>
          Every project agreement or Statement of Work (SOW) executed with us incorporates this Policy.
        </p>
      </section>

      <section id="advance-payments" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          2. Advance Payments & Project Initiation
        </h2>
        <p>
          Custom software and technology infrastructure projects require an upfront mobilization deposit of <strong>[ADVANCE_PERCENT]</strong> prior to the allocation of development engineers, repository provisioning, and sprint planning.
        </p>
        <p>
          The advance deposit covers preliminary technical discovery, architecture design documentation, and sprint capacity reservation.
        </p>
      </section>

      <section id="milestone-work" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          3. Milestone-Based Custom Development
        </h2>
        <p>
          Our development sprints are structured across discrete milestone stages (e.g., Discovery, UI/UX Wireframing, Core Backend Development, Integration & Testing, Final Deployment).
        </p>
        <ul className="list-disc pl-6 space-y-2 text-mesh-text">
          <li>
            The Client is provided with a review window of <strong>[MILESTONE_INSPECTION_DAYS]</strong> business days following the delivery of each milestone to inspect and verify deliverables against agreed acceptance criteria.
          </li>
          <li>
            Once a milestone is reviewed and signed off by the Client, or once the milestone inspection window has lapsed without written objections, the milestone is deemed accepted, and the fees for that completed phase are strictly non-refundable.
          </li>
          <li>
            Subsequent milestones will only be initiated once the preceding phase invoice has been settled in full.
          </li>
        </ul>
      </section>

      <section id="cancellations" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          4. Cancellation Before & After Project Start
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-mesh-text">
          <li>
            <strong className="text-white">Cancellation Prior to Kickoff:</strong> If the Client requests cancellation in writing within <strong>[CANCELLATION_NOTICE_DAYS]</strong> business days of signing the agreement and before any development or discovery work has commenced, the Client is eligible for a refund of <strong>[PRE_START_REFUND_PERCENT]</strong> of the deposit (the remaining balance covers administrative, banking, and contract drafting fees).
          </li>
          <li>
            <strong className="text-white">Cancellation After Project Kickoff:</strong> If a project is cancelled while active sprints are underway, Syntrixmesh will conduct an accounting of all hours and deliverables completed up to the date of cancellation notice. The Client is entitled to retain all work products completed and paid for, and will be invoiced only for unbilled work performed up to termination. No refunds are granted for work already completed.
          </li>
          <li>
            <strong className="text-white">Monthly Retainers & Maintenance:</strong> Ongoing monthly retainers (e.g., server maintenance, marketing retainers, SLA monitoring) may be cancelled with <strong>[RETAINER_NOTICE_DAYS]</strong> days written notice. Retainers are billed in advance for the month and are non-refundable for the active billing cycle.
          </li>
        </ul>
      </section>

      <section id="non-refundable" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          5. Non-Refundable Items & Pass-Through Costs
        </h2>
        <p>
          Certain third-party and direct procurement costs incurred on the Client&apos;s behalf cannot be recalled or refunded:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-mesh-text">
          <li>Domain name registrations and SSL certificates.</li>
          <li>Cloud hosting, server provisioning, CDN egress, and database instances (AWS, Vercel, DigitalOcean).</li>
          <li>Third-party software licences, commercial fonts, paid API subscriptions (OpenAI, Resend, WhatsApp Cloud API tokens).</li>
          <li>Procured computer hardware, server components, network switches, or cabling once ordered from distributors.</li>
        </ul>
      </section>

      <section id="hardware-warranty" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          6. Hardware Procurement & OEM Warranties
        </h2>
        <p>
          For physical enterprise IT infrastructure, high-power workstation builds, and networking deployments (e.g., UniFi networking, custom GPU workstations):
        </p>
        <ul className="list-disc pl-6 space-y-2 text-mesh-text">
          <li>All hardware components supplied are brand-new and accompanied by the original manufacturer / OEM invoices.</li>
          <li>
            <strong className="text-white">Manufacturer Warranty:</strong> All hardware warranties, RMA claims, repairs, and component replacements are handled directly by the respective Original Equipment Manufacturer (OEM) (such as Intel, AMD, NVIDIA, ASUS, Ubiquiti, Kingston) in accordance with their manufacturer warranty policies.
          </li>
          <li>
            Syntrixmesh will assist our clients with warranty coordination, diagnosis, and service center submissions as part of our IT support contracts.
          </li>
        </ul>
      </section>

      <section id="processing-timelines" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          7. Refund Request & Processing Timelines
        </h2>
        <p>
          Eligible refund requests must be submitted in writing via email to <strong>{company.contact.email}</strong> detailing the project agreement number, invoice reference, and rationale for cancellation.
        </p>
        <p>
          Once an eligible refund is verified and approved in writing, the reimbursement will be processed within <strong>[REFUND_PROCESSING_DAYS]</strong> business days via the original payment method (NEFT / RTGS / Wire Transfer / Payment Gateway).
        </p>
      </section>

      <section id="contact-billing" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          8. Billing & Refund Inquiries
        </h2>
        <p>
          For any questions or clarification regarding an invoice, milestone payment, or this policy, please reach out directly:
        </p>
        <div className="p-5 rounded-2xl glass-panel border border-cyan-400/20 bg-navy-900/60 text-sm space-y-1">
          <p className="text-white font-semibold">Syntrixmesh Solutions · Billing Dept.</p>
          <p className="text-mesh-text">{company.contact.address.full}</p>
          <p className="text-mesh-text">
            Email:{" "}
            <a href={`mailto:${company.contact.email}`} className="text-cyan-400 hover:underline">
              {company.contact.email}
            </a>
          </p>
          <p className="text-mesh-text">
            Phone / WhatsApp:{" "}
            <a href={`tel:${company.contact.phoneClean}`} className="text-white hover:underline">
              {company.contact.phone}
            </a>
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
