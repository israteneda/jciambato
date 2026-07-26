"use client";

import Link from "next/link";

import type { NavItem } from "@/types/nav";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/* -------------------------------------------------------------------------- */
/*  DesktopNav                                                                 */
/* -------------------------------------------------------------------------- */

export function DesktopNav({
  items,
  isScrolled,
  pathname,
}: {
  items: NavItem[];
  isScrolled: boolean;
  pathname: string;
}) {
  return (
    <nav className="hidden lg:block" aria-label="Navegación principal">
      <ul className="flex gap-8" role="menubar">
        {items.map((item, index) => {
          const active = isActive(item.href, pathname);
          const isLast = index === items.length - 1;

          const baseColor = isLast
            ? "text-jci-yellow font-semibold hover:text-yellow-400"
            : isScrolled
              ? "text-jci-black hover:text-jci-yellow"
              : "text-white hover:text-jci-yellow";

          return (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                aria-current={active ? "page" : undefined}
                className={cn(
                  "transition-colors duration-200",
                  baseColor,
                  active && "text-jci-yellow",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
