import { PersonGrid } from "@/components/layout/person-grid";
import { pasadosPresidentes } from "@/features/miembros/data/pasados-presidentes";

export function PasadosPresidentes() {
  return (
    <PersonGrid
      title="Pasados Presidentes"
      headingId="pasados-presidentes-heading"
      description={
        <>
          Líderes que dejaron una huella en la <strong>historia de JCI Ambato</strong> a través de
          su gestión y compromiso institucional. Su legado se refleja en el
          <strong> fortalecimiento organizacional</strong> y la
          <strong> formación de nuevas generaciones de líderes</strong>, siendo referentes de
          visión, servicio y continuidad.
        </>
      }
      data={pasadosPresidentes}
      ariaLabel="Lista de pasados presidentes"
      sectionClassName=""
    />
  );
}
