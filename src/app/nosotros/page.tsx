import ActividadesAnuales from "@/components/sections/nosotros/actividadesAnuales";
import Bienvenida from "@/components/sections/nosotros/bienvenida/inicio";
import MisionVision from "@/components/sections/nosotros/misionVision";
import Presentacion from "@/components/sections/nosotros/presentacion";
import Valores from "@/components/sections/nosotros/valores";

export const metadata = {
  title: "Nosotros",
  description: "Página de Nosotros",
};

export default function Inicio() {
  return (
    <div>
      <Bienvenida />

      {/* Bloque espaciado */}
      <div className="h-[700px] md:h-[640px]"></div>
      <div
        className="absolute top-0 w-full h-full bg-gray-50"
        style={{ transform: 'translateY(99.9vh)' }}
      >
      </div>

      <Presentacion />

      <MisionVision />

      <Valores />

      {/* <DescripcionPersonal /> */}

      <ActividadesAnuales />
    </div>
  );
}
