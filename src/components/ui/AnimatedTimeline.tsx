"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ProcessStep } from "@/data/services";

export default function AnimatedTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative max-w-4xl mx-auto py-8">
        {/* Central glowing vertical timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy-800 -translate-x-1/2">
          <div className="w-full h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-gold-400 shadow-[0_0_12px_#2FB8FF]" />
        </div>

        <div className="space-y-12 relative z-10">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.3) }}
                className={`flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                } gap-6 md:gap-12 pl-14 md:pl-0`}
              >
                {/* Content Card */}
                <div
                  className={`w-full md:w-1/2 ${
                    isEven ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <div className="p-6 rounded-2xl glass-panel border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-cyan-glow transition-all duration-300">
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        isEven ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      <span className="text-[11px] font-semibold text-gold-400 uppercase tracking-widest">
                        Phase {step.step}
                      </span>
                      <span className="text-mesh-muted">•</span>
                      <span className="text-xs font-semibold text-cyan-400">
                        {step.subtitle}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-lg text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-mesh-text leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Glowing Indicator Orb */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-navy-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 font-heading font-bold text-xs shadow-cyan-glow">
                  {step.step}
                </div>

                {/* Empty placeholder spacer for alternating grid layout */}
                <div className="hidden md:block w-1/2" />
              </m.div>
            );
          })}
        </div>
      </div>
    </LazyMotion>
  );
}

