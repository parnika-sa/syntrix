import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import PageTransition from "@/components/ui/PageTransition";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import ScrollManager from "@/components/layout/ScrollManager";
import { siteConfig } from "@/data/siteConfig";

import CookieBanner from "@/components/ui/CookieBanner";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070B14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Syntrixmesh Solutions | Software · Web · IT Infrastructure",
    template: "%s | Syntrixmesh Solutions",
  },
  description:
    "End-to-End Technology & Growth Partner. Custom software engineering, high-performance web applications, 24/7 AI chat automation, and physical enterprise IT infrastructure based in Ludhiana, Punjab with global delivery.",
  keywords: [
    "Syntrixmesh Solutions",
    "web development company in Ludhiana",
    "custom software development in Punjab",
    "AI chatbot and WhatsApp automation for business",
    "IT hardware and workstation builds in Ludhiana",
    "digital marketing and SEO services in Ludhiana",
    "Web3 and smart contract development",
    "Next.js Developers India",
    "Manmeet Singh Ludhiana",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Manmeet Singh", url: siteConfig.domain }],
  creator: "Manmeet Singh",
  publisher: "Syntrixmesh Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.domain,
    title: "Syntrixmesh Solutions | End-to-End Technology & Growth Partner",
    description:
      "Enterprise software, AI automation, high-speed web apps, and IT infrastructure engineered for high-growth businesses.",
    siteName: "Syntrixmesh Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Syntrixmesh Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syntrixmesh Solutions | Software · Web · IT Infrastructure",
    description: "End-to-End Technology & Growth Partner. Delivering cutting-edge software & IT worldwide.",
    images: ["/og-image.png"],
    creator: "@syntrixmesh",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.domain}/#organization`,
      name: siteConfig.name,
      url: siteConfig.domain,
      logo: `${siteConfig.domain}/logo.png`,
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      founder: {
        "@type": "Person",
        name: siteConfig.founder.name,
        jobTitle: siteConfig.founder.role,
      },
      sameAs: [
        siteConfig.socials.linkedin,
        siteConfig.socials.twitter,
        siteConfig.socials.github,
        siteConfig.socials.instagram,
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.domain}/#localbusiness`,
      name: siteConfig.name,
      image: `${siteConfig.domain}/logo.png`,
      url: siteConfig.domain,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.contact.address.street,
        addressLocality: siteConfig.contact.address.city,
        addressRegion: siteConfig.contact.address.state,
        postalCode: siteConfig.contact.address.pincode,
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.8521,
        longitude: 75.8055,
      },
      areaServed: [
        { "@type": "City", name: "Ludhiana" },
        { "@type": "AdministrativeArea", name: "Punjab" },
        { "@type": "Country", name: "India" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "19:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.domain}/#website`,
      url: siteConfig.domain,
      name: siteConfig.name,
      description: siteConfig.brandLine,
      publisher: {
        "@id": `${siteConfig.domain}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bricolageGrotesque.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} font-sans bg-[#070B14] text-mesh-text antialiased selection:bg-cyan-400 selection:text-navy-950 overflow-x-clip`}
      >
        <SmoothScroll>
          <ScrollManager />
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          <Preloader />
          <CustomCursor />
          <Navbar />
          <main id="main-content" tabIndex={-1} className="min-h-screen pt-20 outline-none overflow-x-clip">
            <PageTransition>{children}</PageTransition>
          </main>
          <FloatingWhatsApp />
          <Footer />
          <CookieBanner />
        </SmoothScroll>
      </body>
    </html>
  );
}
