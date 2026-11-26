import { PersonGrid } from "@/components/layout/person-grid";
import { senadores } from "@/features/miembros/data/senadores";

export function Senadores() {
  return (
    <PersonGrid
      title="Senaduría"
      headingId="senadores-heading"
      description={
        <>
          Al cumplir <strong>41 años</strong>, los miembros activos concluyen su etapa regular y
          pueden optar por la condición de <strong>Miembro Asociado Mayor (MAM)</strong>,
          manteniendo su vínculo con la JCI sin derecho a voto ni a cargos electivos.
          <br /> <br />
          La <strong>Senaduría JCI</strong> es una <strong>distinción honorífica</strong> otorgada a
          Miembros Asociados Mayores que, por su{" "}
          <strong>trayectoria, liderazgo y contribución excepcional</strong>, han generado un
          impacto significativo en la organización.
        </>
      }
      data={senadores}
      ariaLabel="Lista de senadores"
    />
  );
}
