"use client";

import { Button } from "@heroui/button";
import BackgroundText from "@/components/commons/TextoFondo";

export default function Presentacion() {
  return (
    <section className="relative z-10">
      <div className="pt-20 md:pt-28 lg:pt-32 xl:pt-40 pb-20 md:pb-28 lg:pb-32 xl:pb-40">
        <div className="overflow-hidden">
          <div className="relative z-10 w-[calc(100% - 60px)] md:w-[1156px] mx-8 md:mx-auto">
            <div className="text-xs leading-[1.85] uppercase text-jci-aqua font-bold tracking-normal">
              En Ambato
            </div>
            <div className="mt-8">
              <div className="text-4xl md:text-[65px] font-[250] text-left text-jci-black leading-[1.1] tracking-[-1px] max-w-xl md:max-w-[calc(75%)]">
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
            <BackgroundText
              textoPrimario="JCI AMBATO"
              textoSecundario="LIDERAZGO"
              numberLeft={0.1}
              numberRight={0.1}
              numberLeftMobile={0.03}
              numberRightMobile={0.03}
            />
          </div>
        </div>
      </div>
    </section>
  );
}