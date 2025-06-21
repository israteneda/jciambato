import { Metadata } from "next";
import Bienvenida from "@/components/sections/involucrate/inicio";
import Accion from "@/components/sections/involucrate/accion";

export const metadata: Metadata = {
  title: "Involúcrate — Únete a JCI Ambato",
  description: "Página de Involucrate",
};

export default function InvolucratePage() {
  return (
    <div>
      {/* Sección de Bienvenida */}
      <Bienvenida />

      <Accion />
    </div>
  );
}
