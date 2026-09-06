import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070B14] pt-32">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center px-6 pb-20 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-10">
          
          {/* Left content */}
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/5 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-blue-300">
                Technology Startup
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
              Building the technology behind{" "}
              <span className="text-blue-400">what comes next.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              VedAIT Labs is a technology startup focused on building modern
              digital and infrastructure solutions. We help businesses
              engineer reliable cloud environments, automate delivery, and
              build systems ready to scale.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/20"
              >
                Start a conversation
                <span>→</span>
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                Explore our solutions
              </Link>
            </div>

            {/* Focus areas */}
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              <span className="text-sm text-slate-500">
                Cloud Engineering
              </span>
              <span className="hidden text-slate-700 sm:block">/</span>
              <span className="text-sm text-slate-500">
                DevOps & Automation
              </span>
              <span className="hidden text-slate-700 sm:block">/</span>
              <span className="text-sm text-slate-500">
                Infrastructure Security
              </span>
            </div>
          </div>

          {/* Right infrastructure visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-square">
              
              {/* Outer glow */}
              <div
                aria-hidden="true"
                className="absolute inset-10 rounded-full bg-blue-500/10 blur-3xl"
              />

              {/* Main infrastructure panel */}
              <div className="absolute inset-4 rounded-3xl border border-white/10 bg-[#0D1422]/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:inset-8 sm:p-7">
                
                {/* Panel header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Infrastructure
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-200">
                      Cloud deployment
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-medium text-emerald-300">
                      Operational
                    </span>
                  </div>
                </div>

                {/* Diagram */}
                <div className="relative mt-8 h-[calc(100%-4.5rem)] min-h-[310px]">
                  
                  {/* Connection lines */}
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-[82px] h-[95px] w-px -translate-x-1/2 bg-gradient-to-b from-blue-400/60 to-blue-400/10"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-[176px] h-px w-[68%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute left-[33%] top-[176px] h-[76px] w-px bg-blue-400/20"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute right-[33%] top-[176px] h-[76px] w-px bg-blue-400/20"
                  />

                  {/* Cloud */}
                  <div className="absolute left-1/2 top-0 flex h-[82px] w-[150px] -translate-x-1/2 flex-col items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 shadow-lg shadow-blue-500/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-7 w-7 text-blue-400"
                      aria-hidden="true"
                    >
                      <path
                        d="M7 18h10a4 4 0 0 0 .4-7.98A6 6 0 0 0 5.2 11.5 3.5 3.5 0 0 0 7 18Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>

                    <span className="mt-2 text-xs font-medium text-blue-200">
                      Cloud
                    </span>
                  </div>

                  {/* Deployment */}
                  <div className="absolute left-1/2 top-[130px] flex h-[76px] w-[140px] -translate-x-1/2 flex-col items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-6 w-6 text-violet-400"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span className="mt-2 text-xs font-medium text-slate-300">
                      Deployment
                    </span>
                  </div>

                  {/* Bottom nodes */}
                  <div className="absolute bottom-2 left-0 right-0 grid grid-cols-3 gap-3">
                    {[
                      {
                        label: "Infrastructure",
                        icon: "01",
                      },
                      {
                        label: "Automation",
                        icon: "02",
                      },
                      {
                        label: "Application",
                        icon: "03",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-white/10 bg-white/[0.025] p-3 text-center"
                      >
                        <span className="text-[10px] text-blue-400">
                          {item.icon}
                        </span>

                        <p className="mt-1 text-[11px] font-medium text-slate-400">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating status cards */}
              <div className="absolute -left-2 top-24 hidden rounded-xl border border-white/10 bg-[#101827]/95 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur-md sm:block">
                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Deployments
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-200">
                  Automated
                </p>
              </div>

              <div className="absolute -right-2 bottom-24 hidden rounded-xl border border-white/10 bg-[#101827]/95 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur-md sm:block">
                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Architecture
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-200">
                  Scalable
                </p>
              </div>

              {/* Decorative nodes */}
              <div
                aria-hidden="true"
                className="absolute right-2 top-10 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.9)]"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-10 left-4 h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}