import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  Code2, 
  Cpu, 
  TrendingUp, 
  Server, 
  Bot, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  PhoneCall, 
  MessageSquare,
  ShieldCheck,
  Zap,
  Globe2
} from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { servicesData, ServiceCategory } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Engineering Services & Solutions",
  description:
    "Explore our 6 core technology disciplines: Web & Mobile Development, Software Engineering, Digital Marketing, Physical IT Infrastructure, AI Chat Automation, and Web3 Dapps.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Engineering Services | Syntrixmesh Solutions",
    description: "Explore our 6 core technology disciplines from web platforms to AI and enterprise IT infrastructure.",
  },
};

const serviceIcons: Record<string, React.ElementType> = {
  "development": Code2,
  "software-engineering": Cpu,
  "digital-marketing": TrendingUp,
  "hardware-it": Server,
  "ai-chat-automation": Bot,
  "web3-dapps": Layers,
};

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-mesh-muted mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-cyan-400 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-cyan-400 font-medium">Services</span>
      </nav>

      {/* Hero Banner with Word-by-Word Reveal */}
      <div className="relative text-center max-w-4xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-400/30 text-xs font-semibold text-cyan-400 shadow-cyan-glow mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>END-TO-END TECHNOLOGY CAPABILITIES</span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
          Six Core Disciplines.{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            One Unified Partner
          </span>
          .
        </h1>

        <p className="mt-6 text-base sm:text-lg text-mesh-text leading-relaxed max-w-2xl mx-auto">
          We eliminate the friction of coordinating multiple vendors. From modern web applications and autonomous AI agents to physical server hardware and audited smart contracts, we deliver complete technological sovereignty for your business.
        </p>

        {/* Quick Highlights Strip */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-mesh-text pt-8 border-t border-cyan-400/10">
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Sub-Second Performance</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>100% IP Code Ownership</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Globe2 className="w-4 h-4 text-cyan-400" />
            <span>Ludhiana & Global Delivery</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Bot className="w-4 h-4 text-cyan-400" />
            <span>24/7 Context AI Agents</span>
          </div>
        </div>
      </div>

      {/* Grid of 6 Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {servicesData.map((service: ServiceCategory, idx: number) => {
          const Icon = serviceIcons[service.slug] || Code2;

          return (
            <SpotlightCard
              key={service.id}
              className="p-8 flex flex-col justify-between group hover:border-cyan-400/50 hover:shadow-cyan-glow transition-all duration-300"
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-navy-900 border border-cyan-400/25 flex items-center justify-center text-cyan-400 shadow-cyan-glow group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-navy-950 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-heading font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-navy-900 border border-cyan-400/20 text-cyan-300">
                    0{idx + 1}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block mb-1">
                    {service.badge}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-mesh-text leading-relaxed mb-6">
                  {service.tagline}
                </p>

                {/* Sub-Services Chips */}
                <div className="space-y-2 pt-4 border-t border-cyan-400/10 mb-8">
                  <span className="text-[11px] font-semibold text-white/70 uppercase tracking-wider block mb-2">
                    Key Deliverables:
                  </span>
                  {service.subServices.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 text-xs text-mesh-text"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="font-medium text-white/90 truncate">
                        {sub.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={`/services/${service.slug}`}
                className="w-full py-3 px-4 rounded-xl glass-panel border border-cyan-400/25 text-white text-xs font-semibold hover:border-cyan-400 hover:text-cyan-400 flex items-center justify-between group/link transition-all"
              >
                <span>Explore Full Capabilities</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 text-cyan-400" />
              </Link>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Why Full-Stack Integration Beats Multiple Agencies */}
      <section className="mb-24 rounded-3xl p-8 sm:p-12 glass-panel border border-cyan-400/20 bg-navy-900/40">
        <SectionHeading
          badge="THE MULTI-DISCIPLINARY ADVANTAGE"
          title="Why Full-Stack Integration"
          highlight="Outperforms Siloed Vendors"
          subtitle="When software engineers, hardware technicians, and AI automation specialists work under one roof, your execution speed triples and finger-pointing drops to zero."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 rounded-2xl glass-panel border border-cyan-400/15 bg-navy-950/60">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-bold mb-4">
              01
            </div>
            <h4 className="font-heading font-bold text-base text-white mb-2">
              Hardware + Cloud Harmony
            </h4>
            <p className="text-xs text-mesh-text leading-relaxed">
              We spec and build the exact on-premise compute workstations and local network infrastructure required to run your heavy software, AI models, and render pipelines.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-cyan-400/15 bg-navy-950/60">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-bold mb-4">
              02
            </div>
            <h4 className="font-heading font-bold text-base text-white mb-2">
              Tech-Backed Marketing
            </h4>
            <p className="text-xs text-mesh-text leading-relaxed">
              Google Ads convert significantly higher when landing pages load under 600ms and pass all Core Web Vitals audits. We code the landing pages ourselves.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-cyan-400/15 bg-navy-950/60">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-bold mb-4">
              03
            </div>
            <h4 className="font-heading font-bold text-base text-white mb-2">
              Autonomous 24/7 Operations
            </h4>
            <p className="text-xs text-mesh-text leading-relaxed">
              Every website or ERP we build can be plugged directly into our custom-trained WhatsApp AI agents, capturing leads and answering client questions while you sleep.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <div className="rounded-3xl p-8 sm:p-12 glass-panel border border-cyan-400/30 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-cyan-500/15 blur-[80px] pointer-events-none" />

        <div className="text-center lg:text-left space-y-2">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold block">
            CUSTOM ARCHITECTURE CONSULTATION
          </span>
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
            Not sure which exact stack fits your requirements?
          </h3>
          <p className="text-sm text-mesh-text max-w-xl">
            Founder Manmeet Singh and our principal engineering architects will analyze your operational bottlenecks and provide a transparent, fixed-scope proposal.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all text-center flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Talk to Our Team</span>
          </Link>
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-white/90 glass-panel border border-cyan-400/30 hover:border-cyan-400/70 hover:text-cyan-400 transition-all text-center flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
