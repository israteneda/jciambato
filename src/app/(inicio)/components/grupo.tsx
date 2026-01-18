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
            className="absolute right-0 top-0 h-full w-[85vw] object-cover md:w-[55vw]"
          />
        </figure>

        <div className="-mt-0 md:-mt-[150px] lg:-mt-[260px]">
          {/* Titulo Principal */}
          <div className="relative z-10 mx-8 w-full max-w-6xl bg-transparent md:mx-20 lg:mx-auto">
            <header className="lg:max-w-5xl">
              <div className="text-sm font-bold uppercase leading-[1.85] tracking-normal text-jci-yellow">
                Trayectoria que Transforma
              </div>
              <div className="mt-5">
                <h3 className="max-w-xs text-left text-3xl font-bold normal-case leading-[1.33] tracking-normal text-jci-teal md:max-w-[60%] lg:max-w-[75%] lg:text-5xl lg:leading-[1.33]">
                  {/* JCI Ambato es sinónimo de liderazgo juvenil, impacto comunitario e innovación al servicio del cambio. */}
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
                  <p className="max-w-lg text-left text-base font-normal normal-case tracking-normal text-jci-black lg:text-lg lg:leading-[1.78]">
                    <strong>En JCI Ambato, no solo observamos, actuamos. </strong> Lideramos con
                    propósito, servimos con pasión y forjamos un futuro mejor con cada paso que
                    damos, inspirando impacto y transformación en nuestra comunidad.
                  </p>
                </div>

                <div className="mt-12">
                  <Button
                    radius="none"
                    variant="bordered"
                    className="group relative overflow-hidden border-jci-black text-jci-black"
                    aria-label="Conoce nuestra misión y visión"
                  >
                    <Link href="/nosotros">
                      <span className="absolute inset-0 -translate-x-full transform bg-jci-black transition-transform duration-300 group-hover:translate-x-0" />
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        Nuestra misión y visión
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Información de la fotografía, visible en pantallas grandes */}
              <div className="hidden flex-1 shrink grow basis-0 md:block">
                <div className="absolute -top-24 right-[20px] origin-left translate-x-[100%] translate-y-[50%] rotate-90 transform">
                  <div className="relative pl-[170px] text-[11px] font-medium uppercase leading-none tracking-[2px] text-[rgb(174,174,174)]">
                    <div
                      className="absolute left-0 top-[5px] h-[1px] w-[160px] bg-[rgb(174,174,174)]"
                      aria-hidden="true"
                    ></div>
                    Sesión Solemne por los 50 años de JCI Ambato, 2024
                  </div>
                </div>
              </div>

              {/* Estadisticas */}
              <div className="relative flex-1 shrink grow basis-0 lg:mr-20 lg:mt-28">
                <div className="flex flex-wrap gap-10">
                  <div className="mt-20">
                    <div className="text-6xl font-light leading-[1] tracking-[-5px] text-jci-navy md:text-8xl">
                      <span>+50</span>
                    </div>
                    <p className="mt-1 max-w-48 text-left text-base uppercase leading-[1.5] tracking-normal md:text-lg">
                      <strong>Años</strong> formando líderes en Ambato
                    </p>
                  </div>

                  <div className="flex w-full flex-col gap-10 md:flex-row">
                    <div className="flex-1">
                      <div className="text-6xl font-light leading-[1] tracking-[-5px] text-jci-navy md:text-8xl">
                        <span>+200</span>
                      </div>
                      <p className="mt-1 max-w-48 text-left text-base uppercase leading-[1.5] tracking-normal md:text-lg">
                        <strong>Proyectos</strong> con impacto comunitario
                      </p>
                    </div>

                    <div className="flex-1">
                      <div className="text-6xl font-light leading-[1] tracking-[-5px] text-jci-navy md:text-8xl">
                        <span>+500</span>
                      </div>
                      <p className="mt-1 max-w-48 text-left text-base uppercase leading-[1.5] tracking-normal md:text-lg">
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
