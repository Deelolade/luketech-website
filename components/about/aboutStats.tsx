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
        if (entry.isIntersecting) { setInView(true); observer.unobserve(el); }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [elementRef, inView] as const;
}

const STATS = [
  { value: "1,500+", label: "Boreholes completed" },
  { value: "10+", label: "States across Nigeria" },
  { value: "36+", label: "Years of experience" },
  { value: "15+", label: "Active team members" },
];

const AboutStats = () => {
  const [ref, inView] = useInView(0.2);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div
          ref={ref}
          className={`grid gap-8 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-4 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl bg-[#F7F8F6] p-8 text-center"
            >
              <span className="text-4xl font-bold text-[#2E96A3] md:text-5xl">
                {value}
              </span>
              <p className="mt-3 text-sm font-medium text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
