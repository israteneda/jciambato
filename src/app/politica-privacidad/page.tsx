import { Bienvenida, PoliticaPrivacidad } from "@/components/sections/politica-privacidad";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Política de Privacidad",
    description: "Política de Privacidad",
};


export default function PoliticaPrivacidadPage() {
    return (
        <main>
            <Bienvenida />
            <div className="h-[640px]" aria-hidden="true"></div>

            <PoliticaPrivacidad />
        </main>
    );
}
