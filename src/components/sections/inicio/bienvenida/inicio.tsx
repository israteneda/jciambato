"use client";
import { InfoContainer } from "./info-container";
import BackgroundVideo from "./background-video";
import { BorderFrame } from "./border-frame";
import { RotatedText } from "./rotated-text";

import { useScroll } from "@/hooks";

export default function Bienvenida() {
  const isScrolled = useScroll();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <BackgroundVideo />
      {/* Capa de oscuridad para el video */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/60 z-20" />
      {/* Marco que se dibuja en la pantalla */}
      <BorderFrame isScrolled={isScrolled} />
      {/* Contenedor principal de los elementos sobre el video */}
      <div className="relative z-30 flex h-full items-center">
        {/* Texto rotado - Aparece en pantallas grandes y desaparece en pantallas pequeñas */}
        <RotatedText />
        {/* Contenedor de información - Se ajusta al tamaño de la pantalla */}
        <InfoContainer />
      </div>
    </section>
  );
}
