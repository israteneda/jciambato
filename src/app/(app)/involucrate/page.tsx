import { Metadata } from "next";
import { Bienvenida, Acciones, Beneficios, Cursos, Formulario } from "@/features/involucrate/components";

export const metadata: Metadata = {
  title: "Involúcrate — Únete a JCI Ambato",
  description:
    "Únete a JCI Ambato y forma parte del cambio. Descubre los beneficios de ser miembro y cómo puedes contribuir al desarrollo de la comunidad.",
  alternates: {
    canonical: "/involucrate",
  },
};

export default function InvolucratePage() {
  return (
    <main className="relative" role="main" aria-label="Página de Involúcrate">
      <Bienvenida />

      {/* Bloque espaciado */}
      <div className="h-[640px]" aria-hidden="true"></div>
      <div
        className="absolute top-0 h-full w-full bg-jci-bg"
        style={{ transform: "translateY(99.9vh)" }}
        aria-hidden="true"
      ></div>

      <Acciones />
      <Beneficios />
      <Cursos />
      <Formulario />
    </main>
  );
}
