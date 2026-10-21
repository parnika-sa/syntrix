"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer blurred cyan glow aura */}
      <div
        className="fixed rounded-full transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? "56px" : "32px",
          height: isHovered ? "56px" : "32px",
          background: isHovered
            ? "radial-gradient(circle, rgba(47, 184, 255, 0.35) 0%, rgba(30, 107, 255, 0) 70%)"
            : "radial-gradient(circle, rgba(47, 184, 255, 0.2) 0%, rgba(30, 107, 255, 0) 70%)",
          border: isHovered ? "1px solid rgba(47, 184, 255, 0.6)" : "1px solid rgba(47, 184, 255, 0.3)",
          backdropFilter: isHovered ? "blur(1px)" : "none",
        }}
      />
      {/* Inner pinpoint dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#2FB8FF] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
}
