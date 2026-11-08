import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, intention, customRequest } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        isAiGenerated: false,
        message: "Using sacred scriptural blessing archive."
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const seekerName = name?.trim() || "प्रिय साधक";

    const prompt = `You are Maryada Purushottama Lord Rama bestowing a personalized, sacred, and deeply uplifting divine blessing upon a seeker named "${seekerName}".
The seeker's life prayer / focus is: "${intention || "धर्म एवं आत्मिक शांति"}".
Additional personal reflection: "${customRequest || "मार्गदर्शन एवं संबल की कामना"}".

LANGUAGE REQUIREMENTS (STRICT):
1. 'sanskritShloka': Must be ONLY in sacred Sanskrit with proper Devanagari script.
2. 'shlokaMeaning': Must be in pure, dignified HINDI (श्लोक का भावार्थ केवल हिंदी में).
3. 'personalizedBlessing': Must be in beautiful, compassionate, noble HINDI speaking directly to "${seekerName}" in the gentle, serene, and majestic voice of Lord Rama (प्रभु श्री राम का व्यक्तिगत आशीर्वचन शुद्ध एवं आत्मीय हिंदी में). Do NOT use English in the blessing.
4. 'virtueToEmbody': Must be in HINDI (धारण करने योग्य सद्गुण).
5. 'sacredAffirmation': Must be in HINDI (दैनिक ध्यान संकल्प सूत्र).

Format as JSON:
{
  "sanskritShloka": "संस्कृत श्लोक (देवनागरी लिपि में)",
  "transliteration": "IAST or readable transliteration",
  "shlokaMeaning": "श्लोक का पावन हिंदी अर्थ एवं भावार्थ",
  "personalizedBlessing": "हे ${seekerName}, तुम्हारे अंतःकरण में सत्य, धैर्य और धर्म का प्रकाश सदैव प्रज्वलित रहे... (3-4 sentences in profound, gentle, benevolent Hindi)",
  "virtueToEmbody": "सद्गुण (जैसे: सत्य एवं धैर्य, अभय, निष्काम सेवा)",
  "sacredAffirmation": "एक पंक्ति का पावन ध्यान संकल्प (हिंदी में)"
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
