export enum AreaOportunidadEnum {
  DESARROLLO_INDIVIDUAL = "Desarrollo Individual",
  COOPERACION_INTERNACIONAL = "Cooperación Internacional",
  IMPACTO_COMUNITARIO = "Impacto Comunitario",
  NEGOCIOS_EMPRENDIMIENTO = "Negocios y Emprendimiento",
}

// Helper para obtener el slug desde el enum
export function getAreaSlug(area: AreaOportunidadEnum): string {
  const slugMap: Record<AreaOportunidadEnum, string> = {
    [AreaOportunidadEnum.DESARROLLO_INDIVIDUAL]: "desarrollo-individual",
    [AreaOportunidadEnum.COOPERACION_INTERNACIONAL]: "cooperacion-internacional",
    [AreaOportunidadEnum.IMPACTO_COMUNITARIO]: "impacto-comunidad",
    [AreaOportunidadEnum.NEGOCIOS_EMPRENDIMIENTO]: "negocios-emprendimiento",
  };
  return slugMap[area];
}

// Helper para obtener el área desde el título
export function getAreaByTitle(title: string): AreaOportunidadEnum | undefined {
  return Object.values(AreaOportunidadEnum).find((area) => area === title);
}

// Helper para obtener el área desde el slug
export function getAreaBySlug(slug: string): AreaOportunidadEnum | undefined {
  const slugMap: Record<string, AreaOportunidadEnum> = {
    "desarrollo-individual": AreaOportunidadEnum.DESARROLLO_INDIVIDUAL,
    "cooperacion-internacional": AreaOportunidadEnum.COOPERACION_INTERNACIONAL,
    "impacto-comunidad": AreaOportunidadEnum.IMPACTO_COMUNITARIO,
    "negocios-emprendimiento": AreaOportunidadEnum.NEGOCIOS_EMPRENDIMIENTO,
  };
  return slugMap[slug];
}
