import { notFound } from "next/navigation";
import { getProyectoBySlug, getAllProyectos } from "@/data/proyectos";
import { Presentacion, Descripcion, SiguienteProyecto } from "../components/slug";

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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const projectUrl = `${baseUrl}/proyectos/${slug}`;
  const ogImage = `${baseUrl}/og?type=proyecto&slug=${slug}`;

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
          url: ogImage,
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
      images: [ogImage],
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
      <SiguienteProyecto proyecto={proyecto} />
    </main>
  );
}
