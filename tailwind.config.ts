import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        site: {
          bg: "#0b0b0f",
          fg: "#e7ebf0",
          accent: "#8bf4ff",
        },
      },
      boxShadow: {
        glow: "0 0 60px rgba(139, 244, 255, 0.18)",
        "glow-soft": "0 0 80px rgba(139, 244, 255, 0.12)",
        "card-inner": "inset 0 1px 0 0 rgba(255, 255, 255, 0.04)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};

export default config;
