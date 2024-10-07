import {
  InicioSeccion,
  Presentacion,
  Grupo,
  Premios,
  Aliados,
  NoticiasEventos,
} from "@/components/sections";

export default function Inicio() {
  return (
    <div className="relative flex flex-col">
      {/* <div className="relative flex flex-col flex-auto pt-14"> */}

      {/* Sección de Inicio */}
      <InicioSeccion />

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
