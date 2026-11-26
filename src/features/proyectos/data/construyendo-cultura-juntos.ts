import { Proyecto } from "@/types/proyecto";
import { AreaOportunidadEnum } from "@/types/enums/area-oportunidad.enum";
import { getMiembroById } from "@/features/miembros/data/miembros";

export const construyendoCulturaJuntos: Proyecto = {
  id: "5",
  slug: "construyendo-cultura-juntos",
  nombre: "Construyendo la cultura juntos – Edición Ecuador",
  titulo: "Construyendo Cultura Juntos",
  subtitulo: "Vibrante viaje cultural al corazón de Ecuador",
  director: getMiembroById("romina-benitez")!,
  fecha: "2 y 9 de marzo, 2025",
  lugar: "Ecuador",
  imagen: "/images/proyectos/cooperacion-internacional/cooperacion-internacional-p1.webp",
  logo: "",
  area_oportunidad: AreaOportunidadEnum.COOPERACION_INTERNACIONAL,
  descripcion:
    "Los días 2 y 9 de marzo de 2025, tomamos un vibrante viaje cultural al corazón de Ecuador como parte de nuestra iniciativa Construyendo Cultura Juntos. Un agradecimiento especial a nuestros apasionados presentadores Mario Lourido Delgado y Romina Benítez, que nos transportaron a través de los impresionantes paisajes de Ecuador, ricas tradiciones, patrimonio indígena, festivales coloridos y cocina deliciosa. Desde los Andes hasta el Amazonas, cada historia compartida y cada tradición explorada nos acercó a entender la belleza y diversidad de la cultura ecuatoriana. Este intercambio intercultural fue tan significativo, donde juntos seguimos celebrando la unidad en la diversidad y construyendo conexiones globales más fuertes.",
  impacto:
    "Permite a participantes de diferentes países conocer y apreciar la riqueza cultural de Ecuador, fortaleciendo lazos interculturales y promoviendo el entendimiento global.",
  estado: "planificado",
};
