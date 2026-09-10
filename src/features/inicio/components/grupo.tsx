import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export function Grupo() {
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
          <div className="text-jci-gray text-[13px] leading-[1.85] font-bold tracking-normal uppercase not-italic">
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
                    <div className="text-jci-dark-text max-w-83 text-left leading-[1.78] font-normal tracking-normal not-italic md:text-[18px]">
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
                <div className="flex-full mt-12 box-border w-full flex-none">
                  <div className="text-jci-navy text-6xl leading-none font-light tracking-[-5px] not-italic md:text-8xl">
                    <span>+50</span>
                  </div>

                  <div className="text-left text-[16px] leading-normal font-normal tracking-normal text-black uppercase not-italic md:max-w-45">
                    <p>
                      <strong>Años</strong> formando líderes en Ambato
                    </p>
                  </div>
                </div>
                <div className="mt-12 box-border w-full md:flex-1">
                  <div className="text-jci-navy text-6xl leading-none font-light tracking-[-5px] not-italic md:text-8xl">
                    <span>+200</span>
                  </div>
                  <p className="text-left text-[16px] leading-normal font-normal tracking-normal text-black uppercase not-italic last:mr-0 md:max-w-45">
                    <strong>Proyectos</strong> con impacto comunitario
                  </p>
                </div>
                <div className="mt-12 box-border w-full md:flex-1">
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
          <div className="flex w-full flex-col flex-wrap items-start md:flex-row md:items-end">
            {/* BLOQUE 1 - Globe */}
            <div className="relative w-full overflow-hidden bg-gray-500 before:block before:pt-[100%] before:content-[''] md:w-1/2">
              {/* Globe */}
              <div className="absolute top-1/2 left-1/2 h-auto min-h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2">
                {/* <Globe markers={networkMarkers} arcs={networkArcs} autoRotate={false} /> */}
              </div>

              {/* Overlay */}
              <div className="absolute top-0 left-0 z-10 h-full w-full">
                {/* Caja roja/azul que ocupa 50% del bloque */}
                <div className="bg-jci-navy relative w-full overflow-hidden before:block before:pt-[100%] before:content-[''] md:w-1/2">
                  <div className="absolute top-0 left-0 z-10 h-full w-full">
                    <div className="box-border flex h-full flex-col p-6">
                      <div className="flex h-full flex-col">
                        {/* Título */}
                        <div className="w-full flex-[0_1_auto] text-[13px] leading-[1.85] font-normal tracking-[1px] text-white uppercase">
                          Red Nacional e Internacional
                        </div>

                        {/* Descripción */}
                        <div className="mt-2 w-full flex-[2_1_auto]">
                          <h5 className="text-left text-lg leading-tight font-bold text-white">
                            Una red de líderes jóvenes presente en Ambato, más de 10 ciudades del
                            Ecuador y más de 120 países del mundo.
                          </h5>
                        </div>

                        {/* Link */}
                        <div className="w-full flex-[0_1_auto]">
                          <Link
                            href="/donde-estamos"
                            aria-label="Descubre donde estamos"
                            className="group corsor-pointer inline-block transition duration-400"
                          >
                            <div className="flex items-center">
                              <span className="text-xs text-white">Descubre donde estamos</span>

                              <div className="ml-3 flex items-center transition-transform duration-300 group-hover:translate-x-1">
                                <HiOutlineArrowNarrowRight className="h-6 w-6 text-white" />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOQUE 2 - Liderando */}
            <div className="bg-jci-yellow relative w-full overflow-hidden before:block before:pt-[100%] before:content-[''] after:absolute after:top-[-20%] after:h-[70%] after:w-full after:skew-y-[-20deg] after:bg-white/10 md:w-1/4">
              {/* Contenido */}
              <div className="absolute top-0 left-0 z-10 h-full w-full">
                <div className="box-border flex h-full flex-col p-6">
                  <div className="flex h-full flex-col">
                    {/* Título */}
                    <div className="w-full flex-[0_1_auto] text-[13px] leading-[1.85] font-normal tracking-[1px] text-white uppercase">
                      Liderando el cambio en Ecuador
                    </div>

                    {/* Descripción */}
                    <div className="mt-2 w-full flex-[2_1_auto]">
                      <h5 className="text-left text-lg leading-tight font-bold text-white">
                        Uno de los capítulos mas activos de JCI Ecuador, con impacto local y
                        proyección nacional.
                      </h5>
                    </div>

                    {/* Link */}
                    <div className="w-full flex-[0_1_auto]">
                      <Link
                        href="/en/investors/overview"
                        aria-label="Learn more"
                        className="group corsor-pointer inline-block transition duration-400"
                      >
                        <div className="flex items-center">
                          <span className="text-xs text-white">Saber más</span>

                          <div className="ml-3 flex items-center transition-transform duration-300 group-hover:translate-x-1">
                            <HiOutlineArrowNarrowRight className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOQUE 3 - Impacto */}
            <div className="relative w-full overflow-hidden bg-cover bg-center before:block before:pt-[100%] before:content-[''] md:w-1/4">
              {/* Fondo */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(219, 0, 41, 0.9), rgba(219, 0, 41, 0.9)), url('/images/inicio/base-jci.png')",
                  backgroundBlendMode: "multiply",
                }}
              />

              {/* Contenido */}
              <div className="absolute top-0 left-0 z-10 h-full w-full">
                <div className="box-border flex h-full flex-col p-6">
                  <div className="flex h-full flex-col">
                    {/* Título */}
                    <div className="w-full flex-[0_1_auto] text-[13px] leading-[1.85] font-normal tracking-[1px] text-white uppercase">
                      Impacto que trasciende fronteras
                    </div>

                    {/* Descripción */}
                    <div className="mt-2 w-full flex-[2_1_auto]">
                      <h5 className="text-left text-lg leading-tight font-bold text-white">
                        Desde Ambato, contribuimos al desarrollo de líderes jóvenes en comunidades
                        de todo el mundo.
                      </h5>
                    </div>

                    {/* Link */}
                    <div className="w-full flex-[0_1_auto]">
                      <Link
                        href="/en/media/downloads"
                        aria-label="Read more"
                        className="group corsor-pointer inline-block transition duration-400"
                      >
                        <div className="flex items-center">
                          <span className="text-xs text-white">Descubre como lo hacemos</span>

                          <div className="ml-3 flex items-center transition-transform duration-300 group-hover:translate-x-1">
                            <HiOutlineArrowNarrowRight className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </Link>
                    </div>
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
