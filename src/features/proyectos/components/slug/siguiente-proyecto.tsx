import RotatedText from "@/components/rotated-text";
import { Proyecto } from "@/types/proyecto";
import Image from "next/image";
import Link from "next/link";
import { getAllProyectos } from "../../data";

export default function SiguienteProyecto({ proyecto }: { proyecto: Proyecto }) {
  // Obtener todos los proyectos y encontrar el siguiente
  const allProyectos = getAllProyectos();
  const currentIndex = allProyectos.findIndex((a) => a.slug === proyecto.slug);
  const nextIndex = (currentIndex + 1) % allProyectos.length; // Ciclo al inicio si es la última
  const nextProyecto = allProyectos[nextIndex];

  if (!proyecto || !proyecto.titulo || !nextProyecto) {
    return null; // O puedes retornar un componente de error/loading
  }

  return (
    <section className="relative z-1 bg-transparent">
      <div className="bg-[#e8e8e8] py-28">
        <div className="relative">
          {/* Texto rotado */}
          <RotatedText text="Nuestros Proyectos" />
          {/* Caja de Información */}
          <div>
            <div className="relative z-10 mx-8 max-w-6xl bg-transparent md:mx-20 lg:mx-auto">
              <Link
                href={`/proyectos/${nextProyecto.slug}`}
                className="group cursor-pointer md:ml-48"
                aria-label={`Ir a ${nextProyecto.titulo}`}
              >
                <div className="relative z-10">
                  <div className="font-sans text-[13px] leading-[1.85] font-bold tracking-normal text-jci-gray uppercase not-italic">
                    Proyectos
                  </div>
                  <div className="mt-2">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-jci-black max-w-4xl text-left text-3xl leading-[1.33] font-light tracking-normal md:text-4xl lg:text-5xl">
                          Siguiente Proyecto
                        </h2>
                        <h2 className="text-jci-black max-w-4xl text-left text-3xl leading-[1.33] font-bold tracking-normal not-italic md:text-4xl lg:text-5xl">
                          {nextProyecto.titulo}
                        </h2>
                      </div>

                      <div className="my-8 md:ml-56">
                        <Image
                          src="/icons/arrow-right-gray.svg"
                          alt=""
                          width={128}
                          height={128}
                          className="h-20 w-20 -rotate-90 transform transition-transform duration-300 group-hover:translate-x-4 md:h-32 md:w-32"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
