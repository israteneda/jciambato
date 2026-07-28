import { miembrosNacionales } from "@/features/miembros/data/miembros-nacionales";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function MiembrosNacionales() {
  return (
    <section className="relative z-10 py-16" aria-labelledby="miembros-activos-heading">
      <div className="mx-8 max-w-6xl md:mx-20 lg:mx-auto">
        {/* Header */}
        <header className="mb-12 text-start">
          <h2
            id="miembros-activos-heading"
            className="text-jci-black text-3xl font-bold md:text-5xl"
          >
            En JCI Ecuador
          </h2>
          <p className="text-jci-black mt-2 max-w-3xl text-lg">
            Esta participación proyecta el impacto local hacia escenarios nacionales e
            internacionales, mediante <strong>iniciativas de alto alcance</strong>, la conexión con
            <strong> líderes globales</strong> y la colaboración en
            <strong> proyectos internacionales</strong> que promueven soluciones innovadoras y el
            compromiso con los valores de la JCI.
          </p>
        </header>

        {/* Miembros Grid */}
        <div
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
          role="list"
          aria-label="Lista de miembros activos"
        >
          {miembrosNacionales.map((miembro, index) => (
            <article key={index} className="flex flex-col items-center text-center" role="listitem">
              <figure className="mb-4 h-36 w-36 lg:h-48 lg:w-48">
                <Image
                  src={miembro.imagen}
                  alt={`Foto de ${miembro.nombre} ${miembro.apellido}`}
                  width={256}
                  height={256}
                  draggable={false}
                  className="h-full w-full rounded-full object-cover"
                />
              </figure>
              <h3 className="text-jci-black text-lg font-bold">
                {miembro.nombre} {miembro.apellido}
              </h3>
              <p className="text-jci-navy mb-3 text-sm">{miembro.cargo}</p>

              {miembro.social && (miembro.social.instagram || miembro.social.linkedin) && (
                <nav
                  className="flex items-center space-x-4"
                  aria-label={`Redes sociales de ${miembro.nombre}`}
                >
                  {miembro.social.instagram && (
                    <a
                      href={miembro.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-jci-black hover:text-jci-teal transition-colors"
                      aria-label={`Instagram de ${miembro.nombre}`}
                    >
                      <FaInstagram />
                    </a>
                  )}
                  {miembro.social.linkedin && (
                    <a
                      href={miembro.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-jci-black hover:text-jci-teal transition-colors"
                      aria-label={`LinkedIn de ${miembro.nombre}`}
                    >
                      <FaLinkedin />
                    </a>
                  )}
                </nav>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
