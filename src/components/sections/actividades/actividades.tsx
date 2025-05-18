import ActividadesPorArea from "./actividadesPorArea";

export default function Actividades() {
    return (
        <section className="relative bg-transparent z-10">
            <div>
                <div className="relative z-10 w-full transition-all duration-300 opacity-[1]">
                    <div className="realtive z-[1] mx-auto h-full">
                        <ActividadesPorArea />
                    </div>
                </div>
            </div>
        </section>
    );
}
