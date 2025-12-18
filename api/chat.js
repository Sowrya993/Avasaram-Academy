import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client with server-side environment variable
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Course and curriculum data for context
const COURSE_CONTEXT = `
=== ABOUT AVASARAM ACADEMY ===
- Name: Avasaram Academy
- Tagline: "Empowering the next generation of engineers with hands-on, career-focused tech education"
- Location: India
- Phone: +91 8688545761
- Email: avasaramacademy@gmail.com

=== WHY CHOOSE AVASARAM ACADEMY ===
1. Job-Oriented: Master Python, DSA & AI designed specifically for career growth and industry demands.
2. Expert-Led: Learn from industry pros who have cracked top tech interviews at leading companies.
3. Affordable: Budget-friendly pricing without compromising on quality.
4. Live & Interactive: Real-time doubt solving, group discussions, mock tests & comprehensive study material.

=== CAREER SUPPORT SERVICE ===
- Price: ₹399 (60% OFF from ₹999) - One-time payment
- Duration: 45 Minutes of Expert Guidance
- Format: 1-on-1 Personalized Session
- Includes: Custom Career Roadmap PDF, Curated Learning Resources, 7-Day Follow-up Support

=== COURSES OFFERED ===
1. Python Foundation - Beginner Level, 4 Weeks
2. Data Science Mastery - Intermediate Level, 8 Weeks
3. Machine Learning - Intermediate Level, 6 Weeks
4. Deep Learning & Neural Networks - Advanced Level, 8 Weeks
5. Computer Vision - Advanced Level, 6 Weeks
6. NLP & Generative AI - Advanced Level, 8 Weeks
`;

const SYSTEM_PROMPT = `You are the 'Avasaram Academy' AI Mentor named "Avasaram".
You are a sophisticated, patient, and highly knowledgeable technical instructor specializing in Python, Data Science, and AI.

STRICT CONTENT POLICY:
YOU MUST ONLY RESPOND TO QUESTIONS RELATED TO:
- Python programming, Data Science, Machine Learning, Deep Learning, AI, NLP, Computer Vision
- Avasaram Academy courses, curriculum, syllabus, modules, projects, pricing, duration
- Programming concepts, coding help, code review, debugging
- Career guidance related to tech/IT field

YOU MUST IMMEDIATELY REFUSE:
- Any sexual, adult, violent, or inappropriate content
- Politics, religion, or controversial topics
- Personal relationship, medical, legal, or financial advice
- Any topic not related to programming, technology, or Avasaram Academy

When asked unrelated questions, respond: "I'm here to help you with Python, Data Science, Machine Learning, and AI-related queries only. Please ask questions related to our courses or programming topics."

ACADEMY INFORMATION:
${COURSE_CONTEXT}

RESPONSE GUIDELINES:
- Be CONCISE and STRAIGHTFORWARD
- Use clear Markdown formatting
- Use code blocks for code examples
- When asked about contact: Phone +91 8688545761, Email avasaramacademy@gmail.com`;

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY is not set');
      return res.status(500).json({ error: 'API key not configured' });
    }

    const chat = ai.chats.create({
      model: 'gemini-2.0-flash',
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
      history: history || [],
    });

    const result = await chat.sendMessage({ message });
    const responseText = result.text || "I couldn't generate a response. Could you rephrase that?";

    return res.status(200).json({ response: responseText });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({
      error: 'Failed to get response from AI',
      details: error.message
    });
  }
}
