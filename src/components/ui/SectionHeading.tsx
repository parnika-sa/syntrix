"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "cyan" | "gold";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = "left",
  theme = "cyan",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-4 border",
            theme === "cyan"
              ? "bg-cyan-950/40 text-cyan-400 border-cyan-400/30 shadow-[0_0_12px_rgba(47,184,255,0.15)]"
              : "bg-gold-950/40 text-gold-400 border-gold-400/30 shadow-[0_0_12px_rgba(201,162,75,0.15)]"
          )}
        >
          <span
            className={cn(
              "w-1.5 h-1.5 rounded-full",
              theme === "cyan" ? "bg-cyan-400 shadow-[0_0_6px_#2FB8FF]" : "bg-gold-400 shadow-[0_0_6px_#C9A24B]"
            )}
          />
          {badge}
        </div>
      )}

      {/* Main Title with Vertical Accent Bar Motif */}
      <h2
        className={cn(
          "font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight",
          !isCenter && (theme === "cyan" ? "accent-bar" : "accent-bar-gold")
        )}
      >
        {title}{" "}
        {highlight && (
          <span
            className={
              theme === "cyan"
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-gold-300 via-gold-400 to-yellow-500 bg-clip-text text-transparent"
            }
          >
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-mesh-text leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
