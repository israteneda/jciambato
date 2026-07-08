import { Bienvenida, JuntaDirectiva, Miembros, Senadores } from "@/app/miembros/components";
import MiembrosNacionales from "@/app/miembros/components/miembros-nacionales";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestros Miembros — Conoce al Equipo",
  description:
    "Conoce a nuestro equipo de líderes juveniles, junta directiva, miembros activos y senadores de JCI Ambato.",
};

export default function MiembrosPage() {
  return (
    <main className="relative">
      <Bienvenida />

      {/* Bloque espaciado para efecto de scroll */}
      <div className="h-screen" aria-hidden="true"></div>
      <div
        className="absolute top-0 h-full w-full bg-jci-bg"
        style={{ transform: "translateY(100vh)" }}
        aria-hidden="true"
      ></div>

      <JuntaDirectiva />
      <Miembros />
      <Senadores />
      <MiembrosNacionales />
      {/* <PasadosPresidentes /> */}
    </main>
  );
}
