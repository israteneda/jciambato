"use client"
import { Proyecto } from "@/data/proyectos";
import Image from "next/image";
import { useState } from "react";

interface GaleriaProps {
    proyecto: Proyecto;
}

export default function Galeria({ proyecto }: GaleriaProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    if (!proyecto.galeria || proyecto.galeria.length === 0) {
        return null;
    }

    return (
        <section className="relative bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-jci-off-black mb-4">
                        Galería de Imágenes
                    </h2>
                    <p className="text-lg text-jci-black max-w-3xl mx-auto">
                        Explora los momentos más destacados de {proyecto.titulo}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {proyecto.galeria.map((imagen, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                            onClick={() => setSelectedImage(index)}
                        >
                            <div className="relative h-64 w-full">
                                <Image
                                    src={imagen}
                                    alt={`${proyecto.titulo} - Imagen ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal para vista ampliada */}
                {selectedImage !== null && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-4xl max-h-full">
                            <button
                                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
                                onClick={() => setSelectedImage(null)}
                            >
                                ×
                            </button>
                            <div className="relative h-96 w-full">
                                <Image
                                    src={proyecto.galeria[selectedImage]}
                                    alt={`${proyecto.titulo} - Imagen ${selectedImage + 1}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-white text-center mt-4">
                                Imagen {selectedImage + 1} de {proyecto.galeria.length}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
} 