import {
  Bienvenida,
  Presentacion,
  Grupo,
  Premios,
  Aliados,
  NoticiasEventos,
} from "@/components/sections";

export default function Inicio() {
  return (
    <div className="flex flex-col space-y-32 md:space-y-40">
      {/* Sección de Bienvenida */}
      <Bienvenida />

      {/* Sección Presentación */}
      <Presentacion />

      {/* Seccion Grupo */}
      <Grupo />

      {/* Seccion Premios */}
      <Premios />

      {/* Aliados */}
      <Aliados />

      {/* Noticias y Eventos */}
      <NoticiasEventos />
    </div>
  );
}
