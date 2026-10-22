import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Compass, Home, Layers, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist or has been relocated.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-mesh-radial pointer-events-none opacity-40" />

      <div className="max-w-xl mx-auto text-center relative z-10">
        <meta name="robots" content="noindex, nofollow" />
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-6">
          <Compass className="w-3.5 h-3.5 animate-spin" />
          <span>Error 404 &middot; Protocol Disconnected</span>
        </div>

        <h1 className="font-heading font-extrabold text-7xl sm:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 tracking-tight">
          404
        </h1>

        <h2 className="mt-4 font-heading font-bold text-2xl sm:text-3xl text-white">
          System Node Not Located
        </h2>

        <p className="mt-3 text-sm sm:text-base text-mesh-muted leading-relaxed max-w-md mx-auto">
          The requested route is not indexed on our server or may have been consolidated. Explore our primary navigation portals below.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-opacity"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-mesh-text glass-panel border border-cyan-400/25 hover:border-cyan-400/60 hover:text-white transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>View Services</span>
          </Link>
          <Link
            href="/sitemap"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-mesh-text glass-panel border border-white/10 hover:border-cyan-400/40 hover:text-white transition-colors"
          >
            <span>HTML Sitemap</span>
            <ArrowRight className="w-3 h-3 text-cyan-400" />
          </Link>
        </div>

        <div className="mt-12 pt-6 border-t border-cyan-400/10 text-xs text-mesh-muted">
          Need direct assistance?{" "}
          <Link href="/contact" className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300">
            Contact our Ludhiana engineering desk
          </Link>
        </div>
      </div>
    </div>
  );
}
