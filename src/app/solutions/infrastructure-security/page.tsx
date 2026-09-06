import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Infrastructure Security",
  "VedAIT Labs focuses on infrastructure security through access control, secure configuration, network protection, monitoring, and practical security practices for modern cloud environments.",
  "/solutions/infrastructure-security",
);

const capabilities = [
  {
    number: "01",
    title: "Access Control",
    description:
      "Designing practical access controls around identity, permissions, roles, and the principle of least privilege.",
  },
  {
    number: "02",
    title: "Secure Configuration",
    description:
      "Reviewing infrastructure configurations and applying security-conscious practices across cloud environments.",
  },
  {
    number: "03",
    title: "Network Security",
    description:
      "Structuring network boundaries, traffic controls, and connectivity with security and operational requirements in mind.",
  },
  {
    number: "04",
    title: "Infrastructure Monitoring",
    description:
      "Creating visibility into infrastructure activity and system behavior to support ongoing security awareness.",
  },
  {
    number: "05",
    title: "Security Automation",
    description:
      "Using automation to make security checks and infrastructure practices more consistent and repeatable.",
  },
  {
    number: "06",
    title: "Risk-Aware Infrastructure",
    description:
      "Considering security risks throughout infrastructure design rather than treating security as a separate final step.",
  },
];

const principles = [
  {
    number: "01",
    title: "Least privilege",
    description:
      "Access should be limited to what people and systems actually need to perform their responsibilities.",
  },
  {
    number: "02",
    title: "Secure by design",
    description:
      "Security considerations should be part of architecture and infrastructure decisions from the beginning.",
  },
  {
    number: "03",
    title: "Visibility matters",
    description:
      "Monitoring and useful operational information help teams understand what is happening across their infrastructure.",
  },
  {
    number: "04",
    title: "Automate consistently",
    description:
      "Repeatable security processes can reduce configuration drift and unnecessary manual work.",
  },
];

export default function InfrastructureSecurityPage() {
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
                Infrastructure Security
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                Security built into{" "}
                <span className="text-blue-400">modern infrastructure.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                VedAIT Labs is a technology startup focused on modern digital
                and infrastructure solutions. We approach infrastructure
                security as an integral part of cloud architecture,
                configuration, access, automation, and operations.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Discuss infrastructure security
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

            {/* Security Visual */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-[#0D1422] p-5 shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Security layer
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-200">
                      Infrastructure Controls
                    </p>
                  </div>

                  <span className="flex items-center gap-2 text-xs text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Protected
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200">
                        Identity & Access
                      </span>
                      <span className="text-xs text-blue-300">
                        Controlled
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-[#101827] p-4">
                      <p className="text-xs text-slate-500">Network</p>
                      <p className="mt-2 text-sm font-medium text-slate-200">
                        Segmented
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#101827] p-4">
                      <p className="text-xs text-slate-500">Configuration</p>
                      <p className="mt-2 text-sm font-medium text-slate-200">
                        Reviewed
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.05] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200">
                        Monitoring & Visibility
                      </span>
                      <span className="text-xs text-violet-300">
                        Active
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] text-slate-500">
                      Access
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] text-slate-500">
                      Network
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] text-slate-500">
                      Monitor
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
              Infrastructure security
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Security is part of the infrastructure.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              Modern infrastructure is made up of interconnected systems,
              identities, networks, applications, and services. Each layer
              introduces security considerations that can affect the overall
              environment.
            </p>

            <p>
              VedAIT Labs focuses on practical infrastructure security
              practices that can be incorporated into architecture,
              configuration, access management, automation, and operations.
            </p>

            <p>
              Rather than treating security as a single feature, we consider
              it throughout the infrastructure lifecycle so systems can be
              designed and operated with security in mind.
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
              Practical security across the infrastructure stack.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our focus covers the infrastructure controls and practices that
              help create more secure and manageable technology environments.
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

      {/* Principles */}
      <section className="border-y border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Security principles
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Security that supports engineering.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Effective infrastructure security should work alongside
              development and operations rather than becoming an obstacle to
              them.
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

      {/* Security Lifecycle */}
      <section className="bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.05] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Security lifecycle
              </p>

              <h2 className="mt-5 text-2xl font-semibold text-slate-100 sm:text-3xl">
                Think about security before the infrastructure goes live.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Security becomes more manageable when it is considered during
                architecture and continuously maintained throughout the
                infrastructure lifecycle.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  01
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  Design
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Identify security requirements while defining architecture
                  and infrastructure boundaries.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  02
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  Configure
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Apply appropriate access, networking, and infrastructure
                  configuration practices.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  03
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  Monitor
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Maintain visibility into infrastructure activity and system
                  behavior.
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
                  Review infrastructure and continuously improve security
                  practices as systems evolve.
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
              href="/solutions/cloud-engineering"
              className="group rounded-2xl border border-white/10 bg-[#101827] p-8 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#121c2d]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-400">
                Related solution
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-slate-100 group-hover:text-blue-400">
                Cloud Engineering
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                Design scalable and reliable cloud infrastructure with
                security considered throughout the architecture.
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
                Related solution
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-slate-100 group-hover:text-blue-400">
                DevOps & Automation
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                Connect infrastructure security with automated delivery and
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
                Secure your foundation
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                Building infrastructure with security in mind?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
                Talk with VedAIT Labs about your cloud infrastructure,
                security, access, or operational requirements.
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