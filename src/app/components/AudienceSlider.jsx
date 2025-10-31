"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Instagram,
  MessageCircle,
  MessageSquare,
  Music,
  Phone,
} from "lucide-react";

const cards = [
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
];

export default function AudienceSlider() {
  return (
    <section className="pt-20 lg:pt-30 pb-20 bg-[#ffffff]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="animated-gradient-border"
        >
          <div className="AudienceSlider bg-[#161725] animated-gradient-inner w-full flex flex-col items-center justify-center overflow-hidden px-6 py-12 lg:py-18 rounded-[50px]">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-7xl w-[70%] font-extrabold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-12 leading-tight"
            >
              Be Present on Every Channel That Matters
            </motion.h2>

            {/* All Cards in Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
              {cards.map((card, i) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2 + i * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-md shadow-lg p-6 w-full"
                >
                  <div className={`mb-3 ${card.color}`}>
                    <card.Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] bg-clip-text text-transparent font-bold mb-2 flex items-center gap-2">
                    {card.title}
                  </h3>
                  <p className="bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] bg-clip-text text-transparent mb-4">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
