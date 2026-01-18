import Image from "next/image";

export default function Acciones() {
  return (
    <section className="relative z-10" aria-labelledby="accion-heading">
      <article className="relative max-w-6xl bg-white lg:mx-auto">
        <header className="p-8 md:p-20">
          <div className="text-[13px] font-bold uppercase not-italic leading-[1.85] tracking-normal text-jci-yellow">
            Grupo JCI
          </div>
          <div className="mt-8">
            <h2
              id="accion-heading"
              className="max-w-4xl text-left text-3xl font-bold tracking-normal text-jci-navy md:text-4xl lg:text-5xl lg:leading-[1.33]"
            >
              Se parte de un mundo cambiante, contribuir día a día, estés donde estés.
            </h2>
          </div>
          <div className="mt-8">
            <p className="max-w-[666px] text-left text-base font-normal tracking-normal text-[rgb(50,50,50)] md:text-lg md:leading-[1.78]">
              Únete a la red global de jóvenes que ya está creando soluciones reales. No importa si
              tienes experiencia o recién comienzas: lo que necesitas es voluntad de actuar.
            </p>
          </div>

          <div className="mt-9">
            <div className="flex flex-col justify-between md:flex-row md:items-center">
              <div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-left text-xl font-bold not-italic leading-[1.25] tracking-normal text-jci-navy">
                    JCI Ecuador
                  </h3>
                  <h3 className="text-left text-[18px] font-bold not-italic leading-[1.25] tracking-normal text-jci-teal">
                    JCI Ambato
                  </h3>
                </div>

                <address className="mt-6 not-italic">
                  <div className="flex flex-col gap-5 md:flex-row">
                    <div className="mr-8">
                      <h4 className="text-left text-[18px] font-bold not-italic leading-[1.78] tracking-normal text-[#323232]">
                        Ambato, Ecuador
                      </h4>
                      <div className="mt-2">
                        <p className="text-left text-sm font-normal not-italic leading-[1.78] tracking-normal text-[#323232]">
                          Zona Metropolitana de Ambato
                        </p>
                        <p className="text-left text-sm font-normal not-italic leading-[1.78] tracking-normal text-[#323232]">
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
                      <h4 className="text-left text-[18px] font-bold not-italic leading-[1.78] tracking-normal text-[#323232]">
                        Correo
                      </h4>

                      <a
                        href="mailto:jciambato@jciecuador.com"
                        className="text-sm font-normal not-italic leading-[1.5] tracking-normal text-jci-teal underline"
                        aria-label="Enviar correo electrónico a jciambato@jciecuador.com"
                      >
                        jciambato@jciecuador.com
                      </a>
                    </div>
                  </div>
                </address>
              </div>
              <div className="mt-10 self-center md:mt-0">
                {/* Logo con dimensiones reales para optimización de Next.js */}
                <Image
                  src="/images/logos/logo-riseup.png"
                  alt="Logo RISEUP"
                  width={3899}
                  height={3663}
                  className="h-32 w-auto object-contain lg:h-44"
                />
              </div>
            </div>
          </div>
        </header>
      </article>
    </section>
  );
}
