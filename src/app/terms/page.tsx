import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = createPageMetadata(
  "Terms & Conditions",
  "Read the Terms and Conditions for using the website of VedAIT Labs, an applied AI startup, and its services.",
  "/terms",
);

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the VedAIT Labs website, you agree to these Terms & Conditions. If you do not agree with these terms, please do not use the website.",
  },
  {
    title: "2. Website Information",
    body: "The information provided on this website is intended for general informational purposes. While we aim to keep the information accurate and useful, we do not guarantee that all content will always be complete, current, or free from errors.",
  },
  {
    title: "3. Services",
    body: "VedAIT Labs provides applied AI solutions and services based on individual project requirements. Services, scope, timelines, pricing, and deliverables may vary depending on the specific agreement established with a client.",
  },
  {
    title: "4. Enquiries and Communications",
    body: "Information submitted through our contact or enquiry forms should be accurate and relevant to the request. Submitting an enquiry does not create a client relationship or guarantee that VedAIT Labs will provide services.",
  },
  {
    title: "5. Intellectual Property",
    body: "Unless otherwise stated, the content, branding, design, graphics, text, and other materials available on this website belong to VedAIT Labs or are used with appropriate permission. These materials may not be reproduced, distributed, or commercially used without permission.",
  },
  {
    title: "6. Acceptable Use",
    body: "You agree not to misuse the website, attempt to gain unauthorized access to its systems, interfere with its operation, or use the website for unlawful purposes.",
  },
  {
    title: "7. Third-Party Services and Links",
    body: "The website may reference or use third-party services, technologies, or external websites. VedAIT Labs is not responsible for the availability, content, security, or practices of third-party services outside our control.",
  },
  {
    title: "8. Limitation of Liability",
    body: "To the extent permitted by applicable law, VedAIT Labs will not be responsible for losses or damages resulting from the use of, or inability to use, information or services provided through this website.",
  },
  {
    title: "9. Changes to These Terms",
    body: "VedAIT Labs may update these Terms & Conditions when necessary. Changes will be published on this page, and the updated date will be revised accordingly.",
  },
];

export default function Terms() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF8] pb-16 pt-[150px] sm:pt-[168px]">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="chip bg-[#27233A] text-white">Legal</div>

          <h1 className="mt-7 font-[family-name:var(--font-fraunces)] text-4xl font-semibold tracking-[-0.01em] text-[#27233A] sm:text-5xl">
            Terms &amp; Conditions
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#706B80] sm:text-lg">
            These terms outline the general conditions for using the VedAIT
            Labs website and interacting with our services.
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
            <section>
              <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#27233A]">
                10. Contact Us
              </h2>
              <p className="mt-4 leading-8 text-[#706B80]">
                If you have questions about these Terms &amp; Conditions, you
                can contact VedAIT Labs using the information below.
              </p>

              <div className="mt-6 rounded-2xl border border-[#E8E3ED] bg-[#FFFDF8] p-6 sm:p-8">
                <p className="text-sm text-[#706B80]">
                  <span className="font-semibold text-[#27233A]">VedAIT Labs</span>
                </p>
                <p className="mt-3 text-sm text-[#706B80]">Sankhamul, Kathmandu</p>
                <p className="mt-2 text-sm text-[#706B80]">01-523456</p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center text-sm font-bold text-[#FF7187] transition-colors hover:text-[#27233A]"
                >
                  Contact VedAIT Labs →
                </Link>
              </div>
            </section>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
