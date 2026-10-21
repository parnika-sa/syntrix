"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  Heart
} from "lucide-react";
import { 
  LinkedinIcon, 
  TwitterIcon, 
  GithubIcon, 
  InstagramIcon 
} from "@/components/ui/BrandIcons";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full p-0.5 bg-white shadow-cyan-glow flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.svg"
                  alt="Syntrixmesh Solutions Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  SYNTRIX<span className="text-cyan-400">MESH</span>
                </span>
                <span className="text-[10px] tracking-widest text-mesh-muted uppercase -mt-1 font-medium">
                  Solutions
                </span>
              </div>
            </Link>

            <p className="text-sm text-mesh-text leading-relaxed max-w-sm">
              <strong className="text-white">{siteConfig.brandLine}</strong>. We architect bespoke web software, intelligent AI automations, and turnkey IT infrastructure designed for sustainable enterprise scale.
            </p>

            <div className="pt-2 text-xs text-mesh-muted">
              Founded & Architected by <span className="text-white font-medium">{siteConfig.founder.name}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-mesh-text hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-mesh-text hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-mesh-text hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-mesh-text hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="hover:text-cyan-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{svc.shortTitle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About Our Firm
                </Link>
              </li>
              <li>
                <Link href="/about#founder" className="hover:text-cyan-400 transition-colors">
                  Meet Founder Manmeet
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cyan-400 transition-colors">
                  Case Studies & Proof
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Full Technology Stack
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Request a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-mesh-text">
                  {siteConfig.contact.address.full}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneClean}`}
                  className="hover:text-cyan-400 text-xs transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
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
              <span className="text-gold-400 font-semibold block mb-0.5">Global Delivery:</span>
              Serving clients across India, North America, Europe, UAE & APAC.
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credits */}
        <div className="mt-14 pt-8 border-t border-cyan-400/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mesh-muted">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" /> for high-performance technology teams worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
