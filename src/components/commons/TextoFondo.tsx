"use client";

import { useScrollPositionText } from "@/hooks";
import clsx from "clsx";
import { useMemo } from "react";

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
  numberRight,
}: BackgroundTextProps) => {
  const scrollY = useScrollPositionText();

  // Calculamos desplazamientos de forma memoizada
  const translateStyles = useMemo(
    () => ({
      left: { transform: `translateX(${scrollY * numberLeft}px)` },
      right: { transform: `translateX(${-scrollY * numberRight}px)` },
    }),
    [scrollY, numberLeft, numberRight]
  );

  const baseTextStyle = clsx(
    "flex justify-center",
    "opacity-[0.08]",
    "text-7xl md:text-[230px]",
    "font-extrabold",
    "whitespace-nowrap",
    "tracking-normal",
    "uppercase",
    "text-jci-gray"
  );

  return (
    <div className="overflow-hidden mx-auto">
      <h2
        className={baseTextStyle}
        style={{ ...translateStyles.left, willChange: "transform" }}
        aria-hidden
      >
        {textoPrimario}
      </h2>

      <h2
        className={baseTextStyle}
        style={{ ...translateStyles.right, willChange: "transform" }}
        aria-hidden
      >
        {textoSecundario}
      </h2>
    </div>
  );
};

export default BackgroundText;
