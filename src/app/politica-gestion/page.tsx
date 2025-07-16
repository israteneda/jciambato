import { Bienvenida, PoliticaGestion } from "@/components/sections/politica-gestion";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Política de Gestión",
    description: "Política de Gestión",
};


export default function PoliticaGestionPage() {
    return (
        <main>
            <Bienvenida />
            <div className="h-[640px]" aria-hidden="true"></div>

            <PoliticaGestion />
        </main>
    );
}
