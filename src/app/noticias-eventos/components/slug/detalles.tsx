"use client";
import { RotatedText } from "@/components/commons";
// import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { NoticiaEvento } from "@/types/noticia";
import { shareOnSocialMedia, getShareContentFromNoticia } from "@/lib/share";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function Detalles({ noticiaEvento }: { noticiaEvento: NoticiaEvento }) {
  // Definir breadcrumbs para navegación
  /*   const breadcrumbs = [
    { name: "Inicio", url: "/" },
    { name: "Noticias y Eventos", url: "/noticias-eventos" },
    { name: noticiaEvento.titulo, url: `/noticias-eventos/${noticiaEvento.url}` },
  ]; */

  return (
    <section
      className="relative overflow-hidden bg-transparent"
      aria-labelledby={`noticiaEvento-${noticiaEvento.url}-heading`}
    >
      <div>
        <div className="h-[150px] md:h-80"></div>

        <div className="absolute left-0 right-0 top-0 z-20 pt-24 md:pt-44">
          <div className="relative z-10 mx-8 max-w-6xl bg-transparent md:mx-20 lg:mx-auto">
            {/* Breadcrumbs */}
            {/* <div className="mb-4">
              <Breadcrumbs items={breadcrumbs} className="text-gray-600" />
            </div> */}

            <Link
              href="/noticias-eventos"
              className="group inline-flex cursor-pointer items-center text-end font-semibold uppercase transition duration-400"
              aria-label="Volver a noticias y eventos"
            >
              <div className="flex items-center py-4">
                <div
                  className="mr-3 flex transform items-center transition-transform duration-300 group-hover:-translate-x-1"
                  aria-hidden="true"
                >
                  <HiOutlineArrowNarrowLeft className="h-5 w-5 text-jci-black transition-colors duration-300 group-hover:text-jci-teal" />
                </div>
                <span className="text-xs leading-none text-jci-black transition-colors duration-300 group-hover:text-jci-teal">
                  Volver a noticias y eventos
                </span>
              </div>
            </Link>
          </div>

          <div className="pointer-events-none fixed inset-0">
            <RotatedText text={`${noticiaEvento.titulo}`} />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative mx-auto px-8 py-20 pb-36 md:max-w-6xl md:bg-white md:px-20">
          <div className="">
            <header>
              <p className="text-xs font-bold uppercase leading-[1.85] text-jci-black">
                {noticiaEvento.tipo}
              </p>
              <div className="mt-8">
                <h2 className="font-aeonik-bold max-w-[862px] text-left text-3xl font-bold leading-[1.33] text-black sm:text-[calc(28.8px+1vw)] md:text-[48px]">
                  {noticiaEvento.titulo}
                </h2>
              </div>
              {noticiaEvento.subtitulo && (
                <div className="mt-4">
                  <p className="text-jci-gray max-w-[862px] text-lg font-medium leading-relaxed">
                    {noticiaEvento.subtitulo}
                  </p>
                </div>
              )}
            </header>

            <div className="mt-10 md:mt-20">
              <div className="text-xs font-normal uppercase leading-[1.71] tracking-[1px]">
                {noticiaEvento.fecha}
              </div>
              <div className="text-[10px] font-normal uppercase leading-[1.71] tracking-[1px]">
                {noticiaEvento.lugar}
              </div>
            </div>

            <div className="mt-5 md:mt-20">
              <div className="border-t border-t-[#cccccc]">
                <div className="mt-20">
                  {/* Imagen principal */}
                  {noticiaEvento.imagen && (
                    <figure className="mb-12 w-full md:mb-16">
                      <div className="relative h-[300px] w-full overflow-hidden md:h-[500px]">
                        <Image
                          src={noticiaEvento.imagen}
                          alt={`Imagen de ${noticiaEvento.titulo}`}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </figure>
                  )}

                  <div className="flex w-full flex-col md:flex-row">
                    <div className="w-full pr-0 md:w-[80%] md:pr-24">
                      <article className="pb-20">
                        {/* Introducción */}
                        {noticiaEvento.contenido?.introduccion && (
                          <div className="mb-8">
                            <p className="text-jci-off-black text-lg font-medium leading-relaxed md:text-xl">
                              {noticiaEvento.contenido.introduccion}
                            </p>
                          </div>
                        )}

                        {/* Descripción principal (fallback si no hay contenido estructurado) */}
                        {!noticiaEvento.contenido && noticiaEvento.descripcion && (
                          <div className="mb-8">
                            <p className="whitespace-pre-line text-medium leading-[1.71] text-jci-black">
                              {noticiaEvento.descripcion}
                            </p>
                          </div>
                        )}

                        {/* Párrafos de contenido */}
                        {noticiaEvento.contenido?.parrafos &&
                          noticiaEvento.contenido.parrafos.length > 0 && (
                            <div className="flex flex-col gap-5 text-medium leading-[1.71] text-jci-black">
                              {noticiaEvento.contenido.parrafos.map((parrafo, index) => (
                                <p key={index}>{parrafo}</p>
                              ))}
                            </div>
                          )}

                        {/* Puntos destacados */}
                        {noticiaEvento.contenido?.destacados &&
                          noticiaEvento.contenido.destacados.length > 0 && (
                            <div className="my-10 border-l-4 border-jci-teal bg-gray-50 p-6">
                              <h3 className="mb-4 text-xl font-bold text-jci-black">
                                Puntos Destacados
                              </h3>
                              <ul className="space-y-3">
                                {noticiaEvento.contenido.destacados.map((punto, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start text-medium text-jci-black"
                                  >
                                    <span className="mr-3 font-bold text-jci-teal">•</span>
                                    <span>{punto}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                        {/* Citas */}
                        {noticiaEvento.contenido?.citas &&
                          noticiaEvento.contenido.citas.length > 0 && (
                            <div className="my-10">
                              {noticiaEvento.contenido.citas.map((cita, index) => (
                                <blockquote
                                  key={index}
                                  className="my-6 border-l-4 border-jci-seafoam py-4 pl-6 italic"
                                >
                                  <p className="mb-2 text-lg leading-relaxed text-jci-black">
                                    &ldquo;{cita.texto}&rdquo;
                                  </p>
                                  <footer className="text-jci-gray text-sm font-semibold">
                                    — {cita.autor}
                                    {cita.cargo && (
                                      <span className="font-normal">, {cita.cargo}</span>
                                    )}
                                  </footer>
                                </blockquote>
                              ))}
                            </div>
                          )}

                        {/* Galería de imágenes adicionales */}
                        {noticiaEvento.contenido?.imagenes &&
                          noticiaEvento.contenido.imagenes.length > 0 && (
                            <div className="my-12">
                              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {noticiaEvento.contenido.imagenes.map((img, index) => (
                                  <figure key={index} className="overflow-hidden">
                                    <div className="relative mb-2 h-[250px] w-full md:h-[300px]">
                                      <Image
                                        src={img.url}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                      />
                                    </div>
                                    {img.caption && (
                                      <figcaption className="text-jci-gray text-sm italic">
                                        {img.caption}
                                      </figcaption>
                                    )}
                                  </figure>
                                ))}
                              </div>
                            </div>
                          )}

                        {/* Logros */}
                        {noticiaEvento.contenido?.logros &&
                          noticiaEvento.contenido.logros.length > 0 && (
                            <div className="my-10 rounded-lg bg-gradient-to-br from-jci-teal/10 to-jci-seafoam/10 p-8">
                              <h3 className="mb-6 text-2xl font-bold text-jci-black">
                                Logros Alcanzados
                              </h3>
                              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {noticiaEvento.contenido.logros.map((logro, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center rounded bg-white p-4 shadow-sm"
                                  >
                                    <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-jci-teal font-bold text-white">
                                      ✓
                                    </div>
                                    <span className="text-sm text-jci-black">{logro}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                        {/* Impacto */}
                        {noticiaEvento.contenido?.impacto &&
                          noticiaEvento.contenido.impacto.length > 0 && (
                            <div className="my-10">
                              <h3 className="mb-6 text-2xl font-bold text-jci-black">
                                Impacto del Evento
                              </h3>
                              <div className="space-y-6">
                                {noticiaEvento.contenido.impacto.map((item, index) => (
                                  <div
                                    key={index}
                                    className="border-jci-red border-l-4 bg-gray-50 p-6"
                                  >
                                    <h4 className="mb-2 text-lg font-bold text-jci-black">
                                      {item.titulo}
                                    </h4>
                                    <p className="text-medium leading-relaxed text-jci-black">
                                      {item.descripcion}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                      </article>
                    </div>

                    <div className="w-[20%]">
                      <div className="flex flex-col items-start gap-2">
                        <div className="text-xs font-semibold uppercase tracking-[1px] text-jci-black">
                          Compartir en
                        </div>

                        <div className="flex flex-col items-start gap-1">
                          <button
                            className="cursor-pointer text-sm font-semibold text-gray-400 transition-colors duration-300 hover:text-jci-seafoam"
                            onClick={() =>
                              shareOnSocialMedia(
                                "facebook",
                                getShareContentFromNoticia(noticiaEvento)
                              )
                            }
                            aria-label="Compartir en Facebook"
                          >
                            Facebook
                          </button>
                          <button
                            className="cursor-pointer text-sm font-semibold text-gray-400 transition-colors duration-300 hover:text-jci-seafoam"
                            onClick={() =>
                              shareOnSocialMedia(
                                "linkedin",
                                getShareContentFromNoticia(noticiaEvento)
                              )
                            }
                            aria-label="Compartir en LinkedIn"
                          >
                            LinkedIn
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
