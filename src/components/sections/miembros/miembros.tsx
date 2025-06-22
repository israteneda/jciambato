import Image from "next/image";

const miembrosData = [
    {
        nombre: "Israel Teneda",
        cargo: "Pasado Presidente",
        imagen: "/images/miembros/miembro1.png",
    },
    {
        nombre: "Gabriela González",
        cargo: "Presidente Local",
        imagen: "/images/miembros/miembro1.png",
    },
    {
        nombre: "Mauricio",
        cargo: "Director del Senado",
        imagen: "/images/miembros/miembro1.png",
    },
    {
        nombre: "Romina Benítez",
        cargo: "Secretaria Local",
        imagen: "/images/miembros/miembro1.png",
    },
    {
        nombre: "Emilia Santamaría",
        cargo: "Vicepresidenta Ejecutiva",
        imagen: "/images/miembros/miembro1.png",
    },
    {
        nombre: "Gabriela González",
        cargo: "Tesorero Local",
        imagen: "/images/miembros/miembro1.png",
    },
    {
        nombre: "Miembro Ejemplo 1",
        cargo: "Vocal",
        imagen: null,
    },
    {
        nombre: "Miembro Ejemplo 2",
        cargo: "Vocal",
        imagen: null,
    },
    {
        nombre: "Miembro Ejemplo 3",
        cargo: "Vocal",
        imagen: null,
    },
];


export default function Miembros() {
    return (
        <div className="relative py-16 z-10">
            <div className="max-w-6xl mx-8 lg:mx-auto">
                {/* Header */}
                <div className="text-start mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Junta Directiva
                    </h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-3xl">
                        Conforma miembros que se encargan de la gestión de la Cámara Junior Internacional del Ecuador - Capítulo Ambato.
                    </p>
                </div>

                {/* Miembros Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {miembrosData.map((miembro, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center text-center group ${
                                // Apply margin-top to the side elements in each row on large screens
                                index % 3 !== 1 ? "lg:mt-12" : ""
                                }`}
                        >
                            <div className="w-full bg-gray-300 overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                                {miembro.imagen ? (
                                    <Image
                                        src={miembro.imagen}
                                        alt={`Foto de ${miembro.nombre}`}
                                        width={400}
                                        height={400}
                                        className="w-full h-auto md:h-96 object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-auto md:h-96 bg-gray-400 flex items-center justify-center">
                                        <span className="text-white h-full text-lg">Próximamente</span>
                                    </div>
                                )}
                            </div>

                            <div className="w-full py-5 text-start">
                                <h3 className="font-bold text-xl text-jci-black">{miembro.nombre}</h3>
                                <p className="text-md text-jci-gray">
                                    {miembro.cargo}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}