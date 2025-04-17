"use client";

import { carouselItems } from "@/data/carouselItems";
import { Carousel } from "@/components/ui/Carousel";
import { Button } from "@heroui/button";
import { HiArrowNarrowRight, HiChevronLeft, HiChevronRight } from "react-icons/hi";



export default function Grupo() {

  return (
    <section className="my-28">
      <Carousel items={carouselItems} />
    </section>
  );
}
