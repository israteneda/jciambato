"use client";

import { usePathname } from "next/navigation";

import type { NavItem } from "@/types/nav";
import { isActive } from "@/lib/nav";

import { NavItem as NavLink } from "./NavItem";

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block" aria-label="Navegación principal">
      <ul className="flex gap-8" role="menubar">
        {items.map((item, index) => {
          const active = isActive(item.href, pathname);
          const isLast = index === items.length - 1;

          const baseColor = isLast
            ? "text-jci-yellow font-semibold hover:text-yellow-400"
            : "group-data-[affix=false]:text-white group-data-[affix=true]:text-jci-black hover:text-jci-yellow";

          return (
            <li key={item.href} role="none">
              <NavLink
                href={item.href}
                active={active}
                className={`transition-colors duration-200 ${baseColor} ${active ? "text-jci-yellow" : ""}`}
              >
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
