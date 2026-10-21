export interface Project {
  id: string;
  title: string;
  client: string;
  category: "development" | "software-engineering" | "digital-marketing" | "hardware-it" | "ai-automation" | "web3-dapps";
  categoryLabel: string;
  description: string;
  challenge: string;
  solution: string;
  metrics: string[];
  tags: string[];
  image: string;
  year: string;
  link?: string;
}

export const portfolioProjects: Project[] = [
  {
    id: "apex-industrial-erp",
    title: "Apex Cloud ERP & Real-Time Logistics Portal",
    client: "Apex Manufacturing Industries, Ludhiana",
    category: "software-engineering",
    categoryLabel: "Software Engineering",
    description: "An automated cloud ERP that unified 4 factory locations, tracking raw material procurement, CNC line telemetry, and dispatch logistics.",
    challenge: "Disjointed desktop software and manual paperwork caused inventory inaccuracies and 3-day delays in production reporting.",
    solution: "Syntrixmesh architected a cloud-native Next.js + Node.js microservices system with PostgreSQL, Redis cache, and live IoT factory line telemetry.",
    metrics: ["-85% Inventory Discrepancies", "Real-Time Tracking Across 4 Mills", "10,000+ Orders Processed/Mo"],
    tags: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Redis", "IoT APIs"],
    image: "/images/portfolio/erp.jpg",
    year: "2025"
  },
  {
    id: "omni-ai-conversations",
    title: "24/7 Multilingual AI Sales & Support Agent",
    client: "Valo Logistics & Express Freight",
    category: "ai-automation",
    categoryLabel: "AI & Automation",
    description: "A context-aware AI agent integrated directly into WhatsApp and Web chat, trained on 1,500 shipping lanes and customs rules.",
    challenge: "International shippers in Europe and the US called during night hours in India, resulting in 40% lost quotes and delayed customs guidance.",
    solution: "Engineered a RAG-based AI agent using vector embeddings that answers rate queries, generates instant PDF quotes, and books freight autonomously.",
    metrics: ["+320% After-Hours Inquiries", "2-Second Instant Reply Time", "$45K Monthly Support Savings"],
    tags: ["AI Agents", "OpenAI LLM", "RAG Pipeline", "WhatsApp Cloud API", "Pinecone"],
    image: "/images/portfolio/ai-agent.jpg",
    year: "2025"
  },
  {
    id: "luxe-ecommerce-storefront",
    title: "Headless E-Commerce & Global Checkout Engine",
    client: "Aurum Couture & Lifestyle",
    category: "development",
    categoryLabel: "Development",
    description: "Ultra-fast headless luxury storefront with sub-second page transitions, dynamic multi-currency payments, and 3D product previews.",
    challenge: "Previous legacy Shopify theme had a 4.8 second mobile load time, resulting in a high 68% mobile cart abandonment rate.",
    solution: "Rebuilt as a Next.js App Router headless storefront with Shopify Storefront API, Tailwind CSS, Stripe Global, and automated image edge optimization.",
    metrics: ["99 Core Web Vitals Score", "+142% Mobile Conversion Rate", "650ms Global Page Load"],
    tags: ["Next.js App Router", "Tailwind CSS", "Shopify GraphQL", "Stripe", "Framer Motion"],
    image: "/images/portfolio/ecommerce.jpg",
    year: "2024"
  },
  {
    id: "high-density-workstation-lab",
    title: "Enterprise Studio IT Setup & Multi-GPU Workstations",
    client: "VoxelMotion CGI Studios",
    category: "hardware-it",
    categoryLabel: "Hardware & IT",
    description: "Turnkey hardware procurement, custom liquid-cooled 4x RTX 4090 workstations, and 10Gbps fiber storage network for animation rendering.",
    challenge: "Render bottlenecks on consumer hardware were halting production schedules on high-budget 4K commercial VFX projects.",
    solution: "Syntrixmesh sourced, built, and benchmarked 12 custom workstation rigs with server-grade ECC memory, liquid cooling, and structured 10GbE fiber LAN.",
    metrics: ["4.5x Faster 4K Render Times", "Zero Overheating Throttling", "100% 24/7 Uptime Over 18 Mos"],
    tags: ["NVIDIA RTX 4090", "10GbE Fiber LAN", "Custom Liquid Cooling", "Server Rack", "IT Support"],
    image: "/images/portfolio/hardware.jpg",
    year: "2024"
  },
  {
    id: "pan-india-google-ads-growth",
    title: "High-Intent B2B Lead Gen & Google Ads Scaling",
    client: "SteelCraft Global Equipment",
    category: "digital-marketing",
    categoryLabel: "Digital Marketing",
    description: "Laser-targeted Google Search & Display campaign combined with high-converting technical landing pages for heavy machinery exports.",
    challenge: "High cost-per-click on broad generic keywords yielding non-commercial consumer queries and wasting ad budgets.",
    solution: "Overhauled campaign architecture with exact-match negative keyword rings, localized geographic bid adjustments, and high-converting landing pages.",
    metrics: ["+280% Qualified B2B Leads", "38% Reduction in Cost Per Lead", "4.8x Return on Ad Spend (ROAS)"],
    tags: ["Google Ads", "Conversion Rate Optimization", "Technical SEO", "Analytics 4", "Landing Pages"],
    image: "/images/portfolio/marketing.jpg",
    year: "2024"
  },
  {
    id: "zenith-rwa-protocol",
    title: "Real-World Asset (RWA) Tokenization Protocol",
    client: "Zenith Capital Assets",
    category: "web3-dapps",
    categoryLabel: "Web3 & Dapps",
    description: "ERC-3643 compliant permissioned tokenization protocol for institutional commercial real estate shares with verified KYC whitelisting.",
    challenge: "Complex regulatory compliance and gas consumption on Ethereum mainnet made small-fraction real estate investment infeasible.",
    solution: "Engineered gas-optimized smart contracts on Polygon with automated dividend yield distribution and decentralized identity verification.",
    metrics: ["$12M+ Assets Tokenized", "Zero Vulnerabilities in Formal Audit", "<$0.02 Average Gas Fee"],
    tags: ["Solidity", "Polygon", "Wagmi / Viem", "Foundry", "OpenZeppelin", "ERC-3643"],
    image: "/images/portfolio/web3.jpg",
    year: "2025"
  }
];
