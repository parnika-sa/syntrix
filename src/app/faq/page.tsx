import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { HelpCircle, Sparkles, MessageCircle, PhoneCall } from "lucide-react";
import FAQSearchAndList from "@/components/faq/FAQSearchAndList";
import { allFaqs } from "@/data/faqs";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Syntrixmesh Solutions",
  description:
    "Find clear answers about our web development, custom software, WhatsApp AI chatbots, hardware procurement, and pricing models in Ludhiana and globally.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Syntrixmesh Solutions",
    description:
      "Answers on code ownership, delivery timelines, AI chatbot training, and hardware warranties.",
    url: `${siteConfig.domain}/faq`,
  },
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.domain,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "FAQ",
            item: `${siteConfig.domain}/faq`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: allFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="relative py-16 sm:py-24 max-w-5xl mx-auto w-full" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-mesh-radial pointer-events-none opacity-40" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Transparent Engineering Answers</span>
        </div>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-gold-400">Questions</span>
        </h1>
        <p className="mt-4 text-mesh-muted text-base sm:text-lg">
          Clear, straightforward answers about our software engineering, AI automation, hardware setups, code ownership, and billing.
        </p>
      </div>

      {/* Interactive FAQ Filter & Accordion */}
      <div className="relative z-10">
        <FAQSearchAndList />
      </div>

      {/* Bottom Still Have Questions Banner */}
      <div className="mt-20 rounded-3xl glass-panel p-8 sm:p-12 border border-gold-400/30 bg-gradient-to-r from-navy-900/90 via-navy-850/90 to-navy-900/90 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Still Have Specific Questions?</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
          Speak Directly with Our Engineering Desk
        </h3>
        <p className="text-sm text-mesh-muted max-w-xl mx-auto mt-2 leading-relaxed">
          Every business architecture is unique. Book a 20-minute feasibility consultation with founder {siteConfig.founder.name}.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-opacity"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Schedule Consultation</span>
          </Link>
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-white glass-panel border border-cyan-400/30 hover:border-cyan-400/60 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-cyan-400" />
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
