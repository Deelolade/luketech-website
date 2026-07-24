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

const PRINCIPLES = [
  {
    title: "Quality Above All Else",
    description:
      "We do not compromise on materials, workmanship, or the standard required to deliver a project properly. If a project cannot be executed to the right standard, we would rather be honest about what is possible than cut corners.",
  },
  {
    title: "Client Peace of Mind",
    description:
      "Our responsibility does not end when the drilling is complete. We work to ensure our clients have confidence in the systems we deliver and that challenges are addressed rather than left unresolved.",
  },
  {
    title: "Experience That Matters",
    description:
      "More than 36 years in the field have taught us that every site is different. We bring practical experience and a hands-on approach to each project, adapting our work to the conditions and requirements of the site.",
  },
  {
    title: "A Reputation Earned Over Time",
    description:
      "Every project contributes to our reputation. From our earliest work in Egbeda to projects for major industrial and government clients, we understand that trust is earned through consistent work, project after project.",
  },
];

const AboutPrinciples = () => {
  const [ref, inView] = useInView(0.15);

  return (
    <section className="bg-[#071426] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E96A3]">
            What We Believe
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            The principles behind every project we take on.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/50">
            For more than three decades, our reputation has been built on the
            quality of our work and the trust of our clients. These principles
            guide how we approach every project, from the first conversation to
            the final handover.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PRINCIPLES.map(({ title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/[0.07]"
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPrinciples;
