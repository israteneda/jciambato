import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

let openai: OpenAI | null = null;

function getOpenAI(): OpenAI {
  if (!openai) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openai;
}

// Contexto sobre JCI Ambato
const JCI_AMBATO_CONTEXT = `
JCI Ambato es una organización sin fines de lucro de jóvenes líderes en Ambato, Ecuador, fundada en 1973.

MISIÓN Y PROPÓSITO:
- Empoderar a jóvenes líderes para generar impacto positivo en la comunidad
- Formar líderes integrales comprometidos con el desarrollo social
- Lema: "Servir a la humanidad es la mejor obra de una vida"

VALORES FUNDAMENTALES:
1. Fe en Dios
2. Hermandad Humana
3. Justicia Económica
4. Gobierno de Leyes
5. Valor de la Personalidad Humana
6. Servicio a la Humanidad

ÁREAS DE OPORTUNIDAD:
1. Negocios y Emprendimiento - Fomentamos el emprendimiento, transformando ideas en negocios con mentoría, herramientas y redes estratégicas.
2. Cooperación Internacional - Conectamos líderes a través de academias, hermanamientos y eventos globales para un impacto mundial.
3. Desarrollo Individual - Forjamos líderes con oratoria, inteligencia emocional y liderazgo ético para un impacto transformador.
4. Impacto en la Comunidad - Transformamos comunidades con proyectos sociales que mejoran vidas y generan cambios sostenibles.

PROYECTOS DESTACADOS:
- Conquistando Audiencias: Programa de oratoria y debate
- Líder a Líder: Programa de capacitación para líderes
- Feria del Libro: Iniciativa comunitaria
- Podcast "A los Tiempos Pan de Pinllo": Podcast sobre líderes ambateños
- Dale Otro Chance: Competencia de emprendimiento
- Academia de Liderazgo Global: Intercambio internacional

HISTORIA DESTACADA:
- 1973: Fundación de JCI Ambato
- 2024: Alex Barreno obtiene el título de Campeón Mundial de Debate
- 2025: María Augusta Gordillo asume la presidencia nacional de JCI Ecuador
- +50 años de liderazgo en Ambato
- +200 proyectos ejecutados
- +30 miembros activos

CONTACTO:
- Email: ambato@jciecuador.com
- Sitio web: jciambato.org
- Ubicación: Ambato, Ecuador

CÓMO INVOLUCRARSE:
- Participar en proyectos comunitarios
- Unirse como miembro activo
- Asistir a eventos y capacitaciones
- Contribuir a través de voluntariado
`;

// Función para detectar si el mensaje es sobre lanzar la página web
function detectLaunchAction(message: string): boolean {
  const launchKeywords = [
    "lanzar",
    "lanzamiento",
    "lanza",
    "página web",
    "sitio web",
    "web",
    "website",
    "inaugurar",
    "inauguración",
    "estrenar",
    "presentar",
    "presentación",
    "activar",
    "abrir",
    "iniciar",
  ];

  const webKeywords = ["página", "sitio", "web", "website", "portal", "plataforma"];

  const messageLower = message.toLowerCase();

  // Verificar si contiene palabras de lanzamiento
  const hasLaunchKeyword = launchKeywords.some((keyword) => messageLower.includes(keyword));

  // Verificar si contiene palabras relacionadas con web
  const hasWebKeyword = webKeywords.some((keyword) => messageLower.includes(keyword));

  // Si contiene ambos tipos de palabras o específicamente "lanzar" con contexto web
  return (
    (hasLaunchKeyword && hasWebKeyword) ||
    messageLower.includes("lanzar página") ||
    messageLower.includes("lanzar sitio") ||
    messageLower.includes("lanzar web") ||
    messageLower.includes("lanzamiento web") ||
    messageLower.includes("lanzamiento página")
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, conversationHistory = [] } = body;

    if (!message) {
      return NextResponse.json({ error: "El mensaje es requerido" }, { status: 400 });
    }

    // Detectar si es una acción de lanzamiento
    if (detectLaunchAction(message)) {
      return NextResponse.json(
        {
          response:
            "🚀 ¡Perfecto! Vamos a lanzar la página web de JCI Ambato. ¡Prepárate para una experiencia increíble!",
          action: "launch_website",
        },
        { status: 200 }
      );
    }

    // Construir el historial de conversación
    const messages = [
      {
        role: "system",
        content: `Eres un asistente de JCI Ambato llamado Junior Bot. Tu función es ayudar a los usuarios con información sobre JCI Ambato, una organización de jóvenes líderes en Ecuador.

${JCI_AMBATO_CONTEXT}

INSTRUCCIONES:
- Responde SOLO preguntas relacionadas con JCI Ambato
- Usa un tono amigable y profesional
- Sé específico y útil con la información
- Si no sabes algo específico, sugiere contactar directamente a JCI Ambato
- Invita a las personas a involucrarse en la organización
- Mantén las respuestas concisas pero informativas
- Si te preguntan sobre temas no relacionados con JCI Ambato, educadamente redirige la conversación
- Usa emojis ocasionalmente para hacer las conversaciones más amigables

Ejemplo de respuesta: "¡Hola! 👋 Soy Junior Bot de JCI Ambato. Te puedo ayudar con información sobre nuestros proyectos, áreas de oportunidad, historia y cómo puedes involucrarte en nuestra organización. ¿En qué te puedo ayudar?"`,
      },
      ...conversationHistory,
      {
        role: "user",
        content: message,
      },
    ];

    const completion = await getOpenAI().chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
      max_tokens: 800,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content;

    if (!response) {
      return NextResponse.json({ error: "No se pudo generar una respuesta" }, { status: 500 });
    }

    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.error("Error en el chatbot:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
