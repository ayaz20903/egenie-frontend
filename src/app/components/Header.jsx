"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/logo.png"; // replace with your logo path

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#0A0A0A]/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="eGeniePlus Logo"
            width={100}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300">
          <Link href="#features" className="hover:text-white transition">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-white transition hidden">
            Pricing
          </Link>
          <Link href="#demo" className="hover:text-white transition">
            Demo
          </Link>
          {/* <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link> */}
          <Link
            href="#contact"
            className="px-5 py-2 bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-lg border-t border-white/10 px-6 py-4 space-y-4 text-gray-300"
          >
            <Link
              href="#features"
              onClick={() => setIsOpen(false)}
              className="block hover:text-white"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="block hover:text-white hidden"
            >
              Pricing
            </Link>
            <Link
              href="#demo"
              onClick={() => setIsOpen(false)}
              className="block hover:text-white"
            >
              Demo
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block hover:text-white"
            >
              Contact
            </Link>
            <Link
              href="#get-started"
              onClick={() => setIsOpen(false)}
              className="block text-center px-5 py-2 bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
