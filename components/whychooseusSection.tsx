const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Over 30 Years of Experience",
    description:
      "Since 1990, we have built our reputation through decades of hands-on experience delivering water infrastructure solutions across Nigeria.",
  },
  {
    number: "02",
    title: "Data Before Drilling",
    description:
      "Our process begins with professional geophysical investigation, helping us understand underground conditions before drilling begins.",
  },
  {
    number: "03",
    title: "Built Around Your Needs",
    description:
      "From homes and estates to farms and industrial facilities, we design our approach around your site's requirements and water demand.",
  },
  {
    number: "04",
    title: "Reliable From Ground to Flow",
    description:
      "From survey and drilling to pump installation and maintenance, we provide a complete solution designed for dependable long-term performance.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#071426] text-white">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 lg:px-20">

        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#2E96A3]">
              Why Luketech
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Experience you can trust beneath the surface.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/60 lg:ml-auto">
            Water infrastructure is an investment that needs to last. We
            combine decades of field experience, technical expertise, and a
            commitment to doing the job properly from the first survey to
            long after handover.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-20 border-t border-white/10">
          {WHY_CHOOSE_US.map(({ number, title, description }) => (
            <article
              key={number}
              className="group grid gap-8 border-b border-white/10 py-10 transition-colors duration-300 md:grid-cols-[80px_1fr_1.2fr] md:items-start"
            >
              {/* Number */}
              <span className="font-mono text-sm text-white/30 transition-colors duration-300 group-hover:text-[#2E96A3]">
                {number}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {title}
              </h3>

              {/* Description */}
              <p className="max-w-xl text-base leading-7 text-white/50 transition-colors duration-300 group-hover:text-white/70">
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 flex flex-col justify-between gap-8 pt-10 md:flex-row md:items-center">
          <p className="max-w-2xl text-2xl font-medium leading-relaxed text-white/80 md:text-3xl">
            From the first metre drilled to the water flowing, we are committed
            to getting it right.
          </p>

          <div className="shrink-0">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2E96A3]">
              Built on experience
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
