"use client";

import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.me/2348023431553"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl text-white" />
    </a>
  );
};

export default WhatsAppFAB;
