import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = createPageMetadata(
  "Careers at VedAIT Labs",
  "Explore career opportunities at VedAIT Labs, an applied AI startup working across machine learning, generative and agentic AI, data intelligence, computer vision, and AI engineering.",
  "/careers",
);

const areas = [
  { n: "01", t: "Machine Learning", d: "Design and train models around real business problems, not benchmark datasets." },
  { n: "02", t: "Agentic AI Engineering", d: "Build LLM applications, RAG systems, and agents that take real actions." },
  { n: "03", t: "Data Engineering", d: "Build the pipelines that keep every model fed with clean, current data." },
  { n: "04", t: "MLOps & Deployment", d: "Keep models monitored, versioned, and reliable in production, not just a notebook." },
];

const values = [
  { title: "Keep learning", description: "AI moves fast. We value curiosity, experimentation, and the willingness to keep improving." },
  { title: "Build with purpose", description: "We focus on solving real problems rather than reaching for AI simply because it's trendy." },
  { title: "Think long term", description: "Good AI systems should stay understandable, monitorable, and maintainable as they evolve." },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF8] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="tech-grid pointer-events-none absolute -right-10 -top-10 h-72 w-72" aria-hidden />
        <div className="solid-shape shape-float float-y h-16 w-16 rounded-[35%] bg-[#BDF3D2]" style={{ top: "76px", right: "12%" }} aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <div className="chip bg-[#27233A] text-white">Careers</div>

            <h1 className="mt-7 font-[family-name:var(--font-fraunces)] text-5xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-6xl">
              Build AI.{" "}
              <span className="italic text-[#FF7187]">Keep growing.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#706B80]">
              VedAIT Labs is building an applied AI startup around engineering
              discipline, curiosity, and continuous learning. We&apos;re
              interested in people who want to understand systems deeply and
              ship AI that actually stays in production.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#27233A] px-7 py-3.5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5">
                Get in touch
                <span>↗</span>
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-[#27233A]/15 bg-white px-7 py-3.5 text-sm font-bold text-[#27233A] transition-colors hover:border-[#27233A]/35">
                About VedAIT Labs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Working at VedAIT */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <Reveal>
            <div className="chip bg-[#BDEBFF] text-[#27233A]">Life at VedAIT Labs</div>
            <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-3xl font-semibold leading-[1.1] tracking-[-0.01em] text-[#27233A] sm:text-4xl">
              An environment built around engineering and learning.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-8 text-[#706B80]">
              <p>
                We believe strong AI comes from people willing to question
                assumptions and understand why a model, a pipeline, or an agent
                behaves the way it does.
              </p>
              <p>
                At VedAIT Labs, AI engineering isn&apos;t limited to training
                models. It includes data quality, production reliability,
                monitoring, and the judgment to know when AI isn&apos;t the
                right answer at all.
              </p>
              <p>
                As the company grows, we want to create opportunities for
                people to work on meaningful applied AI problems and grow their
                engineering skills alongside the team.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-[#FFFDF8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <div className="chip bg-[#27233A] text-white">Engineering areas</div>
              <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-5xl">
                Where you could{" "}
                <span className="italic text-[#FF7187]">contribute.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {areas.map((area, i) => (
              <Reveal key={area.n} delay={i * 90}>
                <div className="editorial-tilt card-shadow rounded-2xl border border-[#E8E3ED] bg-white p-7 sm:p-8">
                  <span className="text-sm font-semibold text-[#5BA7FF]">{area.n}</span>
                  <h3 className="mt-6 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#27233A]">{area.t}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#706B80]">{area.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#27233A] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <div className="chip bg-white/10 text-[#BDEBFF]">What we value</div>
              <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-white sm:text-5xl">
                The way we{" "}
                <span className="italic text-[#FF9FAE]">approach AI.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 100}>
                <div className="editorial-tilt rounded-2xl border border-white/10 bg-white/5 p-7">
                  <span className="text-sm font-semibold text-[#FF9FAE]">0{index + 1}</span>
                  <h3 className="mt-7 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{value.description}</p>
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
                Interested in building AI with VedAIT Labs?
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-7 text-[#27233A]/75">
                Tell us about yourself, your technical interests, and what
                you&apos;d like to build.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#27233A] px-7 py-3.5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5">
                Start a conversation
                <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
