import localFont from "next/font/local";

// Fuentes auto-alojadas (SIL OFL 1.1) para que el build no dependa de descargar
// Google Fonts. Mismo subconjunto "latin" que usaba next/font/google.

export const fontPlusJakarta = localFont({
  src: "../fonts/plus-jakarta-sans-latin-wght-normal.woff2",
  weight: "200 800",
  style: "normal",
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const fontArvo = localFont({
  src: [
    { path: "../fonts/arvo-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/arvo-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-arvo",
});
