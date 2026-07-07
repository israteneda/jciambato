import { senadores } from "@/data/miembros/senadores";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Senadores() {
  return (
    <section className="relative z-10 py-16" aria-labelledby="senadores-heading">
      <div className="mx-8 max-w-6xl md:mx-20 lg:mx-auto">
        {/* Header */}
        <header className="mb-12 text-start">
          <h2 id="senadores-heading" className="text-3xl font-bold text-jci-black md:text-5xl">
            Senaduría
          </h2>
          <p className="mt-2 max-w-3xl text-lg text-jci-black">
            Al cumplir <strong>41 años</strong>, los miembros activos concluyen su etapa regular y
            pueden optar por la condición de <strong>Miembro Asociado Mayor (MAM)</strong>,
            manteniendo su vínculo con la JCI sin derecho a voto ni a cargos electivos.
            <br /> <br />
            La <strong>Senaduría JCI</strong> es una <strong>distinción honorífica</strong> otorgada
            a Miembros Asociados Mayores que, por su{" "}
            <strong>trayectoria, liderazgo y contribución excepcional</strong>, han generado un
            impacto significativo en la organización.
          </p>
        </header>

        {/* Miembros Grid */}
        <div
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
          role="list"
          aria-label="Lista de senadores"
        >
          {senadores.map((miembro, index) => (
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
