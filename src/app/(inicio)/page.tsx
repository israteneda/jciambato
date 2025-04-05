import {
  Bienvenida,
  Presentacion,
  Grupo,
  Premios,
  Aliados,
  NoticiasEventos,
} from "@/components/sections/inicio";

export default function Inicio() {
  return (
    <div className="">  {/* bg-[rgb(245,245,245)] */}
      {/* Sección de Bienvenida */}
      <Bienvenida />

      {/* Sección Presentación */}
      <Presentacion />

      {/* Seccion Grupo */}
      <Grupo />

      {/* Seccion Premios */}
      <Premios />

      {/* Aliados */}
      {/* <Aliados /> */}

      {/* Noticias y Eventos */}
      <NoticiasEventos />
    </div>
  );
}
