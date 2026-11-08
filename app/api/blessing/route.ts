import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, intention, customRequest } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback response handled gracefully
      return NextResponse.json({
        isAiGenerated: false,
        message: "Using sacred scriptural blessing archive."
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `You are providing a sacred, uplifting, and poetic blessing from Maryada Purushottama Lord Rama to a seeker named "${name || "Devotee"}".
The seeker's life focus / prayer is: "${intention || "Inner Peace and Dharma"}".
Additional thought: "${customRequest || "Blessings for guidance and courage"}".

Provide the blessing in the following JSON format:
{
  "sanskritShloka": "A sacred authentic Valmiki Ramayana or Vedic Sanskrit shloka with Devanagari script",
  "transliteration": "IAST or readable English transliteration of the shloka",
  "shlokaMeaning": "Precise English meaning of the Sanskrit shloka",
  "personalizedBlessing": "A deeply compassionate, profound 3-4 sentence message directly addressing ${name || "dear seeker"}, in the calm, noble, and benevolent tone of Lord Rama, blessing them with clarity, righteousness, and courage in their chosen path.",
  "virtueToEmbody": "A specific noble virtue from the Ramayana (e.g., Satya, Dhairya, Nishkama Seva, Abhaya)",
  "sacredAffirmation": "A short, memorable 1-line affirmation for their daily meditation."
}

Return ONLY valid JSON without markdown tags.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text || "";
    try {
      const parsed = JSON.parse(text);
      return NextResponse.json({
        isAiGenerated: true,
        ...parsed
      });
    } catch {
      return NextResponse.json({
        isAiGenerated: false,
        rawText: text
      });
    }
  } catch (error) {
    console.error("Blessing generation error:", error);
    return NextResponse.json({
      isAiGenerated: false,
      error: "Using traditional Vedic blessing."
    });
  }
}
