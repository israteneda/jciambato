import {
  Bienvenida,
  AreasOportunidad,
} from "@/components/sections/areas-oportunidad";

export const metadata = {
  title: "Áreas de Oportunidad — Desarrolla tu Potencial",
  description: "Descubre nuestras áreas de impacto: Negocios y Emprendimiento, Cooperación Internacional, Desarrollo Individual e Impacto en la Comunidad.",
};

export default function AreasOportunidadPage() {
  return (
    <main className="relative">
      <Bienvenida />
      <AreasOportunidad />
    </main>
  );
}
