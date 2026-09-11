import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = createPageMetadata(
  "How We Work",
  "How VedAIT Labs, an applied AI startup, takes an AI system from problem to production — our process, and the technical disciplines behind it: AI engineering, data engineering, ML engineering, MLOps, and AI integration.",
  "/how-we-work",
);

const stages = [
  { n: "01", t: "Problem", d: "We start by scoping the actual business problem and checking whether AI is even the right tool for it.", bg: "#BDEBFF" },
  { n: "02", t: "Data", d: "We assess what data exists, what's missing, and what pipeline needs to be built before any model can be trained.", bg: "#BDF3D2" },
  { n: "03", t: "AI", d: "We build, evaluate, and iterate on the model or agent against real data — not a curated demo set.", bg: "#FFBBD8" },
  { n: "04", t: "Integration", d: "The model gets wired into your actual product, APIs, and workflows — not left as a standalone script.", bg: "#FFD0B8" },
  { n: "05", t: "Production", d: "We ship with monitoring, versioning, and a plan for retraining, so the system stays reliable after launch.", bg: "#FFF09A" },
];

const disciplines = [
  { t: "AI Engineering", d: "Designing the model or agent architecture around the actual problem, not a generic template." },
  { t: "Data Engineering", d: "Pipelines that keep training and inference data clean, current, and traceable." },
  { t: "ML Engineering", d: "Turning a trained model into a tested, versioned, deployable artifact." },
  { t: "MLOps", d: "CI/CD, monitoring, and retraining workflows that keep a model healthy long after launch." },
  { t: "AI Integration", d: "Connecting AI capabilities into your existing product, APIs, and internal tools safely." },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF8] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="tech-grid pointer-events-none absolute -right-10 -top-10 h-72 w-72" aria-hidden />
        <div className="solid-shape shape-float float-y h-14 w-14 rounded-[35%] bg-[#FFD0B8]" style={{ top: "80px", right: "14%" }} aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <div className="chip bg-[#27233A] text-white">How We Work</div>

            <h1 className="mt-7 font-[family-name:var(--font-fraunces)] text-5xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-6xl">
              From problem to{" "}
              <span className="italic text-[#FF7187]">production.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#706B80]">
              As an applied AI startup, we&apos;ve learned that a working demo
              and a system that survives real traffic, drift, and failure are
              two different engineering problems. This is how we close that
              gap.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process stages */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative">
            <svg viewBox="0 0 900 4" className="absolute left-[6%] right-[6%] top-9 hidden h-1 w-[88%] md:block" preserveAspectRatio="none">
              <line x1="0" y1="2" x2="900" y2="2" stroke="#27233A" strokeOpacity="0.1" strokeWidth="2" />
              <line x1="0" y1="2" x2="900" y2="2" stroke="#5BA7FF" strokeOpacity="0.45" strokeWidth="2" className="dash-flow" />
            </svg>

            <div className="grid gap-5 md:grid-cols-5">
              {stages.map((stage, i) => (
                <Reveal key={stage.n} delay={i * 90}>
                  <div className="editorial-tilt relative rounded-2xl p-6" style={{ backgroundColor: stage.bg }}>
                    <span className="node-pulse absolute -top-1.5 left-6 hidden h-2.5 w-2.5 rounded-full bg-[#27233A] md:block" style={{ animationDelay: `${i * 0.3}s` }} />
                    <span className="font-mono text-xs font-bold text-[#27233A]/50">{stage.n}</span>
                    <h3 className="mt-5 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#27233A]">{stage.t}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#27233A]/70">{stage.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines behind it */}
      <section className="bg-[#27233A] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <div className="chip bg-white/10 text-[#BDEBFF]">The technical depth</div>
              <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-white sm:text-5xl">
                Five disciplines behind{" "}
                <span className="italic text-[#FF9FAE]">every stage.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
                These aren&apos;t separate services — they&apos;re the
                engineering practices that run underneath every solution we
                build.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((d, i) => (
              <Reveal key={d.t} delay={i * 80}>
                <div className="editorial-tilt rounded-2xl border border-white/10 bg-white/5 p-7">
                  <span className="text-sm font-semibold text-[#FF9FAE]">0{i + 1}</span>
                  <h3 className="mt-6 font-[family-name:var(--font-fraunces)] text-lg font-semibold text-white">{d.t}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFFDF8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="rounded-[2.5rem] bg-[#FF9FAE] px-8 py-14 text-center sm:px-16 sm:py-16">
              <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-fraunces)] text-3xl font-semibold leading-tight tracking-[-0.01em] text-[#27233A] sm:text-4xl">
                Curious where your project would enter this process?
              </h2>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#27233A] px-7 py-3.5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5">
                Let&apos;s Talk
                <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
