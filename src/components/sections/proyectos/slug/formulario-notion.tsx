export default function FormularioNotion() {
    return (
        <section className="my-12 md:my-24" aria-labelledby="formulario-heading">
            <div className="relative z-[1] bg-transparent max-w-6xl px-8 md:mx-auto">
                <article className="flex">
                    {/* Caja de Información */}
                    <div className="hidden md:block relative">
                        <div className="absolute top-[80px] left-[24px] transform -translate-x-1/2 -translate-y-1/2 -rotate-90">
                            <div className="text-[#aeaeae] leading-none text-[11px] font-medium relative not-italic tracking-[2px] whitespace-nowrap uppercase">
                                <span className="absolute top-[6px] left-[-170px] w-[160px] h-px bg-[#aeaeae]"></span>
                                Inscripción
                            </div>
                        </div>
                    </div>

                    <div className="relative md:ml-[170px] w-full">
                        <header className="mt-20 mb-8">
                            <h2 id="formulario-heading" className="text-4xl md:text-5xl not-italic text-left leading-[1.17] tracking-normal text-black max-w-[470px]">
                                Regístrate ahora
                            </h2>
                            <p className="mt-4 text-lg text-jci-off-black max-w-md">
                                Completa el formulario para asegurar tu lugar en DominArte.
                            </p>
                        </header>

                        <div className="w-full">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <iframe
                                    src="https://stream-bottom-dbb.notion.site/ebd/249df6a911fd8086bc13e350cdca58b5"
                                    width="100%"
                                    height="600"
                                    className="border-0 w-full"
                                    title="Formulario de inscripción - DominArte"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
