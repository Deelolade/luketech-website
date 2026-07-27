"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { useInView } from "@/hooks/useInView";

const PROJECTS = [
  {
    slug: "dangote-refinery",
    title: "Dangote Refinery",
    type: "Borehole Drilling",
    location: "Lekki Free Zone, Lagos",
    description:
      "150-metre deep production borehole drilled to supply water for one of Africa's largest industrial complexes.",
    image: "/images/imageOne.jpeg",
  },
  {
    slug: "chivita-beverages",
    title: "Chivita Beverages",
    type: "Borehole Drilling",
    location: "Isolo, Lagos",
    description:
      "Industrial water supply borehole for a major beverage manufacturer, designed for high-volume production demands.",
    image: "/images/imageTwo.jpeg",
  },
  {
    slug: "cway-beverages",
    title: "CWay Beverages",
    type: "Borehole Drilling",
    location: "Isolo, Lagos",
    description:
      "Industrial-grade water supply borehole for a leading water and beverage company.",
    image: "/images/imageThree.jpeg",
  },
  {
    slug: "lagos-golf-club",
    title: "Lagos Golf Club",
    type: "Government Project",
    location: "Golf Club, Lekki",
    description:
      "Landmark government water infrastructure project for a major recreational facility.",
    image: "/images/imageFour.jpeg",
  },
  {
    slug: "estate-water-scheme",
    title: "Estate Water Scheme",
    type: "Pump Installation",
    location: "Lekki, Lagos",
    description:
      "Complete water scheme for a residential estate — borehole, pump system, and distribution infrastructure.",
    image: "/images/imageFive.jpeg",
  },
  {
    slug: "school-borehole",
    title: "School Borehole System",
    type: "Borehole Drilling",
    location: "Surulere, Lagos",
    description:
      "Reliable water borehole system for an educational facility, ensuring uninterrupted water supply.",
    image: "/images/imageSix.jpeg",
  },
  {
    slug: "community-water-project",
    title: "Community Water Project",
    type: "Borehole Maintenance",
    location: "Abeokuta, Ogun State",
    description:
      "Community water infrastructure providing clean, reliable access to a growing residential area.",
    image: "/images/imageSeven.jpeg",
  },
];

const FILTERS = ["All", "Borehole Drilling", "Pump Installation", "Government Project", "Borehole Maintenance"] as const;

type Filter = (typeof FILTERS)[number];

export default function ProjectsPage() {
  const [heroRef, heroInView] = useInView(0.3);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === activeFilter);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#030B24]">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-24 md:px-12 md:pb-16 md:pt-28 lg:px-20">
          <div
            ref={heroRef}
            className={`mx-auto max-w-xl text-center transition-all duration-700 ${
              heroInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E96A3]">
              Our Projects
            </p>
            <h1 className="mt-4 text-lg font-medium leading-relaxed text-white/70 md:text-xl">
              Explore our completed borehole drilling, water infrastructure,
              and pump projects.
            </h1>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="mr-2 shrink-0 text-xs font-medium uppercase tracking-[0.1em] text-slate-400">
              Filter by:
            </span>
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-[#2E96A3] bg-[#2E96A3] text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-[#2E96A3] hover:text-[#2E96A3]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#F7F8F6]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:px-20">
          {filtered.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <p className="text-base font-medium text-slate-700">
                No projects found in this category.
              </p>
              <button
                type="button"
                onClick={() => setActiveFilter("All")}
                className="mt-3 text-sm font-semibold text-[#2E96A3] hover:underline"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-20">
          <div className="mx-auto max-w-6xl rounded-3xl bg-[#071426] px-6 py-12 text-center md:px-16 md:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E96A3]">
              Discuss Your Project
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.15] text-white md:text-4xl lg:text-5xl">
              Planning a water project?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/50">
              Tell us about your requirements and we'll provide a free
              consultation and quote.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 bg-[#2E96A3] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#24808C]"
            >
              Get Started
              <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  slug,
  title,
  type,
  location,
  description,
  image,
}: {
  slug: string;
  title: string;
  type: string;
  location: string;
  description: string;
  image: string;
}) {
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-medium uppercase tracking-[0.1em] text-[#2E96A3]">
          {type}
        </span>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-slate-900">
          {title}
        </h3>
        <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-400">
          <FaLocationDot className="text-xs" />
          {location}
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}
