import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        site: {
          bg: "#0b0b0f",
          fg: "#e7ebf0",
          accent: "#00e5ff",
          violet: "#a855f7",
          amber: "#fbbf24",
          teal: "#14f0d0",
        },
      },
      boxShadow: {
        glow: "0 0 80px rgba(0, 229, 255, 0.35)",
        "glow-soft": "0 0 100px rgba(0, 229, 255, 0.2)",
        "glow-violet": "0 0 70px rgba(168, 85, 247, 0.3)",
        "glow-teal": "0 0 70px rgba(20, 240, 208, 0.3)",
        "glow-amber": "0 0 60px rgba(251, 191, 36, 0.25)",
        "card-inner": "inset 0 1px 0 0 rgba(255, 255, 255, 0.06)",
        "card-glow": "0 0 0 1px rgba(0, 229, 255, 0.35), 0 0 40px rgba(0, 229, 255, 0.15), 0 4px 24px rgba(0, 0, 0, 0.2)",
        "card-glow-violet": "0 0 0 1px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.12), 0 4px 24px rgba(0, 0, 0, 0.2)",
        "card-glow-teal": "0 0 0 1px rgba(20, 240, 208, 0.4), 0 0 40px rgba(20, 240, 208, 0.12), 0 4px 24px rgba(0, 0, 0, 0.2)",
        "card-glow-amber": "0 0 0 1px rgba(251, 191, 36, 0.35), 0 0 35px rgba(251, 191, 36, 0.1), 0 4px 24px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      ringColor: {
        accent: "rgba(0, 229, 255, 0.6)",
        "accent-strong": "rgba(0, 229, 255, 0.85)",
      },
      backgroundImage: {
        "gradient-hero-text": "linear-gradient(135deg, #00e5ff 0%, #a855f7 50%, #14f0d0 100%)",
        "gradient-section-cyan": "linear-gradient(180deg, rgba(0, 229, 255, 0.12) 0%, transparent 60%)",
        "gradient-section-violet": "linear-gradient(180deg, rgba(168, 85, 247, 0.12) 0%, transparent 60%)",
        "gradient-section-teal": "linear-gradient(180deg, rgba(20, 240, 208, 0.12) 0%, transparent 60%)",
        "gradient-section-amber": "linear-gradient(180deg, rgba(251, 191, 36, 0.12) 0%, transparent 60%)",
      },
    },
  },
};

export default config;
