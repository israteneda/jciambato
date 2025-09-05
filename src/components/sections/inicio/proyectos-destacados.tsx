import { proyectosDestacados } from "@/data/proyectos-destacados";
import { Carousel } from "@/components/ui/Carousel";

export default function ProyectosDestacados() {

  return (
    <section className="my-28" aria-labelledby="proyectos-destacados-heading">
      <header className="sr-only">
        <h2 id="proyectos-destacados-heading">Proyectos Destacados</h2>
      </header>
      <Carousel items={proyectosDestacados} />
    </section>
  );
}
