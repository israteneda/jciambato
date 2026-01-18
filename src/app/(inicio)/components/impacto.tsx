"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Datos() {
  return (
    <div className="my-20 md:my-40">
      <div className="relative z-10 mx-8 max-w-6xl md:mx-20 lg:mx-auto">
        {/* Grid container responsivo */}
        <div className="grid grid-cols-1 grid-rows-3 gap-0 md:grid-cols-3 md:grid-rows-1 lg:grid-cols-4 lg:grid-rows-2">
          {/* Primer Cuadro */}
          <div className="relative col-span-1 row-span-1 overflow-hidden bg-gray-500 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-2">
            {/* Fotografía de Fondo - Solo visible en pantallas grandes */}
            <Image
              src="/images/inicio/base-jci.png"
              alt="Video de Fondo"
              width={1200}
              height={1200}
              className="hidden h-full w-full object-cover lg:block"
            />

            {/* Contenido Superior */}
            <div className="absolute left-0 top-0 z-10 h-full w-full lg:absolute">
              <div className="h-full w-full overflow-hidden bg-jci-navy lg:h-1/2 lg:w-1/2">
                <div className="flex h-full flex-col justify-between p-6">
                  <div>
                    <div className="text-xs font-normal uppercase not-italic leading-[1.8] tracking-normal text-gray-50">
                      Somos una red Internacional
                    </div>

                    <div className="mt-2 w-full">
                      <h5 className="text-left text-lg font-bold not-italic leading-[1.25] tracking-normal text-gray-50">
                        Una red de líderes jóvenes presente en Ambato, más de 10 ciudades del
                        Ecuador y más de 120 países del mundo.
                      </h5>
                    </div>
                  </div>

                  <div className="mt-5 md:mt-0">
                    <Link
                      href="/involucrate"
                      className="group z-20 inline-block max-w-full cursor-pointer transition duration-[400ms]"
                      aria-label="Descubre donde estamos"
                    >
                      <div className="flex items-center">
                        <span className="text-xs font-medium not-italic leading-none tracking-normal text-gray-50 transition-colors duration-300 group-hover:text-gray-50">
                          Descrubre donde estamos
                        </span>
                        <div
                          className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <HiOutlineArrowNarrowRight className="h-6 w-6 text-gray-50 transition-colors duration-300 group-hover:text-gray-50" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido Inferior */}
            <div className="absolute bottom-0 right-0">
              <div className="flex h-full w-full items-end justify-end bg-gray-100">
                <div className="flex items-start gap-4 p-4">
                  <Image
                    src="/images/logos/jci.png"
                    alt="Logo JCI"
                    width={90}
                    height={90}
                    className="mt-1 object-cover"
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
          <div className="hidden lg:col-span-2 lg:row-span-1 lg:block"></div>

          {/* Segundo Cuadro */}
          <div className="col-span-1 row-span-1 bg-jci-yellow md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1">
            <div className="flex h-full min-h-[400px] flex-col justify-between p-6 md:min-h-[300px] lg:min-h-full">
              <div>
                <div className="text-xs font-normal uppercase not-italic leading-[1.8] tracking-normal text-jci-black">
                  Liderando el cambio en Ecuador
                </div>

                <div className="mt-2 w-full">
                  <h5 className="text-left text-lg font-bold not-italic leading-[1.25] tracking-normal text-black">
                    Uno de los capítulos más activos de JCI Ecuador, con impacto local y proyección
                    nacional.
                  </h5>
                </div>
              </div>

              <div className="mt-5 md:mt-0">
                <Link
                  href="/impacto"
                  className="group relative z-20 inline-block max-w-full cursor-pointer transition duration-[400ms]"
                  aria-label="Saber sobre nosotros"
                >
                  <div className="flex items-center">
                    <span className="text-xs font-medium not-italic leading-none tracking-normal text-jci-black transition-colors duration-300 group-hover:text-jci-black">
                      Saber más
                    </span>
                    <div
                      className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <HiOutlineArrowNarrowRight className="h-6 w-6 text-jci-black transition-colors duration-300 group-hover:text-jci-black" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Tercer Cuadro */}
          <div className="col-span-1 row-span-1 bg-jci-seafoam md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1">
            <div className="flex h-full min-h-[400px] flex-col justify-between p-6 md:min-h-[300px] lg:min-h-full">
              <div>
                <div className="text-xs font-normal uppercase not-italic leading-[1.8] tracking-normal text-jci-black">
                  Impacto que trasciende fronteras
                </div>

                <div className="mt-2 w-full">
                  <h5 className="text-left text-lg font-bold not-italic leading-[1.25] tracking-normal text-black">
                    Desde Ambato, contribuimos al desarrollo de líderes jóvenes en comunidades de
                    todo el mundo.
                  </h5>
                </div>
              </div>

              <div className="mt-5 md:mt-0">
                <Link
                  href="/areas-oportunidad"
                  className="group relative z-20 inline-block max-w-full cursor-pointer transition duration-[400ms]"
                  aria-label="Leer más sobre"
                >
                  <div className="flex items-center">
                    <span className="group-hover:text-jci-red text-xs font-medium not-italic leading-none tracking-normal text-jci-black transition-colors duration-300">
                      Descubre cómo lo hacemos
                    </span>
                    <div
                      className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <HiOutlineArrowNarrowRight className="h-6 w-6 text-jci-black transition-colors duration-300 group-hover:text-jci-black" />
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
