import React from "react";
import { 
  Code2, 
  Cpu, 
  Database, 
  Cloud, 
  Layers, 
  ShieldCheck, 
  Bot, 
  Server, 
  Smartphone, 
  Boxes 
} from "lucide-react";

const technologies = [
  { name: "Next.js 14", category: "Full-Stack", icon: Code2 },
  { name: "React 18+", category: "Frontend", icon: Layers },
  { name: "TypeScript", category: "Language", icon: Code2 },
  { name: "Tailwind CSS", category: "Styling", icon: Boxes },
  { name: "Node.js & Express", category: "Backend", icon: Server },
  { name: "Python / FastAPI", category: "AI & APIs", icon: Cpu },
  { name: "PostgreSQL & Redis", category: "Databases", icon: Database },
  { name: "AWS & Docker", category: "Cloud & DevOps", icon: Cloud },
  { name: "OpenAI & LangChain", category: "AI Models", icon: Bot },
  { name: "Solidity & Web3", category: "Smart Contracts", icon: ShieldCheck },
  { name: "React Native", category: "Mobile Apps", icon: Smartphone },
  { name: "Ubiquiti UniFi", category: "Enterprise IT", icon: Server },
];

export default function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-10 bg-navy-900/60 border-y border-cyan-400/10 backdrop-blur-md">
      {/* Edge gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#070B14] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#070B14] to-transparent" />

      <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
        {[...technologies, ...technologies].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center space-x-3 px-5 py-2.5 rounded-full glass-panel border border-cyan-400/15 text-white/90 shadow-[0_0_15px_rgba(47,184,255,0.05)] hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300"
            >
              <div className="p-1.5 rounded-full bg-cyan-400/10 text-cyan-400">
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-heading font-semibold text-sm block tracking-wide">
                  {tech.name}
                </span>
                <span className="text-[10px] text-mesh-muted uppercase tracking-widest block">
                  {tech.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
