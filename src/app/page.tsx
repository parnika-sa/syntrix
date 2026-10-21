"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  TrendingUp, 
  Server, 
  Bot, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Globe2, 
  Headphones, 
  Award,
  ChevronRight,
  Star
} from "lucide-react";
import MeshNetworkBackground from "@/components/canvas/MeshNetworkBackground";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "@/components/ui/Counter";
import TechMarquee from "@/components/ui/TechMarquee";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const serviceIcons: Record<string, React.ElementType> = {
  "development": Code2,
  "software-engineering": Cpu,
  "digital-marketing": TrendingUp,
  "hardware-it": Server,
  "ai-chat-automation": Bot,
  "ai-automation": Bot,
  "web3-dapps": Layers,
};

const whyChooseUs = [
  {
    icon: Layers,
    title: "Unified End-to-End Partner",
    description:
      "We eliminate vendor chaos. From cloud code and AI agents to physical server hardware and office IT setups, you have one trusted engineering team.",
  },
  {
    icon: Code2,
    title: "Custom-Engineered for Scale",
    description:
      "Zero brittle WordPress themes or cookie-cutter templates. We write bespoke, type-safe Next.js and microservices designed for 10x traffic bursts.",
  },
  {
    icon: Bot,
    title: "Autonomous 24/7 Automation",
    description:
      "Convert international leads at midnight. Our custom-trained AI chatbots and workflow automations answer, quote, and capture leads while you sleep.",
  },
  {
    icon: Globe2,
    title: "Global Delivery from Ludhiana",
    description:
      "Proudly rooted in Ludhiana, Punjab, delivering enterprise-grade digital systems to clients in North America, Europe, UAE, and across India.",
  },
  {
    icon: Headphones,
    title: "Long-Term Dedicated Support",
    description:
      "We don't disappear after deployment. Benefit from proactive uptime monitoring, regular security patches, and SLA-backed maintenance contracts.",
  },
  {
    icon: ShieldCheck,
    title: "Zero IP Lock-In",
    description:
      "You own 100% of your source code, cloud credentials, documentation, and architecture. Complete intellectual property transfer upon sign-off.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover & Scope",
    subtitle: "Architecture Blueprint",
    description: "We audit your existing tech stack, identify bottlenecks, define operational KPIs, and draft a high-clarity technical roadmap.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    subtitle: "High-Fidelity UX",
    description: "Interactive Figma wireframes, component design systems, and responsive layouts tailored to your exact brand aesthetics.",
  },
  {
    step: "03",
    title: "Develop & Integrate",
    subtitle: "Full-Stack Precision",
    description: "Clean TypeScript codebases, modular microservices, REST/GraphQL APIs, database modeling, and automated test coverage.",
  },
  {
    step: "04",
    title: "Audit & Deploy",
    subtitle: "Production Hardening",
    description: "Stress testing, automated security vulnerability scans, CDN caching, and zero-downtime deployment to AWS/Vercel.",
  },
  {
    step: "05",
    title: "Support & Accelerate",
    subtitle: "Continuous Growth",
    description: "Post-launch hypercare, 24/7 uptime telemetry, Google Ads scaling, and ongoing feature development sprints.",
  },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated 60fps Canvas Mesh Network */}
        <MeshNetworkBackground />

        {/* Ambient Top Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-400/30 text-xs sm:text-sm font-medium text-cyan-300 shadow-[0_0_20px_rgba(47,184,255,0.2)] mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span className="font-semibold tracking-wide">End-to-End Technology & Growth Partner</span>
            <span className="hidden sm:inline-block text-mesh-muted">•</span>
            <span className="hidden sm:inline-block text-white/80">Ludhiana HQ · Global Delivery</span>
          </motion.div>

          {/* Main Headline with Text Reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] sm:leading-[1.12]"
          >
            We Build Technology That{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent underline decoration-cyan-400/40 decoration-wavy decoration-2">
              Grows Your Business
            </span>
            .
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-base sm:text-xl text-mesh-text max-w-3xl mx-auto leading-relaxed"
          >
            From high-speed web apps and 24/7 AI chat automation to robust physical IT infrastructure, cloud ERPs, and Web3 protocols. We architect the digital backbone for ambitious enterprises.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white text-base bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white text-base glass-panel border border-cyan-400/30 hover:border-cyan-400/60 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Explore All Services</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-cyan-400" />
            </Link>
          </motion.div>

          {/* Micro Trust Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-cyan-400/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-mesh-text"
          >
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Sub-Second Load Times</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Full IP & Code Ownership</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>24/7 Context AI Bots</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Dedicated SLA Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TECH STACK MARQUEE */}
      <TechMarquee />

      {/* 3. SERVICES OVERVIEW SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <SectionHeading
          badge="OUR CORE DISCIPLINES"
          title="Full-Spectrum Engineering"
          highlight="For Modern Business"
          subtitle="We combine bespoke software development, hardware infrastructure, and intelligent automation into one cohesive growth engine."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = serviceIcons[service.id] || Code2;
            return (
              <SpotlightCard
                key={service.id}
                className="p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-navy-900 border border-cyan-400/25 flex items-center justify-center text-cyan-400 shadow-cyan-glow group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-navy-900 border border-cyan-400/20 text-cyan-300">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-mesh-text leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  {/* Subservices Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-cyan-400/10 mb-8">
                    {service.subServices.map((sub, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs text-mesh-text">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-white/90 font-medium">{sub.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors pt-2"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </SpotlightCard>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white glass-panel border border-cyan-400/30 hover:border-cyan-400 hover:text-cyan-400 transition-all shadow-cyan-glow"
          >
            <span>Compare All 6 Services & Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 bg-navy-900/40 border-y border-cyan-400/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="THE SYNTRIXMESH ADVANTAGE"
            title="Why Ambitious Leaders"
            highlight="Choose Syntrixmesh"
            subtitle="Software, physical IT infrastructure, and marketing rarely speak the same language. We unite them into an integrated enterprise system."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl glass-panel border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-mesh-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PROCESS TIMELINE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <SectionHeading
          badge="OUR METHODOLOGY"
          title="From Concept to Launch:"
          highlight="How We Deliver"
          subtitle="A battle-tested 5-phase engineering protocol that guarantees transparency, predictable milestones, and zero unpleasant surprises."
          align="center"
        />

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400/20 via-cyan-400 to-cyan-400/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-panel border border-cyan-400/15 flex flex-col justify-between hover:border-cyan-400/40 hover:shadow-cyan-glow transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-navy-950 font-heading font-bold text-sm flex items-center justify-center shadow-cyan-glow">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-gold-400 tracking-wider">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-base text-white mb-1">
                    {step.title}
                  </h4>
                  <span className="text-xs font-semibold text-cyan-400 block mb-3">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-mesh-text leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STATS COUNTERS */}
      <section className="py-20 bg-gradient-to-b from-navy-900/60 to-navy-950 border-y border-cyan-400/15 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {siteConfig.stats.map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl glass-panel border border-cyan-400/10 hover:border-cyan-400/30 transition-all">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-heading font-bold text-base text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-mesh-muted">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SLIDER / SHOWCASE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <SectionHeading
          badge="PROVEN RESULTS"
          title="What Founders Say About"
          highlight="Syntrixmesh"
          subtitle="Real reviews from executives who rely on our software, hardware, and AI systems every day."
          align="center"
        />

        <div className="mt-12 max-w-4xl mx-auto">
          <SpotlightCard className="p-8 sm:p-12 relative overflow-hidden">
            <div className="flex items-center gap-1 mb-6 text-gold-400">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400 stroke-gold-400" />
              ))}
            </div>

            <blockquote className="text-lg sm:text-2xl text-white font-heading font-medium leading-relaxed mb-8">
              &ldquo;{testimonials[activeTestimonial].content}&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-cyan-400/15">
              <div>
                <h5 className="font-heading font-bold text-white text-base">
                  {testimonials[activeTestimonial].name}
                </h5>
                <p className="text-xs text-mesh-text">
                  {testimonials[activeTestimonial].role} · <strong className="text-cyan-400">{testimonials[activeTestimonial].company}</strong> ({testimonials[activeTestimonial].location})
                </p>
                <span className="inline-block mt-1 text-[11px] font-semibold text-gold-400/90 uppercase tracking-wider">
                  Service: {testimonials[activeTestimonial].service}
                </span>
              </div>

              {/* Slider pagination dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      activeTestimonial === idx
                        ? "w-8 bg-cyan-400 shadow-cyan-glow"
                        : "w-2.5 bg-navy-700 hover:bg-navy-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* 8. FINAL BIG CTA BANNER & QUICK CONTACT TEASER */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="rounded-3xl p-8 sm:p-16 glass-panel border border-cyan-400/30 bg-gradient-to-br from-navy-900 via-navy-850 to-[#070B14] relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-400 border border-cyan-400/30">
                ✦ START YOUR PROJECT
              </span>

              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Have a Complex Tech Challenge?{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-gold-400 bg-clip-text text-transparent">
                  Let&apos;s Build the Solution.
                </span>
              </h2>

              <p className="text-mesh-text text-base sm:text-lg leading-relaxed">
                Whether you need a cutting-edge web application, an autonomous 24/7 AI agent, or a complete workplace IT setup in Ludhiana or abroad, founder Manmeet Singh and our engineering team are ready to execute.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <span>Book Free 30-Min Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
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

            {/* Quick Teaser Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl glass-panel border border-cyan-400/20 bg-navy-950/70">
              <h4 className="font-heading font-bold text-white text-lg mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-400" />
                Direct Communication Guarantee
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-mesh-text">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">2-Hour Rapid Response</strong>
                    Inquiries reviewed directly by principal engineers, not junior sales reps.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Strict NDA Protected</strong>
                    Your intellectual property, patents, and business concepts are 100% safeguarded.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Global Remote Delivery</strong>
                    Seamless collaboration across IST, EST, PST, GMT, and GST time zones.
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-cyan-400/15 text-center">
                <span className="text-xs text-mesh-muted">Prefer calling directly?</span>
                <a
                  href={`tel:${siteConfig.contact.phoneClean}`}
                  className="block text-cyan-400 font-heading font-bold text-base hover:underline mt-1"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
