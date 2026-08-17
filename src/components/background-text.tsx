"use client";

import { cn } from "@/utils/utils";
import { useEffect, useRef } from "react";

interface BackgroundTextProps {
  primary: string;
  secondary?: string;
  /**
   * Amplitud del vaiven, en % del ancho del CONTENEDOR (no del texto):
   * `translateX(%)` toma como base el border-box del div, que es `w-full`.
   * Cada palabra recorre de -spread/2 a +spread/2 al cruzar el viewport.
   *
   * No define la posicion de reposo — esa sale de `text-left` / `text-right`.
   * Con spread=15 en un viewport de 1440px el recorrido es de +-108px, y al
   * escalar con el contenedor se mantiene proporcional en mobile sin ajustes.
   */
  spread?: number;
  /**
   * Corrimiento hacia el centro de cada palabra, en % del ancho del contenedor.
   * Desplaza el punto de partida del recorrido sin tocar su amplitud: `primary`
   * se corre a la derecha e `inset` la misma cantidad a la izquierda `secondary`.
   *
   * Es la palanca para despegar las palabras de los bordes. Subirlo evita que
   * el recorrido hacia afuera recorte la primera/ultima letra.
   */
  inset?: number;
  className?: string;
}

const BackgroundText = ({
  primary,
  secondary,
  spread = 15,
  inset = 0,
  className,
}: BackgroundTextProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const primaryRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const root = rootRef.current;
      if (!root) return;

      const { top, height } = root.getBoundingClientRect();
      // Al scrollear hacia abajo `top` decrece, asi que `progress` crece:
      // 0 = el bloque asoma por abajo, 1 = termina de salir por arriba.
      const raw = 1 - (top + height) / (window.innerHeight + height);
      const progress = Math.min(1, Math.max(0, raw));

      // `travel` crece de -spread/2 a +spread/2, o sea se desplaza hacia la
      // derecha: `primary` va de izquierda a derecha y `secondary` al reves.
      // `inset` corre el punto de partida hacia el centro sin alterar el
      // recorrido, asi amplitud y posicion quedan desacopladas.
      const travel = (progress - 0.5) * spread;
      const shift = inset + travel;

      if (primaryRef.current) {
        primaryRef.current.style.transform = `translateX(${shift}%)`;
      }
      if (secondaryRef.current) {
        secondaryRef.current.style.transform = `translateX(${-shift}%)`;
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // ResizeObserver cubre resize de viewport y reflow por carga de fuentes.
    const observer = new ResizeObserver(schedule);
    if (rootRef.current) observer.observe(rootRef.current);
    window.addEventListener("scroll", schedule, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [spread, inset]);

  const word = cn(
    "relative whitespace-nowrap uppercase select-none",
    "text-[length:clamp(3rem,11.875vw,240px)] font-black tracking-normal [line-height:normal]",
    "text-[#000000e8] opacity-[0.08] will-change-transform"
  );

  return (
    <div
      ref={rootRef}
      className={cn("relative w-full overflow-hidden", className)}
      aria-hidden="true"
    >
      <div ref={primaryRef} className={cn(word, "text-left")}>
        {primary}
      </div>

      {secondary && (
        <div ref={secondaryRef} className={cn(word, "text-right")}>
          {secondary}
        </div>
      )}
    </div>
  );
};

export default BackgroundText;
