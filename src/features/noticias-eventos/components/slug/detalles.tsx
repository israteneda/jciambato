"use client";
import RotatedText from "@/components/rotated-text";
// import { Breadcrumbs } from "@/components/Breadcrumbs";
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
    >
      <div>
        <div className="h-[150px] md:h-80"></div>

        <div className="absolute top-0 right-0 left-0 z-20 pt-24 md:pt-44">
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
                  <HiOutlineArrowNarrowLeft className="text-jci-black group-hover:text-jci-teal h-5 w-5 transition-colors duration-300" />
                </div>
                <span className="text-jci-black group-hover:text-jci-teal text-xs leading-none transition-colors duration-300">
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
              <p className="text-jci-black text-xs leading-[1.85] font-bold uppercase">
                {noticiaEvento.tipo}
              </p>
              <div className="mt-8">
                <h1 className="max-w-[862px] text-left text-3xl leading-[1.33] font-bold text-jci-black sm:text-[calc(28.8px+1vw)] md:text-[48px]">
                  {noticiaEvento.titulo}
                </h1>
              </div>
              {noticiaEvento.subtitulo && (
                <div className="mt-4">
                  <p className="text-jci-gray max-w-[862px] text-lg leading-relaxed font-medium">
                    {noticiaEvento.subtitulo}
                  </p>
                </div>
              )}
            </header>

            <div className="mt-10 md:mt-20">
              <div className="text-xs leading-[1.71] font-normal tracking-[1px] uppercase">
                {noticiaEvento.fecha}
              </div>
              <div className="text-[10px] leading-[1.71] font-normal tracking-[1px] uppercase">
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
                          sizes="100vw"
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
                            <p className="text-jci-black text-lg leading-relaxed font-medium md:text-xl">
                              {noticiaEvento.contenido.introduccion}
                            </p>
                          </div>
                        )}

                        {/* Descripción principal (fallback si no hay contenido estructurado) */}
                        {!noticiaEvento.contenido && noticiaEvento.descripcion && (
                          <div className="mb-8">
                            <p className="text-medium text-jci-black leading-[1.71] whitespace-pre-line">
                              {noticiaEvento.descripcion}
                            </p>
                          </div>
                        )}

                        {/* Párrafos de contenido */}
                        {noticiaEvento.contenido?.parrafos &&
                          noticiaEvento.contenido.parrafos.length > 0 && (
                            <div className="text-medium text-jci-black flex flex-col gap-5 leading-[1.71]">
                              {noticiaEvento.contenido.parrafos.map((parrafo, index) => (
                                <p key={index}>{parrafo}</p>
                              ))}
                            </div>
                          )}

                        {/* Puntos destacados */}
                        {noticiaEvento.contenido?.destacados &&
                          noticiaEvento.contenido.destacados.length > 0 && (
                            <div className="border-jci-teal my-10 border-l-4 bg-white p-6">
                              <h3 className="text-jci-black mb-4 text-xl font-bold">
                                Puntos Destacados
                              </h3>
                              <ul className="space-y-3">
                                {noticiaEvento.contenido.destacados.map((punto, index) => (
                                  <li
                                    key={index}
                                    className="text-medium text-jci-black flex items-start"
                                  >
                                    <span className="text-jci-teal mr-3 font-bold">•</span>
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
                                  className="border-jci-teal my-6 border-l-4 py-4 pl-6 italic"
                                >
                                  <p className="text-jci-black mb-2 text-lg leading-relaxed">
                                    &ldquo;{cita.texto}&rdquo;
                                  </p>
                                  <footer className="text-jci-navy text-sm font-semibold">
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
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                      />
                                    </div>
                                    {img.caption && (
                                      <figcaption className="text-jci-navy text-sm italic">
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
                            <div className="from-jci-teal/10 to-jci-teal/5 my-10 rounded-lg bg-linear-to-br p-8">
                              <h3 className="text-jci-black mb-6 text-2xl font-bold">
                                Logros Alcanzados
                              </h3>
                              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {noticiaEvento.contenido.logros.map((logro, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center rounded bg-white p-4 shadow-sm"
                                  >
                                    <div className="bg-jci-teal mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-white">
                                      ✓
                                    </div>
                                    <span className="text-jci-black text-sm">{logro}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                        {/* Impacto */}
                        {noticiaEvento.contenido?.impacto &&
                          noticiaEvento.contenido.impacto.length > 0 && (
                            <div className="my-10">
                              <h3 className="text-jci-black mb-6 text-2xl font-bold">
                                Impacto del Evento
                              </h3>
                              <div className="space-y-6">
                                {noticiaEvento.contenido.impacto.map((item, index) => (
                                  <div
                                    key={index}
                                    className="border-jci-teal border-l-4 bg-white p-6"
                                  >
                                    <h4 className="text-jci-black mb-2 text-lg font-bold">
                                      {item.titulo}
                                    </h4>
                                    <p className="text-medium text-jci-black leading-relaxed">
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
                        <div className="text-jci-black text-xs font-semibold tracking-[1px] uppercase">
                          Compartir en
                        </div>

                        <div className="flex flex-col items-start gap-1">
                          <button
                            className="hover:text-jci-teal cursor-pointer text-sm font-semibold text-jci-navy transition-colors duration-300"
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
                            className="hover:text-jci-teal cursor-pointer text-sm font-semibold text-jci-navy transition-colors duration-300"
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
