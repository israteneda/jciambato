"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState, type ComponentProps } from "react";

export function NavbarWrapper(props: ComponentProps<"header">) {
  const { scrollY } = useScroll();
  const [affix, setAffix] = useState(false);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setAffix(latestValue >= 50);
  });

  return <header data-affix={affix} {...props} />;
}
