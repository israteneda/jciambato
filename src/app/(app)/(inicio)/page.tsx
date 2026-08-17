import {
  Presentacion,
  Grupo,
  ProyectosDestacados,
  NoticiasEventos,
  Aliados,
  Bienvenida,
  PreguntasFrecuentes,
} from "@/features/inicio/components";

/**
 * SEO: No necesitamos page-specific JSON-LD aquí.
 *
 * Los esquemas WebSite y Organization (inyectados en el root layout)
 * son suficientes para que Google entienda la página de inicio.
 */
export default function HomePage() {
  return (
    <>
      <Bienvenida />
      <Presentacion />
      <Grupo />
      <ProyectosDestacados />
      <Aliados />
      <NoticiasEventos />
      <PreguntasFrecuentes />
    </>
  );
}
