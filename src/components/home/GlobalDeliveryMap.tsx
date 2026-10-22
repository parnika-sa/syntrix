import React from "react";
import Link from "next/link";
import { Globe, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

interface Hub {
  name: string;
  region: string;
  x: number;
  y: number;
  isHQ?: boolean;
}

const hubs: Hub[] = [
  { name: "Ludhiana HQ", region: "Punjab, India", x: 672, y: 198, isHQ: true },
  { name: "North America (East)", region: "New York, USA", x: 260, y: 172 },
  { name: "North America (West)", region: "San Francisco, USA", x: 165, y: 180 },
  { name: "Western Europe", region: "London, UK", x: 485, y: 145 },
  { name: "Middle East", region: "Dubai, UAE", x: 620, y: 215 },
  { name: "Southeast Asia", region: "Singapore", x: 760, y: 275 },
  { name: "Australia", region: "Sydney, AU", x: 880, y: 380 },
];

// Quadratic bezier curves from Ludhiana HQ (672, 198) to each remote hub
const deliveryRoutes = [
  { to: "North America (East)", d: "M 672 198 Q 460 70 260 172", delay: "0s" },
  { to: "North America (West)", d: "M 672 198 Q 410 40 165 180", delay: "0.8s" },
  { to: "Western Europe", d: "M 672 198 Q 575 110 485 145", delay: "0.4s" },
  { to: "Middle East", d: "M 672 198 Q 645 190 620 215", delay: "0.2s" },
  { to: "Southeast Asia", d: "M 672 198 Q 720 225 760 275", delay: "0.6s" },
  { to: "Australia", d: "M 672 198 Q 800 290 880 380", delay: "1.0s" },
];

export function GlobalDeliveryMap() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-navy-950/40 border-y border-white/5">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Delivery Framework</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Built in Ludhiana,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-gold-400">
              Delivered Worldwide.
            </span>
          </h2>
          <p className="mt-4 text-mesh-muted text-base sm:text-lg leading-relaxed">
            End-to-End Technology & Growth Partner. We design, engineer, and deploy high-performance software, AI chat automation, and IT infrastructure from Punjab to clients across international time zones.
          </p>
        </div>

        {/* Dotted Map Canvas Wrapper */}
        <div className="relative rounded-3xl glass-panel border border-cyan-400/20 bg-navy-900/60 p-4 sm:p-8 overflow-hidden shadow-2xl">
          {/* Top header strip inside map box */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/5 text-xs text-mesh-muted">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-medium text-white">Central Hub: Jhande, Ludhiana, India</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" /> Active Delivery Routes
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gold-400" /> Direct Founder Access
              </span>
            </div>
          </div>

          {/* SVG Map Container with Fixed Aspect Ratio */}
          <div className="relative w-full aspect-[2/1] min-h-[300px] max-h-[500px]">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full select-none"
              aria-label="Syntrixmesh Global Delivery Network Map"
              role="img"
            >
              <defs>
                {/* Linear gradient for animated flight arcs */}
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2FB8FF" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#C9A24B" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#2FB8FF" stopOpacity="0.3" />
                </linearGradient>

                {/* Dot pattern for continents representation */}
                <radialGradient id="hqGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2FB8FF" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#2FB8FF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#2FB8FF" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Dotted grid background coordinates */}
              <g opacity="0.15" fill="#2FB8FF">
                {Array.from({ length: 26 }).map((_, r) =>
                  Array.from({ length: 50 }).map((_, c) => (
                    <circle key={`dot-${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="0.9" />
                  ))
                )}
              </g>

              {/* Stylized continent silhouette dots / shapes for reference */}
              <g opacity="0.35" fill="#3B82F6">
                {/* North America approximation dots */}
                <circle cx="180" cy="140" r="14" opacity="0.4" />
                <circle cx="230" cy="160" r="22" opacity="0.4" />
                <circle cx="280" cy="180" r="18" opacity="0.4" />
                <circle cx="220" cy="220" r="12" opacity="0.3" />

                {/* South America approximation dots */}
                <circle cx="310" cy="320" r="20" opacity="0.3" />
                <circle cx="330" cy="380" r="16" opacity="0.3" />

                {/* Europe approximation dots */}
                <circle cx="480" cy="130" r="18" opacity="0.4" />
                <circle cx="510" cy="150" r="16" opacity="0.4" />

                {/* Africa approximation dots */}
                <circle cx="510" cy="250" r="24" opacity="0.3" />
                <circle cx="530" cy="320" r="18" opacity="0.3" />

                {/* Asia approximation dots */}
                <circle cx="650" cy="160" r="28" opacity="0.4" />
                <circle cx="720" cy="180" r="26" opacity="0.4" />
                <circle cx="680" cy="230" r="22" opacity="0.4" />
                <circle cx="760" cy="260" r="18" opacity="0.4" />

                {/* Australia approximation dots */}
                <circle cx="850" cy="370" r="22" opacity="0.3" />
              </g>

              {/* Animated delivery arcs */}
              {deliveryRoutes.map((route, i) => (
                <g key={`route-${i}`}>
                  {/* Subtle static path */}
                  <path
                    d={route.d}
                    fill="none"
                    stroke="#2FB8FF"
                    strokeWidth="1"
                    strokeOpacity="0.2"
                    strokeDasharray="4 4"
                  />
                  {/* Animated traveling pulse stroke */}
                  <path
                    d={route.d}
                    fill="none"
                    stroke="url(#routeGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="80 260"
                    className="animate-route-flow"
                    style={{
                      animationDelay: route.delay,
                    }}
                  />
                </g>
              ))}

              {/* Hub markers */}
              {hubs.map((hub) => (
                <g key={hub.name} className="group cursor-pointer">
                  {hub.isHQ ? (
                    <>
                      {/* Ludhiana Pulsing Glow Rings */}
                      <circle cx={hub.x} cy={hub.y} r="28" fill="url(#hqGlow)" />
                      <circle cx={hub.x} cy={hub.y} r="14" fill="#2FB8FF" opacity="0.2" className="animate-ping" />
                      <circle cx={hub.x} cy={hub.y} r="6" fill="#C9A24B" stroke="#070B14" strokeWidth="2" />
                      <circle cx={hub.x} cy={hub.y} r="3" fill="#FFFFFF" />
                      
                      {/* HQ Tooltip Badge */}
                      <g transform={`translate(${hub.x - 60}, ${hub.y - 42})`}>
                        <rect width="120" height="26" rx="6" fill="#070B14" stroke="#C9A24B" strokeWidth="1" opacity="0.95" />
                        <text x="60" y="17" fill="#C9A24B" fontSize="10" fontWeight="bold" textAnchor="middle">
                          HQ · Ludhiana, India
                        </text>
                      </g>
                    </>
                  ) : (
                    <>
                      {/* Remote Hub Ring */}
                      <circle cx={hub.x} cy={hub.y} r="5" fill="#2FB8FF" opacity="0.4" />
                      <circle cx={hub.x} cy={hub.y} r="3" fill="#2FB8FF" stroke="#070B14" strokeWidth="1.5" />
                      
                      {/* Label on hover or visible */}
                      <g transform={`translate(${hub.x}, ${hub.y + 16})`}>
                        <text
                          x="0"
                          y="0"
                          fill="#94A3B8"
                          fontSize="9"
                          textAnchor="middle"
                          className="font-medium tracking-tight select-none pointer-events-none"
                        >
                          {hub.name}
                        </text>
                      </g>
                    </>
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5">
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
                <p className="text-[11px] text-mesh-muted">Async sprint updates & time-zone aligned standups</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Enterprise Governance</p>
                <p className="text-[11px] text-mesh-muted">Indian DPDP & standard international IP transfer terms</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-8 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Learn more about our Ludhiana engineering center</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
