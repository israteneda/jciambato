"use client";

import { Button } from "@heroui/button";
import useScrollPositionText from "@/hooks/use-scroll-position-text";
import clsx from "clsx";

const TitleSection = () => (
  <div className="px-8 md:px-40">
    <p className={clsx(
      "text-xs sm:text-sm lg:text-base font-semibold text-gray-600 uppercase tracking-wide"
    )}>
      En Ambato
    </p>
    <h2
      className="md:w-3/4 mt-8 text-3xl md:text-6xl font-light md:leading-tight text-cyan-600"
    >
      A lo largo de mas de 50 años, JCI Ambato a fomentado del desarrollo de líderes en la ciudad.
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
interface BackgroundTextProps {
  translateAmountLeft: number;
  translateAmountRigth: number;
}

const BackgroundText = ({ translateAmountLeft, translateAmountRigth }: BackgroundTextProps) => (
  <div className="mt-16 overflow-hidden w-full">
    <h2 className={clsx(
      "font-extrabold text-gray-300 opacity-40 whitespace-nowrap leading-none",
      "text-[12vw] text-right mb-10"
    )}
    style={{ transform: `translateX(${translateAmountLeft}px)` }}
    >
      JCI AMBATO
    </h2>
    <h2 className={clsx(
      "font-extrabold text-gray-300 opacity-40 whitespace-nowrap leading-none",
      "text-[12vw] text-left mt-10"
    )}
    style={{ transform: `translateX(${translateAmountRigth}px)` }}
    >
      CHAMBER
    </h2>
  </div>
);

export default function Presentacion() {
  const scrollY = useScrollPositionText();

  // Cálculo del desplazamiento según la posición del scroll
    const translateAmountLeft = scrollY * 0.2;
    const translateAmountRigth = -scrollY * 0.1;

  return (
    <section className="my-52 max-w-full">

      {/* Presentación de la Organización */}
      <TitleSection />

      {/*Texto de Fondo */}
      <BackgroundText
        translateAmountLeft={translateAmountLeft}
        translateAmountRigth={translateAmountRigth}
      />
    </section>
  );
}
