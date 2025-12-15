"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    shop: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success or error message

  // ---- Update form state ----
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ---- Handle submit ----
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Allow only digits and exactly 10 chars

    try {
      const res = await fetch("/api/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      console.log("📥 Server Response Status:", res.status);

      const result = await res.json();
      console.log("📥 Server Response Body:", result);

      if (result.success) {
        console.log("✅ SUCCESS");

        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          shop: "",
          address: "",
          message: "",
        });
      } else {
        setStatus("error");
        console.log("❌ FAILED");
      }
    } catch (err) {
      console.error(err);
      console.error("❌ Error in fetch:", err);
      setStatus("error");
    }

    setLoading(false);
  };

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
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#3B82F6]">
          Connect Us
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

      {/* FORM */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-12 w-full max-w-2xl bg-[#151523] rounded-3xl shadow-xl p-8 md:p-12 space-y-6 border border-[#2A2A3B]"
      >
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
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
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-[#1E1E2A] rounded-xl border border-transparent focus:outline-none focus:border-[#3B82F6] transition"
              required
            />
          </div>
        </div>

        {/* Phone + Shop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={(e) => {
                // optional: block non-digits on typing
                const onlyDigits = e.target.value.replace(/\D/g, "");
                if (onlyDigits.length <= 12) {
                  setForm({ ...form, phone: onlyDigits });
                }
              }}
              type="tel"
              placeholder="44 XXXXXXXXXX"
              className="w-full px-4 py-3 bg-[#1E1E2A] rounded-xl border border-transparent focus:outline-none focus:border-[#6D28D9] transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Shop Name
            </label>
            <input
              name="shop"
              value={form.shop}
              onChange={handleChange}
              type="text"
              placeholder="Your Shop Name"
              className="w-full px-4 py-3 bg-[#1E1E2A] rounded-xl border border-transparent focus:outline-none focus:border-[#3B82F6] transition"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Address
          </label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            type="text"
            placeholder="Full Address"
            className="w-full px-4 py-3 bg-[#1E1E2A] rounded-xl border border-transparent focus:outline-none focus:border-[#6D28D9] transition"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="5"
            className="w-full px-4 py-3 bg-[#1E1E2A] rounded-xl border border-transparent focus:outline-none focus:border-[#3B82F6] transition resize-none"
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px #9A5CFF" }}
          whileTap={{ scale: 0.97 }}
          disabled={loading}
          type="submit"
          className="w-full py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Status message */}
        {status === "success" && (
          <p className="text-green-400 text-center mt-3">
            Please Check Your Email
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center mt-3">
            Failed to send message. Try again later.
          </p>
        )}
      </motion.form>
    </section>
  );
}
