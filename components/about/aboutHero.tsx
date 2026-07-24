"use client";

import { useEffect, useRef, useState } from "react";

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

const AboutHero = () => {
  const [ref, inView] = useInView(0.3);

  return (
    <section className="flex min-h-[80vh] items-start bg-gradient-to-b from-[#030B24] via-[#030B24] to-black/95">
          <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-12 md:pt-24 md:pb-20 lg:px-20">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E96A3]">
            About Us
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Built from experience.
            <br />
            Driven by reliable water.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
            Over three decades of field experience delivering dependable water
            infrastructure across Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
