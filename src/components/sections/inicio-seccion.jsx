"use client";

import { Button } from "@nextui-org/react";
import { useScroll } from "@/hooks";

export default function InicioSeccion() {
  const isScrolled = useScroll();

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-labelledby="section-title"
    >
      {/* Video de fondo */}
      <video
        src="/rotary.mp4"
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
            ${isScrolled ? "border-[22px] lg:border-[50px]" : "border-0"}`}
      />

      {/* Contenedor principal de los elementos sobre el video */}
      <div className="relative z-30 flex items-center h-full">
        {/* Texto rotado - Aparece en pantallas grandes y desaparece en pantallas pequeñas */}
        <div className="hidden h-full lg:flex items-center justify-center w-12">
          <p className="text-[8px] tracking-widest text-gray-400 font-semibold -rotate-90 whitespace-nowrap">
            BIENVENIDO A LA RED GLOBAL DE LÍDERES QUE TRANSFORMAN EL MUNDO
          </p>
        </div>

        {/* Contenedor de información - Se ajusta al tamaño de la pantalla */}
        <div className="ml-12 mr-12 lg:ml-24 text-left max-w-xl">
          <h2 className="text-sm lg:text-sm font-bold mb-5 text-yellow-400">
            IMPULSANDO EL CAMBIO
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold mb-5 text-cyan-600">
            Líderes en Acción: Impactando el Futuro
          </h1>
          <p className="text-sm lg:text-base mt-7 mb-4 -text-balance text-white">
            Con cada proyecto, impulsamos el cambio a través de la innovación,
            transformando ideas en soluciones que construyen comunidades más
            fuertes y mejoran vidas.
          </p>

          {/* Botón de acción */}
          <Button className="relative mt-4 text-white group overflow-hidden bg-cyan-600">
            {/* Transicion de llenado, puntero entra al botón */}
            <span className="absolute inset-0 w-full h-full bg-cyan-950 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative z-10">Sobre Nosotros</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
