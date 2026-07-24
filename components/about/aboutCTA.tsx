"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function useInView(threshold = 0.3) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); observer.unobserve(el); }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [elementRef, inView] as const;
}

const AboutCTA = () => {
  const [ref, inView] = useInView(0.3);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div
          ref={ref}
          className={`mx-auto max-w-6xl rounded-3xl bg-[#071426] px-6 py-12 text-center transition-all duration-700 md:px-16 md:py-20 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E96A3]">
            Let's Work Together
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-5xl">
            Discuss Your Project
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/50">
            Tell us about your water needs and we'll provide a free consultation
            and quote.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 bg-[#2E96A3] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#24808C]"
          >
            Get Started
            <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
