"use client";

import {
  Presentacion,
  Grupo,
  Impacto,
  ProyectosDestacados,
  NoticiasEventos,
  Aliados,
  BienvenidaV3,
} from "@/app/(inicio)/components";
import Image from "next/image";
import { FAQSection } from "@/components/ui/FAQSection";
import { faqsInicio } from "@/data/faqs";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Sección de Bienvenida (V1, V2, V3 y V4 Disponibles) */}
      <BienvenidaV3 />
      <Presentacion />
      <Grupo />

      {/* Contenedor para las imágenes posicionadas */}
      <div className="relative">
        {/* Imagen izquierda */}
        <Image
          src="/images/figura.png"
          alt="Imagen desde la izquierda"
          className="hidden lg:block absolute -left-28 -translate-y-full w-auto h-96 object-cover"
          width={400}
          height={320}
        />
        {/* Imagen derecha */}
        <Image
          src="/images/figura.png"
          alt="Imagen desde la derecha"
          className="hidden lg:block absolute -translate-y-10 -right-28 w-auto h-96 object-cover"
          width={400}
          height={320}
        />
      </div>

      <Impacto />
      <ProyectosDestacados />
      <Aliados />
      <NoticiasEventos />

      {/* Sección de Preguntas Frecuentes */}
      <FAQSection
        faqs={faqsInicio}
        className="bg-gray-50"
        title="Preguntas Frecuentes"
        subtitle="Encuentra respuestas a las dudas más comunes sobre JCI Ambato"
      />
    </div>
  );
}
