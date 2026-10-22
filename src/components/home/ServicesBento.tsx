"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Bot, 
  Code2, 
  Cpu, 
  TrendingUp, 
  Server, 
  Boxes, 
  ArrowUpRight, 
  Sparkles, 
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
  const [mousePos, setMousePos] = useState<Record<string, { x: number; y: number }>>({});

  const handleMouseMove = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos((prev) => ({
      ...prev,
      [id]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practice Areas & Capabilities</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Six Core Disciplines,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-gold-400">
              One Unified Partner.
            </span>
          </h2>
          <p className="mt-4 text-mesh-muted text-base sm:text-lg leading-relaxed">
            Eliminate communication gaps between separate web agencies, IT vendors, and AI developers. Syntrixmesh handles your complete technical lifecycle.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-12 gap-6">
          {bentoItems.map((item) => {
            const Icon = item.icon;
            const pos = mousePos[item.id] || { x: 0, y: 0 };

            return (
              <div
                key={item.id}
                onMouseMove={(e) => handleMouseMove(item.id, e)}
                className={`${item.gridClass} group relative rounded-3xl p-6 sm:p-8 bg-navy-900/60 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg`}
              >
                {/* Mouse Spotlight Hover Glow */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(47, 184, 255, 0.12), transparent 80%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Top Strip */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      item.isFeatured
                        ? "bg-gold-500/10 text-gold-300 border-gold-400/30"
                        : "bg-white/5 text-mesh-muted border-white/10"
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-cyan-400/90 font-medium">
                    {item.tagline}
                  </p>

                  <p className="mt-3 text-sm text-mesh-muted leading-relaxed">
                    {item.oneLiner}
                  </p>
                </div>

                {/* Bottom Chips & Action Link */}
                <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {item.chips.map((chip, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-navy-950/80 text-gray-300 border border-white/5"
                      >
                        <Check className="w-3 h-3 text-cyan-400" />
                        <span>{chip}</span>
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Explore details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
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
            <span>View full practice area matrix & case studies</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
