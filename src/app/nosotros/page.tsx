import Bienvenida from "@/components/sections/nosotros/bienvenida/inicio";

export const metadata = {
  title: "Nosotros",
  description: "Página de Nosotros",
};

export default function Inicio() {
  return (
    <div className="relative flex flex-col">
      <Bienvenida />
    </div>
  );
}
