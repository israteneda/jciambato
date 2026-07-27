import Image from "next/image";

export default function Acciones() {
  return (
    <section className="relative z-10" aria-labelledby="accion-heading">
      <article className="relative max-w-6xl bg-white lg:mx-auto">
        <header className="p-8 md:p-20">
          <div className="text-jci-yellow text-[13px] leading-[1.85] font-bold tracking-normal uppercase not-italic">
            Grupo JCI
          </div>
          <div className="mt-8">
            <h2
              id="accion-heading"
              className="text-jci-navy max-w-4xl text-left text-3xl font-bold tracking-normal md:text-4xl lg:text-5xl lg:leading-[1.33]"
            >
              Se parte de un mundo cambiante, contribuir día a día, estés donde estés.
            </h2>
          </div>
          <div className="mt-8">
            <p className="text-jci-black max-w-[666px] text-left text-base font-normal tracking-normal md:text-lg md:leading-[1.78]">
              Únete a la red global de jóvenes que ya está creando soluciones reales. No importa si
              tienes experiencia o recién comienzas: lo que necesitas es voluntad de actuar.
            </p>
          </div>

          <div className="mt-9">
            <div className="flex flex-col justify-between md:flex-row md:items-center">
              <div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-jci-navy text-left text-xl leading-tight font-bold tracking-normal not-italic">
                    JCI Ecuador
                  </h3>
                  <h3 className="text-jci-teal text-left text-[18px] leading-tight font-bold tracking-normal not-italic">
                    JCI Ambato
                  </h3>
                </div>

                <address className="mt-6 not-italic">
                  <div className="flex flex-col gap-5 md:flex-row">
                    <div className="mr-8">
                      <h4 className="text-jci-black text-left text-[18px] leading-[1.78] font-bold tracking-normal not-italic">
                        Ambato, Ecuador
                      </h4>
                      <div className="mt-2">
                        <p className="text-jci-black text-left text-sm leading-[1.78] font-normal tracking-normal not-italic">
                          Zona Metropolitana de Ambato
                        </p>
                        <p className="text-jci-black text-left text-sm leading-[1.78] font-normal tracking-normal not-italic">
                          Av. Cevallos y Quito.
                        </p>
                      </div>
                    </div>

                    {/* <div className="mr-8">
                      <h4 className="text-left text-[18px] leading-[1.78] font-bold tracking-normal text-[#323232] not-italic">
                        Teléfono
                      </h4>
                      <div className="mt-2">
                        <a
                          href="tel:+593984567890"
                          className="block text-left text-sm leading-[1.78] font-normal tracking-normal text-[#323232] not-italic"
                          aria-label="Llamar al número +593 98 456 7890"
                        >
                          +593 98 456 7890
                        </a>
                        <a
                          href="tel:+593984567890"
                          className="block text-left text-sm leading-[1.78] font-normal tracking-normal text-[#323232] not-italic"
                          aria-label="Llamar al número +593 98 456 7890"
                        >
                          +593 98 456 7890
                        </a>
                      </div>
                    </div> */}

                    <div className="mr-8">
                      <h4 className="text-jci-black text-left text-[18px] leading-[1.78] font-bold tracking-normal not-italic">
                        Correo
                      </h4>

                      <a
                        href="mailto:jciambato@jciecuador.com"
                        className="text-jci-teal text-sm leading-normal font-normal tracking-normal not-italic underline"
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
                  src="/images/marca/logo-riseup.webp"
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
