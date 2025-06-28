"use client";

import {
  Bienvenida,
  Presentacion,
  Grupo,
  Premios,
  NoticiasEventos,
  Aliados,
} from "@/components/sections/inicio";

export default function HomePage() {
  return (
    <div>
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
