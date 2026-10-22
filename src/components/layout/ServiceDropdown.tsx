"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  TrendingUp, 
  Server, 
  Bot, 
  Layers, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";
import { servicesNav, ServiceNavItem } from "@/data/services";

const serviceIcons: Record<string, React.ElementType> = {
  "development": Code2,
  "software-engineering": Cpu,
  "digital-marketing": TrendingUp,
  "hardware-it": Server,
  "ai-chat-automation": Bot,
  "web3-dapps": Layers,
};

interface ServiceDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceDropdown({ isOpen, onClose }: ServiceDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <m.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[620px] rounded-2xl bg-navy-950/95 backdrop-blur-2xl border border-cyan-400/25 p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_25px_rgba(47,184,255,0.15)] z-[100] overflow-hidden before:absolute before:-top-3 before:left-0 before:w-full before:h-3 before:content-['']"
          >
            {/* Subtle Ambient Radial Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[60px] pointer-events-none" />

            {/* Header Label */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-cyan-400/15 relative z-10">
              <span className="text-[11px] font-heading font-semibold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                Our Core Services
              </span>
              <span className="text-[11px] text-mesh-muted">
                End-to-End Technology & Growth
              </span>
            </div>

            {/* 6 Grid Items */}
            <div className="grid grid-cols-2 gap-2.5 relative z-10">
              {servicesNav.map((service: ServiceNavItem) => {
                const Icon = serviceIcons[service.slug] || Code2;

                return (
                  <div key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={onClose}
                      className="flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-200 group hover:translate-x-1 hover:shadow-cyan-glow"
                    >
                      {/* Icon Box */}
                      <div className="w-10 h-10 rounded-xl bg-navy-900 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-navy-950 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_#2FB8FF] transition-all duration-300 shrink-0">
                        <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                      </div>

                      {/* Text Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-heading font-semibold text-white group-hover:text-cyan-400 transition-colors truncate">
                            {service.shortTitle}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-cyan-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </div>
                        <p className="text-[11px] text-mesh-text line-clamp-1 mt-0.5 leading-tight">
                          {service.oneLiner}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Bottom Bar: View All Services Link */}
            <div className="mt-4 pt-3 border-t border-cyan-400/15 flex items-center justify-between text-xs relative z-10">
              <span className="text-mesh-muted text-[11px]">
                Need a bespoke enterprise setup?
              </span>
              <Link
                href="/services"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 font-heading font-semibold text-cyan-400 hover:text-cyan-300 group transition-colors"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
