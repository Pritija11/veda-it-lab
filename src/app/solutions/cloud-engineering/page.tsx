import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Cloud Engineering",
  "VedAIT Labs provides cloud engineering solutions focused on scalable architecture, reliable infrastructure, cloud modernization, security, and operational efficiency.",
  "/solutions/cloud-engineering",
);

const capabilities = [
  {
    number: "01",
    title: "Cloud Architecture",
    description:
      "Designing cloud architectures around scalability, reliability, security, and the requirements of modern applications.",
  },
  {
    number: "02",
    title: "Infrastructure Design",
    description:
      "Planning and structuring cloud infrastructure that is maintainable, resilient, and aligned with application needs.",
  },
  {
    number: "03",
    title: "Scalability & Reliability",
    description:
      "Building infrastructure with the capacity to handle changing workloads while maintaining dependable system performance.",
  },
  {
    number: "04",
    title: "Cloud Modernization",
    description:
      "Helping evaluate and improve existing infrastructure so systems can take advantage of modern cloud practices.",
  },
  {
    number: "05",
    title: "Infrastructure Automation",
    description:
      "Using automation and infrastructure-as-code practices to make infrastructure provisioning and management more consistent.",
  },
  {
    number: "06",
    title: "Cloud Security",
    description:
      "Considering access control, infrastructure protection, configuration, and security throughout the cloud environment.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding the application, infrastructure, workloads, requirements, and constraints.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We define an infrastructure approach focused on reliability, scalability, security, and operational simplicity.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "We turn the architecture into practical infrastructure using modern cloud and automation practices.",
  },
  {
    number: "04",
    title: "Evolve",
    description:
      "Cloud environments should adapt over time. We focus on maintainable foundations that can evolve with changing needs.",
  },
];

export default function CloudEngineeringPage() {
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
                Core Solution
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                Cloud engineering for{" "}
                <span className="text-blue-400">modern infrastructure.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                VedAIT Labs is a technology startup focused on building modern
                digital and infrastructure solutions. Our cloud engineering
                approach focuses on scalable architecture, reliable
                infrastructure, automation, and security.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Discuss your infrastructure
                  <span>→</span>
                </Link>

                <Link
                  href="/solutions/devops-automation"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/20 hover:bg-white/10"
                >
                  Explore DevOps
                </Link>
              </div>
            </div>

            {/* Technical Cloud Visual */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-[#0D1422] p-5 shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Infrastructure
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-200">
                      Cloud Architecture
                    </p>
                  </div>

                  <span className="flex items-center gap-2 text-xs text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Designed to scale
                  </span>
                </div>

                <div className="relative mt-6 space-y-4">
                  <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200">
                        Application Layer
                      </span>
                      <span className="text-xs text-blue-300">
                        Workloads
                      </span>
                    </div>
                  </div>

                  <div className="mx-auto h-5 w-px bg-blue-400/30" />

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-[#101827] p-4">
                      <span className="text-xs text-slate-500">
                        Compute
                      </span>
                      <p className="mt-2 text-sm font-medium text-slate-200">
                        Scalable
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#101827] p-4">
                      <span className="text-xs text-slate-500">
                        Networking
                      </span>
                      <p className="mt-2 text-sm font-medium text-slate-200">
                        Resilient
                      </p>
                    </div>
                  </div>

                  <div className="mx-auto h-5 w-px bg-blue-400/30" />

                  <div className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.05] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200">
                        Infrastructure Layer
                      </span>
                      <span className="text-xs text-violet-300">
                        Automated
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] text-slate-500">
                      Security
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] text-slate-500">
                      Monitoring
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] text-slate-500">
                      Automation
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
              Cloud engineering
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Infrastructure designed around the system.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              Cloud infrastructure is more than choosing where an application
              runs. Architecture, networking, compute, storage, security,
              monitoring, and deployment all contribute to how a system
              behaves.
            </p>

            <p>
              VedAIT Labs approaches cloud engineering from a systems
              perspective, connecting infrastructure decisions with application
              requirements and operational needs.
            </p>

            <p>
              The goal is to create infrastructure that is understandable,
              maintainable, secure, and capable of evolving as workloads and
              requirements change.
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
              Building blocks for modern cloud environments.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our cloud engineering focus covers the infrastructure layers
              needed to build dependable and adaptable technology systems.
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
              From requirements to reliable infrastructure.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-white/10 bg-[#101827] p-7"
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

      {/* Related Solutions */}
      <section className="bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
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
                Connect cloud infrastructure with automated development,
                deployment, and operational workflows.
              </p>

              <span className="mt-6 inline-block text-sm font-medium text-slate-500 group-hover:text-blue-400">
                Explore DevOps →
              </span>
            </Link>

            <Link
              href="/solutions/infrastructure-security"
              className="group rounded-2xl border border-white/10 bg-[#101827] p-8 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#121c2d]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-400">
                Related solution
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-slate-100 group-hover:text-blue-400">
                Infrastructure Security
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                Build security considerations into cloud infrastructure,
                access, configuration, and operational practices.
              </p>

              <span className="mt-6 inline-block text-sm font-medium text-slate-500 group-hover:text-blue-400">
                Explore security →
              </span>
            </Link>
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
                Build better infrastructure
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                Building or improving your cloud environment?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
                Talk with VedAIT Labs about your cloud architecture,
                infrastructure, or modernization requirements.
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