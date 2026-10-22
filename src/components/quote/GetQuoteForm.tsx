"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  MessageCircle, 
  ShieldCheck 
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const availableServices = [
  { id: "development", label: "Web & Mobile Development", iconName: "Code" },
  { id: "ai-chat-automation", label: "AI Chat & Automation", iconName: "Bot" },
  { id: "software-engineering", label: "Custom Software Engineering", iconName: "Cpu" },
  { id: "digital-marketing", label: "Digital Marketing & SEO", iconName: "TrendingUp" },
  { id: "hardware-it", label: "Hardware & IT Infrastructure", iconName: "Server" },
  { id: "web3-dapps", label: "Web3 Protocols & Smart Contracts", iconName: "Boxes" },
];

const engagementTypes = [
  { id: "new-project", label: "New Project (Ground Up)", desc: "Brand new application or architecture" },
  { id: "upgrade-existing", label: "Upgrade Existing System", desc: "Refactor, speed up, or modernize" },
  { id: "ongoing-support", label: "Ongoing Engineering Support", desc: "Dedicated monthly sprint cycles" },
];

const timelineOptions = [
  { id: "asap", label: "ASAP (Kickoff within 2 weeks)" },
  { id: "1-3-months", label: "1 - 3 Months" },
  { id: "flexible", label: "Flexible / Planning Phase" },
];

const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 - ₹1,50,000",
  "₹1,50,000 - ₹3,00,000",
  "₹3,00,000+",
  "To be discussed based on scope",
];

function QuoteFormContent() {
  const searchParams = useSearchParams();

  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Web & Mobile Development",
  ]);
  const [engagementType, setEngagementType] = useState<string>("New Project (Ground Up)");
  const [timeline, setTimeline] = useState<string>("1 - 3 Months");
  const [budgetRange, setBudgetRange] = useState<string>("To be discussed based on scope");
  const [projectDescription, setProjectDescription] = useState<string>("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Read URL query params
  useEffect(() => {
    const qService = searchParams.get("service") || searchParams.get("services");
    const qType = searchParams.get("type");
    const qTimeline = searchParams.get("timeline");

    if (qService) {
      const items = qService.split(",").map((s) => s.trim().toLowerCase());
      const matched = availableServices
        .filter((s) =>
          items.some(
            (it) =>
              s.id.toLowerCase() === it ||
              s.label.toLowerCase().includes(it) ||
              it.includes(s.id)
          )
        )
        .map((s) => s.label);

      if (matched.length > 0) {
        setSelectedServices(matched);
      }
    }

    if (qType) {
      const foundType = engagementTypes.find((t) =>
        t.label.toLowerCase().includes(qType.toLowerCase()) ||
        t.id.toLowerCase() === qType.toLowerCase()
      );
      if (foundType) setEngagementType(foundType.label);
    }

    if (qTimeline) {
      const foundTime = timelineOptions.find((t) =>
        t.label.toLowerCase().includes(qTimeline.toLowerCase()) ||
        t.id.toLowerCase() === qTimeline.toLowerCase()
      );
      if (foundTime) setTimeline(foundTime.label);
    }
  }, [searchParams]);

  const toggleService = (label: string) => {
    setSelectedServices((prev) =>
      prev.includes(label)
        ? prev.length > 1
          ? prev.filter((s) => s !== label)
          : prev
        : [...prev, label]
    );
  };

  const handleNext = () => {
    setErrors({});
    if (step === 1) {
      if (selectedServices.length === 0) {
        setErrors({ services: "Please select at least one service." });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handlePrev = () => {
    setErrors({});
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setServerError(null);

    // Validation
    const newErrors: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your name (at least 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!phone.trim() || phone.replace(/\D/g, "").length < 7) {
      newErrors.phone = "Please enter a valid phone or WhatsApp number.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        services: selectedServices,
        service: selectedServices.join(", "),
        engagementType,
        timeline,
        budget: budgetRange,
        budgetRange,
        message: projectDescription.trim() || "Quote request submitted via Scope Estimator.",
        honeypot,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Failed to submit quote request.");
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      setServerError(
        err instanceof Error
          ? err.message
          : "An error occurred while submitting your scope. Please try again or message us on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-3xl glass-panel p-8 sm:p-14 border border-cyan-400/30 bg-navy-900/80 text-center max-w-2xl mx-auto shadow-2xl animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mx-auto mb-6 shadow-cyan-glow">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
          Scope Received Successfully!
        </h3>

        <p className="text-sm sm:text-base text-mesh-muted leading-relaxed mb-6">
          Thank you, <strong className="text-white">{fullName}</strong>. Founder Manmeet Singh and our engineering team in Ludhiana are reviewing your specifications:
        </p>

        <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/10 text-left text-xs sm:text-sm text-mesh-muted space-y-2 mb-8">
          <div>
            <span className="text-white font-medium">Selected Services:</span>{" "}
            <span className="text-cyan-300">{selectedServices.join(", ")}</span>
          </div>
          <div>
            <span className="text-white font-medium">Engagement Model:</span> {engagementType}
          </div>
          <div>
            <span className="text-white font-medium">Target Timeline:</span> {timeline}
          </div>
        </div>

        <p className="text-xs text-mesh-muted mb-8">
          A written technical scope document and preliminary timeline estimate will be sent to{" "}
          <strong className="text-cyan-400">{email}</strong> within 24 hours.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/918054080370?text=${encodeURIComponent(
              `Hi Syntrixmesh Solutions, I just submitted a quote request for: ${selectedServices.join(
                ", "
              )}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-opacity inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp Directly</span>
          </a>

          <button
            onClick={() => {
              setIsSuccess(false);
              setStep(1);
            }}
            className="px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-mesh-muted hover:text-white transition-colors"
          >
            Configure Another Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* 3-Step Progress Indicator */}
      <div className="mb-10">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {[
            { num: 1, label: "Services" },
            { num: 2, label: "Parameters" },
            { num: 3, label: "Details" },
          ].map((st) => (
            <div key={st.num} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-all border ${
                  step === st.num
                    ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-cyan-glow"
                    : step > st.num
                    ? "bg-cyan-400 text-navy-950 border-cyan-400"
                    : "bg-navy-900 border-white/20 text-mesh-muted"
                }`}
              >
                {step > st.num ? <Check className="w-4 h-4 stroke-[3]" /> : st.num}
              </div>
              <span
                className={`text-[11px] font-medium mt-1.5 ${
                  step >= st.num ? "text-white" : "text-mesh-muted"
                }`}
              >
                {st.label}
              </span>
            </div>
          ))}
        </div>
        <div className="relative mt-3 max-w-xs mx-auto h-1 bg-navy-900 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Interactive Form Card */}
      <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-cyan-400/20 bg-navy-900/70 shadow-2xl">
        {serverError && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-300 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>{serverError}</span>
          </div>
        )}

        {/* STEP 1: Select Services */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-1">
                Step 1: Select Required Services
              </h3>
              <p className="text-xs sm:text-sm text-mesh-muted">
                Choose one or multiple engineering disciplines you need engineered.
              </p>
            </div>

            {errors.services && (
              <p className="text-xs text-red-400">{errors.services}</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {availableServices.map((svc) => {
                const isSelected = selectedServices.includes(svc.label);
                return (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => toggleService(svc.label)}
                    className={`p-4 rounded-2xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                      isSelected
                        ? "bg-cyan-500/15 border-cyan-400 text-white shadow-cyan-glow"
                        : "bg-navy-950/60 border-white/10 text-mesh-muted hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <span>{svc.label}</span>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ml-3 border transition-colors ${
                        isSelected
                          ? "bg-cyan-400 border-cyan-400 text-navy-950"
                          : "border-white/20"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-mesh-muted">
                Selected: <strong className="text-white">{selectedServices.length}</strong> discipline(s)
              </span>

              <button
                type="button"
                onClick={handleNext}
                className="px-7 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-all flex items-center gap-2"
              >
                <span>Continue to Parameters</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Parameters & Description */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-1">
                Step 2: Project Engagement &amp; Timeline
              </h3>
              <p className="text-xs sm:text-sm text-mesh-muted">
                Help us understand your delivery constraints and current project stage.
              </p>
            </div>

            {/* Engagement Type */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-200 uppercase tracking-wider block">
                Engagement Model
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {engagementTypes.map((type) => {
                  const isSelected = engagementType === type.label;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setEngagementType(type.label)}
                      className={`p-3.5 rounded-2xl text-left border transition-all ${
                        isSelected
                          ? "bg-blue-500/20 border-cyan-400 text-white shadow-sm"
                          : "bg-navy-950/60 border-white/10 text-mesh-muted hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <div className="text-xs font-semibold text-white mb-1">{type.label}</div>
                      <div className="text-[10px] text-mesh-muted leading-snug">{type.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-200 uppercase tracking-wider block">
                Target Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timelineOptions.map((time) => {
                  const isSelected = timeline === time.label;
                  return (
                    <button
                      key={time.id}
                      type="button"
                      onClick={() => setTimeline(time.label)}
                      className={`p-3 rounded-2xl text-xs font-medium transition-all text-center border ${
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

            {/* Budget Range */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-200 uppercase tracking-wider block">
                Estimated Budget Range (Optional)
              </label>
              <select
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
              >
                {budgetRanges.map((b) => (
                  <option key={b} value={b} className="bg-navy-900 text-white">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Project Short Description */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-200 uppercase tracking-wider block">
                Brief Project Description
              </label>
              <textarea
                rows={3}
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Give us a 1-2 sentence overview of what you want to build or automate..."
                className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-white/10 text-xs sm:text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={handlePrev}
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-mesh-muted hover:text-white transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-7 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-all flex items-center gap-2"
              >
                <span>Continue to Contact</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Contact Details & Submit */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-1">
                Step 3: Where Should We Send Your Proposal?
              </h3>
              <p className="text-xs sm:text-sm text-mesh-muted">
                Founder Manmeet Singh will review your scope and provide a direct technical reply.
              </p>
            </div>

            {/* Honeypot anti-spam field */}
            <input
              type="text"
              name="honeypot"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-200 block mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Gurpreet Singh"
                  className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400"
                />
                {errors.fullName && (
                  <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-200 block mb-1.5">
                  Business Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400"
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-200 block mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400"
              />
              {errors.phone && (
                <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Scope Summary Preview */}
            <div className="p-4 rounded-2xl bg-navy-950/70 border border-cyan-400/20 text-xs text-mesh-muted space-y-1.5">
              <div className="flex justify-between">
                <span className="text-white font-medium">Selected Services:</span>
                <span className="text-cyan-300 font-semibold text-right">{selectedServices.join(", ")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white font-medium">Engagement:</span>
                <span className="text-gray-200">{engagementType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white font-medium">Timeline:</span>
                <span className="text-gray-200">{timeline}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={handlePrev}
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-mesh-muted hover:text-white transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:opacity-95 transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Scope...</span>
                  </>
                ) : (
                  <>
                    <span>Submit &amp; Get Proposal</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Alternative WhatsApp Button & Honest Assurance */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mesh-muted">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Strict NDA Protection. We never share your project specs or contact info.</span>
        </div>

        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Prefer direct WhatsApp?</span>
        </a>
      </div>
    </div>
  );
}

export default function GetQuoteForm() {
  return (
    <Suspense fallback={<div className="text-center py-12 text-sm text-mesh-muted">Loading scope configurator...</div>}>
      <QuoteFormContent />
    </Suspense>
  );
}
