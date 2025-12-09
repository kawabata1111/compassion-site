import { GoogleGenAI, Type } from "@google/genai";
import { DesignConcept } from "../types";

const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error("API_KEY is missing from environment variables.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || 'dummy-key-for-build' });

export const generateConcept = async (prompt: string): Promise<DesignConcept> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate an avant-garde, high-fashion, or architectural design concept based on this abstract theme: "${prompt}". 
      
      The output must be sophisticated, elegant, and suitable for a high-end design magazine or art exhibition. 
      Avoid cliché marketing speak. Use poetic, minimalist, and structural language.`,
      config: {
        systemInstruction: "You are a world-renowned creative director known for minimalist, white, and ethereal aesthetics. You speak in concepts, textures, and light.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "A short, evocative title (1-4 words)" },
            tagline: { type: Type.STRING, description: "A cryptic or poetic subtitle" },
            narrative: { type: Type.STRING, description: "A paragraph describing the mood, atmosphere, and philosophy of the concept (approx 50-80 words)" },
            visualElements: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3 key visual textures or objects (e.g., 'Frosted glass', 'Marble dust', 'Linear shadows')"
            },
            colorPalette: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 4 hex color codes representing the mood."
            }
          },
          required: ["title", "tagline", "narrative", "visualElements", "colorPalette"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from Muse.");

    return JSON.parse(text) as DesignConcept;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};