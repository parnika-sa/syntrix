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
  { name: "Development", href: "/services/development", icon: Code2, pos: "top-2 left-4 sm:top-4 sm:left-8" },
  { name: "AI Automation", href: "/services/ai-chat-automation", icon: Bot, pos: "top-2 right-4 sm:top-4 sm:right-8" },
  { name: "Software Eng", href: "/services/software-engineering", icon: Cpu, pos: "top-1/2 -left-2 sm:top-1/2 sm:-left-4 -translate-y-1/2" },
  { name: "Digital Marketing", href: "/services/digital-marketing", icon: TrendingUp, pos: "top-1/2 -right-2 sm:top-1/2 sm:-right-4 -translate-y-1/2" },
  { name: "Hardware & IT", href: "/services/hardware-it", icon: Server, pos: "bottom-3 left-4 sm:bottom-6 sm:left-8" },
  { name: "Web3 & Dapps", href: "/services/web3-dapps", icon: Boxes, pos: "bottom-3 right-4 sm:bottom-6 sm:right-8" },
];

export function HeroFallback() {
  return (
    <div 
      className="relative w-full max-w-[500px] mx-auto aspect-square flex items-center justify-center select-none"
      aria-label="Syntrixmesh Technology Ecosystem"
    >
      {/* Radial soft cyan & gold glows */}
      <div 
        className="absolute w-[360px] h-[360px] rounded-full bg-cyan-500/15 blur-[80px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute w-[240px] h-[240px] rounded-full bg-gold-500/15 blur-[60px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Outer decorative pulsing mesh ring */}
      <div 
        className="absolute inset-8 rounded-full border border-cyan-400/20 border-dashed animate-[spin_60s_linear_infinite] motion-reduce:animate-none pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute inset-16 rounded-full border border-gold-400/20 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Central Floating Medallion Badge */}
      <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-tr from-[#94732A] via-[#E8CF88] to-[#C9A24B] shadow-[0_0_50px_rgba(47,184,255,0.25),0_0_30px_rgba(201,162,75,0.2)] animate-[float_6s_ease-in-out_infinite] motion-reduce:animate-none">
        <div className="w-full h-full rounded-full bg-[#070B14] p-4 flex items-center justify-center border border-gold-400/40 relative overflow-hidden group">
          {/* Subtle sheen highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          
          <Image
            src="/logo.png"
            alt="Syntrixmesh Solutions Medallion"
            width={180}
            height={180}
            priority
            className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      {/* 6 Service Orbiting Chips */}
      {serviceChips.map((chip) => {
        const Icon = chip.icon;
        return (
          <Link
            key={chip.name}
            href={chip.href}
            className={`absolute z-20 ${chip.pos} group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-navy-900/85 backdrop-blur-md border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/15 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95`}
          >
            <Icon className="w-3.5 h-3.5 text-cyan-400 group-hover:text-gold-300 transition-colors" />
            <span className="text-[11px] sm:text-xs font-medium tracking-tight whitespace-nowrap">
              {chip.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
