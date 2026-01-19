"use client";

import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";

export default function Grupo() {
  return (
    <section className="relative z-10 overflow-hidden">
      <div>
        <figure className="relative z-10 mb-10 flex h-52 justify-end md:h-[calc(20px+34.375vw)]">
          <Image
            src="/images/inicio/cincuentenario.png"
            alt="Grupo JCI Ambato - Sesión Solemne 50 Aniversario"
            width={500}
            height={500}
            className="absolute top-0 right-0 h-full w-[85vw] object-cover md:w-[55vw]"
          />
        </figure>

        <div className="mt-0 md:-mt-37.5 lg:-mt-65">
          {/* Titulo Principal */}
          <div className="relative z-10 mx-8 w-full max-w-6xl bg-transparent md:mx-20 lg:mx-auto">
            <header className="lg:max-w-5xl">
              <div className="text-jci-yellow text-sm leading-[1.85] font-bold tracking-normal uppercase">
                Trayectoria que Transforma
              </div>
              <div className="mt-5">
                <h3 className="text-jci-teal max-w-xs text-left text-3xl leading-[1.33] font-bold tracking-normal normal-case md:max-w-[60%] lg:max-w-[75%] lg:text-5xl lg:leading-[1.33]">
                  Somos la organización de liderazgo más importante del centro del país.
                </h3>
              </div>
            </header>
          </div>

          <div className="relative z-10 w-full max-w-6xl bg-transparent px-8 md:mx-20 lg:mx-auto">
            <div className="relative gap-5 lg:flex">
              {/* Descripción */}
              <div className="md:ml-16">
                <div className="mt-8">
                  <p className="text-jci-black max-w-lg text-left text-base font-normal tracking-normal normal-case lg:text-lg lg:leading-[1.78]">
                    <strong>En JCI Ambato, no solo observamos, actuamos. </strong> Lideramos con
                    propósito, servimos con pasión y forjamos un futuro mejor con cada paso que
                    damos, inspirando impacto y transformación en nuestra comunidad.
                  </p>
                </div>

                <div className="mt-12">
                  <Button
                    radius="none"
                    variant="bordered"
                    className="group border-jci-navy text-jci-navy relative overflow-hidden"
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

              {/* Información de la fotografía, visible en pantallas grandes */}
              <div className="hidden flex-1 shrink grow basis-0 md:block">
                <div className="absolute -top-24 right-5 origin-left translate-x-full translate-y-[50%] rotate-90 transform">
                  <div className="relative pl-42.5 text-[11px] leading-none font-medium tracking-[2px] text-[rgb(174,174,174)] uppercase">
                    <div
                      className="absolute top-1.25 left-0 h-px w-40 bg-[rgb(174,174,174)]"
                      aria-hidden="true"
                    ></div>
                    Sesión Solemne por los 50 años de JCI Ambato, 2024
                  </div>
                </div>
              </div>

              {/* Estadisticas */}
              <div className="relative flex-1 shrink grow basis-0 lg:mt-28 lg:mr-20">
                <div className="flex flex-wrap gap-10">
                  <div className="mt-20">
                    <div className="text-jci-navy text-6xl leading-none font-light tracking-[-5px] md:text-8xl">
                      <span>+50</span>
                    </div>
                    <p className="mt-1 max-w-48 text-left text-base leading-normal tracking-normal uppercase md:text-lg">
                      <strong>Años</strong> formando líderes en Ambato
                    </p>
                  </div>

                  <div className="flex w-full flex-col gap-10 md:flex-row">
                    <div className="flex-1">
                      <div className="text-jci-navy text-6xl leading-none font-light tracking-[-5px] md:text-8xl">
                        <span>+200</span>
                      </div>
                      <p className="mt-1 max-w-48 text-left text-base leading-normal tracking-normal uppercase md:text-lg">
                        <strong>Proyectos</strong> con impacto comunitario
                      </p>
                    </div>

                    <div className="flex-1">
                      <div className="text-jci-navy text-6xl leading-none font-light tracking-[-5px] md:text-8xl">
                        <span>+500</span>
                      </div>
                      <p className="mt-1 max-w-48 text-left text-base leading-normal tracking-normal uppercase md:text-lg">
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
