import { Section } from "@/components/layout/section";
import { NoticiasEventosPorTipo } from "@/features/noticias-eventos/components";

export default function NoticiasEventos() {
  return (
    <Section className="py-0 md:py-0" aria-labelledby="noticias-contenido-heading">
      <header className="sr-only">
        <h2 id="noticias-contenido-heading">Contenido de Noticias y Eventos</h2>
      </header>

      <NoticiasEventosPorTipo />
    </Section>
  );
}
