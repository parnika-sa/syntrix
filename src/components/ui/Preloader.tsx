"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only run for 1.6s so it doesn't block the user's workflow
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#070B14] overflow-hidden"
        >
          {/* Futuristic Background Network Lines */}
          <div className="absolute inset-0 bg-cyber-grid opacity-30" />
          
          {/* Radial ambient glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

          {/* Center Logo with Animated Converging Rings */}
          <div className="relative flex items-center justify-center">
            {/* Outer spinning dash ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute w-36 h-36 rounded-full border border-dashed border-cyan-400/30"
            />

            {/* Inner pulsating gold ring */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute w-28 h-28 rounded-full border border-gold-400/40 shadow-gold-glow"
            />

            {/* Logo Badge */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-20 h-20 rounded-full p-1 bg-white shadow-cyan-glow-lg flex items-center justify-center overflow-hidden"
            >
              <Image
                src="/logo.svg"
                alt="Syntrixmesh Solutions Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Futuristic Branding & Progress */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <h2 className="font-heading font-bold text-lg tracking-wider text-white">
              SYNTRIX<span className="text-cyan-400">MESH</span>
            </h2>
            <p className="text-xs tracking-widest text-mesh-muted uppercase mt-1">
              End-to-End Technology & Growth Partner
            </p>

            {/* Progress line */}
            <div className="w-48 h-[2px] bg-navy-800 rounded-full mx-auto mt-4 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-gold-400"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
