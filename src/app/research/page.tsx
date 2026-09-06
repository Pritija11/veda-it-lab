import type { Metadata } from "next";
import Link from "next/link";

import { researchArticles } from "@/data/research";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Research & Insights",
  "Explore technology insights from VedAIT Labs covering cloud engineering, DevOps, infrastructure security, software engineering, data, and emerging technology.",
  "/research",
);

const focusAreas = [
  {
    number: "01",
    title: "Cloud & Infrastructure",
    description:
      "Exploring modern cloud architecture, infrastructure patterns, scalability, reliability, and cloud-native systems.",
  },
  {
    number: "02",
    title: "DevOps & Automation",
    description:
      "Examining automation, continuous delivery, infrastructure as code, and modern approaches to software operations.",
  },
  {
    number: "03",
    title: "Emerging Technology",
    description:
      "Looking at technologies and engineering practices that may shape how digital systems are built and operated.",
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 pt-36 sm:pt-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-1/4 top-32 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Research & Insights
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                Exploring the technology{" "}
                <span className="text-blue-400">behind what comes next.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                We explore ideas, technologies, and engineering practices
                shaping modern digital systems, with particular interest in
                cloud, DevOps, infrastructure, software, and emerging
                technology.
              </p>
            </div>

            {/* Research Visual */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-[#0D1422] p-6 shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Research map
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-200">
                      Technology Signals
                    </p>
                  </div>

                  <span className="text-xs text-blue-300">Explore</span>
                </div>

                <div className="relative mt-8 min-h-[310px]">
                  <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-center shadow-lg shadow-blue-500/10">
                    <span className="text-sm font-semibold text-blue-300">
                      Modern
                      <br />
                      Technology
                    </span>
                  </div>

                  <div className="absolute left-1/2 top-[18%] h-[82%] w-px -translate-x-1/2 bg-gradient-to-b from-blue-400/40 to-transparent" />

                  <div className="absolute left-[15%] top-1/2 h-px w-[70%] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

                  <div className="absolute left-2 top-8 rounded-xl border border-white/10 bg-[#101827] px-4 py-3">
                    <p className="text-xs text-slate-500">Infrastructure</p>
                    <p className="mt-1 text-sm font-medium text-slate-200">
                      Cloud
                    </p>
                  </div>

                  <div className="absolute right-2 top-8 rounded-xl border border-white/10 bg-[#101827] px-4 py-3">
                    <p className="text-xs text-slate-500">Delivery</p>
                    <p className="mt-1 text-sm font-medium text-slate-200">
                      DevOps
                    </p>
                  </div>

                  <div className="absolute bottom-8 left-2 rounded-xl border border-white/10 bg-[#101827] px-4 py-3">
                    <p className="text-xs text-slate-500">Systems</p>
                    <p className="mt-1 text-sm font-medium text-slate-200">
                      Software
                    </p>
                  </div>

                  <div className="absolute bottom-8 right-2 rounded-xl border border-white/10 bg-[#101827] px-4 py-3">
                    <p className="text-xs text-slate-500">Emerging</p>
                    <p className="mt-1 text-sm font-medium text-slate-200">
                      AI & Data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-b border-white/10 bg-[#0D1422]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Why we explore
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Technology changes quickly. Understanding it matters.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              Technology decisions are easier to make when there is a clear
              understanding of the systems, patterns, and ideas behind them.
            </p>

            <p>
              Our research and insights explore practical technology topics
              that are relevant to modern software and infrastructure
              engineering.
            </p>

            <p>
              This section will grow over time as VedAIT Labs develops its
              technical research, experiments, and engineering perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Research focus
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Areas we are interested in.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our areas of interest reflect the technologies and engineering
              practices connected to the work we do.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area.number}
                className="rounded-2xl border border-white/10 bg-[#101827] p-7 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#121c2d]"
              >
                <span className="text-sm font-semibold text-blue-400">
                  {area.number}
                </span>

                <h3 className="mt-7 text-xl font-semibold text-slate-100">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="border-y border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Technology insights
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                Ideas worth exploring.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Explore topics around modern infrastructure, automation,
                security, software systems, and emerging technology.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {researchArticles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/research/${article.slug}`}
                className={`group block rounded-2xl border border-white/10 bg-[#101827] p-7 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#121c2d] ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    {article.category}
                  </span>

                  <span className="text-xs text-slate-600">
                    Technology Insight
                  </span>
                </div>

                <h3
                  className={`mt-6 font-semibold text-slate-100 transition-colors group-hover:text-blue-400 ${
                    index === 0
                      ? "max-w-3xl text-2xl sm:text-3xl"
                      : "text-xl"
                  }`}
                >
                  {article.title}
                </h3>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                  {article.excerpt}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-blue-400">
                  Explore insight
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-8 text-center">
            <p className="text-sm leading-7 text-slate-500">
              More technical research and original insights will be published
              as the VedAIT Labs research initiative develops.
            </p>
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-blue-400/20 bg-blue-500/[0.05] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Our perspective
              </p>

              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                Curiosity is part of engineering.
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-slate-400">
                Good engineering requires more than implementing what is
                already known. It also requires asking why systems work the way
                they do, evaluating alternatives, and understanding how new
                technologies can be applied responsibly.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <h3 className="text-lg font-semibold text-slate-100">
                  Practical
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  We focus on ideas that can connect to real engineering
                  problems and technology decisions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <h3 className="text-lg font-semibold text-slate-100">
                  Evidence-driven
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Technology choices should be examined through evidence,
                  experimentation, and clear technical reasoning.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <h3 className="text-lg font-semibold text-slate-100">
                  Forward-looking
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  We keep an eye on emerging technologies while remaining
                  grounded in practical engineering principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-[#101827] px-7 py-14 text-center sm:px-12 sm:py-16">
            <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Explore technology with us
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                Have a technology problem worth exploring?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
                Connect with VedAIT Labs to discuss your technology challenge,
                engineering idea, or infrastructure requirements.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Talk to VedAIT Labs
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}