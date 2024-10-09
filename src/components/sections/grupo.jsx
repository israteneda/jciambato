"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Grupo() {
  return (
    <section>
      <div className="w-full mx-auto max-w-8xl">
        {/* Contenedor principal */}
        <div className="relative flex flex-col-reverse lg:flex-row">
          {/* Bloque de Texto superpuesto */}
          <div className="relative w-full lg:w-1/2">
            <div className="lg:absolute lg:top-20 lg:left-5 lg:translate-x-16 lg:min-w-72 z-10 p-6">
              <p className="text-xs lg:text-md font-bold mb-5 text-gray-600">
                GRUPO
              </p>
              <h2 className="text-2xl lg:text-4xl font-semibold text-cyan-600">
                Somos la organización de líderes y emprendedores mas importante
                del centro del país
              </h2>
              <p className="m-8 text-sm md:text-base lg:text-lg text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus dignissimos accusantium culpa eligendi?
                Repudiandae minus repellat eaque.
              </p>

              <Button
                variant="bordered"
                className="relative overflow-hidden text-gray-600 border-gray-400 group"
                aria-label="Conoce nuestra misión y visión"
              >
                {/* Fondo del botón con la transición de llenado */}
                <span className="absolute inset-0 bg-gray-400 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>

                {/* Texto del botón */}
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Nuestra misión y visión
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex lg:justify-end">
          <Image
            src="/grupo.jpeg"
            alt="Group JCI Ambato"
            width={700}
            height={700}
            className="object-cover w-full h-full lg:w-auto lg:h-auto"
          />
        </div>

        {/* Bloque de Estadísticas */}
        <div className="w-full lg:w-1/2 p-5 mt-10 lg:mt-0 lg:ml-auto lg:mr-0">
          <div className="my-10 text-start">
            <p className="text-5xl font-bold text-gray-800">+20</p>
            <p className="text-gray-600">Proyectos Ejecutados</p>
          </div>

          <div className="flex flex-col my-10 lg:flex-row gap-10 text-start">
            <div>
              <p className="text-5xl font-bold text-gray-800">+50</p>
              <p className="text-gray-600">Años en Ambato</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gray-800">+20</p>
              <p className="text-gray-600">Miembros Activos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
