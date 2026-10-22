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
  "Engineered to Scale Your Business.",
  "Autonomous 24/7 AI Chat Systems.",
  "High-Performance Web Platforms.",
  "Enterprise Cloud & IT Infrastructure.",
  "Direct Founder Engineering. Zero Bloat.",
];

export default function TypewriterHeadline({
  phrases = defaultPhrases,
  typingSpeed = 55,
  deletingSpeed = 28,
  pauseDuration = 1800,
  className = "",
}: TypewriterHeadlineProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Respect reduced motion: show first phrase statically
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayText(phrases[0]);
      return;
    }

    const currentPhrase = phrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing phase
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Paused at full phrase
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting phase
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
    <span className={`inline-block relative min-h-[1.25em] ${className}`}>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-gold-400 font-extrabold">
        {displayText}
      </span>
      {/* Blinking Cyan Cursor */}
      <span
        className="inline-block w-[3px] h-[0.9em] ml-1.5 align-middle bg-cyan-400 rounded-sm shadow-[0_0_10px_#2fb8ff] animate-[pulse_1s_infinite]"
        aria-hidden="true"
      />
    </span>
  );
}
