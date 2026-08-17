"use client";

import * as React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Clarity from "@/components/clarity";
import ChatbotWrapper from "@/components/chatbot-wrapper";

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
