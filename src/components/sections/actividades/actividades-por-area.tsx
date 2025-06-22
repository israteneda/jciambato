'use client';

import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ActividadesPorArea() {
    // Estado para controlar el botón activo (0 = Todos, 1 = Negocios, etc.)
    const [activeButton, setActiveButton] = useState(0);

    // Categorías con sus contadores
    const categories = [
        { name: "Todos", count: 18 },
        { name: "Negocios y Emprendimiento", count: 18 },
        { name: "Cooperación Internacional", count: 18 },
        { name: "Desarrollo Individual", count: 18 },
        { name: "Impacto en la Comunidad", count: 18 },
    ];

    // Componente para renderizar una actividad individual
    const ActivityCard = ({ image, category, title, year, location }: {
        image: string;
        category: string;
        title: string;
        year: string;
        location: string;
    }) => (
        <article className="w-full md:w-1/2 mx-5 mb-20">
            <Link href="#" className="w-full" aria-label={`Ver detalles de ${title}`}>
                <figure className="h-[350px] md:h-[512px] overflow-hidden bg-gray-200">
                    <div className="relative bg-white w-full h-full overflow-hidden">
                        <Image
                            src={image}
                            alt={`Imagen de ${title}`}
                            width={500}
                            height={500}
                            className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                        />
                    </div>
                </figure>
                <div>
                    <div className="mt-8">
                        <p className="text-[13px] leading-[1.85] font-bold uppercase text-jci-gray tracking-[1px]">{category}</p>
                    </div>
                    <div className="my-2">
                        <h3 className="text-[22px] leading-[1.25] font-bold text-left text-jci-off-black">{title}</h3>
                    </div>

                    <p className="text-[14px] leading-[1.78] font-normal text-jci-aqua">
                        <strong>{year}. </strong>
                        {location}
                    </p>
                </div>
            </Link>
        </article>
    );

    // Contenido según la categoría seleccionada
    const renderContent = () => {
        switch (activeButton) {
            case 0:
                return (
                    <div className="relative flex flex-wrap mx-10">
                        <div className="flex flex-col md:flex-row w-full mt-16 items-center">
                            <ActivityCard
                                image="/images/secciones/actividades.jpg"
                                category="Naval Industry"
                                title="World Navigator"
                                year="2025"
                                location="Ambato, Ecuador"
                            />
                            <ActivityCard
                                image="/images/secciones/actividades.jpg"
                                category="Naval Industry"
                                title="World Navigator"
                                year="2025"
                                location="Ambato, Ecuador"
                            />
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="relative flex flex-wrap mx-10">
                        <div className="flex flex-col md:flex-row w-full mt-16 items-center">
                            <ActivityCard
                                image="/images/secciones/miembros.jpeg"
                                category="Naval Industry"
                                title="World Navigator"
                                year="2025"
                                location="Ambato, Ecuador"
                            />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="relative flex flex-wrap mx-10">
                        <div className="flex flex-col md:flex-row w-full mt-16 items-center">
                            <ActivityCard
                                image="/images/secciones/proyectos.webp"
                                category="Naval Industry"
                                title="World Navigator"
                                year="2025"
                                location="Ambato, Ecuador"
                            />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="relative flex flex-wrap mx-10">
                        <div className="flex flex-col md:flex-row w-full mt-16 items-center">
                            <ActivityCard
                                image="/images/secciones/proyectos.webp"
                                category="Naval Industry"
                                title="World Navigator"
                                year="2025"
                                location="Ambato, Ecuador"
                            />
                            <ActivityCard
                                image="/images/secciones/actividades.jpg"
                                category="Naval Industry"
                                title="World Navigator"
                                year="2025"
                                location="Ambato, Ecuador"
                            />
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="relative flex flex-wrap mx-10">
                        <div className="flex flex-col md:flex-row w-full mt-16 items-center">
                            <ActivityCard
                                image="/images/secciones/actividades.jpg"
                                category="Naval Industry"
                                title="World Navigator"
                                year="2025"
                                location="Ambato, Ecuador"
                            />
                            <ActivityCard
                                image="/images/secciones/actividades.jpg"
                                category="Naval Industry"
                                title="World Navigator"
                                year="2025"
                                location="Ambato, Ecuador"
                            />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <nav className="md:mx-24 p-12 box-border bg-gray-50" aria-label="Filtros de actividades por área">
                <div className="text-[13px] leading-[1.85] not-italic uppercase text-[#989898] font-bold">
                    Explora por área de oportunidad
                </div>
                <div className="flex flex-wrap gap-6 mt-5" role="tablist" aria-label="Categorías de actividades">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveButton(index)}
                            className={`text-left text-[30px] font-bold leading-[1.25] mr-[42px] transition duration-300 p-0 hover:text-gray-700 ${activeButton === index ? 'text-gray-800' : 'text-gray-400'
                                }`}
                            role="tab"
                            aria-selected={activeButton === index}
                            aria-controls={`panel-${index}`}
                            id={`tab-${index}`}
                        >
                            {category.name}
                            <sup className="inline text-[16px] font-normal pl-[10px] align-super">
                                {category.count}
                            </sup>
                        </button>
                    ))}
                </div>
            </nav>

            <div className="bg-white">
                {/* Contenedor con animación de transición */}
                <div className="transition-all duration-300 ease-in-out">
                    <div className="min-h-[650px]" role="tabpanel" aria-labelledby={`tab-${activeButton}`}>
                        {renderContent()}
                    </div>
                </div>

                <footer className="flex justify-center bg-white py-20">
                    <Button
                        radius="none"
                        size="lg"
                        className="relative bg-jci-aqua text-white group overflow-hidden"
                        aria-label="Ver más actividades y proyectos"
                    >
                        <span className="absolute inset-0 w-full h-full transform -translate-x-full bg-cyan-950 transition-transform duration-300 group-hover:translate-x-0"></span>
                        <span className="relative z-10">Ver más</span>
                    </Button>
                </footer>
            </div>
        </div>
    );
}