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
        // channel form so /opacity modifiers (bg-accent/10) actually emit CSS
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        "accent-dark": "rgb(var(--accent-dark-rgb) / <alpha-value>)",
        "accent-2": "rgb(var(--accent2-rgb) / <alpha-value>)",
        "ink-light": "var(--ink-light)",
        card: "var(--card)",

        // Redesign — Flux Studio token system (see redesign.md)
        // Brand blue = the logo blue #00A0E3 (rgb 0 160 227 / hsl 198 100% 45%)
        primary: "rgb(var(--si-brand-rgb) / <alpha-value>)",
        "primary-hover": "rgb(var(--si-brand-hover-rgb) / <alpha-value>)",
        // darker step for brand-coloured TEXT on light surfaces (4.9:1)
        "primary-ink": "rgb(var(--si-brand-ink-rgb) / <alpha-value>)",
        "primary-light": "var(--si-brand-tint)",
        "primary-soft": "var(--si-brand-soft)",
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
        // Every alias resolves to the design-system faces; the legacy
        // font-clash / font-syne / font-montserrat class names across the
        // older pages keep working and pick up the redesign automatically.
        raveo: ["var(--font-raveo)", "Raveo", "sans-serif"],
        mono: ["var(--font-dm-mono)", "DM Mono", "monospace"],
        syne: ["var(--font-raveo)", "sans-serif"],
        dm: ["var(--font-raveo)", "sans-serif"],
        montserrat: ["var(--font-raveo)", "sans-serif"],
        clash: ["var(--font-raveo)", "sans-serif"],
        manrope: ["var(--font-raveo)", "sans-serif"],
      },
      maxWidth: {
        "container-fluid": "83rem",
      },
    },
  },
  plugins: [],
};

export default config;
