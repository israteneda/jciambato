"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  /** Clases del contenedor visible (anchura, altura, bg, etc.). El contenedor
   *  recibe `overflow-hidden` por defecto, pero puede sobrescribirse aquí. */
  className?: string;
  /** Rango de desplazamiento del parallax, interpolado con el progreso de
   *  scroll. Relativo a la altura de la capa (por defecto ±9%). No lo
   *  sobrepases sin aumentar `bleed`. */
  travel?: [string, string];
  /** Altura extra de la capa respecto del contenedor (%). Debe cumplir
   *  `(bleed - 100) / 2 > |travel|` para que al moverse no se descubran
   *  bordes. La capa queda centrada verticalmente. */
  bleed?: number;
};

export default function ParallaxImage({
  src,
  alt,
  className,
  travel = ["-9%", "9%"],
  bleed = 120,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], travel);

  return (
    <div ref={ref} className={cn("relative overflow-hidden bg-transparent", className)}>
      <motion.div
        style={{
          willChange: "transform",
          y,
          top: `${-(bleed - 100) / 2}%`,
          height: `${bleed}%`,
        }}
        className="absolute inset-x-0"
      >
        <Image src={src} alt={alt} fill className="object-contain" />
      </motion.div>
    </div>
  );
}
