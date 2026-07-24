"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const AboutFounder = () => {
  const [ref, inView] = useInView(0.2);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div
          ref={ref}
          className={`grid gap-12 transition-all duration-700 lg:grid-cols-2 lg:items-center lg:gap-20 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Photo */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="/images/imageTwo.jpeg"
              alt="Luketech founder"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>

          {/* Message */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E96A3]">
              A Message from the Founder
            </p>
            <div className="relative mt-10">
              {/* Founder Quote */}
              <div className="relative">
                {/* Opening quote */}
                <span
                  aria-hidden="true"
                  className="absolute -left-2 -top-8 font-serif text-8xl leading-none text-[#2E96A3]/80"
                >
                  &ldquo;
                </span>

                <blockquote className="m-0 px-6 text-lg italic leading-relaxed text-slate-600 md:text-xl">
                  We exist to bring peace to our clients. From the very first job — a
                  carwash in Egbeda, Lagos — to the deepest borehole I have ever drilled at
                  Dangote Refinery, every project has been built on one foundation: do not
                  leave a site until the client is happy, no matter what the challenge may
                  be. Our reputation speaks for itself, and we intend to keep it that way.
                </blockquote>

                {/* Closing quote */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-20 right-0 -mb-2 font-serif text-8xl leading-none text-[#2E96A3]/80"
                >
                  &rdquo;
                </span>
              </div>
            </div>
            <p className="mt-6 text-base font-semibold text-slate-900">
              &mdash; Mr Rafiu Lukumon Adio
            </p>
            <p className="text-sm text-slate-500">Founder & Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
