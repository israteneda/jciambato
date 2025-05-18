import Image from "next/image";

export default function Miembros() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between mx-20 gap-32">
                <p className="text-lg font-bold uppercase w-1/2 text-justify mb-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur, amet minus
                </p>
                <p className="text-lg w-1/2 text-justify mb-8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nam nisi reiciendis nihil perspiciatis. Quae, tenetur suscipit ad voluptatem voluptatum similique nisi maxime dolorum earum eos ea est neque, obcaecati voluptas voluptates veniam blanditiis minima enim asperiores esse optio. Voluptates?
                </p>
            </div>


            {/* Miembros */}
            <div>
                <div className="flex gap-10 mx-20 my-10">
                    <div className="flex flex-col items-center w-1/4">
                        {/* Contenedor de la imagen con bordes redondeados específicos */}
                        <div className="w-full bg-white rounded-tr-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden">
                            <Image
                                src="/images/miembros/miembro1.png"
                                alt="Miembro 1"
                                width={500}
                                height={500}
                                className="w-full h-[300px] object-cover rounded-tr-lg rounded-bl-lg rounded-br-lg"
                            />
                        </div>

                        {/* Información del miembro */}
                        <div className="w-full p-5">
                            <h3 className="font-bold text-xl">Juan Pérez</h3>
                            <p className="text-lg text-jci-gray">
                                Presidente 2025
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-1/4">
                        <div className="w-full bg-white rounded-tr-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden">
                            <Image
                                src="/miembros/miembro1.png"
                                alt="Miembro 1"
                                width={500}
                                height={500}
                                className="w-full h-[300px] object-cover rounded-tr-lg rounded-bl-lg rounded-br-lg"
                            />
                        </div>

                        {/* Información del miembro */}
                        <div className="w-full p-5">
                            <h3 className="font-bold text-xl">Juan Pérez</h3>
                            <p className="text-lg text-jci-gray">
                                Presidente 2025
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-1/4">
                        {/* Contenedor de la imagen con bordes redondeados específicos */}
                        <div className="w-full bg-white rounded-tr-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden">
                            <Image
                                src="/miembros/miembro1.png"
                                alt="Miembro 1"
                                width={500}
                                height={500}
                                className="w-full h-[300px] object-cover rounded-tr-lg rounded-bl-lg rounded-br-lg"
                            />
                        </div>

                        {/* Información del miembro */}
                        <div className="w-full p-5">
                            <h3 className="font-bold text-xl">Juan Pérez</h3>
                            <p className="text-lg text-jci-gray">
                                Presidente 2025
                            </p>
                        </div>
                    </div>

                  

                    <div className="flex flex-col items-center w-1/4 group">
                        {/* Contenedor con fondo azul y bordes redondeados específicos */}
                        <div className="w-full bg-jci-navy h-full rounded-tr-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between">

                            {/* Contenido principal */}
                            <div className="w-full p-6 flex flex-col h-full">
                                {/* Logo JCI */}
                                <div className="mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Mensaje o dato curioso */}
                                <div className="flex-grow">
                                    <p className="text-base text-white leading-relaxed mb-4">
                                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, nostrum ab? Assumenda vero explicabo tempora."
                                    </p>

                                    {/* Decoración visual */}
                                    <div className="w-12 h-1 bg-white/30 my-4"></div>
                                </div>

                                {/* Información del miembro */}
                                <div className="mt-auto">
                                    <h3 className="font-bold text-xl text-white mb-1">Juan Pérez</h3>
                                    <p className="text-base text-white/70">
                                        Presidente 2025
                                    </p>
                                </div>
                            </div>

                            {/* Decoración en la esquina inferior */}
                            <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex gap-10 mx-20 my-10">
                    <div className="flex flex-col items-center w-1/4">
                        {/* Contenedor de la imagen con bordes redondeados específicos */}
                        <div className="w-full bg-white rounded-tr-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden">
                            <Image
                                src="/miembros/miembro1.png"
                                alt="Miembro 1"
                                width={500}
                                height={500}
                                className="w-full h-[300px] object-cover rounded-tr-lg rounded-bl-lg rounded-br-lg"
                            />
                        </div>

                        {/* Información del miembro */}
                        <div className="w-full p-5">
                            <h3 className="font-bold text-xl">Juan Pérez</h3>
                            <p className="text-lg text-jci-gray">
                                Presidente 2025
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-1/4">
                        <div className="w-full bg-white rounded-tr-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden">
                            <Image
                                src="/miembros/miembro1.png"
                                alt="Miembro 1"
                                width={500}
                                height={500}
                                className="w-full h-[300px] object-cover rounded-tr-lg rounded-bl-lg rounded-br-lg"
                            />
                        </div>

                        {/* Información del miembro */}
                        <div className="w-full p-5">
                            <h3 className="font-bold text-xl">Juan Pérez</h3>
                            <p className="text-lg text-jci-gray">
                                Presidente 2025
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-1/4">
                        {/* Contenedor de la imagen con bordes redondeados específicos */}
                        <div className="w-full bg-white rounded-tr-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden">
                            <Image
                                src="/miembros/miembro1.png"
                                alt="Miembro 1"
                                width={500}
                                height={500}
                                className="w-full h-[300px] object-cover rounded-tr-lg rounded-bl-lg rounded-br-lg"
                            />
                        </div>

                        {/* Información del miembro */}
                        <div className="w-full p-5">
                            <h3 className="font-bold text-xl">Juan Pérez</h3>
                            <p className="text-lg text-jci-gray">
                                Presidente 2025
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-1/4">
                        {/* Contenedor de la imagen con bordes redondeados específicos */}
                        <div className="w-full bg-white rounded-tr-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden">
                            <Image
                                src="/miembros/miembro1.png"
                                alt="Miembro 1"
                                width={500}
                                height={500}
                                className="w-full h-[300px] object-cover rounded-tr-lg rounded-bl-lg rounded-br-lg"
                            />
                        </div>

                        {/* Información del miembro */}
                        <div className="w-full p-5">
                            <h3 className="font-bold text-xl">Juan Pérez</h3>
                            <p className="text-lg text-jci-gray">
                                Presidente 2025
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}