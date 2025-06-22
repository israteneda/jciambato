import AreasOportunidad from "@/components/sections/areas-oportunidad/areas-oportunidad";
import Bienvenida from "@/components/sections/areas-oportunidad/inicio";

export const metadata = {
  title: "Áreas de Oportunidad — Desarrolla tu Potencial",
  description: "Descubre nuestras áreas de impacto: Negocios y Emprendimiento, Cooperación Internacional, Desarrollo Individual e Impacto en la Comunidad.",
};

export default function AreasOportunidadPage() {
  return (
    <div className="relative">
      <Bienvenida />

      <AreasOportunidad />
    </div>
  );
}
