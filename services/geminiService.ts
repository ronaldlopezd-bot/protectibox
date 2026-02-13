
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres el asistente inteligente de Protectibox. 
Protectibox es una plataforma premium que se lanzará en Marzo 2026.
Tiene dos pilares:
1. ProtectiHome: Seguridad familiar digital, control parental, bloqueo de amenazas.
2. AutomatIBox: Automatización de procesos de negocio, inteligencia operativa.

Tu objetivo es responder preguntas de los usuarios sobre cómo Protectibox puede ayudarles, 
manteniendo un tono profesional, tecnológico, seguro y visionario. 
Sé conciso pero persuasivo.
`;

export async function askGemini(prompt: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 250,
      },
    });

    return response.text || "Lo siento, no pude procesar tu solicitud en este momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Estamos experimentando una alta demanda. Por favor, intenta de nuevo en unos momentos.";
  }
}
