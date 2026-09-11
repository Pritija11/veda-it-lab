import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { researchArticles } from "@/data/research";
import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = createPageMetadata(
  "Insights",
  "Applied AI insights from VedAIT Labs, an applied AI startup, covering agentic AI, data pipelines, computer vision, and the gap between an AI prototype and a production system.",
  "/research",
);

const categoryColor: Record<string, string> = {
  "Applied AI": "#BDEBFF",
  "Generative & Agentic AI": "#FFBBD8",
  "Data & Intelligence": "#BDF3D2",
  "Computer Vision & Document AI": "#FFD0B8",
  "AI Engineering & Deployment": "#FFF09A",
};

const focusAreas = [
  { n: "01", t: "Applied AI", d: "Recognizing which problems are actually AI problems, and which just need better software." },
  { n: "02", t: "Agentic Systems", d: "What separates a real agent from a chatbot with a system prompt." },
  { n: "03", t: "Production Engineering", d: "The unglamorous work of keeping a model reliable after the demo ends." },
];

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF8] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="tech-grid pointer-events-none absolute -right-10 -top-10 h-72 w-72" aria-hidden />
        <div className="solid-shape shape-float float-y-slow h-16 w-16 rounded-full bg-[#FFF09A]" style={{ top: "70px", right: "12%" }} aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <div className="chip bg-[#27233A] text-white">Insights</div>

            <h1 className="mt-7 font-[family-name:var(--font-fraunces)] text-5xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-6xl">
              Ideas shaping{" "}
              <span className="italic text-[#FF7187]">intelligent systems.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#706B80]">
              Practical perspectives from VedAIT Labs, an applied AI startup,
              on agents, data, and what it actually takes to get a model into
              production.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Focus areas */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map((area, i) => (
              <Reveal key={area.n} delay={i * 90}>
                <div className="editorial-tilt rounded-2xl border border-[#E8E3ED] bg-[#FFFDF8] p-7">
                  <span className="text-sm font-semibold text-[#5BA7FF]">{area.n}</span>
                  <h3 className="mt-6 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#27233A]">{area.t}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#706B80]">{area.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-[#FFFDF8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <div className="chip bg-[#27233A] text-white">Latest insights</div>
              <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-5xl">
                Worth a read{" "}
                <span className="italic text-[#FF7187]">before your next build.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {researchArticles.map((article, index) => (
              <Reveal key={article.slug} delay={index * 70} className={index === 0 ? "lg:col-span-2" : ""}>
                <Link
                  href={`/research/${article.slug}`}
                  className="editorial-tilt card-shadow card-shadow-hover group block h-full rounded-2xl border border-[#E8E3ED] bg-white p-7"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold text-[#27233A]"
                      style={{ backgroundColor: categoryColor[article.category] }}
                    >
                      {article.category}
                    </span>
                  </div>

                  <h3
                    className={`mt-6 font-[family-name:var(--font-fraunces)] font-semibold text-[#27233A] transition-colors group-hover:text-[#FF7187] ${
                      index === 0 ? "max-w-3xl text-2xl sm:text-3xl" : "text-xl"
                    }`}
                  >
                    {article.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#706B80]">{article.excerpt}</p>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#27233A]">
                    Read more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-10 rounded-2xl border border-dashed border-[#E8E3ED] bg-white/60 px-6 py-8 text-center">
              <p className="text-sm leading-7 text-[#9B95AA]">
                More research and applied notes will be published as the VedAIT
                Labs research initiative grows.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFFDF8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="rounded-[2.5rem] bg-[#27233A] px-8 py-14 sm:px-12 sm:py-16">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-[-0.01em] text-white sm:text-4xl">
                    Have an AI problem worth exploring?
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/60">
                    Connect with VedAIT Labs about your data, model, or agent idea.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#27233A] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Talk to VedAIT Labs
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
