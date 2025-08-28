import { miembrosNacionalesData } from "@/data/miembros-nacionales";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";


export default function MiembrosNacionales() {
    return (
        <section className="relative py-16 z-10" aria-labelledby="miembros-activos-heading">
            <div className="max-w-6xl mx-8 md:mx-20 lg:mx-auto">
                {/* Header */}
                <header className="text-start mb-12">
                    <h2 id="miembros-activos-heading" className="text-3xl md:text-5xl font-bold text-gray-800">
                        En JCI Ecuador
                    </h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-3xl">
                        Formar parte de JCI Ecuador eleva el impacto de los miembros locales a escenarios nacionales e internacionales. Colaboran en <strong>iniciativas de alto alcance</strong>, <strong>conectan con líderes globales</strong> y <strong>participan en proyectos internacionales</strong> que impulsan soluciones innovadoras, fomentando el intercambio cultural y el compromiso con los valores de la JCI.
                    </p>
                </header>

                {/* Miembros Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-12" role="list" aria-label="Lista de miembros activos">
                    {miembrosNacionalesData.map((miembro, index) => (
                        <article key={index} className="flex flex-col items-center text-center" role="listitem">
                            <figure className="w-36 h-36 lg:w-48 lg:h-48 mb-4">
                                <Image
                                    src={miembro.imagen}
                                    alt={`Foto de ${miembro.nombre}`}
                                    width={256}
                                    height={256}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </figure>
                            <h3 className="font-bold text-lg text-gray-800">{miembro.nombre}</h3>
                            <p className="text-sm text-gray-500 mb-3">{miembro.cargo}</p>

                            {miembro.social && (miembro.social.instagram || miembro.social.linkedin) && (
                                <nav className="flex items-center space-x-4" aria-label={`Redes sociales de ${miembro.nombre}`}>
                                    {miembro.social.instagram && (
                                        <a
                                            href={miembro.social.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-gray-600 transition-colors"
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
                                            className="text-gray-400 hover:text-gray-600 transition-colors"
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