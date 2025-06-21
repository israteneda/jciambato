"use client";
import { useScroll } from "@/hooks";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import clsx from "clsx";
import { Button } from "@heroui/button";
import Link from "next/link";


export default function Bienvenida() {
  const isScrolled = useScroll();

  return (
    <section className="relative">
      <div className="flex w-full">
        <div className="h-screen flex px-[45px] lg:px-[180px] pb-[92px] items-center box-border">
          {/* <BorderFrame isScrolled={isScrolled} /> */}
          <div
            className={clsx(
              "absolute inset-0 border-gray-50 z-10 transition-all duration-300 transform",
              isScrolled ? "border-[22px] lg:border-[60px]" : "border-0"
            )}
            aria-hidden="true"
          />



          {/* <InfoContainer /> */}
          <div className="relative z-20">
            <div className="flex flex-col items-start">
              <div className="text-xs lg:text-sm uppercase text-jci-gold font-bold tracking-normal">
                Inpulsando el cambio
              </div>

              <div className="mt-6">
                <h1
                  className="bg-gradient-to-br from-jci-navy via-white to-jci-navy text-transparent bg-clip-text font-bold text-3xl lg:text-6xl max-w-xl"
                >
                  Líderes que Impactan el Futuro
                </h1>
              </div>

              <div className="mt-10">
                <div className="text-white max-w-md text-sm lg:text-medium leading-relaxed">
                  Con cada proyecto, impulsamos el cambio a través de la innovación,
                  transformando ideas en soluciones que construyen comunidades más fuertes y
                  mejoran vidas.
                </div>
              </div>

              <div className="mt-9">
                <Button
                  radius="none"
                  className="relative bg-jci-aqua text-white group overflow-hidden"
                  aria-label="Más información sobre nosotros"
                >
                  <Link href="/nosotros">
                    <span className="absolute inset-0 w-full h-full transform -translate-x-full bg-cyan-950 transition-transform duration-300 group-hover:translate-x-0"></span>
                    <span className="relative z-10">Sobre Nosotros</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* <BackgroundVideo /> */}
          <div className="absolute inset-0">
            <video
              autoPlay
              className="w-full h-full object-cover"
              src="/videos/rotary.mp4"
              loop
              preload="auto"
              muted
              playsInline
            />

            {/* Fondo Oscuro */}
            <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
          </div>

        </div>

        <div className="hidden md:block absolute top-1/2 left-[30px] text-[10.5px] font-semibold z-20 text-gray-400 leading-[60px] tracking-[1.5px] uppercase transform -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
          BIENVENIDO A LA RED GLOBAL DE LÍDERES QUE TRANSFORMAN EL MUNDO
        </div>

        <div className="hidden md:block absolute z-20 top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2">
          <button>
            <Image
              src="/icons/arrow-down.svg"
              alt="Flecha hacia abajo"
              width={500}
              height={500}
              className="relative w-[20px] h-[20px] object-cover"
            />
          </button>
        </div>

        <div className="hidden md:block absolute bottom-[100px] right-[40px] md:bottom-[60px] md:right-[124px] text-[10.5px] font-semibold uppercase z-20 text-jci-seafoam">
          <a href="https://jciecuador.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <span>
              JCI Ecuador
            </span>
            <MdOutlineArrowOutward className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute left-1/2 z-20 bottom-0 transform -translate-x-1/2 rotate-90">
        <div className="hidden md:block">
          <button className="flex items-center">
            <span className="text-jci-aqua text-[10.5px] font-semibold uppercase">Sobre Nosotros</span>
            <Image
              src="/icons/arrow-down.svg"
              alt="Flecha hacia abajo"
              width={500}
              height={500}
              className="w-[96px] h-[69px] -rotate-90 object-cover"
            />
          </button>
        </div>
      </div>
    </section>
  );
}