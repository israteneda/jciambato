"use client";

import { Button } from "@heroui/button";
import Image from "next/image";


const TitleSection = () => (
  <div className="mx-11 xl:mx-0 md:w-4/6">

    <p className="text-xs sm:text-sm lg:text-base font-semibold uppercase tracking-wide text-gray-600">
      GRUPO
    </p>

    <h2 className="mt-8 text-4xl font-semibold text-cyan-600 md:leading-tight">
      A lo largo de mas de 50 años, JCI Ambato a fomentado del desarrollo de líderes en la ciudad.
    </h2>

    <div className="max-w-md mt-8 ml-10 md:ml-16">
      <p className="text-base md:text-lg text-gray-700">
        Nos comprometemos a construir un legado de cambio que beneficie a
        nuestras comunidades y fomente el crecimiento colectivo.
      </p>

      <Button
        radius="none"
        variant="bordered"
        className="border-gray-400 text-gray-400 group mt-14"
        aria-label="Conoce nuestra misión y visión"
      >
        <span className="absolute inset-0 transform -translate-x-full bg-gray-400 transition-transform duration-300 group-hover:translate-x-0" />
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          Nuestra misión y visión
        </span>
      </Button>
    </div>
  </div>
);

const Stadistycs = () => (
  <div className="mx-11 w-full md:w-1/2 mt-16">

    {/* Proyectos Ejecutados - Ocupa toda la fila */}
    <div className="text-left">
      <p className="text-7xl md:text-8xl font-light text-cyan-600">
        20+
      </p>
      <p className="text-base text-gray-700 font-semibold uppercase">
        Proyectos Ejecutados
      </p>
    </div>

    {/* Años en Ambato y Miembros Activos en la siguiente fila */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-5 mt-10 md:mt-16">
      <div className="text-left">
        <p className="text-7xl sm:text-8xl font-light text-cyan-600">
          50+
        </p>
        <p className="text-base text-gray-700 font-semibold uppercase">
          Años en Ambato
        </p>
      </div>
      <div className="text-left">
        <p className="text-7xl sm:text-8xl font-light text-cyan-600">
          20+
        </p>
        <p className="text-base text-gray-700 font-semibold uppercase">
          Miembros Activos
        </p>
      </div>
    </div>
  </div>
)
export default function Grupo() {
  return (
    <section className="relative z-10 overflow-hidden my-28">


      <div className="flex flex-col items-end">
        <div className="ml-20 md:w-1/2">
          <Image
            src="/images/grupo3.jpeg"
            alt="Grupo JCI Ambato"
            width={500}
            height={500}
            className="object-cover w-full h-auto"
          />
        </div>


        <div className="flex flex-col max-w-6xl mx-auto mt-8">
          <TitleSection />
          <div className="flex justify-center md:justify-end ">
            <Stadistycs />
          </div>
        </div>
      </div>

    </section>
  );
}
