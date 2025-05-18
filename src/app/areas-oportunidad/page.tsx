import AreasOportunidad from "@/components/sections/areas-oportunidad/areasOportunidad";
import Bienvenida from "@/components/sections/areas-oportunidad/bienvenida/inicio";

export const metadata = {
  title: "Áreas de Oportunidad",
  description: "Página de Áreas de Oportunidad",
};

export default function Inicio() {
  return (
    <div>
      {/* Sección de Bienvenida */}
      <Bienvenida />

      {/* Seccion de Áreas de Oportunidad	 */}
      <AreasOportunidad />
    </div>
  );
}
