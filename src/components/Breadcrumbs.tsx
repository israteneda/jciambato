"use client";

import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-sm ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        /* const isFirst = index === 0; */

        return (
          <div key={item.url} className="flex items-center">
            {index > 0 && <FiChevronRight className="mx-2 text-gray-400" size={16} />}

            {isLast ? (
              // Último elemento - no es un link
              <span className="line-clamp-1 font-medium text-gray-600">{item.name}</span>
            ) : (
              // Elementos intermedios - son links
              <Link
                href={item.url}
                className="text-jci-teal hover:text-jci-navy flex items-center gap-1 transition-colors hover:underline"
              >
                {/* {isFirst && <FiHome size={16} />} */}
                <span>{item.name}</span>
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
