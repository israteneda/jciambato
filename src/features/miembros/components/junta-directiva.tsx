import { Section } from "@/components/layout/section";
import { juntaDirectiva } from "@/features/miembros/data/junta-directiva";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function JuntaDirectiva() {
  return (
    <Section className="bg-jci-bg py-24 md:py-34" aria-labelledby="junta-directiva-heading">
      <div className="mx-8 max-w-5xl md:mx-20 lg:mx-auto">
        {/* Header */}
        <header className="mb-12 text-start">
          <h2
            id="junta-directiva-heading"
            className="text-jci-black text-3xl font-bold md:text-5xl"
          >
            Junta Directiva 2026
          </h2>
          <p className="mt-2 max-w-3xl text-lg">
            Lidera la JCI local con <strong>visión estratégica</strong> y{" "}
            <strong>profesionalismo</strong>, impulsando iniciativas innovadoras, gestionando
            recursos con excelencia y ejecutando proyectos alineados con la misión y visión de la
            organización.
          </p>
        </header>

        {/* Miembros Grid */}
        <div
          className="grid grid-cols-1 gap-x-14 gap-y-9 md:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Lista de miembros de la junta directiva"
        >
          {juntaDirectiva.map((miembro, index) => (
            <article
              key={index}
              className={`group flex flex-col items-center text-center ${index % 3 !== 1 ? "lg:mt-12" : ""} `}
              role="listitem"
            >
              <figure className="w-full transform overflow-hidden bg-white transition-transform duration-300 group-hover:scale-105">
                {miembro.imagen ? (
                  <Image
                    src={miembro.imagen}
                    alt={`Foto de ${miembro.nombre} ${miembro.apellido}`}
                    width={800}
                    height={800}
                    className="h-auto w-full object-cover md:h-96"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    draggable="false"
                    priority={index < 6}
                  />
                ) : (
                  <div className="bg-jci-navy flex h-auto w-full items-center justify-center md:h-96">
                    <span className="h-full text-lg text-white">Próximamente</span>
                  </div>
                )}
              </figure>

              <div className="w-full py-5 text-start">
                <div className="flex flex-col justify-between lg:flex-row">
                  <div>
                    <h3 className="text-jci-black text-xl font-bold">
                      {miembro.nombre} {miembro.apellido}
                    </h3>
                    <p className="text-md text-jci-black">{miembro.cargo}</p>
                  </div>

                  <div className="flex items-center">
                    {miembro.social && (miembro.social.instagram || miembro.social.linkedin) && (
                      <nav
                        className="mt-3 flex items-center space-x-4"
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
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
