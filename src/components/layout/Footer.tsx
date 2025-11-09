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
      className="relative z-20 bg-gray-50 select-none overflow-hidden"
      role="contentinfo"
      aria-label="Pie de página"
    >
      {/* Sección de llamada a la acción */}
      <section className="relative z-10 bg-jci-aqua" aria-labelledby="cta-heading">
        <div className="pt-28 pb-16 px-8 md:p-20 md:py-36">
          <div className="mb-10 md:mb-20">
            <div className="relative z-10 max-w-6xl mx-auto">
              <Link
                href="/involucrate"
                className="group cursor-pointer"
                aria-label="Ir a Involúcrate"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <header>
                    <span className="text-xs text-gray-50 line-clamp-1 uppercase tracking-widest">
                      Conoce. Suma. Transforma.
                    </span>
                    <h2
                      id="cta-heading"
                      className="mt-8 text-3xl md:text-4xl lg:text-5xl max-w-2xl font-base md:leading-[1.33] tracking-tight text-white"
                    >
                      Te atreves a <strong>ser el cambio que quieres ver en el mundo?</strong>
                    </h2>
                  </header>

                  <div className="my-8 md:ml-48 text-white">
                    <Image
                      src="/icons/arrow-down.svg"
                      alt=""
                      width={128}
                      height={128}
                      className="h-28 w-28 md:h-32 md:w-32 transform transition-transform duration-300 group-hover:translate-x-4 -rotate-90 brightness-0 invert"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección decorativa */}
      <section className="hidden md:block relative z-20" aria-hidden="true">
        <div className="absolute left-0 right-0 top-[-145px] z-[3] opacity-20 md:text-[125px] lg:text-[235px] font-black not-italic leading-[280px] text-center whitespace-nowrap pointer-events-none tracking-normal uppercase">
          JCI AMBATO
        </div>
      </section>

      {/* Sección principal del footer */}
      <section className="relative" aria-labelledby="footer-content-heading">
        <div>
          <div className="z-10 w-full">
            <span
              className="hidden lg:block absolute top-1/2 left-[27px] text-jci-aqua text-[11px] font-semibold z-20 leading-[60px] tracking-[1px] uppercase transform -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap"
              aria-hidden="true"
              role="presentation"
            >
              Conócenos mejor
            </span>

            <div className="pt-14 md:pt-20 lg:pt-48 md:px-20">
              {/* Items */}
              <div className="relative z-10 max-w-6xl mx-8 sm:mx-auto">
                <div className="flex flex-row justify-between items-center gap-8 mb-8">
                  <Link href="/" aria-label="Ir a Inicio">
                    <Image
                      alt="JCI Ambato Logo"
                      className="object-contain w-[100px] h-[45px]"
                      src="/images/logos/jci-ambato.webp"
                      width={85}
                      height={85}
                    />
                  </Link>
                  {/* <div className="flex flex-col md:flex-row gap-1 md:gap-8">
                    <Link href="https://jciecuador.com/" target="_blank" aria-label="Ir a JCI Ecuador">
                      <Image
                        alt="JCI Ecuador Logo"
                        className="object-contain w-[85px] h-[45px]"
                        src="/images/logos/jci-ecuador.png"
                        width={85}
                        height={85}
                      />
                    </Link>

                    <Link href="https://jci.cc/" target="_blank" aria-label="Ir a JCI Ecuador">
                      <Image
                        alt="JCI Logo"
                        className="object-contain w-[72px] h-[45px]"
                        src="/images/logos/jci.png"
                        width={85}
                        height={85}
                      />
                    </Link>
                  </div> */}
                </div>

                <div className="flex md:flex-row">
                  {/* Navegación del footer */}
                  <nav
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 flex-1"
                    aria-label="Enlaces de navegación del pie de página"
                  >
                    {jciLinks.map((section) => (
                      <div key={section.title} className="flex flex-col">
                        <h3 className="text-base font-semibold">
                          <Link href={section.href || ""} className="hover:text-gray-500">
                            {section.title}
                          </Link>
                        </h3>
                        <ul className="flex flex-col mt-3 m-1 mb-0 max-w-36 space-y-2" role="list">
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
                      className="flex flex-col justify-center items-center gap-4"
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
                      {/* <a
                        href={siteConfig.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Síguenos en YouTube"
                      >
                        <FaYoutube className="hover:text-jci-seafoam" aria-hidden="true" />
                      </a> */}

                      {/* Botón para volver arriba para pantallas pequeñas y medianas*/}
                      <div className="block lg:hidden mt-10">
                        <button
                          type="button"
                          aria-label="Volver arriba"
                          onClick={handleScrollToTop}
                          className={isClient ? "block" : "hidden"}
                          suppressHydrationWarning
                        >
                          <HiOutlineArrowUp className="w-10 h-10" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>

              {/* Derechos reservados */}
              <div className="relative py-5 z-10 max-w-6xl mx-8 mt-16 sm:mx-auto">
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 text-jci-gray">
                  <p className="text-xs md:text-sm text-default-400">
                    © 2025 JCI Ambato. Todos los Derechos Reservados.
                  </p>

                  <div className="flex flex-row justify-start gap-5">
                    <p className="text-xs md:text-sm text-default-600">
                      <Link href="/politica-gestion" className="hover:text-gray-500">
                        Política de Gestión
                      </Link>
                    </p>

                    <p className="text-xs md:text-sm text-default-600">
                      <Link href="/politica-privacidad" className="hover:text-gray-500">
                        Política de Privacidad
                      </Link>
                    </p>
                  </div>
                </div>

                {/*  <Image
                  src="/images/test1.png"
                  alt="Descripción de la imagen"
                  className="relative -bottom-8 h-20 w-auto object-cover"
                  width={500}
                  height={100}
                /> */}
              </div>
            </div>

            {/* Botón para volver arriba, pantallas grandes*/}
            <div className="hidden lg:block absolute top-[45%] md:top-[50%] lg:top-[30%] right-[5%] md:right-[8%] lg:right-[5%]">
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Volver arriba"
                  onClick={handleScrollToTop}
                  className={isClient ? "block" : "hidden"}
                  suppressHydrationWarning
                >
                  <HiOutlineArrowUp className="w-10 h-10" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
