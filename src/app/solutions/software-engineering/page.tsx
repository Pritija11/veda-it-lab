import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Software Engineering",
  "VedAIT Labs builds maintainable and scalable software solutions around real business and technical requirements, with a focus on architecture, development, APIs, and system reliability.",
  "/solutions/software-engineering",
);

const capabilities = [
  {
    number: "01",
    title: "Application Architecture",
    description:
      "Designing software structures that support maintainability, scalability, reliability, and changing requirements.",
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "Building modern web applications around clear requirements, practical user experiences, and maintainable engineering foundations.",
  },
  {
    number: "03",
    title: "API Development",
    description:
      "Designing APIs that provide clear interfaces between applications, services, and other systems.",
  },
  {
    number: "04",
    title: "Backend Systems",
    description:
      "Developing server-side systems that handle application logic, data, authentication, and integrations.",
  },
  {
    number: "05",
    title: "System Integration",
    description:
      "Connecting applications and external services through well-defined interfaces and reliable integration patterns.",
  },
  {
    number: "06",
    title: "Software Modernization",
    description:
      "Evaluating existing applications and identifying practical opportunities to improve their architecture and maintainability.",
  },
];

const principles = [
  {
    number: "01",
    title: "Understand first",
    description:
      "Good software starts with a clear understanding of the problem, users, requirements, and constraints.",
  },
  {
    number: "02",
    title: "Design deliberately",
    description:
      "Architecture should reflect actual requirements rather than unnecessary complexity.",
  },
  {
    number: "03",
    title: "Build maintainably",
    description:
      "Readable structure, clear interfaces, and sensible engineering practices make systems easier to evolve.",
  },
  {
    number: "04",
    title: "Design to evolve",
    description:
      "Software should be able to adapt as business requirements, users, and technical environments change.",
  },
];

export default function SoftwareEngineeringPage() {
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
                Software Engineering
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                Software built for{" "}
                <span className="text-blue-400">real-world systems.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                VedAIT Labs is a technology startup building modern digital
                solutions around practical engineering principles. We focus on
                maintainable software, thoughtful architecture, reliable
                systems, and technology that can evolve with changing needs.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Discuss your software
                  <span>→</span>
                </Link>

                <Link
                  href="/solutions/cloud-engineering"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/20 hover:bg-white/10"
                >
                  Explore Cloud Engineering
                </Link>
              </div>
            </div>

            {/* Architecture Visual */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-[#0D1422] p-5 shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      System architecture
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-200">
                      Application Stack
                    </p>
                  </div>

                  <span className="flex items-center gap-2 text-xs text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Modular
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200">
                        Client Layer
                      </span>
                      <span className="text-xs text-blue-300">
                        Interface
                      </span>
                    </div>
                  </div>

                  <div className="mx-auto h-4 w-px bg-blue-400/30" />

                  <div className="rounded-2xl border border-white/10 bg-[#101827] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200">
                        Application Layer
                      </span>
                      <span className="text-xs text-slate-500">
                        Business Logic
                      </span>
                    </div>
                  </div>

                  <div className="mx-auto h-4 w-px bg-blue-400/30" />

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-[#101827] p-4">
                      <p className="text-xs text-slate-500">API</p>
                      <p className="mt-2 text-sm font-medium text-slate-200">
                        Services
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#101827] p-4">
                      <p className="text-xs text-slate-500">Data</p>
                      <p className="mt-2 text-sm font-medium text-slate-200">
                        Storage
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] text-slate-500">
                      Scalable
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] text-slate-500">
                      Maintainable
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] text-slate-500">
                      Reliable
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
              Software engineering
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Engineering software around the problem.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              Software is most effective when its architecture and engineering
              decisions are connected to the problem it is intended to solve.
            </p>

            <p>
              VedAIT Labs approaches software engineering through clear
              requirements, thoughtful system design, maintainable code, and
              infrastructure that supports the application throughout its
              lifecycle.
            </p>

            <p>
              Whether building a new system or improving an existing one, we
              focus on practical engineering decisions rather than unnecessary
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
              Engineering across the application lifecycle.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our software engineering focus covers architecture, development,
              integration, backend systems, and modernization.
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

      {/* Engineering Principles */}
      <section className="border-y border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Engineering principles
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Good software starts with good decisions.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              We keep engineering decisions connected to requirements, system
              behavior, and long-term maintainability.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="rounded-2xl border border-white/10 bg-[#101827] p-7"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 text-xs font-semibold text-blue-400">
                  {principle.number}
                </div>

                <h3 className="mt-7 text-xl font-semibold text-slate-100">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Lifecycle */}
      <section className="bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.05] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Development lifecycle
              </p>

              <h2 className="mt-5 text-2xl font-semibold text-slate-100 sm:text-3xl">
                From requirements to maintainable software.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Software development is an ongoing process. Architecture,
                implementation, testing, deployment, and maintenance all
                contribute to the quality of the final system.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  01
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  Requirements
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Understand the problem, users, technical requirements, and
                  constraints before implementation begins.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  02
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  Architecture
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Define the system structure, interfaces, data flow, and
                  technical boundaries.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  03
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  Development
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Implement the system using clear structure, appropriate
                  abstractions, and maintainable engineering practices.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  04
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  Improve
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Use testing, monitoring, feedback, and ongoing maintenance to
                  improve the system over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud + DevOps Connection */}
      <section className="border-t border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Connected engineering
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Software does not exist separately from its infrastructure.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Modern applications depend on the infrastructure and delivery
              systems around them. This is why our software engineering
              approach connects naturally with our cloud and DevOps
              capabilities.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Link
              href="/solutions/cloud-engineering"
              className="group rounded-2xl border border-white/10 bg-[#101827] p-8 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#121c2d]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-400">
                Infrastructure
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-slate-100 group-hover:text-blue-400">
                Cloud Engineering
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Build the infrastructure that applications depend on for
                scalability, reliability, and operational flexibility.
              </p>

              <span className="mt-6 inline-block text-sm font-medium text-slate-500 group-hover:text-blue-400">
                Explore Cloud Engineering →
              </span>
            </Link>

            <Link
              href="/solutions/devops-automation"
              className="group rounded-2xl border border-white/10 bg-[#101827] p-8 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#121c2d]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-400">
                Delivery
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-slate-100 group-hover:text-blue-400">
                DevOps & Automation
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Connect software development with automated deployment and
                operational workflows.
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
                Build better software
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                Have a software system worth building?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
                Talk with VedAIT Labs about your application, backend, API, or
                software engineering requirements.
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