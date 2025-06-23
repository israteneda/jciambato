import Proyectos from "@/components/sections/proyectos/proyectos";
import Bienvenida from "@/components/sections/proyectos/bienvenida";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Proyectos — Impacto y Acción en la Comunidad",
  description: "Explora nuestros proyectos que generan impacto positivo en la comunidad de Ambato.",
};


export default function ProyectosPage() {
  return (
    <main>
      {/* Sección de Bienvenida */}

      <Bienvenida />
      <div className="h-[640px]" aria-hidden="true"></div>

      <Proyectos />

    </main>
  );
}
