"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Code2, 
  Cpu, 
  TrendingUp, 
  Server, 
  Bot, 
  Boxes 
} from "lucide-react";

const serviceChips = [
  { name: "Development", href: "/services/development", icon: Code2, desktopPos: "sm:top-4 sm:left-2" },
  { name: "AI Automation", href: "/services/ai-chat-automation", icon: Bot, desktopPos: "sm:top-4 sm:right-2" },
  { name: "Software Eng", href: "/services/software-engineering", icon: Cpu, desktopPos: "sm:top-1/2 sm:-left-3 sm:-translate-y-1/2" },
  { name: "Digital Marketing", href: "/services/digital-marketing", icon: TrendingUp, desktopPos: "sm:top-1/2 sm:-right-3 sm:-translate-y-1/2" },
  { name: "Hardware & IT", href: "/services/hardware-it", icon: Server, desktopPos: "sm:bottom-4 sm:left-2" },
  { name: "Web3 & Dapps", href: "/services/web3-dapps", icon: Boxes, desktopPos: "sm:bottom-4 sm:right-2" },
];

export function HeroFallback() {
  return (
    <div 
      className="relative w-full mx-auto flex flex-col items-center justify-center select-none"
      aria-label="Syntrixmesh Technology Ecosystem"
    >
      {/* 
        Single Wrapper: aspect-ratio 1 / 1
        Mobile: min(78vw, 300px), Tablet: max 380px, Desktop: max 440px
        Centered margin: 0 auto. No overflowing elements.
      */}
      <div 
        className="relative mx-auto flex items-center justify-center overflow-hidden rounded-full"
        style={{ 
          width: "min(78vw, 320px)", 
          aspectRatio: "1 / 1",
          margin: "0 auto",
        }}
      >
        {/* Underlying Soft Glow — pure radial-gradient without blur filter on coin */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ 
            background: "radial-gradient(circle at center, rgba(47,184,255,0.14) 0%, rgba(201,162,75,0.08) 45%, transparent 70%)" 
          }}
          aria-hidden="true" 
        />

        {/* 
          SHARP VECTOR SVG LAYER:
          Renders 100% crisp at any DPR (2, 3+), zero blur, perfectly centered.
          Contains: Geodesic wireframe, Cyan Orbit Ring, Gold Orbit Ring, 4 Orbiting Dots.
        */}
        <svg 
          viewBox="0 0 320 320" 
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="goldRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4DB96" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#C9A24B" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#8A6926" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="cyanRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2FB8FF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.5" />
            </linearGradient>
            <radialGradient id="dotCyanGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#2FB8FF" />
              <stop offset="100%" stopColor="#1E6BFF" />
            </radialGradient>
          </defs>

          {/* Subtle Cyber Geodesic Wireframe Circle */}
          <circle 
            cx="160" 
            cy="160" 
            r="145" 
            fill="none" 
            stroke="#2FB8FF" 
            strokeWidth="0.8" 
            strokeDasharray="4 6" 
            opacity="0.25" 
          />
          <circle 
            cx="160" 
            cy="160" 
            r="125" 
            fill="none" 
            stroke="#2FB8FF" 
            strokeWidth="0.75" 
            strokeDasharray="2 4" 
            opacity="0.3" 
          />

          {/* Wireframe Crosslines / Axis ticks */}
          <line x1="160" y1="15" x2="160" y2="305" stroke="#2FB8FF" strokeWidth="0.5" strokeDasharray="3 8" opacity="0.18" />
          <line x1="15" y1="160" x2="305" y2="160" stroke="#2FB8FF" strokeWidth="0.5" strokeDasharray="3 8" opacity="0.18" />

          {/* Outer Cyan Ring with Rotating Group */}
          <g className="animate-[spin_40s_linear_infinite] origin-center motion-reduce:animate-none">
            <ellipse 
              cx="160" 
              cy="160" 
              rx="132" 
              ry="72" 
              fill="none" 
              stroke="url(#cyanRingGrad)" 
              strokeWidth="1.2" 
              transform="rotate(-25 160 160)" 
            />
            {/* 2 Cyan Orbit Beads along the path */}
            <circle cx="282" cy="115" r="4.5" fill="url(#dotCyanGlow)" />
            <circle cx="38" cy="205" r="4" fill="url(#dotCyanGlow)" opacity="0.85" />
          </g>

          {/* Inner Gold Ring with Counter-Rotating Group */}
          <g className="animate-[spin_32s_linear_infinite_reverse] origin-center motion-reduce:animate-none">
            <ellipse 
              cx="160" 
              cy="160" 
              rx="115" 
              ry="65" 
              fill="none" 
              stroke="url(#goldRingGrad)" 
              strokeWidth="1.2" 
              transform="rotate(35 160 160)" 
            />
            {/* 2 Gold Orbit Beads along the path */}
            <circle cx="260" cy="225" r="4.5" fill="#F4DB96" />
            <circle cx="60" cy="95" r="4" fill="#C9A24B" />
          </g>
        </svg>

        {/* 
          CRISP SM COIN (Dead Center, 30% of wrapper width)
          Integer pixel centered via flex place-items, no blur filters, no CSS scale().
        */}
        <div 
          className="relative z-10 flex items-center justify-center rounded-full pointer-events-auto"
          style={{ 
            width: "30%", 
            height: "30%",
            background: "linear-gradient(135deg, #F4DB96 0%, #C9A24B 50%, #8A6926 100%)",
            padding: "2.5px",
            boxShadow: "0 0 24px rgba(47,184,255,0.25), 0 0 16px rgba(201,162,75,0.2)",
          }}
        >
          <div className="w-full h-full rounded-full bg-[#070B14] flex items-center justify-center border border-gold-400/50 relative overflow-hidden">
            {/* High-resolution SM Logo source, quality 90 */}
            <Image
              src="/logo.png"
              alt="Syntrixmesh Solutions Logo Medallion"
              width={256}
              height={256}
              quality={90}
              priority
              sizes="(max-width: 640px) 90px, (max-width: 1024px) 115px, 130px"
              className="w-[72%] h-[72%] object-contain select-none"
            />
          </div>
        </div>

        {/* Desktop-only orbiting service chips */}
        {serviceChips.map((chip) => {
          const Icon = chip.icon;
          return (
            <Link
              key={chip.name}
              href={chip.href}
              className={`hidden md:inline-flex absolute z-20 ${chip.desktopPos} group items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-navy-900/90 backdrop-blur-md border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/15 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95`}
            >
              <Icon className="w-3.5 h-3.5 text-cyan-400 group-hover:text-gold-300 transition-colors" />
              <span className="text-[11px] sm:text-xs font-medium tracking-tight whitespace-nowrap">
                {chip.name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Mobile-Only Service Chips: 2x3 grid below orb with min-h-[44px] */}
      <div className="md:hidden grid grid-cols-2 gap-2 w-full max-w-[340px] mx-auto mt-4 z-20 px-2">
        {serviceChips.map((chip) => {
          const Icon = chip.icon;
          return (
            <Link
              key={`mobile-${chip.name}`}
              href={chip.href}
              className="inline-flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl text-[11px] font-medium text-white bg-navy-900/90 border border-cyan-400/25 hover:border-cyan-400/50 hover:bg-cyan-500/10 shadow-sm active:scale-95 transition-all text-center min-h-[44px]"
            >
              <Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{chip.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
