"use client";

import { Button } from "@heroui/button";
import { useScroll } from "@/hooks";

// Componente para el video de fondo
const BackgroundVideo = () => (
  <video
    src="/rotary.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-10"
    aria-label="Video de presentación de la organización"
    aria-hidden="true"
  />
);

// Componente para la capa de oscuridad sobre el video
const DarkOverlay = () => (
  <div className="absolute inset-0 bg-black/40 z-20" aria-hidden="true"></div>
);

// Componente para el marco que se dibuja en la pantalla
const BorderFrame = ({ isScrolled }) => (
  <div
    className={`absolute inset-0 border-white z-30 transition-all duration-300 transform ${
      isScrolled ? "border-[22px] lg:border-[55px]" : "border-0"
    }`}
    aria-hidden="true"
  />
);

// Componente para el texto rotado
const RotatedText = () => (
  <aside className="hidden lg:flex items-center justify-center w-14 h-full">
    <span className="text-[10.5px] tracking-widest font-semibold text-gray-400 -rotate-90 whitespace-nowrap">
      BIENVENIDO A LA RED GLOBAL DE LÍDERES QUE TRANSFORMAN EL MUNDO
    </span>
  </aside>
);

// Componente para el contenedor de información
const InfoContainer = () => (
  <div className="mx-12 max-w-xl text-left lg:ml-28">
    <h2 className="mb-7 text-sm font-bold text-yellow-400 lg:text-base">
      IMPULSANDO EL CAMBIO
    </h2>
    <h1
      id="section-title"
      className="mb-10 text-4xl font-bold text-cyan-600 lg:text-6xl"
    >
      Líderes que Impactan el Futuro
    </h1>
    <p className="mt-7 mb-4 text-sm text-white lg:text-base">
      Con cada proyecto, impulsamos el cambio a través de la innovación,
      transformando ideas en soluciones que construyen comunidades más fuertes y
      mejoran vidas.
    </p>
    <Button
      radius="none"
      className="relative mt-4 bg-cyan-600 text-white group overflow-hidden"
      aria-label="Más información sobre nosotros"
    >
      <span className="absolute inset-0 w-full h-full transform -translate-x-full bg-cyan-950 transition-transform duration-300 group-hover:translate-x-0"></span>
      <span className="relative z-10">Sobre Nosotros</span>
    </Button>
  </div>
);

export default function Bienvenida() {
  const isScrolled = useScroll();

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-labelledby="section-title"
    >
      {/* Video de fondo */}
      <BackgroundVideo />
      {/* Capa de oscuridad para el video */}
      <DarkOverlay />
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
