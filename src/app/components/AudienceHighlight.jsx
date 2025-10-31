"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import multilingual from "../../../public/multilingual.png";
import naturalConversations from "../../../public/natural-conversations.png";

export default function AudienceHighlight() {
  return (
    <div className="w-full mx-auto bg-white left-right-content">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 pb-15 lg:pb-30 px-6">
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="animated-gradient-border rounded-3xl"
        >
          <div className="animated-gradient-inner bg-[#161725] rounded-3xl p-10 flex flex-col items-center text-center shadow-xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3"
            >
              Personalized, natural Conversations
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-white mb-8 max-w-md"
            >
              eGenie makes every chat feel human. Smart, natural, and tailored —
              just like a real conversation should be.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <Image src={naturalConversations} alt="Genie" className="" />
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="animated-gradient-border rounded-3xl"
        >
          <div className="animated-gradient-inner bg-[#161725] rounded-3xl p-10 flex flex-col items-center text-center shadow-xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3"
            >
              Multi-Language Support
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-white mb-8 max-w-md"
            >
              eGenie understands your visitors no matter where they’re from. It
              detects their language and responds like a local.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <Image src={multilingual} alt="Genie" className="" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
