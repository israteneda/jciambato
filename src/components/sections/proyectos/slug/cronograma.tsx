"use client"
import { Proyecto } from "@/data/proyectos";
import Image from "next/image";

interface CronogramaProps {
    proyecto: Proyecto;
}

export default function Cronograma({ proyecto }: CronogramaProps) {
    if (!proyecto.cronograma || !proyecto.cronograma.eventos) {
        return null;
    }

    return (
        <section className="relative bg-white py-24">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-jci-off-black mb-4">
                        Cronograma
                    </h2>
                    <p className="text-lg text-jci-black max-w-3xl mx-auto">
                        Descubre las fechas importantes y eventos que marcan el desarrollo de <strong>{proyecto.titulo}</strong>
                    </p>
                </div>

                <div className="text-center my-14">
                    <p className="text-xl text-jci-black max-w-3xl mx-auto uppercase font-semibold">
                        Semana 1 - Fundamentos
                    </p>
                </div>

                <div className="relative">
                    {/* Línea de tiempo vertical */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-1 bg-jci-aqua h-full"></div>

                    <div className="space-y-12">
                        {proyecto.cronograma.eventos.map((evento, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    } flex-col md:gap-16`}
                            >
                                {/* Punto en la línea de tiempo */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-jci-aqua rounded-full border-4 border-white shadow-lg z-10"></div>

                                {/* Contenido del evento */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} mt-8 md:mt-0`}>
                                    <div className="flex flex-col bg-gray-50 p-8 rounded-lg shadow-sm">
                                                <div className="text-sm font-semibold text-jci-aqua uppercase tracking-wider mb-2">
                                                    {evento.fecha}
                                                </div>
                                        <div className="flex justify-between gap-10">
                                            <div className="flex flex-col">
                                                <h3 className="text-xl font-bold text-jci-off-black mb-3">
                                                    {evento.titulo}
                                                </h3>
                                                <p className="text-jci-black mb-4">
                                                    {evento.descripcion}
                                                </p>

                                                {evento.lugar && (
                                                    <div className="flex items-center text-sm text-jci-black">
                                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                        </svg>
                                                        {evento.lugar}
                                                    </div>
                                                )}
                                            </div>


                                            <div className="flex flex-col items-center">
                                                <figure className="lg:w-28 lg:h-28 mb-3">
                                                    <Image
                                                        src={evento.capacitador.imagen || "/default-image.png"}
                                                        alt={`Foto de ${evento.capacitador.nombre}`}
                                                        width={256}
                                                        height={256}
                                                        className="w-full h-full object-cover rounded-full"
                                                    />
                                                </figure>
                                                <div className="flex flex-col justify-center text-center">
                                                    <h3 className="font-bold text-sm text-gray-800">{evento.capacitador.nombre}</h3>
                                                    <p className="text-xs text-gray-500 mb-3">{evento.capacitador.origen}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="text-center my-14">
                    <p className="text-xl text-jci-black max-w-3xl mx-auto uppercase font-semibold">
                        Semana 2 - Refuerzo
                    </p>
                </div>

                <div className="relative">
                    {/* Línea de tiempo vertical */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-1 bg-jci-aqua h-full"></div>

                    <div className="space-y-12">
                        {proyecto.cronograma.eventos2.map((evento, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    } flex-col md:gap-16`}
                            >
                                {/* Punto en la línea de tiempo */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-jci-aqua rounded-full border-4 border-white shadow-lg z-10"></div>

                                {/* Contenido del evento */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} mt-8 md:mt-0`}>
                                    <div className="flex flex-col bg-gray-50 p-8 rounded-lg shadow-sm">
                                                <div className="text-sm font-semibold text-jci-aqua uppercase tracking-wider mb-2">
                                                    {evento.fecha}
                                                </div>
                                        <div className="flex justify-between gap-10">
                                            <div className="flex flex-col">
                                                <h3 className="text-xl font-bold text-jci-off-black mb-3">
                                                    {evento.titulo}
                                                </h3>
                                                <p className="text-jci-black mb-4">
                                                    {evento.descripcion}
                                                </p>

                                                {evento.lugar && (
                                                    <div className="flex items-center text-sm text-jci-black">
                                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                        </svg>
                                                        {evento.lugar}
                                                    </div>
                                                )}
                                            </div>


                                            <div className="flex flex-col items-center">
                                                <figure className="lg:w-28 lg:h-28 mb-3">
                                                    <Image
                                                        src={evento.capacitador.imagen || "/default-image.png"}
                                                        alt={`Foto de ${evento.capacitador.nombre}`}
                                                        width={256}
                                                        height={256}
                                                        className="w-full h-full object-cover rounded-full"
                                                    />
                                                </figure>
                                                <div className="flex flex-col justify-center text-center">
                                                    <h3 className="font-bold text-sm text-gray-800">{evento.capacitador.nombre}</h3>
                                                    <p className="text-xs text-gray-500 mb-3">{evento.capacitador.origen}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
} 