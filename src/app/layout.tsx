import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import PageTransition from "@/components/ui/PageTransition";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { siteConfig } from "@/data/siteConfig";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    "Manmeet Singh Ludhiana",
    "Web Application Development Punjab",
    "Custom Software Engineering",
    "AI Automation WhatsApp Bots",
    "IT Infrastructure & Hardware Ludhiana",
    "Next.js Developers India",
    "Enterprise Cloud ERP",
    "Web3 Dapps & Smart Contracts",
  ],
  authors: [{ name: "Manmeet Singh", url: siteConfig.domain }],
  creator: "Manmeet Singh",
  publisher: "Syntrixmesh Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    title: "Syntrixmesh Solutions | End-to-End Technology & Growth Partner",
    description:
      "Enterprise software, AI automation, high-speed web apps, and IT infrastructure engineered for high-growth businesses.",
    siteName: "Syntrixmesh Solutions",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Syntrixmesh Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syntrixmesh Solutions | Software · Web · IT Infrastructure",
    description: "End-to-End Technology & Growth Partner. Delivering cutting-edge software & IT worldwide.",
    images: ["/logo.png"],
    creator: "@syntrixmesh",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.brandLine + " - Software, Web Apps, AI Automation & IT Infrastructure",
  url: siteConfig.domain,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  founder: {
    "@type": "Person",
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.role,
  },
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    siteConfig.socials.linkedin,
    siteConfig.socials.twitter,
    siteConfig.socials.github,
  ],
  priceRange: "$$",
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
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans bg-[#070B14] text-mesh-text antialiased selection:bg-cyan-400 selection:text-navy-950`}
      >
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen pt-20">
            <PageTransition>{children}</PageTransition>
          </main>
          <FloatingWhatsApp />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
