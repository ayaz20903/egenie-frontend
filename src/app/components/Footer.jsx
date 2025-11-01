"use client";

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
          <a
            href="/terms"
            className="text-sm text-white/80 hover:text-white transition"
          >
            Terms & Conditions
          </a>
          <a
            href="/privacy"
            className="text-sm text-white/80 hover:text-white transition"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
