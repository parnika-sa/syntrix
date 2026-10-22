"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      // Skip entirely on mobile viewports (< 768px), reduced motion, or if already shown in session
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const hasShown = sessionStorage.getItem("syntrix_preloaded");

      if (isMobile || prefersReducedMotion || hasShown) {
        return;
      }

      sessionStorage.setItem("syntrix_preloaded", "true");
      setLoading(true);

      // Short duration under 1 second
      const timer = setTimeout(() => {
        setLoading(false);
      }, 700);

      return () => clearTimeout(timer);
    } catch {
      // Graceful fallback for restricted storage environments
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[10000] pointer-events-none flex flex-col items-center justify-center bg-[#070B14] transition-opacity duration-300"
    >
      <div className="relative flex items-center justify-center">
        {/* Subtle CSS spinner ring */}
        <div className="w-16 h-16 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />

        {/* Center Logo */}
        <div className="absolute w-12 h-12 rounded-full p-0.5 bg-white shadow-cyan-glow flex items-center justify-center overflow-hidden">
          <Image
            src="/logo.png"
            alt="Syntrixmesh Solutions"
            width={48}
            height={48}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>

      <div className="mt-5 text-center">
        <span className="font-heading font-bold text-sm tracking-widest text-white uppercase">
          SYNTRIX<span className="text-cyan-400">MESH</span>
        </span>
        <p className="text-[10px] tracking-widest text-mesh-muted uppercase mt-0.5">
          Loading Solutions...
        </p>
      </div>
    </div>
  );
}

