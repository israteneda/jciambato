import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Banda full-bleed del sitio. Dueña de la semántica (`<section>`), del ritmo
 * vertical (`py-14 md:py-28`) y del posicionamiento relativo; el fondo se
 * declara en el call-site (`className="bg-jci-navy"`). Nunca define ancho ni
 * padding horizontal: el carril de contenido es `Container`. Sin fondo
 * declarado, hereda `--color-jci-bg` del `body`.
 */
export function Section({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      data-slot="section"
      className={cn("relative bg-transparent py-16 md:py-24", className)}
      {...props}
    />
  );
}
