import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        site: {
          bg: "#0b0b0f",
          fg: "#e7ebf0",
          accent: "#8bf4ff",
          violet: "#c4b5fd",
          amber: "#fcd34d",
          teal: "#5eead4",
        },
      },
      boxShadow: {
        glow: "0 0 60px rgba(139, 244, 255, 0.14)",
        "glow-soft": "0 0 80px rgba(139, 244, 255, 0.1)",
        "glow-violet": "0 0 50px rgba(196, 181, 253, 0.1)",
        "glow-amber": "0 0 40px rgba(252, 211, 77, 0.08)",
        "card-inner": "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
        "card-glow": "0 0 0 1px rgba(139, 244, 255, 0.08), 0 4px 24px rgba(0, 0, 0, 0.18)",
        "card-glow-violet": "0 0 0 1px rgba(196, 181, 253, 0.12), 0 4px 24px rgba(0, 0, 0, 0.18)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      ringColor: {
        accent: "rgba(139, 244, 255, 0.55)",
        "accent-strong": "rgba(139, 244, 255, 0.7)",
      },
    },
  },
};

export default config;
