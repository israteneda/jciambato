"use client"
import { Proyecto } from "@/data/proyectos";

interface DocumentosProps {
    proyecto: Proyecto;
}

export default function Documentos({ proyecto }: DocumentosProps) {
    if (!proyecto.documentos || proyecto.documentos.length === 0) {
        return null;
    }

    const getIconForType = (tipo: string) => {
        switch (tipo) {
            case "pdf":
                return (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                );
            case "doc":
                return (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                );
            case "link":
                return (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828L11.828 10H14a2 2 0 110 4h-4a2 2 0 01-2-2v-4a2 2 0 012-2h2.172L9.414 4.586a2 2 0 012.828-2.828z" clipRule="evenodd" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                );
        }
    };

    return (
        <section className="relative bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-jci-off-black mb-4">
                        Documentos y Recursos
                    </h2>
                    <p className="text-lg text-jci-black max-w-3xl mx-auto">
                        Descarga los materiales y documentos relacionados con {proyecto.titulo}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {proyecto.documentos.map((documento, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 text-jci-aqua">
                                    {getIconForType(documento.tipo)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-semibold text-jci-off-black mb-2">
                                        {documento.nombre}
                                    </h3>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm text-jci-black uppercase tracking-wider">
                                            {documento.tipo}
                                        </span>
                                        <span className="text-gray-400">•</span>
                                        <a
                                            href={documento.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-jci-aqua hover:text-jci-aqua/80 font-medium text-sm transition-colors duration-200"
                                        >
                                            Descargar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 