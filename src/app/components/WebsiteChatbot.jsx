"use client";

import Image from "next/image";
import WebsiteChatbotImg from "../../../public/WebsiteChatbot-bg.png";
import WebsiteChatbotChat from "../../../public/WebsiteChatbot-chat.png";
import WebsiteChatbotArrow from "../../../public/WebsiteChatbot-arrow.png";
import { Mail } from "lucide-react";

export default function WebsiteChatbot() {
  return (
    <section className="container WebsiteChatbot m-auto w-full  flex flex-col justify-center px-6 md:px-8 lg:px-16 overflow-hidden pb-30">
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="col-span-3 relative flex justify-center md:justify-center WebsiteChatbot-img">
          <Image
            src={WebsiteChatbotImg}
            alt="AI Chatbot Demo"
            width={1000}
            height={800}
            className="rounded-2xl shadow-2xl border border-gray-100"
            priority
          />
          <Image
            src={WebsiteChatbotChat}
            alt="AI Chatbot Demo"
            width={1000}
            height={800}
            className="chatbot-chat-img absolute"
            priority
          />
          <Image
            src={WebsiteChatbotArrow}
            alt="AI Chatbot Demo"
            width={1000}
            height={800}
            className="chatbot-arrow-img absolute"
            priority
          />
        </div>

        <div className="space-y-6 col-span-2">
          <h2 className="text-4xl md:text-6xl leading-13 font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let your website do the talking!
          </h2>
          <p className="text-white text-lg max-w-md">
            eGenie studies your site and automatically answers visitor questions
            in real time.
          </p>

          <div className="flex flex-col gap-4 pt-4 signin-buttons">
            <button className="flex items-center justify-center gap-2 bg-[#1a73e8] text-white font-medium px-6 py-5 rounded-lg hover:bg-[#1558b0] transition shadow-md">
              <span>
                <Image
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google Icon"
                  width={20}
                  height={10}
                />
              </span>
              Sign Up with Google →
            </button>

            <button className="flex items-center justify-center gap-2 bg-[#bf31c9] text-white font-medium px-6 py-5 rounded-lg hover:bg-gray-800 transition shadow-md">
              <span>
                <Mail className="w-5 h-5 text-red-500" />
              </span>
              Sign Up with an email →
            </button>
          </div>

          <p className="text-white text-sm pt-2">
            It’s free. No credit card required.
          </p>
        </div>
      </div>

      <div className="grid lg:hidden grid-cols-1 md:grid-cols-5 items-center">
        <div className="space-y-6 text-center col-span-2 mb-10">
          <h2 className="text-4xl md:text-6xl leading-13 font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let your website do the talking!
          </h2>
          <p className="text-white text-lg max-w-md">
            eGenie studies your site and automatically answers visitor questions
            in real time.
          </p>

          <div className="flex flex-col gap-4 pt-4 signin-buttons">
            <button className="flex items-center justify-center gap-2 bg-[#1a73e8] text-white font-medium px-6 py-5 rounded-lg hover:bg-[#1558b0] transition shadow-md">
              <span>
                <Image
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google Icon"
                  width={20}
                  height={10}
                />
              </span>
              Sign Up with Google →
            </button>

            <button className="flex items-center justify-center gap-2 bg-[#bf31c9] text-white font-medium px-6 py-5 rounded-lg hover:bg-gray-800 transition shadow-md">
              <span>
                <Mail className="w-5 h-5 text-red-500" />
              </span>
              Sign Up with an email →
            </button>
          </div>

          <p className="text-white text-sm pt-2">
            It’s free. No credit card required.
          </p>
        </div>

        <div className="col-span-3 relative flex justify-center md:justify-center WebsiteChatbot-img">
          <Image
            src={WebsiteChatbotImg}
            alt="AI Chatbot Demo"
            width={1000}
            height={800}
            className="rounded-2xl shadow-2xl border border-gray-100"
            priority
          />
          <Image
            src={WebsiteChatbotChat}
            alt="AI Chatbot Demo"
            width={1000}
            height={800}
            className="chatbot-chat-img absolute"
            priority
          />
          <Image
            src={WebsiteChatbotArrow}
            alt="AI Chatbot Demo"
            width={1000}
            height={800}
            className="chatbot-arrow-img absolute"
            priority
          />
        </div>
      </div>
    </section>
  );
}
