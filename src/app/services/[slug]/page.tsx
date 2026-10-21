import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  TrendingUp, 
  Server, 
  Bot, 
  Layers, 
  Sparkles, 
  MessageCircle, 
  PhoneCall 
} from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceBackground from "@/components/canvas/ServiceBackground";
import AnimatedTimeline from "@/components/ui/AnimatedTimeline";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { 
  servicesData, 
  getServiceBySlug, 
  getOtherServices 
} from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

const serviceIcons: Record<string, React.ElementType> = {
  "development": Code2,
  "software-engineering": Cpu,
  "digital-marketing": TrendingUp,
  "hardware-it": Server,
  "ai-chat-automation": Bot,
  "web3-dapps": Layers,
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: `${service.title} | Syntrixmesh Solutions`,
    description: service.overview,
    openGraph: {
      title: `${service.title} | Syntrixmesh Solutions`,
      description: service.tagline,
      url: `${siteConfig.domain}/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const Icon = serviceIcons[service.slug] || Code2;
  const otherServices = getOtherServices(service.slug);

  return (
    <div className="relative overflow-hidden">
      
      {/* 1. HERO SECTION WITH SPECIALIZED ANIMATED BACKGROUND */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Dynamic canvas background tailored to this service */}
        <ServiceBackground slug={service.slug} />

        {/* Top ambient radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          
          {/* Breadcrumb Navigation */}
          <nav className="inline-flex items-center gap-2 text-xs text-mesh-muted mb-6 glass-panel px-4 py-1.5 rounded-full border border-cyan-400/20">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-cyan-400 font-medium">{service.shortTitle}</span>
          </nav>

          {/* Large Animated Icon */}
          <div className="w-20 h-20 rounded-3xl bg-navy-900 border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-cyan-glow mx-auto mb-8 animate-float">
            <Icon className="w-10 h-10" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-xs font-semibold text-cyan-400 mb-4 shadow-[0_0_15px_rgba(47,184,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          {/* Tagline */}
          <p className="mt-6 text-base sm:text-xl text-mesh-text leading-relaxed max-w-2xl mx-auto">
            {service.tagline}
          </p>

          {/* Two CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Get a Free Consultation</span>
            </Link>

            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full font-semibold text-white glass-panel border border-cyan-400/30 hover:border-cyan-400 hover:text-cyan-400 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-14 glass-panel border border-cyan-400/20 bg-gradient-to-br from-navy-900/90 to-navy-950/90 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <SectionHeading
              badge="ARCHITECTURAL OVERVIEW"
              title="Built for Speed, Reliability"
              highlight="& Measurable Impact"
            />
            <p className="text-base sm:text-lg text-mesh-text leading-relaxed mt-4">
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      {/* 3. SUB-SERVICES AS FEATURE CARDS WITH 3D TILT & SPOTLIGHT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          badge="DETAILED DELIVERABLES"
          title="What We Engineer"
          highlight="Under This Practice"
          subtitle="Three specialized sub-practices executed by principal specialists with zero outsourcing."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {service.subServices.map((sub, index) => (
            <SpotlightCard
              key={index}
              className="p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-900 border border-cyan-400/25 flex items-center justify-center text-cyan-400 shadow-cyan-glow mb-6 group-hover:scale-110 transition-transform">
                  <span className="font-heading font-bold text-sm">0{index + 1}</span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {sub.title}
                </h3>

                <p className="text-sm text-mesh-text leading-relaxed mb-6">
                  {sub.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-cyan-400/10">
                  <span className="text-[11px] font-semibold text-gold-400 uppercase tracking-wider block mb-2">
                    Scope & Features:
                  </span>
                  {sub.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-mesh-text">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-white/90 font-medium leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* 4. BENEFITS SECTION */}
      <section className="py-20 bg-navy-900/40 border-y border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="MEASURABLE ROI"
            title="Strategic Business Benefits"
            highlight="You Can Count On"
            subtitle="Technology is only valuable when it moves core business numbers. Here is what this practice delivers."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {service.benefits.map((benefit, bIdx) => (
              <div
                key={bIdx}
                className="p-6 rounded-2xl glass-panel border border-cyan-400/15 hover:border-cyan-400/40 hover:shadow-cyan-glow transition-all group"
              >
                {benefit.stat && (
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
                    {benefit.stat}
                  </div>
                )}
                <h4 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-xs sm:text-sm text-mesh-text leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS TIMELINE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          badge="EXECUTION PROTOCOL"
          title="From Discovery to Launch:"
          highlight="Our 5-Phase Process"
          subtitle="Predictable milestones, rigorous testing, and continuous visibility."
          align="center"
        />

        <div className="mt-12">
          <AnimatedTimeline steps={service.process} />
        </div>
      </section>

      {/* 6. FAQ ACCORDION SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <SectionHeading
          badge="FREQUENTLY ASKED QUESTIONS"
          title="Questions About"
          highlight={service.shortTitle}
          subtitle="Everything you need to know about our technology, deliverables, timelines, and security."
          align="center"
        />

        <div className="mt-10">
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* 7. FINAL BIG CTA BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-14 glass-panel border border-cyan-400/30 bg-gradient-to-r from-navy-900 via-navy-850 to-[#070B14] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-cyan-500/15 blur-[80px] pointer-events-none" />

          <div className="text-center lg:text-left space-y-2">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold block">
              ✦ ELEVATE YOUR OPERATIONS
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-4xl text-white">
              Ready to Implement {service.title}?
            </h3>
            <p className="text-sm text-mesh-text max-w-xl">
              Get in touch with founder Manmeet Singh and our engineering leads to explore architectural feasibility and receive a customized quote.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full font-semibold text-white glass-panel border border-cyan-400/30 hover:border-cyan-400/70 hover:text-cyan-400 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>WhatsApp Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. OTHER SERVICES STRIP */}
      <section className="py-16 bg-navy-900/30 border-t border-cyan-400/10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">
              EXPLORE MORE DISCIPLINES
            </span>
            <h4 className="font-heading font-bold text-xl text-white mt-1">
              Other Services by Syntrixmesh
            </h4>
          </div>

          <Link
            href="/services"
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {otherServices.map((other) => {
            const OtherIcon = serviceIcons[other.slug] || Code2;

            return (
              <Link
                key={other.id}
                href={`/services/${other.slug}`}
                className="p-4 rounded-2xl glass-panel border border-cyan-400/15 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-navy-900 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                  <OtherIcon className="w-4 h-4" />
                </div>
                <h5 className="font-heading font-semibold text-sm text-white group-hover:text-cyan-400 transition-colors">
                  {other.shortTitle}
                </h5>
                <p className="text-[11px] text-mesh-muted line-clamp-1 mt-1">
                  {other.tagline}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
}
