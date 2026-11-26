"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type Tone = "light" | "dark";

interface NavbarToneContextValue {
  toneOverride: Tone | null;
  setToneOverride: (tone: Tone | null) => void;
}

const NavbarToneContext = createContext<NavbarToneContextValue>({
  toneOverride: null,
  setToneOverride: () => {},
});

export function NavbarToneProvider({ children }: { children: ReactNode }) {
  const [toneOverride, setToneOverride] = useState<Tone | null>(null);
  const value = useMemo(() => ({ toneOverride, setToneOverride }), [toneOverride]);
  return <NavbarToneContext.Provider value={value}>{children}</NavbarToneContext.Provider>;
}

export function useNavbarToneOverride() {
  const { toneOverride, setToneOverride } = useContext(NavbarToneContext);
  const setDark = useCallback(() => setToneOverride("dark"), [setToneOverride]);
  const clear = useCallback(() => setToneOverride(null), [setToneOverride]);
  return { toneOverride, setDark, clear };
}
