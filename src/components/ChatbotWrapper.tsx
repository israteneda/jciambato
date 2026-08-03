"use client";

import dynamic from "next/dynamic";

// Dynamically import Chatbot to prevent SSR and hydration issues
const Chatbot = dynamic(() => import("@/components/Chatbot"), {
  ssr: false,
});

export default function ChatbotWrapper() {
  return <Chatbot />;
}
