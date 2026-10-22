import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Calculator } from "lucide-react";
import GetQuoteForm from "@/components/quote/GetQuoteForm";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Get a Free Quote | Syntrixmesh Solutions",
  description:
    "Configure your project scope, select required engineering disciplines, and receive a direct proposal from founder Manmeet Singh. Zero bloated retainers, 100% custom-built.",
  alternates: {
    canonical: "/get-quote",
  },
  openGraph: {
    title: "Get a Free Quote | Syntrixmesh Solutions",
    description:
      "Configure your technical scope and request a direct proposal from founder Manmeet Singh. Ludhiana HQ, global delivery.",
    url: `${siteConfig.domain}/get-quote`,
  },
};

export default function GetQuotePage() {
  return (
    <div className="relative py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background ambient glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Scope Starter</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Configure Your Scope,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-gold-400">
              Get an Honest Proposal.
            </span>
          </h1>

          <p className="mt-4 text-mesh-muted text-base sm:text-lg leading-relaxed">
            Select what you need below. Our principal engineering team in Jhande, Ludhiana will review your requirements and provide an architecture roadmap with zero automated markups.
          </p>
        </div>

        {/* 3-Step Interactive Form */}
        <GetQuoteForm />

        {/* Bottom Contact Alternative */}
        <div className="mt-16 text-center text-xs text-mesh-muted">
          <span>Have general inquiries or need informal advice? </span>
          <Link href="/contact" className="text-cyan-400 hover:underline font-semibold">
            Visit our general Contact &amp; Consultation page →
          </Link>
        </div>
      </div>
    </div>
  );
}
