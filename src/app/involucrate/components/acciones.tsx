import Image from "next/image";

export default function Acciones() {
  return (
    <section className="relative z-10" aria-labelledby="accion-heading">
      <article className="relative max-w-6xl lg:mx-auto bg-white">
        <header className="p-8 md:p-20">
          <div className="text-[13px] leading-[1.85] not-italic uppercase text-jci-gold font-bold tracking-normal">
            Grupo JCI
          </div>
          <div className="mt-8">
            <h2
              id="accion-heading"
              className="font-bold text-3xl md:text-4xl lg:text-5xl lg:leading-[1.33] tracking-normal text-jci-navy text-left max-w-4xl"
            >
              Se parte de un mundo cambiante, contribuir día a día, estés donde estés.
            </h2>
          </div>
          <div className="mt-8">
            <p className="text-base md:text-lg font-normal md:leading-[1.78] tracking-normal text-[rgb(50,50,50)] text-left max-w-[666px]">
              Únete a la red global de jóvenes que ya está creando soluciones reales. No importa si
              tienes experiencia o recién comienzas: lo que necesitas es voluntad de actuar.
            </p>
          </div>

          <div className="mt-9">
            <div className="flex flex-col justify-between md:items-center md:flex-row">
              <div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold not-italic text-left leading-[1.25] tracking-normal text-jci-navy">
                    JCI Ecuador
                  </h3>
                  <h3 className="text-[18px] font-bold not-italic text-left leading-[1.25] tracking-normal text-jci-aqua">
                    JCI Ambato
                  </h3>
                </div>

                <address className="mt-6 not-italic">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="mr-8">
                      <h4 className="text-[18px] font-bold not-italic leading-[1.78] tracking-normal text-[#323232] text-left">
                        Ambato, Ecuador
                      </h4>
                      <div className="mt-2">
                        <p className="text-sm font-normal not-italic leading-[1.78] tracking-normal text-[#323232] text-left">
                          Zona Metropolitana de Ambato
                        </p>
                        <p className="text-sm font-normal not-italic leading-[1.78] tracking-normal text-[#323232] text-left">
                          Av. Cevallos y Quito.
                        </p>
                      </div>
                    </div>

                    {/* <div className="mr-8">
                                                <h4 className="text-[18px] font-bold not-italic leading-[1.78] tracking-normal text-[#323232] text-left">
                                                    Teléfono
                                                </h4>
                                                <div className="mt-2">
                                                    <a
                                                        href="tel:+593984567890"
                                                        className="text-sm font-normal not-italic leading-[1.78] tracking-normal text-[#323232] text-left block"
                                                        aria-label="Llamar al número +593 98 456 7890"
                                                    >
                                                        +593 98 456 7890
                                                    </a>
                                                    <a
                                                        href="tel:+593984567890"
                                                        className="text-sm font-normal not-italic leading-[1.78] tracking-normal text-[#323232] text-left block"
                                                        aria-label="Llamar al número +593 98 456 7890"
                                                    >
                                                        +593 98 456 7890
                                                    </a>

                                                </div>
                                            </div> */}

                    <div className="mr-8">
                      <h4 className="text-[18px] font-bold not-italic leading-[1.78] tracking-normal text-[#323232] text-left">
                        Correo
                      </h4>

                      <a
                        href="mailto:jciambato@jciecuador.com"
                        className="text-sm text-jci-aqua leading-[1.5] not-italic font-normal tracking-normal underline"
                        aria-label="Enviar correo electrónico a jciambato@jciecuador.com"
                      >
                        jciambato@jciecuador.com
                      </a>
                    </div>
                  </div>
                </address>
              </div>
              <div className="self-center mt-10 md:mt-0">
                {/* Logo con dimensiones reales para optimización de Next.js */}
                <Image
                  src="/images/logos/logo-riseup.png"
                  alt="Logo RISEUP"
                  width={3899}
                  height={3663}
                  className="h-32 lg:h-44 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </header>
      </article>
    </section>
  );
}
