import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, ShieldCheck, Mail, Phone } from "lucide-react";
import { company } from "@/data/company";

export interface LegalSection {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  badge: string;
  lastUpdated: string;
  sections: LegalSection[];
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  badge,
  lastUpdated,
  sections,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-mesh-muted mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-cyan-400 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-cyan-400 font-medium">{title}</span>
      </nav>

      {/* Page Header */}
      <div className="mb-14 pb-8 border-b border-cyan-400/15">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-400/30 text-xs font-semibold text-cyan-400 mb-4">
          <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{badge}</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-mesh-muted">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
            Last Updated: {lastUpdated}
          </span>
          <span>•</span>
          <span>Syntrixmesh Solutions · Jhande, Ludhiana, Punjab, India</span>
        </div>
      </div>

      {/* Content Layout with Desktop Table of Contents Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sticky Sidebar on Desktop */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            <div className="p-6 rounded-2xl glass-panel border border-cyan-400/20 bg-navy-950/80">
              <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Table of Contents
              </h2>
              <nav aria-label="Table of contents">
                <ul className="space-y-2 text-xs">
                  {sections.map((section, idx) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-mesh-text hover:text-cyan-400 transition-colors block py-1 border-l-2 border-transparent hover:border-cyan-400 pl-3 leading-relaxed"
                      >
                        <span className="text-cyan-400/70 mr-1.5 font-mono">{idx + 1}.</span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Quick Contact Card */}
            <div className="p-6 rounded-2xl glass-panel border border-cyan-400/15 bg-navy-900/50 space-y-3 text-xs">
              <h3 className="font-heading font-semibold text-white text-sm">
                Questions about this policy?
              </h3>
              <p className="text-mesh-text leading-relaxed">
                Reach out to our leadership team for clarifications regarding our contractual terms and compliance.
              </p>
              <div className="pt-2 space-y-2">
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-center gap-2 text-cyan-400 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{company.contact.email}</span>
                </a>
                <a
                  href={`tel:${company.contact.phoneClean}`}
                  className="flex items-center gap-2 text-mesh-text hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0 text-cyan-400" aria-hidden="true" />
                  <span>{company.contact.phone}</span>
                </a>
              </div>
              <div className="pt-3 border-t border-cyan-400/10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  <span>Go to Contact Page</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Document Body */}
        <main className="lg:col-span-8 space-y-12 text-mesh-text text-sm sm:text-base leading-relaxed">
          {children}

          {/* Legal Notice Disclaimer Box */}
          <div className="p-5 rounded-xl bg-navy-900/80 border border-gold-400/30 text-xs text-mesh-text leading-relaxed mt-12">
            <p className="font-medium text-white mb-1">
              <strong>Legal Notice:</strong>
            </p>
            <p className="italic text-mesh-muted">
              This document is a general template; please have it reviewed by a legal professional.
            </p>
          </div>

          {/* Back to Contact CTA */}
          <div className="pt-8 border-t border-cyan-400/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-mesh-muted hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all"
            >
              <span>Have Questions? Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
