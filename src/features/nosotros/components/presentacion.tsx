import Image from "next/image";
import AnimatedNumber from "@/components/AnimatedNumber";
import ParallaxImage from "@/components/parallax-image";
import { Section } from "@/components/layout/section";

export default function Presentacion() {
  return (
    <Section className="py-0 md:py-0" aria-labelledby="presentacion-heading">
      <article className="relative mx-auto bg-white md:max-w-[calc(676px+50vw)]">
        <div className="relative p-8 md:p-30 lg:max-w-350">
          <p className="text-jci-gray text-xs leading-[1.85] font-bold tracking-normal uppercase not-italic">
            Conócenos mejor
          </p>
          <div className="mt-8 md:max-w-225">
            <h3 className="text-jci-black text-left text-3xl font-bold md:text-5xl md:leading-[1.33]">
              Lideramos con propósito para transformar nuestra ciudad y conectar con el mundo.
            </h3>
          </div>

          <div className="mt-16 md:mt-20">
            <div className="text-jci-black columns-1 gap-10 space-y-4 text-justify text-base leading-loose md:columns-2 md:text-left">
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
                empoderar a los jóvenes ambateños para liderar con propósito y generar impacto real.
                Desde entonces, hemos trabajado de forma continua en el diseño e implementación de
                proyectos innovadores que transforman social, cultural y económicamente a nuestra
                ciudad.
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
                generar impacto, crecer como líderes y dejar una huella significativa en su ciudad y
                en el mundo.
              </p>
            </div>
          </div>

          <div className="mt-20 lg:mt-40">
            <div className="flex justify-end">
              <div
                className="flex flex-wrap gap-6"
                role="list"
                aria-label="Estadísticas de JCI Ambato"
              >
                <div className="mr-20" role="listitem">
                  <div className="text-jci-navy text-7xl leading-none font-light md:text-8xl">
                    <AnimatedNumber end={50} prefix="+" duration={2.5} delay={0.2} />
                  </div>
                  <p className="md:text-medium text-jci-black max-w-44 text-left uppercase">
                    <strong>Años</strong> inspirando líderes
                  </p>
                </div>

                <div className="mr-20" role="listitem">
                  <div className="text-jci-navy text-7xl leading-none font-light md:text-8xl">
                    <AnimatedNumber end={200} prefix="+" duration={2.5} delay={0.4} />
                  </div>
                  <p className="md:text-medium text-jci-black max-w-44 text-left uppercase">
                    <strong>Proyectos</strong> ejecutados
                  </p>
                </div>

                <div className="mr-20" role="listitem">
                  <div className="text-jci-navy text-7xl leading-none font-light md:text-8xl">
                    <AnimatedNumber end={500} prefix="+" duration={2.5} delay={0.6} />
                  </div>
                  <p className="text-jci-black max-w-44 text-left text-base uppercase">
                    <strong>Jóvenes</strong> formados y empoderados
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-2.5 bottom-[35%] hidden origin-bottom-right rotate-90 lg:block">
            <div className="text-jci-gray after:bg-jci-gray relative text-[11px] leading-none font-medium tracking-[2px] uppercase after:absolute after:top-1.5 after:-right-42.5 after:h-px after:w-40 after:content-['']">
              Conoce, Suma, Transforma
            </div>
          </div>
        </div>
      </article>

      {/* Imagen */}
      <div className="bg-jci-bg relative">
        <div className="relative mx-auto md:max-w-[calc(676px+50vw)]">
          <div className="flex">
            <div className="relative hidden flex-[2_1_0%] items-center justify-center md:flex">
              <Image
                src="/icons/arrow-down.svg"
                alt="Icono de flecha hacia abajo"
                height={64}
                width={64}
                className="object-cover"
                aria-hidden="true"
              />
            </div>

            <ParallaxImage
              src="/images/nosotros/grupo.webp"
              alt="Miembros de JCI Ambato trabajando en equipo"
              className="h-60 w-300 md:h-188"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
