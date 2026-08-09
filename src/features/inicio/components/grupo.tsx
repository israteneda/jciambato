"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Grupo() {
  return (
    <Section className="overflow-hidden py-0 md:py-0">
      {/* Imagen */}
      <div className="relative flex h-[calc(215px+34.375vw)] justify-end">
        <Image
          src="/images/inicio/cincuentenario.png"
          alt="Grupo JCI Ambato - Sesión Solemne 50 Aniversario"
          width={400}
          height={400}
          className="absolute top-0 right-0 w-[75vw] object-cover md:h-full md:w-[55vw]"
        />
      </div>

      {/* Información */}
      <div className="-mt-22 md:-mt-52">
        <Container>
          <div className="text-[13px] leading-[1.85] font-bold tracking-normal text-[#989898] uppercase not-italic">
            Trayectoria que Transforma
          </div>

          <div className="mt-6">
            <h3 className="text-jci-teal text-left text-4xl leading-[1.33] font-bold tracking-normal normal-case not-italic md:max-w-[75%] md:text-5xl">
              Somos la organización de liderazgo más importante del centro del país.
            </h3>
          </div>
        </Container>

        <Container>
          <div className="relative md:flex">
            {/* Izquierda */}
            <div className="flex-1">
              <div className="ml-8 md:ml-16">
                <div>
                  <div className="mt-8">
                    <div className="max-w-83 text-left leading-[1.78] font-normal tracking-normal text-[#323232] not-italic md:text-[18px]">
                      <p>
                        <strong>En JCI Ambato, no solo observamos, actuamos. </strong> Lideramos con
                        propósito, servimos con pasión y forjamos un futuro mejor con cada paso que
                        damos, inspirando impacto y transformación en nuestra comunidad.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12">
                    <Button
                      size="lg"
                      className="border-jci-navy text-jci-navy group relative overflow-hidden bg-transparent hover:bg-transparent"
                      aria-label="Conoce nuestra misión y visión"
                    >
                      <Link href="/nosotros">
                        <span className="bg-jci-navy absolute inset-0 -translate-x-full transform transition-transform duration-300 group-hover:translate-x-0" />
                        <span className="relative transition-colors duration-300 group-hover:text-white">
                          Nuestra misión y visión
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* Centro */}
            <div className="hidden md:block">
              <div className="absolute top-0 right-5 origin-left translate-x-full translate-y-1/2 rotate-90">
                <div className="text-jci-gray before:bg-jci-gray relative pl-42 text-[11px] leading-none font-medium tracking-[2px] uppercase not-italic before:absolute before:top-1.5 before:left-0 before:h-px before:w-40 before:content-['']">
                  Sesión Solemne por los 50 años de JCI Ambato, 2024
                </div>
              </div>
            </div>
            {/* Derecha */}
            <div className="mt-0 flex-1 md:mt-30">
              <div className="flex flex-wrap">
                <div className="mt-12 box-border w-full flex-none md:ml-6">
                  <div className="text-jci-navy text-6xl leading-none font-light tracking-[-5px] not-italic md:text-8xl">
                    <span>+50</span>
                  </div>

                  <div className="text-left text-[16px] leading-normal font-normal tracking-normal text-black uppercase not-italic md:max-w-45">
                    <p>
                      <strong>Años</strong> formando líderes en Ambato
                    </p>
                  </div>
                </div>
                <div className="mt-12 box-border flex-1 md:ml-6 md:w-full">
                  <div className="text-jci-navy text-6xl leading-none font-light tracking-[-5px] not-italic md:text-8xl">
                    <span>+200</span>
                  </div>
                  <p className="text-left text-[16px] leading-normal font-normal tracking-normal text-black uppercase not-italic last:mr-0 md:max-w-45">
                    <strong>Proyectos</strong> con impacto comunitario
                  </p>
                </div>
                <div className="mt-12 box-border md:ml-6 md:w-full">
                  <div className="text-jci-navy text-6xl leading-none font-light tracking-[-5px] not-italic md:text-8xl">
                    <span>+500</span>
                  </div>

                  <p className="text-left text-[16px] leading-normal font-normal tracking-normal text-black uppercase not-italic last:mr-0 md:max-w-45">
                    <strong>Proyectos</strong> con impacto comunitario
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Contenedor para las imágenes posicionadas */}
      <div className="relative">
        <Image
          src="/images/marca/figura.png"
          alt="Imagen desde la izquierda"
          className="absolute -left-28 hidden h-96 w-auto -translate-y-full object-cover lg:block"
          width={400}
          height={320}
        />
        <Image
          src="/images/marca/figura.png"
          alt="Imagen desde la derecha"
          className="absolute -right-28 hidden h-96 w-auto -translate-y-10 object-cover lg:block"
          width={400}
          height={320}
        />
      </div>

      {/* Impacto */}
      <div className="py-16">
        <Container>
          <div className="flex w-full justify-end">
            {/* Grid container responsivo */}
            <div className="grid grid-cols-1 grid-rows-3 gap-0 md:grid-cols-3 md:grid-rows-1 lg:grid-cols-4 lg:grid-rows-2">
              {/* Primer Cuadro */}
              <div className="bg-jci-navy relative col-span-1 row-span-1 overflow-hidden md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-2">
                {/* Fotografía de Fondo - Solo visible en pantallas grandes */}
                <Image
                  src="/images/inicio/base-jci.png"
                  alt="Video de Fondo"
                  width={1200}
                  height={1200}
                  className="hidden h-full w-full object-cover lg:block"
                />

                {/* Contenido Superior */}
                <div className="absolute top-0 left-0 h-full w-full lg:absolute">
                  <div className="bg-jci-navy h-full w-full overflow-hidden lg:h-1/2 lg:w-1/2">
                    <div className="flex h-full flex-col justify-between p-6">
                      <div>
                        <div className="text-xs leading-[1.8] font-normal tracking-normal text-white uppercase not-italic">
                          Somos una red Internacional
                        </div>

                        <div className="mt-2 w-full">
                          <h5 className="text-left text-lg leading-tight font-semibold tracking-normal text-white not-italic">
                            Una red de líderes jóvenes presente en Ambato, más de 10 ciudades del
                            Ecuador y más de 120 países del mundo.
                          </h5>
                        </div>
                      </div>

                      <div className="mt-5 md:mt-0">
                        <Link
                          href="/involucrate"
                          className="group inline-block max-w-full cursor-pointer transition duration-400"
                          aria-label="Descubre donde estamos"
                        >
                          <div className="flex items-center">
                            <span className="text-xs leading-none font-medium tracking-normal text-white not-italic transition-colors duration-300 group-hover:text-white">
                              Descrubre donde estamos
                            </span>
                            <div
                              className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                              aria-hidden="true"
                            >
                              <HiOutlineArrowNarrowRight className="h-6 w-6 text-white transition-colors duration-300 group-hover:text-white" />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenido Inferior */}
                <div className="absolute right-0 bottom-0 hidden md:block">
                  <div className="flex h-full w-full items-end justify-end bg-white">
                    <div className="flex items-start gap-4 p-4">
                      <Image
                        src="/images/marca/jci.webp"
                        alt="Logo JCI"
                        width={90}
                        height={90}
                        className="mt-1 object-cover"
                      />

                      <Image
                        src="/images/marca/jci-ecuador.webp"
                        alt="Logo JCI"
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Espacio vacío para empujar los cuadrados hacia abajo - Solo en pantallas grandes */}
              <div className="hidden lg:col-span-2 lg:row-span-1 lg:block"></div>

              {/* Segundo Cuadro */}
              <div className="bg-jci-yellow col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1">
                <div className="flex h-full min-h-100 flex-col justify-between p-6 md:min-h-75 lg:min-h-full">
                  <div>
                    <div className="text-jci-black text-xs leading-[1.8] font-normal tracking-normal uppercase not-italic">
                      Liderando el cambio en Ecuador
                    </div>

                    <div className="mt-2 w-full">
                      <h5 className="text-jci-black text-left text-lg leading-tight font-semibold tracking-normal not-italic">
                        Uno de los capítulos más activos de JCI Ecuador, con impacto local y
                        proyección nacional.
                      </h5>
                    </div>
                  </div>

                  <div className="mt-5 md:mt-0">
                    <Link
                      href="/impacto"
                      className="group relative inline-block max-w-full cursor-pointer transition duration-400"
                      aria-label="Saber sobre nosotros"
                    >
                      <div className="flex items-center">
                        <span className="text-jci-black group-hover:text-jci-black text-xs leading-none font-medium tracking-normal not-italic transition-colors duration-300">
                          Saber más
                        </span>
                        <div
                          className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <HiOutlineArrowNarrowRight className="text-jci-black group-hover:text-jci-black h-6 w-6 transition-colors duration-300" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tercer Cuadro */}
              <div className="bg-jci-teal col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1">
                <div className="flex h-full min-h-100 flex-col justify-between p-6 md:min-h-75 lg:min-h-full">
                  <div>
                    <div className="text-jci-black text-xs leading-[1.8] font-normal tracking-normal uppercase not-italic">
                      Impacto que trasciende fronteras
                    </div>

                    <div className="mt-2 w-full">
                      <h5 className="text-jci-black text-left text-lg leading-tight font-semibold tracking-normal not-italic">
                        Desde Ambato, contribuimos al desarrollo de líderes jóvenes en comunidades
                        de todo el mundo.
                      </h5>
                    </div>
                  </div>

                  <div className="mt-5 md:mt-0">
                    <Link
                      href="/areas-oportunidad"
                      className="group relative inline-block max-w-full cursor-pointer transition duration-400"
                      aria-label="Leer más sobre"
                    >
                      <div className="flex items-center">
                        <span className="group-hover:text-jci-teal text-jci-black text-xs leading-none font-medium tracking-normal not-italic transition-colors duration-300">
                          Descubre cómo lo hacemos
                        </span>
                        <div
                          className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <HiOutlineArrowNarrowRight className="text-jci-black group-hover:text-jci-black h-6 w-6 transition-colors duration-300" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
