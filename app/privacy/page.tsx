import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for VedAIT Labs, a technology startup building intelligent digital solutions.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
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
              Privacy
              <span className="text-[var(--primary)]"> Policy.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              We respect your privacy and aim to be clear about how
              information is collected, used, and protected when you interact
              with VedAIT Labs.
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
              Your privacy matters
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--muted)]">
              This policy explains the general approach VedAIT Labs takes when
              handling information through this website.
            </p>
          </aside>

          {/* Content */}
          <div className="max-w-3xl">
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  1. Information we collect
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  We may collect information that you voluntarily provide when
                  you contact us through our website. This may include your
                  name, email address, company or organization, and information
                  about your project or inquiry.
                </p>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  We may also collect limited technical information, such as
                  browser type, device information, and general website usage
                  data, where appropriate for operating and improving the
                  website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  2. How we use information
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  Information may be used to respond to inquiries, communicate
                  with you, provide requested information, improve our website,
                  and understand how our digital services are being used.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  3. Information sharing
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  VedAIT Labs does not sell personal information. Information
                  may be shared with trusted service providers when necessary
                  to operate our website or provide requested services, subject
                  to appropriate safeguards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  4. Data security
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  We take reasonable measures to protect information from
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no internet-based system can be guaranteed to be
                  completely secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  5. Cookies and analytics
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  Our website may use cookies or similar technologies to
                  support functionality, understand website usage, and improve
                  the experience. The specific technologies used may change as
                  the website evolves.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  6. Third-party services
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  Our website or future services may use third-party platforms
                  for hosting, analytics, communication, infrastructure, or
                  other technical purposes. These providers may process
                  information according to their own privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  7. Your choices
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  You may contact us if you have questions about information
                  associated with your interactions with VedAIT Labs or if you
                  would like to request appropriate access, correction, or
                  deletion where applicable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  8. Changes to this policy
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  We may update this Privacy Policy as our website, services,
                  or legal requirements change. Updates will be reflected on
                  this page with a revised date.
                </p>
              </section>

              <section className="border-t border-[var(--border)] pt-10">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  9. Contact us
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  If you have questions about this Privacy Policy, you can
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