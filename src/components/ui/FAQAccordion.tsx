"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ } from "@/data/services";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-navy-900/90 border-cyan-400/40 shadow-cyan-glow"
                : "bg-navy-950/60 border-cyan-400/15 hover:border-cyan-400/30"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-btn-${index}`}
            >
              <div className="flex items-center gap-3">
                <HelpCircle
                  className={`w-5 h-5 shrink-0 transition-colors ${
                    isOpen ? "text-cyan-400" : "text-mesh-muted"
                  }`}
                  aria-hidden="true"
                />
                <span className="font-heading font-semibold text-base sm:text-lg text-white">
                  {faq.question}
                </span>
              </div>
              <div
                className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen
                    ? "bg-cyan-400 text-navy-950 border-cyan-400 shadow-[0_0_10px_#2FB8FF]"
                    : "border-cyan-400/20 text-mesh-muted"
                }`}
                aria-hidden="true"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-btn-${index}`}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-mesh-text leading-relaxed border-t border-cyan-400/10">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

