"use client"
import { Proyecto } from "@/data/proyectos";
import Image from "next/image";

interface EquipoProps {
    proyecto: Proyecto;
}

export default function Equipo({ proyecto }: EquipoProps) {
    if (!proyecto.equipo || proyecto.equipo.length === 0) {
        return null;
    }

    return (
        <section className="relative bg-white py-20">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-jci-off-black mb-4">
                        Equipo del Proyecto
                    </h2>
                    <p className="text-lg text-jci-black max-w-3xl mx-auto">
                        Conoce a los profesionales que hacen posible {proyecto.titulo}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {proyecto.equipo.map((miembro, index) => (
                        <div
                            key={index}
                            className="text-center group"
                        >
                            <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
                                {miembro.imagen ? (
                                    <Image
                                        src={miembro.imagen}
                                        alt={miembro.nombre}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-jci-aqua flex items-center justify-center">
                                        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-jci-off-black mb-2">
                                {miembro.nombre}
                            </h3>
                            <p className="text-jci-aqua font-semibold">
                                {miembro.rol}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 