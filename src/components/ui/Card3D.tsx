"use client";

import React, { useRef, useState, useCallback } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "gold" | "blue" | "default";
  intensity?: number;
  maxTilt?: number;
}

export default function Card3D({
  children,
  className = "",
  glowColor = "cyan",
  maxTilt = 8,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;

      setTransformStyle(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
      );
      setGlarePos({ x: glareX, y: glareY, opacity: 1 });
    },
    [maxTilt]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  // Specular sheen gradient tailored to Syntrixmesh branding
  const getGlowGradient = () => {
    switch (glowColor) {
      case "gold":
        return `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(201, 162, 75, 0.22) 0%, transparent 60%)`;
      case "blue":
        return `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(30, 107, 255, 0.22) 0%, transparent 60%)`;
      case "cyan":
      default:
        return `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(47, 184, 255, 0.25) 0%, transparent 60%)`;
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transformStyle: "preserve-3d",
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
      className={`relative group will-change-transform ${className}`}
    >
      {/* Dynamic 3D Specular Glare Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] transition-opacity duration-300"
        style={{
          background: getGlowGradient(),
          opacity: glarePos.opacity,
        }}
        aria-hidden="true"
      />

      {/* Card Content with 3D child layering */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
