"use client";

import { useScroll } from "@/hooks";
import { useEffect, useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import { Button } from "@heroui/button";
import Link from "next/link";
import BorderFrame from "@/components/commons/border-frame";
import RotatedText from "@/components/commons/rotated-text";
import gsap from "gsap";

export default function BienvenidaV3() {
  const isScrolled = useScroll();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const linesRef = useRef<Array<HTMLDivElement | null>>([]);
  const blobsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Animación de líneas
    if (linesRef.current) {
      linesRef.current.forEach((line: HTMLDivElement | null, i: number) => {
        if (line) {
          gsap.fromTo(
            line,
            { y: -40 * (i + 1), opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2 + i * 0.2,
              ease: "power2.out",
              delay: 0.2 * i,
            }
          );
        }
      });
    }
    // Animación de blobs flotantes
    if (blobsRef.current) {
      blobsRef.current.forEach((blob, i) => {
        if (blob) {
          gsap.to(blob, {
            y: `+=${30 + i * 10}`,
            x: `+=${10 - i * 8}`,
            scale: 1 + 0.08 * (i % 2 === 0 ? 1 : -1),
            repeat: -1,
            yoyo: true,
            duration: 6 + i * 2,
            ease: "sine.inOut",
            delay: i * 0.5,
          });
        }
      });
    }

    // Interacción con el mouse (parallax)
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Normalizar posición del mouse a rango [-1, 1]
      const relX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const relY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      blobsRef.current.forEach((blob, _i) => {
        if (blob) {
          // Cada blob tiene una fuerza de parallax diferente
          const strength = 30 + _i * 15; // px máximo de desplazamiento
          gsap.to(blob, {
            x: relX * strength,
            y: relY * strength,
            duration: 1.2,
            ease: "sine.out",
          });
        }
      });
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      className="relative"
      aria-labelledby="bienvenida-heading"
    >
      <header className="sr-only">
        <h1 id="bienvenida-heading">Bienvenido a JCI Ambato</h1>
      </header>

      <div ref={containerRef} className="flex w-full bg-cyan-950 relative overflow-hidden">
        {/* BLOBS ABSTRACTOS */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* 4 blobs, puedes ajustar cantidad y estilos */}
          {[0, 1, 2, 3].map((_i) => (
            <div
              key={_i}
              ref={el => { blobsRef.current[_i] = el; }}
              className="absolute blur-[2px] opacity-70"
              style={{
                width: `${260 + _i * 60}px`,
                height: `${180 + _i * 40}px`,
                left: _i === 0 ? '8%' : _i === 1 ? '60%' : _i === 2 ? '30%' : '75%',
                top: _i === 0 ? '7%' : _i === 1 ? '10%' : _i === 2 ? '60%' : '55%',
                zIndex: 1,
              }}
            >
              {/* SVG blob shape con gradiente */}
              <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id={`blob-gradient-${_i}`} cx="50%" cy="50%" r="70%" fx="60%" fy="40%">
                    <stop offset="0%" stopColor={_i % 2 === 0 ? '#7FFFD4' : '#A3E635'} stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#0e3749" stopOpacity="0.2" />
                  </radialGradient>
                </defs>
                <path
                  d="M 200 40 Q 350 60 320 180 Q 300 290 180 260 Q 60 230 80 120 Q 100 20 200 40 Z"
                  fill={`url(#blob-gradient-${_i})`}
                />
              </svg>
            </div>
          ))}
        </div>

        <div className="h-screen flex max-w-5xl mx-[180px] items-center box-border">
          <BorderFrame isScrolled={isScrolled} />

          {/* Contenido principal */}
          <main className="relative z-20">
            <div className="flex flex-col items-start select-none">
              <div className="mt-6">
                <h2
                  className="bg-gradient-to-br from-jci-navy via-white to-jci-navy text-transparent bg-clip-text font-bold text-3xl lg:text-7xl max-w-5xl py-1"
                >
                  Unidos construyendo un <span className="text-inherit italic">Futuro</span> de liderazgo
                </h2>
              </div>

              <div className="mt-10">
                <p className="text-white max-w-xl text-sm lg:text-medium leading-relaxed">
                  Impulsamos el cambio a través de la innovación, transformando ideas en soluciones que construyen comunidades más fuertes y
                  mejoran vidas.
                </p>
              </div>

              <div className="mt-9">
                <Button
                  radius="none"
                  className="relative bg-jci-aqua text-white group overflow-hidden"
                  aria-label="Más información sobre nosotros"
                >
                  <Link href="/nosotros">
                    <span className="absolute inset-0 w-full h-full transform -translate-x-full bg-cyan-950 transition-transform duration-300 group-hover:translate-x-0"></span>
                    <span className="relative z-10">Sobre Nosotros</span>
                  </Link>
                </Button>
              </div>
            </div>
          </main>
        </div>

        <RotatedText text="BIENVENIDO A LA RED GLOBAL DE LÍDERES QUE TRANSFORMAN EL MUNDO" />

        {/* Botón de scroll */}
        <div className="hidden md:block absolute z-20 top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            aria-label="Desplazarse hacia abajo"
            onClick={() => {
              // Función para scroll suave hacia abajo
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }}
          >
            <Image
              src="/icons/arrow-down.svg"
              alt=""
              width={30}
              height={30}
              className="relative w-[30px] h-[30px] object-contain"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Logo Somos Liderazgo */}
        <div className="hidden md:block absolute bottom-[100px] right-[40px] md:bottom-[60px] md:right-[124px] z-20">
          <Image
            alt="Somos Liderazgo Logo"
            className="object-contain w-[150px] h-[70px]"
            src="/images/logos/somos-liderazgo.webp"
            width={150}
            height={70}
            priority
          />
        </div>

        {/* Enlace a JCI Ecuador */}
        <div className="hidden md:block absolute bottom-[100px] left-[40px] md:bottom-[80px] md:left-[180px] text-[10.5px] font-semibold uppercase z-20 text-jci-seafoam">
          <a
            href="https://jciecuador.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
            aria-label="Visitar JCI Ecuador (se abre en nueva ventana)"
          >
            <span>
              JCI Ecuador
            </span>
            <MdOutlineArrowOutward className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Botón lateral de navegación */}
      <nav className="absolute left-1/2 z-20 bottom-0 transform -translate-x-1/2 rotate-90">
        <div className="hidden md:block">
          <Link
            href="/nosotros"
            className="flex items-center"
            aria-label="Ir a la sección Sobre Nosotros"
          >
            <span className="text-jci-aqua text-[10.5px] font-semibold uppercase">Sobre Nosotros</span>
            <Image
              src="/icons/arrow-down.svg"
              alt=""
              width={500}
              height={500}
              className="w-[96px] h-[69px] -rotate-90 object-cover"
              aria-hidden="true"
            />
          </Link>
        </div>
      </nav>
    </section>
  );
}