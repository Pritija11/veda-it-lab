import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import ContactForm from "@/components/sections/ContactForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Contact VedAIT Labs",
  "Get in touch with VedAIT Labs about cloud engineering, DevOps, infrastructure security, software engineering, data and AI, or IT consulting.",
  "/contact",
);

export default function Contact() {
  return (
    <main className="bg-[#070B14] pt-[76px]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              Contact VedAIT Labs
            </span>

            <h1 className="mt-7 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
              Let’s build something{" "}
              <span className="text-blue-400">meaningful.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Have a technology challenge, infrastructure requirement, or
              project idea? Tell us what you are working on and our team will
              get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          {/* Left */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
              Get in touch
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Let’s start with a conversation.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-slate-400">
              Tell us what you are building, what needs to improve, or where
              you are facing a technology challenge. We’ll start by
              understanding the problem.
            </p>

            {/* Technical contact card */}
            <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0D1422] p-6">
              <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    Contact node
                  </span>

                  <span className="flex items-center gap-2 text-xs text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Available
                  </span>
                </div>

                <div className="mt-8">
                  <p className="text-2xl font-semibold text-slate-100">
                    Kathmandu · Nepal
                  </p>

                  <div className="mt-6 space-y-5">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10">
                        <MapPin className="h-4 w-4 text-blue-400" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-slate-200">
                          Location
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Sankhamul, Kathmandu
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10">
                        <Phone className="h-4 w-4 text-blue-400" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-slate-200">
                          Phone
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          01-523456
                        </p>
                        <p className="mt-1 text-xs text-slate-600">
                          Available for enquiries
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10">
                        <Mail className="h-4 w-4 text-blue-400" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-slate-200">
                          Enquiries
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Use the form to tell us about your project
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-slate-100">
                What happens next?
              </h3>

              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-blue-400">
                    01
                  </span>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      We understand
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      We learn about your goals, requirements, and current
                      challenges.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-blue-400">
                    02
                  </span>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      We explore
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      We identify the technology approach that best fits the
                      problem.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-blue-400">
                    03
                  </span>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      We move forward
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      If there’s a fit, we define the next steps together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 bg-[#0D1422]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                VedAIT Labs
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                Have a technology challenge worth solving?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Explore how our engineering capabilities can help you approach
                your next technology challenge.
              </p>
            </div>

            <Link
              href="/solutions"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 px-6 py-3.5 text-sm font-semibold text-blue-400 transition-all duration-200 hover:border-blue-400/50 hover:bg-blue-500/20"
            >
              Explore our solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}