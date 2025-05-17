import { Fira_Code as FontMono, Arvo } from "next/font/google";
import localFont from "next/font/local";

// Helvetica Neue font configuration
export const fontSans = localFont({
  src: [
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
  variable: "--font-sans",
  display: "swap",
});

// Using Arvo as a replacement for Rockwell as suggested in:
// https://stackoverflow.com/questions/691504/is-rockwell-a-web-safe-font
export const fontHeading = Arvo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
