import { PersonGrid } from "@/components/layout/person-grid";
import { miembrosNacionales } from "@/features/miembros/data/miembros-nacionales";

export function MiembrosNacionales() {
  return (
    <PersonGrid
      title="En JCI Ecuador"
      headingId="miembros-nacionales-heading"
      sectionClassName="bg-jci-bg pt-0"
      description={
        <>
          Esta participación proyecta el impacto local hacia escenarios nacionales e
          internacionales, mediante <strong>iniciativas de alto alcance</strong>, la conexión con
          <strong> líderes globales</strong> y la colaboración en
          <strong> proyectos internacionales</strong> que promueven soluciones innovadoras y el
          compromiso con los valores de la JCI.
        </>
      }
      data={miembrosNacionales}
      ariaLabel="Lista de miembros en JCI Ecuador"
    />
  );
}
