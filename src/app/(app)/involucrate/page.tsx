import { Metadata } from "next";
import {
  Bienvenida,
  Acciones,
  Beneficios,
  Cursos,
  Formulario,
} from "@/features/involucrate/components";

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
    <>
      <Bienvenida />
      <Acciones />
      <Beneficios />
      <Cursos />
      <Formulario />
    </>
  );
}
