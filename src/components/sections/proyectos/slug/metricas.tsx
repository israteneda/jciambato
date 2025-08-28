"use client"
import { Proyecto } from "@/data/proyectos";

interface MetricasProps {
    proyecto: Proyecto;
}

export default function Metricas({ proyecto }: MetricasProps) {
    if (!proyecto.metricas || proyecto.metricas.length === 0) {
        return null;
    }

    return (
        <section className="relative bg-jci-aqua py-20">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Impacto y Resultados
                    </h2>
                    <p className="text-lg text-white/90 max-w-3xl mx-auto">
                        Los números que demuestran el éxito de {proyecto.titulo}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {proyecto.metricas.map((metrica, index) => (
                        <div
                            key={index}
                            className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-4">
                                {metrica.valor}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {metrica.titulo}
                            </h3>
                            {metrica.descripcion && (
                                <p className="text-sm text-white/80">
                                    {metrica.descripcion}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 