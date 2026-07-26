import { Bienvenida, PoliticaPrivacidad } from "./components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Conoce cómo JCI Ambato recopila, usa y protege tus datos personales. Tu privacidad es importante para nosotros.",
  alternates: {
    canonical: "/politica-privacidad",
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <main>
      <Bienvenida />
      <div className="h-[640px]" aria-hidden="true"></div>

      <PoliticaPrivacidad />
    </main>
  );
}
