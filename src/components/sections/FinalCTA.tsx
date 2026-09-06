import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#070B14] py-24 sm:py-28">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Central glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
          Let's build what's next
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
          Have a technology challenge worth{" "}
          <span className="text-blue-400">solving?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          Whether you are building a new product, improving infrastructure, or
          planning your next stage of growth, let's talk about what you're
          trying to build.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/20 sm:w-auto"
          >
            Talk to VedAIT Labs
            <span>→</span>
          </Link>

          <Link
            href="/about"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:w-auto"
          >
            Learn about us
          </Link>
        </div>

        {/* Contact detail */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-sm text-slate-500 sm:flex-row sm:gap-5">
          <span>Sankhamul, Kathmandu</span>
          <span className="hidden text-slate-700 sm:block">•</span>
          <span>01-523456</span>
        </div>
      </div>
    </section>
  );
}