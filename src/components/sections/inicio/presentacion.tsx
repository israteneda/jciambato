"use client";

import { Button } from "@heroui/button";
import useScrollPositionText from "@/hooks/use-scroll-position-text";
import clsx from "clsx";

const TitleSection = () => (
  <div className="max-w-6xl mx-auto">
    <div className="mx-11 xl:mx-0">
      <p className="text-xs sm:text-sm lg:text-base font-semibold uppercase tracking-wide text-gray-600">
        En Ambato
      </p>
      <h2 className="mt-8 md:w-3/4 text-3xl md:text-6xl font-light text-cyan-600 md:leading-tight">
        A lo largo de mas de 50 años, JCI Ambato a fomentado del desarrollo de líderes en la ciudad.
      </h2>
      <div className="mt-16">
        <Button
          radius="none"
          variant="bordered"
          className="relative overflow-hidden border-cyan-600 text-cyan-800 group"
          aria-label="Conoce nuestra misión y visión"
        >
          <span className="absolute inset-0 transform -translate-x-full bg-cyan-600 transition-transform duration-300 group-hover:translate-x-0" />
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Nuestra misión y visión
          </span>
        </Button>
      </div>
    </div>
  </div>
);

// Componente para el texto de fondo con efectos de desplazamiento
interface BackgroundTextProps {
  translateAmountLeft: number;
  translateAmountRigth: number;
}

const BackgroundText = ({ translateAmountLeft, translateAmountRigth }: BackgroundTextProps) => (
  <div className="w-full overflow-hidden mt-10 md:mt-16">
    <h2 className={clsx(
      "mt-5 md:mb-10 text-left font-extrabold leading-none text-gray-300 opacity-40 whitespace-nowrap",
      "text-[15vw] md:text-[13vw]"
    )}
      style={{ transform: `translateX(${translateAmountLeft}px)` }}
    >
      JCI AMBATO
    </h2>
    <h2 className={clsx(
      "mt-5 md:mt-10 text-left font-extrabold leading-none text-gray-300 opacity-40 whitespace-nowrap",
      "text-[15vw] md:text-[13vw]"
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
  const translateAmountLeft = scrollY * 0.3;
  const translateAmountRigth = -scrollY * 0.1;

  return (
    <section className="flex w-full flex-col my-28 md:my-52">
      {/* Presentación de la Organización */}
      <TitleSection />

      {/*Texto de Fondo */}
      <BackgroundText translateAmountLeft={translateAmountLeft} translateAmountRigth={translateAmountRigth} />
    </section>
  );
}
