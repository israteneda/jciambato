import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "jci-navy": "#3A67B1",
        "jci-aqua": "#0087D7",

        // Secondary Colors
        "jci-gold": "#EDBE3B",
        "jci-seafoam": "#56BDA3",

        // Typography Colors
        "jci-black": "#414042",
        "jci-off-black": "#0A0F29",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        heading: ["var(--font-heading)"],
      },
    },
  },
  plugins: [heroui()],
};

export default config;
