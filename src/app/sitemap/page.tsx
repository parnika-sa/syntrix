import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  Compass, 
  Layers, 
  ShieldCheck, 
  Building2, 
  ArrowUpRight, 
  Sparkles
} from "lucide-react";
import { servicesNav } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import { SHOW_PORTFOLIO } from "@/config/site";

export const metadata: Metadata = {
  title: "HTML Sitemap & Navigation Directory",
  description:
    "Comprehensive directory of all pages, technical services, enterprise case studies, and legal governance policies on Syntrixmesh Solutions.",
  alternates: {
    canonical: "/sitemap",
  },
};

const mainPages = [
  { title: "Home", href: "/", desc: "End-to-End Technology & Growth Partner overview, core capabilities, client outcomes." },
  { title: "About Syntrixmesh", href: "/about", desc: "Our engineering philosophy, founder profile, and Ludhiana headquarters." },
  ...(SHOW_PORTFOLIO
    ? [
        {
          title: "Portfolio & Case Studies",
          href: "/portfolio",
          desc: "Headless e-commerce, AI agents, workstation setups, and custom web software.",
        },
      ]
    : []),
  { title: "All Services", href: "/services", desc: "Comprehensive breakdown of our six primary technology practice areas." },
  { title: "Get a Free Quote", href: "/get-quote", desc: "Interactive 3-step project scope configurator and direct proposal request." },
  { title: "Contact & Consultation", href: "/contact", desc: "Schedule a technical discovery session or reach our engineering desk." },
];

const resourcePages = [
  { title: "Engagement Packages", href: "/packages", desc: "Starter Project, Growth Partnership, and Custom Enterprise models." },
  { title: "Frequently Asked Questions", href: "/faq", desc: "Honest answers regarding pricing, intellectual property, timelines, and tech stack." },
  { title: "Engineering & Tech Blog", href: "/blog", desc: "Practical guides on AI automation, web performance, and Web3 smart contracts." },
];

const legalPages = [
  { title: "Privacy Policy", href: "/privacy-policy", desc: "Data protection standards adhering to DPDP Act 2023 & IT Act 2000." },
  { title: "Terms & Conditions", href: "/terms", desc: "Service engagement framework, IP rights transfer, and governing jurisdiction." },
  { title: "Cookie Policy", href: "/cookie-policy", desc: "Storage mechanisms, essential telemetry, and preference controls." },
  { title: "Refund & Cancellation Policy", href: "/refund-policy", desc: "Milestone-based billing, retainers, and hardware procurement warranty terms." },
  { title: "Legal Disclaimer", href: "/disclaimer", desc: "No outcome guarantee, AI automation limitations, and Web3 risk disclosures." },
  { title: "XML Sitemap", href: "/sitemap.xml", desc: "Machine-readable search engine discovery index." },
];

export default function SitemapPage() {
  return (
    <div className="relative py-16 sm:py-24 mx-auto w-full" style={{ maxWidth: "1360px", paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>Site Directory</span>
        </div>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Syntrixmesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">HTML Sitemap</span>
        </h1>
        <p className="mt-4 text-mesh-muted text-base sm:text-lg">
          An indexed index of our primary web pages, practice areas, case studies, and compliance policies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Main Navigation */}
        <div className="rounded-3xl glass-panel p-6 border border-cyan-400/20 bg-navy-900/60 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-white">Main Pages</h2>
              <p className="text-xs text-mesh-muted">Primary routes</p>
            </div>
          </div>
          <ul className="space-y-3 flex-1">
            {mainPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="group block p-2.5 rounded-xl border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center justify-between text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    <span>{page.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-cyan-400" />
                  </div>
                  <p className="text-xs text-mesh-muted mt-1 leading-relaxed line-clamp-2">
                    {page.desc}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="rounded-3xl glass-panel p-6 border border-cyan-400/20 bg-navy-900/60 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-white">Resources</h2>
              <p className="text-xs text-mesh-muted">Guides & pricing</p>
            </div>
          </div>
          <ul className="space-y-3 flex-1">
            {resourcePages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="group block p-2.5 rounded-xl border border-white/5 hover:border-emerald-400/30 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center justify-between text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    <span>{page.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-emerald-400" />
                  </div>
                  <p className="text-xs text-mesh-muted mt-1 leading-relaxed line-clamp-2">
                    {page.desc}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Services */}
        <div className="rounded-3xl glass-panel p-6 border border-cyan-400/20 bg-navy-900/60 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-white">Practice Areas</h2>
              <p className="text-xs text-mesh-muted">Specialized engineering</p>
            </div>
          </div>
          <ul className="space-y-3 flex-1">
            {servicesNav.map((svc) => (
              <li key={svc.id}>
                <Link
                  href={`/services/${svc.slug}`}
                  className="group block p-2.5 rounded-xl border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center justify-between text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    <span>{svc.shortTitle}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-cyan-400" />
                  </div>
                  <p className="text-xs text-mesh-muted mt-1 leading-relaxed">
                    Enterprise {svc.shortTitle.toLowerCase()} solutions.
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Governance */}
        <div className="rounded-3xl glass-panel p-6 border border-cyan-400/20 bg-navy-900/60 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-white">Legal & Compliance</h2>
              <p className="text-xs text-mesh-muted">Governance & terms</p>
            </div>
          </div>
          <ul className="space-y-3 flex-1">
            {legalPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="group block p-2.5 rounded-xl border border-white/5 hover:border-gold-400/30 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center justify-between text-sm font-semibold text-white group-hover:text-gold-400 transition-colors">
                    <span>{page.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-gold-400" />
                  </div>
                  <p className="text-xs text-mesh-muted mt-1 leading-relaxed line-clamp-2">
                    {page.desc}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Footer Contact Callout */}
      <div className="mt-16 rounded-2xl glass-panel border border-cyan-400/20 p-6 sm:p-8 text-center bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900">
        <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Need Custom Architectural Consultation?</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
          Cannot find what you are looking for?
        </h3>
        <p className="text-sm text-mesh-muted max-w-xl mx-auto mt-2">
          Speak with founder {siteConfig.founder.name} and our technology team in Jhande, Ludhiana to discuss custom engineering specifications.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-opacity"
          >
            Contact Engineering Team
          </Link>
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full text-sm font-medium text-white glass-panel border border-cyan-400/30 hover:border-cyan-400/60 transition-colors"
          >
            Direct WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
