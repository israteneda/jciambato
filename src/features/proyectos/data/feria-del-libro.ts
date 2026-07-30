import { Proyecto } from "@/types/proyecto";
import { AreaOportunidadEnum } from "@/types/enums/area-oportunidad.enum";

export const feriaDelLibro: Proyecto = {
  id: "13",
  slug: "feria-del-libro",
  nombre: "Feria del Libro",
  titulo: "Feria de Venta de Libros",
  subtitulo: "Feria de venta de libros",
  director: {
    id: "nicolas-merizalde",
    nombre: "Nicolás",
    apellido: "Merizalde",
    imagen: "",
  },
  fecha: "24 Junio, 2024",
  lugar: "Ambato, Ecuador",
  imagen: "/images/proyectos/impacto-comunidad/feria-libro.webp",
  logo: "",
  area_oportunidad: AreaOportunidadEnum.IMPACTO_COMUNITARIO,
  url: "/proyectos/feria-del-libro",
  descripcion:
    "La 'Feria del Libro' es un evento cultural que busca democratizar el acceso a la lectura en Ambato, Ecuador. Este proyecto reúne a librerías locales, editoriales independientes y autores para ofrecer libros de diversos géneros a precios accesibles. Además de la venta de libros, la feria incluye actividades como charlas con autores, talleres de escritura creativa, cuentacuentos para niños y presentaciones de libros nuevos. El objetivo es fomentar la lectura como herramienta de desarrollo personal y cultural, especialmente entre los jóvenes y las familias de la comunidad. El evento también apoya a pequeños editores y escritores emergentes, dándoles una plataforma para visibilizar su trabajo.",
  impacto:
    "Ha beneficiado a más de 500 personas, promoviendo la lectura y apoyando a la industria editorial local.",
  estado: "completado",
};
