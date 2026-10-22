import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { 
  ArrowRight, 
  Sparkles, 
  Check, 
  ArrowUpRight, 
  Clock, 
  HelpCircle, 
  BookOpen, 
  ShieldCheck, 
  MapPin, 
  Award,
  Layers,
  ChevronRight
} from "lucide-react";

import { Hero3DContainer } from "@/components/home/Hero3DContainer";
import { ServicesBento } from "@/components/home/ServicesBento";
import { LiveChatDemo } from "@/components/home/LiveChatDemo";
import { ProjectEstimator } from "@/components/home/ProjectEstimator";
import { GlobalDeliveryMap } from "@/components/home/GlobalDeliveryMap";
import TechMarquee from "@/components/ui/TechMarquee";
import { siteConfig } from "@/data/siteConfig";
import { allFaqs } from "@/data/faqs";
import { blogPosts } from "@/data/blog";

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
    title: "Discover & Scope",
    subtitle: "Architecture Blueprint",
    description: "We audit your existing tech stack, identify bottlenecks, define operational KPIs, and draft a high-clarity technical roadmap with founder oversight.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    subtitle: "High-Fidelity UX",
    description: "Interactive wireframes, tokenized component design systems, and responsive layouts tailored to your exact brand aesthetics.",
  },
  {
    step: "03",
    title: "Develop & Automate",
    subtitle: "Full-Stack Precision",
    description: "Type-safe Next.js codebases, modular APIs, database modeling, and autonomous AI chat integrations with 24/7 customer capture.",
  },
  {
    step: "04",
    title: "Audit & Deploy",
    subtitle: "Production Hardening",
    description: "Accessibility checks, automated security scans, edge caching, and zero-downtime deployment with complete DNS and SSL configuration.",
  },
  {
    step: "05",
    title: "Support & Accelerate",
    subtitle: "Long-Term Partnership",
    description: "Direct founder support, proactive security updates, performance monitoring, and iterative enhancements as your business scales.",
  },
];

export default function HomePage() {
  const previewFaqs = allFaqs.slice(0, 4);
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <div className="relative overflow-hidden bg-[#070B14] text-white">
      
      {/* 1. HERO SECTION (Split layout: Instant Server-rendered LCP on left, 3D on right) */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center pt-8 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-hero-mesh noise-overlay">
        
        {/* Ambient Top Glow Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-gold-500/10 rounded-full blur-[130px] pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Side: Server-rendered HTML (Appears instantly as LCP with 0 JS delay) */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-400/30 text-xs sm:text-sm font-semibold text-cyan-300 shadow-[0_0_20px_rgba(47,184,255,0.15)] mb-6 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" aria-hidden="true" />
                <span>Ludhiana HQ · Global Delivery</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
                Websites, AI Agents &amp; IT Infrastructure,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-gold-400 underline decoration-cyan-400/30 decoration-wavy decoration-2">
                  Engineered to Grow Your Business.
                </span>
              </h1>

              {/* Honest Subheading */}
              <p className="mt-5 text-base sm:text-lg text-mesh-text max-w-2xl leading-relaxed">
                Syntrixmesh Solutions engineers custom web platforms, autonomous AI chat systems, and high-performance IT infrastructure for ambitious businesses worldwide. Direct founder engineering, zero bloated retainers.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full font-semibold text-white text-base bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group text-center"
                >
                  <span>Get a Free Consultation</span>
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
              <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-mesh-text">
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

            {/* Right Side: 3D Medallion Scene (Desktop) & Elegant CSS Fallback (Mobile) */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <Hero3DContainer />
            </div>

          </div>
        </div>
      </section>

      {/* 2. TECH STACK MARQUEE (CSS-only animation, reduced-motion aware) */}
      <TechMarquee />

      {/* 3. SERVICES BENTO GRID */}
      <div className="content-auto">
        <ServicesBento />
      </div>

      {/* 4. LIVE AI CHAT DEMO SECTION ("See Your AI Assistant in Action") */}
      <div className="content-auto">
        <LiveChatDemo />
      </div>

      {/* 5. PROJECT ESTIMATOR / QUOTE STARTER */}
      <div className="content-auto">
        <ProjectEstimator />
      </div>

      {/* 6. GLOBAL DELIVERY MAP */}
      <div className="content-auto">
        <GlobalDeliveryMap />
      </div>

      {/* 7. PROCESS TIMELINE */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative content-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Structured Engineering Protocol</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            From Blueprint to Launch:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-gold-400">
              How We Deliver.
            </span>
          </h2>
          <p className="mt-4 text-mesh-muted text-base sm:text-lg">
            A 5-phase engineering protocol that guarantees transparency, predictable milestones, and zero unpleasant surprises.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Subtle horizontal connecting line on desktop */}
          <div 
            className="hidden lg:block absolute top-12 left-8 right-8 h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-400/40 to-gold-500/20 -translate-y-1/2 z-0" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl glass-panel border border-cyan-400/20 bg-navy-900/70 flex flex-col justify-between hover:border-cyan-400/50 hover:shadow-cyan-glow transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-heading font-bold text-sm flex items-center justify-center shadow-cyan-glow group-hover:scale-105 transition-transform">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-gold-400 tracking-wider">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-xs font-semibold text-cyan-400 block mb-3">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-mesh-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ PREVIEW SECTION */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative content-auto border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Answers to Common Questions</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Questions
              </span>
            </h2>
            <p className="mt-3 text-mesh-muted text-sm sm:text-base">
              Direct and transparent answers about our location, engagement models, code ownership, and AI capabilities.
            </p>
          </div>

          <div className="space-y-4">
            {previewFaqs.map((faq) => (
              <div
                key={faq.id}
                className="p-6 rounded-2xl glass-panel border border-cyan-400/20 bg-navy-900/60"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-white">
                    {faq.question}
                  </h3>
                  <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full shrink-0">
                    {faq.category}
                  </span>
                </div>
                <p className="mt-3 text-sm text-mesh-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-cyan-400 glass-panel border border-cyan-400/30 hover:border-cyan-400 hover:text-white transition-all"
            >
              <span>Explore all 18 FAQs & technical questions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. BLOG PREVIEW SECTION */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative content-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-gold-400 border border-gold-400/25 bg-gold-400/5 mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Engineering &amp; Strategy Insights</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Latest from Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-cyan-400">
                Knowledge Desk
              </span>
            </h2>
            <p className="mt-2 text-mesh-muted text-sm sm:text-base">
              Practical architecture breakdowns, AI workflows, and web performance guides.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
          >
            <span>View all articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {previewPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl glass-panel border border-cyan-400/20 bg-navy-900/60 p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-400/50 hover:shadow-cyan-glow transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-mesh-muted mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-mesh-muted" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-mesh-muted line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-navy-950 border border-gold-400/40 p-0.5 overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-gray-300 font-medium">{post.author.name}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:text-gold-300 transition-colors"
                >
                  <span>Read</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 10. FINAL STRATEGY CTA BANNER */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative content-auto">
        <div className="rounded-3xl p-8 sm:p-14 glass-panel border border-cyan-400/30 bg-gradient-to-br from-navy-900 via-navy-850 to-[#070B14] relative overflow-hidden shadow-2xl">
          
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

              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
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
                  href="/contact"
                  className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <span>Book Free 30-Min Strategy Call</span>
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
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl glass-panel border border-cyan-400/20 bg-navy-950/80 space-y-4">
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

          </div>
        </div>
      </section>

    </div>
  );
}
