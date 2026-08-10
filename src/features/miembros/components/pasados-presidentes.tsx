import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { pasadosPresidentes } from "@/features/miembros/data/pasados-presidentes";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function PasadosPresidentes() {
  return (
    <Section aria-labelledby="pasados-presidentes-heading">
      <Container>
        {/* Header */}
        <header className="mb-12 text-start">
          <h2
            id="pasados-presidentes-heading"
            className="text-jci-black text-3xl font-bold md:text-5xl"
          >
            Pasados Presidentes
          </h2>
          <p className="text-jci-black mt-2 max-w-3xl text-lg">
            Líderes que dejaron una huella en la <strong>historia de JCI Ambato</strong> a través de
            su gestión y compromiso institucional. Su legado se refleja en el
            <strong> fortalecimiento organizacional</strong> y la
            <strong> formación de nuevas generaciones de líderes</strong>, siendo referentes de
            visión, servicio y continuidad.
          </p>
        </header>

        {/* Miembros Grid */}
        <div
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
          role="list"
          aria-label="Lista de pasados presidentes"
        >
          {pasadosPresidentes.map((miembro, index) => (
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

              <p className="text-jci-black mb-3 text-sm">{miembro.cargo}</p>

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
      </Container>
    </Section>
  );
}
