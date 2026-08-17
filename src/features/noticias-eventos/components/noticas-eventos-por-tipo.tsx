"use client";

import Image from "next/image";
import Link from "next/link";
import {
  getAllNoticiasEventos,
  getConteoNoticiasEventos,
  getNoticiasEventosPorTipo,
} from "@/features/noticias-eventos/data";
import { NoticiaEvento } from "@/types/noticia";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Container } from "@/components/layout/container";
import { useFilterableGrid } from "@/hooks/use-filterable-grid";

export default function NoticiasEventosPorTipo() {
  const noticiasEventos = getAllNoticiasEventos();
  const conteoNoticiasEventos = getConteoNoticiasEventos();
  const totalNoticiasEventos = noticiasEventos.length;

  const tipos = [
    { name: "Todos", count: totalNoticiasEventos, slug: "todos" },
    { name: "Noticias", count: conteoNoticiasEventos["noticia"] || 0, slug: "noticia" },
    { name: "Eventos", count: conteoNoticiasEventos["evento"] || 0, slug: "evento" },
  ];

  const { activeIndex, selectItems, visibleItems, hasMore, handleCategoryChange, loadMore } =
    useFilterableGrid<NoticiaEvento>({
      items: noticiasEventos,
      categories: tipos,
      getItemsBySlug: (slug) => getNoticiasEventosPorTipo(slug),
      pageSize: 8,
    });

  const ActivityCard = ({ noticiaEvento }: { noticiaEvento: NoticiaEvento }) => (
    <article className="mt-10 mb-16 w-full md:w-1/2 lg:w-1/3">
      <Link
        href={`/noticias-eventos/${noticiaEvento.slug}`}
        className="flex w-full"
        aria-label={`Ver detalles de ${noticiaEvento.titulo}`}
      >
        <div className="group flex h-full w-full flex-col">
          <header className="flex min-h-30 flex-col justify-start">
            <div className="text-jci-gray text-[13px] leading-[1.85] font-bold tracking-normal uppercase not-italic">
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
              <div className="text-jci-gray flex items-center py-4">
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

          <figure className="mt-auto h-70 overflow-hidden md:h-87.5">
            <div className="relative h-full w-full overflow-hidden">
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

  const noticiasEventosAgrupados = [];
  for (let i = 0; i < visibleItems.length; i += 3) {
    noticiasEventosAgrupados.push(visibleItems.slice(i, i + 3));
  }

  return (
    <>
      {/* Navegador */}
      <nav
        className="relative mx-auto bg-white md:max-w-[calc(676px+50vw)]"
        aria-label="Filtros de noticias y eventos por tipo"
      >
        <div className="p-7 md:p-14" aria-label="Filtros de noticias y eventos por tipo">
          <div className="text-jci-gray text-xs leading-[1.85] font-bold tracking-normal uppercase not-italic">
            Explora por tipo
          </div>

          {/* Para pantallas grandes */}
          <div
            className="mt-5 hidden flex-wrap gap-6 lg:flex"
            role="tablist"
            aria-label="Categorías de noticias y eventos"
          >
            {tipos.map((tipo, index) => (
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
                {tipo.name}
                <sup className="inline pl-2 align-super text-[16px] font-normal">{tipo.count}</sup>
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
              <SelectTrigger className="w-full" aria-label="Filtrar por tipo">
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {tipos.map((tipo, index) => (
                    <SelectItem key={tipo.slug} value={index.toString()}>
                      {tipo.name}
                      <span className="text-muted-foreground ml-auto">({tipo.count})</span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </nav>

      <div className="bg-jci-bg min-h-96 pb-9">
        <Container className="mx-auto">
          <div className="transition-all duration-300 ease-in-out">
            <div className="min-h-163" role="tabpanel" aria-labelledby={`tab-${activeIndex}`}>
              <div className="relative flex flex-wrap">
                {noticiasEventosAgrupados.map((grupo, grupoIndex) => (
                  <div
                    key={grupoIndex}
                    className="mt-0 flex w-full flex-col items-stretch gap-8 md:flex-row"
                  >
                    {grupo.map((noticiaEvento) => (
                      <ActivityCard key={noticiaEvento.id} noticiaEvento={noticiaEvento} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>

        <footer className="flex justify-center">
          {hasMore ? (
            <Button
              size="lg"
              className="group bg-jci-teal hover:bg-jci-teal relative overflow-hidden text-white"
              aria-label="Ver más noticias y eventos"
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
