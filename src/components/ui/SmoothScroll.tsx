"use client";

import React, { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Completely disable on touch screens, mobile devices, and reduced-motion
    if (
      typeof window === "undefined" ||
      window.innerWidth < 768 ||
      "ontouchstart" in window ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let lenisInstance: { raf: (time: number) => void; destroy: () => void } | null = null;
    let rafId: number | null = null;

    // 2. Defer loading Lenis until main thread is idle after first paint
    const initLenis = async () => {
      try {
        const { default: Lenis } = await import("lenis");
        lenisInstance = new Lenis({
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 0.9,
        });

        const raf = (time: number) => {
          if (lenisInstance) {
            lenisInstance.raf(time);
            rafId = requestAnimationFrame(raf);
          }
        };
        rafId = requestAnimationFrame(raf);
      } catch {
        // Fallback gracefully to native scroll
      }
    };

    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(() => { void initLenis(); });
    } else {
      setTimeout(() => { void initLenis(); }, 300);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}

