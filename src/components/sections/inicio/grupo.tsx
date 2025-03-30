"use client";

import { Button } from "@heroui/button";
import Image from "next/image";

// Interfaces for component props
interface TitleSectionProps {
  subtitle?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonOnClick?: () => void;
}

interface StatisticsProps {
  projects?: number;
  years?: number;
  members?: number;
}

interface GrupoProps {
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  titleSection?: TitleSectionProps;
  statistics?: StatisticsProps;
}

// Default values
const defaultProps: GrupoProps = {
  image: {
    src: "/images/grupo3.jpeg",
    alt: "Grupo JCI Ambato",
    width: 500,
    height: 500,
  },
  titleSection: {
    subtitle: "GRUPO",
    title: "A lo largo de mas de 50 años, JCI Ambato a fomentado del desarrollo de líderes en la ciudad.",
    description: "Nos comprometemos a construir un legado de cambio que beneficie a nuestras comunidades y fomente el crecimiento colectivo.",
    buttonText: "Nuestra misión y visión",
  },
  statistics: {
    projects: 20,
    years: 50,
    members: 20,
  },
};

// Component implementations
const TitleSection = ({
  subtitle = defaultProps.titleSection!.subtitle,
  title = defaultProps.titleSection!.title,
  description = defaultProps.titleSection!.description,
  buttonText = defaultProps.titleSection!.buttonText,
  buttonOnClick,
}: TitleSectionProps) => (
  <div className="mx-11 xl:mx-0 md:w-4/6">
    <p className="text-xs sm:text-sm lg:text-base font-semibold uppercase tracking-wide text-gray-600">
      {subtitle}
    </p>

    <h2 className="mt-8 text-4xl font-semibold text-cyan-600 md:leading-tight">
      {title}
    </h2>

    <div className="max-w-md mt-8 ml-10 md:ml-16">
      <p className="text-base md:text-lg text-gray-700">
        {description}
      </p>

      <Button
        radius="none"
        variant="bordered"
        className="border-gray-400 text-gray-400 group mt-14"
        aria-label={buttonText}
        onClick={buttonOnClick}
      >
        <span className="absolute inset-0 transform -translate-x-full bg-gray-400 transition-transform duration-300 group-hover:translate-x-0" />
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          {buttonText}
        </span>
      </Button>
    </div>
  </div>
);

const Statistics = ({
  projects = defaultProps.statistics!.projects,
  years = defaultProps.statistics!.years,
  members = defaultProps.statistics!.members,
}: StatisticsProps) => (
  <div className="mx-11 w-full md:w-1/2 mt-16">
    <div className="text-left">
      <p className="text-7xl md:text-8xl font-light text-cyan-600">
        {projects}+
      </p>
      <p className="text-base text-gray-700 font-semibold uppercase">
        Proyectos Ejecutados
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-5 mt-10 md:mt-16">
      <div className="text-left">
        <p className="text-7xl sm:text-8xl font-light text-cyan-600">
          {years}+
        </p>
        <p className="text-base text-gray-700 font-semibold uppercase">
          Años en Ambato
        </p>
      </div>
      <div className="text-left">
        <p className="text-7xl sm:text-8xl font-light text-cyan-600">
          {members}+
        </p>
        <p className="text-base text-gray-700 font-semibold uppercase">
          Miembros Activos
        </p>
      </div>
    </div>
  </div>
);

// Main Grupo component
export default function Grupo(props?: GrupoProps) {
  const mergedProps = {
    ...defaultProps,
    ...props,
    titleSection: {
      ...defaultProps.titleSection,
      ...props?.titleSection,
    },
    statistics: {
      ...defaultProps.statistics,
      ...props?.statistics,
    },
  };

  return (
    <section className="relative z-10 overflow-hidden my-28">
      <div className="flex flex-col items-end">
        <div className="ml-20 md:w-1/2">
          <Image
            src={mergedProps.image?.src || defaultProps.image!.src}
            alt={mergedProps.image?.alt || defaultProps.image!.alt}
            width={mergedProps.image?.width || defaultProps.image!.width}
            height={mergedProps.image?.height || defaultProps.image!.height}
            className="object-cover w-full h-auto"
          />
        </div>

        <div className="flex flex-col max-w-6xl mx-auto mt-8">
          <TitleSection {...mergedProps.titleSection} />
          <div className="flex justify-center md:justify-end">
            <Statistics {...mergedProps.statistics} />
          </div>
        </div>
      </div>
    </section>
  );
}
