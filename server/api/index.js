import OpenAI from "openai";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:5174', 'https://cob-95.vercel.app'], // Client URLs
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
};

app.use(cors(corsOptions)); // Apply CORS globally
app.use(express.json());

// Preflight handling for all routes
app.options('*', cors(corsOptions));

// OpenAI setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

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
        Jacob is interested in many fields, like AI/ML, AR/VR, and has a special interest in space exploration
        Respond only in plain text, with concise responses that will be displayed in a chat window. 
      `,
    };

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [systemPrompt, ...messages],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



