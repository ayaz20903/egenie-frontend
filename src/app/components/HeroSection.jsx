"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import genieImage from "../../../public/new-genie.png";

export default function HeroSection() {
  return (
    <section className="relative px-6 flex flex-col items-center justify-center min-h-screen text-center hero-section overflow-hidden">
      {/* Floating Genie Animation */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: [0, -25, 0],
          opacity: 1,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-[300px] h-[300px] md:w-[5500px] md:h-[550px]"
      >
        <Image
          src={genieImage}
          alt="Genie"
          fill
          className="object-contain drop-shadow-[0_0_30px_rgba(154,92,255,0.6)]"
        />
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold mt-4 text-white leading-tight"
      >
        From “Hi” to “Buy”{" "}
        <span className="bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] bg-clip-text text-transparent">
          eGenie Makes It Happen.
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="mt-4 text-[#D1D5DB] text-lg md:text-xl max-w-2xl"
      >
        Create smart, personalized chatbots for WhatsApp, Instagram, and
        Facebook — powered by AI that feels human.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
          scale: [1, 1.02, 1],
          opacity: 1,
        }}
        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 6 }}
        whileHover={{
          scale: 1.08,
          boxShadow: "0px 0px 25px #9A5CFF",
        }}
        whileTap={{ scale: 0.98 }}
        className="mt-10 px-8 py-3 bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] text-white font-semibold rounded-full shadow-lg transition-all z-9"
      >
        Get Started
      </motion.button>

      {/* Soft Glow behind Genie */}
      {/* <div className="absolute top-1/3 w-[400px] h-[400px] rounded-full bg-[#6D28D9] opacity-20 blur-3xl"></div> */}

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#15152340] to-[#151523] pointer-events-none"></div> */}
    </section>
  );
}
