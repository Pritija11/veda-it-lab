import type { Metadata } from "next";
import Link from "next/link";

import { pillars } from "@/data/pillars";
import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = createPageMetadata(
  "About VedAIT Labs",
  "VedAIT Labs is an applied AI startup building machine learning, generative and agentic AI, data intelligence, computer vision, and production AI systems for growing teams.",
  "/about",
);

const principles = [
  {
    number: "01",
    title: "Problem first, model second",
    description:
      "We start with the business problem, not a model looking for a use case. If the answer is 'better software', we say so.",
  },
  {
    number: "02",
    title: "Production is the goal",
    description:
      "A notebook that works once isn't a deliverable. We design for monitoring, retraining, and failure from day one.",
  },
  {
    number: "03",
    title: "Five pillars, not fifty services",
    description:
      "We stay focused on what we're actually good at instead of chasing every AI trend that shows up in a headline.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF8] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="tech-grid pointer-events-none absolute -right-10 -top-10 h-72 w-72" aria-hidden />
        <div className="solid-shape shape-float float-y-slow h-16 w-16 rounded-full bg-[#FFBBD8]" style={{ top: "70px", right: "10%" }} aria-hidden />
        <div className="solid-shape shape-float h-10 w-10 rounded-[35%] bg-[#BDF3D2]" style={{ top: "180px", right: "20%" }} aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <div className="chip bg-[#27233A] text-white">About VedAIT Labs</div>

            <h1 className="mt-7 font-[family-name:var(--font-fraunces)] text-5xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-6xl">
              An applied AI startup —{" "}
              <span className="italic text-[#FF7187]">not a consultancy.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#706B80]">
              VedAIT Labs builds machine learning, generative and agentic AI,
              data intelligence, computer vision, and production AI systems
              for teams that need intelligence built into their software, not
              bolted onto it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <Reveal>
            <div className="chip bg-[#BDEBFF] text-[#27233A]">Who we are</div>
            <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-3xl font-semibold leading-[1.1] tracking-[-0.01em] text-[#27233A] sm:text-4xl">
              Applied AI is a systems problem, not a model problem.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-8 text-[#706B80]">
              <p>
                VedAIT Labs brings together machine learning, data engineering,
                and production infrastructure to approach AI as a full system —
                not just a model file that runs once in a demo.
              </p>
              <p>
                We believe the hard part of AI isn&apos;t training a model.
                It&apos;s the data pipeline underneath it, the monitoring around
                it, and the judgment to know when AI is the wrong tool for the
                job.
              </p>
              <p>
                As a growing applied AI startup, we stay deliberately narrow —
                five pillars, built well — rather than stretching thin across
                every AI trend that comes along.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Focus areas */}
      <section className="bg-[#FFFDF8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <div className="chip bg-[#27233A] text-white">What we focus on</div>
              <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-5xl">
                Five pillars,{" "}
                <span className="italic text-[#FF7187]">not fifty services.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.id} delay={index * 80}>
                  <Link
                    href={`/solutions/${pillar.id}`}
                    className="editorial-tilt card-shadow card-shadow-hover group block rounded-2xl border border-[#E8E3ED] bg-white p-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#BDEBFF]/50 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5 text-[#27233A]" />
                      </span>
                      <span className="font-mono text-xs font-bold text-[#27233A]/40">0{index + 1}</span>
                    </div>
                    <h3 className="mt-7 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#27233A] transition-colors group-hover:text-[#FF7187]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#706B80]">{pillar.description}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-[#27233A] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <div className="chip bg-white/10 text-[#BDEBFF]">Our principles</div>
              <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-white sm:text-5xl">
                How we think{" "}
                <span className="italic text-[#FF9FAE]">about AI.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {principles.map((principle, i) => (
              <Reveal key={principle.number} delay={i * 100}>
                <div className="editorial-tilt rounded-2xl border border-white/10 bg-white/5 p-7">
                  <span className="text-sm font-semibold text-[#FF9FAE]">{principle.number}</span>
                  <h3 className="mt-7 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-white">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{principle.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="bg-[#FFFDF8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="editorial-tilt h-full rounded-2xl bg-[#FFBBD8] p-8 sm:p-10">
                <div className="chip bg-[#27233A]/10 text-[#27233A]">Our vision</div>
                <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#27233A]">
                  AI that earns its place in production, not just a demo.
                </h2>
                <p className="mt-4 leading-7 text-[#27233A]/75">
                  We want to be known for AI systems that are still running,
                  still monitored, and still useful a year after launch.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="editorial-tilt h-full rounded-2xl border border-[#E8E3ED] bg-white p-8 sm:p-10">
                <div className="chip bg-[#BDF3D2] text-[#27233A]">Our mission</div>
                <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#27233A]">
                  Make applied AI practical for teams that aren&apos;t AI teams.
                </h2>
                <p className="mt-4 leading-7 text-[#706B80]">
                  Most companies don&apos;t need an in-house ML org — they need
                  the right AI feature, built well, and handed off in a state
                  they can actually maintain.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFFDF8] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#FF9FAE] px-8 py-14 text-center sm:px-16 sm:py-16">
              <div className="solid-shape shape-float float-y-slow h-16 w-16 rounded-full bg-[#BDEBFF]" style={{ top: "-16px", left: "10%" }} aria-hidden />
              <div className="solid-shape shape-float float-y h-12 w-12 rounded-[35%] bg-[#FFF09A]" style={{ bottom: "-14px", right: "10%" }} aria-hidden />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-fraunces)] text-3xl font-semibold leading-tight tracking-[-0.01em] text-[#27233A] sm:text-4xl">
                  Have an AI idea worth building?
                </h2>
                <p className="mx-auto mt-4 max-w-xl leading-7 text-[#27233A]/75">
                  Tell us what you&apos;re working on and where VedAIT Labs could fit.
                </p>
                <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#27233A] px-7 py-3.5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5">
                  Let&apos;s Talk
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
