import { Metadata } from "next";
import Bienvenida from "@/components/sections/involucrate/inicio";
import Accion from "@/components/sections/involucrate/accion";
import Beneficios from "@/components/sections/involucrate/beneficios";
import Formulario from "@/components/sections/involucrate/formulario";

export const metadata: Metadata = {
  title: "Involúcrate — Únete a JCI Ambato",
  description: "Página de Involucrate",
};

export default function InvolucratePage() {
  return (
    <div className="relative">
      {/* Sección de Bienvenida */}
      <Bienvenida />

      {/* Bloque espaciado */}
      <div className="h-[650px]"></div>
      <div
        className="absolute top-0 w-full h-full bg-gray-50"
        style={{ transform: 'translateY(99.9vh)' }}
      >
      </div>

      <Accion />

      <Beneficios />

      <Formulario />

    </div>
  );
}
