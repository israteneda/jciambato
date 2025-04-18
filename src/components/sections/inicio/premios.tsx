import { carouselItems } from "@/data/carouselItems";
import { Carousel } from "@/components/ui/Carousel";



export default function Grupo() {

  return (
    <section className="my-28">
      <Carousel items={carouselItems} />
    </section>
  );
}
