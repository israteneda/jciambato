import type { ComponentProps } from "react";

import { cn } from "@/utils/utils";

/**
 * Banda full-bleed del sitio. Dueña de la semántica (`<section>`), del ritmo
 * vertical (`py-section`: 64px en celular → 104px en escritorio, ver
 * `--spacing-section` en globals.css) y del posicionamiento relativo; el fondo se declara en el
 * call-site (`className="bg-jci-navy"`). Nunca define ancho ni padding
 * horizontal: el carril de contenido es `Container`. Sin fondo declarado,
 * hereda `--color-jci-bg` del `body`. Los heroes full-bleed sobrescriben
 * con `py-0`.
 */
export function Section({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      data-slot="section"
      className={cn("relative bg-transparent py-section", className)}
      {...props}
    />
  );
}
