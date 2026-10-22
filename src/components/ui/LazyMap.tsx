"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapPin, ExternalLink } from "lucide-react";

export default function LazyMap() {
  const [loadMap, setLoadMap] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use IntersectionObserver to load when user scrolls near it (200px margin)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-56 overflow-hidden bg-navy-950 flex items-center justify-center"
    >
      {loadMap ? (
        <iframe
          title="Syntrixmesh Solutions Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13693.425752317187!2d75.78912!3d30.85421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83d7350711ef%3A0x7d6a5e12fbb18b62!2sJhande%2C%20Ludhiana%2C%20Punjab%20142021!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)",
          }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      ) : (
        <div className="flex flex-col items-center justify-center p-4 text-center">
          <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-2">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-xs text-white font-medium">Jhande, Ludhiana, Punjab</span>
          <button
            type="button"
            onClick={() => setLoadMap(true)}
            className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 hover:bg-cyan-400/20 transition-all"
          >
            <span>Load Interactive Map</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
}
