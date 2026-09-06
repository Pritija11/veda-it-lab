import type { Metadata } from "next";
import Link from "next/link";

import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Technology Solutions",
  "Explore technology solutions from VedAIT Labs, including cloud engineering, DevOps and automation, infrastructure security, software engineering, data and AI, and IT consulting.",
  "/solutions",
);

export default function SolutionsPage() {
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
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Our Solutions
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
              Technology built around{" "}
              <span className="text-blue-400">real problems.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              VedAIT Labs provides practical technology solutions across cloud
              infrastructure, DevOps, security, software engineering, data,
              and technology strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={service.href}
                className={`group relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 sm:p-10 ${
                  service.core
                    ? "border-blue-400/20 bg-blue-500/[0.06] hover:border-blue-400/40 hover:bg-blue-500/[0.1]"
                    : "border-white/10 bg-[#101827] hover:border-white/20 hover:bg-[#131d2e]"
                }`}
              >
                {service.core && (
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
                )}

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">
                      0{index + 1}
                    </span>

                    {service.core && (
                      <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                        Core capability
                      </span>
                    )}
                  </div>

                  <h2 className="mt-10 text-2xl font-semibold text-slate-100 transition-colors group-hover:text-blue-400 sm:text-3xl">
                    {service.title}
                  </h2>

                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
                    {service.shortDescription}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors group-hover:text-blue-400">
                    Explore solution
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
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
              Understand. Engineer. Evolve.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Good technology starts with understanding the problem. We focus
              on building practical solutions that can remain reliable as
              requirements and systems grow.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
              <span className="text-sm font-semibold text-blue-400">01</span>

              <h3 className="mt-7 text-xl font-semibold text-slate-100">
                Understand
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                We start by understanding the technical requirements,
                constraints, and problems behind the project.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
              <span className="text-sm font-semibold text-blue-400">02</span>

              <h3 className="mt-7 text-xl font-semibold text-slate-100">
                Engineer
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                We design and build solutions with an emphasis on reliability,
                security, maintainability, and practical implementation.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101827] p-7">
              <span className="text-sm font-semibold text-blue-400">03</span>

              <h3 className="mt-7 text-xl font-semibold text-slate-100">
                Evolve
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Systems should be able to change. We consider scalability,
                automation, and future requirements from the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus */}
      <section className="bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Core focus
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                Cloud and DevOps at the center.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                Cloud engineering and DevOps & automation form the core of our
                technical focus. They provide the infrastructure and delivery
                foundation that modern digital systems depend on.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] p-7">
                <div className="text-2xl text-blue-400">01</div>

                <h3 className="mt-6 text-lg font-semibold text-slate-100">
                  Cloud Engineering
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Scalable and reliable cloud infrastructure.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] p-7">
                <div className="text-2xl text-blue-400">02</div>

                <h3 className="mt-6 text-lg font-semibold text-slate-100">
                  DevOps & Automation
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Automated and dependable delivery workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-[#101827] px-7 py-12 text-center sm:px-12 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let's build
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Have a technology challenge worth solving?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
              Talk with VedAIT Labs about your infrastructure, software, or
              technology needs.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Start a conversation
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}