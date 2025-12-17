"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Smart Genie",
      monthly: 50,
      yearly: 50 * 12 * 0.9,
      desc: "Ideal for professionals who need consistent help managing content, research, and automation.",
      gradient: "from-[#3730a3] to-[#6d28d9]",
      features: [
        "Up to 10,000 messages/month",
        "Smart memory",
        "Access to analytics dashboard",
        "Replies within 48 hours",
        "Single Bots",
      ],
      cta: "Upgrade Now",
    },
    {
      name: "Super Genie",
      monthly: 100,
      yearly: 100 * 12 * 0.9,
      desc: "For teams and power messages. Get unlimited queries, advanced AI models, and full integration power.",
      gradient: "from-[#6d28d9] to-[#db2777]",
      features: [
        "Up to 30,000 messages/month",
        "Smart memory & personalization",
        "Access to analytics dashboard",
        "24/7  support",
        "3 Bots",
        "Instagram Bot",
      ],
      highlight: true,
      cta: "Go Super",
    },
  ];

  return (
    <section id="pricing" className="py-20 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center hidden">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 "
        >
          Choose Your{" "}
          <span className="bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] text-transparent">
            Genie Mode
          </span>
        </motion.h2>

        {/* Subtext */}
        {/* <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Unlock the power of Plus whether you're exploring, creating, or
          automating your workflow. Find the plan that fits your journey.
        </motion.p> */}

        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text45xl font-bold mb-6"
        >
          <span className="bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] text-transparent">
            £499
          </span>{" "}
          setup fee + 1 month free + shopify website
        </motion.h3>

        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text45xl font-bold mb-6"
        >
          If you have a shopify website{" "}
          <span className="bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] text-transparent">
            £399
          </span>{" "}
          setup fee + 1 month free
        </motion.h3>

        {/* Toggle Switch */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center items-center gap-4 mb-16 select-none"
        >
          <span
            className={`text-sm md:text-base ${
              !isYearly ? "text-indigo-400 font-semibold" : "text-gray-400"
            }`}
          >
            Monthly
          </span>

          <div
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-16 h-8 bg-gray-700 rounded-full cursor-pointer transition-colors duration-300 hover:bg-gray-600"
          >
            {/* Toggle animation remains */}
            <motion.div
              animate={{ x: isYearly ? 32 : 0, rotate: isYearly ? 360 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute top-1 left-1 w-6 h-6 rounded-full bg-indigo-500 shadow-lg"
            />
          </div>

          <span
            className={`text-sm md:text-base ${
              isYearly ? "text-indigo-400 font-semibold" : "text-gray-400"
            }`}
          >
            Yearly <span className="text-xs text-yellow-400">(Save 10%)</span>
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.2, duration: 0.7 }}
              className={`relative rounded-3xl overflow-hidden border border-gray-800 bg-gradient-to-br ${plan.gradient} p-8 flex flex-col justify-between`}
            >
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.desc}</p>
                <p className="text-4xl font-bold mb-8">
                  {plan.monthly === "Free"
                    ? "Free"
                    : isYearly
                    ? `£${plan.yearly.toFixed(2)}`
                    : `£${plan.monthly}`}
                  <span className="text-sm text-gray-400">
                    {plan.monthly === "Free"
                      ? ""
                      : isYearly
                      ? " /year"
                      : " /month"}
                  </span>
                </p>

                <ul className="text-left space-y-3 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px #9A5CFF" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className={`w-full py-3 mt-auto rounded-xl text-lg font-medium transition ${
                  plan.highlight
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                <Link href="#contact">{plan.cta}</Link>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Get your own AI bot at a surprisingly low cost.
        </motion.h2>
      </div>
    </section>
  );
}
