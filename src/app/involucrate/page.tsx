import { Metadata } from "next";
import Bienvenida from "@/components/sections/involucrate/inicio";
import Accion from "@/components/sections/involucrate/accion";
import Beneficios from "@/components/sections/involucrate/beneficios";
import Formulario from "@/components/sections/involucrate/formulario";

export const metadata: Metadata = {
  title: "Involúcrate — Únete a JCI Ambato",
  description: "Únete a JCI Ambato y forma parte del cambio. Descubre los beneficios de ser miembro y cómo puedes contribuir al desarrollo de la comunidad.",
};

export default function InvolucratePage() {
  return (
    <main className="relative" role="main" aria-label="Página de Involúcrate">
      {/* Sección de Bienvenida */}
      <Bienvenida />

      {/* Bloque espaciado */}
      <div className="h-[650px]" aria-hidden="true"></div>
      <div
        className="absolute top-0 w-full h-full bg-gray-50"
        style={{ transform: 'translateY(99.9vh)' }}
        aria-hidden="true"
      >
      </div>

      <Accion />

      <Beneficios />

      <Formulario />

    </main>
  );
}
