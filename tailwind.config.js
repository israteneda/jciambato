import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* Animación de Barra en Noticias */
      keyframes: {
        loop: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "25%": {
            opacity: "1",
          },
          "75%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
        },
      },
      animation: {
        loop: "loop 2.5s ease infinite",
      },

      colors: {
        primary: "#1E3A8A",
        secondary: "#2563EB",
        accent: "#3B82F6",
        dark: "#1E293B",
        light: "#F8FAFC",

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
        "helvetica-neue": ["var(--font-helvetica-neue)"],
        rockwell: ["var(--font-rockwell)"],
      },
    },
  },
  plugins: [heroui()],
};
