"use client";

import { Button } from "@nextui-org/button";
import useScrollPositionText from "@/hooks/use-scroll-position-text";

export default function Presentacion() {
  const scrollY = useScrollPositionText();

  // Cálculo del desplazamiento según la posición del scroll
  const translateAmountJci = scrollY * 0.1;
  const translateAmountJr = -scrollY * 0.1;

  return (
    <section className="pt-20" aria-labelledby="presentacion-title">
      <div className="mx-auto max-w-7xl px-9 lg:px-20">
        <div className="relative z-30 flex flex-col">
          {/* Contenedor de texto e información */}
          <div className="lg:w-4/5">
            <span className="text-xs sm:text-sm lg:text-base font-bold text-gray-600 uppercase">
              En Ambato
            </span>
            <h2
              id="presentacion-title"
              className="text-4xl text-balance sm:text-5xl lg:text-6xl font-light my-8 text-cyan-600"
            >
              JCI Ambato ha liderado el desarrollo de liderazgo por más de 50
              años.
            </h2>

            {/* Botón interactivo con transiciones */}
            <Button
              variant="bordered"
              className="relative overflow-hidden mt-10 text-cyan-800 border-cyan-600 group"
              aria-label="Conoce nuestra misión y visión"
            >
              <span className="absolute inset-0 bg-cyan-600 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Nuestra misión y visión
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Segunda sección: Texto de fondo con efectos de desplazamiento */}
      <div className="relative w-full h-80 overflow-hidden my-0 lg:mt-10">
        <div className="absolute inset-0 flex flex-col justify-center overflow-hidden">
          <h2
            className="text-5xl sm:text-7xl lg:text-9xl font-extrabold text-gray-300 opacity-40 transform text-right mb-2 sm:mb-4 lg:mb-6 whitespace-nowrap"
            style={{ transform: `translateX(${translateAmountJci - 50}px)` }}
            aria-hidden="true"
          >
            JCI AMBATO
          </h2>
          <h2
            className="text-5xl sm:text-7xl lg:text-9xl font-extrabold text-gray-300 opacity-40 transform text-left mt-2 sm:mt-4 lg:mt-6 whitespace-nowrap"
            style={{ transform: `translateX(${translateAmountJr}px)` }}
            aria-hidden="true"
          >
            JUNIOR CHAMBER
          </h2>
        </div>
      </div>
    </section>
  );
}
