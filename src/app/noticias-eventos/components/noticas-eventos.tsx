"use client";

import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  getAllNoticiasEventos,
  getConteoNoticiasEventos,
  getNoticiasEventosPorTipo,
} from "@/data/noticias";
import { NoticiaEvento } from "@/types/noticia";
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
    { name: "Eventos", count: conteoNoticiasEventos["evento"] || 0, slug: "evento" },
  ];

  // Componente para renderizar una actividad individual
  const ActivityCard = ({ noticiaEvento }: { noticiaEvento: NoticiaEvento }) => (
    <article className="mb-16 flex w-full md:w-1/2 lg:w-1/3">
      <Link
        href={`/noticias-eventos/${noticiaEvento.url}`}
        className="flex w-full"
        aria-label={`Ver detalles de ${noticiaEvento.titulo}`}
      >
        <div className="group flex h-full w-full flex-col">
          <header className="flex min-h-[120px] flex-col justify-start">
            <div className="text-[13px] leading-[1.85] font-bold tracking-normal text-jci-gray uppercase not-italic">
              <span>{noticiaEvento.tipo}</span>
            </div>

            <div className="mt-4 grow">
              <h3 className="text-jci-black text-left text-[22px] leading-[1.45] font-bold tracking-normal not-italic md:text-[calc(17.2px+0.25vw)]">
                {noticiaEvento.titulo}
              </h3>
            </div>
          </header>

          <div className="mt-6 shrink-0">
            <div className="group relative inline-block max-w-full cursor-pointer transition duration-400">
              <div className="flex items-center py-4 text-jci-gray">
                <span className="group-hover:text-jci-teal text-xs leading-none font-medium tracking-normal not-italic transition-colors duration-300">
                  Leer más
                </span>
                <div
                  className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <HiOutlineArrowNarrowRight className="text-jci-navy group-hover:text-jci-teal h-6 w-6 transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>

          <figure className="mt-auto h-[280px] overflow-hidden bg-white md:h-[350px]">
            <div className="relative h-full w-full overflow-hidden bg-white">
              <Image
                src={noticiaEvento.imagen}
                alt={`Imagen de ${noticiaEvento.titulo}`}
                width={500}
                height={500}
                className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
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
      <div className="relative flex flex-wrap">
        {noticiasEventosAgrupados.map((grupo, grupoIndex) => (
          <div
            key={grupoIndex}
            className="mt-16 flex w-full flex-col items-stretch gap-8 md:flex-row"
          >
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
      <header className="sr-only">
        <h2 id="proyectos-contenido-heading">Contenido de Noticias y Eventos</h2>
      </header>

      <nav
        className="relative z-10 w-full opacity-[1] transition-all duration-300"
        aria-label="Filtros de noticias y eventos por tipo"
      >
        <div className="relative z-10 mx-auto h-full">
          <div
            className="box-border bg-white p-12 lg:mx-20"
            aria-label="Filtros de proyectos por área"
          >
            <div className="text-[13px] leading-[1.85] font-bold text-jci-gray uppercase not-italic">
              Explora por tipo
            </div>

            {/* Para pantallas grandes */}
            <div
              className="mt-5 hidden flex-wrap gap-6 lg:flex"
              role="tablist"
              aria-label="Categorías de proyectos"
            >
              {tipos.map((tipo, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(index)}
                  className={`mr-[42px] p-0 text-left text-2xl leading-tight font-bold transition duration-300 hover:text-jci-navy ${
                    activeButton === index ? "text-jci-black" : "text-jci-navy"
                  }`}
                  role="tab"
                  aria-selected={activeButton === index}
                  aria-controls={`panel-${index}`}
                  id={`tab-${index}`}
                >
                  {tipo.name}
                  <sup className="inline pl-[10px] align-super text-[16px] font-normal">
                    {tipo.count}
                  </sup>
                </button>
              ))}
            </div>

            {/* Select desde pantallas medianas */}
            {/* <div className="block sm:hidden w-full max-w-xs">
                            <Select
                                label="Filtrar por tipo"
                                placeholder="Selecciona una opción"
                                value={activeButton}
                                onChange={(value) => handleCategoryChange(Number(value))}
                                className="max-w-xs"
                            >
                                {tipos.map((tipo, index) => (
                                    <SelectItem key={tipo.name} data-value={index.toString()}>
                                        {tipo.name}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div> */}
          </div>
        </div>
      </nav>

      <div className="min-h-96 bg-white pb-9">
        <div className="relative z-10 mx-8 max-w-6xl md:mx-20 lg:mx-auto">
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
              proyectosAMostrar = getNoticiasEventosPorTipo(
                tipoSeleccionado.slug as "evento" | "noticia"
              );
            }

            const totalNoticiasEventosCategoria = proyectosAMostrar.length;
            const noticiasEventosMostrados = currentPage * noticiasEventosPorPagina;
            const hayMasNoticiasEventos = noticiasEventosMostrados < totalNoticiasEventosCategoria;

            if (hayMasNoticiasEventos) {
              return (
                <Button
                  radius="none"
                  size="lg"
                  className="group bg-jci-teal relative overflow-hidden text-white"
                  aria-label="Ver más noticias y eventos"
                  onPress={() => setCurrentPage(currentPage + 1)}
                >
                  <span className="absolute inset-0 h-full w-full -translate-x-full transform bg-cyan-950 transition-transform duration-300 group-hover:translate-x-0"></span>
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
