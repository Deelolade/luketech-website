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

const CLIENTS = [
  "Homes & Residential Properties",
  "Schools & Institutions",
  "Communities & Estates",
  "Industries & Manufacturers",
  "Corporate Offices",
  "Religious Organisations",
  "Government Projects",
];

const AboutWhoWeServe = () => {
  const [ref, inView] = useInView(0.2);

  return (
    <section className="bg-[#F7F8F6]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E96A3]">
            Who We Serve
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Built for different water needs.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500">
            Luketech works across a wide range of environments and project types.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {CLIENTS.map((client) => (
              <span
                key={client}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeServe;
