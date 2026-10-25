"use client";

import React from "react";

const WHATSAPP_URL =
  "https://wa.me/918054080370?text=Hi%20Syntrixmesh%20Solutions%2C%20I%20want%20to%20discuss%20a%20project";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Direct WhatsApp contact channel"
      className="fixed z-40"
      style={{
        bottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
        right: "clamp(12px, 3vw, 28px)",
      }}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Syntrixmesh Solutions"
        className="group relative flex items-center justify-center w-12 h-12 sm:h-auto sm:w-auto sm:px-4 sm:py-3 rounded-full bg-[#070B14]/90 sm:backdrop-blur-md border border-cyan-400/40 hover:border-cyan-400 text-white shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Subtle cyan pulse ring (disabled if user prefers reduced motion) */}
        <span
          className="absolute -inset-1 rounded-full border border-cyan-400/30 animate-pulse pointer-events-none motion-reduce:hidden"
          aria-hidden="true"
        />

        {/* WhatsApp White Glyph (Official Vector SVG) */}
        <div className="relative flex items-center justify-center w-6 h-6 shrink-0 text-white group-hover:text-cyan-300 transition-colors">
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.67 20.16 9.32 19.82 8.12 19.17L7.83 19.01L4.72 19.82L5.55 16.79L5.36 16.49C4.64 15.34 4.26 14.01 4.26 11.91C4.26 7.37 7.96 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.06 8.02 12.23C8.15 12.39 9.74 14.85 12.18 15.91C14.21 16.79 14.62 16.61 15.07 16.57C15.52 16.53 16.52 15.97 16.73 15.39C16.94 14.81 16.94 14.31 16.87 14.21C16.81 14.11 16.65 14.05 16.41 13.93C16.17 13.81 14.99 13.23 14.77 13.15C14.55 13.07 14.39 13.03 14.23 13.27C14.07 13.51 13.61 14.05 13.47 14.21C13.33 14.37 13.19 14.39 12.95 14.27C12.71 14.15 11.94 13.9 11.02 13.08C10.3 12.44 9.81 11.65 9.67 11.41C9.53 11.17 9.65 11.04 9.77 10.92C9.88 10.81 10.02 10.63 10.14 10.49C10.26 10.35 10.3 10.25 10.38 10.09C10.46 9.93 10.42 9.79 10.36 9.67C10.3 9.55 9.84 8.41 9.64 7.94C9.45 7.49 9.26 7.55 9.11 7.54C8.97 7.53 8.81 7.33 8.53 7.33Z" />
          </svg>
        </div>

        {/* Expandable text pill on hover - only on desktop */}
        <span className="hidden sm:inline max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2.5 transition-all duration-300 ease-out whitespace-nowrap text-xs font-semibold tracking-wide text-white">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
