"use client";

import { useScroll } from "@/hooks";
import { useEffect, useRef, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import { Button } from "@heroui/button";
import Link from "next/link";
import BorderFrame from "@/components/commons/border-frame";
import RotatedText from "@/components/commons/rotated-text";
import gsap from "gsap";
import { RowScroll } from "@/components/commons";

export default function BienvenidaV3() {
  const isScrolled = useScroll();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const linesRef = useRef<Array<HTMLDivElement | null>>([]);
  const blobsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before accessing window
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Función para calcular tamaños y posiciones de blobs según el tamaño de pantalla
  const getBlobStyles = (index: number) => {
    // Default to desktop styles during SSR to prevent hydration mismatches
    if (!isMounted) {
      return {
        width: `${260 + index * 60}px`,
        height: `${180 + index * 40}px`,
        left: index === 0 ? "8%" : index === 1 ? "60%" : index === 2 ? "30%" : "75%",
        top: index === 0 ? "7%" : index === 1 ? "10%" : index === 2 ? "60%" : "55%",
      };
    }

    const isMobile = windowSize.width < 640;
    const isTablet = windowSize.width >= 640 && windowSize.width < 1024;

    if (isMobile) {
      return {
        width: `${Math.max(0, 200 - index * 0)}px`,
        height: `${Math.max(100, 200 - index * 0)}px`,
        left: index === 0 ? "1%" : index === 1 ? "50%" : index === 2 ? "10%" : "80%",
        top: index === 0 ? "10%" : index === 1 ? "15%" : index === 2 ? "70%" : "60%",
      };
    } else if (isTablet) {
      return {
        width: `${160 + index * 30}px`,
        height: `${120 + index * 20}px`,
        left: index === 0 ? "8%" : index === 1 ? "60%" : index === 2 ? "30%" : "75%",
        top: index === 0 ? "7%" : index === 1 ? "10%" : index === 2 ? "60%" : "55%",
      };
    } else {
      return {
        width: `${260 + index * 60}px`,
        height: `${180 + index * 40}px`,
        left: index === 0 ? "8%" : index === 1 ? "60%" : index === 2 ? "30%" : "75%",
        top: index === 0 ? "7%" : index === 1 ? "10%" : index === 2 ? "60%" : "55%",
      };
    }
  };

  useEffect(() => {
    if (!isMounted) return;

    // Función para actualizar el tamaño de ventana
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Establecer tamaño inicial
    updateWindowSize();

    // Escuchar cambios de tamaño
    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  }, [isMounted]);

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

    // Interacción con el mouse (parallax) - solo en desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || window.innerWidth < 768) return;
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
    <section className="relative" aria-labelledby="bienvenida-heading">
      <header className="sr-only">
        <h1 id="bienvenida-heading">Bienvenido a JCI Ambato</h1>
      </header>

      <div ref={containerRef} className="relative flex w-full overflow-hidden bg-[#003D62]">
        {/* BLOBS ABSTRACTOS */}
        <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
          {/* 4 blobs, ajustados para responsividad */}
          {[0, 1, 2, 3].map((_i) => (
            <div
              key={_i}
              ref={(el) => {
                blobsRef.current[_i] = el;
              }}
              className="absolute opacity-50 blur-[1px] sm:opacity-70 sm:blur-[2px]"
              style={{
                ...getBlobStyles(_i),
                zIndex: 1,
              }}
            >
              {/* SVG blob shape con gradiente */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    id={`blob-gradient-${_i}`}
                    cx="50%"
                    cy="50%"
                    r="70%"
                    fx="60%"
                    fy="40%"
                  >
                    <stop
                      offset="0%"
                      stopColor={_i % 2 === 0 ? "#7FFFD4" : "#A3E635"}
                      stopOpacity="0.7"
                    />
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
        <div className="mx-9 box-border flex h-screen w-full items-center pb-20 md:mx-20 lg:mx-44">
          <BorderFrame isScrolled={isScrolled} />

          {/* Contenido principal */}
          <main className="relative z-20 w-full">
            <div className="flex flex-col items-start">
              <div className="mt-5">
                <h2 className="from-jci-navy to-jci-navy max-w-xl bg-linear-to-br via-white bg-clip-text font-bold text-transparent text-2xl md:max-w-5xl md:text-5xl lg:text-7xl">
                  Unidos Construyendo un <br /> <span className="text-inherit italic">Futuro</span>{" "}
                  de Liderazgo
                </h2>
              </div>

              <div className="mt-5 lg:mt-8">
                <p className="max-w-xl text-base leading-relaxed text-white">
                  Fomentamos el cambio mediante la innovación, convirtiendo ideas en soluciones que
                  fortalecen comunidades y mejoran vidas.
                </p>
              </div>

              <div className="mt-6 lg:mt-8">
                <Button
                  radius="none"
                  className="group bg-jci-blue relative overflow-hidden text-sm text-white"
                  aria-label="Más información sobre nosotros"
                >
                  <Link href="/nosotros">
                    <span className="bg-jci-teal absolute inset-0 h-full w-full -translate-x-full transform transition-transform duration-300 group-hover:translate-x-0"></span>
                    <span className="relative z-10">Sobre Nosotros</span>
                  </Link>
                </Button>
              </div>
            </div>
          </main>
        </div>
        <RotatedText text="BIENVENIDO A LA RED GLOBAL DE LÍDERES QUE TRANSFORMAN EL MUNDO" />
        {/* Botón de scroll */}
        <RowScroll />
        {/* Logo Somos Liderazgo y Sentir Actuar Transformar */}
        <div className="absolute right-5 bottom-16 z-20 hidden sm:right-8 sm:bottom-20 md:right-32 md:bottom-16 lg:block">
          <div className="flex items-center gap-5">
            <div className="md:h-auto md:w-38">
              <Image
                alt="Liderazgo con Propósito Logo"
                className="h-full w-full object-contain"
                src="/images/logos/actuar-proposito.webp"
                width={150}
                height={70}
                priority
                draggable="false"
              />
            </div>

            <div className="md:h-auto md:w-32">
              <Image
                alt="Sentir Actuar Transformar Logo"
                className="h-full w-full object-contain"
                src="/images/logos/sentir-actuar-transformar.png"
                width={150}
                height={70}
                priority
                draggable="false"
              />
            </div>
          </div>
        </div>
        {/* Enlace a JCI Ecuador */}
        <div className="text-jci-teal absolute bottom-16 left-5 z-20 hidden text-xs font-bold uppercase sm:bottom-20 sm:left-8 sm:text-xs md:bottom-20 md:text-xs lg:left-44 lg:block">
          <a
            href="https://jciecuador.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
            aria-label="Visitar JCI Ecuador (se abre en nueva ventana)"
          >
            <span>JCI Ecuador</span>
            <MdOutlineArrowOutward
              className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* Botón lateral de navegación */}
      <nav className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 rotate-90 transform">
        <div className="hidden md:block">
          <Link
            href="/nosotros"
            className="flex items-center"
            aria-label="Ir a la sección Sobre Nosotros"
          >
            <span className="text-jci-teal text-[8px] font-semibold uppercase md:text-[10.5px]">
              Sobre Nosotros
            </span>
            <Image
              src="/icons/arrow-down.svg"
              alt=""
              width={500}
              height={500}
              className="h-10 w-14 -rotate-90 object-cover md:h-16 md:w-24"
              aria-hidden="true"
            />
          </Link>
        </div>
      </nav>
    </section>
  );
}
