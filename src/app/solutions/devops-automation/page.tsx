import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "DevOps & Automation",
  "VedAIT Labs provides DevOps and automation solutions focused on CI/CD, infrastructure as code, deployment automation, observability, and reliable software delivery.",
  "/solutions/devops-automation",
);

const capabilities = [
  {
    number: "01",
    title: "CI/CD Pipelines",
    description:
      "Designing automated workflows that help teams build, test, and deploy software consistently.",
  },
  {
    number: "02",
    title: "Infrastructure as Code",
    description:
      "Managing infrastructure through repeatable and version-controlled configuration instead of manual provisioning.",
  },
  {
    number: "03",
    title: "Deployment Automation",
    description:
      "Reducing manual deployment work through automated and consistent application delivery workflows.",
  },
  {
    number: "04",
    title: "Environment Management",
    description:
      "Creating consistent development, staging, and production environments that are easier to manage and maintain.",
  },
  {
    number: "05",
    title: "Monitoring & Observability",
    description:
      "Building visibility into applications and infrastructure to help teams understand system health and behavior.",
  },
  {
    number: "06",
    title: "Operational Automation",
    description:
      "Automating repetitive operational processes to improve consistency, efficiency, and reliability.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Plan",
    description:
      "Understand the application lifecycle, infrastructure, deployment requirements, and operational constraints.",
  },
  {
    number: "02",
    title: "Automate",
    description:
      "Identify repetitive processes and turn them into consistent, repeatable workflows.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Connect development and infrastructure workflows so software can move through environments reliably.",
  },
  {
    number: "04",
    title: "Observe",
    description:
      "Use monitoring and operational feedback to understand systems and continuously improve the delivery process.",
  },
];

export default function DevOpsAutomationPage() {
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
                DevOps & automation for{" "}
                <span className="text-blue-400">
                  reliable software delivery.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                VedAIT Labs is a technology startup focused on modern
                infrastructure and software engineering. Our DevOps approach
                connects development, infrastructure, automation, and
                operations to create more consistent delivery workflows.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Discuss your workflow
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

            {/* DevOps Pipeline Visual */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-[#0D1422] p-5 shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Delivery workflow
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-200">
                      Automated Pipeline
                    </p>
                  </div>

                  <span className="flex items-center gap-2 text-xs text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Continuous
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 rounded-xl border border-blue-400/20 bg-blue-500/[0.06] p-4">
                      <p className="text-xs text-slate-500">01</p>
                      <p className="mt-1 text-sm font-medium text-slate-200">
                        Code
                      </p>
                    </div>

                    <span className="text-slate-600">→</span>

                    <div className="flex-1 rounded-xl border border-white/10 bg-[#101827] p-4">
                      <p className="text-xs text-slate-500">02</p>
                      <p className="mt-1 text-sm font-medium text-slate-200">
                        Build
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center py-1 text-blue-400">
                    ↓
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 rounded-xl border border-white/10 bg-[#101827] p-4">
                      <p className="text-xs text-slate-500">03</p>
                      <p className="mt-1 text-sm font-medium text-slate-200">
                        Test
                      </p>
                    </div>

                    <span className="text-slate-600">→</span>

                    <div className="flex-1 rounded-xl border border-violet-400/20 bg-violet-500/[0.05] p-4">
                      <p className="text-xs text-slate-500">04</p>
                      <p className="mt-1 text-sm font-medium text-slate-200">
                        Deploy
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] text-slate-500">
                      CI/CD
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] text-slate-500">
                      IaC
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] text-slate-500">
                      Observe
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
              DevOps & automation
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Better delivery starts with better systems.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              Modern software teams depend on more than application code.
              Build systems, deployment processes, infrastructure, monitoring,
              and operational workflows all influence how reliably software
              reaches users.
            </p>

            <p>
              VedAIT Labs approaches DevOps as an engineering practice that
              connects these areas through automation and well-defined
              processes.
            </p>

            <p>
              The objective is not automation for its own sake. It is to
              reduce unnecessary manual work, improve consistency, and create
              delivery systems that teams can understand and evolve.
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
              Automation across the delivery lifecycle.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our DevOps focus covers the processes and infrastructure that
              support modern software delivery and operations.
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

      {/* Workflow */}
      <section className="border-y border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Our workflow
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              From code changes to observable systems.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step) => (
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

      {/* Technical Focus */}
      <section className="bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.05] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Technical focus
              </p>

              <h2 className="mt-5 text-2xl font-semibold text-slate-100 sm:text-3xl">
                Infrastructure and delivery should work together.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                DevOps becomes more effective when application delivery and
                infrastructure are considered as connected parts of the same
                system.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <h3 className="text-lg font-semibold text-slate-100">
                  Versioned infrastructure
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Infrastructure changes can be managed through repeatable,
                  reviewable, and version-controlled workflows.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <h3 className="text-lg font-semibold text-slate-100">
                  Consistent deployments
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Automated deployment processes can reduce differences between
                  environments and minimize manual intervention.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <h3 className="text-lg font-semibold text-slate-100">
                  Operational visibility
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Monitoring and observability provide useful feedback about
                  application and infrastructure behavior.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
                <h3 className="text-lg font-semibold text-slate-100">
                  Continuous improvement
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Delivery workflows can evolve as applications, teams, and
                  infrastructure requirements change.
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
                Build scalable and reliable cloud infrastructure that supports
                modern applications and automated delivery.
              </p>

              <span className="mt-6 inline-block text-sm font-medium text-slate-500 group-hover:text-blue-400">
                Explore Cloud Engineering →
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
                Incorporate security into infrastructure, access management,
                configuration, and operational workflows.
              </p>

              <span className="mt-6 inline-block text-sm font-medium text-slate-500 group-hover:text-blue-400">
                Explore security →
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
                Improve your delivery
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                Ready to make your software delivery more reliable?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
                Talk with VedAIT Labs about your DevOps, automation, cloud
                infrastructure, or deployment requirements.
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