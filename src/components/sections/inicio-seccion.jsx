"use client";

import { Button } from "@nextui-org/react";
import { useScroll } from "@/hooks";

export default function InicioSeccion() {
  const isScrolled = useScroll();

  return (
    <div>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video de fondo */}
        <video
          src="https://www.rotary.org/sites/default/files/2018_156_PowerInOurConnections_Omnibus30_NOVO_1080-v2.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-10"
          aria-label="Video de presentación de la organización"
        />

        {/* Capa de oscuridad para el video */}
        <div className="absolute inset-0 bg-black opacity-40 z-20" />

        {/* Marco que se dibuja en la pantalla */}
        <div
          className={`absolute inset-0 w-full h-full border-solid border-white z-30 transition-all duration-300 transform
            ${isScrolled ? "border-[20px] lg:border-[50px]" : "border-0"}`}
        />

        {/* Contenedor principal de los elementos sobre el video */}
        <div className="relative z-30 flex items-center h-full px-0">
          {/* Texto rotado - Aparece en pantallas grandes y desaparece en pantallas pequeñas */}
          <div className="hidden lg:flex items-center justify-center w-12">
            <p className="text-[9px] tracking-widest text-gray-400 -rotate-90 whitespace-nowrap">
              BIENVENIDO A LA ORGANIZACIÓN MÁS IMPORTANTE DEL MUNDO
            </p>
          </div>

          {/* Contenedor de información - Se ajusta al tamaño de la pantalla */}
          <div className="ml-12 mr-12 lg:ml-24 text-left max-w-xl">
            <h2 className="text-sm lg:text-lg font-bold mb-4 text-yellow-400">
              ENTUSIASTAS POR EL CAMBIO
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-cyan-600">
              Somos Gente <br /> de Acción
            </h1>
            <p className="mt-7 mb-4 text-sm text-white">
              Vemos cada proyecto como un nuevo desafío. Nuestra capacidad para
              construir e innovar supera todos los obstáculos.
            </p>
            <Button className="mt-4 bg-cyan-600 hover:bg-cyan-800 text-white">
              Sobre Nosotros
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
