"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getAllAreas } from "@/features/inicio/data/areas-oportunidad";
import { Proyecto } from "@/types/proyecto";
import { getAreaBySlug } from "@/types/enums";
import { Button } from "@/components/ui/button";
import {
  getAllProyectos,
  getConteoProyectosPorArea,
  getProyectosPorArea,
} from "@/features/proyectos/data";

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
    ...areas.map((area) => ({
      name: area.title,
      count: conteoProyectos[area.slug] || 0,
      slug: area.slug,
    })),
  ];

  // Componente para renderizar una actividad individual
  const ActivityCard = ({ proyecto }: { proyecto: Proyecto }) => (
    <article className="m-5 mt-10 w-full lg:mt-16 lg:w-1/2">
      <Link
        href={`/proyectos/${proyecto.slug}`}
        className="w-full"
        aria-label={`Ver detalles de ${proyecto.nombre}`}
      >
        <figure className="h-[350px] overflow-hidden md:h-[512px]">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={proyecto.imagen}
              alt={`Imagen de ${proyecto.nombre}`}
              width={500}
              height={500}
              className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </figure>
        <div>
          <div className="mt-8">
            <p className="text-jci-gray text-[13px] leading-[1.85] font-bold tracking-[1px] uppercase">
              {proyecto.subtitulo}
            </p>
          </div>
          <div className="my-2">
            <h3 className="text-jci-black text-left text-[22px] leading-tight font-bold">
              {proyecto.nombre}
            </h3>
          </div>

          <p className="text-jci-teal text-[14px] leading-[1.78] font-normal">
            <strong>
              {proyecto.fecha} - {proyecto.lugar}
            </strong>
          </p>
        </div>
      </Link>
    </article>
  );

  // Contenido según la categoría seleccionada
  const renderContent = () => {
    let proyectosAMostrar: Proyecto[] = [];

    if (activeButton === 0) {
      // Mostrar todos los proyectos
      proyectosAMostrar = getAllProyectos();
    } else {
      // Mostrar proyectos de la categoría seleccionada
      const areaSeleccionada = categories[activeButton];
      const areaEnum = getAreaBySlug(areaSeleccionada.slug);
      if (areaEnum) {
        proyectosAMostrar = getProyectosPorArea(areaEnum);
      }
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
      <div className="relative mx-8 flex flex-wrap">
        {proyectosAgrupados.map((grupo, grupoIndex) => (
          <div key={grupoIndex} className="flex w-full flex-col items-center md:flex-row">
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
      <nav className="box-border bg-white p-12 lg:mx-20" aria-label="Filtros de proyectos por área">
        <div className="text-jci-gray text-[13px] leading-[1.85] font-bold uppercase not-italic">
          Explora por área de oportunidad
        </div>
        <div
          className="mt-5 flex flex-wrap gap-6"
          role="tablist"
          aria-label="Categorías de proyectos"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(index)}
              className={`mr-[42px] p-0 text-left text-[30px] leading-tight font-bold transition duration-300 hover:text-gray-700 ${
                activeButton === index ? "text-gray-800" : "text-gray-400"
              }`}
              role="tab"
              aria-selected={activeButton === index}
              aria-controls={`panel-${index}`}
              id={`tab-${index}`}
            >
              {category.name}
              <sup className="inline pl-[10px] align-super text-[16px] font-normal">
                {category.count}
              </sup>
            </button>
          ))}
        </div>
      </nav>

      <div className="bg-jci-bg">
        {/* Contenedor con animación de transición */}
        <div className="transition-all duration-300 ease-in-out">
          <div className="min-h-[650px]" role="tabpanel" aria-labelledby={`tab-${activeButton}`}>
            {renderContent()}
          </div>
        </div>

        <footer className="flex justify-center py-20">
          {(() => {
            let proyectosAMostrar: Proyecto[] = [];
            if (activeButton === 0) {
              proyectosAMostrar = getAllProyectos();
            } else {
              const areaSeleccionada = categories[activeButton];
              const areaEnum = getAreaBySlug(areaSeleccionada.slug);
              if (areaEnum) {
                proyectosAMostrar = getProyectosPorArea(areaEnum);
              }
            }

            const totalProyectosCategoria = proyectosAMostrar.length;
            const proyectosMostrados = currentPage * proyectosPorPagina;
            const hayMasProyectos = proyectosMostrados < totalProyectosCategoria;

            if (hayMasProyectos) {
              return (
                <Button
                  size="lg"
                  className="group bg-jci-teal relative overflow-hidden text-white"
                  aria-label="Ver más proyectos"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <span className="bg-jci-black absolute inset-0 h-full w-full -translate-x-full transform transition-transform duration-300 group-hover:translate-x-0"></span>
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
