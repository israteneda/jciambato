import Bienvenida from "@/components/sections/nosotros/bienvenida/inicio";
import Presentacion from "@/components/sections/nosotros/presentacion";

export const metadata = {
  title: "Nosotros",
  description: "Página de Nosotros",
};

export default function Inicio() {
  return (
    <div className="">
      <Bienvenida />

      {/* Bloque scroll */}
      <div className="h-[640px]"></div>
      <div
        className="absolute top-0 w-full h-[640px] bg-[rgb(245,245,245)]"
        style={{ transform: 'translateY(99.9vh)' }}
      >
      </div>

      <Presentacion />
    </div>
  );
}
