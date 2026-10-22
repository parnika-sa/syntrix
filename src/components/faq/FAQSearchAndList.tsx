"use client";

import React, { useState, useMemo } from "react";
import { Search, ChevronDown, HelpCircle, X, Sparkles } from "lucide-react";
import { allFaqs, faqCategories, FAQItem } from "@/data/faqs";

export default function FAQSearchAndList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(["gen-1"]));

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search Input Box */}
      <div className="relative max-w-xl mx-auto">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-cyan-400 absolute left-4 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. source code, WhatsApp, Ludhiana, warranty)..."
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-navy-900/90 border border-cyan-400/25 text-white placeholder-mesh-muted text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:shadow-cyan-glow transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 p-1 rounded-lg text-mesh-muted hover:text-white transition-colors"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {faqCategories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-cyan-400 text-navy-950 shadow-cyan-glow font-bold scale-105"
                  : "bg-navy-900/60 text-mesh-muted hover:text-white border border-white/5 hover:border-cyan-400/30"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Active Count / Status */}
      <div className="flex items-center justify-between text-xs text-mesh-muted px-2">
        <span>
          Showing <strong className="text-white">{filteredFaqs.length}</strong> questions
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </span>
        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* FAQ Accordion List */}
      {filteredFaqs.length > 0 ? (
        <div className="space-y-4">
          {filteredFaqs.map((faq: FAQItem) => {
            const isOpen = openIds.has(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-2xl glass-panel border border-cyan-400/15 bg-navy-900/40 hover:border-cyan-400/30 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-ans-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-cyan-400"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                      ?
                    </span>
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 mb-1.5">
                        {faq.category}
                      </span>
                      <h3 className="font-heading font-semibold text-base sm:text-lg text-white">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg bg-navy-800/80 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-cyan-400/20" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* CSS Grid Animation for Smooth, Zero-JS Collapse */}
                <div
                  id={`faq-ans-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-sm text-mesh-text leading-relaxed border-t border-cyan-400/10 pl-14">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-3xl glass-panel p-10 text-center border border-white/10 space-y-3">
          <HelpCircle className="w-10 h-10 text-cyan-400 mx-auto opacity-60" />
          <h4 className="text-lg font-heading font-bold text-white">
            No matching questions found
          </h4>
          <p className="text-xs sm:text-sm text-mesh-muted max-w-md mx-auto">
            Have a specific requirement not listed here? Ask founder Manmeet Singh directly.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/918054080370?text=Hi%20Syntrixmesh%20Solutions%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-opacity"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask Directly on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
