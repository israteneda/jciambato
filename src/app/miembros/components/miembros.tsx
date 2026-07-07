import { miembros } from "@/data/miembros/miembros";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function MiembrosGenerales() {
  return (
    <section className="relative z-10 py-16" aria-labelledby="miembros-activos-heading">
      <div className="mx-8 max-w-6xl md:mx-20 lg:mx-auto">
        {/* Header */}
        <header className="mb-12 text-start">
          <h2
            id="miembros-activos-heading"
            className="text-3xl font-bold text-jci-black md:text-5xl"
          >
            Miembros
          </h2>
          <p className="mt-2 max-w-3xl text-lg text-jci-black">
            Integrado por personas de entre <strong>18 y 40 años</strong> comprometidas con la
            transformación, desarrollando proyectos que fortalecen el
            <strong> liderazgo</strong>, el <strong>emprendimiento</strong> y la
            <strong> acción comunitaria</strong>, generando impacto sostenible a nivel local,
            nacional y global.
          </p>
        </header>

        {/* Miembros Grid */}
        <div
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
          role="list"
          aria-label="Lista de miembros activos"
        >
          {miembros.map((miembro, index) => (
            <article key={index} className="flex flex-col items-center text-center" role="listitem">
              <figure className="mb-4 h-36 w-36 lg:h-48 lg:w-48">
                <Image
                  src={miembro.imagen}
                  alt={`Foto de ${miembro.nombre}`}
                  width={256}
                  height={256}
                  draggable="false"
                  className="h-full w-full rounded-full object-cover"
                />
              </figure>
              <h3 className="text-lg font-bold text-jci-black">
                {miembro.nombre} {miembro.apellido}
              </h3>
              <p className="mb-3 text-sm text-jci-navy">{miembro.cargo}</p>

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
                      className="text-jci-navy transition-colors hover:text-jci-teal"
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
                      className="text-jci-navy transition-colors hover:text-jci-teal"
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
