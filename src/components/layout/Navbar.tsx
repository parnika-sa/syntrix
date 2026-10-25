"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Phone, 
  Code2, 
  Cpu, 
  TrendingUp, 
  Server, 
  Bot, 
  Layers,
  PackageCheck,
  HelpCircle,
  BookOpen,
  Sparkles
} from "lucide-react";
import { siteConfig, SHOW_PORTFOLIO } from "@/data/siteConfig";
import { servicesNav } from "@/data/services";
import ServiceDropdown from "@/components/layout/ServiceDropdown";

const serviceIcons: Record<string, React.ElementType> = {
  "development": Code2,
  "software-engineering": Cpu,
  "digital-marketing": TrendingUp,
  "hardware-it": Server,
  "ai-chat-automation": Bot,
  "ai-automation": Bot,
  "web3-dapps": Layers,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const pathname = usePathname();

  const drawerRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const servicesContainerRef = useRef<HTMLDivElement | null>(null);
  const resourcesContainerRef = useRef<HTMLDivElement | null>(null);

  const servicesTimerRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleServicesEnter = () => {
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
    if (resourcesTimerRef.current) clearTimeout(resourcesTimerRef.current);
    setResourcesDropdownOpen(false);
    setServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimerRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 450);
  };

  const handleResourcesEnter = () => {
    if (resourcesTimerRef.current) clearTimeout(resourcesTimerRef.current);
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
    setServicesDropdownOpen(false);
    setResourcesDropdownOpen(true);
  };

  const handleResourcesLeave = () => {
    resourcesTimerRef.current = setTimeout(() => {
      setResourcesDropdownOpen(false);
    }, 450);
  };

  useEffect(() => {
    return () => {
      if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
      if (resourcesTimerRef.current) clearTimeout(resourcesTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        servicesDropdownOpen &&
        servicesContainerRef.current &&
        !servicesContainerRef.current.contains(e.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
      if (
        resourcesDropdownOpen &&
        resourcesContainerRef.current &&
        !resourcesContainerRef.current.contains(e.target as Node)
      ) {
        setResourcesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesDropdownOpen, resourcesDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent page scrolling behind it
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setResourcesDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy-950/85 backdrop-blur-xl border-b border-cyan-400/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="w-full mx-auto" style={{ maxWidth: "1360px", paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-full p-0.5 bg-white shadow-cyan-glow transition-transform duration-300 group-hover:scale-105 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Syntrixmesh Solutions Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  SYNTRIX<span className="text-cyan-400">MESH</span>
                </span>
                <span className="text-[10px] tracking-widest text-mesh-muted uppercase -mt-1 font-medium">
                  Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-navy-900/60 p-1.5 rounded-full border border-cyan-400/15 backdrop-blur-md">
              <Link
                href="/"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  pathname === "/"
                    ? "bg-cyan-400/15 text-cyan-400 shadow-[0_0_12px_rgba(47,184,255,0.2)]"
                    : "text-mesh-text hover:text-white hover:bg-white/5"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                ref={servicesContainerRef}
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <div className="flex items-center">
                  <Link
                    href="/services"
                    className={`px-3 py-2 rounded-l-full text-sm font-medium transition-all ${
                      pathname.startsWith("/services")
                        ? "bg-cyan-400/15 text-cyan-400 shadow-[0_0_12px_rgba(47,184,255,0.2)]"
                        : "text-mesh-text hover:text-white hover:bg-white/5"
                    }`}
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    aria-label="Toggle services sub-menu"
                    aria-haspopup="true"
                    aria-expanded={servicesDropdownOpen}
                    aria-controls="services-dropdown"
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setServicesDropdownOpen(true);
                      }
                      if (e.key === "Escape") {
                        setServicesDropdownOpen(false);
                      }
                    }}
                    className="px-2 py-2 rounded-r-full text-mesh-text hover:text-white hover:bg-white/5 focus-visible:outline-cyan-400 cursor-pointer"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? "rotate-180 text-cyan-400" : ""
                      }`}
                    />
                  </button>
                </div>

                <ServiceDropdown
                  isOpen={servicesDropdownOpen}
                  onClose={() => setServicesDropdownOpen(false)}
                />
              </div>

              <Link
                href="/about"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  pathname === "/about"
                    ? "bg-cyan-400/15 text-cyan-400 shadow-[0_0_12px_rgba(47,184,255,0.2)]"
                    : "text-mesh-text hover:text-white hover:bg-white/5"
                }`}
              >
                About
              </Link>

              {/* Portfolio link: controlled by SHOW_PORTFOLIO flag in src/config/site.ts */}
              {SHOW_PORTFOLIO && (
                <Link
                  href="/portfolio"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    pathname === "/portfolio"
                      ? "bg-cyan-400/15 text-cyan-400 shadow-[0_0_12px_rgba(47,184,255,0.2)]"
                      : "text-mesh-text hover:text-white hover:bg-white/5"
                  }`}
                >
                  Portfolio
                </Link>
              )}

              {/* Resources Dropdown */}
              <div
                ref={resourcesContainerRef}
                className="relative"
                onMouseEnter={handleResourcesEnter}
                onMouseLeave={handleResourcesLeave}
              >
                <button
                  type="button"
                  aria-label="Toggle resources sub-menu"
                  aria-haspopup="true"
                  aria-expanded={resourcesDropdownOpen}
                  aria-controls="resources-dropdown-panel"
                  onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setResourcesDropdownOpen(true);
                    }
                    if (e.key === "Escape") {
                      setResourcesDropdownOpen(false);
                    }
                  }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    pathname === "/packages" || pathname === "/faq" || pathname.startsWith("/blog")
                      ? "bg-cyan-400/15 text-cyan-400 shadow-[0_0_12px_rgba(47,184,255,0.2)]"
                      : "text-mesh-text hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      resourcesDropdownOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>

                {resourcesDropdownOpen && (
                  <div
                    id="resources-dropdown-panel"
                    onMouseEnter={handleResourcesEnter}
                    onMouseLeave={handleResourcesLeave}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl bg-navy-950/95 backdrop-blur-2xl border border-cyan-400/25 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(47,184,255,0.15)] z-[100] before:absolute before:-top-5 before:left-0 before:w-full before:h-5 before:content-[''] animate-fadeIn"
                  >
                    {/* Header accent */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyan-400/15 px-2">
                      <span className="text-[10px] font-heading font-semibold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        Resources &amp; Insights
                      </span>
                    </div>

                    <Link
                      href="/packages"
                      onClick={() => setResourcesDropdownOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-cyan-400/10 transition-all duration-200 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-navy-900 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-navy-950 transition-all shrink-0">
                        <PackageCheck className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-white group-hover:text-cyan-400 transition-colors">
                          Packages
                        </div>
                        <div className="text-[11px] text-mesh-muted">3 Engagement Models</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                    </Link>

                    <Link
                      href="/faq"
                      onClick={() => setResourcesDropdownOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-cyan-400/10 transition-all duration-200 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-navy-900 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-navy-950 transition-all shrink-0">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-white group-hover:text-cyan-400 transition-colors">
                          FAQ
                        </div>
                        <div className="text-[11px] text-mesh-muted">18 Questions &amp; Answers</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                    </Link>

                    <Link
                      href="/blog"
                      onClick={() => setResourcesDropdownOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-cyan-400/10 transition-all duration-200 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-navy-900 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-navy-950 transition-all shrink-0">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-white group-hover:text-cyan-400 transition-colors">
                          Engineering Blog
                        </div>
                        <div className="text-[11px] text-mesh-muted">Technical Deep Dives</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  pathname === "/contact"
                    ? "bg-cyan-400/15 text-cyan-400 shadow-[0_0_12px_rgba(47,184,255,0.2)]"
                    : "text-mesh-text hover:text-white hover:bg-white/5"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="hidden xl:inline-flex items-center gap-2 text-xs text-mesh-text hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{siteConfig.contact.phone}</span>
              </a>

              <Link
                href="/get-quote"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/get-quote"
                className="text-xs px-3.5 py-1.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 sm:hidden font-medium hover:bg-cyan-400/20 transition-all"
              >
                Get Quote
              </Link>
              <button
                ref={menuButtonRef}
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl bg-navy-900 border border-cyan-400/20 text-white hover:text-cyan-400 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Overlay (Standalone Portal Element with z-[100]) */}
      {mobileMenuOpen && (
        <div
          ref={drawerRef}
          data-lenis-prevent
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="lg:hidden fixed inset-0 z-[100] bg-[#070B14] flex flex-col h-[100dvh] w-screen overflow-hidden"
          style={{ touchAction: "auto" }}
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-cyan-400/15 bg-navy-950/90 backdrop-blur-md shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="relative w-10 h-10 rounded-full p-0.5 bg-white shadow-cyan-glow flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Syntrixmesh Solutions Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-base text-white tracking-tight">
                  SYNTRIX<span className="text-cyan-400">MESH</span>
                </span>
                <span className="text-[9px] tracking-widest text-mesh-muted uppercase -mt-1 font-medium">
                  Solutions
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-3">
              <Link
                href="/get-quote"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs px-3.5 py-1.5 rounded-full bg-cyan-400/15 text-cyan-400 border border-cyan-400/30 font-medium hover:bg-cyan-400/25 transition-all"
              >
                Get Quote
              </Link>
              <button
                ref={closeButtonRef}
                onClick={() => {
                  setMobileMenuOpen(false);
                  menuButtonRef.current?.focus();
                }}
                className="p-2 rounded-xl bg-navy-900 border border-cyan-400/30 text-white hover:text-cyan-400 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Scrollable Drawer Content (Never disappears on scroll) */}
          <div
            data-lenis-prevent
            className="flex-1 overflow-y-auto overscroll-contain px-6 py-6 space-y-6"
          >
            {/* Nav Links */}
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-heading font-semibold text-white hover:text-cyan-400 py-3 border-b border-navy-800/80 transition-colors"
              >
                Home
              </Link>

              {/* Collapsible Services Group */}
              <div className="border-b border-navy-800/80 py-2">
                <div className="flex items-center justify-between py-2">
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xl font-heading font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    All Services
                  </Link>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-1.5 text-cyan-400 hover:text-white"
                    aria-label="Toggle subservices"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="pl-3 py-2 space-y-3">
                    {servicesNav.map((svc) => {
                      const Icon = serviceIcons[svc.id] || Code2;
                      return (
                        <Link
                          key={svc.id}
                          href={`/services/${svc.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-2 rounded-xl bg-navy-900/50 border border-cyan-400/10 hover:border-cyan-400/40 text-mesh-text hover:text-white transition-all"
                        >
                          <div className="p-1.5 rounded-lg bg-navy-800 text-cyan-400">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block text-sm font-medium text-white">
                              {svc.shortTitle}
                            </span>
                            <span className="block text-[11px] text-mesh-muted line-clamp-1">
                              {svc.tagline}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-heading font-semibold text-white hover:text-cyan-400 py-3 border-b border-navy-800/80 transition-colors"
              >
                About Us & Founder
              </Link>

              {/* Portfolio link: controlled by SHOW_PORTFOLIO flag in src/config/site.ts */}
              {SHOW_PORTFOLIO && (
                <Link
                  href="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xl font-heading font-semibold text-white hover:text-cyan-400 py-3 border-b border-navy-800/80 transition-colors"
                >
                  Portfolio & Case Studies
                </Link>
              )}

              {/* Collapsible Resources Group */}
              <div className="border-b border-navy-800/80 py-2">
                <div className="flex items-center justify-between py-2">
                  <span className="text-xl font-heading font-semibold text-white">
                    Resources
                  </span>
                  <button
                    type="button"
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="p-1.5 text-cyan-400 hover:text-white"
                    aria-label="Toggle resources menu"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        mobileResourcesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileResourcesOpen && (
                  <div className="pl-3 py-2 space-y-2">
                    <Link
                      href="/packages"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl bg-navy-900/50 border border-cyan-400/10 hover:border-cyan-400/40 text-sm font-medium text-white"
                    >
                      Service Packages & Models
                    </Link>
                    <Link
                      href="/faq"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl bg-navy-900/50 border border-cyan-400/10 hover:border-cyan-400/40 text-sm font-medium text-white"
                    >
                      Frequently Asked Questions (FAQ)
                    </Link>
                    <Link
                      href="/blog"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl bg-navy-900/50 border border-cyan-400/10 hover:border-cyan-400/40 text-sm font-medium text-white"
                    >
                      Engineering Blog & Guides
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-heading font-semibold text-white hover:text-cyan-400 py-3 border-b border-navy-800/80 transition-colors"
              >
                Contact & Ludhiana Office
              </Link>
            </div>

            {/* Bottom Contact Details */}
            <div className="pt-4 space-y-4">
              <div className="p-4 rounded-2xl glass-panel border border-cyan-400/20 bg-navy-900/70 space-y-3">
                <div className="text-xs text-mesh-muted">
                  Jhande, Ludhiana, Punjab, 142021
                </div>
                <a
                  href={`tel:${siteConfig.contact.phoneClean}`}
                  className="flex items-center gap-2 text-sm text-cyan-400 font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.contact.phone}
                </a>
              </div>

              <Link
                href="/get-quote"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3.5 text-center rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all"
              >
                Get a Free Quote
              </Link>

              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3 text-center rounded-xl font-medium text-cyan-300 border border-cyan-400/30 bg-navy-950/80 hover:bg-cyan-500/10 transition-colors"
              >
                Chat directly on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
