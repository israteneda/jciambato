"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Datos() {
  return (
    <div className="my-20 md:my-40  ">
      <div className="relative z-10 max-w-6xl mx-8 md:mx-20 lg:mx-auto">
        {/* Grid container responsivo */}
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 lg:grid-cols-4 lg:grid-rows-2 gap-0">
          {/* Primer Cuadro */}
          <div className="relative bg-gray-500 col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-2 overflow-hidden">
            {/* Fotografía de Fondo - Solo visible en pantallas grandes */}
            <Image
              src="/images/inicio/base-jci.png"
              alt="Video de Fondo"
              width={1200}
              height={1200}
              className="hidden lg:block h-full w-full object-cover"
            />

            {/* Contenido Superior */}
            <div className="absolute lg:absolute z-10 w-full top-0 left-0 h-full">
              <div className="bg-jci-navy overflow-hidden w-full h-full lg:w-1/2 lg:h-1/2">
                <div className="flex flex-col justify-between p-6 h-full">
                  <div>
                    <div className="text-xs leading-[1.8] not-italic font-normal tracking-normal uppercase text-gray-50">
                      Somos una red Internacional
                    </div>

                    <div className="w-full mt-2">
                      <h5 className="text-lg font-bold not-italic text-left leading-[1.25] tracking-normal text-gray-50">
                        Una red de líderes jóvenes presente en Ambato, más de 10 ciudades del
                        Ecuador y más de 120 países del mundo.
                      </h5>
                    </div>
                  </div>

                  <div className="mt-5 md:mt-0">
                    <Link
                      href="/involucrate"
                      className="z-20 group max-w-full inline-block transition duration-[400ms] cursor-pointer"
                      aria-label="Descubre donde estamos"
                    >
                      <div className="flex items-center">
                        <span className="text-xs text-gray-50 leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-gray-50">
                          Descrubre donde estamos
                        </span>
                        <div
                          className="flex ml-3 items-center transform transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <HiOutlineArrowNarrowRight className="w-6 h-6 text-gray-50 group-hover:text-gray-50 transition-colors duration-300" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido Inferior */}
            <div className="absolute bottom-0 right-0">
              <div className="flex items-end justify-end h-full w-full bg-gray-100">
                <div className="flex items-start gap-4 p-4">
                  <Image
                    src="/images/logos/jci.png"
                    alt="Logo JCI"
                    width={90}
                    height={90}
                    className="object-cover mt-1"
                  />

                  <Image
                    src="/images/logos/jci-ecuador.png"
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
          <div className="hidden lg:block lg:col-span-2 lg:row-span-1"></div>

          {/* Segundo Cuadro */}
          <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 bg-jci-gold">
            <div className="flex flex-col justify-between p-6 h-full min-h-[400px] md:min-h-[300px] lg:min-h-full">
              <div>
                <div className="text-xs leading-[1.8] not-italic font-normal tracking-normal uppercase text-jci-black">
                  Liderando el cambio en Ecuador
                </div>

                <div className="w-full mt-2">
                  <h5 className="text-lg font-bold not-italic text-left leading-[1.25] tracking-normal text-black">
                    Uno de los capítulos más activos de JCI Ecuador, con impacto local y proyección
                    nacional.
                  </h5>
                </div>
              </div>

              <div className="mt-5 md:mt-0">
                <Link
                  href="/impacto"
                  className="z-20 group max-w-full relative inline-block transition duration-[400ms] cursor-pointer"
                  aria-label="Saber sobre nosotros"
                >
                  <div className="flex items-center">
                    <span className="text-xs text-jci-black leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-jci-black">
                      Saber más
                    </span>
                    <div
                      className="flex ml-3 items-center transform transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <HiOutlineArrowNarrowRight className="w-6 h-6 text-jci-black group-hover:text-jci-black transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Tercer Cuadro */}
          <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 bg-jci-seafoam">
            <div className="flex flex-col justify-between p-6 h-full min-h-[400px] md:min-h-[300px] lg:min-h-full">
              <div>
                <div className="text-xs leading-[1.8] not-italic font-normal tracking-normal uppercase text-jci-black">
                  Impacto que trasciende fronteras
                </div>

                <div className="w-full mt-2">
                  <h5 className="text-lg font-bold not-italic text-left leading-[1.25] tracking-normal text-black">
                    Desde Ambato, contribuimos al desarrollo de líderes jóvenes en comunidades de
                    todo el mundo.
                  </h5>
                </div>
              </div>

              <div className="mt-5 md:mt-0">
                <Link
                  href="/areas-oportunidad"
                  className="z-20 group max-w-full relative inline-block transition duration-[400ms] cursor-pointer"
                  aria-label="Leer más sobre"
                >
                  <div className="flex items-center">
                    <span className="text-xs text-jci-black leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-jci-red">
                      Descubre cómo lo hacemos
                    </span>
                    <div
                      className="flex ml-3 items-center transform transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <HiOutlineArrowNarrowRight className="w-6 h-6 text-jci-black group-hover:text-jci-black transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
