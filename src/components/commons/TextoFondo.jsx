"use client";

import useScrollPositionText from "@/hooks/use-scroll-position-text";

export default function TextoFondo() {
  const scrollY = useScrollPositionText();

  // Ajusta la cantidad de desplazamiento según la posición del scroll
  const translateAmountJci = scrollY * 0.2;
  const translateAmountJr = -scrollY * 0.2;

  return (
    <section className="relative w-full h-[50vh] overflow-hidden">
      {/* Texto de fondo con alineación y posiciones ajustadas */}
      <div className="absolute inset-0 flex flex-col justify-center overflow-hidden leading-tight transition-transform duration-500">
        <h1
          className="text-[11vw] font-bold text-gray-300 opacity-40 transform text-right"
          style={{ transform: `translateX(${translateAmountJci - 70 }px)` }}
        >
          JCI AMBATO
        </h1>
        <h1
          className="text-[11vw] font-bold text-gray-300 opacity-40 transform text-left"
          style={{ transform: `translateX(${translateAmountJr}px)`}}
        >
          JUNIOR CHAMBER
        </h1>
      </div>
    </section>
  );
}
