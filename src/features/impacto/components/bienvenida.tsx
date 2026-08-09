"use client";
import InfoContainer from "@/components/info-container";
import { Section } from "@/components/layout/section";
import RotatedText from "@/components/rotated-text";
import RowScroll from "@/components/row-scroll";

export default function Bienvenida() {
  return (
    <Section>
      <RotatedText text="Formas de Actuar" />
      <InfoContainer
        subtitle="Que Hacemos"
        title="Desarrollo y Liderazgo"
        description="Formamos jóvenes líderes que impulsan soluciones para transformar positivamente su entorno."
      />
      <RowScroll />
    </Section>
  );
}
