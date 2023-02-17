import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080b14",
        "bg-soft": "#0d1220",
        card: "#121729",
        "card-hi": "#161d33",
        border: "rgba(148,163,184,0.10)",
        "border-hi": "rgba(148,163,184,0.22)",
        text: "#eef1f8",
        "text-dim": "#9aa4bb",
        "text-faint": "#5f6a84",
        blue: "#5b8cff",
        purple: "#b06bff",
        cyan: "#31d8e0",
        pink: "#ff5da2",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grad-1": "linear-gradient(135deg, #5b8cff, #b06bff)",
        "grad-2": "linear-gradient(135deg, #31d8e0, #5b8cff)",
        "grad-3": "linear-gradient(135deg, #b06bff, #ff5da2)",
        "grad-warm": "linear-gradient(135deg, #ff5da2, #ffb35a)",
      },
      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "24px",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "float-blob": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.08)" },
          "66%": { transform: "translate(-25px,25px) scale(0.95)" },
        },
        "drift-up": {
          from: { transform: "translateY(10vh)", opacity: "0" },
          "10%": { opacity: "0.4" },
          "90%": { opacity: "0.4" },
          to: { transform: "translateY(-110vh) translateX(20px)", opacity: "0" },
        },
      },
      animation: {
        "float-blob": "float-blob 16s ease-in-out infinite",
        "drift-up": "drift-up linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
