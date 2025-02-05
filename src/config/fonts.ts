import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans", // Define una variable CSS para la fuente sans
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono", // Define una variable CSS para la fuente mono
});