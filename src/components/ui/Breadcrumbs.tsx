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
              <span className="text-gray-600 font-medium line-clamp-1">{item.name}</span>
            ) : (
              // Elementos intermedios - son links
              <Link
                href={item.url}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors flex items-center gap-1"
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
