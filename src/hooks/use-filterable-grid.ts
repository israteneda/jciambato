import { useState } from "react";

export interface FilterCategory {
  name: string;
  slug: string;
  count: number;
}

export function useFilterableGrid<T>({
  items,
  categories,
  getItemsBySlug,
  pageSize,
}: {
  items: T[];
  categories: FilterCategory[];
  getItemsBySlug: (slug: string) => T[];
  pageSize: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems =
    activeIndex === 0 ? items : getItemsBySlug(categories[activeIndex]?.slug ?? "");

  const visibleItems = filteredItems.slice(0, currentPage * pageSize);
  const hasMore = filteredItems.length > currentPage * pageSize;

  const handleCategoryChange = (index: number) => {
    setActiveIndex(index);
    setCurrentPage(1);
  };

  const loadMore = () => {
    setCurrentPage((page) => page + 1);
  };

  const selectItems = categories.map((category, index) => ({
    label: category.name,
    value: index.toString(),
  }));

  return {
    activeIndex,
    selectItems,
    visibleItems,
    hasMore,
    handleCategoryChange,
    loadMore,
  };
}
