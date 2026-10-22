import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Insights",
  description:
    "Original technical guides, architecture best practices, AI automation breakdowns, and Web3 insights written by founder Manmeet Singh and the Syntrixmesh engineering team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Engineering Blog & Technical Insights | Syntrixmesh Solutions",
    description:
      "Deep dives into AI WhatsApp agents, sub-second web performance, Core Web Vitals, and institutional Web3 protocols.",
    url: `${siteConfig.domain}/blog`,
  },
};

export default function BlogListingPage() {
  return (
    <div className="relative py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background ambient mesh glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-mesh-radial pointer-events-none opacity-40" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Technical Architecture & Strategy</span>
        </div>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Syntrixmesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-gold-400">Engineering Blog</span>
        </h1>
        <p className="mt-4 text-mesh-muted text-base sm:text-lg">
          Practical essays on software engineering, 24/7 AI automation, web performance optimization, and blockchain architecture.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-3xl glass-panel p-6 sm:p-8 border border-cyan-400/20 bg-gradient-to-br from-navy-900/90 to-navy-950/90 flex flex-col justify-between hover:border-cyan-400/40 hover:shadow-cyan-glow transition-all duration-300 group"
          >
            <div>
              {/* Category & Read Time */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 border border-cyan-400/25">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-mesh-muted">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-heading font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug mb-3">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-mesh-muted leading-relaxed mb-6">
                {post.summary}
              </p>
            </div>

            {/* Author & CTA */}
            <div className="pt-4 border-t border-cyan-400/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white p-0.5 shadow-cyan-glow flex items-center justify-center overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">
                    {post.author.name}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-mesh-muted">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy-800 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-navy-950 transition-all duration-200"
                aria-label={`Read article: ${post.title}`}
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Newsletter / Consultation Callout */}
      <div className="mt-20 rounded-3xl glass-panel p-8 sm:p-12 border border-gold-400/30 bg-gradient-to-r from-navy-900/90 via-navy-850/90 to-navy-900/90 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Have an Engineering Challenge?</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
          Apply These Modern Architectural Standards to Your Business
        </h3>
        <p className="text-sm text-mesh-muted max-w-2xl mx-auto mt-3 leading-relaxed">
          From deploying custom AI WhatsApp agents to engineering sub-second Next.js web applications, we build systems that scale your company.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-opacity"
          >
            Schedule Free Technical Consultation
          </Link>
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full text-sm font-medium text-white glass-panel border border-cyan-400/30 hover:border-cyan-400/60 transition-colors"
          >
            Direct WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
