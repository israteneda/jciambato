import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge no conoce los tokens de espaciado propios (`--spacing-*` en
 * globals.css). Sin registrarlos, `cn("py-section", "py-0")` deja ambas
 * clases y gana la que aparezca después en el CSS, no la del call-site.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ["section", "section-lg", "block", "stack"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

