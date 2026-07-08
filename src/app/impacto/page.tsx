import { Bienvenida, Presentacion, Valores } from "@/app/impacto/components";

export const metadata = {
  title: "Impacto — Conoce que hacemos",
  description:
    "Conoce nuestro impacto a través de nuestras actividades anuales, misión, visión y valores que guían nuestro trabajo.",
  alternates: {
    canonical: "/impacto",
  },
};

export default function ImpactoPage() {
  return (
    <main className="relative">
      <Bienvenida />
      <Presentacion />
      <Valores />
    </main>
  );
}
