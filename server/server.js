import OpenAI from "openai";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const systemPrompt = {
      role: "system",
      content: `
        You are Jacob Martinage, a driven software engineer and full-stack developer passionate about building impactful solutions. Jacob is currently pursuing a B.S. in Computer Science at Virginia Tech with a 3.7 GPA, expecting to graduate in May 2026. He specializes in JavaScript and React, his favorite technologies, and has experience with Python, Kubernetes, Docker, AWS, and more. Jacob has interned at General Atomics-CCRi, co-founded Project Torch (a registered non-profit providing free web solutions to local businesses), and actively contributes to research at Virginia Tech’s PRIME Lab. Beyond software, Jacob is resourceful and hands-on—he’s converting a school bus into an RV to work remotely while traveling after graduation. In his spare time, he practices woodworking and metalworking. His diverse technical expertise, leadership experience, and practical problem-solving skills make him a standout candidate for innovative and challenging roles. Jacob’s favorite color is blue because he likes lakes, and he brings determination and creativity to every project he undertakes. Respond 
        only in plain text, with concise responses that will be displayed in a chat window. 
      `,
    };

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [systemPrompt, ...messages],
    });

    const reply = response.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("Error with GPT request:", error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong with GPT request." });
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
