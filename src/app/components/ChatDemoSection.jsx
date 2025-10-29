"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MessageBubble from "./MessageBubble";
import industryFlows from "../data/industryFlows.json";
import genieImage from "../../../public/genie2.png"; // replace with your genie image path

const industryCategories = [
  { value: "barbershop", label: "Barbershop", icon: "💈" },
  { value: "restaurant", label: "Restaurant", icon: "🍽️" },
  { value: "salon", label: "Hair Salon", icon: "💇‍♀️" },
  { value: "nailart", label: "Nail Art Studio", icon: "💅" },
  { value: "makeup", label: "Makeup Artist", icon: "💄" },
  { value: "gym", label: "Gym/Fitness", icon: "💪" },
  { value: "spa", label: "Spa & Wellness", icon: "🧘" },
];

export default function ChatDemoSection() {
  const [shopName, setShopName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("barbershop");
  const [displayShopName, setDisplayShopName] = useState("Your Shop Name");
  const [startDemo, setStartDemo] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userData, setUserData] = useState({});
  const [currentStep, setCurrentStep] = useState(null);
  const [userInput, setUserInput] = useState("");
  const chatEndRef = useRef(null);
  const chatBodyRef = useRef(null);

  const getCurrentFlow = () => {
    return industryFlows[selectedCategory] || industryFlows.barbershop;
  };

  const personalizeMessage = (message, userName, shopName) => {
    return message
      .replace(/{userName}/g, userName || "")
      .replace(/{shopName}/g, shopName || "Your Shop Name");
  };

  const handleStartDemo = () => {
    // Reset all state
    setDisplayShopName(shopName || "Your Shop Name");
    setUserData({});
    setUserInput("");
    setCurrentStep(null);
    setMessages([]);

    const currentFlow = getCurrentFlow();
    const welcomeMessage = {
      ...currentFlow[0],
      message: personalizeMessage(
        currentFlow[0].message,
        "",
        shopName || "Your Shop Name"
      ),
    };

    setMessages([welcomeMessage]);
    setCurrentStep(welcomeMessage);
    setTimeout(() => setStartDemo(true), 1000);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleOptionClick = (option) => {
    const currentFlow = getCurrentFlow();
    const nextStep = currentFlow.find((s) => s.id === option.next);
    if (nextStep) {
      const personalizedMessage = personalizeMessage(
        nextStep.message,
        userData.name,
        displayShopName
      );

      setMessages((prev) => [
        ...prev,
        { message: option.label, user: true },
        { ...nextStep, message: personalizedMessage },
      ]);
      setCurrentStep({ ...nextStep, message: personalizedMessage });
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Store user name when they input it
    if (
      currentStep?.id === "book" ||
      currentStep?.id === "reservation" ||
      currentStep?.id === "bookService" ||
      currentStep?.id === "bookNail" ||
      currentStep?.id === "bookMakeup" ||
      currentStep?.id === "membership" ||
      currentStep?.id === "bookTreatment"
    ) {
      setUserData({ ...userData, name: userInput });
    }

    const currentFlow = getCurrentFlow();
    const nextStep = currentFlow.find((s) => s.id === currentStep.next);
    if (nextStep) {
      const personalizedMessage = personalizeMessage(
        nextStep.message,
        userInput, // Use the input as name for personalization
        displayShopName
      );

      setMessages((prev) => [
        ...prev,
        { message: userInput, user: true },
        { ...nextStep, message: personalizedMessage },
      ]);
      setUserInput("");
      setCurrentStep({ ...nextStep, message: personalizedMessage });
    }
  };

  const renderChat = () =>
    messages.map((msg, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <MessageBubble msg={msg} onOptionClick={handleOptionClick} />
      </motion.div>
    ));

  return (
    <section
      id="demo"
      className=" container m-auto flex flex-col lg:flex-row items-center justify-center gap-12 py-15 px-6 lg:py-16 lg:px-16 bg-[#161725] text-white min-h-screen"
    >
      {/* Left Section */}
      <div className="w-full lg:w-1/2 max-w-2xl">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            See How Your Shop's Chatbot Works!
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Enter your shop's name and watch the magic happen. 🪄
            <br />
            Experience the power of AI-driven customer engagement.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-4 rounded-2xl w-full bg-[#151523] border-2 border-gray-600 text-white focus:border-purple-500 focus:outline-none transition-all duration-300 text-lg"
              >
                {industryCategories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.icon} {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                placeholder="Enter your shop name"
                className="px-6 py-4 rounded-2xl w-full bg-[#151523] border-2 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all duration-300 text-lg"
              />
              <button
                onClick={handleStartDemo}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] hover:from-[#7C3AED] hover:to-[#2563EB] hover:shadow-[0_0_25px_#9A5CFF] transition-all duration-300 font-semibold text-lg whitespace-nowrap"
              >
                See Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Chat */}
      <div className="w-full lg:w-1/2 flex justify-center">
        {!startDemo ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-[340px] h-[640px]  bg-white rounded-[40px] p-1 shadow-2xl flex flex-col items-center justify-center "
          >
            <div className="w-full h-full bg-whitesmoke rounded-[32px]  flex flex-col items-center justify-center ">
              <Image src={genieImage} alt="Genie" className="" />

              <div className="text-center pt-8">
                {/* <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto"> */}
                {/* <span className="text-3xl">💬</span> */}
                {/* </div> */}
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  Wish for More Leads? eGenie Grants It Instantly.
                </h3>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 5 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="relative"
          >
            {/* Phone Frame */}
            <div className="w-[340px] h-[640px] bg-[#fff9f4] rounded-[40px] p-1 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col relative">
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
                  }}
                  className="bg-[#075E54] text-white py-3 px-4 flex items-center gap-3"
                >
                  <motion.div
                    variants={{
                      hidden: { y: -10, opacity: 0 },
                      show: { y: 0, opacity: 1 },
                    }}
                    className="w-8 h-8 rounded-full bg-green-300 flex items-center justify-center text-black font-bold text-sm"
                  >
                    {industryCategories.find(
                      (cat) => cat.value === selectedCategory
                    )?.icon || "💈"}
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { y: -10, opacity: 0 },
                      show: { y: 0, opacity: 1 },
                    }}
                    className="flex-1"
                  >
                    <p className="font-semibold text-sm">{displayShopName}</p>
                    <p className="text-xs text-green-200">online</p>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { y: -10, opacity: 0 },
                      show: { y: 0, opacity: 1 },
                    }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-white">📞</span>
                    <span className="text-white">⋮</span>
                  </motion.div>
                </motion.div>

                {/* Chat Body */}
                <div
                  ref={chatBodyRef}
                  className="flex-1 overflow-y-auto overscroll-contain px-3 py-4 bg-cover relative"
                  style={{
                    backgroundImage: "url('/whatsappbg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {renderChat()}
                  <div ref={chatEndRef} />
                </div>

                {/* Input Area */}
                {currentStep?.input && (
                  <div className="bg-[#F0F0F0] p-3">
                    <form
                      onSubmit={handleInputSubmit}
                      className="flex items-center gap-2"
                    >
                      <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center">
                        <input
                          type="text"
                          value={userInput}
                          onChange={(e) => setUserInput(e.target.value)}
                          placeholder="Type a message"
                          className="flex-1 text-sm focus:outline-none text-black bg-transparent"
                        />
                        <span className="text-gray-400 text-lg">😊</span>
                      </div>
                      <button
                        type="submit"
                        className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center"
                      >
                        ➤
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
