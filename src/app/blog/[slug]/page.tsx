import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  BookOpen 
} from "lucide-react";
import { blogPosts, getBlogPostBySlug, getOtherBlogPosts } from "@/data/blog";
import { siteConfig } from "@/data/siteConfig";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Syntrixmesh Engineering Blog`,
    description: post.summary,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${post.title} | Syntrixmesh Solutions`,
      description: post.summary,
      url: `${siteConfig.domain}/blog/${post.slug}`,
      publishedTime: post.isoDate,
      authors: [post.author.name],
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: ["/og-image.png"],
    },
  };
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const relatedPosts = getOtherBlogPosts(post.slug);

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
            name: "Blog",
            item: `${siteConfig.domain}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${siteConfig.domain}/blog/${post.slug}`,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.summary,
        datePublished: post.isoDate,
        dateModified: post.isoDate,
        url: `${siteConfig.domain}/blog/${post.slug}`,
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
          url: `${siteConfig.domain}/about#founder`,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.domain,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.domain}/logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteConfig.domain}/blog/${post.slug}`,
        },
      },
    ],
  };

  return (
    <article className="relative py-12 sm:py-20 mx-auto w-full" style={{ maxWidth: "1360px", paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Breadcrumb & Back Link */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-cyan-400/15">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>

        <nav aria-label="Breadcrumb" className="text-xs text-mesh-muted flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-cyan-400 font-medium truncate max-w-[200px]">{post.category}</span>
        </nav>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto mb-14 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-6">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{post.category}</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="mt-6 text-base sm:text-xl text-mesh-text leading-relaxed">
          {post.summary}
        </p>

        {/* Metadata Bar */}
        <div className="mt-8 pt-6 border-t border-cyan-400/10 flex flex-wrap items-center justify-between gap-4 text-xs text-mesh-muted">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white p-0.5 shadow-cyan-glow flex items-center justify-center overflow-hidden">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                {post.author.name}
              </div>
              <div className="text-xs text-mesh-muted">
                {post.author.role} &middot; Jhande, Ludhiana
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-mesh-muted">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-mesh-muted">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              {post.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Main Grid: Sticky Sidebar + Article Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
        
        {/* Sticky Table of Contents (Desktop) */}
        <aside className="hidden lg:block lg:col-span-4 space-y-6">
          <div className="sticky top-28 rounded-2xl glass-panel p-6 border border-cyan-400/20 bg-navy-900/60 shadow-lg">
            <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Table of Contents</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-mesh-muted">
              {post.toc.map((item, idx) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-cyan-400 transition-colors flex items-start gap-2 py-0.5"
                  >
                    <span className="text-cyan-400 font-mono text-[11px] mt-0.5">0{idx + 1}.</span>
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-cyan-400/10">
              <span className="text-[11px] font-semibold text-white block mb-1">
                Consult with Author
              </span>
              <p className="text-[11px] text-mesh-muted mb-3">
                Need guidance applying this technology to your organization?
              </p>
              <Link
                href="/contact"
                className="block text-center w-full py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-opacity"
              >
                Discuss with Manmeet
              </Link>
            </div>
          </div>
        </aside>

        {/* Article Body */}
        <div className="lg:col-span-8 space-y-8 text-mesh-text text-sm sm:text-base leading-relaxed">
          <div
            className="prose prose-invert max-w-none space-y-6"
            dangerouslySetInnerHTML={{
              __html: post.content
                .split("\n\n")
                .map((block) => {
                  if (block.startsWith("### ")) {
                    const title = block.replace("### ", "").trim();
                    const tocMatch = post.toc.find(
                      (t) => t.title.toLowerCase() === title.toLowerCase()
                    );
                    const id = tocMatch ? tocMatch.id : "";
                    return `<h2 id="${id}" class="text-xl sm:text-2xl font-heading font-bold text-white pt-6 pb-2 border-b border-cyan-400/15 scroll-mt-28">${title}</h2>`;
                  }
                  if (block.startsWith("---")) {
                    return `<hr class="border-cyan-400/10 my-8"/>`;
                  }
                  if (block.startsWith("- ")) {
                    const items = block
                      .split("\n")
                      .filter((l) => l.startsWith("- "))
                      .map((l) => `<li class="ml-4 list-disc">${l.replace("- ", "")}</li>`)
                      .join("");
                    return `<ul class="space-y-2 text-mesh-text my-4">${items}</ul>`;
                  }
                  if (/^\d+\.\s/.test(block)) {
                    const items = block
                      .split("\n")
                      .filter((l) => /^\d+\.\s/.test(l))
                      .map((l) => `<li class="ml-4 list-decimal">${l.replace(/^\d+\.\s/, "")}</li>`)
                      .join("");
                    return `<ol class="space-y-2 text-mesh-text my-4">${items}</ol>`;
                  }
                  return `<p class="leading-relaxed text-mesh-text">${block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>').replace(/\`([^\`]+)\`/g, '<code class="px-1.5 py-0.5 rounded bg-navy-800 text-cyan-300 font-mono text-xs">$1</code>')}</p>`;
                })
                .join(""),
            }}
          />

          {/* End-of-article Author Signature */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel border border-cyan-400/20 bg-gradient-to-br from-navy-900/90 to-navy-950/90 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-white p-1 shadow-cyan-glow shrink-0 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="Manmeet Singh"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center sm:text-left space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Author & Principal Architect
              </div>
              <h4 className="text-lg font-heading font-bold text-white">
                {post.author.name}
              </h4>
              <p className="text-xs text-mesh-muted leading-relaxed">
                Leading Syntrixmesh Solutions from Jhande, Ludhiana. Architecting mission-critical web platforms, autonomous AI WhatsApp systems, and enterprise IT infrastructure for clients globally.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-20 pt-12 border-t border-cyan-400/15 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">
                CONTINUE READING
              </span>
              <h3 className="text-2xl font-heading font-bold text-white mt-1">
                More Technical Essays
              </h3>
            </div>
            <Link
              href="/blog"
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="p-6 rounded-2xl glass-panel border border-cyan-400/15 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all group block"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <span className="text-[11px] text-mesh-muted flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold-400" />
                    {rel.readTime}
                  </span>
                </div>
                <h4 className="text-base font-heading font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-mesh-muted line-clamp-2 mt-2 leading-relaxed">
                  {rel.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
