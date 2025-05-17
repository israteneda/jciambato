import Image from "next/image";
import { HiArrowLongRight, HiOutlineArrowUp } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  items: FooterLink[];
}

const jciLinks: FooterSection[] = [
  {
    title: "Nosotros",
    items: [
      { title: "Historia", href: "/nosotros/historia" },
      { title: "Misión y Visión", href: "/nosotros/mision-vision" },
      { title: "Valores", href: "/nosotros/valores" },
    ],
  },
  {
    title: "Áreas",
    items: [
      { title: "Comunidad", href: "/areas/comunidad" },
      { title: "Negocios", href: "/areas/negocios" },
      { title: "Internacional", href: "/areas/internacional" },
    ],
  },
  {
    title: "Actividades",
    items: [
      { title: "Eventos", href: "/actividades/eventos" },
      { title: "Proyectos", href: "/actividades/proyectos" },
      { title: "Capacitaciones", href: "/actividades/capacitaciones" },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      {/* Sección de llamada a la acción */}
      <section className="relative z-10 bg-cyan-600">
        <div className="p-10 md:p-28">
          <div className="pb-20">
            <div className="relative z-10 max-w-7xl m-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div>
                  <span className="text-xs text-white line-clamp-1 uppercase tracking-widest">
                    Conviértete en un líder
                  </span>
                  <h2 className="mt-8 text-4xl md:text-5xl font-medium tracking-tight text-white">
                    ¿Tienes un proyecto en mente?
                  </h2>
                </div>
                <div className="md:ml-52 text-white">
                  <HiArrowLongRight className="h-32 w-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección principal del footer */}

      <section className="relative">
        <div className="pb-0">
          <div className="z-10 w-full">
            <div className="pt-[192px] pb-[92px] mx-10">
              <div className="hidden xl:block absolute top-1/2 left-[30px] text-cyan-600 text-[11px] z-30 leading-[60px] tracking-[2px] uppercase transform -translate-x-1/2 -translate-y-1/2 rotate-[-90deg]">
                conócenos mejor
              </div>

              <div className="relative z-10 max-w-5xl mx-auto">
                <figure className="mb-10">
                  <Image
                    alt="JCI Ambato Logo"
                    className="object-cover"
                    height={85}
                    src="/images/logo-jci.png"
                    width={85}
                  />
                </figure>

                <div className="flex md:flex-row">
                  {/* Navegación del footer */}
                  <nav
                    className="flex flex-wrap justify-between flex-1 gap-8 md:gap-0"
                    aria-label="Footer Navigation"
                  >
                    {jciLinks.map((section) => (
                      <div key={section.title} className="flex flex-col">
                        <h3 className="text-base font-semibold">{section.title}</h3>
                        <ul className="flex flex-col mt-3 m-1 mb-0 max-w-36 space-y-2">
                          {section.items.map((item) => (
                            <li key={item.title} className="text-sm">
                              <a className="hover:text-gray-300" href={item.href}>
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </nav>

                  {/* Redes sociales */}
                  <div className="ml-20">
                    <div
                      className="flex flex-col justify-center gap-4"
                      aria-label="Social Media Links"
                    >
                      <a href="#" aria-label="LinkedIn">
                        <FaLinkedin />
                      </a>
                      <a aria-label="Facebook" href="#">
                        <FaFacebook />
                      </a>
                      <a aria-label="Instagram" href="#">
                        <FaInstagram />
                      </a>
                      <a aria-label="YouTube" href="#">
                        <FaYoutube />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Derechos reservados */}
            <div className="relative z-10 max-w-5xl mx-10">
              <div className="flex pb-12">
                <p className="text-small text-default-400">
                  © 2025 Cámara Junior Internacional | Capítulo Ambato. Todos los Derechos
                  Reservados.
                </p>
              </div>
            </div>

            {/* Botón para volver arriba */}
            <div className="absolute top-[20%] right-[6%] md:right-[5%]">
              <div className="flex items-center justify-center">
                <a aria-label="Volver arriba" href="#" role="button">
                  <HiOutlineArrowUp className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
