import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { 
  Building2, 
  MapPin, 
  Cpu, 
  Code2, 
  ShieldCheck, 
  Zap, 
  Mail, 
  Phone, 
  ArrowRight,
  Clock,
  Sparkles
} from "lucide-react";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Syntrixmesh Solutions Ludhiana",
  description:
    "Learn about Syntrixmesh Solutions, founded by Manmeet Singh in Jhande, Ludhiana. Custom software engineering, high-performance web development, AI automation, and enterprise IT hardware.",
  alternates: {
    canonical: "/about",
  },
};

const pillars = [
  {
    icon: Zap,
    title: "Sub-Second Performance",
    desc: "We engineer systems where speed is a core feature. From sub-100ms API responses to 90+ Lighthouse mobile performance, every millisecond counts.",
  },
  {
    icon: Code2,
    title: "Full Code Ownership",
    desc: "Zero vendor lock-in. You receive clean TypeScript codebases, complete documentation, automated CI/CD pipelines, and 100% intellectual property rights.",
  },
  {
    icon: Cpu,
    title: "Software & Hardware Synergy",
    desc: "Unlike pure software agencies, we architect both the cloud code and the physical infrastructure—from multi-GPU workstation labs to high-throughput servers.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Grade Reliability",
    desc: "Security-first architecture conforming to Indian IT Act 2000 and DPDP Act 2023 compliance guidelines, built to withstand real-world operational stress.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative py-16 sm:py-24">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-mesh-radial pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Ludhiana, Punjab &middot; Global Execution</span>
          </div>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Architecting Resilient Technology for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600">Ambitious Enterprises</span>
          </h1>
          <p className="mt-5 text-mesh-muted text-base sm:text-lg leading-relaxed">
            {company.name} is an end-to-end technology and growth engineering firm based in Jhande, Ludhiana. We bridge high-performance software engineering, intelligent AI automation, and high-density physical IT infrastructure.
          </p>
        </div>

        {/* Company Mission & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 block">
              Our Genesis
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-snug">
              Built to Eliminate the Friction Between Vision & Technical Execution
            </h2>
            <p className="text-mesh-text text-sm sm:text-base leading-relaxed">
              Most businesses face a frustrating divide: digital marketing agencies don&apos;t understand deep code architecture, traditional software houses build slow and bloated interfaces, and IT vendors understand hardware but not modern cloud platforms.
            </p>
            <p className="text-mesh-text text-sm sm:text-base leading-relaxed">
              Syntrixmesh Solutions was founded to provide unified technological competence under one roof. From our headquarters in Ludhiana, Punjab, we engineer mission-critical systems that streamline operations, automate repetitive workflows, and open high-revenue digital sales channels.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-mesh-muted">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900/80 border border-cyan-400/20 text-white">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Jhande, Ludhiana, Punjab
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900/80 border border-gold-400/20 text-white">
                <Clock className="w-3.5 h-3.5 text-gold-400" /> Mon - Sat, 10 AM - 7 PM IST
              </span>
            </div>
          </div>

          <div className="rounded-3xl glass-panel p-8 border border-cyan-400/25 bg-gradient-to-br from-navy-900/90 to-navy-850/90 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <h3 className="font-heading font-bold text-xl text-white mb-6">
              Core Technical Competencies
            </h3>
            <ul className="space-y-4 text-sm text-mesh-text">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <div>
                  <strong className="text-white">Modern Web Engineering:</strong> Ultra-fast Next.js App Router platforms, headless e-commerce, and responsive mobile-first web applications.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <div>
                  <strong className="text-white">Custom Software & ERP:</strong> Multi-location cloud ERPs, factory telemetry, logistics tracking portals, and robust microservices.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <div>
                  <strong className="text-white">AI Automation & Agents:</strong> 24/7 autonomous WhatsApp bots, CRM auto-sync pipelines, and context-aware RAG search assistants.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold-400 mt-2 shrink-0" />
                <div>
                  <strong className="text-white">Physical IT Infrastructure:</strong> Multi-GPU rendering rigs, server rack deployment, and high-bandwidth 10GbE network cabling in Ludhiana.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Engineering Principles We Never Compromise On
            </h2>
            <p className="mt-2 text-sm text-mesh-muted">
              The foundational standard applied to every single line of code and hardware deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl glass-panel p-6 border border-cyan-400/20 bg-navy-900/50 hover:border-cyan-400/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-mesh-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Founder Section */}
        <div id="founder" className="scroll-mt-28 mb-24">
          <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-gold-400/30 bg-gradient-to-r from-navy-900/90 via-navy-850/90 to-navy-900/90 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-gold-500/10 blur-[80px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-3xl p-1 bg-gradient-to-tr from-cyan-400 to-gold-400 shadow-2xl relative mb-4">
                  <div className="w-full h-full rounded-[22px] bg-navy-950 flex items-center justify-center overflow-hidden p-2">
                    <Image
                      src="/logo.png"
                      alt="Syntrixmesh Emblem"
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-white">
                  {company.founder.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-400 mt-1">
                  {company.founder.role}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-mesh-muted">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Ludhiana, Punjab, India</span>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block">
                  Leadership & Architectural Direction
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Engineering Directly with Business Owners & CTOs
                </h2>
                <p className="text-sm sm:text-base text-mesh-text leading-relaxed">
                  {company.founder.bio}
                </p>
                <p className="text-sm text-mesh-muted leading-relaxed">
                  Every project at Syntrixmesh Solutions is directly overseen by Manmeet Singh to ensure architecture adheres to strict scalability standards, high-throughput caching, clean maintainable code, and robust data protection.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-gold-500 to-gold-600 shadow-lg hover:opacity-95 transition-opacity"
                  >
                    <span>Consult with Manmeet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-mesh-text glass-panel border border-white/10 hover:border-gold-400/40 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-gold-400" />
                    <span>{company.contact.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Delivery Section */}
        <div className="text-center rounded-3xl glass-panel p-8 sm:p-12 border border-cyan-400/20 bg-navy-900/60">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Serving Ambitious Teams Globally</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Ready to Upgrade Your Company&apos;s Technology Infrastructure?
          </h2>
          <p className="text-sm sm:text-base text-mesh-muted max-w-2xl mx-auto mt-3">
            Whether you need custom software, WhatsApp AI bots, or high-performance workstations built in Ludhiana, our engineering team is ready to deliver.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-opacity"
            >
              Start Technical Discovery
            </Link>
            <a
              href={`tel:${company.contact.phoneClean}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-white glass-panel border border-cyan-400/30 hover:border-cyan-400/60 transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{company.contact.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
