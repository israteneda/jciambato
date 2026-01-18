"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowUp } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { jciLinks } from "@/data/footer";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

export function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative z-20 select-none overflow-hidden bg-gray-50"
      role="contentinfo"
      aria-label="Pie de página"
    >
      {/* Sección de llamada a la acción */}
      <section className="relative z-10 bg-jci-teal" aria-labelledby="cta-heading">
        <div className="px-8 pb-16 pt-28 md:p-20 md:py-36">
          <div className="mb-10 md:mb-20">
            <div className="relative z-10 mx-auto max-w-6xl">
              <Link
                href="/involucrate"
                className="group cursor-pointer"
                aria-label="Ir a Involúcrate"
              >
                <div className="flex flex-col items-start md:flex-row md:items-center">
                  <header>
                    <span className="line-clamp-1 text-xs uppercase tracking-widest text-gray-50">
                      Conoce. Suma. Transforma.
                    </span>
                    <h2
                      id="cta-heading"
                      className="font-base mt-8 max-w-2xl text-3xl tracking-tight text-white md:text-4xl md:leading-[1.33] lg:text-5xl"
                    >
                      Te atreves a <strong>ser el cambio que quieres ver en el mundo?</strong>
                    </h2>
                  </header>

                  <div className="my-8 text-white md:ml-48">
                    <Image
                      src="/icons/arrow-down.svg"
                      alt=""
                      width={128}
                      height={128}
                      className="h-28 w-28 -rotate-90 transform brightness-0 invert transition-transform duration-300 group-hover:translate-x-4 md:h-32 md:w-32"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección decorativa */}
      <section className="relative z-20 hidden md:block" aria-hidden="true">
        <div className="pointer-events-none absolute left-0 right-0 top-[-145px] z-[3] whitespace-nowrap text-center font-black uppercase not-italic leading-[280px] tracking-normal opacity-20 md:text-[125px] lg:text-[235px]">
          JCI AMBATO
        </div>
      </section>

      {/* Sección principal del footer */}
      <section className="relative" aria-labelledby="footer-content-heading">
        <div>
          <div className="z-10 w-full">
            <span
              className="absolute left-[27px] top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 transform whitespace-nowrap text-[11px] font-semibold uppercase leading-[60px] tracking-[1px] text-jci-teal lg:block"
              aria-hidden="true"
              role="presentation"
            >
              Conócenos mejor
            </span>

            <div className="pt-14 md:px-20 md:pt-20 lg:pt-48">
              {/* Items */}
              <div className="relative z-10 mx-8 max-w-6xl sm:mx-auto">
                <div className="mb-8 flex flex-row items-center justify-between gap-8">
                  <Link href="/" aria-label="Ir a Inicio">
                    <Image
                      alt="JCI Ambato Logo"
                      className="h-[60px] w-[110px] object-contain"
                      src="/images/logos/jci-ambato.png"
                      width={110}
                      height={50}
                    />
                  </Link>
                </div>

                <div className="flex md:flex-row">
                  {/* Navegación del footer */}
                  <nav
                    className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
                    aria-label="Enlaces de navegación del pie de página"
                  >
                    {jciLinks.map((section) => (
                      <div key={section.title} className="flex flex-col">
                        <h3 className="text-base font-semibold">
                          <Link href={section.href || ""} className="hover:text-gray-500">
                            {section.title}
                          </Link>
                        </h3>
                        <ul className="m-1 mb-0 mt-3 flex max-w-36 flex-col space-y-2" role="list">
                          {section.items.map((item) => (
                            <li key={item.title} className="text-sm">
                              {item.href ? (
                                <a
                                  href={item.href}
                                  className="hover:text-gray-500"
                                  aria-label={`Ir a ${item.title}`}
                                >
                                  {item.title}
                                </a>
                              ) : (
                                <span className="text-gray-500">{item.title}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </nav>

                  {/* Redes sociales */}
                  <aside className="ml-20" aria-labelledby="social-media-heading">
                    <h3 id="social-media-heading" className="sr-only">
                      Redes sociales
                    </h3>
                    <div
                      className="flex flex-col items-center justify-center gap-4"
                      aria-label="Enlaces a redes sociales"
                    >
                      <a
                        href={siteConfig.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Síguenos en LinkedIn"
                      >
                        <FaLinkedin className="h-6 w-6 hover:text-jci-seafoam" aria-hidden="true" />
                      </a>
                      <a
                        href={siteConfig.links.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Síguenos en Facebook"
                      >
                        <FaFacebook className="h-6 w-6 hover:text-jci-seafoam" aria-hidden="true" />
                      </a>
                      <a
                        href={siteConfig.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Síguenos en Instagram"
                      >
                        <FaInstagram
                          className="h-6 w-6 hover:text-jci-seafoam"
                          aria-hidden="true"
                        />
                      </a>

                      {/* Botón para volver arriba para pantallas pequeñas y medianas*/}
                      <div className="mt-10 block lg:hidden">
                        <button
                          type="button"
                          aria-label="Volver arriba"
                          onClick={handleScrollToTop}
                          className={isClient ? "block" : "hidden"}
                          suppressHydrationWarning
                        >
                          <HiOutlineArrowUp className="h-10 w-10" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>

              {/* Derechos reservados */}
              <div className="relative z-10 mx-8 mt-16 max-w-6xl py-5 sm:mx-auto">
                <div className="text-jci-gray flex flex-col justify-between gap-2 lg:flex-row lg:gap-5">
                  <p className="text-xs text-default-400 md:text-sm">
                    © 2026 JCI Ambato. Todos los Derechos Reservados.
                  </p>

                  <div>
                    <div className="flex flex-row justify-start gap-5">
                      <p className="text-xs text-default-600 md:text-sm">
                        <Link href="/politica-gestion" className="hover:text-gray-500">
                          Política de Gestión
                        </Link>
                      </p>

                      <p className="text-xs text-default-600 md:text-sm">
                        <Link href="/politica-privacidad" className="hover:text-gray-500">
                          Política de Privacidad
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón para volver arriba, pantallas grandes*/}
            <div className="absolute right-[5%] top-[45%] hidden md:right-[8%] md:top-[50%] lg:right-[5%] lg:top-[30%] lg:block">
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Volver arriba"
                  onClick={handleScrollToTop}
                  className={isClient ? "block" : "hidden"}
                  suppressHydrationWarning
                >
                  <HiOutlineArrowUp className="h-10 w-10" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
