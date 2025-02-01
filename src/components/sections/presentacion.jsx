"use client";

import { Button } from "@heroui/button";
import useScrollPositionText from "@/hooks/use-scroll-position-text";

// Componente para el título, subtítulo y botón
const TitleSection = () => (
  <div className="lg:max-w-4xl">
    <p className="text-xs sm:text-sm lg:text-base font-semibold text-gray-600 uppercase tracking-wide">
      En Ambato
    </p>
    <h2
      id="presentacion-title"
      className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-light text-cyan-600"
    >
      JCI Ambato ha impulsado el desarrollo de líderes en la ciudad durante más
      de 50 años.
    </h2>
    <div className="mt-16">
      <Button
        radius="none"
        variant="bordered"
        className="relative overflow-hidden text-cyan-800 border-cyan-600 group"
        aria-label="Conoce nuestra misión y visión"
      >
        <span className="absolute inset-0 bg-cyan-600 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          Nuestra misión y visión
        </span>
      </Button>
    </div>
  </div>
);

// Componente para el texto de fondo con efectos de desplazamiento
const BackgroundText = ({ translateAmountJci, translateAmountJr }) => (
  <article
    aria-hidden="true"
    className="relative w-full h-48 sm:h-64 lg:h-96 overflow-hidden lg:my-12"
  >
    <div className="absolute inset-0 flex flex-col justify-center">
      <h2
        className="text-5xl sm:text-7xl lg:text-[25vh] font-extrabold text-gray-300 opacity-40 transform text-right mb-4 lg:mb-8 whitespace-nowrap"
        style={{ transform: `translateX(${translateAmountJci - 50}px)` }}
        aria-hidden="true"
      >
        JCI AMBATO
      </h2>
      <h2
        className="text-5xl sm:text-7xl lg:text-[25vh] font-extrabold text-gray-300 opacity-40 transform text-left mt-4 lg:mt-8 whitespace-nowrap"
        style={{ transform: `translateX(${translateAmountJr}px)` }}
        aria-hidden="true"
      >
        JUNIOR CHAMBER
      </h2>
    </div>
  </article>
);

export default function Presentacion() {
  const scrollY = useScrollPositionText();

  // Cálculo del desplazamiento según la posición del scroll
  const translateAmountJci = scrollY * 0.1;
  const translateAmountJr = -scrollY * 0.1;

  return (
    <section aria-labelledby="presentacion-title">

      {/* Primera sección: Presentación de la Organización */}
      <div className="w-full px-6 sm:px-12 lg:px-40">
        <TitleSection />
      </div>

      {/* Segunda sección: Texto de fondo con efectos de desplazamiento */}
      <BackgroundText
        translateAmountJci={translateAmountJci}
        translateAmountJr={translateAmountJr}
      />
    </section>
  );
}
