"use client";
import { useScroll } from "@/hooks";
import { InfoContainer } from "./info-container";
import { BackgroundImage } from "./background-video";
import { BorderFrame } from "./border-frame";
import { RotatedText } from "./rotated-text";

export default function Bienvenida() {
  const isScrolled = useScroll();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <BackgroundImage />
      {/* Capa de oscuridad para el video */}
      {/* <div className="absolute inset-0 bg-black/10 z-20" aria-hidden="true" /> */}
      {/* Marco que se dibuja en la pantalla */}
      <BorderFrame isScrolled={isScrolled} />
      {/* Contenedor principal de los elementos sobre el video */}
      <div className="relative z-30 flex h-full items-center">
        {/* Texto rotado - Aparece en pantallas grandes y desaparece en pantallas pequeñas */}
        <RotatedText />
        {/* Contenedor de información - Se ajusta al tamaño de la pantalla */}
        <InfoContainer />
      </div>

      {/* Degradado desde la derecha */}
      <div className="absolute inset-0 bg-gradient-to-bl from-jci-navy to-transparent opacity-30 z-20" aria-hidden="true" />
    </section>
  );
}
