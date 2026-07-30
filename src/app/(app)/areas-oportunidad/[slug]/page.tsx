import { notFound } from "next/navigation";
import { getAreaBySlug, getAllAreas } from "@/features/inicio/data/areas-oportunidad";
import {
  Bienvenida,
  Presentacion,
  Construccion,
  ExploraAreasOportunidad,
  SiguienteArea,
  Caracteristicas,
} from "@/features/areas-oportunidad/components/slug";

interface AreaOportunidadPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const areas = getAllAreas();

  return areas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: AreaOportunidadPageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    return {
      title: "Área no encontrada — Áreas de Oportunidad",
      description: "La página que buscas no existe.",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const ogImage = `${baseUrl}/og?type=area&slug=${slug}`;

  return {
    title: `${area.title} — Áreas de Oportunidad`,
    description: area.description,
    keywords: [
      "JCI Ambato",
      area.title,
      "áreas de oportunidad",
      "liderazgo juvenil",
      "desarrollo comunitario",
      "voluntariado",
      ...(area.subtitle ? [area.subtitle] : []),
    ],
    openGraph: {
      title: `${area.title} — Áreas de Oportunidad`,
      description: area.description,
      url: `${baseUrl}/areas-oportunidad/${slug}`,
      siteName: "JCI Ambato",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Área de Oportunidad: ${area.title}`,
        },
      ],
      locale: "es_EC",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${area.title} — Áreas de Oportunidad`,
      description: area.description,
      images: [ogImage],
    },
    alternates: {
      canonical: `${baseUrl}/areas-oportunidad/${slug}`,
    },
  };
}

export default async function AreaOportunidadPage({ params }: AreaOportunidadPageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return (
    <main className="relative">
      <Bienvenida area={area} />
      <Presentacion area={area} />
      <Construccion area={area} />
      <ExploraAreasOportunidad area={area} />
      <Caracteristicas area={area} />
      <SiguienteArea area={area} />
    </main>
  );
}
