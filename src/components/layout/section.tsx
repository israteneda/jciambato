import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Banda full-bleed del sitio. Dueña de la semántica (`<section>`), del ritmo
 * vertical (`py-24 md:py-34` — el dominante real del sitio, decidido el
 * 2026-08-09) y del posicionamiento relativo; el fondo se declara en el
 * call-site (`className="bg-jci-navy"`). Nunca define ancho ni padding
 * horizontal: el carril de contenido es `Container`. Sin fondo declarado,
 * hereda `--color-jci-bg` del `body`. Los heroes full-bleed sobrescriben
 * con `py-0`.
 */
export function Section({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      data-slot="section"
      className={cn("relative bg-transparent py-24 md:py-34", className)}
      {...props}
    />
  );
}
