import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for using the VedAIT Labs website and engaging with its technology services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-44 lg:px-10 lg:pb-24 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)] sm:text-sm">
              Legal
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Terms of
              <span className="text-[var(--primary)]"> Service.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              These terms outline the general conditions for using the VedAIT
              Labs website and interacting with our digital services.
            </p>

            <p className="mt-5 text-sm text-[var(--muted)]">
              Last updated: September 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-[var(--border)] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          {/* Side Label */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Using VedAIT Labs
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--muted)]">
              Please read these terms before using our website or engaging
              with our services.
            </p>
          </aside>

          {/* Content */}
          <div className="max-w-3xl">
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  1. Acceptance of terms
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  By accessing or using the VedAIT Labs website, you agree to
                  these Terms of Service. If you do not agree with these terms,
                  please do not use the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  2. About VedAIT Labs
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  VedAIT Labs is a technology startup exploring artificial
                  intelligence, software, cloud technologies, and emerging
                  technologies to build digital products and intelligent
                  solutions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  3. Website content
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  Content published on this website is provided for general
                  informational purposes. We aim to keep information accurate
                  and useful, but we do not guarantee that all content will
                  always be complete, current, or error-free.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  4. Intellectual property
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  Unless otherwise stated, the website, brand identity, text,
                  graphics, designs, and other original materials published by
                  VedAIT Labs are owned by or licensed to VedAIT Labs and may
                  not be reproduced, modified, distributed, or reused without
                  appropriate permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  5. Acceptable use
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  You agree not to use the website for unlawful purposes,
                  attempt to interfere with its operation, gain unauthorized
                  access to systems or information, or misuse any functionality
                  provided through the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  6. Third-party services and links
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  The website may contain links to third-party websites or
                  services. VedAIT Labs is not responsible for the content,
                  availability, security, or policies of external websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  7. Services and engagements
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  Information on this website does not automatically create a
                  client, partnership, employment, or other contractual
                  relationship with VedAIT Labs. Specific projects or services
                  may be subject to separate agreements and terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  8. Disclaimer
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  The website is provided on an “as available” basis. To the
                  extent permitted by applicable law, VedAIT Labs makes no
                  warranties regarding uninterrupted availability, complete
                  accuracy, or suitability of website content for a particular
                  purpose.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  9. Limitation of liability
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  To the extent permitted by applicable law, VedAIT Labs will
                  not be responsible for indirect, incidental, special, or
                  consequential losses arising from your use of or inability to
                  use the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  10. Changes to these terms
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  We may update these Terms of Service when our website,
                  services, or legal requirements change. Updated terms will be
                  published on this page with a revised date.
                </p>
              </section>

              <section className="border-t border-[var(--border)] pt-10">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  11. Contact us
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  If you have questions about these Terms of Service, you can
                  contact VedAIT Labs at:
                </p>

                <div className="mt-6 rounded-2xl bg-[var(--primary-soft)] p-6">
                  <p className="font-semibold">VedAIT Labs</p>

                  <p className="mt-2 text-sm text-[var(--muted)]">
                    New Baneshwor, Kathmandu, Nepal
                  </p>

                  <a
                    href="mailto:hello@vedaitlabs.com"
                    className="mt-2 inline-block text-sm font-medium transition-colors hover:text-[var(--primary)]"
                  >
                    hello@vedaitlabs.com
                  </a>

                  <a
                    href="tel:01-5234567"
                    className="mt-1 block text-sm font-medium transition-colors hover:text-[var(--primary)]"
                  >
                    01-5234567
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}