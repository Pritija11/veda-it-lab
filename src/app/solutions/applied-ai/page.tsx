import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";

import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = createPageMetadata(
  "Applied AI & Machine Learning",
  "Custom ML models and AI-native product features from VedAIT Labs, an applied AI startup — recommendation systems, predictive models, and decision support built into the software you already ship.",
  "/solutions/applied-ai",
);

const capabilities = [
  { n: "01", t: "AI-Powered Applications", d: "Software features that reason over your data instead of just displaying it." },
  { n: "02", t: "Custom ML Models", d: "Models trained on your own data and problem — not a generic off-the-shelf API." },
  { n: "03", t: "Predictive Models", d: "Forecasting demand, churn, risk, or failure before it happens, not after." },
  { n: "04", t: "AI Features in Existing Software", d: "Intelligence layered into the product you already run, without a rebuild." },
  { n: "05", t: "Recommendation Systems", d: "Surfacing the right item, action, or answer for each user, at the right time." },
  { n: "06", t: "Intelligent Decision Support", d: "Systems that help people make faster, better-informed calls — not replace them." },
];

export default function AppliedAIPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF8] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="tech-grid pointer-events-none absolute -right-10 -top-10 h-72 w-72" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="max-w-2xl">
              <div className="chip bg-[#27233A] text-white">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="node-pulse absolute inline-flex h-full w-full rounded-full bg-[#5BA7FF]" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#5BA7FF]" />
                </span>
                Applied AI &amp; Machine Learning
              </div>

              <h1 className="mt-7 font-[family-name:var(--font-fraunces)] text-5xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-6xl">
                The central pillar{" "}
                <span className="italic text-[#FF7187]">of what we build.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#706B80]">
                Custom ML models and AI-native product features —
                recommendation systems, predictive models, and decision
                support built into the software your team already ships.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#27233A] px-7 py-3.5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5">
                  Discuss your idea
                  <span>↗</span>
                </Link>
                <Link href="/research" className="inline-flex items-center gap-2 rounded-full border border-[#27233A]/15 bg-white px-7 py-3.5 text-sm font-bold text-[#27233A] transition-colors hover:border-[#27233A]/35">
                  Explore our research
                </Link>
              </div>
            </Reveal>

            <div className="relative mx-auto flex h-64 w-64 items-center justify-center">
              <div className="solid-shape shape-float h-24 w-24 rounded-full bg-[#B9C7FF]/60" style={{ top: "0%", left: "8%" }} aria-hidden />
              <div className="solid-shape shape-float float-y-slow h-16 w-16 rounded-[35%] bg-[#BDEBFF]" style={{ bottom: "6%", right: "4%" }} aria-hidden />
              <div className="node-pulse absolute h-28 w-28 rounded-full border-2 border-[#5BA7FF]/40" style={{ transformOrigin: "center" }} aria-hidden />
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#27233A]">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <div className="chip bg-[#BDEBFF] text-[#27233A]">What it covers</div>
              <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-5xl">
                A broad foundation,{" "}
                <span className="italic text-[#FF7187]">built to ship.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.n} delay={i * 70}>
                <div className="editorial-tilt rounded-2xl border border-[#E8E3ED] bg-[#FFFDF8] p-7">
                  <span className="text-sm font-semibold text-[#5BA7FF]">{c.n}</span>
                  <h3 className="mt-6 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#27233A]">{c.t}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#706B80]">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-[#FFFDF8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Link href="/solutions/generative-agentic-ai" className="editorial-tilt group flex flex-col justify-between gap-6 rounded-[1.75rem] border border-[#E8E3ED] bg-[#FFBBD8] p-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#27233A]/60">Related solution</p>
                <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#27233A] sm:text-3xl">Generative &amp; Agentic AI</h2>
                <p className="mt-3 max-w-lg text-sm leading-6 text-[#27233A]/75">LLM applications, RAG systems, and multi-step agents connected to real business processes.</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#27233A] px-6 py-3 text-sm font-bold text-white transition-transform group-hover:translate-x-1">
                Explore <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFFDF8] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="rounded-[2.5rem] bg-[#27233A] px-8 py-14 text-center sm:px-16 sm:py-16">
              <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-fraunces)] text-3xl font-semibold leading-tight tracking-[-0.01em] text-white sm:text-4xl">
                Have an applied AI idea{" "}
                <span className="italic text-[#FF9FAE]">worth building?</span>
              </h2>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#27233A] transition-transform duration-200 hover:-translate-y-0.5">
                Let&apos;s talk
                <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
