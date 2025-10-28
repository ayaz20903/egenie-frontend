"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Instagram,
  MessageCircle,
  MessageSquare,
  Music,
  Phone,
} from "lucide-react";
import Image from "next/image";
import multilingual from "../../../public/multilingual.png";

const slides = [
  [
    {
      id: 1,
      Icon: Instagram,
      title: "Instagram",
      desc: "Automate DMs and comment replies — connect faster, stay personal.",
      color: "text-pink-500",
    },
    {
      id: 2,
      Icon: Music,
      title: "TikTok",
      desc: "Turn viral moments into real conversations that build trust.",
      color: "text-black",
    },
    {
      id: 3,
      Icon: MessageCircle,
      title: "WhatsApp",
      desc: "Engage one-on-one and turn every lead into a lasting customer.",
      color: "text-green-500",
    },
  ],
  [
    {
      id: 4,
      Icon: MessageSquare,
      title: "Messenger",
      desc: "Instantly reply to messages so no opportunity slips away.",
      color: "text-blue-500",
    },
    {
      id: 5,
      Icon: Phone,
      title: "SMS",
      desc: "Send follow-ups automatically and stay top of mind — hands-free.",
      color: "text-orange-500",
    },
    {
      id: 6,
      Icon: Mail,
      title: "Email",
      desc: "Drive direct purchases with instant checkout links.",
      color: "text-yellow-600",
    },
  ],
];

export default function AudienceSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="pt-30 pb-20 bg-[#ffffff] ">
      <div className="container mx-auto">
        <div className="animated-gradient-border">
          <div className="AudienceSlider bg-[#161725] animated-gradient-inner w-full flex flex-col items-center justify-center overflow-hidden px-6 py-18 rounded-[50px]">
            <h2 className="text-5xl md:text-7xl w-[70%] font-extrabold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-12 leading-tight">
              Be Present on Every Channel That Matters
            </h2>

            {/* SLIDER */}
            <div className="relative w-full flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="flex flex-col md:flex-row gap-6"
                >
                  {slides[index].map((card) => (
                    <div
                      key={card.id}
                      className="bg-white rounded-md shadow-lg p-6 w-full md:w-80  "
                    >
                      <div className={`mb-3 ${card.color}`}>
                        <card.Icon className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] bg-clip-text text-transparent  font-bold  mb-2 flex items-center gap-2">
                        {card.title}
                      </h3>
                      <p className="bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] bg-clip-text text-transparent  mb-4">
                        {card.desc}
                      </p>
                      {/* <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 border-b border-gray-800 pb-[1px] hover:text-black"
                >
                  Learn more →
                </a> */}
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* NAV BUTTONS */}
            <div className="flex items-center gap-4 mt-12">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full  bg-[#6D28D9] transition cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full  bg-[#6D28D9]  transition cursor-pointer"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
