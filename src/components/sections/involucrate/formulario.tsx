"use client";

import { useState } from "react";
import BackgroundText from "@/components/commons/TextoFondo";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Switch } from "@heroui/switch";

export default function Formulario() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [promoAccepted, setPromoAccepted] = useState(false);

    // Validación simple de email
    const isEmailValid = email.length === 0 || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isButtonDisabled =
        !name ||
        !email ||
        !isEmailValid ||
        !phone ||
        !message ||
        !termsAccepted ||
        !promoAccepted;

    return (
        <section className="relative z-[1] overflow-hidden">

            <div className="mt-16">
                <BackgroundText
                    textoPrimario="Hablemos"
                    textoSecundario=""
                    numberLeft={0.15}
                    numberRight={0.1}
                    numberLeftMobile={0.05}
                    numberRightMobile={0.03}
                />
            </div>


            <div className="mt-[240px]">
                <div className="bg-gray-200">
                    <div className="pb-[200px]">
                        <div className="relative z-[1] bg-transparent max-w-6xl mx-auto">
                            <div className="flex flex-wrap">

                                <div className="flex-1 pr-16 box-border min-w-[calc(50%-100px)]">
                                    <div className="pt-[120px]">
                                        <div>
                                            <div className="text-[13px] leading-[1.85] not-italic uppercase text-[#989898] font-bold tracking-normal">
                                                Estamos aquí para ayudarte
                                            </div>

                                            <div className="mt-6">
                                                <div className="text-[48px] font-bold not-italic text-left leading-[1.17] tracking-normal text-black max-w-[370px]">
                                                    Te esperamos con los brazos abiertos
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <div className="text-[18px] font-normal not-italic leading-[32px] tracking-normal text-[#323232] text-left max-w-[370px]">
                                                    Si deseas contactarnos, por favor completa el formulario o envíanos un correo a {" "}
                                                    <a
                                                        href="mailto:info@jciecuador.com"
                                                        className="text-jci-aqua underline"
                                                    >
                                                        info@jciambato.com
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 min-w-[calc(50%+100px)]">
                                    {/* Formulario */}
                                    <div className="w-full h-full box-border px-8 md:px-24 py-16 md:py-20 bg-white -translate-y-24">
                                        <div className="text-sm font-bold text-jci-aqua uppercase tracking-wider mb-8">
                                            Envíanos un mensaje
                                        </div>
                                        <form className="space-y-6">
                                            <Input
                                                label="Tu Nombre *"
                                                variant="underlined"
                                                placeholder="Escribe tu nombre"
                                                value={name}
                                                onValueChange={setName}
                                                classNames={{ label: "text-sm font-semibold text-gray-500" }}
                                            />
                                            <Input
                                                label="Tu Email *"
                                                variant="underlined"
                                                type="email"
                                                placeholder="Escribe tu email"
                                                value={email}
                                                onValueChange={setEmail}
                                                isInvalid={!isEmailValid}
                                                errorMessage="Por favor, introduce un email válido."
                                                classNames={{ label: "text-sm font-semibold text-gray-500" }}
                                            />
                                            <Input
                                                label="Teléfono *"
                                                variant="underlined"
                                                type="tel"
                                                placeholder="Escribe tu número de teléfono"
                                                value={phone}
                                                onValueChange={setPhone}
                                                classNames={{ label: "text-sm font-semibold text-gray-500" }}
                                            />
                                            <Input
                                                label="Mensaje *"
                                                variant="underlined"
                                                placeholder="¿Cómo podemos ayudarte?"
                                                value={message}
                                                onValueChange={setMessage}
                                                classNames={{ label: "text-sm font-semibold text-gray-500" }}
                                            />

                                            <div className="pt-6 space-y-5">
                                                <div className="flex items-start">
                                                    <Switch
                                                        id="terms"
                                                        aria-label="Aceptar términos y condiciones"
                                                        isSelected={termsAccepted}
                                                        onValueChange={setTermsAccepted}
                                                    />
                                                    <label htmlFor="terms" className="ml-3 text-xs text-gray-600">
                                                        He leído y acepto los <a href="#" className="underline font-semibold">términos y condiciones</a> de la política de privacidad de JCI Ambato.
                                                    </label>
                                                </div>
                                                <div className="flex items-start">
                                                    <Switch
                                                        id="promo"
                                                        aria-label="Aceptar mensajes promocionales"
                                                        isSelected={promoAccepted}
                                                        onValueChange={setPromoAccepted}
                                                    />
                                                    <label htmlFor="promo" className="ml-3 text-xs text-gray-600">
                                                        Acepto el procesamiento de mis datos para recibir mensajes promocionales y propuestas comerciales de JCI Ambato.
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="pt-6">
                                                <Button
                                                    type="submit"
                                                    disabled={isButtonDisabled}
                                                    className="bg-jci-aqua text-white font-semibold rounded-md transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    Postula ahora
                                                </Button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}