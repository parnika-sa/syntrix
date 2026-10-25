"use client";

import React from "react";
import Link from "next/link";
import { 
  Bot, 
  Code2, 
  Cpu, 
  TrendingUp, 
  Server, 
  Boxes, 
  ArrowUpRight, 
  Check 
} from "lucide-react";

interface BentoItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  tagline: string;
  oneLiner: string;
  icon: React.ElementType;
  chips: string[];
  gridClass: string;
  isFeatured?: boolean;
}

const bentoItems: BentoItem[] = [
  {
    id: "ai-chat-automation",
    slug: "ai-chat-automation",
    title: "AI Chat & Workflow Automation",
    shortTitle: "AI Automation",
    badge: "Most Requested · 2026",
    tagline: "Autonomous 24/7 conversational agents & business pipelines",
    oneLiner: "Replace slow customer forms with multi-turn AI chat agents on WhatsApp, Telegram & web that qualify leads and close appointments automatically.",
    icon: Bot,
    chips: ["WhatsApp AI Agents", "CRM & Lead Sync", "Multi-Language (English/Hinglish)", "RAG Knowledge Bases"],
    gridClass: "col-span-12 lg:col-span-7",
    isFeatured: true,
  },
  {
    id: "development",
    slug: "development",
    title: "Web & Mobile Development",
    shortTitle: "Web & Mobile",
    badge: "Core Engineering",
    tagline: "Next.js web platforms & responsive mobile apps",
    oneLiner: "Engineered from scratch for sub-second speeds, flawless mobile ergonomics, and strict SEO indexing. No sluggish templates.",
    icon: Code2,
    chips: ["Next.js App Router", "Native-Feel iOS & Android", "Headless E-Commerce", "WCAG AA Accessible"],
    gridClass: "col-span-12 lg:col-span-5",
    isFeatured: true,
  },
  {
    id: "software-engineering",
    slug: "software-engineering",
    title: "Custom Software Engineering",
    shortTitle: "Software",
    badge: "Enterprise Architecture",
    tagline: "Custom business software & cloud APIs",
    oneLiner: "Type-safe Node/Go backend microservices, internal dashboards, and resilient ERP backbones tailored to your operations.",
    icon: Cpu,
    chips: ["REST & GraphQL APIs", "PostgreSQL / Redis", "Custom Operations Dashboards"],
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing & Technical SEO",
    shortTitle: "Marketing & SEO",
    badge: "High-ROI Growth",
    tagline: "Targeted ad campaigns & rank-1 organic search",
    oneLiner: "Turn traffic into paying clients with technical search audit execution, schema mastery, and hyper-targeted Google & Meta campaigns.",
    icon: TrendingUp,
    chips: ["Programmatic SEO", "Google Search Ads", "Conversion Rate Optimization"],
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    id: "hardware-it",
    slug: "hardware-it",
    title: "Hardware & IT Infrastructure",
    shortTitle: "Hardware & IT",
    badge: "On-Premises & Studio",
    tagline: "Commercial networks & workstations",
    oneLiner: "Enterprise workstation procurement, high-bandwidth UniFi network topology, and secure local file server configurations.",
    icon: Server,
    chips: ["Creator & CAD Workstations", "UniFi Office Mesh", "NAS Storage & Backup"],
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    id: "web3-dapps",
    slug: "web3-dapps",
    title: "Web3 Protocols & Smart Contracts",
    shortTitle: "Web3 & Blockchain",
    badge: "Decentralized Systems",
    tagline: "Audited Solidity smart contracts & dApps",
    oneLiner: "Secure EVM smart contract development, token distribution architectures, and gas-efficient Web3 decentralized interfaces.",
    icon: Boxes,
    chips: ["Solidity / EVM", "Gas Optimization", "Wallet Authentication"],
    gridClass: "col-span-12 lg:col-span-12",
  },
];

export function ServicesBento() {
  return (
    <section id="services" className="relative overflow-hidden" style={{ paddingBlock: 'clamp(3.5rem, 6.5vw, 6.5rem)' }}>
      <div style={{ maxWidth: '1360px', marginInline: 'auto', paddingInline: 'clamp(1rem, 4vw, 3rem)' }}>
        
        {/* Editorial Section Heading — Left Aligned, Asymmetric */}
        <div className="relative mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                  {"// 01 · PRACTICE AREAS"}
                </span>
                <span className="text-white/20">|</span>
                <span className="font-mono text-xs text-slate-300">CORE DISCIPLINES</span>
              </div>
              <h2 className="font-heading font-extrabold text-white tracking-[-0.03em]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}>
                Six Disciplines. <span className="text-cyan-400">One Engineering Partner.</span>
              </h2>
            </div>
            <p className="text-slate-200 text-sm sm:text-base max-w-md leading-relaxed font-normal">
              Direct founder execution spanning autonomous AI chat agents, high-speed Next.js web applications, and enterprise workplace IT infrastructure.
            </p>
          </div>
        </div>

        {/* Bento Grid Container — Staggered, Varied Proportions */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {bentoItems.map((item, idx) => {
            const Icon = item.icon;
            const isOffset = idx === 3; // Stagger middle card vertically on desktop

            return (
              <div
                key={item.id}
                className={`${item.gridClass} h-full ${isOffset ? "lg:translate-y-3" : ""}`}
              >
                <div className="h-full rounded-2xl p-6 sm:p-8 bg-navy-900/70 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md group">
                  {/* Top Strip */}
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-cyan-400/80 font-semibold tracking-wider">
                          [ 0{idx + 1} ]
                        </span>
                        <div className="w-9 h-9 rounded-lg bg-navy-950 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wide border ${
                        item.isFeatured
                          ? "bg-gold-500/10 text-gold-300 border-gold-400/30"
                          : "bg-white/5 text-slate-300 border-white/10"
                      }`}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-xs sm:text-sm text-cyan-400 font-medium">
                      {item.tagline}
                    </p>

                    <p className="mt-3 text-sm text-slate-200 leading-relaxed font-normal">
                      {item.oneLiner}
                    </p>
                  </div>

                  {/* Bottom Chips & Action Link */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {item.chips.map((chip, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono bg-navy-950 text-slate-200 border border-white/10"
                        >
                          <Check className="w-3 h-3 text-cyan-400" />
                          <span>{chip}</span>
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/services/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors mt-1"
                    >
                      <span>Explore details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to All Services */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white glass-panel border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
          >
            <span>Explore all services</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
