"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NailArtChat() {
  const messages = [
    {
      side: "right",
      text: "Hey there! 👋 I came across your page on Instagram — your haircuts look *amazing!* ✨",
    },
    {
      side: "left",
      text: "Aww, thank you! 🥰 That means a lot. Are you looking to book a haircut or something else today?",
    },
    {
      side: "right",
      text: "Yes, I’d love a haircut — maybe with some light styling too?",
    },
    {
      side: "left",
      text: "Perfect choice 💇‍♀️ We’ve got some slots open tomorrow. Would you prefer morning or afternoon?",
    },
    {
      side: "right",
      text: "Afternoon would be ideal — do you have something around 2 PM?",
    },
    {
      side: "left",
      text: "Lucky you! 🎉 I have <span class='font-semibold text-pink-600'>2:00 PM</span> and <span class='font-semibold text-pink-600'>2:30 PM</span> available. Which one shall I lock in?",
    },
    {
      side: "right",
      text: "Let’s do 2:00 PM please!",
    },
    {
      side: "left",
      text: `
        ✅ All set! You’re booked for <span class='font-semibold text-pink-600'>tomorrow at 2:00 PM</span> for haircut & styling 💇‍♀️  
        <div class='mt-3 p-3 bg-green-50 rounded-lg border border-green-200 animate-pulse'>
          <div class='text-green-800 font-semibold text-xs flex items-center gap-2'>
            <span class='w-2 h-2 bg-green-500 rounded-full animate-bounce'></span> Appointment Confirmed!
          </div>
        </div>
        <p class='text-gray-700 text-xs mt-2'>Total: <span class='font-semibold text-pink-600'>₹800</span> (includes wash + blow dry)</p>
      `,
    },
    {
      side: "right",
      text: "That’s awesome! Can I also book a facial for next week?",
    },
    {
      side: "left",
      text: "Absolutely! 🌸 We have openings next Tuesday and Wednesday. What day suits you better?",
    },
    {
      side: "right",
      text: "Let’s go with Tuesday!",
    },
    {
      side: "left",
      text: "Got it 💕 I have <span class='font-semibold text-pink-600'>11 AM</span>, <span class='font-semibold text-pink-600'>1 PM</span>, or <span class='font-semibold text-pink-600'>3 PM</span>. Which works best?",
    },
    {
      side: "right",
      text: "1 PM sounds perfect 😍",
    },
    {
      side: "left",
      text: `
        ✅ Facial booked for <span class='font-semibold text-pink-600'>Tuesday at 1 PM</span> ✨  
        <div class='mt-3 p-3 bg-green-50 rounded-lg border border-green-200 animate-pulse'>
          <div class='text-green-800 font-semibold text-xs flex items-center gap-2'>
            <span class='w-2 h-2 bg-green-500 rounded-full animate-bounce'></span> Booking Confirmed!
          </div>
        </div>
        <p class='text-gray-700 text-xs mt-2'>Total: <span class='font-semibold text-pink-600'>₹1,200</span> (includes deep cleanse + glow mask)</p>
      `,
    },
    {
      side: "right",
      text: "Yay! Thank you so much 🥰 Will I get reminders too?",
    },
    {
      side: "left",
      text: "Of course! 💌 You’ll get an SMS reminder 24 hours before and another one 2 hours before each appointment.",
    },
    {
      side: "right",
      text: "Perfect! You’re literally the best assistant ever 😄",
    },
    {
      side: "left",
      text: "Haha, thank you! 😄 I’ll see you tomorrow at 2 PM for your haircut — can’t wait to make you look fabulous! 💇‍♀️✨",
    },
  ];

  const [visibleMessages, setVisibleMessages] = useState<typeof messages>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isClient, setIsClient] = useState(false); // 🔥 Fix for hydration mismatch
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ensure animations start only on client
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let index = 0;
    let typingTimer: NodeJS.Timeout;
    let messageTimer: NodeJS.Timeout;

    const showNextMessage = () => {
      if (index < messages.length) {
        setIsTyping(true);

        typingTimer = setTimeout(() => {
          setVisibleMessages((prev) => [...prev, messages[index]]);
          setIsTyping(false);
          index++;
          messageTimer = setTimeout(showNextMessage, 1600);
        }, 1000);
      } else {
        // restart chat AFTER full cleanup and re-render
        messageTimer = setTimeout(() => {
          setVisibleMessages([]);
          // small delay before restarting ensures hydration consistency
          setTimeout(() => {
            index = 0;
            showNextMessage();
          }, 300);
        }, 4000);
      }
    };

    showNextMessage();

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(messageTimer);
    };
  }, [isClient]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  // Prevent hydration mismatch by not rendering dynamic UI until client mount
  if (!isClient) {
    return (
      <div className="flex justify-center items-center h-[340px] text-gray-400">
        Loading chat...
      </div>
    );
  }

  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 gap-10 bg-gradient-to-r from-pink-50 to-rose-100">
      {/* LEFT SIDE */}
      <div className="max-w-md space-y-5">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          Automate bookings on Instagram — no extra staff.
        </h2>
        <p className="text-gray-600 text-lg">
          Smart assistant that answers queries, shows live slots, and confirms
          appointments in seconds. Your 24/7 AI receptionist.
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-transform hover:scale-105">
          Try the Demo
        </button>
      </div>

      {/* RIGHT SIDE (CHAT) */}
      <div className="bg-white shadow-xl rounded-2xl p-4 w-full max-w-sm border border-pink-100">
        <div
          ref={chatRef}
          className="h-[340px] overflow-y-auto space-y-4 px-2 py-3 scroll-smooth"
        >
          <AnimatePresence>
            {visibleMessages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`flex ${
                  msg.side === "right" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl text-sm shadow-md transition-transform ${
                    msg.side === "right"
                      ? "bg-pink-600 text-white rounded-br-md"
                      : "bg-pink-50 text-gray-800 rounded-bl-md"
                  }`}
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                />
              </motion.div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <motion.div
                key="typing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`flex ${
                  messages[visibleMessages.length]?.side === "right"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl shadow-md flex items-center space-x-1 ${
                    messages[visibleMessages.length]?.side === "right"
                      ? "bg-pink-600 text-white rounded-br-md"
                      : "bg-pink-50 text-gray-700 rounded-bl-md"
                  }`}
                >
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
