import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout, { LegalSection } from "@/components/layout/LegalPageLayout";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Legal and operational disclaimers for Syntrixmesh Solutions covering general information, AI accuracy, Web3 development, and performance guarantees.",
  openGraph: {
    title: "Disclaimer | Syntrixmesh Solutions",
    description: "Important operational and legal disclosures regarding our digital services and consulting.",
    url: `${company.domain}/disclaimer`,
  },
};

const sections: LegalSection[] = [
  { id: "general-info", title: "General Information Only" },
  { id: "no-guarantees", title: "No Guarantee of Specific Business Results" },
  { id: "ai-limitations", title: "AI Chatbots & Automation Limitations" },
  { id: "web3-crypto", title: "Web3, Blockchain & Financial Disclaimer" },
  { id: "external-links", title: "External Links & Third Parties" },
  { id: "professional-advice", title: "No Legal or Financial Advice" },
];

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      badge="LEGAL & OPERATIONAL NOTICES"
      lastUpdated="October 2026"
      sections={sections}
    >
      <section id="general-info" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          1. General Information Only
        </h2>
        <p>
          The information, technical case studies, architectural blueprints, and content published on this website (<Link href="/" className="text-cyan-400 hover:underline">{company.domain}</Link>) by <strong>{company.name}</strong> are provided solely for general informational and educational purposes. While we strive to maintain current and technically accurate information, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, or suitability of the information contained on the site.
        </p>
      </section>

      <section id="no-guarantees" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          2. No Guarantee of Specific Business Results
        </h2>
        <p>
          In our Digital Marketing, Search Engine Optimization (SEO), and custom software engineering practices:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-mesh-text">
          <li>
            <strong className="text-white">Search Engine Rankings:</strong> We apply state-of-the-art white-hat technical SEO, structured JSON-LD schemas, and core web vitals optimizations. However, search engines (including Google) continually update proprietary ranking algorithms. We do not and cannot guarantee specific #1 organic rankings, guaranteed traffic volumes, or specific search index placements.
          </li>
          <li>
            <strong className="text-white">Advertising Performance:</strong> Digital advertising metrics (ROAS, CPA, conversion rates) fluctuate based on market dynamics, competitive bidding, seasonality, and client sales funnels. Past performance metrics cited in case studies do not constitute a guarantee of future campaign results.
          </li>
          <li>
            <strong className="text-white">Commercial Outcomes:</strong> Software applications, ERP tools, and automation systems are tools designed to improve efficiency, but business profitability depends on client sales execution, product-market fit, and general economic conditions.
          </li>
        </ul>
      </section>

      <section id="ai-limitations" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          3. AI Chatbots & Automation Limitations
        </h2>
        <p>
          We engineer sophisticated custom AI agents, Retrieval-Augmented Generation (RAG) pipelines, and WhatsApp Cloud automation systems:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-mesh-text">
          <li>
            Large Language Models (LLMs) are probabilistic systems. While we implement strict guardrails, prompt engineering, and temperature constraints, AI models can occasionally produce inaccurate responses (&ldquo;hallucinations&rdquo;), unexpected syntax, or incomplete interpretations.
          </li>
          <li>
            Clients deploying autonomous AI agents are responsible for supervising bot responses, providing human fallback mechanisms, monitoring conversations, and auditing training datasets.
          </li>
          <li>
            Syntrixmesh Solutions is not liable for errors, conversational misinterpretations, or unintended commitments made autonomously by client-deployed AI chatbots.
          </li>
        </ul>
      </section>

      <section id="web3-crypto" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          4. Web3, Blockchain & Financial Disclaimer
        </h2>
        <p>
          Regarding our Web3, Solidity smart contract, and decentralized application (dApp) engineering services:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-mesh-text">
          <li>
            <strong className="text-white">Not Financial Advice:</strong> Nothing published on this website or communicated by Syntrixmesh constitutes financial advice, investment recommendations, securities promotion, or solicitation of any cryptocurrency, token, or digital asset.
          </li>
          <li>
            <strong className="text-white">High Inherent Risk:</strong> Blockchain protocols, decentralized finance (DeFi), and cryptographic tokens carry substantial market, regulatory, and technological risks, including price volatility and irreversible network transactions.
          </li>
          <li>
            <strong className="text-white">Smart Contract Auditing:</strong> While we follow industry security standards and rigorous unit testing, on-chain smart contracts are susceptible to unforeseen zero-day vulnerabilities, network forks, and blockchain congestion. Clients must conduct independent security audits prior to deploying smart contracts with financial custody on mainnets.
          </li>
        </ul>
      </section>

      <section id="external-links" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          5. External Links & Third Parties
        </h2>
        <p>
          Our website may contain links to external third-party websites or services (e.g., GitHub, LinkedIn, WhatsApp, Google Maps, partner technologies). These external destinations are not owned, operated, or monitored by Syntrixmesh. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.
        </p>
      </section>

      <section id="professional-advice" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          6. No Legal or Financial Advice
        </h2>
        <p>
          The content of this website does not constitute formal legal, accounting, tax, or investment advice. You should consult qualified professional advisers licensed in your jurisdiction before making commercial decisions or entering into technology agreements.
        </p>
      </section>
    </LegalPageLayout>
  );
}
