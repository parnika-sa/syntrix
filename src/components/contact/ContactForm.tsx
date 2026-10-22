"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Sparkles, 
  MessageCircle 
} from "lucide-react";
import { company } from "@/data/company";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  honeypot: string; // Anti-spam field
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message?: string;
}

const serviceOptions = [
  { value: "Development", label: "Web & Mobile Development" },
  { value: "Software Engineering", label: "Software Engineering & APIs" },
  { value: "Digital Marketing", label: "Digital Marketing & SEO" },
  { value: "Hardware & IT", label: "Hardware & IT Infrastructure" },
  { value: "AI Chat & Automation", label: "AI Chat & Automation" },
  { value: "Web3 & Dapps", label: "Web3 & Decentralized Apps" },
  { value: "Other", label: "Other / Custom Consultation" },
];

const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000+",
  "Not sure yet",
];

const slugToService: Record<string, string> = {
  "development": "Development",
  "software-engineering": "Software Engineering",
  "digital-marketing": "Digital Marketing",
  "hardware-it": "Hardware & IT",
  "ai-chat-automation": "AI Chat & Automation",
  "ai-automation": "AI Chat & Automation",
  "web3-dapps": "Web3 & Dapps",
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const queryService = searchParams.get("service");

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Pre-select service from URL query parameter if present
  useEffect(() => {
    if (queryService) {
      const mapped = slugToService[queryService.toLowerCase()] || queryService;
      const found = serviceOptions.find(
        (opt) =>
          opt.value.toLowerCase() === mapped.toLowerCase() ||
          opt.label.toLowerCase() === mapped.toLowerCase()
      );
      if (found) {
        setFormData((prev) => ({ ...prev, service: found.value }));
      }
    }
  }, [queryService]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (min 2 characters)";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid business email address";
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = "Please enter a valid phone or WhatsApp number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select an estimated budget range";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please describe your project (min 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit request.");
      }

      // Success
      setIsSuccess(true);
      try {
        const { default: confetti } = await import("canvas-confetti");
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2FB8FF", "#1E6BFF", "#C9A24B", "#FFFFFF"],
        });
      } catch {
        // Continue normally if canvas-confetti is unavailable
      }

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
        honeypot: "",
      });
      setErrors({});
    } catch (err: unknown) {
      console.error("Form submission error:", err);
      const msg =
        err instanceof Error
          ? err.message
          : "Could not send your message. Please WhatsApp us directly.";
      setServerError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative rounded-3xl p-6 sm:p-10 glass-panel border border-cyan-400/25 bg-navy-900/80 shadow-[0_10px_40px_-10px_rgba(47,184,255,0.15)] overflow-hidden">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#2FB8FF]" />
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              START YOUR PROJECT
            </span>
          </div>

          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
            Send Us a Message
          </h3>
          <p className="text-sm text-mesh-text mb-8">
            Fill out the form below. Principal architects will review your requirements within 2 to 4 business hours.
          </p>

          {/* Success State View */}
          <AnimatePresence>
            {isSuccess && (
              <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 border border-cyan-400/40 shadow-cyan-glow text-center mb-8"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-400/15 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(47,184,255,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h4 className="font-heading font-bold text-xl text-white mb-2">
                  Thank you! Your Message Has Been Sent.
                </h4>
                <p className="text-sm text-mesh-text max-w-md mx-auto mb-6 leading-relaxed">
                  Founder Manmeet Singh and our engineering team have received your request. We will review your project details and reach out within 24 hours.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold text-white glass-panel border border-cyan-400/30 hover:border-cyan-400 hover:text-cyan-400 transition-all"
                  >
                    Send Another Inquiry
                  </button>

                  <a
                    href={company.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-md hover:scale-105 transition-all flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </m.div>
            )}
          </AnimatePresence>

        {/* The Interactive Form */}
        {!isSuccess && (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            
            {/* Honeypot hidden input field (anti-spam) */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot}
                onChange={handleChange}
              />
            </div>

            {/* Full Name Field */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2"
              >
                Full Name <span className="text-cyan-400">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="e.g. Gurpreet Singh or David Miller"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 rounded-xl bg-navy-950/80 border text-white placeholder-mesh-muted text-sm transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                  errors.fullName
                    ? "border-red-500/70 shadow-[0_0_10px_rgba(239,68,68,0.2)]"
                    : "border-cyan-400/20 focus:border-cyan-400 focus:shadow-cyan-glow"
                }`}
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2"
                >
                  Business Email <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-xl bg-navy-950/80 border text-white placeholder-mesh-muted text-sm transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                    errors.email
                      ? "border-red-500/70 shadow-[0_0_10px_rgba(239,68,68,0.2)]"
                      : "border-cyan-400/20 focus:border-cyan-400 focus:shadow-cyan-glow"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2"
                >
                  Phone / WhatsApp <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-xl bg-navy-950/80 border text-white placeholder-mesh-muted text-sm transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                    errors.phone
                      ? "border-red-500/70 shadow-[0_0_10px_rgba(239,68,68,0.2)]"
                      : "border-cyan-400/20 focus:border-cyan-400 focus:shadow-cyan-glow"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Service & Budget Dropdowns Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Service Interested In */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2"
                >
                  Service Interested In <span className="text-cyan-400">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-xl bg-navy-950/90 border text-white text-sm transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                    errors.service
                      ? "border-red-500/70"
                      : "border-cyan-400/20 focus:border-cyan-400 focus:shadow-cyan-glow"
                  }`}
                >
                  <option value="" disabled className="bg-navy-950 text-mesh-muted">
                    Select a service category...
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-navy-950 text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Budget Range */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2"
                >
                  Estimated Budget <span className="text-cyan-400">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-xl bg-navy-950/90 border text-white text-sm transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                    errors.budget
                      ? "border-red-500/70"
                      : "border-cyan-400/20 focus:border-cyan-400 focus:shadow-cyan-glow"
                  }`}
                >
                  <option value="" disabled className="bg-navy-950 text-mesh-muted">
                    Select your budget range...
                  </option>
                  {budgetOptions.map((b) => (
                    <option key={b} value={b} className="bg-navy-950 text-white">
                      {b}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.budget}
                  </p>
                )}
              </div>
            </div>

            {/* Project Details Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2"
              >
                Project Details & Scope <span className="text-cyan-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your project goals, timeline, existing tech stack, or specific challenges..."
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 rounded-xl bg-navy-950/80 border text-white placeholder-mesh-muted text-sm transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-y min-h-[110px] ${
                  errors.message
                    ? "border-red-500/70 shadow-[0_0_10px_rgba(239,68,68,0.2)]"
                    : "border-cyan-400/20 focus:border-cyan-400 focus:shadow-cyan-glow"
                }`}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Server Error Message */}
            {serverError && (
              <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
                <div>
                  <span className="font-semibold block">Submission Error:</span>
                  <span>{serverError}</span>
                  <div className="mt-2">
                    <a
                      href={company.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline font-semibold"
                    >
                      Click here to WhatsApp us directly →
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-8 rounded-full font-heading font-semibold text-white text-base bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2 group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting Inquiry...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            <div className="text-center pt-2">
              <span className="text-[11px] text-mesh-muted flex items-center justify-center gap-1.5">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                Strict NDA Protected · 100% Confidential · Direct Engineer Review
              </span>
            </div>

          </form>
        )}
      </div>
    </div>
  </LazyMotion>
);
}
