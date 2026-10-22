"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, ShieldCheck } from "lucide-react";

export const COOKIE_CONSENT_KEY = "syntrix_cookie_consent";

export function openCookieBanner() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("syntrix:open-cookie-banner"));
  }
}

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!stored) {
        // Delay slightly so it doesn't interrupt initial page paint
        const timer = setTimeout(() => setIsOpen(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage may fail in private mode
    }
  }, []);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("syntrix:open-cookie-banner", handleOpen);
    return () => {
      window.removeEventListener("syntrix:open-cookie-banner", handleOpen);
    };
  }, []);

  const handleConsent = (choice: "accepted" | "rejected") => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, choice);
      window.dispatchEvent(
        new CustomEvent("syntrix:cookie-consent-updated", { detail: choice })
      );
    } catch {
      // Ignore localStorage write failures
    }
    setIsOpen(false);
  };

  if (!mounted || !isOpen) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie consent preferences"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="relative rounded-2xl bg-[#070B14]/95 border border-cyan-400/30 p-5 shadow-2xl shadow-cyan-950/60 backdrop-blur-xl text-left">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close cookie banner"
          className="absolute top-3.5 right-3.5 p-1 rounded-lg text-mesh-muted hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3.5 pr-6">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shrink-0 mt-0.5">
            <Cookie className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <h4 className="text-sm font-heading font-semibold text-white flex items-center gap-1.5">
              Cookie Preferences
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            </h4>
            <p className="mt-1 text-xs text-mesh-muted leading-relaxed">
              We use strictly necessary storage for core website operations and optional analytics to refine our digital solutions. We never sell personal data.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 pt-1 border-t border-cyan-400/10">
          <button
            type="button"
            onClick={() => handleConsent("accepted")}
            className="flex-1 min-w-[110px] px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-opacity text-center cursor-pointer"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={() => handleConsent("rejected")}
            className="flex-1 min-w-[110px] px-3.5 py-2 rounded-xl text-xs font-medium text-mesh-text bg-white/5 border border-white/10 hover:border-cyan-400/30 hover:text-white transition-colors text-center cursor-pointer"
          >
            Reject Non-Essential
          </button>
          <Link
            href="/cookie-policy"
            onClick={() => setIsOpen(false)}
            className="w-full text-center text-[11px] text-cyan-400/80 hover:text-cyan-300 underline underline-offset-2 py-1 transition-colors"
          >
            Read Cookie Policy
          </Link>
        </div>
      </div>
    </aside>
  );
}
