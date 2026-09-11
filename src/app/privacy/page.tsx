import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = createPageMetadata(
  "Privacy Policy",
  "Read the Privacy Policy for VedAIT Labs, an applied AI startup, and learn how we handle information submitted through our website.",
  "/privacy",
);

const sections = [
  {
    title: "1. Information We Collect",
    body: "When you contact VedAIT Labs through our website, you may provide information such as your name, email address, selected solution, and message. We only request information that is relevant to understanding and responding to your enquiry.",
  },
  {
    title: "2. How We Use Information",
    body: "Information submitted through the website may be used to respond to enquiries, understand project requirements, communicate with you, and improve our solutions and website experience.",
  },
  {
    title: "3. Information Sharing",
    body: "VedAIT Labs does not intend to sell or rent personal information submitted through this website. Information may be shared internally when necessary to respond to your enquiry or provide requested services.",
  },
  {
    title: "4. Data Security",
    body: "We take reasonable measures to protect information submitted through our website. However, no method of transmitting or storing information online can be guaranteed to be completely secure.",
  },
  {
    title: "5. Cookies and Website Analytics",
    body: "Our website may use cookies or similar technologies in the future to improve functionality, understand website usage, or measure performance. If analytics or other tracking services are introduced, this policy may be updated accordingly.",
  },
  {
    title: "6. Third-Party Services",
    body: "Our website may use third-party services for hosting, infrastructure, analytics, communication, or other technical requirements. These services may process information according to their own privacy policies.",
  },
  {
    title: "7. Your Choices",
    body: "You may choose not to provide optional information when interacting with our website. If you have questions about information you have submitted to VedAIT Labs, you can contact us directly.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy when our website, solutions, or data practices change. Any updates will be published on this page with a revised effective date.",
  },
];

export default function Privacy() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF8] pb-16 pt-[150px] sm:pt-[168px]">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="chip bg-[#27233A] text-white">Legal</div>

          <h1 className="mt-7 font-[family-name:var(--font-fraunces)] text-4xl font-semibold tracking-[-0.01em] text-[#27233A] sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#706B80] sm:text-lg">
            Your privacy matters to VedAIT Labs. This policy explains how
            information may be collected and used when you interact with our
            website.
          </p>

          <p className="mt-5 text-sm text-[#9B95AA]">Last updated: September 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={Math.min(i * 30, 200)}>
                <section>
                  <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#27233A]">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-8 text-[#706B80]">{section.body}</p>
                </section>
              </Reveal>
            ))}

            {/* Contact */}
            <Reveal>
            <section className="rounded-2xl border border-[#E8E3ED] bg-[#FFFDF8] p-6 sm:p-8">
              <h2 className="font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#27233A]">
                Questions about privacy?
              </h2>

              <p className="mt-3 leading-7 text-[#706B80]">
                If you have any questions about this Privacy Policy or how
                information is handled, please contact VedAIT Labs.
              </p>

              <div className="mt-6 space-y-2 text-sm text-[#706B80]">
                <p>Sankhamul, Kathmandu</p>
                <p>01-523456</p>
              </div>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center text-sm font-bold text-[#FF7187] transition-colors hover:text-[#27233A]"
              >
                Contact VedAIT Labs →
              </Link>
            </section>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
