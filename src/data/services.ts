export interface SubService {
  title: string;
  description: string;
  features: string[];
}

export interface Benefit {
  title: string;
  description: string;
  stat?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  tagline: string;
  oneLiner: string;
  overview: string;
  accentColor: string;
  gradient: string;
  iconName: string;
  subServices: SubService[];
  benefits: Benefit[];
  process: ProcessStep[];
  faqs: FAQ[];
}

export interface ServiceNavItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  oneLiner: string;
}

export const servicesNav: ServiceNavItem[] = [
  {
    id: "development",
    slug: "development",
    title: "Web & Mobile Development",
    shortTitle: "Development",
    tagline: "High-performance web apps & mobile solutions",
    oneLiner: "Bespoke web apps, fast e-commerce & native-feel iOS/Android apps.",
  },
  {
    id: "software-engineering",
    slug: "software-engineering",
    title: "Custom Software Engineering",
    shortTitle: "Software",
    tagline: "Enterprise cloud microservices & scalable backends",
    oneLiner: "Type-safe microservices, custom ERPs, and resilient APIs.",
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    shortTitle: "Marketing & SEO",
    tagline: "Data-driven SEO & high-conversion ad campaigns",
    oneLiner: "Technical SEO, Google Ads scaling, and performance marketing.",
  },
  {
    id: "hardware-it",
    slug: "hardware-it",
    title: "IT Infrastructure & Hardware",
    shortTitle: "IT & Hardware",
    tagline: "Workstation builds & high-speed office networking",
    oneLiner: "High-power workstations, UniFi networks & server deployments.",
  },
  {
    id: "ai-chat-automation",
    slug: "ai-chat-automation",
    title: "AI Chat & Workflow Automation",
    shortTitle: "AI Automation",
    tagline: "24/7 autonomous WhatsApp bots & AI workflows",
    oneLiner: "Autonomous WhatsApp bots, CRM automations & multi-turn AI agents.",
  },
  {
    id: "web3-dapps",
    slug: "web3-dapps",
    title: "Web3 Protocols & Smart Contracts",
    shortTitle: "Web3 & Blockchain",
    tagline: "Secure smart contracts & audited dApps",
    oneLiner: "Solidity smart contracts, token standards & DeFi integrations.",
  },
];

export const servicesData: ServiceCategory[] = [
  {
    id: "development",
    slug: "development",
    title: "Web & Mobile Development",
    shortTitle: "Development",
    badge: "Full-Stack & Mobile Apps",
    tagline: "High-performance web applications, enterprise portals, and intuitive iOS/Android apps built for speed, scale, and conversion.",
    oneLiner: "Bespoke web apps, fast e-commerce stores, and native-feel iOS & Android apps.",
    overview: "Recognized as a leading web development company in Ludhiana, Syntrixmesh Solutions engineers high-performance digital platforms that turn complex enterprise workflows into fluid, sub-second web and mobile experiences. Utilizing Next.js 14 App Router, React Native, and type-safe microservices, we build scalable platforms for businesses in Punjab and across global markets that delight users and drive measurable commercial revenue.",
    accentColor: "#2FB8FF",
    gradient: "from-[#2FB8FF] to-[#1E6BFF]",
    iconName: "Code2",
    subServices: [
      {
        title: "Web Application Development",
        description: "Bespoke SaaS platforms, internal business portals, and cloud-native dashboards built with Next.js and React for ultimate responsiveness.",
        features: [
          "Next.js App Router, SSR, and ISR architecture",
          "Real-time WebSocket data synchronization",
          "Role-based access control (RBAC) & OAuth 2.0 security",
          "Automated CI/CD pipelines with Vercel and AWS deployment"
        ]
      },
      {
        title: "Business & E-Commerce Websites",
        description: "Ultra-fast headless digital storefronts and corporate websites engineered for 95+ Core Web Vitals and high conversion rates.",
        features: [
          "Headless Shopify, WooCommerce, and custom carts",
          "Multi-currency Stripe, Razorpay & PayPal checkout integrations",
          "Dynamic product recommendation and search filters",
          "Mobile-first responsive UX optimized for high average order value"
        ]
      },
      {
        title: "Mobile Application Development",
        description: "Cross-platform iOS and Android applications built with React Native that deliver 60 FPS fluidity and full native device capabilities.",
        features: [
          "Cross-platform code sharing for 40% faster time-to-market",
          "Biometric authentication (FaceID, Fingerprint)",
          "Offline-first synchronization with SQLite and local storage",
          "Seamless App Store & Google Play submission and updates"
        ]
      }
    ],
    benefits: [
      {
        title: "Sub-Second Page Loads",
        description: "Zero bloat. Optimized server rendering and asset delivery that drops bounce rates by up to 45%.",
        stat: "< 600ms"
      },
      {
        title: "100% Code & IP Ownership",
        description: "No vendor lock-in. Complete Git repository, cloud credentials, and intellectual property handed to you.",
        stat: "100%"
      },
      {
        title: "SEO-First Semantic Architecture",
        description: "Built-in dynamic metadata, OpenGraph cards, and schema injection for top Google ranking.",
        stat: "#1 Rank"
      },
      {
        title: "Enterprise Grade Scalability",
        description: "Modular TypeScript codebases ready to support millions of active monthly users without refactoring.",
        stat: "10x Scale"
      }
    ],
    process: [
      {
        step: "01",
        title: "Scoping & Wireframes",
        subtitle: "Architecture Blueprint",
        description: "We map user journeys, system schemas, and deliver interactive Figma prototypes for your approval."
      },
      {
        step: "02",
        title: "Frontend Engineering",
        subtitle: "Component Systems",
        description: "Pixel-perfect TypeScript implementation with Tailwind CSS and smooth micro-interactions."
      },
      {
        step: "03",
        title: "Backend & API Plumbing",
        subtitle: "Database & Microservices",
        description: "Secure REST/GraphQL endpoints, database indexing, and authentication integrations."
      },
      {
        step: "04",
        title: "QA & Performance Hardening",
        subtitle: "Stress & Vulnerability Audits",
        description: "Cross-browser testing, automated unit tests, and 95+ Google Lighthouse audits."
      },
      {
        step: "05",
        title: "Production Launch & Care",
        subtitle: "Live CDN Deployment",
        description: "Zero-downtime DNS propagation, live telemetry alerts, and 30-day post-launch warranty."
      }
    ],
    faqs: [
      {
        question: "How long does a custom web application take to develop?",
        answer: "A standard MVP typically takes between 4 to 8 weeks depending on complexity. Enterprise platforms are phased across 2-week agile sprints with continuous staging previews."
      },
      {
        question: "Do you build for both Apple iOS and Android?",
        answer: "Yes, we specialize in React Native and Flutter, allowing a unified, battle-tested codebase to run natively on both iOS and Android, saving substantial development and maintenance costs."
      },
      {
        question: "Will I have full access and ownership of the source code?",
        answer: "Absolutely. All GitHub repositories, cloud infrastructure, and documentation are 100% transferred to your organization upon project completion."
      },
      {
        question: "Can you modernize our existing website or web app?",
        answer: "Yes. We frequently migrate legacy WordPress, PHP, or older React applications into modern Next.js App Router applications with zero downtime."
      },
      {
        question: "Do you provide post-launch maintenance and feature updates?",
        answer: "Yes, we offer flexible monthly SLA maintenance retainers that cover security patches, bug fixes, feature iterations, and cloud server monitoring."
      }
    ]
  },
  {
    id: "software-engineering",
    slug: "software-engineering",
    title: "Software Engineering & APIs",
    shortTitle: "Software Engineering",
    badge: "Core Architecture & APIs",
    tagline: "Enterprise-grade backend architectures, resilient microservices, high-throughput REST/GraphQL APIs, and legacy system modernization.",
    oneLiner: "Custom ERPs, resilient cloud microservices, and high-throughput API integrations.",
    overview: "Software engineering is the backbone of modern enterprise scale. Specializing in custom software development in Punjab with international delivery, Syntrixmesh Solutions designs fault-tolerant cloud backends, custom ERPs, and distributed microservices that eliminate data silos, automate operational bottlenecks, and perform reliably under intense enterprise concurrency.",
    accentColor: "#1E6BFF",
    gradient: "from-[#1E6BFF] to-[#2FB8FF]",
    iconName: "Cpu",
    subServices: [
      {
        title: "Custom Software Development",
        description: "Tailor-made ERPs, supply chain portals, and internal workflow engines engineered specifically around your organizational structure.",
        features: [
          "Domain-driven design & clean architecture principles",
          "Automated financial reconciliation & custom reporting",
          "PostgreSQL, Redis, and MongoDB distributed database design",
          "Enterprise SSO (Single Sign-On) and MFA authentication"
        ]
      },
      {
        title: "System Architecture & APIs",
        description: "High-throughput RESTful and GraphQL API pipelines connecting disparate systems with real-time webhooks and queuing.",
        features: [
          "Event-driven architecture with Kafka, RabbitMQ, and Redis Pub/Sub",
          "OpenAPI / Swagger interactive living documentation",
          "Granular API rate limiting, token throttling & DDoS mitigation",
          "Sub-10ms cached response pipelines via Redis clusters"
        ]
      },
      {
        title: "Maintenance & Upgrades",
        description: "Monolithic to microservices refactoring, database migrations, and proactive 24/7 technical operations support.",
        features: [
          "Strangler fig pattern for zero-downtime legacy modernizations",
          "Automated cloud backups and disaster recovery runbooks",
          "Telemetry dashboards with Sentry, Prometheus, and Datadog",
          "Scheduled dependency audits and vulnerability remediation"
        ]
      }
    ],
    benefits: [
      {
        title: "99.99% Operational Uptime",
        description: "Self-healing microservices and automated failover queues that eliminate business interruptions.",
        stat: "99.99%"
      },
      {
        title: "Eliminate Tool Silos",
        description: "Connect legacy software, modern SaaS, and custom databases into a single unified truth.",
        stat: "1 Hub"
      },
      {
        title: "Radical Concurrency",
        description: "Handle tens of thousands of concurrent API requests without latency degradation.",
        stat: "50k req/s"
      },
      {
        title: "Zero Technical Debt",
        description: "Strict TypeScript types, automated linting, and 85%+ test coverage for frictionless iteration.",
        stat: "Clean Code"
      }
    ],
    process: [
      {
        step: "01",
        title: "Architecture & Data Modeling",
        subtitle: "Entity Relationship Design",
        description: "Deep dive into your operational workflows, data flows, and infrastructure capacity requirements."
      },
      {
        step: "02",
        title: "Microservice Core Build",
        subtitle: "Type-Safe Backend Logic",
        description: "Building resilient services in Node.js/TypeScript, Python, and Go with transactional boundaries."
      },
      {
        step: "03",
        title: "API Gateway & Security",
        subtitle: "Authentication & Rate Limits",
        description: "Deploying secure reverse proxies, JWT/OAuth validation, and automated request validation."
      },
      {
        step: "04",
        title: "Stress & Chaos Testing",
        subtitle: "Simulated Peak Concurrency",
        description: "Benchmarking performance under 10x traffic bursts and verifying automated container recovery."
      },
      {
        step: "05",
        title: "Continuous Observability",
        subtitle: "Telemetry & Sentry Setup",
        description: "Configuring real-time alerts, distributed tracing, and SLA-backed ongoing operational support."
      }
    ],
    faqs: [
      {
        question: "Can you modernize our legacy desktop software into a modern cloud app?",
        answer: "Yes, we specialize in converting outdated desktop software or legacy monolithic systems into cloud-native web applications using modern databases and secure web interfaces."
      },
      {
        question: "What backend tech stacks does Syntrixmesh use?",
        answer: "We primarily engineer with Node.js/TypeScript, Python (FastAPI/Django), Go, PostgreSQL, Redis, Docker, and AWS serverless infrastructure."
      },
      {
        question: "How do you handle API documentation for our external partners?",
        answer: "We auto-generate interactive Swagger/OpenAPI documentation and sandbox environments so your partners can integrate in days rather than months."
      },
      {
        question: "Do you offer database migration services?",
        answer: "Yes. We execute zero-downtime database migrations, schema normalizations, and data cleaning from legacy formats into modern cloud databases like PostgreSQL and MongoDB."
      },
      {
        question: "How do you ensure data security and compliance?",
        answer: "All communication is encrypted via TLS 1.3, sensitive database fields are encrypted at rest with AES-256, and we enforce strict role-based access control (RBAC)."
      }
    ]
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    shortTitle: "Digital Marketing",
    badge: "Growth & Search Visibility",
    tagline: "Laser-focused Google Ads, data-driven technical SEO, and conversion funnels that transform search intent into recurring revenue.",
    oneLiner: "Targeted Google Ads, technical SEO audits, and high-converting B2B lead generation.",
    overview: "Even extraordinary software needs high-intent distribution. Syntrixmesh Solutions provides premier digital marketing and SEO services in Ludhiana, combining deep technical software expertise with performance growth marketing: we engineer sub-second landing pages, execute technical Core Web Vitals audits, and manage precision Google Ads campaigns that generate measurable B2B pipeline and ROI.",
    accentColor: "#C9A24B",
    gradient: "from-[#F4DB96] to-[#C9A24B]",
    iconName: "TrendingUp",
    subServices: [
      {
        title: "Google Ads & Paid Campaigns",
        description: "Data-driven Search, Display, and Performance Max campaigns with strict negative keyword rings and bid optimizations.",
        features: [
          "Exact-match keyword grouping and commercial intent focus",
          "Advanced server-side conversion tracking & Google Tag Manager",
          "A/B creative testing for maximum click-through rates (CTR)",
          "Dynamic retargeting sequences across YouTube and Google Display"
        ]
      },
      {
        title: "SEO & Search Visibility",
        description: "Technical SEO audits, programmatic page architecture, and authoritative content strategies that achieve Page 1 dominance.",
        features: [
          "Core Web Vitals & Google mobile-first indexing audits",
          "Schema markup injection (LocalBusiness, Organization, Product)",
          "Competitor keyword gap analysis and content cluster planning",
          "High-authority white-hat digital PR and backlink acquisition"
        ]
      },
      {
        title: "Targeted Organic Marketing",
        description: "Conversion rate optimization (CRO), automated email lead nurturing, and B2B LinkedIn outreach systems.",
        features: [
          "Heatmap and user session recording analysis",
          "Multi-step automated email lead magnets and drip sequences",
          "High-converting landing page copywriting and visual layout",
          "Bi-weekly transparent analytics dashboard and pipeline reports"
        ]
      }
    ],
    benefits: [
      {
        title: "3.5x to 5x Target ROAS",
        description: "Every marketing dollar is tracked directly to pipeline value and verified sales calls.",
        stat: "4.8x ROAS"
      },
      {
        title: "Commercial Intent Only",
        description: "Negative keyword filtering eliminates wasted spend on non-commercial consumer clicks.",
        stat: "-40% Waste"
      },
      {
        title: "Tech + Marketing Synergy",
        description: "Because our engineers build the landing pages, page load is instant, doubling conversion rates.",
        stat: "2x Conversions"
      },
      {
        title: "Compounding Organic Equity",
        description: "Build an enduring organic search footprint so your business isn't permanently captive to ad spend.",
        stat: "Top 3 SERP"
      }
    ],
    process: [
      {
        step: "01",
        title: "Competitor & Keyword X-Ray",
        subtitle: "Market Intelligence",
        description: "We uncover high-intent search terms, competitor bidding strategies, and conversion drop-offs."
      },
      {
        step: "02",
        title: "Tracking Plumbing & Setup",
        subtitle: "Conversion Infrastructure",
        description: "Implementing server-side Google Tag Manager, GA4 events, and offline conversion imports."
      },
      {
        step: "03",
        title: "Campaign & Landing Page Build",
        subtitle: "High-Converting Assets",
        description: "Crafting persuasive technical copy, fast landing pages, and tightly themed ad groups."
      },
      {
        step: "04",
        title: "Launch & Negative Pruning",
        subtitle: "Bid Optimization",
        description: "Daily search term review, negative keyword pruning, and algorithmic Smart Bidding calibration."
      },
      {
        step: "05",
        title: "Scale & Transparent Reporting",
        subtitle: "Bi-Weekly ROI Reviews",
        description: "Scaling winning keywords and providing real-time Looker Studio dashboards for full visibility."
      }
    ],
    faqs: [
      {
        question: "How quickly can we see results from Google Ads vs SEO?",
        answer: "Google Ads can begin driving qualified inbound phone calls and inquiries within 48 to 72 hours of campaign activation. SEO is a compounding channel that usually delivers noticeable ranking and traffic growth within 60 to 90 days."
      },
      {
        question: "Do you design the landing pages as well?",
        answer: "Yes, this is our biggest competitive advantage. Because we are an engineering firm, we design and code ultra-fast, bespoke landing pages that convert 2x higher than generic WordPress pages."
      },
      {
        question: "How do you track whether clicks actually turn into customers?",
        answer: "We implement end-to-end tracking: Google Tag Manager triggers on form submissions, call-tracking numbers record inbound calls, and CRM webhooks map offline sales back to Google Ads."
      },
      {
        question: "What monthly ad budget do you recommend starting with?",
        answer: "For most B2B and regional services, we recommend an initial Google Ads ad spend budget of ₹30,000 to ₹1,00,000 ($500 to $1,500/mo) depending on industry competition."
      },
      {
        question: "Do you provide transparent access to ad accounts?",
        answer: "Always. The Google Ads and Analytics accounts are 100% owned by your company. You have full administrative access at all times."
      }
    ]
  },
  {
    id: "hardware-it",
    slug: "hardware-it",
    title: "Hardware & IT Infrastructure",
    shortTitle: "Hardware & IT",
    badge: "Enterprise IT & Workstations",
    tagline: "Industrial-grade PC hardware procurement, custom high-performance workstations, enterprise networking, and complete workplace IT deployments.",
    oneLiner: "Commercial PC supply, bespoke rendering workstations, UniFi networking & IT AMC.",
    overview: "Software is only as dependable as the physical machines and networks powering it. Syntrixmesh Solutions is the premier partner for enterprise IT hardware and workstation builds in Ludhiana, delivering complete on-premise computing infrastructure for corporate headquarters, industrial manufacturing plants, and creative studios. From rackmount servers and UniFi WiFi mesh to custom multi-GPU rendering workstations, we ensure your team never faces hardware bottlenecks.",
    accentColor: "#2FB8FF",
    gradient: "from-[#2FB8FF] to-[#0A0F1C]",
    iconName: "Server",
    subServices: [
      {
        title: "PC Hardware & Component Supply",
        description: "Authorized procurement of commercial-grade laptops, desktops, server components, and enterprise monitors at competitive volume rates.",
        features: [
          "Tier-1 enterprise vendor supply (Dell, HP, Lenovo, ASUS, Intel)",
          "Commercial warranties and express on-site part replacements",
          "Bulk corporate leasing and phased hardware refreshes",
          "Factory-sealed, genuine enterprise parts with full documentation"
        ]
      },
      {
        title: "Custom Workstation & Builds",
        description: "Bespoke high-compute workstations engineered for 3D CGI rendering, CAD engineering, AI model training, and heavy video editing.",
        features: [
          "Multi-GPU architecture (NVIDIA RTX Ada / 4090 / Quadro)",
          "Overclocked ECC RAM and high-speed PCIe 5.0 NVMe storage",
          "Custom enterprise liquid-cooling and acoustic-dampened cases",
          "48-hour hardware burn-in benchmarks prior to delivery"
        ]
      },
      {
        title: "Complete IT Setup & Support",
        description: "Turnkey office IT deployments including structured Cat6/Fiber cabling, UniFi access points, firewall switches, CCTV, and AMC support.",
        features: [
          "Structured gigabit Cat6/Fiber optical networking and patch panels",
          "Enterprise UniFi WiFi mesh with zero-handoff roaming",
          "Active Directory, NAS backup servers & secure IPsec VPNs",
          "Guaranteed SLA response times with on-site support in Punjab and North India"
        ]
      }
    ],
    benefits: [
      {
        title: "Zero Hardware Bottlenecks",
        description: "Hardware precisely matched to your team's software demands, eliminating render or compile lags.",
        stat: "4x Faster"
      },
      {
        title: "Single Source of Truth",
        description: "No finger-pointing between software developers and hardware suppliers; we support both.",
        stat: "1 Partner"
      },
      {
        title: "Local Ludhiana Dispatch",
        description: "Rapid on-site technician response across Ludhiana, Jalandhar, Chandigarh, and Punjab.",
        stat: "Rapid SLA"
      },
      {
        title: "Commercial Durability",
        description: "Industrial components designed for 24/7 continuous operation without thermal throttling.",
        stat: "24/7 Uptime"
      }
    ],
    process: [
      {
        step: "01",
        title: "Infrastructure & Compute Audit",
        subtitle: "Workload Analysis",
        description: "Auditing software workloads, network bandwidth requirements, and planned headcount."
      },
      {
        step: "02",
        title: "Procurement & Custom Assembly",
        subtitle: "Tier-1 Components",
        description: "Sourcing enterprise components, precision assembly, cable management, and thermal testing."
      },
      {
        step: "03",
        title: "48-Hour Burn-In Stress Test",
        subtitle: "Reliability Verification",
        description: "Stress testing CPU, GPU, memory, and storage under 100% load to eliminate defective parts."
      },
      {
        step: "04",
        title: "On-Site Network Deployment",
        subtitle: "Structured Cabling & WiFi",
        description: "Rack mounting, managed switch configuration, firewall rules, and employee workstation setups."
      },
      {
        step: "05",
        title: "Preventive AMC & SLA Care",
        subtitle: "Ongoing Maintenance",
        description: "Scheduled preventive maintenance, firmware updates, and rapid hardware swap support."
      }
    ],
    faqs: [
      {
        question: "Can you set up an entire office's IT infrastructure from scratch?",
        answer: "Yes, we handle complete turnkey office setups: structured Cat6/Fiber cabling, server racks, managed switches, enterprise UniFi WiFi, CCTV cameras, UPS power backups, and employee workstations."
      },
      {
        question: "Do you offer Annual Maintenance Contracts (AMC) for businesses?",
        answer: "Yes, we offer monthly and annual IT AMC plans with guaranteed SLA response times for businesses in Ludhiana and across North India."
      },
      {
        question: "Can you build custom workstations for CAD and 3D rendering?",
        answer: "Yes. We hand-build custom multi-GPU workstations with liquid cooling and ECC memory specifically benchmarked for AutoCAD, SolidWorks, Blender, and Unreal Engine."
      },
      {
        question: "What brand hardware do you supply?",
        answer: "We are authorized partners for enterprise lines from Dell, HP, Lenovo, ASUS, Ubiquiti UniFi, Cisco, Intel, AMD, and NVIDIA."
      },
      {
        question: "How quickly do your technicians respond for on-site emergencies?",
        answer: "For clients on our priority IT AMC plans in Ludhiana and nearby regions, we offer on-site technician dispatch within 2 to 4 hours."
      }
    ]
  },
  {
    id: "ai-chat-automation",
    slug: "ai-chat-automation",
    title: "AI Chat & Automation",
    shortTitle: "AI Automation",
    badge: "Autonomous AI Agents",
    tagline: "Autonomous AI agents, 24/7 customer conversation bots, and context-aware business automations custom-trained on your internal business data.",
    oneLiner: "WhatsApp AI agents, 24/7 lead conversion bots, and RAG automation trained on your data.",
    overview: "Turn manual customer support and repetitive business operations into autonomous competitive advantages. Syntrixmesh Solutions engineers custom AI chatbot and WhatsApp automation for business, powered by OpenAI, Claude, and local open-source LLMs. Trained on your exact company data, our 24/7 AI agents answer customer inquiries instantly, qualify leads, and trigger internal workflows round-the-clock.",
    accentColor: "#69D2FF",
    gradient: "from-[#69D2FF] to-[#1E6BFF]",
    iconName: "Bot",
    subServices: [
      {
        title: "Business Chat Automation & AI Agents",
        description: "Autonomous multi-channel AI agents deployed on WhatsApp, web chat, Telegram, and Slack that conduct natural, persuasive customer conversations.",
        features: [
          "Meta WhatsApp Business Cloud API official integration",
          "Autonomous lead qualification, meeting scheduling & quote generation",
          "Real-time CRM data synchronization (HubSpot, Salesforce, Zoho)",
          "Seamless live human agent handover when complex edge cases arise"
        ]
      },
      {
        title: "24/7 Automated Customer Conversations",
        description: "Eliminate customer wait times forever. Answer FAQs, verify order statuses, issue invoices, and collect feedback 24 hours a day, 365 days a year.",
        features: [
          "Instant sub-second response times in 50+ languages",
          "Automated tracking number, inventory, and invoice lookups",
          "Context-aware memory retaining multi-turn conversation history",
          "Never miss a high-ticket international buyer outside Indian office hours"
        ]
      },
      {
        title: "Custom-Trained on Business Data",
        description: "Retrieval-Augmented Generation (RAG) pipelines that ingest your internal PDFs, manuals, inventory databases, and policies with zero hallucinations.",
        features: [
          "Vector database embeddings (Pinecone, pgvector, Qdrant)",
          "Enterprise data privacy and SOC2-compliant data isolation",
          "Dynamic knowledge-base auto-updating from your CMS/Notion",
          "Context-aware guardrails preventing incorrect answers"
        ]
      }
    ],
    benefits: [
      {
        title: "70% Support Cost Reduction",
        description: "Automate repetitive tier-1 customer inquiries while dramatically reducing staffing overhead.",
        stat: "-70% Cost"
      },
      {
        title: "Sub-2-Second Replies",
        description: "No customer ever waits in a queue again. Instant responses 24 hours a day, 365 days a year.",
        stat: "< 2s"
      },
      {
        title: "Trained Only on Your Data",
        description: "Strict RAG guardrails ensure the AI only speaks what you approve—accurate pricing, exact terms, and specific specs.",
        stat: "Zero Hallucination"
      },
      {
        title: "Direct WhatsApp Engagement",
        description: "Engage Indian and global prospects on the world's most popular messaging app.",
        stat: "98% Open Rate"
      }
    ],
    process: [
      {
        step: "01",
        title: "Knowledge Base Ingestion",
        subtitle: "Company Data Extraction",
        description: "We ingest your product catalogs, PDF manuals, pricing sheets, past support tickets, and FAQs."
      },
      {
        step: "02",
        title: "Vector Embedding & RAG Architecture",
        subtitle: "Semantic Retrieval Setup",
        description: "Chunking and indexing your data into vector databases with strict boundary guardrails."
      },
      {
        step: "03",
        title: "Prompt Engineering & Brand Persona",
        subtitle: "Tone & Voice Calibration",
        description: "Fine-tuning the AI's personality to match your corporate brand tone and objection-handling playbook."
      },
      {
        step: "04",
        title: "Omnichannel API Hookup",
        subtitle: "WhatsApp & CRM Integration",
        description: "Connecting the AI brain to WhatsApp Business API, website chat widgets, and your CRM."
      },
      {
        step: "05",
        title: "Supervised Beta & Deployment",
        subtitle: "Real-World Benchmark",
        description: "Simulating 500+ customer scenarios, tuning accuracy, and launching with real-time analytics."
      }
    ],
    faqs: [
      {
        question: "Can the AI agent make mistakes or give wrong prices to customers?",
        answer: "We use strict Retrieval-Augmented Generation (RAG) with confidence thresholds and guardrails. If a query falls outside the trained business data, the AI politely refers the customer to a human executive or captures their phone number for follow-up."
      },
      {
        question: "Will the AI work directly on WhatsApp?",
        answer: "Yes! We integrate with the official Meta WhatsApp Business Cloud API so your customers can interact naturally on WhatsApp with verified business credentials."
      },
      {
        question: "How long does it take to train and launch an AI chat agent?",
        answer: "A standard customized AI agent trained on your internal documentation and integrated into WhatsApp and your website typically launches in 10 to 14 business days."
      },
      {
        question: "Is our proprietary company data safe and confidential?",
        answer: "100%. We ensure your data is isolated in private vector databases and never used to train public foundational models. Strict NDAs and enterprise data privacy protections apply."
      },
      {
        question: "Can the AI agent book meetings directly on our Google Calendar or CRM?",
        answer: "Yes, our AI agents can check real-time availability on Calendly, Google Calendar, or HubSpot, offer open slots, and book meetings directly within the chat."
      }
    ]
  },
  {
    id: "web3-dapps",
    slug: "web3-dapps",
    title: "Web3 & Decentralized Apps",
    shortTitle: "Web3 & Dapps",
    badge: "Decentralized Systems & Smart Contracts",
    tagline: "Secure smart contracts, institutional tokenization protocols, interactive Web3 dApps, and audited blockchain integrations.",
    oneLiner: "Solidity smart contracts, tokenization protocols, and audited Web3 dApps.",
    overview: "Web3 is reshaping how assets, identity, and ownership are transferred globally. Syntrixmesh Solutions specializes in institutional Web3 and smart contract development, engineering production-ready decentralized applications (dApps), Solidity and Rust smart contracts, real-world asset (RWA) tokenization protocols, and gas-optimized web interfaces with frictionless onboarding.",
    accentColor: "#C9A24B",
    gradient: "from-[#C9A24B] to-[#2FB8FF]",
    iconName: "Layers",
    subServices: [
      {
        title: "Web3 Websites & Dapps Development",
        description: "Responsive Next.js dApp interfaces with seamless wallet integration (MetaMask, Coinbase, Phantom, WalletConnect) and gas-optimized transactions.",
        features: [
          "Wagmi, Viem, and Ethers.js integration",
          "Social logins and Account Abstraction (ERC-4337)",
          "IPFS & Arweave decentralized storage hosting",
          "Custom WebGL and 3D token visualization"
        ]
      },
      {
        title: "Tokenization & NFTs Creation",
        description: "Asset tokenization standards (ERC-20, ERC-721, ERC-1155) for real-world assets (RWA), loyalty programs, generative collections, and governance.",
        features: [
          "Custom royalty splits and marketplace contracts",
          "Dynamic metadata generation and whitelist merkle trees",
          "Real-World Asset (RWA) fractionalization models",
          "Staking protocols and yield distribution smart contracts"
        ]
      },
      {
        title: "Smart Contracts & Protocol Creation",
        description: "Battle-tested smart contracts in Solidity and Rust, audited for security vulnerabilities (reentrancy, integer overflow, flash loans) and gas efficiency.",
        features: [
          "Hardhat, Foundry, and OpenZeppelin framework security",
          "Automated fuzzing and static analysis (Slither, Mythril)",
          "Cross-chain bridge integration (Polygon, Ethereum, Arbitrum, Solana)",
          "Full audit preparation and comprehensive deployment scripts"
        ]
      }
    ],
    benefits: [
      {
        title: "Audited & Hack-Proof",
        description: "100% test coverage with Foundry and static security analyzers to eliminate vulnerabilities.",
        stat: "Zero Exploit"
      },
      {
        title: "Frictionless Web2-Like Onboarding",
        description: "Enable users to log in with email or social accounts without needing prior crypto experience.",
        stat: "ERC-4337"
      },
      {
        title: "Gas-Optimized Logic",
        description: "Minimizing bytecode and storage operations to save your users transaction gas fees.",
        stat: "-40% Gas"
      },
      {
        title: "Multi-Chain Capability",
        description: "Deploy effortlessly on Ethereum, Polygon, Arbitrum, BSC, Base, or Solana.",
        stat: "Multi-Chain"
      }
    ],
    process: [
      {
        step: "01",
        title: "Tokenomics & Protocol Architecture",
        subtitle: "Mathematical Modeling",
        description: "Designing token economics, staking equations, and governance voting models."
      },
      {
        step: "02",
        title: "Smart Contract Development",
        subtitle: "Solidity / Foundry Test Suite",
        description: "Writing gas-efficient contracts with 100% invariant automated test coverage."
      },
      {
        step: "03",
        title: "Security Auditing & Fuzzing",
        subtitle: "Static Analysis (Slither)",
        description: "Testing against reentrancy, front-running, flash loans, and precision loss vectors."
      },
      {
        step: "04",
        title: "Testnet Fuzzing & Frontend Hookup",
        subtitle: "Sepolia / Amoy Testnets",
        description: "Integrating Wagmi and Viem with the Next.js UI on public blockchain testnets."
      },
      {
        step: "05",
        title: "Mainnet Launch & Monitoring",
        subtitle: "Live Contract Verification",
        description: "Verifying contracts on Etherscan/Polygonscan and configuring multi-sig admin keys."
      }
    ],
    faqs: [
      {
        question: "Which blockchains do you build on?",
        answer: "We primarily build on EVM-compatible networks (Ethereum, Polygon, Arbitrum, Base, Optimism, BNB Chain) as well as Solana and modern L2 rollups."
      },
      {
        question: "How do you ensure smart contracts are safe against hacks?",
        answer: "We utilize OpenZeppelin battle-tested libraries, write strict invariant tests using Foundry, run static analyzers (Slither), and prepare comprehensive formal audit reports prior to mainnet deployment."
      },
      {
        question: "Can mainstream users without crypto wallets use our dApp?",
        answer: "Yes! We implement Account Abstraction (ERC-4337) and social log-ins (Google, Twitter, Email), allowing users to interact with blockchain applications without knowing private keys or holding crypto for gas."
      },
      {
        question: "What is Real-World Asset (RWA) tokenization?",
        answer: "RWA tokenization converts ownership rights of physical assets (real estate, invoices, machinery, art) into compliant digital tokens that can be traded, collateralized, or fractionalized securely."
      },
      {
        question: "Do you assist with smart contract deployment and verification?",
        answer: "Yes, we handle complete deployment scripts, verified contract source publication on block explorers, and configuration of Gnosis Safe multi-signature governance treasuries."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServices(): ServiceCategory[] {
  return servicesData;
}

export function getOtherServices(currentSlug: string): ServiceCategory[] {
  return servicesData.filter((s) => s.slug !== currentSlug);
}
