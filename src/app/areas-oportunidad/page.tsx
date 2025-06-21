import AreasOportunidad from "@/components/sections/areas-oportunidad/areas-oportunidad";
import Bienvenida from "@/components/sections/areas-oportunidad/inicio";

export const metadata = {
  title: "Áreas de Oportunidad — Desarrolla tu Potencial",
  description: "Página de Áreas de Oportunidad",
};

export default function AreasOportunidadPage() {
  return (
    <div>
      {/* Sección de Bienvenida */}
      <Bienvenida />

      {/* Seccion de Áreas de Oportunidad	 */}
      <AreasOportunidad />
    </div>
  );
}
