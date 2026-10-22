export interface FAQItem {
  id: string;
  category: "General" | "Development" | "AI & Automation" | "Digital Marketing" | "Hardware & IT" | "Web3" | "Pricing & Support";
  question: string;
  answer: string;
}

export const faqCategories = [
  "All",
  "General",
  "Development",
  "AI & Automation",
  "Digital Marketing",
  "Hardware & IT",
  "Web3",
  "Pricing & Support",
] as const;

export const allFaqs: FAQItem[] = [
  // General
  {
    id: "gen-1",
    category: "General",
    question: "Where is Syntrixmesh Solutions based, and can you deliver projects internationally?",
    answer: "We are headquartered in Jhande, Ludhiana, Punjab, India. While our physical engineering lab and leadership are in Ludhiana, over 60% of our software, AI, and marketing clients are located across North America, the UK, Europe, UAE, and APAC. We work across global time zones with continuous staging visibility.",
  },
  {
    id: "gen-2",
    category: "General",
    question: "Will I have direct access to founder Manmeet Singh during my project?",
    answer: "Yes. Unlike large generic agencies that route you through junior account managers, our founder and principal technology architect Manmeet Singh personally oversees scoping, architecture blueprints, and major sprint deliverables.",
  },
  {
    id: "gen-3",
    category: "General",
    question: "Do you sign Non-Disclosure Agreements (NDAs) before discussing project ideas?",
    answer: "Yes, absolutely. We treat intellectual property and proprietary trade secrets with strict confidentiality. We provide and sign bilateral NDAs before reviewing sensitive business data, codebases, or workflow documentation.",
  },

  // Development
  {
    id: "dev-1",
    category: "Development",
    question: "What core tech stack do you use for web and mobile development?",
    answer: "Our primary frontend stack is Next.js 14 App Router, TypeScript, and Tailwind CSS. For backends, we use Node.js/TypeScript, Python, Go, and PostgreSQL or Redis. For mobile applications, we engineer with React Native, providing native 60 FPS performance across iOS and Android from a single battle-tested codebase.",
  },
  {
    id: "dev-2",
    category: "Development",
    question: "Do I retain 100% ownership of the source code upon project completion?",
    answer: "Yes, 100%. Upon receipt of final payment, full intellectual property rights, private Git repositories (GitHub/GitLab), environment credentials, and automated deployment pipelines are transferred directly to your organization. Zero vendor lock-in.",
  },
  {
    id: "dev-3",
    category: "Development",
    question: "Can you migrate an existing slow WordPress or PHP website to Next.js?",
    answer: "Yes, this is one of our most frequent engagements. We rebuild bloated legacy websites into headless Next.js App Router platforms, slashing load times below 1 second, improving mobile Core Web Vitals to 90+, and preserving all existing SEO URL structures without ranking loss.",
  },

  // AI & Automation
  {
    id: "ai-1",
    category: "AI & Automation",
    question: "How do your AI WhatsApp chatbots avoid hallucinating incorrect prices or details?",
    answer: "We engineer strict Retrieval-Augmented Generation (RAG) pipelines. The AI model is strictly bounded to retrieve facts only from your approved private company documents, pricing sheets, and inventory data. If an inquiry falls outside that knowledge base, the agent politely refers the user to a human executive.",
  },
  {
    id: "ai-2",
    category: "AI & Automation",
    question: "Does the AI agent integrate with the official WhatsApp Business API?",
    answer: "Yes, we integrate exclusively with the official Meta WhatsApp Business Cloud API. Your account operates with official business verification, green badge eligibility, and compliance with Meta's messaging policies.",
  },
  {
    id: "ai-3",
    category: "AI & Automation",
    question: "Can the AI bot schedule appointments directly onto our calendar?",
    answer: "Yes. Our agents query real-time calendar availability (Google Calendar, Calendly, or CRM schedules), propose available timeslots in natural conversation, and automatically confirm the booking.",
  },

  // Digital Marketing
  {
    id: "mkt-1",
    category: "Digital Marketing",
    question: "How quickly do Google Ads generate qualified business leads?",
    answer: "Google Ads campaigns typically begin generating high-intent inbound search impressions and qualified phone calls or inquiries within 48 to 72 hours of campaign activation. We use strict negative keyword rings to ensure budget is never wasted on non-commercial search queries.",
  },
  {
    id: "mkt-2",
    category: "Digital Marketing",
    question: "Why do you emphasize technical SEO and Core Web Vitals over basic backlink packages?",
    answer: "Search engines prioritize fast, stable, and accessible websites. A slow website with toxic low-quality backlinks will struggle to rank. By fixing server response times, schema markup, and mobile layout stability first, your content organically ranks higher and converts more visitors into customers.",
  },
  {
    id: "mkt-3",
    category: "Digital Marketing",
    question: "Do you own our Google Ads and Analytics accounts or do we?",
    answer: "You own 100% of all ad accounts and data. We configure Google Tag Manager, GA4, and Google Ads inside your company's own accounts with administrative access retained by you at all times.",
  },

  // Hardware & IT
  {
    id: "hw-1",
    category: "Hardware & IT",
    question: "What hardware brands and workstation configurations do you supply?",
    answer: "We source and assemble tier-1 enterprise hardware from Dell, HP, Lenovo, ASUS, Intel, AMD, Ubiquiti UniFi, and NVIDIA. For creative and CAD studios, we build custom liquid-cooled multi-GPU rendering rigs benchmarked with 48-hour burn-in stress tests prior to delivery.",
  },
  {
    id: "hw-2",
    category: "Hardware & IT",
    question: "Do you provide on-site IT networking and support in Ludhiana and Punjab?",
    answer: "Yes. Our technicians execute complete turnkey physical office setups: structured Cat6/Fiber cabling, server racks, managed switches, enterprise UniFi WiFi mesh, and biometric access control across Ludhiana, Jalandhar, Chandigarh, and surrounding industrial hubs.",
  },
  {
    id: "hw-3",
    category: "Hardware & IT",
    question: "How are hardware warranties handled?",
    answer: "All hardware components are genuine commercial-grade products backed by official manufacturer OEM warranties (e.g., Dell ProSupport, HP on-site care, Intel 3-year box warranties). Syntrixmesh facilitates warranty claims and immediate temporary replacement units where applicable.",
  },

  // Web3
  {
    id: "web3-1",
    category: "Web3",
    question: "What type of blockchain and smart contract development do you undertake?",
    answer: "We engineer production-ready decentralized applications (dApps), Solidity smart contracts on Polygon, Ethereum, and Arbitrum, and institutional Real-World Asset (RWA) tokenization protocols using ERC-3643 and OpenZeppelin audited libraries.",
  },
  {
    id: "web3-2",
    category: "Web3",
    question: "How do you ensure smart contracts are secure against exploits?",
    answer: "We enforce rigorous development protocols: Foundry fuzzing tests, static security analysis using Slither and Mythril, and multi-signature access controls. We prepare comprehensive audit packages prior to any mainnet contract deployment.",
  },

  // Pricing & Support
  {
    id: "prc-1",
    category: "Pricing & Support",
    question: "How is billing structured for development and IT projects?",
    answer: "We do not believe in one-size-fits-all fixed packages that compromise code quality. Most projects operate on a milestone-based billing schedule: an agreed mobilization advance (typically 30-40%), followed by progressive milestone disbursements tied directly to tangible, inspectable deliverables.",
  },
  {
    id: "prc-2",
    category: "Pricing & Support",
    question: "Do you offer ongoing monthly maintenance and support after launch?",
    answer: "Yes. We offer flexible post-launch SLA retainers covering proactive security updates, cloud server monitoring, database backups, bug fixes, and feature iterations with guaranteed response times.",
  },
];
