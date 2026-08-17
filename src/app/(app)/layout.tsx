import dynamic from "next/dynamic";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/navbar";

const ScrollTop = dynamic(() => import("@/components/scroll-top").then((mod) => mod.ScrollTop));

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollTop />
    </>
  );
}
