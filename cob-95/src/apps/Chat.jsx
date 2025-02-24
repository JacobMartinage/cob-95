import React, { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { username: "JacobBot", text: "Hi there! I'm JacobBot. Ask me anything about Jacob Martinage!" },
  ]);
  const [inputValue, setInputValue] = useState("");

  async function handleUserMessage(userText) {
    if (!userText.trim()) return;

    console.log("✅ User submitted:", userText);

    const userMessage = { username: "You", text: userText };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue("");

    try {
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((msg) => ({
            role: msg.username === "You" ? "user" : "assistant",
            content: msg.text,
          })),
        }),
      });

      const data = await res.json();
      const botReply = data.reply || "Sorry, I didn't get a response.";
      setMessages((prev) => [...prev, { username: "JacobBot", text: botReply }]);
    } catch (err) {
      console.error("🚨 Error:", err);
      setMessages((prev) => [...prev, { username: "JacobBot", text: "Oops! Something went wrong." }]);
    }
  }

  function handleQuickReply(text) {
    handleUserMessage(text);
  }

  function handleSendMessage() {
    if (inputValue.trim()) handleUserMessage(inputValue.trim());
  }

  return (
    <>
      <div className="chat-win95-body">
        {messages.map((msg, i) => (
          <div key={i}>
            <span className="chat-win95-user">&lt;{msg.username}&gt;</span>{" "}
            <span>{msg.text}</span>
          </div>
        ))}
      </div>

      <div className="chat-win95-footer">
        <button onClick={() => handleQuickReply("Who are you?")}>Who are you?</button>
        <button onClick={() => handleQuickReply("What do you want to do for work?")}>What do you want to do for work?</button>
        <button onClick={() => handleQuickReply("What do you like to code in?")}>What do you like to code in?</button>
      </div>

      <div className="chat-win95-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}  // Prevent drag interference
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </>
  );
}
