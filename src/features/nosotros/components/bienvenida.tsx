import PageHero from "@/components/layout/page-hero";

export function Bienvenida() {
  return (
    <PageHero
      tone="light"
      rotatedText="Enfocados en el desarrollo de nuestra ciudad"
      subtitle="Quienes Somos"
      title="Creando el futuro de nuestra ciudad, juntos."
      description="Somos una comunidad de líderes jóvenes comprometidos con transformar nuestra ciudad y construir un futuro mejor para todos."
      image="/images/inicio/cincuentenario.png"
      imageAlt="Cincuentenario de JCI Ambato"
    />
  );
}
