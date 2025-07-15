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
                    <div className="flex flex-col gap-4">
                        <p className="text-lg text-gray-600 mt-2">
                            Los Senadores son <strong>miembros honorarios</strong> distinguidos por su compromiso excepcional con la organización y su misión de generar un impacto positivo en la comunidad. Este prestigioso título se les otorga en reconocimiento a sus destacados logros, servicio ejemplar y dedicación sostenida.
                        </p>
                        <p className="text-lg text-gray-600 mt-2">
                            Como líderes y mentores, los Senadores <strong>inspiran y guían a los miembros más jóvenes</strong>, promoviendo activamente los programas y actividades de la JCI. Su experiencia y compromiso los convierten en un pilar invaluable, fortaleciendo el liderazgo, la colaboración y el cumplimiento de la visión de la JCI Ambato.
                        </p>
                    </div>
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