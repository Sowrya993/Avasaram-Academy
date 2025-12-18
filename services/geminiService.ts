
/**
 * Chat with the AI Tutor via serverless API.
 * The API handles Gemini calls server-side to avoid CORS issues.
 */
export const chatWithTutor = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, history }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API Error:', errorData);
      throw new Error(errorData.error || 'Failed to get response');
    }

    const data = await response.json();
    return data.response || "I couldn't generate a response. Could you rephrase that?";
  } catch (error) {
    console.error("Chat Error:", error);
    throw error;
  }
};

