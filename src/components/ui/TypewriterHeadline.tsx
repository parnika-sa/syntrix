"use client";

import React, { useState, useEffect } from "react";

interface TypewriterHeadlineProps {
  phrases?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const defaultPhrases = [
  "Autonomous 24/7 AI Chat Systems.",
  "High-Performance Web Platforms.",
  "Enterprise Cloud & IT Infrastructure.",
  "Custom Full-Stack Engineering.",
  "Direct Founder Oversight. Zero Bloat.",
];

export default function TypewriterHeadline({
  phrases = defaultPhrases,
  typingSpeed = 50,
  deletingSpeed = 26,
  pauseDuration = 2000,
  className = "",
}: TypewriterHeadlineProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayText(phrases[0]);
      return;
    }

    const currentPhrase = phrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline relative font-extrabold tracking-tight ${className}`}>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-gold-400">
        {displayText}
      </span>
      {/* Sleek Cyan Terminal Cursor */}
      <span
        className="inline-block w-[2.5px] sm:w-[3.5px] h-[0.9em] ml-1 sm:ml-1.5 align-middle bg-cyan-400 rounded-sm shadow-[0_0_10px_#2fb8ff] animate-[pulse_0.9s_infinite]"
        aria-hidden="true"
      />
    </span>
  );
}
