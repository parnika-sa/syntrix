import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { 
  FolderGit2, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  BarChart3,
  Calendar
} from "lucide-react";
import Card3D from "@/components/ui/Card3D";
import { portfolioProjects } from "@/data/portfolio";
import { siteConfig } from "@/data/siteConfig";
import { SHOW_PORTFOLIO } from "@/config/site";

// NOTE: To re-enable the portfolio page across the site, set SHOW_PORTFOLIO = true in @/config/site
export const metadata: Metadata = SHOW_PORTFOLIO
  ? {
      title: "Case Studies & Client Portfolio | Syntrixmesh Solutions",
      description:
        "Explore our enterprise case studies: custom ERP systems in Ludhiana, AI WhatsApp automations, headless e-commerce, multi-GPU workstation setups, and Web3 smart contracts.",
      alternates: {
        canonical: "/portfolio",
      },
    }
  : {
      title: "Page Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };

export default function PortfolioPage() {
  // If the portfolio is temporarily hidden via site flag, return 404 notFound()
  // TO BRING BACK: set SHOW_PORTFOLIO = true in src/config/site.ts
  if (!SHOW_PORTFOLIO) {
    notFound();
  }

  return (
    <div className="relative py-16 sm:py-24">

      {/* Background ambient mesh glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-mesh-radial pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Proven Engineering Outcomes</span>
          </div>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Case Studies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Delivered Work</span>
          </h1>
          <p className="mt-4 text-mesh-muted text-base sm:text-lg">
            Real enterprise software, high-throughput cloud platforms, AI conversational agents, and turnkey workstation infrastructure engineered by Syntrixmesh Solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {portfolioProjects.map((project) => (
            <Card3D key={project.id} glowColor="cyan" maxTilt={4} className="rounded-3xl">
              <article
                className="rounded-3xl glass-panel p-6 sm:p-10 border border-cyan-400/20 bg-gradient-to-br from-navy-900/90 to-navy-850/80 shadow-xl relative overflow-hidden transition-all duration-300 hover:border-cyan-400/40"
              >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left meta & overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 border border-cyan-400/30">
                      {project.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-mesh-muted">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                      {project.year}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-white leading-snug">
                    {project.title}
                  </h2>

                  <div className="text-xs font-medium text-gold-400">
                    Client: <span className="text-white">{project.client}</span>
                  </div>

                  <p className="text-sm text-mesh-text leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="pt-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-mesh-muted mb-2 flex items-center gap-1.5">
                      <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                      Verified Outcomes
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="px-3 py-2 rounded-xl bg-navy-950/70 border border-cyan-400/20 text-xs font-semibold text-cyan-300 flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Architectural breakdown */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:pl-6 lg:border-l lg:border-cyan-400/10">
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-navy-950/50 border border-white/5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-white/90 mb-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        The Operational Challenge
                      </h4>
                      <p className="text-xs sm:text-sm text-mesh-muted leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-navy-950/50 border border-cyan-400/15">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        Syntrixmesh Engineered Solution
                      </h4>
                      <p className="text-xs sm:text-sm text-mesh-text leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Tags & CTA */}
                  <div className="pt-4 border-t border-cyan-400/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-mesh-muted bg-white/[0.03] border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/get-quote?service=${encodeURIComponent(project.category)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-cyan-500/20 border border-cyan-400/40 hover:bg-cyan-500/30 transition-colors"
                    >
                      <span>Architect Similar System</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                    </Link>
                  </div>
                </div>

              </div>
            </article>
          </Card3D>
        ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center rounded-3xl glass-panel p-8 sm:p-12 border border-gold-400/30 bg-gradient-to-r from-navy-900/90 via-navy-850/90 to-navy-900/90 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Have a Complex Engineering Requirement?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Let&apos;s Build Your Next Mission-Critical Platform
          </h2>
          <p className="text-sm sm:text-base text-mesh-muted max-w-2xl mx-auto mt-3">
            Every business has unique architectural constraints. Book a direct technical discovery call with founder {siteConfig.founder.name}.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-opacity"
            >
              Request Scoping Call
            </Link>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full text-sm font-medium text-white glass-panel border border-cyan-400/30 hover:border-cyan-400/60 transition-colors"
            >
              WhatsApp Engineering Lead
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
