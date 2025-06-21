import { useEffect, useState, useRef } from "react";

export default function useScrollPositionText() {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Set initial state
    setScrollY(window.scrollY);
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Solo actualizar si hay un cambio significativo (más de 1px)
      if (Math.abs(currentScrollY - lastScrollY.current) >= 1) {
        lastScrollY.current = currentScrollY;

        // Cancelar el frame anterior si existe
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }

        // Usar requestAnimationFrame para sincronizar con el refresh rate del navegador
        rafRef.current = requestAnimationFrame(() => {
          setScrollY(currentScrollY);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return scrollY;
}
