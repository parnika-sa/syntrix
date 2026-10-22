import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { 
  ArrowRight, 
  Sparkles, 
  Check, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Award,
  Layers,
  ChevronRight
} from "lucide-react";

import { Hero3DContainer } from "@/components/home/Hero3DContainer";
import { ServicesBento } from "@/components/home/ServicesBento";
import TechMarquee from "@/components/ui/TechMarquee";
import Card3D from "@/components/ui/Card3D";
import TypewriterHeadline from "@/components/ui/TypewriterHeadline";
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
      
      {/* 1. HERO SECTION (Split layout: Instant Server-rendered LCP on left, 3D on right) */}
      <section className="relative min-h-[80vh] lg:min-h-[88vh] flex items-center pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Interactive WebGL2 DotGrid Background with spring physics & shockwaves */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
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
            glow={0.08}
            fade={0}
            intro
            opacity={0.85}
            mouseInteraction
            clickShock
            dpr={1.0}
          />
        </div>

        {/* Ambient Top Glow Orbs - seated safely in background with pointer-events-none */}
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" 
          aria-hidden="true" 
        />
        <div 
          className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-gold-500/10 rounded-full blur-[130px] pointer-events-none -z-10" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-10 items-center">
            
            {/* Left Side: Server-rendered HTML (Full brightness, zero edge masks) */}
            <div className="md:col-span-7 flex flex-col justify-center text-left">
              
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-400/30 text-xs sm:text-sm font-semibold text-cyan-300 shadow-[0_0_20px_rgba(47,184,255,0.15)] mb-6 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" aria-hidden="true" />
                <span>Ludhiana HQ · Global Delivery</span>
              </div>

              {/* Main Headline with Native Typewriter Tagline */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.14]">
                <span className="block mb-2">Websites, AI Agents &amp; IT Infrastructure,</span>
                <TypewriterHeadline
                  phrases={[
                    "Engineered to Scale Your Business.",
                    "Autonomous 24/7 AI Chat Systems.",
                    "High-Performance Web Platforms.",
                    "Enterprise Cloud & IT Infrastructure.",
                    "Direct Founder Engineering. Zero Bloat.",
                  ]}
                  className="text-2xl sm:text-4xl lg:text-5xl"
                />
              </h1>

              {/* Honest Subheading */}
              <p className="mt-5 text-base sm:text-lg text-mesh-text max-w-2xl leading-relaxed">
                Syntrixmesh Solutions engineers custom web platforms, autonomous AI chat systems, and high-performance IT infrastructure for ambitious businesses worldwide. Direct founder engineering, zero bloated retainers.
              </p>

              {/* Action Buttons: Primary "Get a Free Quote", Secondary "Explore Services" */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/get-quote"
                  className="px-8 py-4 rounded-full font-semibold text-white text-base bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group text-center"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>

                <a
                  href="#services"
                  className="px-7 py-4 rounded-full font-semibold text-white text-base glass-panel border border-cyan-400/30 hover:border-cyan-400/60 hover:text-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 group text-center"
                >
                  <span>Explore Services</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-cyan-400" aria-hidden="true" />
                </a>
              </div>

              {/* Truthful Trust Row (ONLY honest statements) */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-mesh-text">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-medium text-gray-200">Custom-built, never templates</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-medium text-gray-200">Direct founder access</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-medium text-gray-200">AI + Web + IT under one roof</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-medium text-gray-200">Ludhiana HQ, global delivery</span>
                </div>
              </div>

            </div>

            {/* Right Side: 3D Core Scene & Clean Mobile Fallback */}
            <div className="md:col-span-5 flex items-center justify-center relative overflow-visible mt-6 md:mt-0">
              <Hero3DContainer />
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

      {/* 4. COMPACT "HOW WE WORK" ROW WITH 5 SMALL STEPS */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>How We Work</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Predictable Delivery:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-gold-400">
              5 Practical Steps.
            </span>
          </h2>
          <p className="mt-3 text-mesh-muted text-sm sm:text-base">
            Transparent sprint milestones, direct founder communication, and zero bloated agency overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {processSteps.map((step, idx) => (
            <Card3D key={idx} glowColor="cyan" maxTilt={10} className="h-full rounded-2xl">
              <div className="h-full p-5 rounded-2xl glass-panel border border-cyan-400/15 bg-navy-900/60 flex flex-col justify-between group-hover:border-cyan-400/40 group-hover:shadow-cyan-glow transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-heading font-bold text-xs flex items-center justify-center shadow-cyan-glow group-hover:scale-105 transition-transform">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-gold-400 tracking-wider">
                      Step {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white mb-0.5 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-cyan-400 block mb-2">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-mesh-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* 5. FINAL STRATEGY CTA BANNER */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-white/5">
        <div className="rounded-3xl p-8 sm:p-12 glass-panel border border-cyan-400/30 bg-gradient-to-br from-navy-900 via-navy-850 to-[#070B14] relative overflow-hidden shadow-2xl">
          
          {/* Interactive WebGL2 DotGrid inside Final Strategy CTA Banner */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-75">
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
              glow={0.06}
              fade={0}
              intro
              opacity={0.8}
              mouseInteraction
              clickShock
              dpr={1.0}
            />
          </div>

          <div 
            className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-400 border border-cyan-400/30">
                ✦ START YOUR PROJECT
              </span>

              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                Have a Complex Tech Challenge?{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-gold-400 bg-clip-text text-transparent">
                  Let&apos;s Build the Solution.
                </span>
              </h2>

              <p className="text-mesh-text text-sm sm:text-base leading-relaxed">
                Whether you need a cutting-edge web application, an autonomous 24/7 AI agent, or a complete workplace IT setup in Ludhiana or abroad, founder Manmeet Singh and our engineering team are ready to execute.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/get-quote"
                  className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-full font-semibold text-white glass-panel border border-cyan-400/30 hover:border-cyan-400/70 hover:text-cyan-400 transition-all flex items-center gap-2"
                >
                  <span>WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Engineering Desk Guarantee Card */}
            <div className="lg:col-span-5">
              <Card3D glowColor="gold" maxTilt={8} className="rounded-2xl h-full">
                <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-cyan-400/20 bg-navy-950/80 space-y-4 h-full">
                  <h3 className="font-heading font-bold text-white text-base sm:text-lg flex items-center gap-2">
                    <Award className="w-5 h-5 text-gold-400" aria-hidden="true" />
                    <span>Direct Engineering Guarantee</span>
                  </h3>

                  <div className="space-y-3.5 text-xs sm:text-sm text-mesh-text">
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-white block">2-Hour Rapid Response</strong>
                        Inquiries reviewed directly by principal engineers, not junior sales reps.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-white block">Strict NDA Protected</strong>
                        Your intellectual property, patents, and business concepts are 100% safeguarded.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-white block">Jhande, Ludhiana Headquarters</strong>
                        Local accountability with global cross-border execution capabilities.
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-cyan-400/15 text-center">
                    <span className="text-xs text-mesh-muted">Prefer calling directly?</span>
                    <a
                      href={`tel:${siteConfig.contact.phoneClean}`}
                      className="block text-cyan-400 font-heading font-bold text-base hover:underline mt-1"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </Card3D>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
