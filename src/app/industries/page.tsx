import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import { industries } from "@/data/industries";
import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = createPageMetadata(
  "Industries",
  "Where VedAIT Labs, an applied AI startup, puts its AI pillars to work — finance, healthcare, agriculture, retail, operations, and enterprise.",
  "/industries",
);

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF8] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="tech-grid pointer-events-none absolute -right-10 -top-10 h-72 w-72" aria-hidden />
        <div className="solid-shape shape-float float-y-slow h-16 w-16 rounded-full bg-[#B9C7FF]/60" style={{ top: "70px", right: "12%" }} aria-hidden />
        <div className="solid-shape shape-float h-10 w-10 rounded-[35%] bg-[#FFD0B8]" style={{ top: "180px", right: "22%" }} aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <div className="chip bg-[#27233A] text-white">Industries</div>

            <h1 className="mt-7 font-[family-name:var(--font-fraunces)] text-5xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-6xl">
              Where intelligence{" "}
              <span className="italic text-[#FF7187]">actually helps.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#706B80]">
              The same five AI pillars, applied differently depending on the
              problem. Here&apos;s where our work tends to land.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-[#FFFDF8] pb-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <a
                  key={industry.slug}
                  href={`#${industry.slug}`}
                  className="chip border border-[#E8E3ED] bg-white text-[#27233A] transition-colors hover:border-[#FF7187]/40"
                >
                  {industry.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industry sections */}
      <section className="bg-[#FFFDF8] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <Reveal key={industry.slug} delay={i % 3 === 0 ? 0 : 40}>
                  <div
                    id={industry.slug}
                    className="editorial-tilt scroll-mt-28 grid gap-8 rounded-[1.75rem] p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
                    style={{ backgroundColor: industry.bg }}
                  >
                    <div>
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/60">
                        <Icon className="h-7 w-7 text-[#27233A]" />
                      </span>
                      <h2 className="mt-6 font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-[-0.01em] text-[#27233A]">
                        {industry.label}
                      </h2>
                      <p className="mt-4 max-w-md text-sm leading-7 text-[#27233A]/75">
                        {industry.description}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/70 p-6 sm:p-7">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#27233A]/50">
                        Where this shows up
                      </p>
                      <ul className="mt-4 space-y-3">
                        {industry.useCases.map((useCase) => (
                          <li key={useCase} className="flex items-start gap-3 text-sm leading-6 text-[#27233A]">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#27233A]/50" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFFDF8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="rounded-[2.5rem] bg-[#27233A] px-8 py-14 sm:px-12 sm:py-16">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <div className="chip bg-white/10 text-[#BDEBFF]">Not seeing your industry?</div>
                  <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-[-0.01em] text-white sm:text-4xl">
                    The pillars stay the same — the problem is what matters.
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/60">
                    If your problem looks like data, documents, images, or a
                    process worth automating, it&apos;s worth a conversation.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#27233A] transition-transform duration-200 hover:-translate-y-0.5"
                >
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
