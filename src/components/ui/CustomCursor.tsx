"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // 1. Completely disable on touch screens, mobile devices, and coarse pointers
    if (
      typeof window === "undefined" ||
      window.innerWidth < 1024 ||
      "ontouchstart" in window ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = Boolean(
        target.closest("a, button, input, select, textarea, [role='button'], .interactive")
      );
      setIsHovered(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOut = (e: MouseEvent) => {
      // If moving outside viewport boundary
      if (!e.relatedTarget) {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isVisible]);

  if (!enabled || !isVisible) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Outer crisp cyan ring - NO backdropFilter so text is NEVER blurred */}
      <div
        className="pointer-events-none fixed rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? "40px" : "24px",
          height: isHovered ? "40px" : "24px",
          border: isHovered
            ? "1.5px solid rgba(47, 184, 255, 0.75)"
            : "1px solid rgba(47, 184, 255, 0.35)",
          boxShadow: isHovered
            ? "0 0 10px rgba(47, 184, 255, 0.3)"
            : "none",
        }}
      />
      {/* Inner pinpoint dot */}
      <div
        className="pointer-events-none fixed w-1.5 h-1.5 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
}
