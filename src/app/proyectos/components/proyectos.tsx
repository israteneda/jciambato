import ProyectosPorArea from "./proyectos-por-area";

export default function Proyectos() {
  return (
    <section className="relative z-10 bg-transparent" aria-labelledby="proyectos-contenido-heading">
      <header className="sr-only">
        <h2 id="proyectos-contenido-heading">Contenido de Proyectos</h2>
      </header>

      <div>
        <div className="relative z-10 w-full opacity-[1] transition-all duration-300">
          <div className="relative z-10 mx-auto h-full">
            <ProyectosPorArea />
          </div>
        </div>
      </div>
    </section>
  );
}
