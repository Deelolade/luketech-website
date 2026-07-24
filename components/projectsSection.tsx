"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaLocationDot,
} from "react-icons/fa6";

const PROJECTS = [
  {
    number: "01",
    title: "Industrial Borehole",
    type: "Industrial",
    location: "Alimosho, Lagos",
    image: "/images/imageOne.jpeg",
  },
  {
    number: "02",
    title: "Estate Water Scheme",
    type: "Residential Estate",
    location: "Lekki, Lagos",
    image: "/images/imageTwo.jpeg",
  },
  {
    number: "03",
    title: "Farm Irrigation System",
    type: "Agricultural",
    location: "Abeokuta, Ogun State",
    image: "/images/imageThree.jpeg",
  },
  {
    number: "04",
    title: "Commercial Borehole",
    type: "Commercial",
    location: "Ikeja, Lagos",
    image: "/images/imageFour.jpeg",
  },
  {
    number: "05",
    title: "Community Water Project",
    type: "Community",
    location: "Ibadan, Oyo State",
    image: "/images/imageFive.jpeg",
  },
  {
    number: "06",
    title: "Factory Water Supply",
    type: "Industrial",
    location: "Agbara, Ogun State",
    image: "/images/imageSix.jpeg",
  },
  {
    number: "07",
    title: "School Borehole System",
    type: "Institutional",
    location: "Surulere, Lagos",
    image: "/images/imageSeven.jpeg",
  },
];

const LOCATIONS = [
  "Lagos",
  "Ogun",
  "Oyo",
  "Kwara",
  "Osun",
  "Ondo",
  "Ekiti",
  "Delta",
  "Edo",
  "Rivers",
];

function useInView(threshold = 0.15) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(element);
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [elementRef, inView] as const;
}

const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const [headerRef, headerInView] = useInView(0.3);
  const [coverageRef, coverageInView] = useInView(0.3);

  const project = PROJECTS[current];

  const changeProject = (index: number) => {
    if (isChanging) return;

    setIsChanging(true);
    setCurrent(index);

    setTimeout(() => {
      setIsChanging(false);
    }, 500);
  };

  const previousProject = () => {
    const previous = current === 0 ? PROJECTS.length - 1 : current - 1;

    changeProject(previous);
  };

  const nextProject = () => {
    const next = current === PROJECTS.length - 1 ? 0 : current + 1;

    changeProject(next);
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    previousProject();
  };

  const handleNext = () => {
    nextProject();
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-20 lg:px-20">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col justify-between gap-8 border-b border-slate-200 pb-12 transition-all duration-700 md:flex-row md:items-end ${
            headerInView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#2E96A3]">
              Selected Projects
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#071426] md:text-5xl lg:text-6xl">
              Work that stands the test of time.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-slate-600 md:text-lg">
            A look at some of the water infrastructure projects we've delivered
            across homes, businesses, farms, and industrial facilities.
          </p>
        </div>

        {/* Project Slider */}
        <div className="mt-14 md:mt-20">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-200 md:aspect-[16/8]">
            <Image
              key={project.image}
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              priority={current === 0}
              className={`object-cover transition-all duration-500 ${
                isChanging ? "scale-[1.02] opacity-70" : "scale-100 opacity-100"
              }`}
            />

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Project Number */}
            <div className="absolute left-6 top-6 md:left-8 md:top-8">
              <span className="font-mono text-sm text-white/80">
                {project.number}
              </span>

              <span className="mx-2 text-white/30">/</span>

              <span className="font-mono text-sm text-white/40">
                {String(PROJECTS.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Project Information */}
          <div className="flex flex-col gap-8 py-4 md:flex-row md:items-end md:justify-between">
            <div>
              {/* Type + Location */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <span className="font-semibold uppercase tracking-[0.15em] text-[#2E96A3]">
                  {project.type}
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

                <span className="flex items-center gap-2 text-slate-500">
                  <FaLocationDot className="text-xs" />
                  {project.location}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#071426] md:text-4xl">
                {project.title}
              </h3>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={isChanging}
                aria-label="Previous project"
                className="flex h-12 w-12 items-center justify-center border border-slate-200 text-[#071426] transition-all duration-300 hover:border-[#2E96A3] hover:bg-[#2E96A3] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FaArrowLeftLong />
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={isChanging}
                aria-label="Next project"
                className="flex h-12 w-12 items-center justify-center border border-slate-200 text-[#071426] transition-all duration-300 hover:border-[#2E96A3] hover:bg-[#2E96A3] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FaArrowRightLong />
              </button>
            </div>
          </div>

          {/* Project Progress */}
          <div className="mt-6 flex gap-2">
            {PROJECTS.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => changeProject(index)}
                aria-label={`View project ${index + 1}`}
                className="group h-1 flex-1 bg-slate-200"
              >
                <span
                  className={`block h-full transition-all duration-300 ${
                    current === index
                      ? "bg-[#2E96A3]"
                      : "bg-transparent group-hover:bg-slate-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Coverage */}
        <div
          ref={coverageRef}
          className={`mt-8 flex flex-col gap-6  pt-8 transition-all duration-700 md:mt-20 md:flex-row md:items-center md:justify-between ${
            coverageInView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2E96A3]">
              Our Reach
            </p>

            <p className="mt-2 text-base text-slate-500">
              Operating across 10+ states in Nigeria.
            </p>
          </div>

          <div className="flex max-w-3xl flex-wrap gap-x-5 gap-y-2">
            {LOCATIONS.map((location, index) => (
              <span
                key={location}
                className="text-sm font-medium text-slate-400"
              >
                {location}
                {index !== LOCATIONS.length - 1 && (
                  <span className="ml-5 text-slate-200">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
