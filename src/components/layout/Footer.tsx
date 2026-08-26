import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { jciLinks } from "@/features/inicio/data/footer";
import { siteConfig } from "@/config/seo";
import { Section } from "./section";
import { Container } from "./container";

export function Footer() {
  return (
    <footer>
      {/* Sección de llamada a la acción */}
      <Section className="bg-jci-blue py-24 md:py-48" aria-labelledby="cta-heading">
        <div className="mb-0 lg:mb-16">
          <Container>
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

                <div className="my-16 text-white md:ml-48">
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
          </Container>
        </div>
      </Section>
      {/* Sección decorativa */} {/* text-[clamp(100px,13vw,190px)] */}
      <Section className="hidden py-0 md:block md:py-0" aria-hidden="true">
        <div className="pointer-events-none absolute -top-36.25 right-0 left-0 z-10 text-center leading-70 font-black tracking-normal whitespace-nowrap uppercase not-italic font-stretch-normal opacity-20 md:text-[clamp(100px,13vw,190px)] lg:text-[240px]">
          JCI AMBATO
        </div>
      </Section>
      {/* Sección principal del footer */}
      <Section
        className="bg-jci-bg hidden py-0 md:block md:py-0"
        aria-labelledby="footer-content-heading"
      >
        <div className="w-full">
          <span
            className="text-jci-teal absolute top-1/2 left-6.75 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 transform text-[11px] leading-15 font-semibold tracking-[1px] whitespace-nowrap uppercase lg:block"
            aria-hidden="true"
            role="presentation"
          >
            Conócenos mejor
          </span>

          <div className="pt-14 md:pt-20 lg:pt-48">
            {/* Items */}
            <Container>
              <div className="mb-8 flex flex-row items-center justify-between gap-8">
                <Link href="/" aria-label="Ir a Inicio">
                  <Image
                    alt="JCI Ambato Logo"
                    className="h-15 w-auto object-contain"
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
            </Container>

            {/* Derechos reservados */}
            <Container className="mt-14">
              <div className="py-5">
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
            </Container>
          </div>
        </div>
      </Section>
    </footer>
  );
}
