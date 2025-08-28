import { RotatedText } from "@/components/commons";
import { AreaOportunidad, getAllAreas } from "@/data/areas-oportunidad";
import Image from "next/image";
import Link from "next/link";


export default function SiguienteArea({ area }: { area: AreaOportunidad }) {
    // Obtener todas las áreas y encontrar la siguiente
    const allAreas = getAllAreas();
    const currentIndex = allAreas.findIndex(a => a.slug === area.slug);
    const nextIndex = (currentIndex + 1) % allAreas.length; // Ciclo al inicio si es la última
    const nextArea = allAreas[nextIndex];

    if (!area || !area.title || !nextArea) {
        return null; // O puedes retornar un componente de error/loading
    }

    return (
        <section className="relative z-[1] bg-transparent">
            <div className="py-28 bg-[#e8e8e8]">
                <div className="relative">
                    {/* Texto rotado */}
                    <RotatedText
                        text="Nuestras Áreas"
                    />
                    {/* Caja de Información */}
                    <div>
                        <div className="relative z-10 bg-transparent max-w-6xl mx-8 md:mx-20 lg:mx-auto">
                            <Link href={`/areas-oportunidad/${nextArea.slug}`} className="md:ml-48 group cursor-pointer" aria-label={`Ir a ${nextArea.title}`}>
                                <div className="relative z-10">
                                    <div className="text-[13px] leading-[1.85] not-italic uppercase text-[#989898] font-aeonik font-bold tracking-normal">
                                        Áreas de Oportunidad
                                    </div>
                                    <div className="mt-2">
                                        <div className="flex flex-col md:flex-row gap-2 md:items-center">

                                            <div className="flex flex-col">
                                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-left leading-[1.33] tracking-normal text-jci-black max-w-4xl">
                                                    Siguiente Área
                                                </h2>
                                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold not-italic text-left leading-[1.33] tracking-normal text-jci-black max-w-4xl">
                                                    {nextArea.title}
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