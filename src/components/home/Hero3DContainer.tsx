"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { HeroFallback } from "./HeroFallback";

// Lazy-load HeroMedallion3D in its own isolated Webpack chunk
const LazyHeroMedallion3D = dynamic(
  () => import("@/components/canvas/HeroMedallion3D"),
  {
    ssr: false,
    loading: () => <HeroFallback />,
  }
);

export function Hero3DContainer() {
  const [shouldRender3D, setShouldRender3D] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Guard against non-browser environments
    if (typeof window === "undefined") return;

    // 2. Accessibility check (no prefers-reduced-motion)
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // 3. WebGL capability check
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) return;
    } catch {
      return;
    }

    // 5. Mount after idle to protect First Input Delay / TBT
    const scheduleMount = () => {
      setShouldRender3D(true);
    };

    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (typeof win.requestIdleCallback === "function") {
      const handle = win.requestIdleCallback(scheduleMount, {
        timeout: 1800,
      });
      return () => {
        if (typeof win.cancelIdleCallback === "function") {
          win.cancelIdleCallback(handle);
        }
      };
    } else {
      const timer = setTimeout(scheduleMount, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[520px] mx-auto aspect-square flex items-center justify-center select-none overflow-visible"
    >
      {shouldRender3D ? <LazyHeroMedallion3D /> : <HeroFallback />}
    </div>
  );
}
