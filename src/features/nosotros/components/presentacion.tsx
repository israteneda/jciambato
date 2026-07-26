import Image from "next/image";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

export default function Presentacion() {
  return (
    <section className="relative z-10">
      <div className="flex flex-col items-center justify-center">
        {/* Información */}
        <div className="flex w-full justify-center">
          <div className="relative mx-auto max-w-6xl bg-white px-8 py-20 pb-36 md:px-20">
            <header className="max-w-3xl">
              <p className="text-xs leading-[1.85] font-bold tracking-normal text-jci-gray uppercase not-italic">
                Conócenos mejor
              </p>
              <div className="mt-8">
                  <h2 className="text-left text-3xl font-bold text-jci-black md:text-5xl md:leading-[1.33]">
                    Lideramos con propósito para transformar nuestra ciudad y conectar con el mundo.
                  </h2>
              </div>
            </header>

            <div className="mt-16 md:mt-20">
              <div className="text-jci-black columns-1 gap-10 space-y-4 text-justify text-base leading-loose md:text-left lg:columns-2">
                <p>
                  En JCI Ambato creemos que el liderazgo joven es la fuerza que impulsa la
                  transformación de nuestra sociedad. Somos parte de la red global de la{" "}
                  <a href="https://jci.cc/" className="text-jci-navy underline" target="_blank">
                    Cámara Junior Internacional (JCI)
                  </a>
                  , una organización sin fines de lucro fundada en 1915, que hoy conecta a más de
                  150.000 jóvenes líderes en más de 100 países.
                </p>
                <p>
                  A nivel nacional, formamos parte de{" "}
                  <a
                    href="https://jciecuador.com/"
                    className="text-jci-navy underline"
                    target="_blank"
                  >
                    JCI Ecuador
                  </a>
                  , una red que agrupa a los capítulos locales presentes en diversas ciudades del
                  país, todos comprometidos con una misma misión: empoderar a los jóvenes para que
                  sean ciudadanos activos y agentes de cambio positivo.
                </p>
                <p>
                  Nuestra organización local fue fundada hace más de 50 años con el propósito de
                  empoderar a los jóvenes ambateños para liderar con propósito y generar impacto
                  real. Desde entonces, hemos trabajado de forma continua en el diseño e
                  implementación de proyectos innovadores que transforman social, cultural y
                  económicamente a nuestra ciudad.
                </p>
                <p>
                  Impulsamos el desarrollo en cuatro áreas clave:{" "}
                  <strong>crecimiento personal</strong>, <strong>impacto comunitario</strong>,{" "}
                  <strong>negocios y emprendimiento</strong>, y{" "}
                  <strong>colaboración internacional</strong>. Cada miembro de JCI Ambato se forma
                  como un líder ético, creativo y comprometido con soluciones sostenibles, alineadas
                  con los Objetivos de Desarrollo Sostenible de las Naciones Unidas.
                </p>
                <p>
                  Hoy, JCI Ambato sigue siendo una plataforma de oportunidades para quienes desean
                  generar impacto, crecer como líderes y dejar una huella significativa en su ciudad
                  y en el mundo.
                </p>
              </div>
            </div>

            <div className="mt-20 lg:mt-40">
              <div className="flex justify-end">
                <div
                  className="flex flex-wrap gap-8"
                  role="list"
                  aria-label="Estadísticas de JCI Ambato"
                >
                  <div className="mr-20" role="listitem">
                    <div className="text-jci-navy text-7xl leading-none font-light md:text-8xl">
                      <AnimatedNumber end={50} prefix="+" duration={2.5} delay={0.2} />
                    </div>
                    <p className="md:text-medium max-w-44 text-left text-jci-black uppercase">
                      <strong>Años</strong> inspirando líderes
                    </p>
                  </div>

                  <div className="mr-20" role="listitem">
                    <div className="text-jci-navy text-7xl leading-none font-light md:text-8xl">
                      <AnimatedNumber end={200} prefix="+" duration={2.5} delay={0.4} />
                    </div>
                    <p className="md:text-medium max-w-44 text-left text-jci-black uppercase">
                      <strong>Proyectos</strong> ejecutados
                    </p>
                  </div>

                  <div className="mr-20" role="listitem">
                    <div className="text-jci-navy text-7xl leading-none font-light md:text-8xl">
                      <AnimatedNumber end={500} prefix="+" duration={2.5} delay={0.6} />
                    </div>
                    <p className="max-w-44 text-left text-base text-jci-black uppercase">
                      <strong>Jóvenes</strong> formados y empoderados
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-12.5 bottom-[25%] hidden origin-bottom-right rotate-90 lg:block">
              <div
                className="relative text-[11px] leading-none font-medium tracking-[2px] text-jci-gray uppercase after:absolute after:top-1.5 after:-right-42.5 after:h-px after:w-40 after:bg-jci-gray after:content-['']"
                aria-hidden="true"
              >
                Conoce, Suma, Transforma
              </div>
            </div>
          </div>
        </div>

        {/* Fotografía */}
        <div className="w-full px-0">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
            {/* Flecha solo visible en pantallas grandes */}
            <div className="hidden shrink-0 items-center justify-center md:ml-20 md:flex">
              <Image
                src="/icons/arrow-down.svg"
                alt=""
                width={120}
                height={120}
                className="md:h-30md:w-30 h-20 w-20 object-contain"
                aria-hidden="true"
              />
            </div>

            {/* Imagen principal */}
            <figure className="max-h-auto relative h-auto w-full overflow-hidden md:w-auto md:flex-1">
              <Image
                src="/images/grupo/grupo.webp"
                alt="Miembros de JCI Ambato trabajando en equipo"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
