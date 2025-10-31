"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  MessageCircle,
  ShoppingCart,
  Megaphone,
  HelpCircle,
  Layers,
  Bot,
  Mail,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Omnichannel Customer Support",
    description:
      "Connect all your customer communication channels in one place to manage messages seamlessly.",
    icon: <HelpCircle className="text-blue-600 w-6 h-6" />,
    image: "/automatiion-omnichannel.jpg",
  },
  {
    id: 2,
    title: "Marketing Automations",
    description:
      "Automate campaigns and workflows to increase customer engagement and retention effortlessly.",
    icon: <Megaphone className="text-orange-500 w-6 h-6" />,
    image: "/marketing-automations.jpg",
  },
  {
    id: 3,
    title: "Generate More Sales",
    description:
      "Boost conversions using personalized funnels and real-time tracking tools.",
    icon: <Layers className="text-green-600 w-6 h-6" />,
    image: "/automation-sales.png",
  },
  {
    id: 4,
    title: "Better E-Commerce",
    description:
      "Integrate your e-commerce store to manage leads, customers, and orders in one dashboard.",
    icon: <ShoppingCart className="text-purple-600 w-6 h-6" />,
    image: "/automation-ecomm.png",
  },
  {
    id: 5,
    title: "Live Chat",
    description:
      "Chat with visitors in real time to increase trust, improve service, and close deals faster.",
    icon: <MessageCircle className="text-green-500 w-6 h-6" />,
    image: "/automation-live-chat.png",
  },
  {
    id: 6,
    title: "Unified Inbox",
    description:
      "Manage all customer conversations from WhatsApp, Messenger, Email, and more — all in one place.",
    icon: <Mail className="text-blue-500 w-6 h-6" />,
    image: "/automation-inbox.jpg",
  },
  {
    id: 7,
    title: "Endless Integrations",
    description:
      "Streamline data through your desired CRMs, Payment Gateways, or other software.",
    icon: <Bot className="text-purple-500 w-6 h-6" />,
    image: "/automation-integrations.jpg",
  },
];

export default function FeatureShowcase() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="features"
      className="pt-10 pb-15 lg:pb-30 px-6 lg:px-0 bg-white"
    >
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl lg:text-5xl pb-5 lg:pb-15 text-center font-bold mb-6 bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] bg-clip-text text-transparent WhatsAppMarketingHeading"
      >
        All your automation magic, in one place
      </motion.h3>

      <div className="flex justify-center bg-white">
        <div className="container mx-auto w-full grid md:grid-cols-2 gap-10 px-0 lg:px-6 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col space-y-4"
          >
            {features.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className={`rounded-2xl p-5 cursor-pointer transition bg-[#161725] shadow-xl border border-transparent hover:border-[#2a2b3c]`}
                onClick={() => setActive(active === item.id ? null : item.id)}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="font-semibold text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-gray-400 text-xl">
                    {active === item.id ? "▴" : "▾"}
                  </span>
                </div>

                <AnimatePresence>
                  {active === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-sm pl-9 text-white/80"
                    >
                      {item.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT SIDE - Dynamic Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden lg:block relative h-full w-full rounded-3xl overflow-hidden shadow-xl bg-[#161725] flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={features.find((f) => f.id === active)?.image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={features.find((f) => f.id === active)?.image || ""}
                    alt="Feature preview"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {!active && (
              <div className="text-center px-8 flex flex-col items-center justify-center h-full">
                <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  Explore Features
                </h3>
                <p className="text-white/70 mt-4">
                  Select a feature on the left to preview.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
