"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-6 border-t border-[#2a2b3c]">
      <div className="container mx-auto px-6 relative flex items-center justify-center">
        {/* Center Copyright */}
        <p className="text-sm text-center">
          © {new Date().getFullYear()} eGeniePlus. All rights reserved.
        </p>

        {/* Right side links */}
        <div className="absolute right-6 flex items-center gap-6">
          <Link href="t-c" className="hover:underline">
            Terms & Conditions
          </Link>

          <Link href="privacy-policy" className="hover:underline">
            Privacy Policies
          </Link>
        </div>
      </div>
    </footer>
  );
}
