const capabilities = [
  {
    label: "01",
    title: "Cloud Architecture",
    description:
      "Designing cloud environments around scalability, reliability, performance, and practical business requirements.",
    tags: ["Cloud", "Architecture", "Scalability"],
  },
  {
    label: "02",
    title: "Continuous Delivery",
    description:
      "Creating automated delivery pipelines that help teams release software consistently and with greater confidence.",
    tags: ["CI/CD", "Automation", "Delivery"],
  },
  {
    label: "03",
    title: "Infrastructure",
    description:
      "Managing infrastructure as a dependable foundation for applications, services, and growing digital products.",
    tags: ["Infrastructure", "IaC", "Operations"],
  },
  {
    label: "04",
    title: "System Reliability",
    description:
      "Building systems with observability, resilience, monitoring, and operational reliability in mind.",
    tags: ["Monitoring", "Reliability", "Observability"],
  },
];

export default function CoreCapabilities() {
  return (
    <section className="border-y border-white/10 bg-[#0D1422] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Core capabilities
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Engineering the systems{" "}
              <span className="text-blue-400">behind the product.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-400 lg:text-right">
            Our technical capabilities span the infrastructure and engineering
            layers that modern digital products depend on.
          </p>
        </div>

        {/* Capability list */}
        <div className="mt-14">
          {capabilities.map((capability) => (
            <div
              key={capability.label}
              className="group grid gap-6 border-t border-white/10 py-8 transition-colors duration-300 hover:bg-white/[0.015] sm:grid-cols-[80px_1fr_auto] sm:items-center sm:py-10"
            >
              {/* Number */}
              <span className="text-xs font-medium tracking-widest text-slate-600 transition-colors duration-300 group-hover:text-blue-400">
                {capability.label}
              </span>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-100">
                  {capability.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  {capability.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {capability.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[11px] text-slate-500 transition-colors duration-300 group-hover:border-blue-400/20 group-hover:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>

        {/* Technical statement */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-[#101827] p-5">
            <p className="text-xs uppercase tracking-wider text-slate-600">
              Approach
            </p>
            <p className="mt-3 text-sm font-medium text-slate-300">
              Infrastructure as a foundation
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#101827] p-5">
            <p className="text-xs uppercase tracking-wider text-slate-600">
              Priority
            </p>
            <p className="mt-3 text-sm font-medium text-slate-300">
              Reliability and security
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#101827] p-5">
            <p className="text-xs uppercase tracking-wider text-slate-600">
              Mindset
            </p>
            <p className="mt-3 text-sm font-medium text-slate-300">
              Built to evolve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}