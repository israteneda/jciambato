"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

import { cn } from "@/utils/utils";

interface ScrollMarqueeProps {
  text: string;
  /** Velocidad base en % del ancho de una copia por segundo. */
  baseVelocity?: number;
  /** Repeticiones del texto dentro de cada copia (más = cinta más larga). */
  repeat?: number;
  className?: string;
}

/** Copias idénticas en la pista; se recorre una (100 / COPIES %) y vuelve. */
const COPIES = 4;

/** Mantiene `value` dentro de [min, max) dando la vuelta, sin saltos visibles. */
function wrap(min: number, max: number, value: number) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

/**
 * Cinta de texto infinita. Avanza sola y, al hacer scroll, acelera en la
 * dirección del scroll (hacia abajo empuja a la izquierda, hacia arriba la
 * invierte). Con "reducir movimiento" queda quieta.
 */
export default function ScrollMarquee({
  text,
  baseVelocity = 2.5,
  repeat = 6,
  className,
}: ScrollMarqueeProps) {
  const reduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const direction = useRef(1);

  const step = 100 / COPIES;
  const x = useTransform(baseX, (v) => `${wrap(-step, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;

    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;

    // `baseVelocity` está en % de una copia; la pista mide COPIES copias.
    const perFrame = (direction.current * baseVelocity * delta) / 1000 / COPIES;
    baseX.set(baseX.get() - perFrame * (1 + Math.abs(factor)));
  });

  const items = Array.from({ length: repeat });

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)} aria-hidden="true">
      <motion.div className="flex w-max will-change-transform" style={{ x }}>
        {Array.from({ length: COPIES }).map((_, copia) => (
          <div key={copia} className="flex shrink-0 items-center">
            {items.map((__, i) => (
              <span key={i} className="flex items-center">
                <span>{text}</span>
                <span className="mx-[0.35em] inline-block size-[0.14em] rounded-full bg-current" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
