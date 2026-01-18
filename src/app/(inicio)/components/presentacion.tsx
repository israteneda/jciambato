"use client";

import { Button } from "@heroui/button";
import BackgroundText from "@/components/commons/background-text";
import Link from "next/link";

export default function Presentacion() {
  return (
    <section className="relative z-10">
      <div className="pb-20 pt-20 md:pb-28 md:pt-28 lg:pb-32 lg:pt-32 xl:pb-40 xl:pt-40">
        <div className="overflow-hidden">
          <div className="w-[calc(100% - 60px)] relative z-10 mx-8 md:mx-20 lg:mx-auto lg:w-[1156px]">
            <header>
              <div className="text-sm font-bold uppercase leading-[1.85] tracking-normal text-jci-teal">
                Liderazgo con historia
              </div>
              <div className="mt-8">
                <h2 className="text-left text-4xl font-[250] tracking-[-1px] text-jci-black md:max-w-[75%] md:text-5xl md:leading-[1.1] lg:text-[65px]">
                  A lo largo de más de 50 años, JCI Ambato ha fomentado el desarrollo de líderes en
                  la ciudad.
                </h2>
              </div>
            </header>

            <div className="mt-16">
              <Button
                radius="none"
                variant="bordered"
                className="group relative overflow-hidden border-jci-teal text-jci-teal"
                aria-label="Conoce nuestra misión y visión"
              >
                <Link href="/nosotros">
                  <span className="absolute inset-0 -translate-x-full transform bg-jci-teal transition-transform duration-300 group-hover:translate-x-0" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Nuestra misión y visión
                  </span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-16">
            <BackgroundText
              textoPrimario="JCI AMBATO"
              textoSecundario="LIDERAZGO"
              numberLeft={0.1}
              numberRight={0.1}
              numberLeftMobile={0.1}
              numberRightMobile={0.1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
