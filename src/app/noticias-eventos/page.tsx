import { Bienvenida, NoticiasEventos } from "@/app/noticias-eventos/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias y Eventos — JCI Ambato",
  description:
    "Explora nuestras noticias y eventos que generan impacto positivo en la comunidad de Ambato.",
};

export default function NoticiasEventosPage() {
  return (
    <main>
      <Bienvenida />
      <div className="h-[640px]" aria-hidden="true"></div>
      <NoticiasEventos />
    </main>
  );
}
