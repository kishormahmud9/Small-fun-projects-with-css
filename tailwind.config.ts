import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Linear / Vercel Dark Color System
        bg: {
          DEFAULT: "#09090b",       // Primary Background (Zinc-950)
          secondary: "#121215",     // Secondary Background
          card: "#18181b",          // Card Background (Zinc-900)
          elevated: "#202024",      // Elevated Surface
          input: "#27272a",         // Input Background
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.12)",
          subtle: "rgba(255, 255, 255, 0.07)",
          bold: "rgba(255, 255, 255, 0.22)",
        },
        text: {
          DEFAULT: "#f4f4f5",       // High contrast primary
          secondary: "#a1a1aa",     // Soft secondary
          muted: "#71717a",         // Muted text
          accent: "#38bdf8",        // Sky blue accent
        },
        accent: {
          cyan: "#38bdf8",
          blue: "#3b82f6",
          purple: "#a855f7",
          pink: "#ec4899",
          emerald: "#10b981",
          amber: "#f59e0b",
          rose: "#f43f5e",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.8)",
        glow: "0 0 25px -5px rgba(56, 189, 248, 0.3)",
        "glow-lg": "0 0 50px -10px rgba(56, 189, 248, 0.4)",
        "glow-purple": "0 0 30px -8px rgba(168, 85, 247, 0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out both",
        "fade-up": "fadeUp 0.5s ease-out both",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "shimmer-slide": "shimmerSlide 2.5s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite alternate",
        "slide-in-right": "slideInRight 0.35s ease-out both",
        "scale-in": "scaleIn 0.3s ease-out both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmerSlide: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        glowPulse: {
          "0%": { boxShadow: "0 0 15px rgba(56, 189, 248, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(56, 189, 248, 0.7)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
