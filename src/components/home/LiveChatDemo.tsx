"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Bot, 
  Sparkles, 
  ArrowRight, 
  Check, 
  CheckCheck, 
  Send, 
  ShieldCheck, 
  Zap, 
  RotateCcw 
} from "lucide-react";
import { chatScenarios, ChatScenario } from "@/data/chatDemo";

export function LiveChatDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const scenario: ChatScenario = chatScenarios[activeTab] || chatScenarios[0];

  // IntersectionObserver to start animation only when visible in viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Reset conversation when activeTab changes
  useEffect(() => {
    setVisibleCount(1);
    setIsTyping(false);
  }, [activeTab]);

  // Step through messages when in view
  useEffect(() => {
    if (!isInView) return;

    // If we've shown all messages, wait 5 seconds then loop
    if (visibleCount >= scenario.messages.length) {
      const loopTimeout = setTimeout(() => {
        setVisibleCount(1);
        setIsTyping(false);
      }, 5000);
      return () => clearTimeout(loopTimeout);
    }

    const nextMessage = scenario.messages[visibleCount];
    const isBotNext = nextMessage.sender === "bot";

    let typingTimeout: NodeJS.Timeout;
    let stepTimeout: NodeJS.Timeout;

    if (isBotNext) {
      // Show typing indicator first
      setIsTyping(true);
      typingTimeout = setTimeout(() => {
        setIsTyping(false);
        setVisibleCount((prev) => prev + 1);
      }, 900);
    } else {
      // User message arrives with shorter delay
      stepTimeout = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 1200);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(stepTimeout);
    };
  }, [isInView, visibleCount, scenario]);

  // Auto-scroll chat window to bottom as new messages arrive
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [visibleCount, isTyping]);

  return (
    <section 
      ref={containerRef}
      className="relative py-20 sm:py-28 overflow-hidden bg-navy-950/30"
    >
      {/* Background ambient glow */}
      <div 
        className="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-0 w-80 h-80 bg-gold-500/10 blur-[100px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-4 w-fit">
              <Bot className="w-3.5 h-3.5" />
              <span>See Your AI Assistant in Action</span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-[1.15]">
              Qualify Leads & Close Sales{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-gold-400">
                24/7 Without Human Fatigue.
              </span>
            </h2>

            <p className="mt-4 text-mesh-muted text-base sm:text-lg leading-relaxed">
              Real Indian business customers switch between English, Hindi, and Hinglish. We build autonomous AI agents connected to your inventory, ERP, and WhatsApp that handle inquiries, quote prices, and schedule bookings automatically.
            </p>

            {/* Benefit Checkpoints */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mt-0.5 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <p className="text-sm text-gray-200">
                  <strong className="text-white font-medium">Bilingual & Context-Aware:</strong> Understands conversational nuances, colloquial terms, and voice notes.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mt-0.5 shrink-0">
                  <Zap className="w-3 h-3" />
                </div>
                <p className="text-sm text-gray-200">
                  <strong className="text-white font-medium">Zero Hallucinations:</strong> Strictly grounded in your company catalogue, pricing rules, and documentation.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mt-0.5 shrink-0">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <p className="text-sm text-gray-200">
                  <strong className="text-white font-medium">Native CRM Handoff:</strong> Drops qualified meetings straight into Google Calendar, Zoho, or Slack.
                </p>
              </div>
            </div>

            {/* CTA Link */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/get-quote?service=ai-chat-automation"
                className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-all flex items-center gap-2 group"
              >
                <span>Get this for your business</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Scenario Selector Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4 p-1.5 rounded-2xl glass-panel border border-white/10 bg-navy-900/70 w-full max-w-md">
              {chatScenarios.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    activeTab === idx
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm"
                      : "text-mesh-muted hover:text-white"
                  }`}
                >
                  {sc.tabLabel}
                </button>
              ))}
            </div>

            {/* Phone Frame */}
            <div className="w-full max-w-md rounded-[32px] p-2.5 sm:p-3.5 bg-gradient-to-b from-slate-700/40 via-navy-850 to-navy-900 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative">
              
              {/* Inner Screen */}
              <div className="w-full rounded-[24px] bg-[#070B14] border border-cyan-400/20 flex flex-col h-[520px] overflow-hidden">
                
                {/* Chat Header */}
                <div className="px-4 py-3 bg-navy-900/90 border-b border-white/10 flex items-center justify-between backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-cyan-glow">
                      {scenario.avatarText}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold text-white tracking-tight">
                          {scenario.businessName}
                        </span>
                        <Sparkles className="w-3 h-3 text-gold-400" />
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-cyan-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{scenario.statusText}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setVisibleCount(1);
                      setIsTyping(false);
                    }}
                    title="Restart demo scenario"
                    className="p-1.5 rounded-lg text-mesh-muted hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Messages Body */}
                <div 
                  ref={chatScrollRef}
                  className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3.5 scroll-smooth"
                >
                  {/* Subtle date chip */}
                  <div className="text-center my-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-[10px] text-mesh-muted uppercase tracking-wider">
                      Today · Live Simulation
                    </span>
                  </div>

                  {scenario.messages.slice(0, visibleCount).map((msg) => {
                    const isUser = msg.sender === "user";
                    return (
                      <div
                        key={msg.id}
                        className={`flex flex-col ${isUser ? "items-end" : "items-start"} animate-fadeIn`}
                      >
                        {/* Message Bubble */}
                        <div
                          className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed shadow-sm ${
                            isUser
                              ? "bg-navy-800 text-white border border-cyan-400/30 rounded-tr-xs"
                              : "bg-navy-900/90 text-gray-100 border border-white/10 rounded-tl-xs shadow-[0_2px_12px_rgba(47,184,255,0.06)]"
                          }`}
                        >
                          <p>{msg.text}</p>

                          {/* Embedded Confirmation Card if present */}
                          {msg.card && (
                            <div className="mt-2.5 p-2.5 rounded-xl bg-navy-950/90 border border-gold-400/30 text-[11px] space-y-1.5">
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-gold-400 text-xs">{msg.card.title}</span>
                                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-medium">
                                  {msg.card.badge}
                                </span>
                              </div>
                              <p className="text-[10px] text-mesh-muted">{msg.card.subtitle}</p>
                              <div className="space-y-1 pt-1 border-t border-white/10">
                                {msg.card.details.map((d, i) => (
                                  <div key={i} className="flex justify-between text-[10px]">
                                    <span className="text-mesh-muted">{d.label}:</span>
                                    <span className="text-gray-200 font-medium text-right">{d.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Quick replies preview */}
                          {msg.quickReplies && (
                            <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-white/5">
                              {msg.quickReplies.map((q, qIdx) => (
                                <span
                                  key={qIdx}
                                  className="px-2 py-0.5 rounded-full text-[10px] bg-cyan-500/10 text-cyan-300 border border-cyan-400/20"
                                >
                                  {q}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Timestamp & read receipts */}
                          <div className={`flex items-center gap-1 mt-1 text-[9px] text-mesh-muted ${isUser ? "justify-end" : "justify-start"}`}>
                            <span>{msg.time}</span>
                            {isUser && <CheckCheck className="w-3 h-3 text-cyan-400" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Typing Indicator Bubble */}
                  {isTyping && (
                    <div className="flex items-start">
                      <div className="bg-navy-900/80 border border-white/10 rounded-2xl rounded-tl-xs px-3.5 py-2.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Mock Input Bar */}
                <div className="p-2.5 bg-navy-900/90 border-t border-white/10 flex items-center gap-2">
                  <div className="flex-1 bg-navy-950/80 rounded-full px-3.5 py-2 text-xs text-mesh-muted border border-white/5 flex items-center justify-between">
                    <span>Ask anything or type reply...</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>

              {/* Bottom Home Indicator */}
              <div className="w-24 h-1 rounded-full bg-white/20 mx-auto mt-2" />
            </div>

            {/* Illustrative Disclaimer */}
            <p className="mt-3 text-[11px] text-mesh-muted/80 text-center tracking-tight">
              Demo conversation (illustrative) · Simulated multi-turn AI reasoning
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
