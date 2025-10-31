"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MessageBubble from "./MessageBubble";
import flowData from "../data/chatbotFlow.json";

export default function WhatsAppChat() {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(flowData[0]);
  const [userInput, setUserInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    setMessages([flowData[0]]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOptionClick = (option) => {
    const nextStep = flowData.find((s) => s.id === option.next);
    if (nextStep) {
      setMessages((prev) => [
        ...prev,
        { message: option.label, user: true },
        nextStep,
      ]);
      setCurrentStep(nextStep);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const nextStep = flowData.find((s) => s.id === currentStep.next);
    if (nextStep) {
      setMessages((prev) => [
        ...prev,
        { message: userInput, user: true },
        nextStep,
      ]);
      setUserInput("");
      setCurrentStep(nextStep);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ECE5DD]">
      <div className="w-[360px] h-[640px] bg-[#FFFFFF] shadow-2xl rounded-3xl overflow-hidden flex flex-col relative">
        {/* Header */}
        <div className="bg-[#075E54] text-white py-3 px-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-300 flex items-center justify-center text-black font-bold">
            💈
          </div>
          <div>
            <p className="font-semibold text-sm">Elite Cuts</p>
            <p className="text-xs text-green-200">online</p>
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto px-3 py-2 bg-[url('https://i.imgur.com/EZ5iK6C.png')] bg-cover">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MessageBubble msg={msg} onOptionClick={handleOptionClick} />
            </motion.div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        {currentStep?.input && (
          <form
            onSubmit={handleInputSubmit}
            className="p-2 flex items-center bg-[#F0F0F0]"
          >
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type a message"
              className="flex-1 px-3 py-2 rounded-full text-sm focus:outline-none bg-white border border-gray-300"
            />
            <button
              type="submit"
              className="ml-2 bg-[#25D366] text-white px-4 py-2 rounded-full"
            >
              ➤
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
