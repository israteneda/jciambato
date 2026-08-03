"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";

export default function Clarity() {
  useEffect(() => {
    // Initialize Microsoft Clarity with the project ID
    clarity.init("slo551p7ct");
  }, []);

  return null;
}
