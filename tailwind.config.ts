import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        accent: "var(--accent)",
        "accent-dark": "var(--accent-dark)",
        "ink-light": "var(--ink-light)",
        card: "var(--card)",

        // Redesign — Flux Studio token system (see redesign.md)
        primary: "#5235F6",
        "primary-hover": "#4129D6",
        "primary-light": "rgba(82, 53, 246, 0.1)",
        black: "#000000",
        "black-2": "#0E0E0E",
        "white-2": "#F1F1F1",
        "white-3": "#EBEBEB",
        "white-4": "#FFFFF7",
        "gray-1": "#A3A3A3",
        "gray-2": "#9F9F9F",
        "gray-3": "#BBBBBB",
        "gray-4": "#D9D9D9",
        "gray-5": "#7A7A7A",
        "gray-6": "#787878",
        "gray-7": "#E2E8F0",
        "deep-gray-1": "#64748B",
        "deep-gray-2": "#475569",
        "deep-blue": "#0F172A",
      },
      fontFamily: {
        syne: ["var(--font-montserrat)", "sans-serif"],
        dm: ["var(--font-montserrat)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        clash: ["var(--font-clash)", "Georgia", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      maxWidth: {
        "container-fluid": "83rem",
      },
    },
  },
  plugins: [],
};

export default config;
