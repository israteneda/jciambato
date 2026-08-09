import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Único punto de definición del contenedor de contenido del sitio.
 * Antes existían 57 copias manuales de `mx-8 md:mx-20 lg:mx-auto max-w-6xl`
 * que ya habían divergido entre sí (sm:/md:, max-w condicional, etc.).
 *
 * Ancho canónico: `max-w-7xl`. Casos especiales sobrescriben el ancho con
 * `className` en el call-site — nunca con props de tamaño.
 */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="container"
      className={cn("relative mx-7 max-w-289 md:mx-20 lg:mx-auto", className)}
      {...props}
    />
  );
}
