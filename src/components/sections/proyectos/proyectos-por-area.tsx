'use client';

import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getAllAreas } from "@/data/areas-oportunidad";
import { getAllProyectos, getProyectosPorArea, getConteoProyectosPorArea, type Proyecto } from "@/data/proyectos";

export default function ProyectosPorArea() {
    // Estado para controlar el botón activo (0 = Todos, 1 = Negocios, etc.)
    const [activeButton, setActiveButton] = useState(0);
    
    // Estado para controlar la paginación
    const [currentPage, setCurrentPage] = useState(1);
    const proyectosPorPagina = 8;

    // Obtener áreas de oportunidad y conteo de proyectos
    const areas = getAllAreas();
    const conteoProyectos = getConteoProyectosPorArea();
    const totalProyectos = getAllProyectos().length;

    // Resetear página cuando cambie la categoría
    const handleCategoryChange = (index: number) => {
        setActiveButton(index);
        setCurrentPage(1);
    };

    // Categorías con sus contadores dinámicos
    const categories = [
        { name: "Todos", count: totalProyectos, slug: "todos" },
        ...areas.map(area => ({
            name: area.title,
            count: conteoProyectos[area.slug] || 0,
            slug: area.slug
        }))
    ];

    // Componente para renderizar una actividad individual
    const ActivityCard = ({ proyecto }: { proyecto: Proyecto }) => (
        <article className="w-full lg:w-1/2 mx-5 mb-20">
            <Link href={`/proyectos/${proyecto.slug}`} className="w-full" aria-label={`Ver detalles de ${proyecto.titulo}`}>
                <figure className="h-[350px] md:h-[512px] overflow-hidden bg-gray-200">
                    <div className="relative bg-white w-full h-full overflow-hidden">
                        <Image
                            src={proyecto.imagen}
                            alt={`Imagen de ${proyecto.titulo}`}
                            width={500}
                            height={500}
                            className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                        />
                    </div>
                </figure>
                <div>
                    <div className="mt-8">
                        <p className="text-[13px] leading-[1.85] font-bold uppercase text-jci-gray tracking-[1px]">{proyecto.subtitulo}</p>
                    </div>
                    <div className="my-2">
                        <h3 className="text-[22px] leading-[1.25] font-bold text-left text-jci-off-black">{proyecto.titulo}</h3>
                    </div>

                    <p className="text-[14px] leading-[1.78] font-normal text-jci-aqua">
                        <strong>{proyecto.fecha} - {proyecto.lugar}</strong>
                    </p>
                </div>
            </Link>
        </article>
    );

    // Contenido según la categoría seleccionada
    const renderContent = () => {
        let proyectosAMostrar = [];

        if (activeButton === 0) {
            // Mostrar todos los proyectos
            proyectosAMostrar = getAllProyectos();
        } else {
            // Mostrar proyectos de la categoría seleccionada
            const areaSeleccionada = categories[activeButton];
            proyectosAMostrar = getProyectosPorArea(areaSeleccionada.slug);
        }

        // Calcular proyectos para la página actual
        const inicio = 0;
        const fin = currentPage * proyectosPorPagina;
        const proyectosPaginaActual = proyectosAMostrar.slice(inicio, fin);

        // Agrupar proyectos en pares para el layout
        const proyectosAgrupados = [];
        for (let i = 0; i < proyectosPaginaActual.length; i += 2) {
            proyectosAgrupados.push(proyectosPaginaActual.slice(i, i + 2));
        }

        return (
            <div className="relative flex flex-wrap mx-10">
                {proyectosAgrupados.map((grupo, grupoIndex) => (
                    <div key={grupoIndex} className="flex flex-col md:flex-row w-full mt-16 items-center">
                        {grupo.map((proyecto) => (
                            <ActivityCard key={proyecto.id} proyecto={proyecto} />
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <nav className="md:mx-24 p-12 box-border bg-gray-50" aria-label="Filtros de proyectos por área">
                <div className="text-[13px] leading-[1.85] not-italic uppercase text-[#989898] font-bold">
                    Explora por área de oportunidad
                </div>
                <div className="flex flex-wrap gap-6 mt-5" role="tablist" aria-label="Categorías de proyectos">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => handleCategoryChange(index)}
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
                    {(() => {
                        let proyectosAMostrar = [];
                        if (activeButton === 0) {
                            proyectosAMostrar = getAllProyectos();
                        } else {
                            const areaSeleccionada = categories[activeButton];
                            proyectosAMostrar = getProyectosPorArea(areaSeleccionada.slug);
                        }

                        const totalProyectosCategoria = proyectosAMostrar.length;
                        const proyectosMostrados = currentPage * proyectosPorPagina;
                        const hayMasProyectos = proyectosMostrados < totalProyectosCategoria;

                        if (hayMasProyectos) {
                            return (
                                <Button
                                    radius="none"
                                    size="lg"
                                    className="relative bg-jci-aqua text-white group overflow-hidden"
                                    aria-label="Ver más proyectos"
                                    onPress={() => setCurrentPage(currentPage + 1)}
                                >
                                    <span className="absolute inset-0 w-full h-full transform -translate-x-full bg-[#003D62] transition-transform duration-300 group-hover:translate-x-0"></span>
                                    <span className="relative z-10">Ver más</span>
                                </Button>
                            );
                        }
                        return null;
                    })()}
                </footer>
            </div>
        </div>
    );
}