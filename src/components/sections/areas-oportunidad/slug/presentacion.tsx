import { AreaOportunidad } from "@/data/areas-oportunidad";
import Image from "next/image";

export default function Presentacion({ area }: { area: AreaOportunidad }) {
    return (
        <section className="relative z-20 overflow-hidden" aria-labelledby={`presentacion-${area.slug}-heading`}>
            <div className="relative z-[1] bg-transparent max-w-6xl mx-8 md:mx-20 lg:mx-auto">
                <div className="mt-16">
                    <div className="max-w-5xl">
                        <header>
                            <div className="text-xs leading-[1.85] not-italic uppercase text-[#989898] font-bold tracking-normal">
                                {area.subtitle}
                            </div>

                            <div className="mt-8">
                                <h2 id={`presentacion-${area.slug}-heading`} className="text-3xl md:text-5xl font-bold md:leading-[1.33] text-black text-left">
                                    {area.description}
                                </h2>
                            </div>
                        </header>

                        <div className="mt-16 md:mt-20">
                            <p className="text-base leading-loose text-jci-off-black text-justify md:text-left columns-1 lg:columns-2 gap-10 space-y-4">
                                {area.longDescription}
                            </p>
                        </div>

                        {/* Logo Area */}
                        <div className="my-10">
                            <div className="flex justify-center py-5">
                                {area.logo && (
                                    <Image
                                        src={area.logo}
                                        alt={`Logo de ${area.title}`}
                                        width={400} height={0}
                                        draggable="false"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}