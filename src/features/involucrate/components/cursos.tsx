import SectionHeader from "@/components/layout/section-header";
import { Container } from "@/components/layout/container";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Section } from "@/components/layout/section";

export default function Cursos() {
  return (
    <Section className="bg-jci-bg" aria-labelledby="cursos-heading">
      <Container>
        <SectionHeader
          title="Prepárate para ser parte de JCI"
          subtitle="Conócenos más a fondo"
          description="Participa en nuestros cursos de inducción, formación y liderazgo. Estos programas te permitirán comprender a profundidad el propósito de nuestra organización, fortalecer tus competencias personales y profesionales, y descubrir cómo contribuir activamente al desarrollo de tu comunidad."
        />

        <div className="my-10 flex flex-col md:flex-row">
          <div className="flex flex-1 flex-col md:mt-48 md:mr-3">
            <div className="md:mt-6">
              <div className="bg-jci-navy box-border min-h-52 w-full p-10">
                <div className="self-end text-base leading-normal font-normal tracking-normal text-white not-italic">
                  <strong>Introducción a JCI</strong>
                  <span> - Gratis</span>
                </div>
                <div className="my-2">
                  <h4 className="w-full text-2xl leading-[1-2] font-bold tracking-normal text-white not-italic">
                    ¿Qué es la JCI?
                  </h4>
                </div>

                <p className="mb-5 text-sm text-white/80">
                  Descubre qué es JCI, cómo está estructurada y cómo esta plataforma global impulsa
                  tu desarrollo personal y liderazgo.
                </p>

                <Link
                  href="https://aprende.educat.tech/course/section.php?id=624"
                  target="_blank"
                  className="group relative inline-block max-w-full cursor-pointer transition duration-400"
                  aria-label="Leer más sobre"
                >
                  <div className="flex items-center py-4">
                    <span className="group-hover:text-jci-yellow text-jci-teal text-xs leading-none font-medium tracking-normal not-italic transition-colors duration-300">
                      Leer más
                    </span>
                    <div
                      className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <HiOutlineArrowNarrowRight className="group-hover:text-jci-yellow text-jci-teal h-6 w-6 transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="md:mt-6">
              <div className="bg-jci-yellow box-border min-h-52 w-full p-10">
                <div className="text-jci-black self-end text-base leading-normal font-normal tracking-normal not-italic">
                  <strong>Introducción a JCI</strong>
                  <span> - Gratis</span>
                </div>
                <div className="my-2">
                  <h4 className="text-jci-black w-full text-2xl leading-[1-2] font-bold tracking-normal not-italic">
                    Credo, Misión <br /> y Visión
                  </h4>
                </div>

                <p className="text-jci-black mb-5 text-sm">
                  Conoce los principios que definen nuestra identidad y cómo guían nuestras acciones
                  como ciudadanos activos.
                </p>

                <Link
                  href="https://aprende.educat.tech/course/view.php?id=54"
                  target="_blank"
                  className="group relative inline-block max-w-full cursor-pointer transition duration-400"
                  aria-label="Leer más sobre"
                >
                  <div className="flex items-center py-4">
                    <span className="group-hover:text-jci-teal text-jci-black text-xs leading-none font-medium tracking-normal not-italic transition-colors duration-300">
                      Leer más
                    </span>
                    <div
                      className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <HiOutlineArrowNarrowRight className="group-hover:text-jci-teal text-jci-black h-6 w-6 transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col md:ml-3">
            <div className="md:mt-6">
              <div className="bg-jci-navy/10 box-border min-h-52 w-full p-10">
                <div className="text-jci-black self-end text-base leading-normal font-normal tracking-normal not-italic">
                  <strong>Introducción a JCI</strong>
                  <span> - Gratis</span>
                </div>
                <div className="my-2">
                  <h4 className="text-jci-black w-full text-2xl leading-[1-2] font-bold tracking-normal not-italic">
                    Eventos
                  </h4>
                </div>

                <p className="text-jci-black mb-5 text-sm">
                  Explora el impacto de nuestros eventos locales, nacionales e internacionales, y
                  cómo puedes participar activamente.
                </p>

                <Link
                  href="https://aprende.educat.tech/course/view.php?id=53"
                  target="_blank"
                  className="group relative inline-block max-w-full cursor-pointer transition duration-400"
                  aria-label="Leer más sobre"
                >
                  <div className="flex items-center py-4">
                    <span className="group-hover:text-jci-teal text-jci-black text-xs leading-none font-medium tracking-normal not-italic transition-colors duration-300">
                      Leer más
                    </span>
                    <div
                      className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <HiOutlineArrowNarrowRight className="group-hover:text-jci-teal text-jci-black h-6 w-6 transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="md:mt-6">
              <div className="bg-jci-teal box-border min-h-52 w-full p-10">
                <div className="text-jci-black self-end text-base leading-normal font-normal tracking-normal not-italic">
                  <strong>Introducción a JCI</strong>
                  <span> - Gratis</span>
                </div>
                <div className="my-2">
                  <h4 className="text-jci-black w-full text-2xl leading-[1-2] font-bold tracking-normal not-italic">
                    Plan de Carrera
                  </h4>
                </div>

                <p className="text-jci-black mb-5 text-sm">
                  Traza tu ruta de crecimiento dentro de JCI Ambato y JCI Ecuador para desarrollar
                  tu potencial al máximo.
                </p>

                <Link
                  href="https://aprende.educat.tech/course/view.php?id=57"
                  target="_blank"
                  className="group relative inline-block max-w-full cursor-pointer transition duration-400"
                  aria-label="Leer más sobre"
                >
                  <div className="flex items-center py-4">
                    <span className="group-hover:text-jci-teal text-jci-black text-xs leading-none font-medium tracking-normal not-italic transition-colors duration-300">
                      Leer más
                    </span>
                    <div
                      className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <HiOutlineArrowNarrowRight className="group-hover:text-jci-teal text-jci-black h-6 w-6 transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-jci-navy flex flex-col items-center justify-center text-center text-sm font-normal tracking-normal not-italic md:text-base">
          <span>¿Quieres conocer más opciones de formación?</span>
          <span>
            Visita más cursos en&nbsp;
            <a
              href="https://jciecuador.com/cursos/"
              target="_blank"
              className="text-jci-blue underline"
              aria-label="Redirección a la página de cursos de JCI Ecuador"
            >
              JCI Ecuador &mdash; Cursos
            </a>
          </span>
        </div>
      </Container>
    </Section>
  );
}
