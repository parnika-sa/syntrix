import type { Metadata } from "next";
import LegalPageLayout, { LegalSection } from "@/components/layout/LegalPageLayout";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy of Syntrixmesh Solutions. Understand how we use local storage, session tokens, and essential cookies on our digital platforms.",
  openGraph: {
    title: "Cookie Policy | Syntrixmesh Solutions",
    description: "Learn about how and why we utilize browser storage and essential cookies.",
    url: `${company.domain}/cookie-policy`,
  },
};

const sections: LegalSection[] = [
  { id: "what-are-cookies", title: "What Are Cookies & Storage Tokens?" },
  { id: "cookies-we-use", title: "Categories of Cookies We Use" },
  { id: "session-storage", title: "Session & Local Storage Use Cases" },
  { id: "third-party-cookies", title: "Third-Party Services" },
  { id: "managing-cookies", title: "How You Can Control Storage & Cookies" },
  { id: "contact", title: "Questions & Contact" },
];

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      badge="BROWSER STORAGE & PRIVACY"
      lastUpdated="October 2026"
      sections={sections}
    >
      <section id="what-are-cookies" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          1. What Are Cookies & Storage Tokens?
        </h2>
        <p>
          Cookies are small text files placed on your computer or mobile device by websites that you visit. Along with modern web storage technologies like <code>localStorage</code> and <code>sessionStorage</code>, they enable websites to remember your preferences, streamline authentication, and provide smooth interactions.
        </p>
        <p>
          At <strong>{company.name}</strong>, we adhere to a principle of data minimization: we do not use invasive tracking cookies, cross-site profiling trackers, or behavioral advertising cookies.
        </p>
      </section>

      <section id="cookies-we-use" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          2. Categories of Cookies We Use
        </h2>
        <div className="space-y-4">
          <div className="p-5 rounded-xl glass-panel border border-cyan-400/20 bg-navy-950/70">
            <h3 className="font-heading font-bold text-white text-base mb-1">
              Strictly Essential Tokens (Always Active)
            </h3>
            <p className="text-xs text-mesh-text leading-relaxed">
              These tokens are required for the website to function securely and properly. They cannot be switched off in our systems. They include security headers, anti-CSRF protection tokens, and session state tracking.
            </p>
          </div>

          <div className="p-5 rounded-xl glass-panel border border-cyan-400/20 bg-navy-950/70">
            <h3 className="font-heading font-bold text-white text-base mb-1">
              Performance & UX Preferences (Optional)
            </h3>
            <p className="text-xs text-mesh-text leading-relaxed">
              These tokens remember non-personal user preferences, such as your cookie consent choices or whether the welcome animation has already played in your active session.
            </p>
          </div>
        </div>
      </section>

      <section id="session-storage" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          3. Session & Local Storage Use Cases
        </h2>
        <p>Our website utilizes browser web storage in the following specific ways:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-cyan-400/15">
            <thead>
              <tr className="bg-navy-900 text-white font-semibold border-b border-cyan-400/20">
                <th className="p-3 border-r border-cyan-400/15">Identifier</th>
                <th className="p-3 border-r border-cyan-400/15">Storage Type</th>
                <th className="p-3 border-r border-cyan-400/15">Duration</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-400/10 text-mesh-text">
              <tr>
                <td className="p-3 font-mono text-cyan-400">syntrix_cookie_consent</td>
                <td className="p-3">localStorage</td>
                <td className="p-3">1 Year</td>
                <td className="p-3">Stores your cookie consent choice (&ldquo;accepted&rdquo; or &ldquo;rejected&rdquo;).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-cyan-400">syntrix_preloaded</td>
                <td className="p-3">sessionStorage</td>
                <td className="p-3">Active Session</td>
                <td className="p-3">Prevents the welcome preloader animation from displaying more than once per browser visit.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="third-party-cookies" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          4. Third-Party Services
        </h2>
        <p>
          Some pages may embed external elements (such as Google Maps or links to WhatsApp). These external services may set their own cookies when you interact with their widgets or click external links. We recommend reviewing their respective privacy and cookie policies:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-mesh-text">
          <li><strong>Google:</strong> <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Google Privacy & Terms</a></li>
          <li><strong>WhatsApp / Meta:</strong> <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">WhatsApp Privacy Policy</a></li>
        </ul>
      </section>

      <section id="managing-cookies" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          5. How You Can Control Storage & Cookies
        </h2>
        <p>
          You have full control over cookie preferences:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-mesh-text">
          <li>
            <strong className="text-white">Our Cookie Settings:</strong> You can click the &ldquo;Cookie settings&rdquo; button in our website footer at any time to reopen the consent banner and modify your preference.
          </li>
          <li>
            <strong className="text-white">Browser Controls:</strong> Most modern browsers (Chrome, Edge, Firefox, Safari) allow you to block, delete, or inspect cookies through your browser settings. Please note that blocking essential cookies may disrupt navigation.
          </li>
        </ul>
      </section>

      <section id="contact" className="space-y-4">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          6. Questions & Contact
        </h2>
        <p>
          If you have questions regarding our cookie practices, please contact us at:
        </p>
        <div className="p-5 rounded-2xl glass-panel border border-cyan-400/20 bg-navy-900/60 text-sm space-y-1">
          <p className="text-white font-semibold">Syntrixmesh Solutions</p>
          <p className="text-mesh-text">{company.contact.address.full}</p>
          <p className="text-mesh-text">
            Email:{" "}
            <a href={`mailto:${company.contact.email}`} className="text-cyan-400 hover:underline">
              {company.contact.email}
            </a>
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
