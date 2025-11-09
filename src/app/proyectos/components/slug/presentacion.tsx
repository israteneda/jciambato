import { Proyecto } from "@/types/proyecto";

export default function Presentacion({ proyecto }: { proyecto: Proyecto }) {
  return (
    <section
      className="relative bg-transparent overflow-hidden"
      aria-labelledby={`proyecto-${proyecto.slug}-heading`}
    >
      <div className="py-24">
        <div className="relative max-w-6xl mx-8 md:mx-20 lg:mx-auto">
          <div>
            <div className="text-xs leading-[1.85] not-italic uppercase text-jci-black tracking-[1px]">
              {proyecto.area_oportunidad}
            </div>
            <div className="mt-8">
              <h2 className="text-3xl md:text-5xl font-aeonik-bold font-bold leading-[1.33] text-jci-off-black max-w-6xl text-left">
                {proyecto.nombre}
              </h2>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex gap-32">
              <div className="text-sm font-semibold leading-[1.33] uppercase text-jci-aqua">
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
