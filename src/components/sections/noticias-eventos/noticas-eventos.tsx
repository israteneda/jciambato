'use client';

import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getAllNoticiasEventos, getConteoNoticiasEventos, getNoticiasEventosPorTipo, type NoticiaEvento } from "@/data/noticias-eventos";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function NoticiasEventosPorTipo() {
    // Estado para controlar el botón activo (0 = Todos, 1 = Noticas, 2 = Eventos)
    const [activeButton, setActiveButton] = useState(0);

    // Estado para controlar la paginación
    const [currentPage, setCurrentPage] = useState(1);
    const noticiasEventosPorPagina = 8;

    // Obtener conteo de noticias y eventos
    const conteoNoticiasEventos = getConteoNoticiasEventos();
    const totalNoticiasEventos = getAllNoticiasEventos().length;

    // Resetear página cuando cambie el tipo
    const handleCategoryChange = (index: number) => {
        setActiveButton(index);
        setCurrentPage(1);
    };

    // Tipos con sus contadores dinámicos
    const tipos = [
        { name: "Todos", count: totalNoticiasEventos, slug: "todos" },
        { name: "Noticias", count: conteoNoticiasEventos["noticia"] || 0, slug: "noticia" },
        { name: "Eventos", count: conteoNoticiasEventos["evento"] || 0, slug: "evento" }
    ];

    // Componente para renderizar una actividad individual
    const ActivityCard = ({ noticiaEvento }: { noticiaEvento: NoticiaEvento }) => (
        <article className="w-full md:w-1/3 md:px-4 mb-16">
            <Link href={`/noticias-eventos/${noticiaEvento.url}`} className="w-full" aria-label={`Ver detalles de ${noticiaEvento.titulo}`}>

                <div className="w-full group">
                    <header>
                        <div className="text-[13px] leading-[1.85] not-italic uppercase text-jci-gray font-normal tracking-normal">
                            <span>{noticiaEvento.tipo}</span>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-[22px] font-bold not-italic text-left leading-[1.45] tracking-normal text-jci-off-black md:text-[calc(17.2px+0.25vw)]">
                                {noticiaEvento.titulo}
                            </h3>
                        </div>
                    </header>

                    <div className="mt-6">
                        <div className="group max-w-full relative inline-block transition duration-[400ms] cursor-pointer">
                            <div className="flex items-center py-4">
                                <span className="text-xs text-jci-gray leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-jci-red">
                                    Leer más
                                </span>
                                <div
                                    className="flex ml-3 items-center transform transition-transform duration-300 group-hover:translate-x-1"
                                    aria-hidden="true"
                                >
                                    <HiOutlineArrowNarrowRight className="w-6 h-6 text-jci-gray group-hover:text-jci-red transition-colors duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <figure className="h-[280px] md:h-[320px] overflow-hidden bg-gray-200">
                        <div className="relative bg-white w-full h-full overflow-hidden">
                            <Image
                                src={noticiaEvento.imagen}
                                alt={`Imagen de ${noticiaEvento.titulo}`}
                                width={500}
                                height={500}
                                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                    </figure>
                </div>
            </Link>
        </article>
    );

    // Contenido según la categoría seleccionada
    const renderContent = () => {
        let proyectosAMostrar = [];

        if (activeButton === 0) {
            // Mostrar todos los proyectos
            proyectosAMostrar = getAllNoticiasEventos();
        } else {
            // Mostrar proyectos de la categoría seleccionada
            const tipoSeleccionado = tipos[activeButton];
            proyectosAMostrar = getNoticiasEventosPorTipo(tipoSeleccionado.slug as "evento" | "noticia");
        }

        // Calcular proyectos para la página actual
        const inicio = 0;
        const fin = currentPage * noticiasEventosPorPagina;
        const proyectosPaginaActual = proyectosAMostrar.slice(inicio, fin);

        // Agrupar proyectos en grupos de tres para el layout
        const noticiasEventosAgrupados = [];
        for (let i = 0; i < proyectosPaginaActual.length; i += 3) {
            noticiasEventosAgrupados.push(proyectosPaginaActual.slice(i, i + 3));
        }

        return (
            <div className="relative flex flex-wrap mx-10">
                {noticiasEventosAgrupados.map((grupo, grupoIndex) => (
                    <div key={grupoIndex} className="flex flex-col md:flex-row w-full mt-16 items-start">
                        {grupo.map((proyecto) => (
                            <ActivityCard key={proyecto.id} noticiaEvento={proyecto} />
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="relative z-10">
            <nav className="relative z-10 w-full transition-all duration-300 opacity-[1] " aria-label="Filtros de noticias y eventos por tipo">
                <div className="relative flex justify-center z-10 mx-auto h-full">
                    <div className="p-12 bg-gray-50 box-border w-full max-w-7xl">
                        <div className="text-[13px] leading-[1.85] not-italic uppercase text-[#989898] font-bold">
                            Explora por tipo
                        </div>

                        <div className="flex flex-wrap gap-6 mt-5" role="tablist" aria-label="Categorías de proyectos">
                            {tipos.map((tipo, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleCategoryChange(index)}
                                    className={`text-left text-2xl font-bold leading-[1.25] mr-[42px] transition duration-300 p-0 hover:text-gray-700 ${activeButton === index ? 'text-gray-800' : 'text-gray-400'
                                        }`}
                                    role="tab"
                                    aria-selected={activeButton === index}
                                    aria-controls={`panel-${index}`}
                                    id={`tab-${index}`}
                                >
                                    {tipo.name}
                                    <sup className="inline text-[16px] font-normal pl-[10px] align-super">
                                        {tipo.count}
                                    </sup>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            <div className="bg-white min-h-96 pb-9">
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="transition-all duration-300 ease-in-out">
                        <div className="min-h-[650px]" role="tabpanel" aria-labelledby={`tab-${activeButton}`}>
                            {renderContent()}
                        </div>
                    </div>
                </div>

                <footer className="flex justify-center bg-white py-20">
                    {(() => {
                        let proyectosAMostrar = [];
                        if (activeButton === 0) {
                            proyectosAMostrar = getAllNoticiasEventos();
                        } else {
                            const tipoSeleccionado = tipos[activeButton];
                            proyectosAMostrar = getNoticiasEventosPorTipo(tipoSeleccionado.slug as "evento" | "noticia");
                        }

                        const totalNoticiasEventosCategoria = proyectosAMostrar.length;
                        const noticiasEventosMostrados = currentPage * noticiasEventosPorPagina;
                        const hayMasNoticiasEventos = noticiasEventosMostrados < totalNoticiasEventosCategoria;

                        if (hayMasNoticiasEventos) {
                            return (
                                <Button
                                    radius="none"
                                    size="lg"
                                    className="relative bg-jci-aqua text-white group overflow-hidden"
                                    aria-label="Ver más noticias y eventos"
                                    onPress={() => setCurrentPage(currentPage + 1)}
                                >
                                    <span className="absolute inset-0 w-full h-full transform -translate-x-full bg-cyan-950 transition-transform duration-300 group-hover:translate-x-0"></span>
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