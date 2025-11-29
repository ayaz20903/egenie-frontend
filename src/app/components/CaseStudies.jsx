// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// import whatsappSection from "../../../public/whatsapp-section.png";
// import whatsappSection4 from "../../../public/whatsappSection4.png";
// import whatsappSection5 from "../../../public/whatsappSection5.png";

// const slides = [
//   {
//     id: 1,
//     title: "AI Chatbot",
//     heading: "24x7 Assistant for Pre & Post-Sales Queries",
//     features: [
//       "Easy-to-use, No-code AI builder for quick setup.",
//       "Personalize chats using data from your existing CRM.",
//       "Smooth transition to human agents for complex queries.",
//     ],
//     img: whatsappSection4,
//   },
//   {
//     id: 2,
//     title: "Broadcast Marketing",
//     heading: "Personalized Messaging at Scale",
//     features: [
//       "Reach your audience instantly with smart, data-backed bulk messages.",
//       "Schedule campaigns, segment your contacts, and skip the inactive ones effortlessly.",
//       "Track opens, clicks, and conversions — all in one place.",
//     ],
//     img: whatsappSection,
//   },
//   {
//     id: 3,
//     title: "Smart Engagement Journeys",
//     heading: "Smart, Automated Customer Journeys",
//     features: [
//       "Build engaging, step-by-step conversations that nurture leads over days or weeks.",
//       "Personalize every interaction with branching paths that adapt to user actions.",
//       "Trigger your campaigns automatically from other apps or APIs — and let automation do the work.",
//     ],
//     img: whatsappSection5,
//   },
// ];

// export default function WhatsAppMarketingSection() {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setIndex((prev) => (prev - 1 + slides.length) % slides.length);

//   const fadeVariants = {
//     hidden: { opacity: 0, x: 80 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.6, ease: "easeInOut" },
//     },
//     exit: {
//       opacity: 0,
//       x: -80,
//       transition: { duration: 0.6, ease: "easeInOut" },
//     },
//   };

//   return (
//     <section className="w-full bg-white pt-10 pb-30 overflow-hidden">
//       {/* Heading */}
//       <div className="text-center mb-[30px] lg:mb-[50px] px-6">
//         <h3 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] bg-clip-text text-transparent">
//           Conversations with a touch of <span>MAGIC</span>
//         </h3>
//         <p className="text-xl bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] bg-clip-text text-transparent">
//           Engage your audience, boost sales, and scale without lifting a finger.
//         </p>
//       </div>

//       {/* SLIDER */}
//       <div className="relative container mx-auto flex justify-center items-center px-6 lg:px-16">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             variants={fadeVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="grid lg:grid-cols-2 gap-10 items-center"
//           >
//             {/* Left Content */}
//             <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-[40px] p-10 shadow-xl">
//               <div>
//                 <div className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//                   {slides[index].title}
//                 </div>
//                 <h2 className="text-4xl lg:text-5xl font-bold my-6">
//                   {slides[index].heading}
//                 </h2>

//                 <ul className="space-y-5 text-gray-300">
//                   {slides[index].features.map((feature, i) => (
//                     <li
//                       key={i}
//                       className="flex items-start gap-3 text-lg lg:text-2xl"
//                     >
//                       <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//                         ✔
//                       </span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 <a
//                   href="#"
//                   className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold"
//                 >
//                   Learn more →
//                 </a>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="flex justify-center">
//               <Image
//                 src={slides[index].img}
//                 alt={slides[index].title}
//                 className="rounded-2xl shadow-2xl w-full h-auto"
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation */}
//         <div className="absolute bottom-[-80px] flex items-center justify-center gap-6">
//           <button
//             onClick={prevSlide}
//             className="p-3 rounded-full bg-[#6D28D9] text-white hover:bg-[#5B21B6] transition"
//           >
//             <ArrowLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="p-3 rounded-full bg-[#6D28D9] text-white hover:bg-[#5B21B6] transition"
//           >
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Import your custom components

import ChatbotGroceryStore from "./ChatbotGroceryStore";
import NailArt from "./NailArt";
import PizzaShopChat from "./PizzaShopChat";
import Bubbletea from "./Bubbletea";

const slides = [
  {
    id: 1,
    title: "AI Assistant",
    heading: "Grocery Shop",
    features: [
      "Easy-to-use, No-code AI builder for quick setup.",
      "Reduces support load while boosting repeat orders.",
      "Automated order taking, cart creation, and checkout.",
    ],
    component: <ChatbotGroceryStore />,
  },
  {
    id: 2,
    title: "AI Assistant",
    heading: "Nail Art",
    features: [
      "Reach your audience instantly with bulk messages.",
      "Schedule campaigns, segment contacts automatically.",
      "Track opens, clicks, and conversions — all in one place.",
    ],
    component: <NailArt />,
  },
  {
    id: 3,
    title: "AI Assistant",
    heading: "Pizza Shop",
    features: [
      "Build engaging, step-by-step journeys over days or weeks.",
      "Branching logic adapts your automation to user behaviour.",
      "Trigger campaigns from apps or APIs — automation on autopilot.",
    ],
    component: <PizzaShopChat />,
  },

  {
    id: 3,
    title: "AI Assistant",
    heading: "Bubble Tea Cafe",
    features: [
      "Build engaging, step-by-step journeys over days or weeks.",
      "Branching logic adapts your automation to user behaviour.",
      "Trigger campaigns from apps or APIs — automation on autopilot.",
    ],
    component: <Bubbletea />,
  },
];

export default function CaseStudies() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const fadeVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: -80,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <section className="w-full pt-10 pb-30 overflow-hidden">
      {/* Heading */}
      {/* <div className="text-center mb-[30px] lg:mb-[50px] px-6">
        <h3 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] bg-clip-text text-transparent">
          Conversations with a touch of <span>MAGIC</span>
        </h3>
        <p className="text-xl bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] bg-clip-text text-transparent">
          Engage your audience, boost sales, and scale without lifting a finger.
        </p>
      </div> */}

      {/* Slider */}
      <div className="relative container mx-auto flex justify-center items-center px-6 lg:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Left Content */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-[40px] p-10 shadow-xl">
              <div>
                <div className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {slides[index].title}
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold my-6">
                  {slides[index].heading}
                </h2>

                <ul className="space-y-5 text-gray-300">
                  {slides[index].features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-lg lg:text-2xl"
                    >
                      <span className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        ✔
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold"
                >
                  Learn more →
                </a>
              </div>
            </div>

            {/* Right Component */}
            <div className="flex justify-center">
              <div className="w-full h-full">{slides[index].component}</div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute bottom-[-40px] flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-[#6D28D9] text-white hover:bg-[#5B21B6] transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-[#6D28D9] text-white hover:bg-[#5B21B6] transition"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
