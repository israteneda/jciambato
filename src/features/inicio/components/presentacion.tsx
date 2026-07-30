"use client";

import BackgroundText from "@/components/background-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Presentacion() {
  return (
    <section className="relative z-10">
      <div className="pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32 xl:pt-40 xl:pb-40">
        <div className="overflow-hidden">
          <div className="w-[calc(100% - 60px)] relative z-10 mx-8 md:mx-20 lg:mx-auto lg:max-w-6xl">
            <header>
              <div className="text-jci-navy text-sm leading-[1.85] font-bold tracking-normal uppercase">
                Liderazgo con historia
              </div>
              <div className="mt-8">
                <h2 className="text-left text-4xl font-light md:max-w-[75%] md:text-5xl md:leading-[1.1] lg:text-[65px]">
                  A lo largo de más de 50 años, JCI Ambato ha fomentado el desarrollo de líderes en
                  la ciudad.
                </h2>
              </div>
            </header>

            <div className="mt-16">
              <Button
                className="border-jci-blue text-jci-blue group relative overflow-hidden bg-transparent hover:bg-transparent"
                aria-label="Conoce nuestra misión y visión"
              >
                <Link href="/nosotros">
                  <span className="bg-jci-navy absolute inset-0 -translate-x-full transform transition-transform duration-300 group-hover:translate-x-0" />
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
