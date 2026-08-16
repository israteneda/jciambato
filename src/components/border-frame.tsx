"use client";

import clsx from "clsx";
import { useScroll } from "@/hooks";

export default function BorderFrame() {
  const isScrolled = useScroll();

  return (
    <div
      className={clsx(
        "border-jci-bg absolute inset-0 transform transition-all duration-400",
        isScrolled ? "border-22 md:border-55" : "border-0"
      )}
      aria-hidden="true"
      role="presentation"
    />
  );
}