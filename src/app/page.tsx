"use client";

import {
  BienvenidaV3,
  Presentacion,
  Grupo,
  Premios,
  NoticiasEventos,
  Aliados,
} from "@/components/sections/inicio";

export default function HomePage() {
  return (
    <div>
      {/* Static Content - siempre mostrar inmediatamente */}
      {/* Sección de Bienvenida (V1, V2 y V3 Disponibles) */}
      <BienvenidaV3 />

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
