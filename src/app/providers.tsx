"use client";

import * as React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Clarity from "@/components/Clarity";
import ChatbotWrapper from "@/components/ChatbotWrapper";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
      <Clarity />
      <ChatbotWrapper />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
