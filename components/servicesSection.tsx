"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaMagnifyingGlassChart,
  FaGears,
  FaDroplet,
  FaWrench,
  FaArrowRightLong,
} from "react-icons/fa6";

const SERVICES = [
  {
    icon: FaMagnifyingGlassChart,
    number: "01",
    title: "Geophysical Survey",
    description:
      "We investigate subsurface conditions using Vertical Electrical Sounding (VES) to identify aquifer depth, thickness, and likely yield before drilling begins.",
    image: "/images/imageOne.jpeg",
  },
  {
    icon: FaGears,
    number: "02",
    title: "Borehole Drilling",
    description:
      "Our experienced field team drills to the recommended depth and specifications, adapting to actual underground conditions to deliver a properly constructed borehole.",
    image: "/images/imageTwo.jpeg",
  },
  {
    icon: FaDroplet,
    number: "03",
    title: "Pump Installation",
    description:
      "We install and test pump systems suited to the borehole's actual yield, ensuring reliable water delivery for homes, businesses, farms, and industrial facilities.",
    image: "/images/imageThree.jpeg",
  },
  {
    icon: FaWrench,
    number: "04",
    title: "Borehole Maintenance",
    description:
      "Our ongoing maintenance packages help keep your borehole and pump system performing reliably long after installation and handover.",
    image: "/images/imageFour.jpeg",
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
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

  return { ref, inView };
}

const ServicesSection = () => {
  const header = useInView(0.3);

  return (
    <section className="bg-[#F7F8F6]">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 lg:px-20">
        {/* Header */}
        <div
          ref={header.ref}
          className={`flex flex-col justify-between gap-8 transition-all duration-700 md:flex-row md:items-end ${
            header.inView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#2E96A3]">
              What We Do
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#071426] md:text-5xl lg:text-6xl">
              Water solutions built from the ground up.
            </h2>
          </div>
        </div>

        {/* Stacking Services */}
        <div className="mt-20 space-y-8">
          {SERVICES.map(
            ({ icon: Icon, number, title, description, image }, index) => (
              <ServiceCard
                key={title}
                index={index}
                Icon={Icon}
                number={number}
                title={title}
                description={description}
                image={image}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

function ServiceCard({
  index,
  Icon,
  number,
  title,
  description,
  image,
}: {
  index: number;
  Icon: React.ElementType;
  number: string;
  title: string;
  description: string;
  image: string;
}) {
  const { ref, inView } = useInView(0.15);

  return (
    <article
      ref={ref}
      className={`sticky overflow-hidden rounded-3xl bg-[#071426] shadow-2xl transition-all duration-700 ${
        inView
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-16 scale-[0.97] opacity-0"
      }`}
      style={{
        top: `${100 + index * 30}px`,
      }}
    >
      <div className="grid min-h-[520px] lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-[400px] lg:min-h-[520px]">
          <Image
            fill
            src={image}
            alt={title}
            className="object-cover"
            priority={index === 0}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-8 text-white md:p-12 lg:p-16">
          {/* Top */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-white/40">{number}</span>

            <div
              className={`rounded-lg bg-[#2E96A3]/20 p-3 transition-all duration-500 ${
                inView ? "scale-100" : "scale-0"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <Icon className="text-2xl text-[#2E96A3]" />
            </div>
          </div>

          {/* Main Content */}
          <div className="mt-20">
            <h3
              className={`text-3xl font-semibold tracking-tight transition-all duration-500 md:text-5xl ${
                inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {title}
            </h3>

            <p
              className={`mt-5 max-w-lg text-base leading-7 text-white/60 transition-all duration-500 ${
                inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${350 + index * 100}ms` }}
            >
              {description}
            </p>

            <div
              className={`mt-8 flex items-center gap-3 text-sm font-medium text-white transition-all duration-500 ${
                inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <span>Learn more</span>
              <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ServicesSection;
