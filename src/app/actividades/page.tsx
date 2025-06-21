import Actividades from "@/components/sections/actividades/actividades";
import Bienvenida from "@/components/sections/actividades/bienvenida";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Actividades — Impacto y Acción en la Comunidad",
  description: "Página de Actividades",
};


export default function ActividadesPage() {
  return (
    <div>
      {/* Sección de Bienvenida */}

      <Bienvenida />
      <div className="h-[640px]"></div>

      <Actividades />

    </div>
  );
}
