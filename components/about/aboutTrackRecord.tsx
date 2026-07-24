"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";

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

const PROJECTS = [
  {
    title: "Dangote Refinery",
    location: "Lagos",
    description: "150m deep production borehole",
  },
  {
    title: "Chivita Beverages",
    location: "Isolo, Lagos",
    description: "Industrial water borehole",
  },
  {
    title: "CWay Beverages",
    location: "Isolo, Lagos",
    description: "Industrial water supply borehole",
  },
  {
    title: "Lagos State Government",
    location: "Golf Club, Lekki",
    description: "A landmark project in the company's history",
  },
  {
    title: "250m Borehole Project",
    location: "Lagos",
    description: "One of the deepest projects in the company's history",
  },
];

const AboutTrackRecord = () => {
  const [ref, inView] = useInView(0.15);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E96A3]">
            Track Record
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            A track record built in the field.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500">
            More than 1,500 boreholes. Projects across 10+ states. Three decades
            of practical experience.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map(({ title, location, description }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 p-6 transition-colors hover:border-[#2E96A3]/30"
              >
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-400">
                  <FaLocationDot className="text-xs" />
                  {location}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/projects"
            className="group mt-8 inline-flex items-center gap-3 text-base font-semibold text-slate-900 transition-colors hover:text-[#2E96A3]"
          >
            View Our Projects
            <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutTrackRecord;
