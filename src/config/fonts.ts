import { Plus_Jakarta_Sans as PlusJakarta, Arvo } from "next/font/google";

export const fontPlusJakarta = PlusJakarta({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const fontArvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-arvo",
});
