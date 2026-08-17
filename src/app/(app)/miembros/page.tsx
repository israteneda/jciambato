import {
  Bienvenida,
  JuntaDirectiva,
  Miembros,
  Senadores,
  MiembrosNacionales,
} from "@/features/miembros/components";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestros Miembros — Conoce al Equipo",
  description:
    "Conoce a nuestro equipo de líderes juveniles, junta directiva, miembros activos y senadores de JCI Ambato.",
  alternates: {
    canonical: "/miembros",
  },
};

export default function MiembrosPage() {
  return (
    <>
      <Bienvenida />
      <div className="h-190" aria-hidden="true"></div>
      <JuntaDirectiva />
      <Miembros />
      <Senadores />
      <MiembrosNacionales />
      {/* <PasadosPresidentes /> */}
    </>
  );
}
