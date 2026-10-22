import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#070B14",
        foreground: "#FFFFFF",
        navy: {
          950: "#070B14",
          900: "#0A0F1C",
          850: "#0D1527",
          800: "#111B33",
          750: "#162342",
          700: "#1C2D54",
          600: "#273D73",
        },
        cyan: {
          300: "#69D2FF",
          400: "#2FB8FF",
          500: "#009EF7",
          600: "#1E6BFF",
        },
        gold: {
          300: "#F4DB96",
          400: "#E3BE63",
          500: "#C9A24B",
          600: "#A38030",
        },
        mesh: {
          text: "#A8B3C7",
          muted: "#94A3B8",
          card: "rgba(13, 21, 39, 0.7)",
          border: "rgba(47, 184, 255, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      boxShadow: {
        "cyan-glow": "0 0 25px -5px rgba(47, 184, 255, 0.35)",
        "cyan-glow-lg": "0 0 50px -10px rgba(47, 184, 255, 0.45)",
        "gold-glow": "0 0 25px -5px rgba(201, 162, 75, 0.35)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "cyan-gradient": "linear-gradient(135deg, #2FB8FF 0%, #1E6BFF 100%)",
        "gold-gradient": "linear-gradient(135deg, #F4DB96 0%, #C9A24B 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(17, 27, 51, 0.8) 0%, rgba(10, 15, 28, 0.95) 100%)",
        "mesh-radial": "radial-gradient(circle at 50% 0%, rgba(47, 184, 255, 0.12) 0%, transparent 70%)",
      },
      animation: {
        "marquee": "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "drop-shadow(0 0 15px rgba(47, 184, 255, 0.4))" },
          "100%": { opacity: "0.9", filter: "drop-shadow(0 0 30px rgba(47, 184, 255, 0.8))" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
