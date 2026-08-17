"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, type ComponentProps } from "react";

import { getHeroTone } from "@/utils/nav";

export function NavbarWrapper(props: ComponentProps<"header">) {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [affix, setAffix] = useState(false);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setAffix(latestValue >= 50);
  });

  return <header data-affix={affix} data-tone={getHeroTone(pathname)} {...props} />;
}
