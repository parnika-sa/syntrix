# Syntrixmesh Solutions 🚀

> **End-to-End Technology & Growth Partner**  
> *Software · Web · IT Infrastructure*

Official web platform for **Syntrixmesh Solutions**, founded by **Manmeet Singh** and headquartered in Jhande, Ludhiana, Punjab, India (with global client delivery).

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Route Handlers)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing throughout)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a bespoke cyber dark theme:
  - Deep Dark Navy: `#070B14` to `#0A0F1C`
  - Electric Cyan-Blue Accent: `#2FB8FF` → `#1E6BFF`
  - Brand Gold Accent: `#C9A24B`
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for micro-interactions, page transitions, and staggered reveals
- **Canvas / Mesh Background**: Interactive 60 FPS HTML5 Canvas particle mesh network with mouse reactivity
- **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Brand SVGs
- **Form Validation & Backend**: [Zod](https://zod.dev/) + [Resend](https://resend.com/) for transactional email notifications & client auto-replies
- **Celebration Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📂 Project Structure

```
syntrix/
├── public/                 # Static assets (logo.png, favicon.png, og-image.png)
├── src/
│   ├── app/
│   │   ├── api/contact/    # Contact form API route with Zod, rate limiting, and Resend
│   │   ├── contact/        # Complete /contact page with interactive form & Google Map
│   │   ├── services/       # Services overview (/services) & dynamic detail pages (/services/[slug])
│   │   ├── globals.css     # Cyber dark design system & utilities
│   │   ├── layout.tsx      # Root layout, Google Fonts (Space Grotesk & Inter), LocalBusiness JSON-LD
│   │   └── page.tsx        # Complete Home page
│   ├── components/
│   │   ├── canvas/         # Interactive Canvas components (MeshNetworkBackground, ServiceBackground)
│   │   ├── contact/        # ContactForm with client validation & query-param pre-selection
│   │   ├── layout/         # Navbar, ServiceDropdown mega menu, Footer
│   │   └── ui/             # Reusable UI (CustomCursor, Preloader, SpotlightCard, Counter, FAQAccordion, etc.)
│   ├── data/
│   │   ├── company.ts      # Centralized company, contact, hours, and founder info
│   │   ├── services.ts     # Centralized services data (6 categories, sub-services, benefits, FAQs)
│   │   └── siteConfig.ts   # Site configuration & navigation links
│   └── lib/
│       └── utils.ts        # cn helper (clsx + tailwind-merge)
├── .env.example            # Environment variables template
└── README.md
```

---

## 🛠️ Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/parnika-sa/syntrix.git
cd syntrix
npm install
```

### 2. Environment Variables Setup

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Add your Resend API credentials (optional for local dev; if omitted, the contact API runs in simulated mode with console logging):

```env
RESEND_API_KEY=re_your_resend_api_key
CONTACT_TO_EMAIL=info@syntrixmeshsolutions.com
CONTACT_FROM_EMAIL=Syntrixmesh Inquiries <onboarding@resend.dev>
NEXT_PUBLIC_SITE_URL=https://www.syntrixmeshsolutions.com
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Deploying to Vercel

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Syntrixmesh Solutions web platform"
   git push -u origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your GitHub repository `parnika-sa/syntrix`.
4. Add the environment variables (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`) in the Vercel project settings.
5. Click **Deploy**.

---

## 📞 Company Contact

- **Founder**: Manmeet Singh (Founder & Principal Technology Architect)
- **Phone / WhatsApp**: +91 80540 80370
- **Email**: info@syntrixmeshsolutions.com
- **Headquarters**: Jhande, Ludhiana, Punjab, 142021, India
- **Global Delivery**: Serving clients across India, North America, Europe, UAE & APAC
