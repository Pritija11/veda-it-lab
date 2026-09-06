import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Data & AI",
  "VedAIT Labs explores practical data and AI solutions, including data systems, analytics, AI integration, automation, and intelligent software capabilities.",
  "/solutions/data-ai",
);

const capabilities = [
  {
    number: "01",
    title: "Data Systems",
    description:
      "Designing practical foundations for collecting, organizing, storing, and working with application and business data.",
  },
  {
    number: "02",
    title: "Data Analytics",
    description:
      "Turning available data into useful information that can support better understanding and technology-driven decisions.",
  },
  {
    number: "03",
    title: "AI Integration",
    description:
      "Exploring practical ways to integrate artificial intelligence capabilities into existing applications and workflows.",
  },
  {
    number: "04",
    title: "Intelligent Automation",
    description:
      "Combining automation and AI capabilities to reduce repetitive work and improve technology workflows.",
  },
  {
    number: "05",
    title: "AI-Enabled Applications",
    description:
      "Designing software experiences that use AI capabilities where they provide meaningful value to users and systems.",
  },
  {
    number: "06",
    title: "Data-Driven Systems",
    description:
      "Connecting data, applications, infrastructure, and intelligent capabilities into systems that can evolve over time.",
  },
];

const approach = [
  {
    number: "01",
    title: "Identify",
    description:
      "Understand the problem, available data, users, workflows, and where data or AI could provide meaningful value.",
  },
  {
    number: "02",
    title: "Evaluate",
    description:
      "Choose appropriate technologies and approaches based on the actual requirements rather than using AI unnecessarily.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the required data, software, or AI components around a maintainable technical foundation.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Measure system behavior, learn from results, and continuously improve the solution as requirements evolve.",
  },
];

export default function DataAIPage() {
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
                Data & AI
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                Turning data into{" "}
                <span className="text-blue-400">useful technology.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                VedAIT Labs explores practical applications of data and
                artificial intelligence across modern software systems. Our
                focus is on using these technologies where they can solve real
                problems and create measurable value.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Discuss your idea
                  <span>→</span>
                </Link>

                <Link
                  href="/research"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/20 hover:bg-white/10"
                >
                  Explore our research
                </Link>
              </div>
            </div>

            {/* Data & AI Visual */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-[#0D1422] p-5 shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Intelligence layer
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-200">
                      Data → Insight → Action
                    </p>
                  </div>

                  <span className="flex items-center gap-2 text-xs text-blue-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Connected
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-xl border border-white/10 bg-[#101827] p-4">
                      <p className="text-xs text-slate-500">Data</p>
                      <p className="mt-2 text-sm font-medium text-slate-200">
                        Sources
                      </p>
                    </div>

                    <div className="rounded-xl border border-blue-400/20 bg-blue-500/[0.06] p-4">
                      <p className="text-xs text-slate-500">Process</p>
                      <p className="mt-2 text-sm font-medium text-slate-200">
                        Analyze
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#101827] p-4">
                      <p className="text-xs text-slate-500">Output</p>
                      <p className="mt-2 text-sm font-medium text-slate-200">
                        Insight
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center py-2 text-blue-400">
                    ↓
                  </div>

                  <div className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.05] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500">
                          Intelligence
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-200">
                          AI capabilities
                        </p>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-sm text-violet-300">
                        AI
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center py-2 text-blue-400">
                    ↓
                  </div>

                  <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200">
                        Application
                      </span>
                      <span className="text-xs text-blue-300">
                        Useful outcome
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-white/10 bg-[#0D1422]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Data & AI
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Technology should make data useful.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              Data and artificial intelligence are becoming important
              components of modern software systems. But the technology itself
              is only useful when it is connected to a meaningful problem.
            </p>

            <p>
              VedAIT Labs focuses on practical applications of data and AI,
              considering the surrounding software, infrastructure, workflows,
              and requirements needed to make these capabilities useful.
            </p>

            <p>
              We are interested in building systems where data and AI support
              people and applications rather than adding unnecessary
              complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Practical applications of data and AI.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our focus spans data foundations, analytics, AI integration, and
              intelligent software capabilities.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability.number}
                className="group rounded-2xl border border-white/10 bg-[#101827] p-7 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#121c2d]"
              >
                <span className="text-sm font-semibold text-blue-400">
                  {capability.number}
                </span>

                <h3 className="mt-7 text-xl font-semibold text-slate-100 transition-colors group-hover:text-blue-400">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Our approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Start with the problem, not the technology.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              We evaluate where data and AI can provide genuine value before
              deciding which technologies or approaches should be used.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-[#101827] p-7"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 text-xs font-semibold text-blue-400">
                  {step.number}
                </div>

                <h3 className="mt-7 text-xl font-semibold text-slate-100">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.05] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                What we explore
              </p>

              <h2 className="mt-5 text-2xl font-semibold text-slate-100 sm:text-3xl">
                Exploring where intelligent technology can create value.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Data and AI continue to evolve quickly. We focus on
                understanding practical applications rather than following
                technology trends without a clear purpose.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Data
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  Data foundations
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Understanding how data is collected, structured, stored, and
                  made available to applications.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Intelligence
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  AI capabilities
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Exploring AI capabilities that can support applications,
                  workflows, and decision-making.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Automation
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  Intelligent workflows
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Combining automation and intelligent capabilities to improve
                  repetitive or data-driven processes.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Software
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  AI-enabled applications
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Integrating useful AI capabilities into software where they
                  provide a clear user or business benefit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="border-t border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              href="/solutions/software-engineering"
              className="group rounded-2xl border border-white/10 bg-[#101827] p-8 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#121c2d]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-400">
                Related solution
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-slate-100 group-hover:text-blue-400">
                Software Engineering
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                Build the application and backend systems that turn data and
                intelligent capabilities into useful software.
              </p>

              <span className="mt-6 inline-block text-sm font-medium text-slate-500 group-hover:text-blue-400">
                Explore Software Engineering →
              </span>
            </Link>

            <Link
              href="/solutions/devops-automation"
              className="group rounded-2xl border border-white/10 bg-[#101827] p-8 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#121c2d]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-400">
                Related solution
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-slate-100 group-hover:text-blue-400">
                DevOps & Automation
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                Connect applications and intelligent systems with automated
                infrastructure and delivery workflows.
              </p>

              <span className="mt-6 inline-block text-sm font-medium text-slate-500 group-hover:text-blue-400">
                Explore DevOps →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-[#101827] px-7 py-14 text-center sm:px-12 sm:py-16">
            <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Explore what is possible
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                Have a data or AI problem worth exploring?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
                Talk with VedAIT Labs about your data, software, automation, or
                AI requirements.
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