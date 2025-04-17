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
  <div className="">
    <h2 className={clsx(
      "opacity-[0.08] text-[220px] font-extrabold whitespace-nowrap tracking-normal uppercase text-[rgba(0,0,0,0.91)]"
    )}
      style={{ transform: `translateX(${translateAmountLeft}px)`, willChange: "transform" }}
    >
      JCI AMBATO
    </h2>

    <h2 className={clsx(
      "opacity-[0.08] text-[220px] font-extrabold whitespace-nowrap tracking-normal uppercase text-[rgba(0,0,0,0.91)]"
    )}
      style={{ transform: `translateX(${translateAmountRigth}px)`, willChange: "transform" }}
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
    <section className="relative z-10">
      <div className="pt-20 md:pt-28 lg:pt-32 xl:pt-40 pb-20 md:pb-28 lg:pb-32 xl:pb-40">
        <div className="overflow-hidden">
          <div className="relative z-10 w-[calc(100% - 60px)] md:w-[1156px] mx-8 md:mx-auto">
            <div className="text-[13px] leading-[1.85] uppercase text-cyan-600 font-bold tracking-normal">
              En Ambato
            </div>
            <div className="mt-8">
              <div className="text-[calc(24px + 2.5vw)] md:text-[72px] font-[250] text-left text-gray-600 leading-[1.1] tracking-[-1px] max-w-[calc(75%)]">
                A lo largo de mas de 50 años, JCI Ambato a fomentado del desarrollo de líderes en la ciudad.
              </div>
            </div>
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
          <div className="mt-16">
            <BackgroundText translateAmountLeft={translateAmountLeft} translateAmountRigth={translateAmountRigth} />
          </div>
        </div>
      </div>
    </section>
  );
}