import Actividades from "@/components/sections/actividades/actividades";
import Bienvenida from "@/components/sections/actividades/bienvenida";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Actividades — Impacto y Acción en la Comunidad",
  description: "Explora nuestros eventos, proyectos y actividades que generan impacto positivo en la comunidad de Ambato.",
};


export default function ActividadesPage() {
  return (
    <main>
      {/* Sección de Bienvenida */}

      <Bienvenida />
      <div className="h-[640px]" aria-hidden="true"></div>

      <Actividades />

    </main>
  );
}
