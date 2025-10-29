"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import whatsappSection from "../../../public/whatsapp-section.png";
import whatsappSection4 from "../../../public/whatsappSection4.png";
import whatsappSection5 from "../../../public/whatsappSection5.png";

export default function WhatsAppMarketingSection() {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const handleEnded = () => {};

    videoEl.addEventListener("ended", handleEnded);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasPlayed) {
          videoEl.play().catch(() => {});
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(videoEl);
    return () => {
      videoEl.removeEventListener("ended", handleEnded);
      observer.disconnect();
    };
  }, [hasPlayed]);

  return (
    <section className="w-full bg-white py-10  lg:py-20">
      {/* Heading */}
      <div className="text-center mb-[70px] lg:mb-[100px] px-6">
        <h3 className="text-2xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] bg-clip-text text-transparent WhatsAppMarketingHeading">
          Conversations with a touch of <span>MAGIC</span>
        </h3>
        <p className="text-xl bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] bg-clip-text text-transparent">
          Engage your audience, boost sales, and scale without lifting a finger.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="hidden lg:grid  grid-flow-row-dense lg:grid-cols-7 gap-5 items-center ">
        {/* Left Side */}
        <div className="col-span-3 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-tr-[80px] rounded-br-[80px] p-10 shadow-xl">
          <div className="showcase_content">
            <div className="text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Drip Campaigns
            </div>
            <h2 className="text-5xl font-bold my-6">
              Smart, Automated Customer Journeys
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3 text-2xl my-8">
                <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ✔
                </span>
                Build engaging, step-by-step conversations that nurture leads
                over days or weeks
              </li>
              <li className="flex items-start gap-3 text-2xl mb-8">
                <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ✔
                </span>
                Personalize every interaction with branching paths that adapt to
                user actions
              </li>
              <li className="flex items-start gap-3 text-2xl">
                <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ✔
                </span>
                Trigger your campaigns automatically from other apps or APIs —
                and let automation do the work
              </li>
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold"
            >
              Learn more →
            </a>
          </div>
          <div className="showcase_content">
            <div className="text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI CHATBOT
            </div>
            <h2 className="text-5xl font-bold my-6">
              24x7 Assistant for Pre & Post-Sales Queries
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3 text-2xl my-8">
                <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ✔
                </span>
                Easy-to-use, No-code AI builder for quick setup
              </li>
              <li className="flex items-start gap-3 text-2xl mb-8">
                <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ✔
                </span>
                Personalize chats using data from your existing CRM
              </li>
              <li className="flex items-start gap-3 text-2xl">
                <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ✔
                </span>
                Smooth transition to human agents for complex queries
              </li>
            </ul>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold"
            >
              Learn more →
            </a>
          </div>
          <div className="showcase_content">
            <div className="text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Broadcast Marketing
            </div>
            <h2 className="text-5xl font-bold my-6">
              Personalized Messaging at Scale
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3 text-2xl my-8">
                <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ✔
                </span>
                Reach your audience instantly with smart, data-backed bulk
                messages
              </li>
              <li className="flex items-start gap-3 text-2xl mb-8">
                <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ✔
                </span>
                Schedule campaigns, segment your contacts, and skip the inactive
                ones effortlessly
              </li>
              <li className="flex items-start gap-3 text-2xl">
                <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ✔
                </span>
                Track opens, clicks, and conversions — all in one place
              </li>
            </ul>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className=" col-span-4 h-full flex flex-col justify-between items-center">
          {/* <video
            ref={videoRef}
            src="/video1.mp4"
            className="w-full h-auto "
            muted
            playsInline
            preload="metadata"
          /> */}
          <Image src={whatsappSection5} alt="Genie" className="" />

          <Image src={whatsappSection4} alt="Genie" className="" />
          <Image src={whatsappSection} alt="Genie" className="" />
        </div>
      </div>

      <div className="grid lg:hidden grid-cols-1  grid-flow-row-dense gap-5 items-center ">
        {/* Left Side */}
        <div className=" col-span-3 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-tr-[80px] rounded-br-[80px] p-10 shadow-xl">
          <div className="showcase_content">
            <div className="text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Drip Campaigns
            </div>
            <h2 className="text-5xl font-bold my-6">
              Smart, Automated Customer Journeys
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3 text-2xl my-8">
                <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ✔
                </span>
                Build engaging, step-by-step conversations that nurture leads
                over days or weeks
              </li>
              <li className="flex items-start gap-3 text-2xl mb-8">
                <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ✔
                </span>
                Personalize every interaction with branching paths that adapt to
                user actions
              </li>
              <li className="flex items-start gap-3 text-2xl">
                <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ✔
                </span>
                Trigger your campaigns automatically from other apps or APIs —
                and let automation do the work
              </li>
            </ul>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold"
            >
              Learn more →
            </a>
          </div>
          <div className=" col-span-4 h-full flex flex-col justify-between items-center">
            <video
              ref={videoRef}
              src="/video1.mp4"
              className="w-full h-auto "
              muted
              playsInline
              preload="metadata"
            />

            <div className="showcase_content">
              <div className="text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI CHATBOT
              </div>
              <h2 className="text-5xl font-bold my-6">
                24x7 Assistant for Pre & Post-Sales Queries
              </h2>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3 text-2xl my-8">
                  <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    ✔
                  </span>
                  Easy-to-use, No-code AI builder for quick setup
                </li>
                <li className="flex items-start gap-3 text-2xl mb-8">
                  <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    ✔
                  </span>
                  Personalize chats using data from your existing CRM
                </li>
                <li className="flex items-start gap-3 text-2xl">
                  <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    ✔
                  </span>
                  Smooth transition to human agents for complex queries
                </li>
              </ul>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold"
              >
                Learn more →
              </a>
            </div>

            <Image src={whatsappSection4} alt="Genie" className="" />

            <div className="showcase_content">
              <div className="text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Broadcast Marketing
              </div>
              <h2 className="text-5xl font-bold my-6">
                Personalized Messaging at Scale
              </h2>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3 text-2xl my-8">
                  <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    ✔
                  </span>
                  Reach your audience instantly with smart, data-backed bulk
                  messages
                </li>
                <li className="flex items-start gap-3 text-2xl mb-8">
                  <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    ✔
                  </span>
                  Schedule campaigns, segment your contacts, and skip the
                  inactive ones effortlessly
                </li>
                <li className="flex items-start gap-3 text-2xl">
                  <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    ✔
                  </span>
                  Track opens, clicks, and conversions — all in one place
                </li>
              </ul>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold"
              >
                Learn more →
              </a>
            </div>

            <Image src={whatsappSection} alt="Genie" className="" />
          </div>

          {/* Right Side */}
        </div>
      </div>
    </section>
  );
}
