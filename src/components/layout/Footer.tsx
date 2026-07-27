import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { jciLinks } from "@/features/inicio/data/footer";
import { siteConfig } from "@/config/seo";

export function Footer() {
  return (
    <footer
      className="relative z-20 overflow-hidden bg-gray-50 select-none"
      role="contentinfo"
      aria-label="Pie de página"
    >
      {/* Sección de llamada a la acción */}
      <section className="bg-jci-blue relative z-10" aria-labelledby="cta-heading">
        <div className="px-8 pt-28 pb-16 md:p-20 md:py-36">
          <div className="mb-10 md:mb-20">
            <div className="relative z-10 mx-auto max-w-6xl">
              <Link
                href="/involucrate"
                className="group cursor-pointer"
                aria-label="Ir a Involúcrate"
              >
                <div className="flex flex-col items-start md:flex-row md:items-center">
                  <header>
                    <span className="text-sm leading-[1.85] font-bold tracking-normal text-gray-50 uppercase">
                      Conoce. Suma. Transforma.
                    </span>
                    <h2
                      id="cta-heading"
                      className="font-base mt-8 max-w-2xl text-3xl tracking-tight text-white md:text-4xl lg:text-5xl"
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
        <div className="pointer-events-none absolute -top-36.25 right-0 left-0 z-3 text-center leading-70 font-black tracking-normal whitespace-nowrap uppercase not-italic opacity-20 md:text-[125px] lg:text-[235px]">
          JCI AMBATO
        </div>
      </section>

      {/* Sección principal del footer */}
      <section className="relative" aria-labelledby="footer-content-heading">
        <div>
          <div className="z-10 w-full">
            <span
              className="text-jci-teal absolute top-1/2 left-6.75 z-20 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 transform text-[11px] leading-15 font-semibold tracking-[1px] whitespace-nowrap uppercase lg:block"
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
                      className="h-15 w-27.5 object-contain"
                      src="/images/marca/jci-ambato.webp"
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
                        <ul className="m-1 mt-3 mb-0 flex max-w-36 flex-col space-y-2" role="list">
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
                        <FaLinkedin className="hover:text-jci-teal h-6 w-6" aria-hidden="true" />
                      </a>
                      <a
                        href={siteConfig.links.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Síguenos en Facebook"
                      >
                        <FaFacebook className="hover:text-jci-teal h-6 w-6" aria-hidden="true" />
                      </a>
                      <a
                        href={siteConfig.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Síguenos en Instagram"
                      >
                        <FaInstagram className="hover:text-jci-teal h-6 w-6" aria-hidden="true" />
                      </a>
                    </div>
                  </aside>
                </div>
              </div>

              {/* Derechos reservados */}
              <div className="relative z-10 mx-8 mt-16 max-w-6xl py-5 sm:mx-auto">
                <div className="text-jci-gray flex flex-col justify-between gap-2 lg:flex-row lg:gap-5">
                  <p className="text-default-400 text-xs md:text-sm">
                    © 2026 JCI Ambato. Todos los Derechos Reservados.
                  </p>

                  <div>
                    <div className="flex flex-row justify-start gap-5">
                      <p className="text-default-600 text-xs md:text-sm">
                        <Link href="/politica-gestion" className="hover:text-gray-500">
                          Política de Gestión
                        </Link>
                      </p>

                      <p className="text-default-600 text-xs md:text-sm">
                        <Link href="/politica-privacidad" className="hover:text-gray-500">
                          Política de Privacidad
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
