export default function Accion() {
    return (
        <section className="relative z-10">
            <div className="flex flex-col justify-center items-center">
                <div className="w-full flex justify-center">
                    <div className="relative mx-auto md:max-w-6xl py-20 px-8 md:px-24 pb-36 bg-white">

                        <div className="relative">
                            <div className="text-[13px] leading-[1.85] not-italic uppercase text-jci-gold font-bold tracking-normal">
                                Grupo JCI
                            </div>
                            <div className="mt-8">
                                <h3 className="font-bold text-3xl md:text-5xl leading-[1.33] tracking-normal text-jci-navy text-left max-w-4xl">
                                    Se parte de un mundo cambiante, contribuir día a día, estés donde estés.
                                </h3>
                            </div>
                            <div className="mt-8">
                                <p className="text-base md:text-lg font-normal leading-[1.78] tracking-normal text-[rgb(50,50,50)] text-left max-w-[666px]">
                                    Únete a la red global de jóvenes que ya está creando soluciones reales. No importa si tienes experiencia o recién comienzas: lo que necesitas es voluntad de actuar.
                                </p>
                            </div>

                            {/* <div className="mt-9">
                                <Button
                                    radius="none"
                                    className="relative bg-jci-aqua text-white group overflow-hidden"
                                    aria-label="Más información sobre nosotros"
                                >
                                    <span className="absolute inset-0 w-full h-full transform -translate-x-full bg-cyan-950 transition-transform duration-300 group-hover:translate-x-0"></span>
                                    <span className="relative z-10">Únete a nosotros y sé parte del cambio.</span>
                                </Button>
                            </div> */}

                            <div className="mt-9">
                                <div className="text-[22px] font-bold not-italic text-left leading-[1.25] tracking-normal text-jci-aqua">
                                    Grupo JCI Ambato
                                </div>

                                <div className="mt-6">
                                    <div className="flex">
                                        <div className="mr-8">
                                            <div className="text-[18px] font-bold not-italic leading-[1.78] tracking-normal text-[#323232] text-left">
                                                Ambato, Ecuador
                                            </div>
                                            <div className="mt-2">
                                                <div className="text-sm font-normal not-italic leading-[1.78] tracking-normal text-[#323232] text-left">
                                                    Zona Centro, Apartado 17
                                                </div>
                                                <div className="text-sm font-normal not-italic leading-[1.78] tracking-normal text-[#323232] text-left">
                                                    Av. Cevallos y Av. 10 de Agosto, Ambato, Ecuador
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mr-8">
                                            <div className="text-[18px] font-bold not-italic leading-[1.78] tracking-normal text-[#323232] text-left">
                                                Teléfono
                                            </div>
                                            <div className="mt-2">
                                                <div className="text-sm font-normal not-italic leading-[1.78] tracking-normal text-[#323232] text-left">
                                                    +593 98 456 7890
                                                </div>
                                                <div className="text-sm font-normal not-italic leading-[1.78] tracking-normal text-[#323232] text-left">
                                                    +593 98 456 7890
                                                </div>

                                            </div>
                                        </div>

                                        <div className="mr-8">
                                            <div className="text-[18px] font-bold not-italic leading-[1.78] tracking-normal text-[#323232] text-left">
                                                Correo
                                            </div>
                                            <a
                                                href="mailto:info@jciecuador.com"
                                                className="text-sm text-jci-aqua leading-[1.5] not-italic font-normal tracking-normal underline font-aeonik-regular"
                                            >
                                                info@jciambato.com
                                            </a>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}