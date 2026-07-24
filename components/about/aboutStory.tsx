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

const AboutStory = () => {
  const [ref, inView] = useInView(0.2);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div
          ref={ref}
          className={`grid gap-12 transition-all duration-700 lg:grid-cols-2 lg:gap-20 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E96A3]">
              Our Story
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              From a car wash in Egbeda to over 1,500 boreholes across Nigeria.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-500">
              Founded in 1990, Luketech Plumbing & Drilling Ltd. has grown from
              its beginnings in Egbeda, Lagos into an experienced water
              infrastructure company serving homes, estates, institutions,
              industries, and government projects across Nigeria.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Over more than three decades, we've built our reputation project
              by project — combining practical field experience, quality
              workmanship, and a commitment to seeing every job through.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-[#F7F8F6] p-6 text-center">
              <span className="text-4xl font-bold text-[#2E96A3] md:text-5xl">1990</span>
              <p className="mt-2 text-sm text-slate-500">Founded in Lagos</p>
            </div>
            <div className="rounded-2xl bg-[#F7F8F6] p-6 text-center">
              <span className="text-4xl font-bold text-[#2E96A3] md:text-5xl">1,500+</span>
              <p className="mt-2 text-sm text-slate-500">Boreholes completed</p>
            </div>
            <div className="rounded-2xl bg-[#F7F8F6] p-6 text-center">
              <span className="text-4xl font-bold text-[#2E96A3] md:text-5xl">10+</span>
              <p className="mt-2 text-sm text-slate-500">States covered</p>
            </div>
            <div className="rounded-2xl bg-[#F7F8F6] p-6 text-center">
              <span className="text-4xl font-bold text-[#2E96A3] md:text-5xl">36+</span>
              <p className="mt-2 text-sm text-slate-500">Years of service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
