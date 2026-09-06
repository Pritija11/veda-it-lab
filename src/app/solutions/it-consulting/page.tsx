import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "IT Consulting",
  "VedAIT Labs provides practical IT consulting focused on technology strategy, architecture, infrastructure, software systems, cloud, DevOps, and digital transformation.",
  "/solutions/it-consulting",
);

const capabilities = [
  {
    number: "01",
    title: "Technology Strategy",
    description:
      "Helping organizations evaluate technology choices and develop practical strategies aligned with their goals and requirements.",
  },
  {
    number: "02",
    title: "Architecture Advisory",
    description:
      "Reviewing software and infrastructure architecture to identify practical approaches for scalability, reliability, and maintainability.",
  },
  {
    number: "03",
    title: "Cloud Strategy",
    description:
      "Evaluating cloud requirements, infrastructure approaches, and modernization opportunities based on actual workloads and constraints.",
  },
  {
    number: "04",
    title: "DevOps Advisory",
    description:
      "Identifying opportunities to improve development, deployment, automation, and operational workflows.",
  },
  {
    number: "05",
    title: "Technology Assessment",
    description:
      "Assessing existing systems, technical decisions, and infrastructure to identify areas for improvement.",
  },
  {
    number: "06",
    title: "Digital Transformation",
    description:
      "Supporting practical technology changes that help organizations improve processes, systems, and digital capabilities.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "Learn about the organization, current systems, objectives, constraints, and the problem that needs to be addressed.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Evaluate the existing technology environment and identify strengths, limitations, risks, and opportunities.",
  },
  {
    number: "03",
    title: "Recommend",
    description:
      "Develop practical recommendations based on requirements, technical considerations, and long-term maintainability.",
  },
  {
    number: "04",
    title: "Plan",
    description:
      "Turn recommendations into an actionable technology roadmap with clear priorities and next steps.",
  },
];

export default function ITConsultingPage() {
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
                IT Consulting
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                Better technology decisions{" "}
                <span className="text-blue-400">start with clarity.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                VedAIT Labs is a technology startup helping organizations think
                through technology, infrastructure, software, and digital
                transformation decisions with a practical engineering
                perspective.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Discuss your technology
                  <span>→</span>
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/20 hover:bg-white/10"
                >
                  Explore solutions
                </Link>
              </div>
            </div>

            {/* Consulting Visual */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-[#0D1422] p-5 shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Technology assessment
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-200">
                      Decision Framework
                    </p>
                  </div>

                  <span className="flex items-center gap-2 text-xs text-blue-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Structured
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200">
                        Business Requirements
                      </span>
                      <span className="text-xs text-blue-300">
                        Understand
                      </span>
                    </div>
                  </div>

                  <div className="mx-auto h-4 w-px bg-blue-400/30" />

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-[#101827] p-4">
                      <p className="text-xs text-slate-500">Current State</p>
                      <p className="mt-2 text-sm font-medium text-slate-200">
                        Assess
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#101827] p-4">
                      <p className="text-xs text-slate-500">Options</p>
                      <p className="mt-2 text-sm font-medium text-slate-200">
                        Evaluate
                      </p>
                    </div>
                  </div>

                  <div className="mx-auto h-4 w-px bg-blue-400/30" />

                  <div className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.05] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200">
                        Technology Direction
                      </span>
                      <span className="text-xs text-violet-300">
                        Recommend
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] text-slate-500">
                      Strategy
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] text-slate-500">
                      Architecture
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] text-slate-500">
                      Roadmap
                    </span>
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
              IT consulting
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Technology decisions should have a reason behind them.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              Organizations often face a wide range of technology choices.
              Selecting the right approach requires understanding the problem,
              existing systems, resources, and long-term objectives.
            </p>

            <p>
              VedAIT Labs brings an engineering perspective to technology
              consulting, connecting strategy with software, cloud
              infrastructure, DevOps, security, and system architecture.
            </p>

            <p>
              Our focus is on practical recommendations that can be understood,
              prioritized, and turned into actionable technology decisions.
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
              Consulting grounded in engineering.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our consulting focus spans technology strategy, architecture,
              cloud, DevOps, system assessment, and digital transformation.
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
              From uncertainty to an actionable direction.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              We structure consulting around understanding the current
              situation, evaluating options, and creating practical next
              steps.
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

      {/* Areas of Expertise */}
      <section className="bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.05] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Areas of expertise
              </p>

              <h2 className="mt-5 text-2xl font-semibold text-slate-100 sm:text-3xl">
                One technology decision can affect the entire system.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Software, infrastructure, security, and operations are
                connected. Our consulting approach considers those
                relationships when evaluating technology decisions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/solutions/cloud-engineering"
                className="group rounded-2xl border border-white/10 bg-[#101827] p-7 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#121c2d]"
              >
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Infrastructure
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-100 group-hover:text-blue-400">
                  Cloud Engineering
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Evaluate cloud architecture, infrastructure, scalability,
                  reliability, and modernization.
                </p>
              </Link>

              <Link
                href="/solutions/devops-automation"
                className="group rounded-2xl border border-white/10 bg-[#101827] p-7 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#121c2d]"
              >
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Delivery
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-100 group-hover:text-blue-400">
                  DevOps & Automation
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Improve software delivery, deployment, infrastructure
                  automation, and operational workflows.
                </p>
              </Link>

              <Link
                href="/solutions/software-engineering"
                className="group rounded-2xl border border-white/10 bg-[#101827] p-7 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#121c2d]"
              >
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Software
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-100 group-hover:text-blue-400">
                  Software Engineering
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Assess application architecture, backend systems, APIs, and
                  software modernization opportunities.
                </p>
              </Link>

              <Link
                href="/solutions/infrastructure-security"
                className="group rounded-2xl border border-white/10 bg-[#101827] p-7 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#121c2d]"
              >
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Security
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-100 group-hover:text-blue-400">
                  Infrastructure Security
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Consider security across access, configuration, networking,
                  infrastructure, and operations.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="border-t border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Decision framework
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Recommendations should balance technology and reality.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Technical decisions are influenced by more than what is
              technically possible. We consider practical constraints when
              evaluating technology directions.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
              <h3 className="text-lg font-semibold text-slate-100">
                Requirements
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                What does the organization actually need the technology to
                achieve?
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
              <h3 className="text-lg font-semibold text-slate-100">
                Complexity
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Does the proposed solution introduce complexity that is
                difficult to justify or maintain?
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
              <h3 className="text-lg font-semibold text-slate-100">
                Resources
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Can the organization realistically operate and maintain the
                proposed technology?
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
              <h3 className="text-lg font-semibold text-slate-100">
                Evolution
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Can the technology direction adapt as requirements and systems
                change?
              </p>
            </div>
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
                Make better technology decisions
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                Not sure where your technology should go next?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
                Talk with VedAIT Labs about your software, cloud,
                infrastructure, DevOps, or broader technology requirements.
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