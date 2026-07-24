"use client";

import { useInView } from "@/hooks/useInView";

const AboutAffiliations = () => {
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
            Affiliations & Registration
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Professionally recognised.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Professional Association
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                Association of Water Drilling and Related Occupations
                Practitioners (AWDROP) — Ogun State Chapter
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Legal Adviser
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                Temidlaw Chambers
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Company Registration
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                Corporate Affairs Commission (CAC) — RC 9606410
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAffiliations;
