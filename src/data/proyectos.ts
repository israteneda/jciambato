export type Proyecto = {
  id: string;
  slug: string;
  titulo: string;
  subtitulo: string;
  fecha: string;
  lugar: string;
  imagen: string;
  director: string; // Nombre del director del proyecto
  area_oportunidad: string; // Para filtrar por área de oportunidad
  url: string; // URL para navegación
  descripcion?: string;
  impacto?: string;
  estado?: "activo" | "completado" | "planificado";
};

export const proyectos: Proyecto[] = [
  // Negocios y Emprendimiento
  {
    id: "1",
    slug: "dale-otro-chance",
    titulo: "Dale Otro Chance",
    subtitulo: "Competencia de emprendimiento de 54 horas",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    director: "Erick Calvache",
    imagen:
      "/images/areas_oportunidad/negocios-emprendimiento/proyectos/dale-otro-chance.webp",
    area_oportunidad: "negocios-emprendimiento",
    url: "/proyectos/dale-otro-chance",
    descripcion:
      "'Dale Otro Chance' es una iniciativa innovadora que combina el espíritu emprendedor con la sostenibilidad. Este evento reúne a jóvenes emprendedores de Ambato y alrededores para promover la economía circular a través de la venta de ropa de segunda mano. Los participantes trabajan en equipos para diseñar estrategias de negocio, desde la selección de prendas hasta la creación de planes de marketing y ventas. El objetivo principal es fomentar el emprendimiento juvenil, generar ingresos adicionales para los participantes y ofrecer a la comunidad acceso a ropa de calidad a precios asequibles. Además, el proyecto promueve la conciencia ambiental al incentivar la reutilización de prendas, reduciendo el desperdicio textil. Durante el evento, se realizan talleres de capacitación en habilidades empresariales, mentorías con expertos y una competencia final donde los equipos presentan sus resultados ante un jurado.",
    impacto:
      "Más de 100 jóvenes han participado, generando ingresos para ellos y sus comunidades, además de promover la sostenibilidad, la conciencia ambiental y el emprendimiento juvenil.",
    estado: "completado",
  },

  // Cooperación Internacional
  {
    id: "5",
    slug: "construyendo-cultura-juntos",
    titulo: "Construyendo la cultura juntos – Edición Ecuador",
    subtitulo: "Vibrante viaje cultural al corazón de Ecuador",
    director: "Mario Lourido Delgado y Romina Benítez",
    fecha: "2 y 9 de marzo, 2025",
    lugar: "Ecuador",
    imagen:
      "/images/areas_oportunidad/cooperacion-internacional/proyectos/cooperacion-internacional-p1.webp",
    area_oportunidad: "cooperacion-internacional",
    url: "/proyectos/construyendo-cultura-juntos",
    descripcion:
      "Los días 2 y 9 de marzo de 2025, tomamos un vibrante viaje cultural al corazón de Ecuador como parte de nuestra iniciativa Construyendo Cultura Juntos. Un agradecimiento especial a nuestros apasionados presentadores Mario Lourido Delgado y Romina Benítez, que nos transportaron a través de los impresionantes paisajes de Ecuador, ricas tradiciones, patrimonio indígena, festivales coloridos y cocina deliciosa. Desde los Andes hasta el Amazonas, cada historia compartida y cada tradición explorada nos acercó a entender la belleza y diversidad de la cultura ecuatoriana. Este intercambio intercultural fue tan significativo, donde juntos seguimos celebrando la unidad en la diversidad y construyendo conexiones globales más fuertes.",
    impacto:
      "Permite a participantes de diferentes países conocer y apreciar la riqueza cultural de Ecuador, fortaleciendo lazos interculturales y promoviendo el entendimiento global.",
    estado: "planificado",
  },

  // Desarrollo Individual
  {
    id: "9",
    slug: "conquistando-audiencias",
    titulo: "Programa de Oratoria y Debate (Conquistando Audiencias)",
    subtitulo: "Programa intensivo de comunicación efectiva",
    director: "Jenniner Castillo",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen:
      "/images/areas_oportunidad/desarrollo-individual/proyectos/desarrollo-individual-p1.webp",
    area_oportunidad: "desarrollo-individual",
    url: "/proyectos/conquistando-audiencias",
    descripcion:
      "'Conquistando Audiencias' es un programa intensivo enfocado en desarrollar habilidades de comunicación y oratoria en jóvenes. A través de talleres prácticos, ejercicios de debate y presentaciones simuladas, los participantes aprenden a estructurar discursos, manejar el lenguaje corporal, controlar el tono de voz y conectar emocionalmente con su audiencia. El programa está diseñado para empoderar a los jóvenes, ayudándolos a superar el miedo escénico y a expresarse con claridad y confianza en entornos académicos, profesionales y sociales. Además, se fomenta el pensamiento crítico a través de debates estructurados sobre temas de actualidad. El proyecto incluye sesiones de retroalimentación personalizada y la oportunidad de presentar un discurso final frente a un público real.",
    impacto:
      "Ha beneficiado a más de 80 jóvenes, mejorando su confianza y habilidades comunicativas para destacar en sus comunidades.",
    estado: "completado",
  },
  {
    id: "10",
    slug: "lider-a-lider",
    titulo: "Líder a Líder",
    subtitulo: "Programa de capacitación para líderes",
    director: "Alexis Nuñez",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen: "/images/areas_oportunidad/desarrollo-individual/proyectos/lider-a-lider.webp",
    area_oportunidad: "desarrollo-individual",
    url: "/proyectos/lider-a-lider",
    descripcion:
      "'Líder a Líder' es un programa de formación intensiva dirigido a líderes emergentes que buscan fortalecer sus habilidades de liderazgo en contextos comunitarios, educativos o empresariales. A través de módulos teóricos y prácticos, los participantes exploran temas como inteligencia emocional, gestión de equipos, toma de decisiones y resolución de conflictos. El programa utiliza metodologías interactivas, como estudios de caso, dinámicas grupales y mentorías personalizadas, para preparar a los líderes para enfrentar desafíos reales. Además, fomenta la creación de redes de apoyo entre los participantes, promoviendo la colaboración y el intercambio de experiencias. Actualmente, el programa sigue activo, con planes de expansión para incluir más líderes de diferentes regiones de Ecuador.",
    impacto:
      "Ha capacitado a más de 60 líderes, quienes han implementado proyectos de impacto en sus comunidades.",
    estado: "activo",
  },

  // Impacto en la Comunidad
  {
    id: "13",
    slug: "feria-del-libro",
    titulo: "Feria del Libro",
    subtitulo: "Feria de venta de libros",
    director: "Nicolas Merizalde",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen: "/images/areas_oportunidad/impacto-comunidad/proyectos/feria-libro.webp",
    area_oportunidad: "impacto-comunidad",
    url: "/proyectos/feria-del-libro",
    descripcion:
      "La 'Feria del Libro' es un evento cultural que busca democratizar el acceso a la lectura en Ambato, Ecuador. Este proyecto reúne a librerías locales, editoriales independientes y autores para ofrecer libros de diversos géneros a precios accesibles. Además de la venta de libros, la feria incluye actividades como charlas con autores, talleres de escritura creativa, cuentacuentos para niños y presentaciones de libros nuevos. El objetivo es fomentar la lectura como herramienta de desarrollo personal y cultural, especialmente entre los jóvenes y las familias de la comunidad. El evento también apoya a pequeños editores y escritores emergentes, dándoles una plataforma para visibilizar su trabajo.",
    impacto:
      "Ha beneficiado a más de 500 personas, promoviendo la lectura y apoyando a la industria editorial local.",
    estado: "completado",
  },
  {
    id: "14",
    slug: "podcast-pan-de-pinllo",
    titulo: "Podcast 'A los Tiempos Pan de Pinllo'",
    subtitulo: "Podcast sobre experiencia de grandes lideres en la ciudad de Ambato",
    director: "Daniel Bombón y Ricardo Santamaría",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen: "/images/areas_oportunidad/impacto-comunidad/proyectos/podcast.png",
    area_oportunidad: "impacto-comunidad",
    url: "/proyectos/podcast-pan-de-pinllo",
    descripcion:
      "Este podcast, titulado 'A los Tiempos Pan de Pinllo', es una plataforma que destaca las historias y experiencias de líderes destacados de Ambato, Ecuador. A través de entrevistas en profundidad, el programa explora los desafíos, logros y lecciones de vida de figuras influyentes en áreas como el emprendimiento, la educación, la cultura y el activismo comunitario. Cada episodio busca inspirar a la audiencia, especialmente a los jóvenes, a perseguir sus metas y contribuir al desarrollo de su comunidad. El podcast es producido por un equipo de jóvenes comunicadores y se distribuye en plataformas digitales, con planes de expandir su alcance a otras ciudades de Ecuador.",
    impacto:
      "Ha alcanzado a miles de oyentes, inspirando a la comunidad a conocer y aprender de sus líderes locales.",
    estado: "activo",
  },
];

// Funciones de utilidad para filtrar proyectos
export function getProyectosPorArea(areaSlug: string): Proyecto[] {
  return proyectos.filter((proyecto) => proyecto.area_oportunidad === areaSlug);
}

export function getAllProyectos(): Proyecto[] {
  return proyectos;
}

export function getProyectoById(id: string): Proyecto | undefined {
  return proyectos.find((proyecto) => proyecto.id === id);
}

export function getProyectoBySlug(slug: string): Proyecto | undefined {
  return proyectos.find((proyecto) => proyecto.slug === slug);
}

export function getProyectosPorEstado(estado: "activo" | "completado" | "planificado"): Proyecto[] {
  return proyectos.filter((proyecto) => proyecto.estado === estado);
}

// Función para obtener el conteo de proyectos por área
export function getConteoProyectosPorArea(): { [key: string]: number } {
  const conteo: { [key: string]: number } = {};

  proyectos.forEach((proyecto) => {
    if (conteo[proyecto.area_oportunidad]) {
      conteo[proyecto.area_oportunidad]++;
    } else {
      conteo[proyecto.area_oportunidad] = 1;
    }
  });

  return conteo;
}
