import ProyectosPorArea from "./proyectos-por-area";

export default function Proyectos() {
    return (
        <section className="relative bg-transparent z-10" aria-labelledby="proyectos-contenido-heading">
            <header className="sr-only">
                <h2 id="proyectos-contenido-heading">Contenido de Proyectos</h2>
            </header>

            <div>
                <div className="relative z-10 w-full transition-all duration-300 opacity-[1]">
                    <div className="relative z-[1] mx-auto h-full">
                        <ProyectosPorArea />
                    </div>
                </div>
            </div>
        </section>
    );
}
