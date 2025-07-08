import { proyectosDestacados } from "@/data/proyectos-destacados";
import { Carousel } from "@/components/ui/Carousel";

export default function Premios() {

  return (
    <section className="my-28" aria-labelledby="premios-heading">
      <header className="sr-only">
        <h2 id="premios-heading">Premios y Reconocimientos</h2>
      </header>
      <Carousel items={proyectosDestacados} />
    </section>
  );
}
