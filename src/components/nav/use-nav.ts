"use client";

import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export function useNav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest >= 50);
  });

  return { pathname, isScrolled };
}
