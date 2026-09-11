import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { pillars } from "@/data/pillars";
import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = createPageMetadata(
  "AI Solutions",
  "Five focused AI solutions from VedAIT Labs, an applied AI startup: Applied AI & Machine Learning, Generative & Agentic AI, Data & Intelligence, Computer Vision & Document AI, and AI Engineering & Deployment.",
  "/solutions",
);

const cardAccents: Record<string, string> = {
  "applied-ai": "#BDEBFF",
  "generative-agentic-ai": "#FFBBD8",
  "data-intelligence": "#BDF3D2",
  "computer-vision-document-ai": "#FFD0B8",
  "ai-engineering-deployment": "#FFF09A",
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF8] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="tech-grid pointer-events-none absolute -right-10 -top-10 h-72 w-72" aria-hidden />
        <div className="solid-shape shape-float float-y-slow h-20 w-20 rounded-full bg-[#B9C7FF]/60" style={{ top: "56px", right: "14%" }} aria-hidden />
        <div className="solid-shape shape-float float-y h-12 w-12 rounded-[35%] bg-[#FFD0B8]" style={{ top: "160px", right: "6%" }} aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="chip bg-[#27233A] text-white">
              <span className="relative flex h-1.5 w-1.5">
                <span className="node-pulse absolute inline-flex h-full w-full rounded-full bg-[#FF7187]" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#FF7187]" />
              </span>
              AI Solutions
            </div>

            <h1 className="mt-7 font-[family-name:var(--font-fraunces)] text-5xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-6xl">
              Five ways we turn AI into{" "}
              <span className="italic text-[#FF7187]">shipped product.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#706B80]">
              VedAIT Labs is an applied AI startup — we don&apos;t sell a
              sprawling menu of IT services. We build around five focused AI
              pillars, deep enough to be useful, narrow enough to actually be
              good at.
            </p>
          </div>
        </div>
      </section>

      {/* Pillar grid */}
      <section className="bg-[#FFFDF8] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.id} delay={i * 90}>
                  <Link
                    href={`/solutions/${pillar.id}`}
                    className="editorial-tilt card-shadow card-shadow-hover group relative block overflow-hidden rounded-[1.75rem] border border-[#E8E3ED] bg-white p-8 sm:p-10"
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${cardAccents[pillar.id]}66` }}
                      >
                        <Icon className="h-5 w-5 text-[#27233A]" />
                      </span>
                      <span className="font-mono text-xs font-bold text-[#27233A]/40">{pillar.number}</span>
                    </div>

                    <h2 className="mt-9 font-[family-name:var(--font-fraunces)] text-2xl font-semibold tracking-[-0.01em] text-[#27233A]">
                      {pillar.title}
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-6 text-[#706B80]">
                      {pillar.description}
                    </p>

                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#27233A] transition-transform group-hover:translate-x-1">
                      Explore solution
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#27233A] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <div className="chip bg-white/10 text-[#BDEBFF]">Our approach</div>
              <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-white sm:text-5xl">
                Understand the problem{" "}
                <span className="italic text-[#FF9FAE]">before the model.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
                Good AI starts with a real problem, not a technology looking for
                a use case. We scope, build, and ship around what a system
                actually needs to do.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { n: "01", t: "Understand", d: "We start with the problem, the data that exists, and what a working system would actually need to do." },
              { n: "02", t: "Engineer", d: "We build with production in mind from day one — not a demo that only works in a notebook." },
              { n: "03", t: "Evolve", d: "Models drift, data changes, requirements grow. We build systems that can be monitored, retrained, and extended." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <div className="editorial-tilt rounded-2xl border border-white/10 bg-white/5 p-7">
                  <span className="text-sm font-semibold text-[#FF9FAE]">{step.n}</span>
                  <h3 className="mt-6 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-white">{step.t}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{step.d}</p>
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
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#FF9FAE] px-8 py-14 text-center sm:px-16 sm:py-16">
              <div className="solid-shape shape-float float-y-slow h-16 w-16 rounded-[35%] bg-[#FFF09A]" style={{ top: "-16px", left: "8%" }} aria-hidden />
              <div className="solid-shape shape-float float-y h-12 w-12 rounded-full bg-[#BDF3D2]" style={{ bottom: "-14px", right: "12%" }} aria-hidden />

              <div className="relative">
                <div className="chip mx-auto bg-[#27233A]/10 text-[#27233A]">Let&apos;s talk</div>
                <h2 className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-fraunces)] text-3xl font-semibold leading-tight tracking-[-0.01em] text-[#27233A] sm:text-4xl">
                  Have an AI problem worth solving?
                </h2>
                <p className="mx-auto mt-4 max-w-xl leading-7 text-[#27233A]/75">
                  Tell us what you&apos;re building and where these solutions
                  could fit.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#27233A] px-7 py-3.5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Start a conversation
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
