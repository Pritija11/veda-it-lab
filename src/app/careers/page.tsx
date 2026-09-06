import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Careers at VedAIT Labs",
  "Explore career opportunities at VedAIT Labs, a technology startup working across cloud engineering, DevOps, software engineering, infrastructure security, data, and emerging technology.",
  "/careers",
);

const areas = [
  {
    number: "01",
    title: "Cloud Engineering",
    description:
      "Work with cloud infrastructure, architecture, reliability, scalability, and modern infrastructure practices.",
  },
  {
    number: "02",
    title: "DevOps & Automation",
    description:
      "Build automated workflows around CI/CD, infrastructure as code, deployments, monitoring, and operations.",
  },
  {
    number: "03",
    title: "Software Engineering",
    description:
      "Design and build maintainable applications, APIs, backend systems, and software integrations.",
  },
  {
    number: "04",
    title: "Security",
    description:
      "Help build secure systems through practical infrastructure, access control, configuration, and monitoring practices.",
  },
];

const values = [
  {
    title: "Keep learning",
    description:
      "Technology changes constantly. We value curiosity, experimentation, and the willingness to keep improving.",
  },
  {
    title: "Build with purpose",
    description:
      "We focus on solving real problems rather than adopting technology simply because it is new.",
  },
  {
    title: "Think long term",
    description:
      "Good systems should remain understandable, maintainable, and adaptable as requirements change.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 pt-36 sm:pt-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-1/4 top-40 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

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
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Careers
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                Build technology.{" "}
                <span className="text-blue-400">Keep growing.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                VedAIT Labs is building a technology company around engineering,
                curiosity, and continuous learning. We are interested in people
                who want to understand systems deeply and build useful
                technology.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Get in touch
                  <span>→</span>
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/20 hover:bg-white/10"
                >
                  About VedAIT Labs
                </Link>
              </div>
            </div>

            {/* Technical Visual */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-[#0D1422] p-5 shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Engineering environment
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-200">
                      Learn → Build → Improve
                    </p>
                  </div>

                  <span className="flex items-center gap-2 text-xs text-blue-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Growing
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] p-5">
                    <p className="text-xs uppercase tracking-[0.15em] text-blue-300">
                      Learn
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Understand technologies and systems.
                    </p>
                  </div>

                  <div className="ml-8 h-5 w-px bg-blue-400/30" />

                  <div className="rounded-2xl border border-white/10 bg-[#101827] p-5">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Build
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Turn ideas into working technology.
                    </p>
                  </div>

                  <div className="ml-16 h-5 w-px bg-blue-400/30" />

                  <div className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.05] p-5">
                    <p className="text-xs uppercase tracking-[0.15em] text-violet-300">
                      Improve
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Learn from the system and make it better.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working at VedAIT */}
      <section className="border-b border-white/10 bg-[#0D1422]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Life at VedAIT Labs
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              An environment built around engineering and learning.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              We believe strong technology comes from people who are willing to
              learn, question assumptions, and understand why a particular
              solution makes sense.
            </p>

            <p>
              At VedAIT Labs, engineering is not limited to writing code. It
              includes understanding infrastructure, architecture, security,
              operations, users, and the broader problem being solved.
            </p>

            <p>
              As the company grows, we want to create opportunities for people
              to work on meaningful technical problems and develop their
              engineering skills along the way.
            </p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Engineering areas
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Where you could contribute.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our work spans several connected areas of modern technology.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {areas.map((area) => (
              <div
                key={area.number}
                className="group rounded-2xl border border-white/10 bg-[#101827] p-7 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#121c2d] sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="text-sm font-semibold text-blue-400">
                      {area.number}
                    </span>

                    <h3 className="mt-6 text-xl font-semibold text-slate-100 transition-colors group-hover:text-blue-400">
                      {area.title}
                    </h3>
                  </div>

                  <span className="text-2xl text-slate-700 transition-colors group-hover:text-blue-400/40">
                    +
                  </span>
                </div>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              What we value
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              The way we approach engineering.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="rounded-2xl border border-white/10 bg-[#101827] p-7"
              >
                <span className="text-sm font-semibold text-blue-400">
                  0{index + 1}
                </span>

                <h3 className="mt-7 text-xl font-semibold text-slate-100">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Opportunities */}
      <section className="bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-blue-400/20 bg-blue-500/[0.05] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Opportunities
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                Growing with the company.
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-slate-400">
                As VedAIT Labs grows, opportunities will develop across
                engineering, infrastructure, operations, and other technology
                areas. We are interested in people who are motivated to learn
                and contribute.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Contact us
                <span>→</span>
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#101827] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                What we look for
              </p>

              <div className="mt-7 space-y-5">
                <div className="flex gap-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                  <p className="text-sm leading-7 text-slate-400">
                    Curiosity about how technology works.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                  <p className="text-sm leading-7 text-slate-400">
                    A willingness to learn and improve.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                  <p className="text-sm leading-7 text-slate-400">
                    Practical problem-solving and clear thinking.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                  <p className="text-sm leading-7 text-slate-400">
                    Interest in building reliable technology.
                  </p>
                </div>
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
                Join the journey
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                Interested in building technology with VedAIT Labs?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
                Tell us about yourself, your technical interests, and what you
                would like to build.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Start a conversation
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}