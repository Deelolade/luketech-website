"use client";

import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const herophrases = [
    "start with exploration.",
    "continue with drilling.",
    "flow through installation.",
    "last through maintenance.",
    "power homes.",
    "support businesses.",
    "serve communities.",
    "drive industries."
  ];

  const changePhrase = () => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % herophrases.length);
    }, 3000);
    return () => clearInterval(interval);
  };
  useEffect(changePhrase, [herophrases.length]);

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center px-6  bg-gradient-to-b from-[#030B24] via-[#030B24] to-black/95">
      <h1 className="max-w-6xl text-2xl  sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.25]">
        We go deeper to deliver reliable water solutions that <span key={currentPhrase} className="inline-block animate-[slideUp_0.5s_ease-out] text-blue-400">{herophrases[currentPhrase]}</span>
      </h1>
      <div className="mt-6 md:mt-10 flex w-full max-w-6xl flex-wrap items-center gap-6">
        <button className="group flex items-center gap-4 border border-white bg-transparent px-5 md:px-7 py-2 md:py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black">
          Discuss Your Project
          <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <button className="group flex items-center gap-3 font-medium text-white transition-colors duration-300 hover:text-blue-400">
          Explore Our Services
          <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

    </section>
  )
}
