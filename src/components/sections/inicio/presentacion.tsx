"use client";

import { Button } from "@heroui/button";
import useScrollPositionText from "@/hooks/use-scroll-position-text";
import clsx from "clsx";

// Componente para el texto de fondo con efectos de desplazamiento
interface BackgroundTextProps {
  translateAmountLeft: number;
  translateAmountRigth: number;
}

const BackgroundText = ({ translateAmountLeft, translateAmountRigth }: BackgroundTextProps) => (
  <div className="">
    <h2 className={clsx(
      "opacity-[0.08] text-7xl md:text-[240px] font-extrabold whitespace-nowrap tracking-normal uppercase text-jci-gray"
    )}
      style={{ transform: `translateX(${translateAmountLeft}px)`, willChange: "transform" }}
    >
      JCI AMBATO
    </h2>

    <h2 className={clsx(
      "opacity-[0.08] text-7xl md:text-[240px] font-extrabold whitespace-nowrap tracking-normal uppercase text-jci-gray"
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
  const translateAmountLeft = scrollY * 0.1; // 0.3 para pantallas grandes
  const translateAmountRigth = -scrollY * 0.1; // 0.1 para pantallas pequeñas

  return (
    <section className="relative z-10">
      <div className="pt-20 md:pt-28 lg:pt-32 xl:pt-40 pb-20 md:pb-28 lg:pb-32 xl:pb-40">
        <div className="overflow-hidden">
          <div className="relative z-10 w-[calc(100% - 60px)] md:w-[1156px] mx-8 md:mx-auto">
            <div className="text-[13px] leading-[1.85] uppercase text-jci-aqua font-bold tracking-normal">
              En Ambato
            </div>
            <div className="mt-8">
              <div className="text-4xl md:text-[72px] font-[250] text-left text-gray-600 leading-[1.1] tracking-[-1px] max-w-xl md:max-w-[calc(75%)]">
                A lo largo de mas de 50 años, JCI Ambato a fomentado del desarrollo de líderes en la ciudad.
              </div>
            </div>
            <div className="mt-16">
              <Button
                radius="none"
                variant="bordered"
                className="relative overflow-hidden border-jci-aqua text-jci-aqua group"
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