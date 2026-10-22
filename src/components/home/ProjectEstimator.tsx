"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  ShieldCheck 
} from "lucide-react";

const availableServices = [
  { id: "development", label: "Web & Mobile Development" },
  { id: "ai-chat-automation", label: "AI Chat & Automation" },
  { id: "software-engineering", label: "Custom Software Engineering" },
  { id: "digital-marketing", label: "Digital Marketing & SEO" },
  { id: "hardware-it", label: "Hardware & IT Infrastructure" },
  { id: "web3-dapps", label: "Web3 Protocols & Smart Contracts" },
];

const projectTypes = [
  { id: "new-project", label: "New Project (Ground Up)" },
  { id: "upgrade-existing", label: "Upgrade Existing System" },
  { id: "ongoing-support", label: "Ongoing Engineering Support" },
];

const timelines = [
  { id: "asap", label: "ASAP (Immediate kickoff)" },
  { id: "1-3-months", label: "1 - 3 Months" },
  { id: "flexible", label: "Flexible / Planning Phase" },
];

export function ProjectEstimator() {
  const router = useRouter();

  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Web & Mobile Development",
  ]);
  const [selectedType, setSelectedType] = useState<string>("New Project (Ground Up)");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("1 - 3 Months");

  const toggleService = (label: string) => {
    setSelectedServices((prev) =>
      prev.includes(label)
        ? prev.length > 1
          ? prev.filter((s) => s !== label)
          : prev
        : [...prev, label]
    );
  };

  const handleGetQuote = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (selectedServices.length > 0) {
      params.set("service", selectedServices.join(", "));
    }
    params.set("type", selectedType);
    params.set("timeline", selectedTimeline);

    router.push(`/contact?${params.toString()}`);
  };

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-navy-950/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-400/25 bg-cyan-400/5 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Project Scope Starter</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Configure Your Scope,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-gold-400">
              Get an Honest Proposal.
            </span>
          </h2>
          <p className="mt-3 text-mesh-muted text-sm sm:text-base">
            Select what you need below. We will pre-fill your specifications into a direct consultation request with zero automated guesswork.
          </p>
        </div>

        {/* Interactive Estimator Card */}
        <form
          onSubmit={handleGetQuote}
          className="rounded-3xl glass-panel p-6 sm:p-10 border border-cyan-400/20 bg-navy-900/70 shadow-2xl space-y-8"
        >
          {/* Step 1: Select Services (Multi-select) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs flex items-center justify-center font-bold">
                  1
                </span>
                <span>Select Required Services (Multi-select)</span>
              </label>
              <span className="text-xs text-mesh-muted">Select all that apply</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {availableServices.map((svc) => {
                const isSelected = selectedServices.includes(svc.label);
                return (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => toggleService(svc.label)}
                    className={`p-3.5 rounded-2xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                      isSelected
                        ? "bg-cyan-500/15 border-cyan-400 text-white shadow-cyan-glow"
                        : "bg-navy-950/60 border-white/10 text-mesh-muted hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <span>{svc.label}</span>
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ml-2 border ${
                        isSelected
                          ? "bg-cyan-400 border-cyan-400 text-navy-950"
                          : "border-white/20"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Project Type (Single-select) */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs flex items-center justify-center font-bold">
                2
              </span>
              <label className="text-sm font-semibold text-white">
                Project Engagement Type
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {projectTypes.map((type) => {
                const isSelected = selectedType === type.label;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.label)}
                    className={`p-3 rounded-2xl text-xs sm:text-sm font-medium transition-all text-center border ${
                      isSelected
                        ? "bg-blue-500/20 border-cyan-400 text-white shadow-sm"
                        : "bg-navy-950/60 border-white/10 text-mesh-muted hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {type.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Target Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs flex items-center justify-center font-bold">
                3
              </span>
              <label className="text-sm font-semibold text-white">
                Target Timeline
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {timelines.map((time) => {
                const isSelected = selectedTimeline === time.label;
                return (
                  <button
                    key={time.id}
                    type="button"
                    onClick={() => setSelectedTimeline(time.label)}
                    className={`p-3 rounded-2xl text-xs sm:text-sm font-medium transition-all text-center border ${
                      isSelected
                        ? "bg-gold-500/20 border-gold-400 text-gold-300 shadow-sm"
                        : "bg-navy-950/60 border-white/10 text-mesh-muted hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {time.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-mesh-muted text-center sm:text-left">
              <span className="text-white font-medium">Selected:</span>{" "}
              {selectedServices.length} Service{selectedServices.length > 1 ? "s" : ""} · {selectedType} · {selectedTimeline}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Honest Assurance */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-mesh-muted">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>No algorithms or automated markups. Reviewed directly by our technical team in Ludhiana.</span>
        </div>

      </div>
    </section>
  );
}
