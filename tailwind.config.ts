import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon:   "#4A1025",
        ivory:    "#EAE3D9",
        charcoal: "#211C1E",
      },
      fontFamily: {
        anton:  ["var(--font-anton)", "sans-serif"],
        bebas:  ["var(--font-bebas)", "sans-serif"],
        inter:  ["var(--font-inter)", "sans-serif"],
        mono:   ["var(--font-space-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
