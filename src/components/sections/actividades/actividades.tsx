import ActividadesPorArea from "./actividades-por-area";

export default function Actividades() {
    return (
        <section className="relative bg-transparent z-10" aria-labelledby="actividades-contenido-heading">
            <header className="sr-only">
                <h2 id="actividades-contenido-heading">Contenido de Actividades</h2>
            </header>

            <div>
                <div className="relative z-10 w-full transition-all duration-300 opacity-[1]">
                    <div className="relative z-[1] mx-auto h-full">
                        <ActividadesPorArea />
                    </div>
                </div>
            </div>
        </section>
    );
}
