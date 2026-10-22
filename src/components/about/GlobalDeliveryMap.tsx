"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Globe, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { worldDotsPath, projectedCities, deliveryArcs, worldViewBox } from "@/data/worldDots";

export function GlobalDeliveryMap() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hub = projectedCities.find((c) => c.isHQ) || projectedCities[0];

  return (
    <section 
      ref={containerRef}
      className="relative py-16 md:py-24 overflow-hidden bg-navy-950/40 border-y border-white/5"
    >
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Cross-Border Execution</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Built in Ludhiana,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-gold-400">
              Delivered Worldwide.
            </span>
          </h2>
          <p className="mt-3 text-mesh-muted text-sm sm:text-base leading-relaxed">
            From our engineering base in Jhande, Ludhiana, we design and deploy bespoke software, autonomous AI chat systems, and IT setups across international time zones with direct founder communication.
          </p>
        </div>

        {/* Dotted Map Canvas Wrapper */}
        <div className="relative rounded-3xl glass-panel border border-cyan-400/20 bg-navy-900/70 p-3 sm:p-6 lg:p-8 overflow-hidden shadow-2xl">
          {/* Top Header Strip inside Map Card */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-white/5 text-xs text-mesh-muted">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-medium text-white">HQ &amp; Engineering Center: Jhande, Ludhiana, India</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] sm:text-xs">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" /> Remote delivery regions
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gold-400" /> Direct founder access
              </span>
            </div>
          </div>

          {/* Pure SVG Dotted World Map */}
          <div className="relative w-full aspect-[2/1] min-h-[280px] max-h-[520px]">
            <svg
              viewBox={`0 0 ${worldViewBox.width} ${worldViewBox.height}`}
              className="w-full h-full select-none"
              aria-label="Syntrixmesh Geographical World Delivery Map"
              role="img"
            >
              <defs>
                {/* Arc Gradient */}
                <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2FB8FF" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#C9A24B" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#2FB8FF" stopOpacity="0.4" />
                </linearGradient>

                {/* Hub Radial Glow */}
                <radialGradient id="hubRadial" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2FB8FF" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#2FB8FF" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#2FB8FF" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* 1. Real Sampled Land Continents: 3,831 High-Precision Natural Earth 1 Dots */}
              <path
                d={worldDotsPath}
                fill="none"
                stroke="#2FB8FF"
                strokeWidth="2.2"
                strokeLinecap="round"
                opacity="0.32"
              />

              {/* 2. Curved Delivery Arcs from Ludhiana Hub */}
              {deliveryArcs.map((arc) => (
                <g key={arc.toId}>
                  {/* Subtle static guideline path */}
                  <path
                    d={arc.d}
                    fill="none"
                    stroke="#2FB8FF"
                    strokeWidth="1"
                    strokeOpacity="0.2"
                    strokeDasharray="4 4"
                  />
                  {/* Highlight animated pulse path */}
                  <path
                    d={arc.d}
                    fill="none"
                    stroke="url(#arcGrad)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    pathLength="1"
                    strokeDasharray="0.3 0.7"
                    className="animate-route-flow"
                    style={{
                      animationDelay: arc.delay,
                      animationPlayState: isInView ? "running" : "paused",
                    }}
                  />
                  {/* Small glowing travelling dot along arc */}
                  {isInView && (
                    <circle r="2.5" fill="#FFFFFF">
                      <animateMotion
                        path={arc.d}
                        dur="4.5s"
                        repeatCount="indefinite"
                        begin={arc.delay}
                      />
                    </circle>
                  )}
                </g>
              ))}

              {/* 3. Remote Hub Markers */}
              {projectedCities.map((city) => {
                if (city.isHQ) return null;

                // Non-overlapping offsets
                let labelDx = 0;
                let labelDy = 14;
                let anchor: "middle" | "start" | "end" = "middle";

                if (city.id === "sf") {
                  labelDx = -8;
                  labelDy = 16;
                  anchor = "end";
                } else if (city.id === "nyc") {
                  labelDx = 8;
                  labelDy = -8;
                  anchor = "start";
                } else if (city.id === "london") {
                  labelDx = 0;
                  labelDy = -10;
                  anchor = "middle";
                } else if (city.id === "dubai") {
                  labelDx = -10;
                  labelDy = 14;
                  anchor = "end";
                } else if (city.id === "singapore") {
                  labelDx = 10;
                  labelDy = 14;
                  anchor = "start";
                } else if (city.id === "sydney") {
                  labelDx = 8;
                  labelDy = 16;
                  anchor = "start";
                }

                const isSelected = selectedCity === city.id;

                return (
                  <g
                    key={city.id}
                    className="cursor-pointer group"
                    onClick={() => setSelectedCity(city.id)}
                  >
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r="6"
                      fill="#2FB8FF"
                      opacity={isSelected ? "0.6" : "0.25"}
                      className="group-hover:opacity-75 transition-opacity"
                    />
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r="3"
                      fill="#2FB8FF"
                      stroke="#070B14"
                      strokeWidth="1.5"
                    />

                    {/* Desktop Label (Always visible on desktop) */}
                    <text
                      x={city.x + labelDx}
                      y={city.y + labelDy}
                      textAnchor={anchor}
                      fill={isSelected ? "#FFFFFF" : "#94A3B8"}
                      fontSize="9"
                      fontWeight={isSelected ? "bold" : "500"}
                      className="hidden sm:block select-none pointer-events-none group-hover:fill-cyan-300 transition-colors"
                    >
                      {city.name}
                    </text>
                  </g>
                );
              })}

              {/* 4. Ludhiana Central Hub Marker */}
              <g>
                <circle cx={hub.x} cy={hub.y} r="24" fill="url(#hubRadial)" />
                <circle cx={hub.x} cy={hub.y} r="10" fill="#2FB8FF" opacity="0.3" className="animate-ping" />
                <circle cx={hub.x} cy={hub.y} r="5" fill="#C9A24B" stroke="#070B14" strokeWidth="2" />
                <circle cx={hub.x} cy={hub.y} r="2" fill="#FFFFFF" />

                {/* HQ Badge Tooltip */}
                <g transform={`translate(${hub.x - 55}, ${hub.y - 34})`}>
                  <rect
                    width="110"
                    height="22"
                    rx="5"
                    fill="#070B14"
                    stroke="#C9A24B"
                    strokeWidth="1"
                    opacity="0.95"
                  />
                  <text
                    x="55"
                    y="15"
                    fill="#C9A24B"
                    fontSize="9.5"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    HQ · Ludhiana, India
                  </text>
                </g>
              </g>
            </svg>
          </div>

          {/* Mobile Tap Cities Strip */}
          <div className="sm:hidden mt-3 pt-3 border-t border-white/5 flex flex-wrap gap-1.5 justify-center">
            {projectedCities.filter((c) => !c.isHQ).map((city) => (
              <button
                key={`mob-${city.id}`}
                onClick={() => setSelectedCity(city.id)}
                className={`px-2 py-0.5 rounded-md text-[10px] border transition-colors ${
                  selectedCity === city.id
                    ? "bg-cyan-500/20 border-cyan-400 text-white"
                    : "bg-navy-950/60 border-white/10 text-mesh-muted"
                }`}
              >
                {city.name} ({city.region})
              </button>
            ))}
          </div>

          {/* Bottom Honest Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-5 pt-5 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Punjab Engineering Base</p>
                <p className="text-[11px] text-mesh-muted">Jhande, Ludhiana · Direct founder communication</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-400/20 flex items-center justify-center text-gold-400 shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Cross-Border Delivery</p>
                <p className="text-[11px] text-mesh-muted">Async sprint updates &amp; time-zone aligned standups</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Enterprise Governance</p>
                <p className="text-[11px] text-mesh-muted">Indian DPDP &amp; standard international IP transfer terms</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-8 text-center">
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Discuss your international project with our team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
