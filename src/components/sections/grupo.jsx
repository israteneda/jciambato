"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Grupo() {
  return (
    <section aria-labelledby="grupo-title" className="bg-cyan-600">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex flex-col lg:flex-row items-start">
          {/* Bloque de Texto */}
          <div className="w-full lg:w-1/2 my-10 px-9 lg:mt-24 lg:px-24">
            <span className="text-xs sm:text-sm lg:text-base font-bold text-gray-300 uppercase">
              Grupo
            </span>
            <h2
              id="grupo-title"
              className="text-3xl text-balance lg:text-4xl font-semibold my-8 text-gray-300"
            >
              Somos la organización de líderes y emprendedores más importante
              del centro del país
            </h2>
            <p className="ml-16 text-base lg:text-lg text-gray-300">
              Nuestro compromiso es construir un legado de cambio que beneficie
              a nuestras comunidades, más allá del desarrollo individual.
            </p>

            <Button
              variant="bordered"
              className="relative overflow-hidden mt-10 text-gray-200 border-gray-300 group hover:text-white transition-colors duration-300"
              aria-label="Conoce nuestra misión y visión"
            >
              <span className="absolute inset-0 bg-gray-400 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10">Nuestra misión y visión</span>
            </Button>

            {/* Bloque de Estadísticas */}
            <div className="mt-10 grid gap-10">
              {/* Proyectos Ejecutados - Ocupa toda la fila */}
              <div className="text-left">
                <p className="text-7xl sm:text-8xl lg:text-8xl font-bold text-gray-800">
                  +20
                </p>
                <p className="text-gray-300 font-semibold">
                  Proyectos Ejecutados
                </p>
              </div>

              {/* Años en Ambato y Miembros Activos en la siguiente fila */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="text-left">
                  <p className="text-7xl sm:text-8xl lg:text-8xl font-bold text-gray-800">
                    +50
                  </p>
                  <p className="text-gray-300 font-semibold">Años en Ambato</p>
                </div>
                <div className="text-left">
                  <p className="text-7xl sm:text-8xl lg:text-8xl font-bold text-gray-800">
                    +20
                  </p>
                  <p className="text-gray-300 font-semibold">
                    Miembros Activos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-end lg:w-1/2">
            <Image
              src="/grupo2r.jpeg"
              alt="Grupo JCI Ambato"
              width={600}
              height={600}
              className="object-cover h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
