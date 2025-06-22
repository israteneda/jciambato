import Bienvenida from "@/components/sections/miembros/inicio";
import Miembros from "@/components/sections/miembros/miembros";
import MiembrosGenerales from "@/components/sections/miembros/miembros-generales";
import Senadores from "@/components/sections/miembros/senadores";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestros Miembros — Conoce al Equipo",
  description: "Conoce a nuestro equipo de líderes juveniles, junta directiva, miembros activos y senadores de JCI Ambato.",
};

export default function MiembrosPage() {
  return (
    <div className="relative">
      {/* Sección de Bienvenida */}
      <Bienvenida />

      {/* Bloque espaciado para efecto de scroll */}
      <div className="h-screen"></div>
      <div
        className="absolute top-0 w-full h-full bg-gray-50"
        style={{ transform: 'translateY(100vh)' }}
      >
      </div>

      {/* Sección de Miembros */}
      <Miembros />

      {/* Sección de Miembros Generales */}
      <MiembrosGenerales />

      {/* Sección de Senadores */}
      <Senadores />
    </div>
  );
}
