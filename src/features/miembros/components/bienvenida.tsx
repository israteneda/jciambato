import PageHero from "@/components/layout/page-hero";

export default function Bienvenida() {
  return (
    <PageHero
      tone="light"
      rotatedText="Comunidad JCI Ambato"
      subtitle="Miembros"
      title="Líderes que transforman la sociedad"
      description="Somos jóvenes comprometidos con nuestro crecimiento y con dejar una huella positiva en el mundo."
      image="/images/miembros/miembros.webp"
      imageAlt="Imagen de fondo de miembros de JCI Ambato"
    />
  );
}
