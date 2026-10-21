"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div
        className={`mr-3 px-3 py-1.5 rounded-lg bg-navy-900/90 text-white text-xs font-medium border border-cyan-400/20 shadow-glass backdrop-blur-md transition-all duration-300 pointer-events-none whitespace-nowrap ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="text-cyan-400 font-semibold">Online</span> · Chat with us on WhatsApp
      </div>

      <a
        href={siteConfig.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with Syntrixmesh Solutions on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-[0_4px_25px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulsing ripple rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/50 animate-pulse pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white/20 stroke-white stroke-[2.2]" />
      </a>
    </div>
  );
}
