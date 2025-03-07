"use client";

import { Button } from "@heroui/button";
import Image from "next/image";

export default function Grupo() {
  return (
    <section className="">
      <div className="bg-orange-100">
        <div className="relative flex flex-col lg:flex-row items-start">
          {/* Bloque de Texto */}
          <div className="w-full lg:w-1/2 pl-9 lg:mt-44 lg:pl-24">
            <span className="text-xs sm:text-sm lg:text-base font-bold text-gray-600 uppercase">
              Grupo
            </span>
            <h2
              id="grupo-title"
              className="text-3xl text-balance lg:text-4xl font-semibold my-8 text-cyan-600"
            >
              Somos la organización de líderes y emprendedores más importante
              del centro del país
            </h2>
            <p className="px-5 ml-16 text-base lg:text-lg text-gray-700">
              Nos comprometemos a construir un legado de cambio que beneficie a
              nuestras comunidades y fomente el crecimiento colectivo.
            </p>
            <Button
              variant="bordered"
              className="relative overflow-hidden mt-10 text-gray-500 border-gray-500 group hover:text-white transition-colors duration-300"
              aria-label="Conoce nuestra misión y visión"
            >
              <span className="absolute inset-0 bg-gray-500 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10">Nuestra misión y visión</span>
            </Button>
          </div>

          {/* Imagen */}
          <div className="lg:flex-col lg:w-1/2">
            <Image
              src="/images/grupo2r.jpeg"
              alt="Grupo JCI Ambato"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />

            {/* Bloque de Estadísticas */}
            <div className="mt-10 pl-9 lg:pl-0 grid gap-12">
              {/* Proyectos Ejecutados - Ocupa toda la fila */}
              <div className="text-left">
                <p className="text-6xl sm:text-8xl lg:text-9xl font-light text-cyan-600">
                  +20
                </p>
                <p className="text-lg text-gray-700 font-semibold">
                  Proyectos Ejecutados
                </p>
              </div>

              {/* Años en Ambato y Miembros Activos en la siguiente fila */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="text-left">
                  <p className="text-6xl sm:text-8xl lg:text-9xl font-light text-cyan-600">
                    +50
                  </p>
                  <p className="text-lg text-gray-700 font-semibold">
                    Años en Ambato
                  </p>
                </div>
                <div className="text-left">
                  <p className="text-6xl sm:text-8xl lg:text-9xl font-light text-cyan-600">
                    +20
                  </p>
                  <p className="text-lg text-gray-700 font-semibold">
                    Miembros Activos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
