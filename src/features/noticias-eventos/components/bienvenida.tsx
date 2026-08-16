import PageHero from "@/components/layout/page-hero";

export default function Bienvenida() {
  return (
    <PageHero
      tone="light"
      rotatedText="Lo más reciente en JCI Ambato"
      subtitle="Noticias y Eventos"
      title="Nuestras Noticias y Eventos"
      description="Explora nuestras noticias, logros y próximos eventos. Todo lo que pasa en JCI Ambato, aquí."
      image="/images/noticias_eventos/noticias-eventos.webp"
      imageAlt="Imagen de fondo de noticias y eventos de JCI Ambato"
    />
  );
}