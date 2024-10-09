import Link from "next/link";
import { Divider } from "@nextui-org/divider";

const FooterLinkList = ({ title, links }) => (
  <div>
    <h3 className="text-small font-semibold text-gray-800">{title}</h3>
    <ul className="mt-6 space-y-4 text-gray-500">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className="hover:text-gray-700">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export function FooterComponent() {
  const jciLinks = [
    { text: "Nosotros", href: "#" },
    { text: "Equipo Local", href: "#" },
    { text: "Política y Privacidad", href: "#" },
    { text: "Contáctanos", href: "#" },
  ];

  const opportunityAreas = [
    "Negocios y Emprendimiento",
    "Cooperación Internacional",
    "Desarrollo Individual",
    "Impacto en la Comunidad",
  ];

  return (
    <footer className="bg-gray-100">
      <div className="relative">
        <div className="absolute inset-2">
          <section className="px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
              <div className="relative pb-16 pt-20 text-start sm:py-24">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Conviértete en un Jaycees
                </h2>
                <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
                  ¿Tienes un proyecto en mente?
                </p>
              </div>

              <div className="pb-10">
                <div className="grid grid-cols-1 gap-y-10 gap-8 pb-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                  <FooterLinkList title="JCI Ambato" links={jciLinks} />
                  <FooterLinkList
                    title="Áreas de Oportunidad"
                    links={opportunityAreas.map((area) => ({
                      text: area,
                      href: "#",
                    }))}
                  />
                  <FooterLinkList title="JCI Ambato" links={jciLinks} />
                  <FooterLinkList
                    title="Áreas de Oportunidad"
                    links={opportunityAreas.map((area) => ({
                      text: area,
                      href: "#",
                    }))}
                  />
                </div>

                <Divider className="shrink-0 bg-divider border-none w-full h-divider mt-16 sm:mt-20 lg:mt-24" />

                <div className="flex flex-wrap justify-between gap-2 pt-8">
                  <p className="text-small text-default-400">
                    © 2024 Cámara Junior Internacional - Capítulo Ambato. Todos
                    los Derechos Reservados.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
