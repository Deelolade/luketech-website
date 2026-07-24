"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong, FaPlus } from "react-icons/fa6";
import { useInView } from "@/hooks/useInView";

const FAQS = [
  {
    number: "01",
    question: "How do I know where to drill a borehole?",
    answer:
      "We recommend carrying out a professional geophysical survey before drilling to investigate subsurface conditions and identify the most suitable drilling location.",
  },
  {
    number: "02",
    question: "How deep can you drill a borehole?",
    answer:
      "Borehole depth varies by location and ground conditions. Our geophysical surveys help determine the optimal drilling depth for your site and water requirements.",
  },
  {
    number: "03",
    question: "How long does borehole drilling take?",
    answer:
      "The duration depends on the site, drilling depth, ground conditions, and project requirements. Our team will provide a clearer timeline after assessing your location.",
  },
  {
    number: "04",
    question: "What determines the cost of drilling?",
    answer:
      "The cost depends on factors such as drilling depth, ground conditions, casing materials, pump specifications, and site accessibility. We provide a detailed quotation based on your project's requirements.",
  },
  {
    number: "05",
    question: "Do you carry out geophysical surveys?",
    answer:
      "Yes. Our sister company, BGS, conducts Vertical Electrical Sounding (VES) surveys to investigate subsurface conditions and help determine suitable drilling locations before drilling begins.",
  },
  {
    number: "06",
    question: "Do you install water pumps?",
    answer:
      "Yes. We provide pump installation and testing as part of our water infrastructure services, helping ensure reliable water delivery from your completed borehole.",
  },
  {
    number: "07",
    question: "Do you provide maintenance after installation?",
    answer:
      "Yes. We offer ongoing maintenance packages to help keep your borehole and pump system operating reliably long after installation and handover.",
  },
  {
    number: "08",
    question: "Do you work outside Lagos?",
    answer:
      "Yes. Luketech has completed projects across multiple states in Nigeria and provides water infrastructure solutions for clients in different regions.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [sectionRef, sectionInView] = useInView(0.15);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div
        ref={sectionRef}
        className={`mx-auto max-w-7xl px-6 py-16 transition-all duration-700 md:px-12 md:py-20 lg:px-20 ${
          sectionInView
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: FAQ Intro */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E96A3]">
              Questions?
            </p>

            <h2 className="mt-4 max-w-md text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              We've got clear answers.
            </h2>

            <p className="mt-6 max-w-sm text-base leading-7 text-slate-500">
              From drilling depth and project costs to installation and
              maintenance, here's what you need to know before getting started.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 text-base font-semibold text-slate-900 transition-colors hover:text-[#2E96A3]"
            >
              Still have questions?
              <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>

          {/* Right: Questions */}
          <div className="divide-y divide-slate-100">
            {FAQS.map(({ number, question, answer }, index) => (
              <div key={index}>
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span className="shrink-0 font-mono text-sm text-slate-900">
                    {number}
                  </span>
                  <span className="flex-1 text-base font-medium text-slate-900 md:text-lg">
                    {question}
                  </span>
                  <span
                    className={`shrink-0 text-[#2E96A3] transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    <FaPlus className="text-lg" />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-base leading-relaxed text-slate-500">
                    {answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
