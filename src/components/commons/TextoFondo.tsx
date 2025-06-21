"use client";

import { useScrollPositionText } from '@/hooks';
import clsx from 'clsx';
import { useMemo } from 'react';

interface BackgroundTextProps {
  textoPrimario: string;
  textoSecundario: string;
  numberLeft: number;
  numberRight: number;
}

const BackgroundText = ({
  textoPrimario,
  textoSecundario,
  numberLeft,
  numberRight
}: BackgroundTextProps) => {
  const scrollY = useScrollPositionText();

  // Calculamos desplazamientos de forma memoizada con mayor precisión
  const translateStyles = useMemo(() => ({
    left: {
      transform: `translateX(${scrollY * numberLeft}px)`,
      willChange: "transform"
    },
    right: {
      transform: `translateX(${-scrollY * numberRight}px)`,
      willChange: "transform"
    }
  }), [scrollY, numberLeft, numberRight]);

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
    <div className='overflow-hidden mx-auto select-none'>
      <h2
        className={baseTextStyle}
        style={translateStyles.left}
        aria-hidden
      >
        {textoPrimario}
      </h2>

      <h2
        className={baseTextStyle}
        style={translateStyles.right}
        aria-hidden
      >
        {textoSecundario}
      </h2>
    </div>
  );
};

export default BackgroundText;
