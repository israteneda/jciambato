import { RotatedText } from "@/components/commons";
import { Proyecto, getAllProyectos } from "@/data/proyectos";
import Image from "next/image";
import Link from "next/link";


export default function SiguienteProyecto({ proyecto }: { proyecto: Proyecto }) {
    // Obtener todos los proyectos y encontrar el siguiente
    const allProyectos = getAllProyectos();
    const currentIndex = allProyectos.findIndex(a => a.slug === proyecto.slug);
    const nextIndex = (currentIndex + 1) % allProyectos.length; // Ciclo al inicio si es la última
    const nextProyecto = allProyectos[nextIndex];

    if (!proyecto || !proyecto.titulo || !nextProyecto) {
        return null; // O puedes retornar un componente de error/loading
    }

    return (
        <section className="relative z-[1] bg-transparent">
            <div className="py-28 bg-[#e8e8e8]">
                <div className="relative">
                    {/* Texto rotado */}
                    <RotatedText
                        text="Nuestros Proyectos"
                    />
                    {/* Caja de Información */}
                    <div>
                        <div className="relative z-10 bg-transparent max-w-6xl mx-8 md:mx-20 lg:mx-auto">
                            <Link href={`/proyectos/${nextProyecto.slug}`} className="md:ml-48 group cursor-pointer" aria-label={`Ir a ${nextProyecto.titulo}`}>
                                <div className="relative z-10">
                                    <div className="text-[13px] leading-[1.85] not-italic uppercase text-[#989898] font-aeonik font-bold tracking-normal">
                                        Proyectos
                                    </div>
                                    <div className="mt-2">
                                        <div className="flex flex-col md:flex-row gap-2 md:items-center">

                                            <div className="flex flex-col gap-1">
                                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-left leading-[1.33] tracking-normal text-jci-black max-w-4xl">
                                                    Siguiente Proyecto
                                                </h2>
                                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold not-italic text-left leading-[1.33] tracking-normal text-jci-black max-w-4xl">
                                                    {nextProyecto.titulo}
                                                </h2>
                                            </div>

                                            <div className="my-8 md:ml-56">

                                                <Image
                                                    src="/icons/arrow-right-gray.svg"
                                                    alt=""
                                                    width={128}
                                                    height={128}
                                                    className="h-20 w-20 md:h-32 md:w-32 transform transition-transform duration-300 group-hover:translate-x-4 -rotate-90"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Link>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}