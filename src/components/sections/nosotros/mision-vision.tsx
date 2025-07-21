import Image from "next/image";

export default function MisionVision() {
    return (
        <section className="relative my-24 md:my-48">
            <div className="relative max-w-6xl px-8 md:mx-auto">
                <div className="flex flex-col md:flex-row gap-24 md:gap-0 items-center justify-between">
                    {/* Caja de Información */}
                    <div>
                        <div className="flex">
                            {/* Texto Vertical */}
                            <div className="hidden md:block absolute top-0 left-3 translate-x-[-50%] translate-y-[-50%] -rotate-90 origin-bottom-right">
                                <div className="text-[#aeaeae] leading-none text-[11px] font-medium relative tracking-[2px] uppercase after:content-[''] after:absolute after:top-[4px] after:w-[160px] after:h-[1px] after:bg-[#aeaeae] after:right-[160px]" aria-hidden="true">
                                    Nuestro Propósito
                                </div>
                            </div>

                            <div className="relative md:ml-44">
                                <header>
                                    <h2 className="text-4xl text-black font-bold leading-2 text-left">
                                        Nuestra Misión <br /> y Visión
                                    </h2>
                                </header>
                                <div className="mt-8">
                                    <div className="flex flex-col gap-3 text-gray-700 text-left text-medium leading-[1.78] max-w-[470px]">
                                        <p>Crear oportunidades de desarrollo para que jóvenes se conviertan en agentes de cambio positivo</p>

                                        <p>Ser la red de liderazgo juvenil más reconocida y transformadora del mundo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Caja de Imagen */}
                    <figure>
                        <Image
                            src="/icons/eye.svg"
                            alt="Icono representativo de misión y visión"
                            width={500}
                            height={500}
                            className="w-[220px] h-[220px] md:w-[320px] md:h-[320px] object-cover"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}