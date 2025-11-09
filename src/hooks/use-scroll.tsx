import { useEffect, useState } from "react";

// Global state to share between components
let globalScrollState = false;
let globalListeners: Set<(isScrolled: boolean) => void> = new Set();
let isInitialized = false;

const updateGlobalScrollState = (isScrolled: boolean) => {
  if (globalScrollState !== isScrolled) {
    globalScrollState = isScrolled;
    globalListeners.forEach((listener) => listener(isScrolled));
  }
};

const initializeGlobalScroll = () => {
  if (isInitialized) return;

  isInitialized = true;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    updateGlobalScrollState(scrollY > 50);
  };

  // Set initial state
  updateGlobalScrollState(window.scrollY > 50);

  window.addEventListener("scroll", handleScroll, { passive: true });
};

export default function useScroll() {
  const [isScrolled, setIsScrolled] = useState(globalScrollState);

  useEffect(() => {
    // Initialize global scroll listener if not already done
    initializeGlobalScroll();

    // Add this component's listener
    globalListeners.add(setIsScrolled);

    return () => {
      // Remove this component's listener
      globalListeners.delete(setIsScrolled);
    };
  }, []);

  return isScrolled;
}
