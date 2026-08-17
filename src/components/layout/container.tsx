import type { ComponentProps } from "react";

import { cn } from "@/utils/utils";

/**
 * Único punto de definición del contenedor de contenido del sitio.
 * Antes existían 57 copias manuales de `mx-8 md:mx-20 lg:mx-auto max-w-6xl`
 * que ya habían divergido entre sí (sm:/md:, max-w condicional, etc.).
 *
 * Ancho canónico: `max-w-7xl` (1280px) — decisión de diseño tomada el
 * 2026-08-09 para un carril más ancho y elegante. Casos especiales
 * sobrescriben el ancho con `className` en el call-site — nunca con props
 * de tamaño.
 */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="container"
      className={cn("relative mx-8 max-w-7xl md:mx-20 lg:mx-auto", className)}
      {...props}
    />
  );
}
