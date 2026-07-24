"use client";

import { useInView } from "@/hooks/useInView";

const TIMELINE = [
  {
    label: "1990",
    title: "The Beginning",
    description:
      "Luketech begins operations with its first project in Egbeda, Lagos.",
  },
  {
    label: "",
    title: "Growth",
    subtitle: "Expanding Our Work",
    description:
      "The company grows its capabilities across plumbing, borehole drilling, water supply, and related services.",
  },
  {
    label: "",
    title: "Expanding Across Nigeria",
    description:
      "Projects extend across more than 10 states, serving residential, commercial, industrial, institutional, and government clients.",
  },
  {
    label: "Today",
    title: "1,500+ Boreholes",
    description:
      "After more than three decades in the field, Luketech continues to deliver water infrastructure projects across Nigeria.",
  },
];

const AboutTimeline = () => {
  const [ref, inView] = useInView(0.15);

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
            Our Journey
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            More than three decades in the field.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            From our beginnings in Egbeda, Lagos, Luketech has grown into an
            experienced water infrastructure company serving residential,
            commercial, industrial, institutional, and government clients across
            Nigeria.
          </p>

          <div className="mt-14">
            {TIMELINE.map(({ label, title, subtitle, description }, index) => (
              <div
                key={title}
                className="grid gap-4 border-l-2 border-[#2E96A3]/30 pb-10 pl-6 last:border-transparent last:pb-0 md:grid-cols-[140px_1fr] md:gap-10 md:pl-8"
              >
                <span className="text-xl font-bold text-[#2E96A3]">
                  {label}
                </span>
                <div>
                  {subtitle && (
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2E96A3]">
                      {subtitle}
                    </p>
                  )}
                  <h3 className="text-xl font-semibold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-500">
                    {description}
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

export default AboutTimeline;
