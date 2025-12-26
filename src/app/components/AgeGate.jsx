"use client";

import { useEffect, useState } from "react";
import AgeVerificationModal from "./AgeVerificationModal";

export default function AgeGate({ children }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("age_verified_egenieplus");
    if (!verified) {
      setShowModal(true);
    }
  }, []);

  // 🔒 Lock / unlock background scroll
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const handleConfirm = () => {
    localStorage.setItem("age_verified_egenieplus", "true");
    setShowModal(false);
  };

  return (
    <>
      {showModal && <AgeVerificationModal onConfirm={handleConfirm} />}
      {children}
    </>
  );
}
