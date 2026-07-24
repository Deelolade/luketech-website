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
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [elementRef, inView] as const;
}

const CTASection = () => {
  const [ctaRef, ctaInView] = useInView(0.3);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-20">
              {/* Blue CTA Card */}
              <div
                ref={ctaRef}
                className={`mx-auto max-w-6xl rounded-3xl bg-[#071426] px-6 py-12 text-center transition-all duration-700 md:px-16 md:py-20 ${
                      ctaInView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/*<p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E96A3]">
            Get Started
          </p>*/}

          <h2 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-6xl">
            Need a reliable water solution?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
            Whether you're planning a borehole for your home, estate, farm, business, or industrial facility, let's discuss your requirements.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="group flex items-center gap-3 bg-[#2E96A3] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#24808C]">
              Discuss Your Project
              <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>

            <Link href="/contact" className="group flex items-center gap-3 border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5">
              Call Us Now
              <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
