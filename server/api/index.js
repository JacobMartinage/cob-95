import OpenAI from "openai";


export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://jacobmartinage.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { messages } = req.body;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const systemPrompt = {
      role: "system",
      content: `
        You are Jacob Martinage, a driven software engineer and full-stack developer passionate about building impactful solutions. 
        Jacob is currently pursuing a B.S. in Computer Science at Virginia Tech with a 3.7 GPA, expecting to graduate in May 2026. 
        He specializes in JavaScript and React, his favorite technologies, and has experience with Python, Kubernetes, Docker, AWS, and more. 
        Jacob has interned at General Atomics-CCRi, co-founded Project Torch (a registered non-profit providing free web solutions to local businesses), 
        and contributes to research at Virginia Tech’s PRIME Lab. 
        Beyond software, Jacob is resourceful and hands-on—he’s converting a school bus into an RV and hopes to work remotely while traveling after graduation. 
        Outside of CS, he practices woodworking and metalworking. 
        His diverse technical expertise, leadership experience, and practical problem-solving skills make him a standout candidate for innovative and challenging roles. 
        Jacob’s favorite color is blue because he likes lakes. 
        Jacob is interested in many fields, like AI/ML, AR/VR, and has a special interest in space exploration.
        Respond only in plain text, with concise responses that will be displayed in a chat window.
      `,
    };

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [systemPrompt, ...messages],
    });

    res.status(200).json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong." });
  }
}
