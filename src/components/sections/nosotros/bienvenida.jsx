"use client";

import { Button } from "@nextui-org/button";
import { useScroll } from "@/hooks";
import Image from "next/image";

export default function Bienvenida() {
  const isScrolled = useScroll();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Imagen de Fonod */}
      <Image
        /* src="/group.jpg" */
        src="/lideralider2.jpeg"
        alt="Grupo JCI Ambato Lider a Lider 2024"
        layout="fill"
        objectFit="cover"
        priority
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

        {/* Contenedor de información - Se ajusta al tamaño de la pantalla */}
        <div className="ml-12 mr-12 lg:ml-16 text-left max-w-xl">
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
