import { AreaOportunidad } from "@/data/areas-oportunidad";
import Image from "next/image";

export default function Responsable({ area }: { area: AreaOportunidad }) {
    return (
        <section className="relative z-10 md:my-32">
            <div className="relative z-10 max-w-5xl md:max-w-6xl mx-auto">

                {/* Bloque de información */}
                <div className="mx-8 md:mx-28">
                    <div className="flex">
                        <div className="hidden md:block absolute top-[80px] left-0 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform">
                            <div className="relative text-[rgb(174,174,174)] leading-none text-[11px] font-medium not-italic tracking-[2px] whitespace-nowrap uppercase" aria-hidden="true">
                                responsable
                                <span className="absolute top-[6px] left-[-170px] w-[160px] h-[1px] bg-[rgb(174,174,174)] content-['']"></span>
                            </div>
                        </div>

                        <div className="md:mr-48">
                            <header>
                                <div className="mt-20">
                                    <h2 className="text-4xl md:text-5xl font-bold not-italic text-left leading-[1.17] tracking-normal text-black md:max-w-[470px]">
                                        Vicepresidencia
                                    </h2>
                                </div>
                                <div className="mt-8">
                                    <p className="text-medium font-normal not-italic leading-[1.78] tracking-normal text-[rgb(50,50,50)] text-left md:max-w-[470px]">
                                        Desde la concepción de JCI, el liderazgo ha sido un eje central.
                                    </p>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>

                {/* Bloque de Imagen Responsable */}
                <div className="my-8">
                    <div className="flex flex-col md:flex-row mx-8 md:ml-48 md:mr-0">

                        <div className="text-xl md:text-2xl font-bold leading-[1.33] text-[#323232] w-full md:w-1/2 flex pr-0 md:pr-10 box-border items-center mb-6 md:mb-0">
                            <div className="p-[24px_0_24px_0] md:p-[24px_40px_24px_0] w-full border-b border-[#cccccc]">
                                {area.responsable}
                                <p className="text-lg md:text-xl leading-[1.5] not-italic font-normal tracking-normal">
                                    {area.correo}
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <Image src={area.responsable_image} alt={area.responsable} width={100} height={100} className="w-64 h-64 md:w-auto md:h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}