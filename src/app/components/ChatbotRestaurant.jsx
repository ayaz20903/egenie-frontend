// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// export default function ChatbotRestaurant() {
//   const [step, setStep] = useState("start");
//   const [messages, setMessages] = useState([
//     {
//       from: "bot",
//       text: "🍽️ Welcome to Pizza Haven! How can we serve you today?",
//       options: ["Make Reservation", "Delivery", "View Menu", "Contact Us"],
//     },
//   ]);
//   const [cart, setCart] = useState({});
//   const [userDetails, setUserDetails] = useState({ name: "", address: "" });
//   const chatContainerRef = useRef(null);
//   const chatEndRef = useRef(null);

//   const menuItems = [
//     { id: 1, name: "Margherita", price: 6.99 },
//     { id: 2, name: "Pepperoni", price: 7.99 },
//     { id: 3, name: "BBQ Chicken", price: 8.49 },
//     { id: 4, name: "Veggie Supreme", price: 7.49 },
//     { id: 5, name: "Cheese Burst", price: 8.99 },
//     { id: 6, name: "Meat Feast", price: 9.99 },
//     { id: 7, name: "Coke", price: 1.49 },
//     { id: 8, name: "Sprite", price: 1.49 },
//     { id: 9, name: "Water", price: 0.99 },
//   ];

//   // 🧩 Scroll only when necessary
//   useEffect(() => {
//     const container = chatContainerRef.current;
//     if (!container) return;

//     const isScrolledToBottom =
//       container.scrollHeight - container.scrollTop <=
//       container.clientHeight + 50;

//     if (isScrolledToBottom) {
//       chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]); // only when messages change

//   const addMessage = (msg) => setMessages((prev) => [...prev, msg]);

//   const handleOption = (option) => {
//     addMessage({ from: "user", text: option });

//     if (option === "Delivery" || option === "View Menu") {
//       addMessage({
//         from: "bot",
//         text: "Here’s our menu 🍕 — select your favourites!",
//       });
//       setStep("menu");
//     } else if (option === "Make Reservation") {
//       addMessage({
//         from: "bot",
//         text: "🕒 Great! Please choose your reservation time:",
//         options: ["6 PM", "7 PM", "8 PM"],
//       });
//     } else if (["6 PM", "7 PM", "8 PM"].includes(option)) {
//       addMessage({
//         from: "bot",
//         text: `✅ Your table is booked for ${option}. See you soon!`,
//       });
//     } else if (option === "Contact Us") {
//       addMessage({
//         from: "bot",
//         text: "📞 You can reach us at 0203 123 4567 or visit pizzahaven.co.uk",
//       });
//     }
//   };

//   const handleQuantity = (item, type) => {
//     setCart((prev) => {
//       const newCart = { ...prev };
//       if (!newCart[item.id]) newCart[item.id] = { ...item, qty: 0 };
//       if (type === "add") newCart[item.id].qty += 1;
//       else if (type === "remove" && newCart[item.id].qty > 0)
//         newCart[item.id].qty -= 1;
//       if (newCart[item.id].qty === 0) delete newCart[item.id];
//       return newCart;
//     });
//   };

//   const cartTotal = Object.values(cart).reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   const handleAddToBag = () => {
//     setStep("cart");
//     addMessage({ from: "user", text: "Add to Bag" });
//     addMessage({ from: "bot", text: "🛍️ Here’s what you’ve added so far:" });
//   };

//   const handleProceedToCheckout = () => {
//     setStep("checkout");
//     addMessage({ from: "user", text: "Proceed to Checkout" });
//     addMessage({
//       from: "bot",
//       text: "Please type your full name to continue:",
//       input: "name",
//     });
//   };

//   const handleUserInput = (field, value) => {
//     setUserDetails((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleAddressSubmit = () => {
//     setStep("confirm");
//     addMessage({
//       from: "bot",
//       text: `Confirm order for ${userDetails.name}, ${
//         userDetails.address
//       } — Total £${cartTotal.toFixed(2)}?`,
//       options: ["Proceed to Pay", "Cancel"],
//     });
//   };

//   const handleFinalOption = (option) => {
//     addMessage({ from: "user", text: option });

//     if (option === "Proceed to Pay") {
//       addMessage({
//         from: "bot",
//         text: "💳 Click on the link to pay",
//       });
//       setStep("payment");
//     } else if (option === "Cancel") {
//       addMessage({
//         from: "bot",
//         text: "❌ Order cancelled. Hope to see you soon!",
//         options: ["Make Reservation", "Delivery", "View Menu", "Contact Us"],
//       });
//       setStep("start");
//     }
//   };

//   const handlePaymentClick = () => {
//     addMessage({
//       from: "bot",
//       text: "✅ Payment received! Your delicious order is on its way 🍕🚀",
//     });
//     setStep("done");
//   };

//   return (
//     <div className="flex justify-center items-center px-6 pt-0 pb-30">
//       <div className=" w-[400px] h-[640px] bg-white shadow-lg rounded-2xl flex flex-col">
//         <div className="bg-[#065E54] text-white p-4 rounded-t-2xl font-semibold">
//           🍕 Pizza Haven Chat
//         </div>

//         <div
//           className="flex-1 overflow-y-auto p-3 space-y-2 bg-[url('/whatsappbg.png')] bg-cover rounded-b-2xl"
//           ref={chatContainerRef}
//         >
//           {messages.map((msg, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               className={`flex ${
//                 msg.from === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`max-w-[75%] px-3 py-2 rounded-xl ${
//                   msg.from === "user"
//                     ? "bg-[#DCF8C6] text-black rounded-br-none"
//                     : "bg-white text-gray-900 rounded-bl-none"
//                 }`}
//               >
//                 <p>{msg.text}</p>

//                 {msg.options && (
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {msg.options.map((opt) => (
//                       <button
//                         key={opt}
//                         onClick={() =>
//                           step === "confirm"
//                             ? handleFinalOption(opt)
//                             : handleOption(opt)
//                         }
//                         className="bg-[#E5E5E5] text-[#075E54] px-3 py-2 rounded-xl text-xs font-medium hover:bg-[#D9FDD3] transition-all border border-gray-300"
//                       >
//                         {opt}
//                       </button>
//                     ))}
//                   </div>
//                 )}

//                 {msg.input === "name" && (
//                   <div className="mt-2">
//                     <input
//                       type="text"
//                       placeholder="Enter your name"
//                       className="w-full border rounded-lg px-2 py-1 text-sm"
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter" && e.target.value.trim()) {
//                           handleUserInput("name", e.target.value);
//                           addMessage({ from: "user", text: e.target.value });
//                           addMessage({
//                             from: "bot",
//                             text: "Type your full address (Apartment, Building, Area, Landmark etc.):",
//                             input: "address",
//                           });
//                         }
//                       }}
//                     />
//                   </div>
//                 )}

//                 {msg.input === "address" && (
//                   <div className="mt-2">
//                     <input
//                       type="text"
//                       placeholder="Enter your address"
//                       className="w-full border rounded-lg px-2 py-1 text-sm"
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter" && e.target.value.trim()) {
//                           handleUserInput("address", e.target.value);
//                           addMessage({ from: "user", text: e.target.value });
//                           handleAddressSubmit();
//                         }
//                       }}
//                     />
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           ))}

//           {/* Menu Section */}
//           {step === "menu" && (
//             <div className="mt-4 space-y-2">
//               {menuItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex justify-between items-center bg-white p-2 rounded-xl shadow-sm text-black"
//                 >
//                   <span>
//                     {item.name} - £{item.price}
//                   </span>
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => handleQuantity(item, "remove")}
//                       className="px-2 py-1 bg-gray-200 rounded-full"
//                     >
//                       -
//                     </button>
//                     <span>{cart[item.id]?.qty || 0}</span>
//                     <button
//                       onClick={() => handleQuantity(item, "add")}
//                       className="px-2 py-1 bg-green-500 text-white rounded-full"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               ))}

//               {Object.keys(cart).length > 0 && (
//                 <button
//                   onClick={handleAddToBag}
//                   className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg"
//                 >
//                   Add to Bag
//                 </button>
//               )}
//             </div>
//           )}

//           {/* Cart Section */}
//           {step === "cart" && (
//             <div className="mt-3 bg-green-50 p-3 rounded-xl shadow-inner text-black">
//               {Object.values(cart).map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex justify-between text-sm mb-1"
//                 >
//                   <span>
//                     {item.name} × {item.qty}
//                   </span>
//                   <span>£{(item.price * item.qty).toFixed(2)}</span>
//                 </div>
//               ))}
//               <p className="mt-2 font-semibold text-right">
//                 Total: £{cartTotal.toFixed(2)}
//               </p>
//               <div className="flex gap-2 mt-3">
//                 <button
//                   onClick={() => setStep("menu")}
//                   className="flex-1 bg-gray-200 py-2 rounded-lg"
//                 >
//                   Edit Order
//                 </button>
//                 <button
//                   onClick={handleProceedToCheckout}
//                   className="flex-1 bg-green-600 text-white py-2 rounded-lg"
//                 >
//                   Proceed to Checkout
//                 </button>
//               </div>
//             </div>
//           )}

//           {step === "payment" && (
//             <div
//               onClick={handlePaymentClick}
//               className="text-blue-600 underline cursor-pointer mt-3"
//             >
//               https://pizzahaven.paylink/demo
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotRestaurant() {
  const [step, setStep] = useState("start");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "🍽️ Welcome to Pizza Haven! How can we serve you today?",
      options: ["Make Reservation", "Delivery", "View Menu", "Contact Us"],
    },
  ]);
  const [cart, setCart] = useState({});
  const [userDetails, setUserDetails] = useState({ name: "", address: "" });
  const [openCategory, setOpenCategory] = useState(null);
  const chatContainerRef = useRef(null);
  const chatEndRef = useRef(null);

  const menuCategories = [
    {
      name: "Veg Pizzas",
      items: [
        {
          id: 1,
          name: "Margherita",
          price: 6.99,
          image: "/menu/margherita.jpg",
        },
        {
          id: 2,
          name: "Veggie Supreme",
          price: 7.49,
          image: "/menu/veggie.jpg",
        },
        {
          id: 3,
          name: "Cheese Burst",
          price: 8.99,
          image: "/menu/cheeseburst.jpg",
        },
      ],
    },
    {
      name: "Non-Veg Pizzas",
      items: [
        {
          id: 4,
          name: "Pepperoni",
          price: 7.99,
          image: "/menu/pepperoni.jpg",
        },
        {
          id: 5,
          name: "BBQ Chicken",
          price: 8.49,
          image: "/menu/bbqchicken.jpg",
        },
        {
          id: 6,
          name: "Meat Feast",
          price: 9.99,
          image: "/menu/meatfeast.jpg",
        },
      ],
    },
    {
      name: "Sides",
      items: [
        {
          id: 7,
          name: "Garlic Bread",
          price: 3.49,
          image: "/menu/garlicbread.jpg",
        },
        {
          id: 8,
          name: "Cheesy Fries",
          price: 3.99,
          image: "/menu/fries.jpg",
        },
      ],
    },
    {
      name: "Drinks",
      items: [
        { id: 9, name: "Coke", price: 1.49, image: "/menu/coke.jpg" },
        { id: 10, name: "Sprite", price: 1.49, image: "/menu/sprite.jpg" },
        { id: 11, name: "Water", price: 0.99, image: "/menu/water.jpg" },
      ],
    },
  ];

  // 🧩 Auto-scroll only when needed
  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;
    const isScrolledToBottom =
      container.scrollHeight - container.scrollTop <=
      container.clientHeight + 50;
    if (isScrolledToBottom) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const addMessage = (msg) => setMessages((prev) => [...prev, msg]);

  const handleOption = (option) => {
    addMessage({ from: "user", text: option });

    if (option === "Delivery" || option === "View Menu") {
      addMessage({
        from: "bot",
        text: "Here’s our delicious menu 🍕",
      });
      setStep("menuPreview");
    } else if (option === "Make Reservation") {
      addMessage({
        from: "bot",
        text: "🕒 Great! Please choose your reservation time:",
        options: ["6 PM", "7 PM", "8 PM"],
      });
    } else if (["6 PM", "7 PM", "8 PM"].includes(option)) {
      addMessage({
        from: "bot",
        text: `✅ Your table is booked for ${option}. See you soon!`,
      });
    } else if (option === "Contact Us") {
      addMessage({
        from: "bot",
        text: "📞 You can reach us at 0203 123 4567 or visit pizzahaven.co.uk",
      });
    }
  };

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

  const handleUserInput = (field, value) => {
    setUserDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddressSubmit = () => {
    setStep("confirm");
    addMessage({
      from: "bot",
      text: `Confirm order for ${userDetails.name}, ${
        userDetails.address
      } — Total £${cartTotal.toFixed(2)}?`,
      options: ["Proceed to Pay", "Cancel"],
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
        options: ["Make Reservation", "Delivery", "View Menu", "Contact Us"],
      });
      setStep("start");
    }
  };

  const handlePaymentClick = () => {
    addMessage({
      from: "bot",
      text: "✅ Payment received! Your delicious order is on its way 🍕🚀",
    });
    setStep("done");
  };

  return (
    <div className="flex justify-center items-center px-6 pt-0 pb-30">
      <div className="w-[400px] h-[640px] bg-white shadow-lg rounded-2xl flex flex-col">
        <div className="bg-[#065E54] text-white p-4 rounded-t-2xl font-semibold">
          🍕 Pizza Haven Chat
        </div>

        <div
          className="flex-1 overflow-y-auto scroll-smooth p-3 space-y-2 bg-[url('/whatsappbg.png')] bg-cover rounded-b-2xl text-black"
          ref={chatContainerRef}
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

                {msg.input === "name" && (
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border rounded-lg px-2 py-1 text-sm mt-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value.trim()) {
                        handleUserInput("name", e.target.value);
                        addMessage({ from: "user", text: e.target.value });
                        addMessage({
                          from: "bot",
                          text: "Type your full address:",
                          input: "address",
                        });
                      }
                    }}
                  />
                )}

                {msg.input === "address" && (
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="w-full border rounded-lg px-2 py-1 text-sm mt-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value.trim()) {
                        handleUserInput("address", e.target.value);
                        addMessage({ from: "user", text: e.target.value });
                        handleAddressSubmit();
                      }
                    }}
                  />
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
              {menuCategories.map((cat, idx) => (
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
                        className="px-4 pb-3 space-y-2"
                      >
                        {cat.items.map((item) => (
                          <div
                            key={item.id}
                            className="flex justify-between items-center bg-gray-50 p-2 rounded-lg"
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
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleQuantity(item, "remove")}
                                className="px-2 py-1 bg-gray-200 rounded-full"
                              >
                                −
                              </button>
                              <span className="text-black">
                                {cart[item.id]?.qty || 0}
                              </span>
                              <button
                                onClick={() => handleQuantity(item, "add")}
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
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}

          {step === "payment" && (
            <div
              onClick={handlePaymentClick}
              className="text-blue-600 underline cursor-pointer mt-3"
            >
              https://pizzahaven.paylink/demo
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
