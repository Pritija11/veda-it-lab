import Link from "next/link";

export default function ResearchPreview() {
  return (
    <section className="relative overflow-hidden bg-[#070B14] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0D1422]">
          
          {/* Background grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Glow */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]"
          />

          <div className="relative grid gap-12 p-8 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16 lg:p-14">
            
            {/* Left */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Research & insights
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                Exploring what{" "}
                <span className="text-blue-400">comes next.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Technology is constantly changing. Our research and insights
                explore ideas around cloud infrastructure, DevOps,
                automation, software engineering, and emerging technologies.
              </p>

              <Link
                href="/research"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300"
              >
                Visit research
                <span>→</span>
              </Link>
            </div>

            {/* Right */}
            <div className="flex items-center">
              <div className="w-full">
                <div className="border-l border-blue-400/30 pl-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-600">
                    Areas we explore
                  </p>

                  <div className="mt-6 space-y-4">
                    {[
                      "Cloud infrastructure",
                      "DevOps & automation",
                      "Infrastructure security",
                      "Software systems",
                      "Data & AI",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="group flex items-center justify-between border-b border-white/10 pb-4"
                      >
                        <span className="text-sm text-slate-400 transition-colors duration-200 group-hover:text-slate-200">
                          {item}
                        </span>

                        <span className="text-xs text-slate-700">
                          0{index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}