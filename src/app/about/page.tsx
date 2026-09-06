import type { Metadata } from "next";
import Link from "next/link";

import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "About VedAIT Labs",
  "Learn about VedAIT Labs, a technology startup building modern digital and infrastructure solutions with a focus on cloud engineering, DevOps, automation, and security.",
  "/about",
);

const principles = [
  {
    number: "01",
    title: "Built with purpose",
    description:
      "We focus on solving meaningful technology problems rather than building technology for its own sake.",
  },
  {
    number: "02",
    title: "Engineering first",
    description:
      "We approach technology through thoughtful architecture, reliable systems, automation, and practical engineering.",
  },
  {
    number: "03",
    title: "Ready to evolve",
    description:
      "Technology changes quickly. We design systems and solutions that can adapt as requirements and environments evolve.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 pt-36 sm:pt-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
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
              About VedAIT Labs
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
              A technology startup building for{" "}
              <span className="text-blue-400">what comes next.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              VedAIT Labs is a technology startup focused on building modern
              digital and infrastructure solutions. Our work centers around
              cloud engineering, DevOps, automation, security, and practical
              software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="border-b border-white/10 bg-[#0D1422]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Who we are
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Technology should solve problems, not create more of them.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              VedAIT Labs brings together software engineering, cloud
              infrastructure, automation, and security to approach technology
              from a systems perspective.
            </p>

            <p>
              We believe strong technology foundations matter. From the way
              infrastructure is designed to how software is deployed and
              maintained, every part of a system contributes to its long-term
              reliability.
            </p>

            <p>
              As a growing technology startup, we are building our capabilities
              around modern engineering practices while staying focused on
              practical outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              What we focus on
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Engineering across the technology stack.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our capabilities span infrastructure, software, data, and
              technology strategy, with cloud and DevOps at the center of our
              technical focus.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={service.href}
                className={`group rounded-2xl border p-7 transition-all duration-300 ${
                  service.core
                    ? "border-blue-400/20 bg-blue-500/[0.06] hover:border-blue-400/40 hover:bg-blue-500/[0.1]"
                    : "border-white/10 bg-[#101827] hover:border-white/20 hover:bg-[#131d2e]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    0{index + 1}
                  </span>

                  {service.core && (
                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-300">
                      Core
                    </span>
                  )}
                </div>

                <h3 className="mt-8 text-xl font-semibold text-slate-100 transition-colors group-hover:text-blue-400">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {service.shortDescription}
                </p>

                <div className="mt-6 text-sm font-medium text-slate-500 transition-colors group-hover:text-blue-400">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Our principles
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              How we think about technology.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="rounded-2xl border border-white/10 bg-[#101827] p-7"
              >
                <span className="text-sm font-semibold text-blue-400">
                  {principle.number}
                </span>

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

      {/* Vision / Mission */}
      <section className="bg-[#070B14]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.05] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Our vision
              </p>

              <h2 className="mt-5 text-2xl font-semibold text-slate-100">
                Build technology that remains useful as the world changes.
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                We aim to grow into a technology company known for thoughtful
                engineering, reliable infrastructure, and solutions that are
                built to evolve.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101827] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Our mission
              </p>

              <h2 className="mt-5 text-2xl font-semibold text-slate-100">
                Make modern technology more practical and dependable.
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                We focus on applying modern engineering practices to real
                problems, helping build systems that are scalable, secure, and
                easier to operate.
              </p>
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
              Talk with VedAIT Labs about your technology, infrastructure, or
              software needs.
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