"use client";

import {
  Presentacion,
  Grupo,
  Impacto,
  ProyectosDestacados,
  NoticiasEventos,
  Aliados,
  Bienvenida,
} from "@/features/home/components";
import Image from "next/image";
import { FAQSection } from "@/components/ui/FAQSection";
import { faqsInicio } from "@/features/home/data/faqs";

/**
 * SEO: No necesitamos page-specific JSON-LD aquí.
 *
 * Los esquemas WebSite y Organization (inyectados en el root layout)
 * son suficientes para que Google entienda la página de inicio.
 */
export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Sección de Bienvenida */}
      <Bienvenida />
      <Presentacion />
      <Grupo />

      {/* Contenedor para las imágenes posicionadas */}
      <div className="relative">
        <Image
          src="/images/figura.png"
          alt="Imagen desde la izquierda"
          className="absolute -left-28 hidden h-96 w-auto -translate-y-full object-cover lg:block"
          width={400}
          height={320}
        />
        <Image
          src="/images/figura.png"
          alt="Imagen desde la derecha"
          className="absolute -right-28 hidden h-96 w-auto -translate-y-10 object-cover lg:block"
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
