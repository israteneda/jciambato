"use client";
import { useScroll } from "@/hooks";
import clsx from "clsx";

export default function Bienvenida() {
  const isScrolled = useScroll();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* <BackgroundImage /> */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-10"
        style={{
          backgroundImage: "url('/images/miembros.jpeg')",
        }}
        aria-label="Imagen de presentación de la organización"
        aria-hidden="true"
      />

      {/* Capa de oscuridad para el video */}
      <div className="absolute inset-0 bg-black/00 z-20" aria-hidden="true" />
      {/* Marco que se dibuja en la pantalla */}
      {/* <BorderFrame isScrolled={isScrolled} /> */}
      <div
        className={clsx(
          "absolute inset-0 border-gray-50 z-30 transition-all duration-300 transform",
          isScrolled ? "border-[22px] lg:border-[55px]" : "border-0"
        )}
        aria-hidden="true"
      />


      {/* Contenedor principal de los elementos sobre el video */}
      <div className="relative z-30 flex h-full items-center">
        {/* Texto rotado - Aparece en pantallas grandes y desaparece en pantallas pequeñas */}
        {/* <RotatedText /> */}
        <aside className="hidden lg:flex items-center justify-center w-14 h-full">
          <span className="text-[10.5px] tracking-widest font-semibold text-gray-900 -rotate-90 whitespace-nowrap">
            FORMA PARTE DE NUESTRO GRUPO
          </span>
        </aside>

        {/* Contenedor de información - Se ajusta al tamaño de la pantalla */}
        {/* <InfoContainer /> */}
        <div className="mx-11 max-w-xl text-left lg:ml-28">
          <h2 className="mb-7 text-sm font-bold text-cyan-600 lg:text-base">INVOLÚCRATE</h2>
          <h1 id="section-title" className="mb-10 text-4xl font-bold text-gray-900 lg:text-6xl">
            Empieza siendo Junior
          </h1>
          <p className="mt-7 mb-4 text-sm text-gray-900 lg:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, sapiente corporis non
            accusamus numquam reprehenderit.
          </p>
        </div>

      </div>

      {/* Degradado desde la derecha */}
      <div className="absolute inset-0 bg-gradient-to-bl from-jci-seafoam to-transparent opacity-30 z-20" aria-hidden="true" />
    </section>
  );
}
