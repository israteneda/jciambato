"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Grupo() {
  return (
    <section aria-labelledby="grupo-title">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex flex-col lg:flex-row items-center">
          {/* Bloque de Texto */}
          <div className="w-full lg:w-1/2 px-10 mb-12 lg:mb-0 lg:mt-28">
            <span className="text-xs sm:text-sm lg:text-base font-bold text-gray-600 uppercase">
              Grupo
            </span>
            <h2
              id="grupo-title"
              className="text-3xl lg:text-4xl font-semibold my-8 text-cyan-600"
            >
              Somos la organización de líderes y emprendedores más importante
              del centro del país
            </h2>
            <p className="ml-16 text-base lg:text-lg text-gray-700">
              Nuestro compromiso es construir un legado de cambio que beneficie
              a nuestras comunidades, más allá del desarrollo individual.
            </p>

            <Button
              variant="bordered"
              className="relative overflow-hidden mt-10 text-gray-600 border-gray-400 group hover:text-white transition-colors duration-300"
              aria-label="Conoce nuestra misión y visión"
            >
              <span className="absolute inset-0 bg-gray-400 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10">Nuestra misión y visión</span>
            </Button>

            {/* Bloque de Estadísticas */}
            <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center sm:text-left">
                <p className="text-6xl font-bold text-gray-800">+20</p>
                <p className="text-gray-600 font-semibold">
                  Proyectos Ejecutados
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-6xl font-bold text-gray-800">+50</p>
                <p className="text-gray-600 font-semibold">Años en Ambato</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-6xl font-bold text-gray-800">+20</p>
                <p className="text-gray-600 font-semibold">Miembros Activos</p>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/grupo2r.jpeg"
              alt="Grupo JCI Ambato"
              width={600}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
