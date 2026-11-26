import { PersonGrid } from "@/components/layout/person-grid";
import { miembros } from "@/features/miembros/data/miembros";

export function MiembrosGenerales() {
  return (
    <PersonGrid
      title="Miembros"
      headingId="miembros-activos-heading"
      description={
        <>
          Integrado por personas de entre <strong>18 y 40 años</strong> comprometidas con la
          transformación, desarrollando proyectos que fortalecen el
          <strong> liderazgo</strong>, el <strong>emprendimiento</strong> y la
          <strong> acción comunitaria</strong>, generando impacto sostenible a nivel local, nacional
          y global.
        </>
      }
      data={miembros}
      ariaLabel="Lista de miembros activos"
      sectionClassName="bg-jci-bg py-0 md:py-0"
    />
  );
}
