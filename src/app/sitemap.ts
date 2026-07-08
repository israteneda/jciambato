import { MetadataRoute } from "next";
import { getAllProyectos } from "@/data/proyectos";
import { getAllNoticiasEventos } from "@/data/noticias";
import { getAllAreas } from "@/data/areas-oportunidad";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jciambato.org";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/nosotros`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/impacto`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/areas-oportunidad`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/proyectos`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/noticias-eventos`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/miembros`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/involucrate`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/politica-privacidad`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/politica-gestion`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const proyectos = getAllProyectos().map((p) => ({
    url: `${baseUrl}/proyectos/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const noticiasEventos = getAllNoticiasEventos().map((n) => ({
    url: `${baseUrl}/noticias-eventos/${n.url}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const areas = getAllAreas().map((a) => ({
    url: `${baseUrl}/areas-oportunidad/${a.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...proyectos, ...noticiasEventos, ...areas];
}
