"use client";

import { Button } from "@nextui-org/button";
import useScrollPositionText from "@/hooks/use-scroll-position-text";

export default function Presentacion() {
  const scrollY = useScrollPositionText();

  // Cálculo del desplazamiento según la posición del scroll
  const translateAmountJci = scrollY * 0.1;
  const translateAmountJr = -scrollY * 0.1;

  return (
    <>
      {/* Primera sección: Información general */}
      <section>
        <div className="w-full mx-auto max-w-7xl px-6 mt-24 sm:mt-32 lg:mt-30">
          {/* Contenedor principal */}
          <div className="relative z-30 flex px-4 md:px-8 lg:px-20">
            {/* Contenedor de texto e información */}
            <div className="w-3/4 mx-5 lg:mx-10 text-left">
              <h2 className="text-xs md:text-sm lg:text-md xl:text-sm font-bold mb-5 text-gray-600">
                EN AMBATO
              </h2>
              <h1 className="text-4xl lg:text-6xl xl:text-6xl font-light mb-16 text-cyan-600">
                JCI Ambato ha liderado el desarrollo de liderazgo por más de 50
                años.
              </h1>

              {/* Botón interactivo con transiciones */}
              <Button
                variant="bordered"
                className="relative overflow-hidden text-cyan-800 border-cyan-600 group"
                aria-label="Conoce nuestra misión y visión"
              >
                {/* Fondo del botón con la transición de llenado */}
                <span className="absolute inset-0 bg-cyan-600 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>

                {/* Texto del botón */}
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Nuestra misión y visión
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda sección: Texto de fondo con efectos de desplazamiento */}
      <section className="relative w-full h-80 overflow-hidden mb-20">
        {/* Texto de fondo con animación de desplazamiento */}
        <div className="absolute inset-0 flex flex-col justify-center overflow-hidden transition-transform duration-500">
          <h1
            id="scrolling-text"
            className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-gray-300 opacity-40 transform text-right mb-2 md:mb-4 lg:mb-6 xl:mb-8 whitespace-nowrap"
            style={{ transform: `translateX(${translateAmountJci - 50}px)` }}
            aria-label="Texto animado: JCI Ambato"
          >
            JCI AMBATO
          </h1>
          <h1
            className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-gray-300 opacity-40 transform text-left mt-2 md:mt-4 lg:mt-6 xl:mt-8 whitespace-nowrap"
            style={{ transform: `translateX(${translateAmountJr}px)` }}
            aria-label="Texto animado: Junior Chamber"
          >
            JUNIOR CHAMBER
          </h1>
        </div>
      </section>
    </>
  );
}
