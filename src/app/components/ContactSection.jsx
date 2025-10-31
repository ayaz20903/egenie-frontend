"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 text-white flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center"
      >
        Let’s{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#3B82F6]">
          Connect
        </span>
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-300 mt-4 text-center max-w-xl"
      >
        Have a question or want to collaborate? Fill out the form below and our
        team will get back to you shortly.
      </motion.p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-12 w-full max-w-2xl bg-[#151523] rounded-3xl shadow-xl p-8 md:p-12 space-y-6 border border-[#2A2A3B]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-[#1E1E2A] rounded-xl border border-transparent focus:outline-none focus:border-[#6D28D9] transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-[#1E1E2A] rounded-xl border border-transparent focus:outline-none focus:border-[#3B82F6] transition"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            placeholder="e.g., Partnership Opportunity"
            className="w-full px-4 py-3 bg-[#1E1E2A] rounded-xl border border-transparent focus:outline-none focus:border-[#6D28D9] transition"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            placeholder="Write your message here..."
            rows="5"
            className="w-full px-4 py-3 bg-[#1E1E2A] rounded-xl border border-transparent focus:outline-none focus:border-[#3B82F6] transition resize-none"
            required
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px #9A5CFF" }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] transition"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
