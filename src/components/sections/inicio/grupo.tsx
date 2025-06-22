"use client";

import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";


export default function Grupo() {
  return (
    <section className="relative z-10 overflow-hidden">
      <div>
        <figure className="z-10 flex relative justify-end h-52 md:h-[calc(20px+34.375vw)] mb-10">
          <Image
            src="/images/grupo/sesion-solemne-50-aniversario.webp"
            alt="Grupo JCI Ambato - Sesión Solemne 50 Aniversario"
            width={500}
            height={500}
            className="absolute top-0 right-0 w-[85vw] md:w-[55vw] h-full object-cover"
          />
        </figure>

        <div className="-mt-¨[336px] lg:-mt-64">
          {/* Titulo Principal */}
          <div className="relative z-10 bg-transparent w-full max-w-6xl mx-auto px-8">
            <header>
              <div className="text-[13px] leading-[1.85] uppercase text-jci-gold font-bold tracking-normal">
                Grupo JCI
              </div>
              <div className="mt-1 md:mt-6">
                <h3 className="text-3xl md:text-[48px] font-bold normal-case text-jci-aqua leading-[1.33] tracking-normal max-w-xs md:max-w-[calc(75%)] text-left sm:text-[calc(28.8px+1vw)]">
                  Somos la organización de liderazgo más importante del centro del país.
                </h3>
              </div>
            </header>
          </div>

          <div className="relative z-10 bg-transparent w-full max-w-6xl px-8 md:mx-auto">

            <div className="relative gap-5 md:flex">
              {/* Descripción */}
              <div className="md:ml-16">

                <div className="mt-8">
                  <p className="text-lg font-normal normal-case leading-[1.78] tracking-normal text-jci-black text-left max-w-lg">
                    <strong>No nacimos para ser espectadores. {" "}</strong>
                    En JCI Ambato, lideramos con propósito, servimos con pasión y construimos un mañana con cada acción que emprendemos
                  </p>
                </div>

                <div className="mt-12">
                  <Button
                    radius="none"
                    variant="bordered"
                    className="relative overflow-hidden border-jci-black text-jci-black group"
                    aria-label="Conoce nuestra misión y visión"
                  >
                    <Link href="/nosotros">
                      <span className="absolute inset-0 transform -translate-x-full bg-jci-black transition-transform duration-300 group-hover:translate-x-0" />
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        Nuestra misión y visión
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Información de la fotografía, visible en pantallas grandes */}
              <div className="hidden md:block flex-1 grow shrink basis-0">
                <div className="absolute -top-24 right-[20px] origin-left transform translate-x-[100%] translate-y-[50%] rotate-90">
                  <div className="relative text-[11px] font-medium leading-none tracking-[2px] text-[rgb(174,174,174)] uppercase pl-[170px]">
                    <div className="absolute left-0 top-[5px] w-[160px] h-[1px] bg-[rgb(174,174,174)]" aria-hidden="true"></div>
                    Sesión Solemne por los 50 años de JCI Ambato, 2025
                  </div>
                </div>
              </div>

              {/* Estadisticas */}
              <div className="relative flex-1 grow shrink basis-0 md:mt-28 mr-28">
                <div className="flex flex-wrap gap-10">
                  <div className="mt-20">
                    <div className="text-jci-navy text-6xl md:text-8xl leading-[1] font-light tracking-[-5px] ">
                      <span>+50</span>
                    </div>
                    <p className="text-base md:text-  xl text-left mt-1 max-w-48 uppercase leading-[1.5] tracking-normal">
                      <strong>Años</strong> inspirando líderes
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row w-full gap-10">
                    <div className="flex-1">
                      <div className="text-jci-navy text-6xl md:text-8xl leading-[1] tracking-[-5px] font-light">
                        <span>+200</span>
                      </div>
                      <p className="text-base md:text-xl text-left mt-1 max-w-48 uppercase leading-[1.5] tracking-normal">
                        <strong>Proyectos</strong> ejecutados
                      </p>
                    </div>

                    <div className="flex-1">
                      <div className="text-jci-navy text-6xl md:text-8xl leading-[1] font-light tracking-[-5px] ">
                        <span>+500</span>
                      </div>
                      <p className="text-base md:text-xl text-left mt-1 max-w-48 uppercase leading-[1.5] tracking-normal">
                        <strong>Jóvenes</strong> formados y empoderados
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}