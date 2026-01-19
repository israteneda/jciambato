import { Inter as FontInter, Plus_Jakarta_Sans as PlusJakarta } from "next/font/google";

export const fontInter = FontInter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const fontPlusJakarta = PlusJakarta({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});
