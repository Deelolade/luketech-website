import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:px-12 md:pb-20 md:pt-28 lg:px-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left: Drilling Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
          <Image
            src="/images/imageOne.jpeg"
            alt="Luketech drilling operations"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right: Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            About Us
          </p>

          <h2 className="max-w-xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Built from the ground up.
            <br />
            Driven by experience.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            Since 1990, Luketech has drilled over 4,000 boreholes across Nigeria
            — from single-family homes to municipal water systems.
          </p>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-3 font-semibold text-slate-900 transition-colors hover:text-sky-600"
          >
            Discover Our Story
            <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
