import { juntaDirectiva } from "@/data/miembros/junta-directiva";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Miembros() {
  return (
    <section className="relative py-16 z-10" aria-labelledby="junta-directiva-heading">
      <div className="max-w-5xl mx-8 md:mx-20 lg:mx-auto">
        {/* Header */}
        <header className="text-start mb-12">
          <h2 id="junta-directiva-heading" className="text-3xl md:text-5xl font-bold text-gray-800">
            Junta Directiva 2025
          </h2>
          <p className="text-lg text-gray-600 mt-2 max-w-3xl">
            Lidera con <strong>visión</strong> y <strong>profesionalismo</strong> la JCI local,
            impulsando estrategias innovadoras, gestionando recursos con excelencia y ejecutando
            proyectos que reflejan la misión y visión de la organización.
          </p>
        </header>

        {/* Miembros Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-9"
          role="list"
          aria-label="Lista de miembros de la junta directiva"
        >
          {juntaDirectiva.map((miembro, index) => (
            <article
              key={index}
              className={`flex flex-col items-center text-center group ${
                // Apply margin-top to the side elements in each row on large screens
                index % 3 !== 1 ? "lg:mt-12" : ""
              }`}
              role="listitem"
            >
              <figure className="w-full bg-gray-300 overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                {miembro.imagen ? (
                  <Image
                    src={miembro.imagen}
                    alt={`Foto de ${miembro.nombre} ${miembro.apellido}`}
                    width={800}
                    height={800}
                    className="w-full h-auto md:h-96 object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    draggable="false"
                    priority={index < 6}
                  />
                ) : (
                  <div className="w-full h-auto md:h-96 bg-gray-400 flex items-center justify-center">
                    <span className="text-white h-full text-lg">Próximamente</span>
                  </div>
                )}
              </figure>

              <div className="w-full py-5 text-start">
                <div className="flex flex-col lg:flex-row justify-between">
                  <div>
                    <h3 className="font-bold text-xl text-jci-black">
                      {miembro.nombre} {miembro.apellido}
                    </h3>
                    <p className="text-md text-jci-gray">{miembro.cargo}</p>
                  </div>

                  <div className="flex items-center">
                    {miembro.social && (miembro.social.instagram || miembro.social.linkedin) && (
                      <nav
                        className="flex items-center space-x-4 mt-3"
                        aria-label={`Redes sociales de ${miembro.nombre}`}
                      >
                        <a
                          href={miembro.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          aria-label={`Instagram de ${miembro.nombre}`}
                        >
                          <FaInstagram />
                        </a>

                        <a
                          href={miembro.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          aria-label={`LinkedIn de ${miembro.nombre}`}
                        >
                          <FaLinkedin />
                        </a>
                      </nav>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
