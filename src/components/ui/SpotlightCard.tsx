"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  enableTilt?: boolean;
}

export default function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(47, 184, 255, 0.15)",
  enableTilt = true,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Max tilt angle 6 degrees for subtle high-end feel
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (enableTilt) {
      setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: enableTilt ? transform : undefined,
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out, border-color 0.3s ease",
      }}
      className={cn(
        "relative rounded-2xl overflow-hidden glass-panel border border-cyan-400/15 transition-all duration-300",
        isHovered && "border-cyan-400/40 shadow-cyan-glow",
        className
      )}
      {...props}
    >
      {/* Radial Spotlight Glow that follows mouse */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
