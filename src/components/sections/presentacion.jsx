"use client";

import { Button } from "@nextui-org/react";

export default function Presentacion() {
  return (
    <div>
      <section className="relative w-full h-[75vh] overflow-hidden">
        {/* Contenedor principal de los elementos sobre el video */}
        <div className="relative z-30 flex items-center justify-start h-full px-4 md:px-8 lg:px-24">
          {/* Contenedor de información - Se ajusta al tamaño de la pantalla */}
          <div className="max-w-5xl mx-5 lg:mx-24 text-left p-4 lg:p-8">
            <h2 className="text-xs md:text-sm lg:text-md xl:text-sm font-bold mb-4 text-gray-600">
              GRUPO
            </h2>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-thin mb-16 text-cyan-600">
              Durante más de 50 años, JCI Ambato ha impulsando el desarrollo de
              liderazgo siendo en identidad en los proyectos que construyó.
            </h1>
            <Button
              variant="bordered"
              className="text-cyan-800 border-cyan-600 hover:bg-cyan-100"
            >
              Nuestra misión y visión
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
