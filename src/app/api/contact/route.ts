import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

let resend: Resend | null = null;

function getResend(): Resend {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, termsAccepted, promoAccepted } = body;

    // Validar que todos los campos requeridos estén presentes
    if (!name || !email || !phone || !message || !termsAccepted || !promoAccepted) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos y los términos deben ser aceptados" },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "El formato del email no es válido" }, { status: 400 });
    }

    // Enviar email de notificación a JCI Ambato
    await getResend().emails.send({
      from: "tecnologia@jciambato.org",
      to: "ambato@jciecuador.com",
      subject: "Nuevo mensaje de contacto - JCI Ambato",
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
                        Nuevo mensaje de contacto
                    </h2>
                    
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #34495e; margin-top: 0;">Información del contacto:</h3>
                        <p><strong>Nombre:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Teléfono:</strong> ${phone}</p>
                    </div>
                    
                    <div style="background-color: #fff; padding: 20px; border-left: 4px solid #3498db; margin: 20px 0;">
                        <h3 style="color: #34495e; margin-top: 0;">Mensaje:</h3>
                        <p style="line-height: 1.6;">${message}</p>
                    </div>
                    
                    <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <h4 style="color: #27ae60; margin-top: 0;">Términos y condiciones:</h4>
                        <p>✅ Términos y condiciones aceptados</p>
                        <p>✅ Acepta mensajes promocionales</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #7f8c8d; font-size: 12px;">
                        <p>Este mensaje fue enviado desde el formulario de contacto de JCI Ambato</p>
                        <p>Fecha: ${new Date().toLocaleString("es-ES")}</p>
                    </div>
                </div>
            `,
    });

    // Enviar email de confirmación al usuario
    await getResend().emails.send({
      from: "tecnologia@jciambato.org",
      to: email,
      subject: "Gracias por contactarnos - JCI Ambato",
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
                        ¡Gracias por contactarnos!
                    </h2>
                    
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p>Hola <strong>${name}</strong>,</p>
                        <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
                    </div>
                    
                    <div style="background-color: #fff; padding: 20px; border-left: 4px solid #3498db; margin: 20px 0;">
                        <h3 style="color: #34495e; margin-top: 0;">Resumen de tu mensaje:</h3>
                        <p><strong>Nombre:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Teléfono:</strong> ${phone}</p>
                        <p><strong>Mensaje:</strong> ${message}</p>
                    </div>
                    
                    <div style="background-color: #e8f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #2980b9; margin-top: 0;">¿Qué sigue?</h3>
                        <p>Nuestro equipo revisará tu mensaje y te contactará pronto. Mientras tanto, puedes:</p>
                        <ul>
                            <li>Visitar nuestro sitio web: <a href="https://jciambato.org" style="color: #3498db;">jciambato.org</a></li>
                            <li>Seguirnos en redes sociales</li>
                            <li>Conocer más sobre nuestros proyectos</li>
                        </ul>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #7f8c8d; font-size: 12px;">
                        <p>Este es un mensaje automático. No responder a este correo.</p>
                        <p>JCI Ambato - Liderando el cambio</p>
                    </div>
                </div>
            `,
    });

    return NextResponse.json({ message: "Mensaje enviado exitosamente" }, { status: 200 });
  } catch (error) {
    console.error("Error al procesar el formulario:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
