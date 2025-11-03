"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WebsiteChatbotImg from "../../../public/WebsiteChatbot-bg.png";
import WebsiteChatbotChat from "../../../public/WebsiteChatbot-chat.png";
import WebsiteChatbotArrow from "../../../public/WebsiteChatbot-arrow.png";
import phoneMockup from "../../../public/phone-mockup.png";

export default function ChatAnimation() {
  return (
    <section className="container WebsiteChatbot m-auto w-full flex flex-col justify-center px-6 md:px-8 lg:px-16 overflow-hidden py-20 lg:py-30">
      <div className="lg:grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SECTION */}
        <div className="space-y-6 text-center lg:text-left">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl leading-13 font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            Let eGenie handle your bookings while you focus on business.
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white text-lg max-w-md"
          >
            It answers instantly, shows live slots, and confirms appointments —
            all through your social channels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-48 mx-auto lg:mx-[0] signin-buttons"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px #9A5CFF" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="my-3 px-8 py-3 bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] text-white font-semibold rounded-full shadow-lg transition-all z-9"
            >
              Get Started Free
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-white text-sm pt-2"
          >
            It’s free. No credit card required.
          </motion.p>
        </div>

        {/* RIGHT SECTION (Images) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative flex justify-center md:justify-center WebsiteChatbot-img py-10 lg:py-0 w-full lg:w-[400px] mx-auto"
        >
          <video
            src="/chat-video3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl  will-change-transform"
          />
        </motion.div>
      </div>
    </section>
  );
}
