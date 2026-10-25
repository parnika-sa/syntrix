import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { 
  ArrowRight, 
  ChevronRight,
  Zap
} from "lucide-react";

import { Hero3DContainer } from "@/components/home/Hero3DContainer";
import { ServicesBento } from "@/components/home/ServicesBento";
import TechMarquee from "@/components/ui/TechMarquee";
import { siteConfig } from "@/data/siteConfig";

const DotGrid = dynamic(() => import("@/components/canvas/DotGrid"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Syntrixmesh Solutions | Websites, AI Agents & IT Infrastructure",
  description:
    "End-to-End Technology & Growth Partner based in Ludhiana, Punjab. We engineer high-performance web applications, 24/7 AI chat automation, and high-speed office IT infrastructure for ambitious businesses worldwide.",
  alternates: {
    canonical: "/",
  },
};

const processSteps = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Architecture Blueprint",
    description: "Audit current bottlenecks, define technical specifications, and establish milestone deliverables with founder oversight.",
  },
  {
    step: "02",
    title: "Design",
    subtitle: "High-Fidelity UI/UX",
    description: "Component design systems, responsive ergonomics, and high-conversion wireframes tailored to your brand identity.",
  },
  {
    step: "03",
    title: "Develop",
    subtitle: "Full-Stack Precision",
    description: "Type-safe Next.js codebases, resilient APIs, and autonomous AI chat workflows built for speed and uptime.",
  },
  {
    step: "04",
    title: "Deploy",
    subtitle: "Production Hardening",
    description: "Automated vulnerability scans, edge caching, accessibility checks, and zero-downtime deployment.",
  },
  {
    step: "05",
    title: "Support",
    subtitle: "Long-Term Growth",
    description: "Direct founder support, proactive security patches, continuous optimization, and milestone scalability sprints.",
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#070B14] text-white">
      
      {/* 1. HERO SECTION — max-width contained, mobile-first, fluid typography */}
      <section 
        className="relative flex items-center overflow-hidden"
        style={{ 
          minHeight: "min(84svh, 820px)", 
          paddingTop: "clamp(1.25rem, 3vh, 2.25rem)", 
          paddingBottom: "clamp(1.5rem, 3.5vh, 2.5rem)" 
        }}
      >
        
        {/* Interactive WebGL2 DotGrid Background with spring physics & shockwaves */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-60">
          <DotGrid
            baseColor="#080e18"
            activeColor="#2fb8ff"
            shape="square"
            dotSize={3}
            gap={12}
            proximity={120}
            strength={1}
            bounce={0.6}
            tension={0.1}
            returnDuration={0.8}
            shockRadius={320}
            shockStrength={1.5}
            swell={1.2}
            stretch={0.5}
            glow={0.06}
            fade={0}
            intro
            opacity={0.7}
            mouseInteraction
            clickShock
            dpr={1.0}
          />
        </div>

        {/* Contained inner wrapper — max 1360px, proper side padding */}
        <div 
          className="relative z-10 w-full mx-auto"
          style={{ maxWidth: "1360px", paddingInline: "clamp(1rem, 4vw, 3rem)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            
            {/* Left Side: High-contrast Editorial Asymmetric Column — text-first on mobile */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-start text-left order-1 border-l-0 lg:border-l-2 lg:border-cyan-400/40 lg:pl-6 xl:pl-8 lg:pt-6 xl:pt-8">
              
              {/* Telemetry Header Strip */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-900 border border-cyan-400/40 text-[11px] font-mono text-cyan-300 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SYS_INIT: ONLINE</span>
                  <span className="text-white/25">|</span>
                  <span>30.9010° N, 75.8573° E</span>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 hidden sm:inline">
                  {"// LUDHIANA HQ · GLOBAL DELIVERY"}
                </span>
              </div>

              {/* Main Headline — Confident, solid white with single solid cyan accent */}
              <h1 className="font-heading font-extrabold text-white tracking-[-0.03em] text-left">
                <span className="block text-[clamp(2.35rem,5.6vw,4.1rem)] font-extrabold leading-[1.0] text-white tracking-[-0.03em] [text-wrap:balance]">
                  Engineering Production&#8209;Grade
                </span>
                <span className="block text-[clamp(1.75rem,4.1vw,2.9rem)] font-bold leading-[1.08] text-white tracking-[-0.025em] mt-2 [text-wrap:balance]">
                  Web Platforms &amp; <span className="text-cyan-400">Autonomous Systems</span>.
                </span>
              </h1>

              {/* Staggered Proof / Metric Pills */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5 text-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-cyan-400/40 text-cyan-300 font-mono shadow-sm">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                  <span>100% CUSTOM BUILT</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-950/90 border border-white/20 text-slate-100 font-mono shadow-sm translate-y-0 lg:translate-y-1">
                  <span>ZERO TEMPLATES</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900/90 border border-gold-400/40 text-gold-300 font-mono shadow-sm translate-y-0 lg:-translate-y-0.5">
                  <span>DIRECT FOUNDER DESK</span>
                </div>
              </div>

              {/* Subheading — Crisp high contrast */}
              <p className="mt-4 text-[15px] sm:text-base text-slate-100 max-w-xl leading-relaxed font-normal">
                Syntrixmesh Solutions engineers custom web platforms, autonomous AI chat systems, and high-performance IT infrastructure for ambitious businesses worldwide. Direct founder engineering, zero bloated retainers.
              </p>

              {/* CTAs — stack full-width on mobile, row on desktop */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/get-quote"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 shadow-md hover:shadow-cyan-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group text-center min-h-[44px]"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>

                <a
                  href="#services"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-white text-sm glass-panel border border-cyan-400/30 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 group text-center min-h-[44px]"
                >
                  <span>Explore Services</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-cyan-400" aria-hidden="true" />
                </a>
              </div>

              {/* Staggered Checklist — editorial index numbers */}
              <div className="mt-6 pt-5 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[11px] text-cyan-400 font-bold shrink-0">[ 01 ]</span>
                  <span className="text-slate-100 font-medium">Never templates · Type-safe Next.js</span>
                </div>
                <div className="flex items-center gap-2.5 sm:pl-3">
                  <span className="font-mono text-[11px] text-gold-400 font-bold shrink-0">[ 02 ]</span>
                  <span className="text-slate-100 font-medium">Direct founder architecture desk</span>
                </div>
                <div className="flex items-center gap-2.5 sm:translate-y-0.5">
                  <span className="font-mono text-[11px] text-cyan-400 font-bold shrink-0">[ 03 ]</span>
                  <span className="text-slate-100 font-medium">AI agents + Web + IT in one partner</span>
                </div>
                <div className="flex items-center gap-2.5 sm:pl-3 sm:translate-y-0.5">
                  <span className="font-mono text-[11px] text-gold-400 font-bold shrink-0">[ 04 ]</span>
                  <span className="text-slate-100 font-medium">Ludhiana HQ with global delivery SLA</span>
                </div>
              </div>

            </div>

            {/* Right Side: Asymmetric 3D Core Scene & Mobile Fallback — offset to right on desktop */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center justify-center relative overflow-visible mt-2 lg:mt-0 order-2 lg:translate-x-6 xl:translate-x-10 lg:-mr-6 xl:-mr-10 lg:-mb-8">
              <div className="relative w-full flex items-center justify-center">
                <Hero3DContainer />
                {/* Asymmetric engineering telemetry badge on desktop */}
                <div className="hidden xl:flex absolute -bottom-3 -left-4 items-center gap-3 px-3.5 py-2 rounded-xl bg-navy-950/95 border border-cyan-400/30 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] z-20">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <div className="text-[10px] font-mono leading-tight">
                    <div className="text-cyan-400 font-bold uppercase tracking-wider">FOUNDER-DIRECT SPRINT</div>
                    <div className="text-slate-300">Latency &lt;12ms · Type-Safe Code</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TECH STACK MARQUEE (Right below Hero) */}
      <TechMarquee />

      {/* 3. SERVICES BENTO GRID */}
      <div>
        <ServicesBento />
      </div>

      {/* 4. "HOW WE WORK" — Asymmetric Editorial Process Protocol */}
      <section 
        className="relative border-t border-white/10"
        style={{ paddingBlock: "clamp(3.5rem, 6.5vw, 6.5rem)", paddingInline: "clamp(1rem, 4vw, 3rem)", maxWidth: "1360px", marginInline: "auto" }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                {"// 02 · EXECUTION PROTOCOL"}
              </span>
              <span className="text-white/20">|</span>
              <span className="font-mono text-xs text-slate-300">DISCIPLINED PHASES</span>
            </div>
            <h2 className="font-heading font-extrabold text-white tracking-[-0.03em]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Predictable Delivery in <span className="text-cyan-400">5 Practical Phases.</span>
            </h2>
          </div>
          <p className="text-slate-200 text-sm sm:text-base max-w-md leading-relaxed font-normal">
            Transparent sprint milestones, direct founder communication, and zero bloated agency overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {processSteps.map((step, idx) => {
            const isOffset = idx % 2 === 1;

            return (
              <div 
                key={idx} 
                className={`h-full rounded-2xl p-5 bg-navy-900/70 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group shadow-sm ${
                  isOffset ? "lg:translate-y-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono font-bold text-xs text-cyan-400 bg-navy-950 px-2 py-0.5 rounded border border-cyan-400/30">
                      PHASE {step.step}
                    </span>
                    <span className="font-mono text-[11px] text-slate-300">
                      0{idx + 1}/05
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <span className="font-mono text-[11px] text-cyan-400/90 block mb-2.5">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FINAL STRATEGY CTA BANNER — High-Contrast Editorial */}
      <section 
        className="relative border-t border-white/10"
        style={{ paddingBlock: "clamp(3.5rem, 6.5vw, 6.5rem)", paddingInline: "clamp(1rem, 4vw, 3rem)", maxWidth: "1360px", marginInline: "auto" }}
      >
        <div className="rounded-2xl p-8 sm:p-14 bg-navy-900/80 border border-cyan-400/30 relative overflow-hidden shadow-2xl">
          
          {/* Subtle DotGrid background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
            <DotGrid
              baseColor="#070c16"
              activeColor="#2fb8ff"
              shape="square"
              dotSize={3}
              gap={12}
              proximity={110}
              strength={1}
              bounce={0.6}
              tension={0.1}
              returnDuration={0.8}
              shockRadius={320}
              shockStrength={1.5}
              swell={1.2}
              stretch={0.5}
              glow={0.05}
              fade={0}
              intro
              opacity={0.65}
              mouseInteraction
              clickShock
              dpr={1.0}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                  {"// 03 · TECHNICAL DISCOVERY"}
                </span>
              </div>

              <h2 className="font-heading font-extrabold text-white tracking-[-0.03em] leading-tight" style={{ fontSize: 'clamp(1.75rem, 4.2vw, 2.75rem)' }}>
                Have a Complex Tech Challenge?{" "}
                <span className="text-cyan-400">
                  Let&apos;s Build the Solution.
                </span>
              </h2>

              <p className="text-slate-100 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Whether you need a cutting-edge web application, an autonomous 24/7 AI agent, or a complete workplace IT setup in Ludhiana or abroad, founder Manmeet Singh and our engineering team are ready to execute.
              </p>

              <div className="flex flex-wrap gap-3.5 pt-2">
                <Link
                  href="/get-quote"
                  className="px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 shadow-md hover:shadow-cyan-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 text-sm min-h-[44px]"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-medium text-white glass-panel border border-cyan-400/30 hover:border-cyan-400 hover:text-cyan-300 transition-all flex items-center gap-2 text-sm min-h-[44px]"
                >
                  <span>WhatsApp Directly</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex flex-col gap-3 p-6 rounded-xl bg-navy-950/80 border border-white/10 text-xs font-mono">
              <div className="text-cyan-400 font-bold uppercase tracking-wider">{"// ENGAGEMENT SPECS"}</div>
              <div className="text-slate-200">· Turnaround: 24h Discovery</div>
              <div className="text-slate-200">· Direct Founder Architecture</div>
              <div className="text-slate-200">· 100% IP &amp; Code Ownership</div>
              <div className="text-gold-300">· Ludhiana Desk &amp; Global Delivery</div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
