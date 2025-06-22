import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const miembrosData = [
    {
        nombre: "Scott Belsky",
        cargo: "Board Member",
        imagen: "/images/miembros/miembro1.png",
        social: { twitter: "#", linkedin: "#" },
    },
    {
        nombre: "Shona Brown",
        cargo: "Chair of the Board",
        imagen: "/images/miembros/miembro1.png",
        social: { twitter: "#", linkedin: "#" },
    },
    {
        nombre: "Mike Cannon-Brookes",
        cargo: "Board Member",
        imagen: "/images/miembros/miembro1.png",
        social: { twitter: "#", linkedin: "#" },
    },
    {
        nombre: "Scott Farquhar",
        cargo: "Board Member",
        imagen: "/images/miembros/miembro1.png",
        social: { twitter: "#", linkedin: "#" },
    },
    {
        nombre: "Heather M. Fernandez",
        cargo: "Board Member",
        imagen: "/images/miembros/miembro1.png",
        social: { twitter: "#", linkedin: "#" },
    },
    {
        nombre: "Sasan Goodarzi",
        cargo: "Board Member",
        imagen: "/images/miembros/miembro1.png",
        social: { twitter: "#", linkedin: "#" },
    },
    {
        nombre: "Karen Dykstra",
        cargo: "Board Member",
        imagen: "/images/miembros/miembro1.png",
        social: { twitter: "#", linkedin: "#" },
    },
    {
        nombre: "Christian Smith",
        cargo: "Board Member",
        imagen: "/images/miembros/miembro1.png",
        social: { twitter: "#", linkedin: "#" },
    },
    {
        nombre: "Steve Sordello",
        cargo: "Board Member",
        imagen: "/images/miembros/miembro1.png",
        social: { twitter: "#", linkedin: "#" },
    },
    {
        nombre: "Rich Wong",
        cargo: "Board Member",
        imagen: "/images/miembros/miembro1.png",
        social: { twitter: "#", linkedin: "#" },
    },
];

export default function MiembrosGenerales() {
    return (
        <div className="py-16 z-10">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-start mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Senadores
                    </h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-3xl">
                        Senaduría es el órgano legislativo de la Cámara Junior Internacional del Ecuador - Capítulo Ambato.
                    </p>
                </div>

                {/* Miembros Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12">
                    {miembrosData.map((miembro, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-32 h-32 mb-4">
                                <Image
                                    src={miembro.imagen}
                                    alt={`Foto de ${miembro.nombre}`}
                                    width={128}
                                    height={128}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="font-bold text-lg text-gray-800">{miembro.nombre}</h3>
                            <p className="text-sm text-gray-500 mb-3">{miembro.cargo}</p>
                            <div className="flex items-center space-x-4">
                                <a href={miembro.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <FaInstagram />
                                </a>
                                <a href={miembro.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 