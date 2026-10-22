"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="w-full"
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

