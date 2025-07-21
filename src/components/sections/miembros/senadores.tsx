import { senadoresData } from "@/data/senadores";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Senadores() {
    return (
        <section className="relative py-16 z-10" aria-labelledby="senadores-heading">
            <div className="max-w-6xl mx-8 lg:mx-auto">
                {/* Header */}
                <header className="text-start mb-12">
                    <h2 id="senadores-heading" className="text-3xl md:text-5xl font-bold text-gray-800">
                        Senaduría
                    </h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-3xl">
                        Reconocidos por su <strong>compromiso</strong> y <strong>logros destacados</strong>, son el pilar de JCI. Como mentores inspiradores, guían a las nuevas generaciones, fortalecen los valores organizacionales y promueven un liderazgo transformador alineado con la visión de JCI Ambato.
                    </p>
                </header>

                {/* Miembros Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-12" role="list" aria-label="Lista de senadores">
                    {senadoresData.map((miembro, index) => (
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