"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSlider() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const current = testimonials[activeTestimonial];

  return (
    <div className="mt-12 max-w-4xl mx-auto">
      <div className="p-8 sm:p-12 rounded-2xl glass-panel border border-cyan-400/20 relative overflow-hidden transition-all duration-300">
        <div className="flex items-center gap-1 mb-6 text-gold-400">
          {[...Array(current.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-gold-400 stroke-gold-400" />
          ))}
        </div>

        <blockquote className="text-lg sm:text-2xl text-white font-heading font-medium leading-relaxed mb-8">
          &ldquo;{current.content}&rdquo;
        </blockquote>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-cyan-400/15">
          <div>
            <div className="font-heading font-bold text-white text-base">
              {current.name}
            </div>
            <p className="text-xs text-mesh-text">
              {current.role} · <strong className="text-cyan-400">{current.company}</strong> ({current.location})
            </p>
            <span className="inline-block mt-1 text-[11px] font-semibold text-gold-400/90 uppercase tracking-wider">
              Service: {current.service}
            </span>
          </div>

          {/* Slider pagination dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  activeTestimonial === idx
                    ? "w-8 bg-cyan-400 shadow-cyan-glow"
                    : "w-2.5 bg-navy-700 hover:bg-navy-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
