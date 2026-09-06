import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Terms & Conditions",
  "Read the Terms and Conditions for using the VedAIT Labs website and its services.",
  "/terms",
);

export default function Terms() {
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
              Terms & Conditions
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              These terms outline the general conditions for using the VedAIT
              Labs website and interacting with our services.
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
                1. Acceptance of Terms
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                By accessing or using the VedAIT Labs website, you agree to
                these Terms & Conditions. If you do not agree with these terms,
                please do not use the website.
              </p>
            </section>

            {/* 02 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                2. Website Information
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                The information provided on this website is intended for
                general informational purposes. While we aim to keep the
                information accurate and useful, we do not guarantee that all
                content will always be complete, current, or free from errors.
              </p>
            </section>

            {/* 03 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                3. Services
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                VedAIT Labs provides technology-related services and solutions
                based on individual project requirements. Services, scope,
                timelines, pricing, and deliverables may vary depending on the
                specific agreement established with a client.
              </p>
            </section>

            {/* 04 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                4. Enquiries and Communications
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                Information submitted through our contact or enquiry forms
                should be accurate and relevant to the request. Submitting an
                enquiry does not create a client relationship or guarantee that
                VedAIT Labs will provide services.
              </p>
            </section>

            {/* 05 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                5. Intellectual Property
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                Unless otherwise stated, the content, branding, design,
                graphics, text, and other materials available on this website
                belong to VedAIT Labs or are used with appropriate permission.
                These materials may not be reproduced, distributed, or
                commercially used without permission.
              </p>
            </section>

            {/* 06 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                6. Acceptable Use
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                You agree not to misuse the website, attempt to gain
                unauthorized access to its systems, interfere with its
                operation, or use the website for unlawful purposes.
              </p>
            </section>

            {/* 07 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                7. Third-Party Services and Links
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                The website may reference or use third-party services,
                technologies, or external websites. VedAIT Labs is not
                responsible for the availability, content, security, or
                practices of third-party services outside our control.
              </p>
            </section>

            {/* 08 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                8. Limitation of Liability
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                To the extent permitted by applicable law, VedAIT Labs will not
                be responsible for losses or damages resulting from the use of,
                or inability to use, information or services provided through
                this website.
              </p>
            </section>

            {/* 09 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                9. Changes to These Terms
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                VedAIT Labs may update these Terms & Conditions when necessary.
                Changes will be published on this page, and the updated date
                will be revised accordingly.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100">
                10. Contact Us
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                If you have questions about these Terms & Conditions, you can
                contact VedAIT Labs using the information below.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-[#0D1422] p-6 sm:p-8">
                <p className="text-sm text-slate-400">
                  <span className="font-medium text-slate-200">VedAIT Labs</span>
                </p>

                <p className="mt-3 text-sm text-slate-500">
                  Sankhamul, Kathmandu
                </p>

                <p className="mt-2 text-sm text-slate-500">01-523456</p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
                >
                  Contact VedAIT Labs →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}