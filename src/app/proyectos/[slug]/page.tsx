import { notFound } from "next/navigation";
import { getProyectoBySlug, getAllProyectos } from "@/data/proyectos";
import { Presentacion, Descripcion, SiguienteProyecto } from "@/app/proyectos/components/slug";

interface ProyectosPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const proyectos = getAllProyectos();

  return proyectos.map((proyecto) => ({
    slug: proyecto.slug,
  }));
}

export async function generateMetadata({ params }: ProyectosPageProps) {
  const { slug } = await params;
  const proyecto = getProyectoBySlug(slug);

  if (!proyecto) {
    return {
      title: "Proyecto no encontrado — Proyectos",
      description: "La página que buscas no existe.",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jciambato.org";
  const projectUrl = `${baseUrl}/proyectos/${slug}`;
  const projectImage = proyecto.imagen
    ? `${baseUrl}${proyecto.imagen}`
    : `${baseUrl}/images/logos/jci-ambato.webp`;

  return {
    title: `${proyecto.nombre} — Proyectos`,
    description:
      proyecto.descripcion || proyecto.subtitulo || "Descubre este proyecto de JCI Ambato",
    keywords: [
      "JCI Ambato",
      "proyectos sociales",
      "liderazgo juvenil",
      "voluntariado",
      proyecto.nombre,
      ...(proyecto.area_oportunidad ? [proyecto.area_oportunidad] : []),
    ],
    openGraph: {
      title: proyecto.nombre,
      description:
        proyecto.descripcion || proyecto.subtitulo || "Descubre este proyecto de JCI Ambato",
      url: projectUrl,
      siteName: "JCI Ambato",
      images: [
        {
          url: projectImage,
          width: 1200,
          height: 630,
          alt: `Imagen del proyecto: ${proyecto.nombre}`,
        },
      ],
      locale: "es_EC",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: proyecto.nombre,
      description:
        proyecto.descripcion || proyecto.subtitulo || "Descubre este proyecto de JCI Ambato",
      images: [projectImage],
    },
    alternates: {
      canonical: projectUrl,
    },
  };
}

export default async function ProyectosPage({ params }: ProyectosPageProps) {
  const { slug } = await params;
  const proyecto = getProyectoBySlug(slug);

  if (!proyecto) {
    notFound();
  }

  return (
    <main className="relative">
      <Presentacion proyecto={proyecto} />
      <Descripcion proyecto={proyecto} />

      {/* Componentes específicos para proyectos complejos */}
      {/* {proyecto.tipo_proyecto === "especial" && ( 
        <>
          <Beneficios />
          <Direccion />
          <Vivir />
          <Cronograma proyecto={proyecto} />
          <Galeria proyecto={proyecto} />
          <Equipo proyecto={proyecto} />
          <Metricas proyecto={proyecto} />
          <Documentos proyecto={proyecto} />
           <FormularioNotion />
        </>
      )}*/}

      <SiguienteProyecto proyecto={proyecto} />
    </main>
  );
}
