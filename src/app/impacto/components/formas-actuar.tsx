import { SubContainer } from "@/components/commons";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Valores() {
  return (
    <section className="relative z-10 mx-8 max-w-6xl md:mx-20 lg:mx-auto">
      <div className="my-16 md:my-32">
        <SubContainer
          title="Transformamos ideas en acciones concretas"
          subtitle="Nuestras formas de actuar"
          description="En JCI Ambato, convertimos el liderazgo en impacto a través de cuatro formas de actuar. Estas representan cómo llevamos a la práctica el desarrollo de nuestros miembros y el servicio a la comunidad."
        />

        <div className="my-10 flex flex-col md:flex-row">
          <div className="flex flex-1 flex-col md:mt-48 md:mr-3">
            <div className="md:mt-6">
              <div className="bg-jci-navy box-border min-h-52 w-full p-10">
                <div className="self-end text-base leading-normal font-normal tracking-normal text-gray-50 not-italic">
                  <strong>Negocios y Emprendimiento</strong>
                </div>
                <div className="my-2">
                  <h4 className="w-full text-2xl leading-[1-2] font-bold tracking-normal text-gray-50 not-italic">
                    Programas
                  </h4>
                </div>

                <p className="mb-5 text-sm text-gray-50">
                  A través de iniciativas como CYE (Creative Young Entrepreneur) y JIB, impulsamos
                  la mentalidad emprendedora y el desarrollo profesional. Estos programas fomentan
                  la innovación, el crecimiento económico y el liderazgo empresarial entre nuestros
                  miembros.
                </p>

                <Link
                  href="/areas-oportunidad"
                  className="group relative z-20 inline-block max-w-full cursor-pointer transition duration-400"
                  aria-label="Áreas de Oportunidad"
                >
                  <div className="flex items-center py-4">
                    <span className="group-hover:text-jci-red text-xs leading-none font-medium tracking-normal text-gray-50 not-italic transition-colors duration-300">
                      Negocios y Emprendimiento
                    </span>
                    <div
                      className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <HiOutlineArrowNarrowRight className="group-hover:text-jci-red h-6 w-6 text-gray-50 transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="md:mt-6">
              <div className="bg-jci-yellow box-border min-h-52 w-full p-10">
                <div className="self-end text-base leading-normal font-normal tracking-normal text-gray-50 not-italic">
                  <strong>Cooperación Internacional</strong>
                </div>
                <div className="my-2">
                  <h4 className="text-jci-black w-full text-2xl leading-[1-2] font-bold tracking-normal not-italic">
                    Eventos
                  </h4>
                </div>

                <p className="text-jci-black mb-5 text-sm">
                  Desde Congresos Nacionales hasta el Congreso Mundial JCI, conectamos a jóvenes
                  líderes de todo el mundo. Estos eventos fortalecen redes, fomentan el
                  entendimiento intercultural y promueven soluciones globales colaborativas.
                </p>

                <Link
                  href="/areas-oportunidad"
                  className="group relative z-20 inline-block max-w-full cursor-pointer transition duration-400"
                  aria-label="Áreas de oportunidad"
                >
                  <div className="flex items-center py-4">
                    <span className="group-hover:text-jci-red text-jci-off-black text-xs leading-none font-medium tracking-normal not-italic transition-colors duration-300">
                      Cooperación Internacional
                    </span>
                    <div
                      className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <HiOutlineArrowNarrowRight className="group-hover:text-jci-red text-jci-off-black h-6 w-6 transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col md:ml-3">
            <div className="md:mt-6">
              <div className="box-border min-h-52 w-full bg-[#D8D8D8] p-10">
                <div className="text-jci-black self-end text-base leading-normal font-normal tracking-normal not-italic">
                  <strong>Desarrollo Individual</strong>
                </div>
                <div className="my-2">
                  <h4 className="text-jci-black w-full text-2xl leading-[1-2] font-bold tracking-normal not-italic">
                    Formación
                  </h4>
                </div>

                <p className="text-jci-black mb-5 text-sm">
                  Ofrecemos talleres, mentorías y cursos presenciales y en línea, en temas como
                  liderazgo, oratoria, inteligencia emocional y gestión de proyectos. Estas
                  oportunidades preparan a nuestros miembros para liderar con ética y efectividad.
                </p>

                <Link
                  href="/areas-oportunidad"
                  className="group relative z-20 inline-block max-w-full cursor-pointer transition duration-400"
                  aria-label="Áreas de Oportunidad"
                >
                  <div className="flex items-center py-4">
                    <span className="group-hover:text-jci-red text-jci-off-black text-xs leading-none font-medium tracking-normal not-italic transition-colors duration-300">
                      Desarrollo Individual
                    </span>
                    <div
                      className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <HiOutlineArrowNarrowRight className="group-hover:text-jci-red text-jci-off-black h-6 w-6 transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="md:mt-6">
              <div className="bg-jci-seafoam box-border min-h-52 w-full p-10">
                <div className="text-jci-black self-end text-base leading-normal font-normal tracking-normal not-italic">
                  <strong>Impacto en la Comunidad</strong>
                </div>
                <div className="my-2">
                  <h4 className="text-jci-black w-full text-2xl leading-[1-2] font-bold tracking-normal not-italic">
                    Proyectos
                  </h4>
                </div>

                <p className="text-jci-black mb-5 text-sm">
                  A través de iniciativas como JCI RISE, nuestros miembros desarrollan proyectos
                  comunitarios centrados en sostenibilidad, salud mental, resiliencia económica y
                  bienestar social. Cada proyecto responde a necesidades reales con impacto medible.
                </p>

                <Link
                  href="/areas-oportunidad"
                  className="group relative z-20 inline-block max-w-full cursor-pointer transition duration-400"
                  aria-label="Áreas de Oportunidad"
                >
                  <div className="flex items-center py-4">
                    <span className="group-hover:text-jci-red text-jci-off-black text-xs leading-none font-medium tracking-normal not-italic transition-colors duration-300">
                      Impacto en la Comunidad
                    </span>
                    <div
                      className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <HiOutlineArrowNarrowRight className="group-hover:text-jci-red text-jci-off-black h-6 w-6 transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
