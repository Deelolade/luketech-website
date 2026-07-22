const HomeStats = () => {
  return (
    <div className="relative z-10 mx-auto -mt-20 w-[90%] max-w-5xl rounded-2xl bg-white px-8 py-10 shadow-xl md:-mt-24 md:px-12 md:py-12">
        <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">

          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center px-6 py-6 text-center md:py-4">
            <span className="text-5xl font-bold tracking-tight text-sky-600 md:text-6xl">
             36+
            </span>
            <span className="mt-3 text-sm font-semibold uppercase tracking-wider text-slate-600">
              Years of Experience
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center px-6 py-6 text-center md:py-4">
            <span className="text-5xl font-bold tracking-tight text-sky-600 md:text-6xl">
              1,500+
            </span>
            <span className="mt-3 text-sm font-semibold uppercase tracking-wider text-slate-600">
              Boreholes Drilled
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center px-6 py-6 text-center md:py-4">
            <span className="text-5xl font-bold tracking-tight text-sky-600 md:text-6xl">
              10+
            </span>
            <span className="mt-3 text-sm font-semibold uppercase tracking-wider text-slate-600">
              State served
            </span>
          </div>

        </div>
      </div>
  )
}

export default HomeStats
