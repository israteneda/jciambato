"use client";

import Image from "next/image";
import Link from "next/link";
import { getAllAreas } from "@/features/inicio/data/areas-oportunidad";
import { Proyecto } from "@/types/proyecto";
import { getAreaBySlug } from "@/types/enums";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getAllProyectos,
  getConteoProyectosPorArea,
  getProyectosPorArea,
} from "@/features/proyectos/data";
import { useFilterableGrid } from "@/hooks/use-filterable-grid";

export function ProyectosPorArea() {
  const proyectos = getAllProyectos();
  const areas = getAllAreas();
  const conteoProyectos = getConteoProyectosPorArea();
  const totalProyectos = proyectos.length;

  const categorias = [
    { name: "Todos", count: totalProyectos, slug: "todos" },
    ...areas.map((area) => ({
      name: area.title,
      count: conteoProyectos[area.slug] || 0,
      slug: area.slug,
    })),
  ];

  const { activeIndex, selectItems, visibleItems, hasMore, handleCategoryChange, loadMore } =
    useFilterableGrid<Proyecto>({
      items: proyectos,
      categories: categorias,
      getItemsBySlug: (slug) => {
        const areaEnum = getAreaBySlug(slug);
        return areaEnum ? getProyectosPorArea(areaEnum) : [];
      },
      pageSize: 8,
    });

  const ActivityCard = ({ proyecto }: { proyecto: Proyecto }) => (
    <article className="mt-10 mb-16 w-full lg:w-1/2">
      <Link
        href={`/proyectos/${proyecto.slug}`}
        className="w-full"
        aria-label={`Ver detalles de ${proyecto.nombre}`}
      >
        <figure className="h-87.5 overflow-hidden md:h-128">
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

  const proyectosAgrupados = [];
  for (let i = 0; i < visibleItems.length; i += 2) {
    proyectosAgrupados.push(visibleItems.slice(i, i + 2));
  }

  return (
    <>
      {/* Navegador */}
      <nav
        className="relative mx-auto bg-white md:max-w-[calc(676px+50vw)]"
        aria-label="Filtros de proyectos por área"
      >
        <div className="p-7 md:p-14" aria-label="Filtros de proyectos por área">
          <div className="text-jci-gray text-xs leading-[1.85] font-bold tracking-normal uppercase not-italic">
            Explora por área de oportunidad
          </div>

          {/* Para pantallas grandes */}
          <div
            className="mt-5 hidden flex-wrap gap-6 lg:flex"
            role="tablist"
            aria-label="Categorías de proyectos"
          >
            {categorias.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(index)}
                className={`hover:text-jci-black mr-10 cursor-pointer text-left text-3xl leading-tight font-bold transition duration-300 ${
                  activeIndex === index ? "text-gray-800" : "text-gray-400"
                }`}
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls={`panel-${index}`}
                id={`tab-${index}`}
              >
                {category.name}
                <sup className="inline pl-2 align-super text-[16px] font-normal">
                  {category.count}
                </sup>
              </button>
            ))}
          </div>

          {/* Para pantallas pequeñas */}
          <div className="mt-5 block lg:hidden">
            <Select
              items={selectItems}
              value={activeIndex.toString()}
              onValueChange={(value) => handleCategoryChange(Number(value))}
            >
              <SelectTrigger className="w-full" aria-label="Filtrar por área de oportunidad">
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {categorias.map((category, index) => (
                    <SelectItem key={category.slug} value={index.toString()}>
                      {category.name}
                      <span className="text-muted-foreground ml-auto">({category.count})</span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </nav>

      <div className="bg-jci-bg min-h-96 pb-9">
        <div className="transition-all duration-300 ease-in-out">
          <div className="min-h-163" role="tabpanel" aria-labelledby={`tab-${activeIndex}`}>
            <div className="relative flex flex-wrap px-8 md:px-14">
              {proyectosAgrupados.map((grupo, grupoIndex) => (
                <div
                  key={grupoIndex}
                  className="flex w-full flex-col items-center gap-8 md:flex-row"
                >
                  {grupo.map((proyecto) => (
                    <ActivityCard key={proyecto.id} proyecto={proyecto} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="flex justify-center">
          {hasMore ? (
            <Button
              size="lg"
              className="group bg-jci-teal hover:bg-jci-teal relative overflow-hidden text-white"
              aria-label="Ver más proyectos"
              onClick={loadMore}
            >
              <span className="bg-jci-blue absolute inset-0 h-full w-full -translate-x-full transform transition-transform duration-300 group-hover:translate-x-0"></span>
              <span>Ver más</span>
            </Button>
          ) : null}
        </footer>
      </div>
    </>
  );
}
