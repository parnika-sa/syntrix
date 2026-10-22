"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  Heart,
  Sliders,
  ShieldCheck
} from "lucide-react";
import { 
  LinkedinIcon, 
  TwitterIcon, 
  GithubIcon, 
  InstagramIcon 
} from "@/components/ui/BrandIcons";
import { siteConfig } from "@/data/siteConfig";
import { servicesNav } from "@/data/services";
import { openCookieBanner } from "@/components/ui/CookieBanner";

export default function Footer() {
  return (
    <footer className="relative bg-[#050811] text-mesh-text border-t border-cyan-400/15 overflow-hidden">
      {/* Background ambient mesh glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-mesh-radial pointer-events-none opacity-50" />
      
      {/* Top CTA Bar */}
      <div className="border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="rounded-3xl p-8 sm:p-12 glass-panel border border-cyan-400/20 bg-gradient-to-r from-navy-900/90 via-navy-850/90 to-navy-900/90 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-gold-500/10 blur-[80px] pointer-events-none" />

            <div className="text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2 block">
                Ready to elevate your technology?
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
                Let&apos;s Build Systems That Scale Your Business.
              </h3>
              <p className="mt-2 text-mesh-text max-w-xl text-sm sm:text-base">
                From high-speed web apps and AI automations to enterprise IT setups in Ludhiana and globally.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full font-semibold text-white/90 glass-panel border border-cyan-400/20 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full p-0.5 bg-white shadow-cyan-glow flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Syntrixmesh Solutions Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
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

            <p className="text-xs sm:text-sm text-mesh-text leading-relaxed">
              <strong className="text-white">{siteConfig.brandLine}</strong>. Bespoke web software, AI automations, and turnkey IT infrastructure engineered for sustainable enterprise scale.
            </p>

            <div className="pt-1 text-xs text-mesh-muted">
              Founded & Architected by <span className="text-white font-medium">{siteConfig.founder.name}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Syntrixmesh on LinkedIn"
                className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-mesh-text hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Syntrixmesh on Twitter"
                className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-mesh-text hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Syntrixmesh on GitHub"
                className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-mesh-text hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Syntrixmesh on Instagram"
                className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-mesh-text hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesNav.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="hover:text-cyan-400 transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{svc.shortTitle}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors block py-0.5">
                  About Our Firm
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Case Studies & Proof
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Engagement Packages
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Frequently Asked (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/get-quote" className="hover:text-cyan-400 transition-colors block py-0.5 text-cyan-300 font-medium">
                  Get a Free Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Contact & Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Legal & Policy
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Refund & Cancellation
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-cyan-400 transition-colors block py-0.5">
                  HTML Sitemap
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openCookieBanner()}
                  className="hover:text-cyan-400 text-mesh-muted transition-colors flex items-center gap-1.5 py-0.5 text-left cursor-pointer"
                >
                  <Sliders className="w-3 h-3 text-cyan-400" />
                  <span>Cookie Settings</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-mesh-text">
                  {siteConfig.contact.address.full}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneClean}`}
                  className="hover:text-cyan-400 text-xs transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-cyan-400 text-xs transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-4 p-3 rounded-xl bg-navy-900/60 border border-gold-400/20 text-[11px] text-mesh-text">
              <span className="text-gold-400 font-semibold block mb-0.5">Ludhiana & Global:</span>
              Serving clients across India, North America, Europe, UAE & APAC.
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credits */}
        <div className="mt-14 pt-8 border-t border-cyan-400/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mesh-muted">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" /> in Ludhiana, Punjab for high-growth businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
