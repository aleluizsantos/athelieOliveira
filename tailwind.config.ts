import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#913828",
          foreground: "#FDFBF8",
        },
        secondary: {
          DEFAULT: "#B25336",
          foreground: "#FDFBF8",
        },
        accent: {
          DEFAULT: "#BE6C51",
          foreground: "#FDFBF8",
        },
        muted: {
          DEFAULT: "#CE917C",
          foreground: "#913828",
        },
        background: "#FDFBF8",
        foreground: "#913828",
        card: {
          DEFAULT: "#FDFBF8",
          foreground: "#913828",
        },
        border: "#E6D5D0",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
