import Proyectos from "@/features/proyectos/components/proyectos";
import Bienvenida from "@/features/proyectos/components/bienvenida";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos — Impacto y Acción en la Comunidad",
  description: "Explora nuestros proyectos que generan impacto positivo en la comunidad de Ambato.",
  alternates: {
    canonical: "/proyectos",
  },
};

export default function ProyectosPage() {
  return (
    <>
      <Bienvenida />
      <div className="h-160" aria-hidden="true"></div>
      <Proyectos />
    </>
  );
}
