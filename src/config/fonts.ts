import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans", // Define una variable CSS para la fuente sans
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono", // Define una variable CSS para la fuente mono
});

// Helvetica Neue font configuration
export const fontHelveticaNeue = localFont({
  src: [
    {
      path: "../../public/fonts/helveticaneue/helveticaneue-thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/helveticaneue/helveticaneue-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/helveticaneue/helveticaneue.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/helveticaneue/helveticaneue-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/helveticaneue/helveticaneue-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/helveticaneue/helveticaneue-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
});

// Rockwell font configuration
export const fontRockwell = localFont({
  src: [
    {
      path: "../../public/fonts/rockwell/rockwell-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/rockwell/rockwell-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-rockwell",
  display: "swap",
});

// Mantener Arvo como alternativa para Rockwell
export const fontHeading = fontRockwell;
