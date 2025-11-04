// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function GroceryStoreChat() {
//   const [step, setStep] = useState("start");
//   const [messages, setMessages] = useState([
//     {
//       from: "bot",
//       text: "👋 Welcome to FreshMart! What would you like to do today?",
//       options: ["Delivery", "View Menu", "Contact Us"],
//     },
//   ]);
//   const [cart, setCart] = useState({});
//   const [userDetails, setUserDetails] = useState({ name: "", address: "" });
//   const [openCategory, setOpenCategory] = useState(null);
//   const chatContainerRef = useRef(null);
//   const chatEndRef = useRef(null);

//   const menuCategories = [
//     {
//       name: "Tea & Coffee",
//       items: [
//         {
//           id: 1,
//           name: "Tata Tea Gold (500g)",
//           price: 4.99,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 2,
//           name: "Nescafé Classic (200g)",
//           price: 6.49,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 3,
//           name: "Bru Instant Coffee (100g)",
//           price: 3.99,
//           image: "/coffee1.webp",
//         },
//       ],
//     },
//     {
//       name: "Juice & Squash",
//       items: [
//         {
//           id: 4,
//           name: "Tropicana Orange (1L)",
//           price: 2.99,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 5,
//           name: "Real Mixed Fruit Juice (1L)",
//           price: 2.49,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 6,
//           name: "Kissan Mango Squash (750ml)",
//           price: 3.29,
//           image: "/coffee1.webp",
//         },
//       ],
//     },
//     {
//       name: "Milk & Dairy",
//       items: [
//         {
//           id: 7,
//           name: "Amul Toned Milk (1L)",
//           price: 1.49,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 8,
//           name: "Amul Butter (500g)",
//           price: 3.99,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 9,
//           name: "Mother Dairy Curd (400g)",
//           price: 1.99,
//           image: "/coffee1.webp",
//         },
//       ],
//     },
//     {
//       name: "Quick Meals",
//       items: [
//         {
//           id: 10,
//           name: "Maggi Noodles (4 Pack)",
//           price: 2.99,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 11,
//           name: "Kissan Tomato Ketchup (1kg)",
//           price: 3.49,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 12,
//           name: "Ready-to-Eat Dal Makhani",
//           price: 4.49,
//           image: "/coffee1.webp",
//         },
//       ],
//     },
//     {
//       name: "Energy Drinks",
//       items: [
//         {
//           id: 13,
//           name: "Red Bull (250ml)",
//           price: 2.29,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 14,
//           name: "Monster Energy (500ml)",
//           price: 2.99,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 15,
//           name: "Gatorade Orange (500ml)",
//           price: 1.99,
//           image: "/coffee1.webp",
//         },
//       ],
//     },
//     {
//       name: "Desserts & Ice Creams",
//       items: [
//         {
//           id: 16,
//           name: "Amul Vanilla Ice Cream (1L)",
//           price: 3.99,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 17,
//           name: "Kwality Walls Cornetto",
//           price: 1.99,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 18,
//           name: "Hershey’s Chocolate Syrup (650g)",
//           price: 4.29,
//           image: "/coffee1.webp",
//         },
//       ],
//     },
//     {
//       name: "Beer & Ales",
//       items: [
//         {
//           id: 19,
//           name: "Kingfisher Premium (650ml)",
//           price: 2.49,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 20,
//           name: "Budweiser (500ml)",
//           price: 2.99,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 21,
//           name: "Heineken (330ml)",
//           price: 2.79,
//           image: "/coffee1.webp",
//         },
//       ],
//     },
//     {
//       name: "Wines & Spirits",
//       items: [
//         {
//           id: 22,
//           name: "Sula Red Wine (750ml)",
//           price: 11.99,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 23,
//           name: "Old Monk Rum (750ml)",
//           price: 8.99,
//           image: "/coffee1.webp",
//         },
//         {
//           id: 24,
//           name: "Smirnoff Vodka (1L)",
//           price: 13.99,
//           image: "/coffee1.webp",
//         },
//       ],
//     },
//   ];

//   // Auto-scroll
//   useEffect(() => {
//     const container = chatContainerRef.current;
//     if (!container) return;
//     const isScrolledToBottom =
//       container.scrollHeight - container.scrollTop <=
//       container.clientHeight + 50;
//     if (isScrolledToBottom) {
//       chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   const addMessage = (msg) => setMessages((prev) => [...prev, msg]);

//   const handleOption = (option) => {
//     addMessage({ from: "user", text: option });

//     if (option === "Delivery" || option === "View Menu") {
//       addMessage({
//         from: "bot",
//         text: "🛒 Here’s our wide range of grocery categories:",
//       });
//       setStep("menuPreview");
//     } else if (option === "Contact Us") {
//       addMessage({
//         from: "bot",
//         text: "📞 You can reach us at +91 98765 43210 or visit freshmart.in",
//       });
//     }
//   };

//   const handleViewItems = () => {
//     setStep("menu");
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

//   const handleUserInput = (field, value) =>
//     setUserDetails((prev) => ({ ...prev, [field]: value }));

//   const handleAddressSubmit = () => {
//     setStep("confirm");
//     addMessage({
//       from: "bot",
//       text: `Confirm order for ${userDetails.name}, ${
//         userDetails.address
//       } — Total ₹${cartTotal.toFixed(2)}?`,
//       options: ["Proceed to Pay", "Cancel"],
//     });
//   };

//   const handleFinalOption = (option) => {
//     addMessage({ from: "user", text: option });
//     if (option === "Proceed to Pay") {
//       addMessage({
//         from: "bot",
//         text: "💳 Click on the link below to complete your payment.",
//       });
//       setStep("payment");
//     } else {
//       addMessage({
//         from: "bot",
//         text: "❌ Order cancelled. Hope to serve you again soon!",
//         options: ["Delivery", "View Menu", "Contact Us"],
//       });
//       setStep("start");
//     }
//   };

//   const handlePaymentClick = () => {
//     addMessage({
//       from: "bot",
//       text: "✅ Payment received! Your groceries will be delivered shortly 🚚🛒",
//     });
//     setStep("done");
//   };

//   return (
//     <div className="flex justify-center items-center ">
//       <div className=" w-[400px] h-[640px] bg-white shadow-lg rounded-2xl flex flex-col ">
//         <div className="bg-[#065E54] text-white p-4 rounded-t-2xl font-semibold">
//           🛒 FreshMart Chat
//         </div>

//         <div
//           ref={chatContainerRef}
//           className="flex-1 overflow-y-auto scroll-smooth p-3 space-y-2 bg-[url('/whatsappbg.png')] bg-cover rounded-b-2xl text-black"
//         >
//           {messages.map((msg, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               className={`flex ${
//                 msg.from === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`max-w-[75%] py-2 rounded-xl ${
//                   msg.from === "user"
//                     ? "bg-[#DCF8C6] text-black rounded-br-none"
//                     : "bg-white text-gray-900 rounded-bl-none"
//                 }`}
//               >
//                 <p className="px-3">{msg.text}</p>

//                 {msg.options && (
//                   <div className="flex flex-col mt-3">
//                     {msg.options.map((opt) => (
//                       <button
//                         key={opt}
//                         onClick={() =>
//                           step === "confirm"
//                             ? handleFinalOption(opt)
//                             : handleOption(opt)
//                         }
//                         className="bg-white text-[#075E54] px-3 py-2 text-xs font-medium border-t border-gray-300"
//                       >
//                         {opt}
//                       </button>
//                     ))}
//                   </div>
//                 )}

//                 {msg.input === "name" && (
//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     className="w-full border rounded-lg px-2 py-1 text-sm mt-2"
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter" && e.target.value.trim()) {
//                         handleUserInput("name", e.target.value);
//                         addMessage({ from: "user", text: e.target.value });
//                         addMessage({
//                           from: "bot",
//                           text: "Please type your delivery address:",
//                           input: "address",
//                         });
//                       }
//                     }}
//                   />
//                 )}

//                 {msg.input === "address" && (
//                   <input
//                     type="text"
//                     placeholder="Enter your address"
//                     className="w-full border rounded-lg px-2 py-1 text-sm mt-2"
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter" && e.target.value.trim()) {
//                         handleUserInput("address", e.target.value);
//                         addMessage({ from: "user", text: e.target.value });
//                         handleAddressSubmit();
//                       }
//                     }}
//                   />
//                 )}
//               </div>
//             </motion.div>
//           ))}

//           {/* Menu Preview */}
//           {step === "menuPreview" && (
//             <div className="flex flex-col items-start mt-3 text-black">
//               <img
//                 src="/order-steps.png"
//                 alt="Menu Preview"
//                 className="w-full h-full object-cover rounded-xl"
//               />
//               <button
//                 onClick={handleViewItems}
//                 className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg"
//               >
//                 View Items
//               </button>
//             </div>
//           )}

//           {/* Accordion Menu */}
//           {step === "menu" && (
//             <div className="mt-4 space-y-3">
//               {menuCategories.map((cat, idx) => (
//                 <div key={idx} className="bg-white rounded-xl shadow">
//                   <button
//                     onClick={() =>
//                       setOpenCategory(openCategory === idx ? null : idx)
//                     }
//                     className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center text-black"
//                   >
//                     {cat.name}
//                     <span>{openCategory === idx ? "−" : "+"}</span>
//                   </button>

//                   <AnimatePresence>
//                     {openCategory === idx && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         className="px-4 pb-3 space-y-2"
//                       >
//                         {cat.items.map((item) => (
//                           <div
//                             key={item.id}
//                             className="flex justify-between items-center bg-gray-50 p-2 rounded-lg"
//                           >
//                             <div className="flex items-center gap-3">
//                               <img
//                                 src={item.image}
//                                 alt={item.name}
//                                 className="w-12 h-12 rounded-md object-cover"
//                               />
//                               <div>
//                                 <p className="font-medium text-black">
//                                   {item.name}
//                                 </p>
//                                 <p className="text-sm text-gray-600">
//                                   ₹{item.price}
//                                 </p>
//                               </div>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               <button
//                                 onClick={() => handleQuantity(item, "remove")}
//                                 className="px-2 py-1 bg-gray-200 rounded-full"
//                               >
//                                 −
//                               </button>
//                               <span className="text-black">
//                                 {cart[item.id]?.qty || 0}
//                               </span>
//                               <button
//                                 onClick={() => handleQuantity(item, "add")}
//                                 className="px-2 py-1 bg-green-500 text-white rounded-full"
//                               >
//                                 +
//                               </button>
//                             </div>
//                           </div>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
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

//           {/* Cart */}
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
//                   <span>₹{(item.price * item.qty).toFixed(2)}</span>
//                 </div>
//               ))}
//               <p className="mt-2 font-semibold text-right">
//                 Total: ₹{cartTotal.toFixed(2)}
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
//               https://freshmart.paylink/demo
//             </div>
//           )}

//           <div ref={chatEndRef} />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import phoneMockup from "../../../public/phone-mockup3.png";

export default function GroceryStoreChat() {
  const [step, setStep] = useState("start");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Welcome to FreshMart! What would you like to do today?",
      options: ["Delivery", "View Menu", "Contact Us"],
    },
  ]);
  const [cart, setCart] = useState({});
  const [userDetails, setUserDetails] = useState({ name: "", address: "" });
  const [openCategory, setOpenCategory] = useState(null);
  const chatContainerRef = useRef(null);
  const chatEndRef = useRef(null);

  const menuCategories = [
    {
      name: "Tea & Coffee",
      items: [
        {
          id: 1,
          name: "Tata Tea Gold (500g)",
          price: 4.99,
          image: "/coffee1.webp",
        },
        {
          id: 2,
          name: "Nescafé Classic (200g)",
          price: 6.49,
          image: "/coffee1.webp",
        },
        {
          id: 3,
          name: "Bru Instant Coffee (100g)",
          price: 3.99,
          image: "/coffee1.webp",
        },
      ],
    },
    {
      name: "Juice & Squash",
      items: [
        {
          id: 4,
          name: "Tropicana Orange (1L)",
          price: 2.99,
          image: "/coffee1.webp",
        },
        {
          id: 5,
          name: "Real Mixed Fruit Juice (1L)",
          price: 2.49,
          image: "/coffee1.webp",
        },
        {
          id: 6,
          name: "Kissan Mango Squash (750ml)",
          price: 3.29,
          image: "/coffee1.webp",
        },
      ],
    },
    {
      name: "Milk & Dairy",
      items: [
        {
          id: 7,
          name: "Amul Toned Milk (1L)",
          price: 1.49,
          image: "/coffee1.webp",
        },
        {
          id: 8,
          name: "Amul Butter (500g)",
          price: 3.99,
          image: "/coffee1.webp",
        },
        {
          id: 9,
          name: "Mother Dairy Curd (400g)",
          price: 1.99,
          image: "/coffee1.webp",
        },
      ],
    },
    {
      name: "Quick Meals",
      items: [
        {
          id: 10,
          name: "Maggi Noodles (4 Pack)",
          price: 2.99,
          image: "/coffee1.webp",
        },
        {
          id: 11,
          name: "Kissan Tomato Ketchup (1kg)",
          price: 3.49,
          image: "/coffee1.webp",
        },
        {
          id: 12,
          name: "Ready-to-Eat Dal Makhani",
          price: 4.49,
          image: "/coffee1.webp",
        },
      ],
    },
    {
      name: "Energy Drinks",
      items: [
        {
          id: 13,
          name: "Red Bull (250ml)",
          price: 2.29,
          image: "/coffee1.webp",
        },
        {
          id: 14,
          name: "Monster Energy (500ml)",
          price: 2.99,
          image: "/coffee1.webp",
        },
        {
          id: 15,
          name: "Gatorade Orange (500ml)",
          price: 1.99,
          image: "/coffee1.webp",
        },
      ],
    },
    {
      name: "Desserts & Ice Creams",
      items: [
        {
          id: 16,
          name: "Amul Vanilla Ice Cream (1L)",
          price: 3.99,
          image: "/coffee1.webp",
        },
        {
          id: 17,
          name: "Kwality Walls Cornetto",
          price: 1.99,
          image: "/coffee1.webp",
        },
        {
          id: 18,
          name: "Hershey’s Chocolate Syrup (650g)",
          price: 4.29,
          image: "/coffee1.webp",
        },
      ],
    },
    {
      name: "Beer & Ales",
      items: [
        {
          id: 19,
          name: "Kingfisher Premium (650ml)",
          price: 2.49,
          image: "/coffee1.webp",
        },
        {
          id: 20,
          name: "Budweiser (500ml)",
          price: 2.99,
          image: "/coffee1.webp",
        },
        {
          id: 21,
          name: "Heineken (330ml)",
          price: 2.79,
          image: "/coffee1.webp",
        },
      ],
    },
    {
      name: "Wines & Spirits",
      items: [
        {
          id: 22,
          name: "Sula Red Wine (750ml)",
          price: 11.99,
          image: "/coffee1.webp",
        },
        {
          id: 23,
          name: "Old Monk Rum (750ml)",
          price: 8.99,
          image: "/coffee1.webp",
        },
        {
          id: 24,
          name: "Smirnoff Vodka (1L)",
          price: 13.99,
          image: "/coffee1.webp",
        },
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
      {/* PHONE FRAME CONTAINER */}
      <div className="relative w-[260px] md:w-[400px] aspect-[9/19]">
        {/* WhatsApp chat inside phone */}
        <div className="absolute top-[46px] h-[83%] rounded-[26px] lg:top-[71px] left-[7.72%] w-[84.5%] lg:h-[83.2%] lg:rounded-[35px] overflow-hidden bg-[#ECE5DD] shadow-inner z-20">
          <div className="h-full bg-white shadow-lg rounded-2xl flex flex-col">
            <div className="bg-[#065E54] text-white p-4 rounded-t-2xl font-semibold">
              🛒 FreshMart Chat
            </div>

            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto scroll-smooth p-3 space-y-2 bg-[url('/whatsappbg.png')] bg-cover rounded-b-2xl text-black"
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
                        className="w-[90%] border rounded-lg px-2 py-1 text-sm mt-2 ms-3"
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
                        className="w-[90%] border rounded-lg px-2 py-1 text-sm mt-2 ms-3"
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
                  className="text-blue-600 underline cursor-pointer mt-3"
                >
                  https://pizzahaven.paylink/demo
                </div>
              )}
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
