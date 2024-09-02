import { InicioSeccion, Presentacion} from "@/components/sections";

export default function Inicio() {
  return (
    <div className="relative w-full">
      {/* Sección de Inicio */}
      <InicioSeccion />

      {/* Sección Presentación */}
      <Presentacion />
    </div>
  );
}
