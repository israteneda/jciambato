import Bienvenida from "@/components/sections/miembros/inicio";
import Miembros from "@/components/sections/miembros/miembros";
import MiembrosGenerales from "@/components/sections/miembros/miembros-generales";
import Senadores from "@/components/sections/miembros/senadores";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestros Miembros — Conoce al Equipo",
  description: "Página de Miembros",
};

export default function MiembrosPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Sección de Bienvenida */}
      <Bienvenida />

      <Miembros />

      <MiembrosGenerales />

      <Senadores />
    </div>
  );
}
