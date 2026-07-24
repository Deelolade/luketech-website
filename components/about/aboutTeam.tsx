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

const AboutTeam = () => {
  const [ref, inView] = useInView(0.2);

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
            Our Team
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            The people behind the work.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500">
            Our work is delivered by a hands-on team of field drillers,
            technicians, plumbing operatives, and administrative staff who bring
            practical experience to every project.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-[#F7F8F6] p-6 text-center">
              <span className="text-3xl font-bold text-[#2E96A3]">15+</span>
              <p className="mt-2 text-sm text-slate-500">
                Active team members supporting projects from site assessment
                through completion.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">
                Mr Kayode Suleman
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Lead Technician
              </p>
              <p className="mt-2 text-xs text-slate-400">7+ years with Luketech</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">
                Mr Adeboye Idowu
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Senior Field Technician
              </p>
              <p className="mt-2 text-xs text-slate-400">3+ years with Luketech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
