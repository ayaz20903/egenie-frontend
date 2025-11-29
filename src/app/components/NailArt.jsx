"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import phoneMockup from "../../../public/phone-mockup3.png";

export default function NailArt() {
  const [step, setStep] = useState("start");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Welcome to Glam! What would you like to do today?",
      options: ["Delivery", "View Menu", "Contact Us"],
    },
  ]);
  const [cart, setCart] = useState({});
  const [userDetails, setUserDetails] = useState({ name: "", address: "" });
  const [openCategory, setOpenCategory] = useState(null);
  const chatContainerRef = useRef(null);
  const chatEndRef = useRef(null);
  const [userInput, setUserInput] = useState("");

  const menuCategories = [
    {
      name: "Ultra Glitter Gel",
      items: [
        {
          id: 1,
          name: "ltra Glitter Gel - Silver",
          price: 8.99,
          image: "/pizzahub/glam1.jpg",
        },
        {
          id: 2,
          name: "Ultra Glitter Gel - Dull Gold",
          price: 8.49,
          image: "/pizzahub/glam2.jpg",
        },
        {
          id: 3,
          name: "Ultra Glitter Gel - Purple",
          price: 8.99,
          image: "/pizzahub/glam3.jpg",
        },
        {
          id: 4,
          name: "Ultra Glitter Gel - Bight Pink",
          price: 8.99,
          image: "/pizzahub/glam4.jpg",
        },
        {
          id: 5,
          name: "Ultra Glitter Gel - Gold",
          price: 8.99,
          image: "/pizzahub/glam5.jpg",
        },
        {
          id: 6,
          name: "Ultra Glitter Gel - Rose Pink",
          price: 8.99,
          image: "/pizzahub/glam6.jpg",
        },
        {
          id: 7,
          name: "Ultra Glitter Gel - Blue",
          price: 8.99,
          image: "/pizzahub/glam7.jpg",
        },
        {
          id: 8,
          name: "Ultra Glitter Gel - Light Pink",
          price: 8.99,
          image: "/pizzahub/glam8.jpg",
        },
        {
          id: 9,
          name: "Ultra Glitter Gel - Rose Gold",
          price: 8.99,
          image: "/pizzahub/glam9.jpg",
        },
      ],
    },

    {
      name: "Mylars Big",
      items: [
        {
          id: 10,
          name: "Mylars Big - Unicorn Circles",
          price: 2.29,
          image: "/pizzahub/glam10.jpg",
        },
        {
          id: 11,
          name: "Mylars Big - Dull Gold Circle",
          price: 2.99,
          image: "/pizzahub/glam11.jpg",
        },
        {
          id: 12,
          name: "Mylars Big - Fire Diamonds",
          price: 1.99,
          image: "/pizzahub/glam12.jpg",
        },
        {
          id: 13,
          name: "Mylars Big - Gold Diamond",
          price: 1.99,
          image: "/pizzahub/glam13.jpg",
        },
        {
          id: 14,
          name: "GLAM Mylars Big - Rose Gold Diamond",
          price: 1.99,
          image: "/pizzahub/glam14.jpg",
        },
        {
          id: 15,
          name: " Mylars Big - Silver Diamond",
          price: 1.99,
          image: "/pizzahub/glam15.jpg",
        },
        {
          id: 16,
          name: " Mylars Small - Unicorn",
          price: 1.99,
          image: "/pizzahub/glam16.jpg",
        },
        {
          id: 17,
          name: "Mylars Small - Bright Gold",
          price: 1.99,
          image: "/pizzahub/glam17.jpg",
        },
        {
          id: 18,
          name: "Mylars Small - Copper",
          price: 1.99,
          image: "/pizzahub/glam18.jpg",
        },
      ],
    },

    {
      name: "3D Powder",
      items: [
        {
          id: 19,
          name: " Neon Yellow",
          price: 2.29,
          image: "/pizzahub/glam19.jpg",
        },
        {
          id: 20,
          name: "Neon Orange",
          price: 2.99,
          image: "/pizzahub/glam20.jpg",
        },
        {
          id: 21,
          name: "Hot Pink",
          price: 1.99,
          image: "/pizzahub/glam21.jpg",
        },
        {
          id: 22,
          name: "Passion Fruit",
          price: 1.99,
          image: "/pizzahub/glam22.jpg",
        },
        {
          id: 23,
          name: "Neon Blue",
          price: 1.99,
          image: "/pizzahub/glam23.jpg",
        },
        {
          id: 24,
          name: "Neon Green",
          price: 1.99,
          image: "/pizzahub/glam24.jpg",
        },
      ],
    },
  ];

  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;

    const timeout = setTimeout(() => {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }, 50);

    return () => clearTimeout(timeout);
  }, [messages, step]);

  const addMessage = (msg) => setMessages((prev) => [...prev, msg]);

  const handleOption = (option) => {
    addMessage({ from: "user", text: option });

    if (option === "Delivery" || option === "View Menu") {
      addMessage({
        from: "bot",
        text: "🛒 Here’s our wide range of grocery categories:",
      });
      setStep("menuPreview");
    } else if (option === "Contact Us") {
      addMessage({
        from: "bot",
        text: "📞 You can reach us at 0203 123 4567 or visit glam.com",
      });
    }
  };

  //

  const handleUserInputSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    addMessage({ from: "user", text: userInput });

    // Capture locally (avoid async step confusion)
    let nextStep = step;

    if (step === "checkout" || step === "askName") {
      handleUserInput("name", userInput);
      addMessage({
        from: "bot",
        text: "Type your full address:",
        input: "address",
      });
      nextStep = "askAddress";
    } else if (step === "askAddress") {
      handleUserInput("address", userInput);
      handleAddressSubmit();
      nextStep = "confirm";
    }

    setUserInput("");
    setStep(nextStep);
  };

  const handleUserInput = (field, value) =>
    setUserDetails((prev) => ({ ...prev, [field]: value }));

  const handleAddressSubmit = () => {
    const total = Object.values(cart).reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
    setStep("confirm");
    addMessage({
      from: "bot",
      text: `Confirm order for ${userDetails.name}, ${
        userDetails.address
      } — Total £${total.toFixed(2)}?`,
      options: ["Proceed to Pay", "Cancel"],
    });
  };

  const activeInput =
    messages
      .slice()
      .reverse()
      .find((msg) => msg.input)?.input ||
    (step === "checkout" ? "name" : step === "askAddress" ? "address" : null);

  const isInputActive =
    step === "checkout" || step === "askName" || step === "askAddress";

  //

  const handleViewItems = () => {
    setStep("menu");
  };

  const handleQuantity = (item, type) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (!newCart[item.id]) newCart[item.id] = { ...item, qty: 0 };
      if (type === "add") newCart[item.id].qty += 1;
      else if (type === "remove" && newCart[item.id].qty > 0)
        newCart[item.id].qty -= 1;
      if (newCart[item.id].qty === 0) delete newCart[item.id];
      return newCart;
    });
  };

  const cartTotal = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleAddToBag = () => {
    setStep("cart");
    addMessage({ from: "user", text: "Add to Bag" });
    addMessage({ from: "bot", text: "🛍️ Here’s what you’ve added so far:" });
  };

  const handleProceedToCheckout = () => {
    setStep("checkout");
    addMessage({ from: "user", text: "Proceed to Checkout" });
    addMessage({
      from: "bot",
      text: "Please type your full name to continue:",
      input: "name",
    });
  };

  const handleFinalOption = (option) => {
    addMessage({ from: "user", text: option });

    if (option === "Proceed to Pay") {
      addMessage({
        from: "bot",
        text: "💳 Click on the link to pay",
      });
      setStep("payment");
    } else if (option === "Cancel") {
      addMessage({
        from: "bot",
        text: "❌ Order cancelled. Hope to see you soon!",
        options: ["Delivery", "View Menu", "Contact Us"],
      });
      setStep("start");
    }
  };

  const handlePaymentClick = () => {
    addMessage({
      from: "bot",
      text: "✅ Payment received! Your order is on its way 🚀",
    });
    setStep("done");
  };

  return (
    <div className="flex justify-center items-center px-6 pt-0">
      {/* PHONE FRAME CONTAINER */}
      <div className="relative w-[260px] md:w-[400px] aspect-[9/19]">
        {/* WhatsApp chat inside phone */}
        <div className="absolute top-[46px] h-[83%] rounded-[26px] lg:top-[71px] left-[7.72%] w-[84.5%] lg:h-[83.2%] lg:rounded-[35px] overflow-hidden bg-[#ECE5DD] shadow-inner z-20">
          <div className="h-full bg-white shadow-lg rounded-2xl flex flex-col">
            <div className="bg-[#065E54] text-white p-4 rounded-t-2xl font-semibold">
              💅🏻 Glam Chat
            </div>

            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto scroll-smooth p-3 space-y-2 bg-[url('/whatsappbg.png')] bg-cover  text-black"
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%]  py-2 rounded-xl ${
                      msg.from === "user"
                        ? "bg-[#DCF8C6] text-black rounded-br-none"
                        : "bg-white text-gray-900 rounded-bl-none"
                    }`}
                  >
                    <p className="px-3">{msg.text}</p>

                    {msg.options && (
                      <div className="flex flex-col mt-3">
                        {msg.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() =>
                              step === "confirm"
                                ? handleFinalOption(opt)
                                : handleOption(opt)
                            }
                            className="bg-[#ffffff] text-[#075E54] px-3 py-2 text-xs font-medium border-t border-gray-300"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Menu Preview */}
              {step === "menuPreview" && (
                <div className="flex flex-col items-start mt-3 text-black">
                  <img
                    src="/order-steps.png"
                    alt="Menu Preview"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <button
                    onClick={handleViewItems}
                    className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg"
                  >
                    View Items
                  </button>
                </div>
              )}

              {/* Accordion Menu */}
              {step === "menu" && (
                <div className="mt-4 space-y-3">
                  {menuCategories
                    .slice()
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((cat, idx) => (
                      <div key={idx} className="bg-white rounded-xl shadow">
                        <button
                          className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center"
                          onClick={() =>
                            setOpenCategory(openCategory === idx ? null : idx)
                          }
                        >
                          {cat.name}
                          <span>{openCategory === idx ? "−" : "+"}</span>
                        </button>

                        <AnimatePresence>
                          {openCategory === idx && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="px-0 lg:px-4 pb-3 space-y-2"
                            >
                              {cat.items
                                .slice()
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((item) => (
                                  <div
                                    key={item.id}
                                    className="flex flex-col lg:flex-row justify-between items-center bg-gray-50 p-2 rounded-lg"
                                  >
                                    <div className="flex items-center gap-3">
                                      <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-md object-cover"
                                      />
                                      <div>
                                        <p className="font-medium text-black">
                                          {item.name}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                          £{item.price}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2 lg:mt-0">
                                      <button
                                        onClick={() =>
                                          handleQuantity(item, "remove")
                                        }
                                        className="px-2 py-1 bg-gray-200 rounded-full"
                                      >
                                        −
                                      </button>
                                      <span className="text-black">
                                        {cart[item.id]?.qty || 0}
                                      </span>
                                      <button
                                        onClick={() =>
                                          handleQuantity(item, "add")
                                        }
                                        className="px-2 py-1 bg-green-500 text-white rounded-full"
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}

                  {Object.keys(cart).length > 0 && (
                    <button
                      onClick={handleAddToBag}
                      className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg"
                    >
                      Add to Bag
                    </button>
                  )}
                </div>
              )}

              {/* Cart */}
              {step === "cart" && (
                <div className="mt-3 bg-green-50 p-3 rounded-xl shadow-inner text-black">
                  {Object.values(cart).map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-sm mb-1"
                    >
                      <span>
                        {item.name} × {item.qty}
                      </span>
                      <span>£{(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  ))}
                  <p className="mt-2 font-semibold text-right">
                    Total: £{cartTotal.toFixed(2)}
                  </p>
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => setStep("menu")}
                      className="flex-1 bg-gray-200 py-2 rounded-lg"
                    >
                      Edit Order
                    </button>
                    <button
                      onClick={handleProceedToCheckout}
                      className="flex-1 bg-green-600 text-white py-2 rounded-lg"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              )}

              {step === "payment" && (
                <div
                  onClick={handlePaymentClick}
                  className="px-3 text-blue-600 w-fit underline cursor-pointer  py-2 rounded-xl bg-white  rounded-bl-none"
                >
                  https://glam.paylink/demo
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            <div className="bg-[#F0F0F0] p-3">
              <form
                onSubmit={handleUserInputSubmit}
                className="flex items-center gap-2"
              >
                <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder={
                      isInputActive ? "Type your response..." : "Please wait..."
                    }
                    className="flex-1 text-sm focus:outline-none text-black bg-transparent"
                    disabled={!isInputActive}
                  />
                  <span className="text-gray-400 text-lg">😊</span>
                </div>

                <button
                  type="submit"
                  disabled={!isInputActive || !userInput.trim()}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition
                    ${
                      isInputActive && userInput.trim()
                        ? "bg-[#25D366] text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                >
                  ➤
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* PHONE FRAME IMAGE */}
        <Image
          src={phoneMockup}
          alt="Phone frame"
          fill
          className="object-contain z-10 pointer-events-none"
          priority
        />
      </div>
    </div>
  );
}
