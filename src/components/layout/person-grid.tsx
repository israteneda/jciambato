import { Container } from "./container";
import { Section } from "./section";
import { Miembro } from "@/types/miembro";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

interface PersonGridProps {
  title: string;
  description: React.ReactNode;
  data: Miembro[];
  ariaLabel: string;
  headingId: string;
  sectionClassName?: string;
}

export function PersonGrid({
  title,
  description,
  data,
  ariaLabel,
  headingId,
  sectionClassName = "bg-jci-bg",
}: PersonGridProps) {
  return (
    <Section className={sectionClassName} aria-labelledby={headingId}>
      <Container>
        <header className="mb-12 text-start">
          <h2 id={headingId} className="text-jci-black text-3xl font-bold md:text-5xl">
            {title}
          </h2>
          <p className="text-jci-black mt-2 max-w-3xl text-lg">{description}</p>
        </header>

        <div
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
          role="list"
          aria-label={ariaLabel}
        >
          {data.map((miembro, index) => (
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
