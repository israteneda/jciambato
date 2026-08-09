import { Bienvenida, PoliticaGestion } from "@/features/politica-gestion/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Gestión",
  description:
    "Conoce los principios y compromisos de JCI Ambato en gestión organizacional, calidad y mejora continua.",
  alternates: {
    canonical: "/politica-gestion",
  },
};

export default function PoliticaGestionPage() {
  return (
    <>
      <Bienvenida />
      <div className="h-160" aria-hidden="true"></div>
      <PoliticaGestion />
    </>
  );
}
