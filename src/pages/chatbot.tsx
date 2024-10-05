import React, { useState } from "react";
import { FaPaperPlane, FaRobot } from "react-icons/fa";

// ChatBubble Component for user and bot messages
const ChatBubble: React.FC<{ message: string; isUser?: boolean }> = ({
  message,
  isUser = false,
}) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-xs p-3 rounded-lg shadow ${
          isUser ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

// Main ChatScreen Component
const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      message:
        "Hi! I’m Herwaree, your reproductive health assistant. How can I assist you today?",
      isUser: false,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  // Function to simulate dynamic responses for now
  const simulateDynamicResponse = (userMessage: string): string => {
    const randomResponses = [
      "Thanks for reaching out! Let me get back to you.",
      "I'm processing your request, give me a moment.",
      "That's a great question! Here's what I think...",
      "Let me assist you with that.",
      "Let me fetch some information for you.",
    ];

    // Simple dynamic behavior simulation (random response)
    const dynamicResponse =
      randomResponses[Math.floor(Math.random() * randomResponses.length)];

    return `${dynamicResponse} [You asked about: "${userMessage}"]`; // Echo back user question
  };

  // Handle receiving dynamic responses (for now, mock delay)
  const receiveMessage = (userMessage: string) => {
    const botResponse = simulateDynamicResponse(userMessage);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: botResponse, isUser: false },
      ]);
    }, 1000);
  };

  // Handle sending a message
  const handleSend = () => {
    if (newMessage.trim()) {
      const userMessage = newMessage;

      // Add the user's message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: userMessage, isUser: true },
      ]);

      // Clear the input
      setNewMessage("");

      // Simulate a chatbot response based on the user's message
      receiveMessage(userMessage);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-purple-600 text-white p-4 flex items-center">
        <FaRobot className="text-2xl mr-2" />
        <h1 className="text-lg font-semibold">Chat with Herwaree</h1>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} message={msg.message} isUser={msg.isUser} />
        ))}
      </div>

      {/* Input box */}
      <div className="p-4 bg-gray-100 flex items-center">
        <input
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none"
          type="text"
          placeholder="Type your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-purple-500 text-white p-2 rounded-full flex items-center justify-center"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
