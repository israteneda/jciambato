import { Proyecto } from "@/types/proyecto";

export default function Presentacion({ proyecto }: { proyecto: Proyecto }) {
  return (
    <section
      className="relative overflow-hidden bg-transparent"
      aria-labelledby={`proyecto-${proyecto.slug}-heading`}
    >
      <div className="py-24">
        <div className="relative mx-8 max-w-6xl md:mx-20 lg:mx-auto">
          <div>
            <div className="text-xs uppercase not-italic leading-[1.85] tracking-[1px] text-jci-black">
              {proyecto.area_oportunidad}
            </div>
            <div className="mt-8">
              <h2 className="font-aeonik-bold text-jci-off-black max-w-6xl text-left text-3xl font-bold leading-[1.33] md:text-5xl">
                {proyecto.nombre}
              </h2>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex gap-32">
              <div className="text-sm font-semibold uppercase leading-[1.33] text-jci-teal">
                {proyecto.estado}
              </div>
              <div className="text-sm leading-[1.33] text-jci-black">{proyecto.lugar}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
