const principles = [
  {
    number: "01",
    title: "Built with purpose",
    description:
      "We focus on solving meaningful technical problems instead of adding complexity for the sake of technology.",
  },
  {
    number: "02",
    title: "Engineering first",
    description:
      "Our approach puts reliability, maintainability, security, and long-term technical value at the center.",
  },
  {
    number: "03",
    title: "Ready to evolve",
    description:
      "We build systems with change in mind, allowing products and infrastructure to grow as requirements evolve.",
  },
];

export default function WhyVedAIT() {
  return (
    <section className="relative overflow-hidden bg-[#070B14] py-24 sm:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/3 rounded-full bg-blue-500/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          
          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Why VedAIT Labs
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-4xl">
              We build technology with{" "}
              <span className="text-blue-400">long-term thinking.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-400">
              As a technology startup, we are interested in more than simply
              delivering software. We want to build dependable systems that
              create a strong foundation for what comes next.
            </p>

            <div className="mt-8 h-px w-20 bg-blue-400/50" />

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-500">
              From infrastructure and deployment to applications and data,
              every layer matters when building technology that people can
              depend on.
            </p>
          </div>

          {/* Right principles */}
          <div className="divide-y divide-white/10 border-y border-white/10">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="group grid gap-5 py-8 sm:grid-cols-[80px_1fr] sm:py-10"
              >
                <span className="text-sm font-medium text-slate-600 transition-colors duration-300 group-hover:text-blue-400">
                  {principle.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-100">
                    {principle.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small statement */}
        <div className="mt-20 rounded-2xl border border-white/10 bg-[#0D1422] p-7 sm:p-9">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-200">
                Technology should create possibilities.
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                We are building VedAIT Labs around that idea.
              </p>
            </div>

            <div className="h-px w-full bg-white/10 sm:h-10 sm:w-px" />

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Cloud. Infrastructure. Software. Data. One engineering mindset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}