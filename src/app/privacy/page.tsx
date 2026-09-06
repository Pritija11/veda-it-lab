import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Privacy Policy",
  "Read the Privacy Policy for VedAIT Labs and learn how we handle information submitted through our website.",
  "/privacy",
);

export default function Privacy() {
  return (
    <main className="bg-[#070B14] pt-[76px]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.10),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              Legal
            </span>

            <h1 className="mt-7 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Your privacy matters to VedAIT Labs. This policy explains how
              information may be collected and used when you interact with our
              website.
            </p>

            <p className="mt-5 text-sm text-slate-600">
              Last updated: September 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12">
            {/* 01 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                1. Information We Collect
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                When you contact VedAIT Labs through our website, you may
                provide information such as your name, email address, selected
                service, and message. We only request information that is
                relevant to understanding and responding to your enquiry.
              </p>
            </section>

            {/* 02 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                2. How We Use Information
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                Information submitted through the website may be used to
                respond to enquiries, understand project requirements,
                communicate with you, and improve our services and website
                experience.
              </p>
            </section>

            {/* 03 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                3. Information Sharing
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                VedAIT Labs does not intend to sell or rent personal
                information submitted through this website. Information may be
                shared internally when necessary to respond to your enquiry or
                provide requested services.
              </p>
            </section>

            {/* 04 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                4. Data Security
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                We take reasonable measures to protect information submitted
                through our website. However, no method of transmitting or
                storing information online can be guaranteed to be completely
                secure.
              </p>
            </section>

            {/* 05 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                5. Cookies and Website Analytics
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                Our website may use cookies or similar technologies in the
                future to improve functionality, understand website usage, or
                measure performance. If analytics or other tracking services
                are introduced, this policy may be updated accordingly.
              </p>
            </section>

            {/* 06 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                6. Third-Party Services
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                Our website may use third-party services for hosting,
                infrastructure, analytics, communication, or other technical
                requirements. These services may process information according
                to their own privacy policies.
              </p>
            </section>

            {/* 07 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                7. Your Choices
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                You may choose not to provide optional information when
                interacting with our website. If you have questions about
                information you have submitted to VedAIT Labs, you can contact
                us directly.
              </p>
            </section>

            {/* 08 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                8. Changes to This Policy
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                We may update this Privacy Policy when our website, services,
                or data practices change. Any updates will be published on this
                page with a revised effective date.
              </p>
            </section>

            {/* Contact */}
            <section className="rounded-2xl border border-white/10 bg-[#0D1422] p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-slate-100">
                Questions about privacy?
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                If you have any questions about this Privacy Policy or how
                information is handled, please contact VedAIT Labs.
              </p>

              <div className="mt-6 space-y-2 text-sm text-slate-400">
                <p>Sankhamul, Kathmandu</p>
                <p>01-523456</p>
              </div>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
              >
                Contact VedAIT Labs →
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}