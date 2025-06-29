import { juntaDirectivaData } from "@/data/junta-directiva";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Miembros() {
    return (
        <section className="relative py-16 z-10" aria-labelledby="junta-directiva-heading">
            <div className="max-w-6xl mx-8 lg:mx-auto">
                {/* Header */}
                <header className="text-start mb-12">
                    <h2 id="junta-directiva-heading" className="text-3xl md:text-5xl font-bold text-gray-800">
                        Junta Directiva
                    </h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-3xl">
                        Conforma miembros que se encargan de la gestión de la Cámara Junior Internacional del Ecuador - Capítulo Ambato.
                    </p>
                </header>

                {/* Miembros Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16" role="list" aria-label="Lista de miembros de la junta directiva">
                    {juntaDirectivaData.map((miembro, index) => (
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
                                        alt={`Foto de ${miembro.nombre}`}
                                        width={400}
                                        height={400}
                                        className="w-full h-auto md:h-96 object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-auto md:h-96 bg-gray-400 flex items-center justify-center">
                                        <span className="text-white h-full text-lg">Próximamente</span>
                                    </div>
                                )}
                            </figure>

                            <div className="w-full py-5 text-start">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="font-bold text-xl text-jci-black">{miembro.nombre}</h3>
                                        <p className="text-md text-jci-gray">
                                            {miembro.cargo}
                                        </p>
                                    </div>

                                    <div className="flex items-center">
                                        {miembro.social && (
                                            <nav className="flex items-center space-x-4 mt-3" aria-label={`Redes sociales de ${miembro.nombre}`}>
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