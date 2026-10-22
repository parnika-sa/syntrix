import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  Package, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";
import Card3D from "@/components/ui/Card3D";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Engagement Models & Service Packages | Syntrixmesh Solutions",
  description:
    "Explore our three transparent technology engagement models: Starter Project, Growth Partnership, and Custom Enterprise. Bespoke scoping with zero bloated retainers.",
  alternates: {
    canonical: "/packages",
  },
  openGraph: {
    title: "Service Packages & Engagement Models | Syntrixmesh Solutions",
    description:
      "Starter, Growth, and Enterprise models for web apps, AI automation, and IT infrastructure.",
    url: `${siteConfig.domain}/packages`,
  },
};

const packages = [
  {
    id: "starter",
    name: "Starter Project",
    tagline: "Focused MVP & Rapid Launch",
    idealFor: "Startups and small businesses seeking a rapid, high-performance web presence or a single autonomous AI WhatsApp bot.",
    timeline: "2 to 4 Weeks",
    highlights: [
      "Bespoke Next.js 14 App Router web app or marketing site (up to 5 core pages)",
      "Alternatively: Standalone 24/7 AI WhatsApp bot trained on your product catalog",
      "90+ Mobile Google Lighthouse Core Web Vitals guarantee",
      "Official Meta WhatsApp API setup or contact lead routing",
      "100% full source code and GitHub repository transfer upon delivery",
      "30-day post-launch technical warranty & bug fix support",
    ],
    cta: "Request Starter Scope",
    popular: false,
    gradient: "border-cyan-400/20",
  },
  {
    id: "growth",
    name: "Growth Partnership",
    tagline: "Full-Stack Development & Ongoing Scaling",
    idealFor: "Growing SMEs and funded ventures requiring continuous software engineering, multi-channel AI agents, and technical SEO scaling.",
    timeline: "Ongoing Sprint Cycles (Agile 2-Week Sprints)",
    highlights: [
      "Custom full-stack web platforms, customer portals, or headless e-commerce",
      "Multi-turn AI agents integrated across WhatsApp, Web chat, and CRM pipelines",
      "Technical Core Web Vitals audits, programmatic SEO, and Google Ads funnel engineering",
      "Bi-weekly sprint planning with direct founder Manmeet Singh access",
      "Continuous CI/CD integration, staging environments, and database backups",
      "Priority SLA response window (within 2 to 4 hours)",
    ],
    cta: "Apply for Growth Partnership",
    popular: true,
    gradient: "border-cyan-400/50 shadow-cyan-glow",
  },
  {
    id: "enterprise",
    name: "Custom Enterprise",
    tagline: "Turnkey Architecture & Dedicated Infrastructure",
    idealFor: "Established corporations, manufacturers, and studios needing multi-location cloud ERPs, dedicated workstation hardware, and high-security infrastructure.",
    timeline: "Phased Enterprise Roadmap",
    highlights: [
      "Microservices architecture, multi-factory ERP, or institutional Web3 protocols",
      "Turnkey hardware procurement: multi-GPU rendering rigs, server racks & UniFi WiFi in Ludhiana",
      "On-premise IT infrastructure cabling, CCTV, and biometric access controls",
      "Dedicated senior solutions architect overseeing deployment",
      "Rigorous DPDP Act 2023 & IT Act 2000 security and compliance audits",
      "Custom Annual Maintenance Contract (AMC) with 24/7 on-site emergency dispatch",
    ],
    cta: "Request Enterprise Consultation",
    popular: false,
    gradient: "border-gold-400/40",
  },
];

const comparisonFeatures = [
  { feature: "Primary Focus", starter: "Specific MVP / Single Tool", growth: "End-to-End Digital Scaling", enterprise: "Mission-Critical Core Operations" },
  { feature: "Code & IP Rights", starter: "100% Client Owned", growth: "100% Client Owned", enterprise: "100% Client Owned" },
  { feature: "Lighthouse 90+ Standard", starter: "Included", growth: "Included", enterprise: "Included" },
  { feature: "AI Chat Automation", starter: "Single-channel (Optional)", growth: "Omnichannel + CRM Sync", enterprise: "Custom RAG + Private LLMs" },
  { feature: "Physical IT / Hardware", starter: "Consultation Only", growth: "Hardware Advisory", enterprise: "Turnkey Procurement & Assembly" },
  { feature: "Founder Direct Access", starter: "Milestone Reviews", growth: "Bi-Weekly Sprints", enterprise: "Direct Architecture Desk" },
  { feature: "Ongoing SLA Warranty", starter: "30-Day Post-Launch", growth: "Active Monthly Retainer", enterprise: "24/7 Enterprise AMC" },
  { feature: "Pricing Model", starter: "Milestone-Based Fixed Scope", growth: "Monthly Sprint Retainer", enterprise: "Custom Phased Enterprise Agreement" },
];

export default function PackagesPage() {
  return (
    <div className="relative py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-mesh-radial pointer-events-none opacity-40" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-4">
          <Package className="w-3.5 h-3.5" />
          <span>Transparent Engagement Framework</span>
        </div>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Tailored Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-gold-400">Engagement Models</span>
        </h1>
        <p className="mt-4 text-mesh-muted text-base sm:text-lg">
          We do not use rigid cookie-cutter templates. Choose an engagement model that matches your business scale, and receive a customized quote based on verified technical deliverables.
        </p>
      </div>

      {/* 3 Package Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 mb-20">
        {packages.map((pkg) => (
          <Card3D
            key={pkg.id}
            glowColor={pkg.popular ? "cyan" : "gold"}
            maxTilt={6}
            className="rounded-3xl h-full"
          >
            <div
              className={`rounded-3xl glass-panel p-8 sm:p-10 border bg-gradient-to-b from-navy-900/90 to-navy-950/90 flex flex-col justify-between relative overflow-hidden h-full ${pkg.gradient}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-400 to-blue-600 text-navy-950 text-[10px] font-heading font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow-cyan-glow">
                  Most Popular
                </div>
              )}

              <div>
                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 block mb-1">
                    {pkg.tagline}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    {pkg.name}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-mesh-muted leading-relaxed mb-6">
                  {pkg.idealFor}
                </p>

                <div className="p-3.5 rounded-xl bg-navy-950/80 border border-cyan-400/15 mb-6 text-xs text-mesh-text">
                  <span className="text-cyan-400 font-semibold block mb-0.5">Estimated Timeline:</span>
                  {pkg.timeline}
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-semibold text-gold-400 uppercase tracking-wider block">
                    What&apos;s Included:
                  </span>
                  {pkg.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-mesh-text leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-cyan-400/10">
                <Link
                  href={`/get-quote?package=${encodeURIComponent(pkg.id)}`}
                  className={`w-full py-3.5 rounded-full text-xs font-semibold text-center block transition-all duration-300 ${
                    pkg.popular
                      ? "text-navy-950 bg-gradient-to-r from-cyan-400 to-blue-400 shadow-cyan-glow hover:scale-105"
                      : "text-white bg-white/5 border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10"
                  }`}
                >
                  {pkg.cta} &rarr;
                </Link>
              </div>
            </div>
          </Card3D>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-cyan-400/20 bg-navy-900/60 relative z-10 mb-20 overflow-x-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 block mb-1">
            FEATURE-BY-FEATURE BREAKDOWN
          </span>
          <h3 className="text-2xl font-heading font-bold text-white">
            Model Comparison Matrix
          </h3>
          <p className="text-xs text-mesh-muted mt-2">
            Every model guarantees clean code, full IP transfer, and direct oversight from our Ludhiana engineering desk.
          </p>
        </div>

        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-cyan-400/20 text-white">
              <th className="py-4 px-4 font-heading font-bold text-cyan-400">Capability</th>
              <th className="py-4 px-4 font-heading font-semibold">Starter Project</th>
              <th className="py-4 px-4 font-heading font-semibold text-cyan-300">Growth Partnership</th>
              <th className="py-4 px-4 font-heading font-semibold text-gold-300">Custom Enterprise</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-mesh-text">
            {comparisonFeatures.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-4 font-medium text-white">{row.feature}</td>
                <td className="py-3.5 px-4 text-mesh-muted">{row.starter}</td>
                <td className="py-3.5 px-4 text-cyan-200 font-medium">{row.growth}</td>
                <td className="py-3.5 px-4 text-gold-200">{row.enterprise}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Custom Consultation Callout */}
      <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-gold-400/30 bg-gradient-to-r from-navy-900/90 via-navy-850/90 to-navy-900/90 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Unsure Which Engagement Fits Best?</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
          Book an Architectural Scoping Session
        </h3>
        <p className="text-sm text-mesh-muted max-w-xl mx-auto mt-2 leading-relaxed">
          We will review your system workflows, analyze bottleneck requirements, and provide a detailed deliverables blueprint with clear milestone costs.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-opacity"
          >
            Get Custom Quote
          </Link>
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full text-sm font-medium text-white glass-panel border border-cyan-400/30 hover:border-cyan-400/60 transition-colors"
          >
            WhatsApp Founder Manmeet
          </a>
        </div>
      </div>
    </div>
  );
}
