"use client";
import { RotatedText } from "@/components/commons";
import { NoticiaEvento } from "@/types/noticia";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

// Función para compartir en redes sociales
const shareOnSocialMedia = (platform: "facebook" | "linkedin", noticiaEvento: NoticiaEvento) => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const title = noticiaEvento.titulo;
  const description = noticiaEvento.descripcion || noticiaEvento.subtitulo || "";

  let shareUrl = "";

  switch (platform) {
    case "facebook":
      // Facebook usa principalmente la URL, los metadatos OpenGraph se encargan del resto
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(`${title} - ${description}`)}&hashtag=%23JCIAmbato`;
      break;
    case "linkedin":
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`;
      break;
  }

  // Abrir en nueva ventana
  if (shareUrl) {
    window.open(shareUrl, "_blank", "width=600,height=400,scrollbars=yes,resizable=yes");
  }
};

export default function Detalles({ noticiaEvento }: { noticiaEvento: NoticiaEvento }) {
  return (
    <section
      className="relative bg-transparent overflow-hidden"
      aria-labelledby={`noticiaEvento-${noticiaEvento.url}-heading`}
    >
      <div>
        <div className="h-[150px] md:h-80"></div>

        <div className="pt-24 md:pt-44 absolute top-0 left-0 right-0 z-20">
          <div className="relative z-10 bg-transparent max-w-6xl mx-8 md:mx-20 lg:mx-auto">
            <Link
              href="/noticias-eventos"
              className="group inline-flex items-center text-end font-semibold uppercase transition duration-400 cursor-pointer"
              aria-label="Volver a noticias y eventos"
            >
              <div className="flex items-center py-4">
                <div
                  className="mr-3 flex items-center transform transition-transform duration-300 group-hover:-translate-x-1"
                  aria-hidden="true"
                >
                  <HiOutlineArrowNarrowLeft className="h-5 w-5 text-jci-black transition-colors duration-300 group-hover:text-jci-aqua" />
                </div>
                <span className="text-xs leading-none text-jci-black transition-colors duration-300 group-hover:text-jci-aqua">
                  Volver a noticias y eventos
                </span>
              </div>
            </Link>
          </div>

          <div className="inset-0 fixed pointer-events-none">
            <RotatedText text={`${noticiaEvento.titulo}`} />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative mx-auto md:max-w-6xl py-20 px-8 md:px-20 pb-36 md:bg-white">
          <div className="">
            <header>
              <p className="text-xs leading-[1.85] font-bold uppercase text-jci-black ">
                {noticiaEvento.tipo}
              </p>
              <div className="mt-8">
                <h2 className="text-3xl md:text-[48px] font-aeonik-bold font-bold leading-[1.33] text-black max-w-[862px] text-left sm:text-[calc(28.8px+1vw)]">
                  {noticiaEvento.titulo}
                </h2>
              </div>
              {noticiaEvento.subtitulo && (
                <div className="mt-4">
                  <p className="text-lg leading-relaxed text-jci-gray font-medium max-w-[862px]">
                    {noticiaEvento.subtitulo}
                  </p>
                </div>
              )}
            </header>

            <div className="mt-10 md:mt-20">
              <div className="text-xs font-normal leading-[1.71] tracking-[1px] uppercase">
                {noticiaEvento.fecha}
              </div>
              <div className="text-[10px] font-normal leading-[1.71] tracking-[1px] uppercase">
                {noticiaEvento.lugar}
              </div>
            </div>

            <div className="mt-5 md:mt-20">
              <div className="border-t border-t-[#cccccc]">
                <div className="mt-20">
                  {/* Imagen principal */}
                  {noticiaEvento.imagen && (
                    <figure className="w-full mb-12 md:mb-16">
                      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
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

                  <div className="flex flex-col md:flex-row w-full">
                    <div className="pr-0 md:pr-24 w-full md:w-[80%]">
                      <article className="pb-20">
                        {/* Introducción */}
                        {noticiaEvento.contenido?.introduccion && (
                          <div className="mb-8">
                            <p className="text-lg md:text-xl leading-relaxed text-jci-off-black font-medium">
                              {noticiaEvento.contenido.introduccion}
                            </p>
                          </div>
                        )}

                        {/* Descripción principal (fallback si no hay contenido estructurado) */}
                        {!noticiaEvento.contenido && noticiaEvento.descripcion && (
                          <div className="mb-8">
                            <p className="text-medium leading-[1.71] text-jci-off-black whitespace-pre-line">
                              {noticiaEvento.descripcion}
                            </p>
                          </div>
                        )}

                        {/* Párrafos de contenido */}
                        {noticiaEvento.contenido?.parrafos &&
                          noticiaEvento.contenido.parrafos.length > 0 && (
                            <div className="flex flex-col gap-5 text-medium leading-[1.71] text-jci-off-black">
                              {noticiaEvento.contenido.parrafos.map((parrafo, index) => (
                                <p key={index}>{parrafo}</p>
                              ))}
                            </div>
                          )}

                        {/* Puntos destacados */}
                        {noticiaEvento.contenido?.destacados &&
                          noticiaEvento.contenido.destacados.length > 0 && (
                            <div className="my-10 p-6 bg-gray-50 border-l-4 border-jci-aqua">
                              <h3 className="text-xl font-bold text-jci-off-black mb-4">
                                Puntos Destacados
                              </h3>
                              <ul className="space-y-3">
                                {noticiaEvento.contenido.destacados.map((punto, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start text-medium text-jci-off-black"
                                  >
                                    <span className="text-jci-aqua mr-3 font-bold">•</span>
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
                                  className="border-l-4 border-jci-seafoam pl-6 py-4 my-6 italic"
                                >
                                  <p className="text-lg text-jci-off-black leading-relaxed mb-2">
                                    &ldquo;{cita.texto}&rdquo;
                                  </p>
                                  <footer className="text-sm font-semibold text-jci-gray">
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
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {noticiaEvento.contenido.imagenes.map((img, index) => (
                                  <figure key={index} className="overflow-hidden">
                                    <div className="relative w-full h-[250px] md:h-[300px] mb-2">
                                      <Image
                                        src={img.url}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                      />
                                    </div>
                                    {img.caption && (
                                      <figcaption className="text-sm text-jci-gray italic">
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
                            <div className="my-10 p-8 bg-gradient-to-br from-jci-aqua/10 to-jci-seafoam/10 rounded-lg">
                              <h3 className="text-2xl font-bold text-jci-off-black mb-6">
                                Logros Alcanzados
                              </h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {noticiaEvento.contenido.logros.map((logro, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center p-4 bg-white rounded shadow-sm"
                                  >
                                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-jci-aqua text-white rounded-full mr-3 font-bold">
                                      ✓
                                    </div>
                                    <span className="text-sm text-jci-off-black">{logro}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                        {/* Impacto */}
                        {noticiaEvento.contenido?.impacto &&
                          noticiaEvento.contenido.impacto.length > 0 && (
                            <div className="my-10">
                              <h3 className="text-2xl font-bold text-jci-off-black mb-6">
                                Impacto del Evento
                              </h3>
                              <div className="space-y-6">
                                {noticiaEvento.contenido.impacto.map((item, index) => (
                                  <div
                                    key={index}
                                    className="p-6 border-l-4 border-jci-red bg-gray-50"
                                  >
                                    <h4 className="text-lg font-bold text-jci-off-black mb-2">
                                      {item.titulo}
                                    </h4>
                                    <p className="text-medium text-jci-off-black leading-relaxed">
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
                        <div className="text-xs font-semibold tracking-[1px] text-jci-black uppercase">
                          Compartir en
                        </div>

                        <div className="flex flex-col items-start gap-1">
                          <button
                            className="text-sm font-semibold text-gray-400 hover:text-jci-seafoam transition-colors duration-300 cursor-pointer"
                            onClick={() => shareOnSocialMedia("facebook", noticiaEvento)}
                            aria-label="Compartir en Facebook"
                          >
                            Facebook
                          </button>
                          <button
                            className="text-sm font-semibold text-gray-400 hover:text-jci-seafoam transition-colors duration-300 cursor-pointer"
                            onClick={() => shareOnSocialMedia("linkedin", noticiaEvento)}
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
