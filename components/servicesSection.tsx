import {
  FaMagnifyingGlassChart,
  FaGears,
  FaDroplet,
  FaWrench,
  FaArrowRightLong,
} from "react-icons/fa6";

const SERVICES = [
  {
    icon: FaGears,
    number: "02",
    title: "Borehole Drilling",
    description:
      "Our experienced field team drills to the recommended depth and specifications, adapting to actual underground conditions to deliver a properly constructed borehole.",
  },
  {
    icon: FaDroplet,
    number: "03",
    title: "Pump Installation",
    description:
      "We install and test pump systems suited to the borehole's actual yield, ensuring reliable water delivery for homes, businesses, farms, and industrial facilities.",
  },
  {
    icon: FaWrench,
    number: "04",
    title: "Borehole Maintenance",
    description:
      "Our ongoing maintenance packages help keep your borehole and pump system performing reliably long after installation and handover.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#F7F8F6]">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 lg:px-20">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#2E96A3]">
              What We Do
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#071426] md:text-5xl lg:text-6xl">
              Water solutions built from the ground up.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-slate-600">
            From understanding what's beneath the ground to delivering
            reliable water above it, we provide practical solutions backed by
            experience and technical expertise.
          </p>
        </div>

        {/* Featured Service */}
        <div className="mt-20 grid overflow-hidden rounded-3xl bg-[#071426] lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[420px] bg-slate-800">
            <img
              src="/images/services/geophysical-survey.jpg"
              alt="Geophysical survey being carried out"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-8 text-white md:p-12 lg:p-16">

            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-white/40">
                01
              </span>

              <FaMagnifyingGlassChart className="text-2xl text-[#2E96A3]" />
            </div>

            <div className="mt-20">
              <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Geophysical Survey
              </h3>

              <p className="mt-5 max-w-lg text-base leading-7 text-white/60">
                We investigate subsurface conditions using Vertical Electrical
                Sounding (VES) to identify aquifer depth, thickness, and likely
                yield before drilling begins.
              </p>
            </div>

          </div>
        </div>

        {/* Other Services */}
        <div className="mt-20 border-t border-slate-300">
          {SERVICES.map(({ icon: Icon, number, title, description }) => (
            <article
              key={title}
              className="group grid gap-6 border-b border-slate-300 py-10 md:grid-cols-[80px_1fr_auto] md:items-center"
            >
              <span className="font-mono text-sm text-slate-400">
                {number}
              </span>

              <div>
                <div className="flex items-center gap-4">
                  <Icon className="text-lg text-[#2E96A3]" />

                  <h3 className="text-2xl font-semibold tracking-tight text-[#071426]">
                    {title}
                  </h3>
                </div>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>

              <FaArrowRightLong className="text-slate-400 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#2E96A3]" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
