import type { ReactNode } from "react";

import { cn } from "@/utils/utils";

import BackgroundImage from "@/components/background-image";
import BorderFrame from "@/components/border-frame";
import InfoContainer from "@/components/info-container";
import RotatedText from "@/components/rotated-text";
import RowScroll from "@/components/row-scroll";
import ScrollNav from "@/components/scroll-nav";

import { Section } from "./section";

interface PageHeroProps {
  subtitle: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
  variant?: "fixed" | "section" | "full";
  rotatedText?: string;
  image?: string;
  imageAlt?: string;
  border?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function PageHero({
  subtitle,
  title,
  description,
  tone = "light",
  variant = "fixed",
  rotatedText,
  image,
  imageAlt,
  border = false,
  className,
  children,
}: PageHeroProps) {
  const info = (
    <InfoContainer tone={tone} subtitle={subtitle} title={title} description={description} />
  );

  /**Usado para presentacion en seccion */
  if (variant === "section") {
    return (
      <Section className={cn("py-50 md:py-50", className)}>
        {rotatedText && <RotatedText text={rotatedText} />}
        {info}
        <RowScroll />
      </Section>
    );
  }

  /**Usado para presentacion en pantalla completa */
  if (variant === "full") {
    return (
      <Section className={cn("py-0 md:py-0", className)}>
        <div className="flex w-full">
          <div className="box-border flex h-screen w-full items-center pb-23 md:px-45">
            {image && <BackgroundImage image={image} alt={imageAlt ?? "Imagen de fondo"} />}
            {border && <BorderFrame />}
            {info}
          </div>
        </div>
        <RowScroll />
        <ScrollNav />
        {children}
      </Section>
    );
  }

  return (
    /**
     * Por defecto, se usa para presentacion en pantalla completa con scroll
     */
    <section className="fixed inset-0 box-border flex h-160 w-full items-center overflow-hidden pb-0 md:h-190 md:pb-20">
      {rotatedText && <RotatedText text={rotatedText} />}
      <div className="w-full">{info}</div>
      {image && <BackgroundImage image={image} alt={imageAlt ?? "Imagen de fondo"} />}
      <RowScroll />
    </section>
  );
}
