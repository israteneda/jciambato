"use client";

import { useScrollPositionText } from '@/hooks';
import clsx from 'clsx';
import { useMemo, useState, useEffect } from 'react';

interface BackgroundTextProps {
  textoPrimario: string;
  textoSecundario: string;
  numberLeft: number;
  numberRight: number;
  numberLeftMobile?: number;
  numberRightMobile?: number;
}

const BackgroundText = ({
  textoPrimario,
  textoSecundario,
  numberLeft,
  numberRight,
  numberLeftMobile = numberLeft * 0.5, // Default to half the desktop value
  numberRightMobile = numberRight * 0.5
}: BackgroundTextProps) => {
  const scrollY = useScrollPositionText();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size changes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Use appropriate values based on screen size
  const currentNumberLeft = isMobile ? numberLeftMobile : numberLeft;
  const currentNumberRight = isMobile ? numberRightMobile : numberRight;

  // Calculamos desplazamientos de forma memoizada con mayor precisión
  const translateStyles = useMemo(() => ({
    left: {
      transform: `translateX(${scrollY * currentNumberLeft}px)`,
      willChange: "transform"
    },
    right: {
      transform: `translateX(${-scrollY * currentNumberRight}px)`,
      willChange: "transform"
    }
  }), [scrollY, currentNumberLeft, currentNumberRight]);

  const baseTextStyle = clsx(
    "flex justify-center",
    "opacity-[0.08]",
    "text-7xl md:text-[210px]",
    "font-extrabold",
    "whitespace-nowrap",
    "tracking-normal",
    "uppercase",
    "text-jci-gray",
    "select-none"
  );

  return (
    <section className='overflow-hidden mx-auto select-none' aria-hidden="true">
      <h2
        className={baseTextStyle}
        style={translateStyles.left}
        aria-hidden="true"
        role="presentation"
      >
        {textoPrimario}
      </h2>

      <h2
        className={baseTextStyle}
        style={translateStyles.right}
        aria-hidden="true"
        role="presentation"
      >
        {textoSecundario}
      </h2>
    </section>
  );
};

export default BackgroundText;
