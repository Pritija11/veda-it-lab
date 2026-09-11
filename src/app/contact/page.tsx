import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import ContactForm from "@/components/sections/ContactForm";
import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = createPageMetadata(
  "Contact VedAIT Labs",
  "Get in touch with VedAIT Labs, an applied AI startup, about Applied AI & Machine Learning, Generative & Agentic AI, Data & Intelligence, Computer Vision & Document AI, or AI Engineering & Deployment.",
  "/contact",
);

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF8] pb-20 pt-[150px] sm:pt-[168px]">
        <div className="tech-grid pointer-events-none absolute -right-10 -top-10 h-72 w-72" aria-hidden />
        <div className="solid-shape shape-float float-y-slow h-16 w-16 rounded-full bg-[#BDEBFF]" style={{ top: "72px", right: "12%" }} aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <div className="chip bg-[#27233A] text-white">
              <span className="relative flex h-1.5 w-1.5">
                <span className="node-pulse absolute inline-flex h-full w-full rounded-full bg-[#FF7187]" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#FF7187]" />
              </span>
              Contact VedAIT Labs
            </div>

            <h1 className="mt-7 font-[family-name:var(--font-fraunces)] text-5xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-6xl">
              Let&apos;s build something{" "}
              <span className="italic text-[#FF7187]">real.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#706B80]">
              Have an AI idea, a data problem, or a model stuck in a
              notebook? Tell us what you&apos;re working on — as an applied
              AI startup, this is exactly the kind of thing we like to hear
              about.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#FFFDF8] pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          {/* Left */}
          <Reveal>
            <div className="chip bg-[#BDEBFF] text-[#27233A]">Get in touch</div>

            <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-[-0.01em] text-[#27233A] sm:text-4xl">
              Let&apos;s start with a conversation.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-[#706B80]">
              Tell us what you&apos;re building, where your data lives, or
              what&apos;s stuck between a working demo and a production
              system. We&apos;ll start by understanding the problem.
            </p>

            {/* Contact card */}
            <div className="editorial-tilt card-shadow mt-10 rounded-2xl border border-[#E8E3ED] bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#9B95AA]">
                  Contact node
                </span>

                <span className="flex items-center gap-2 text-xs font-semibold text-[#0F9D6E]">
                  <span className="node-pulse relative h-2 w-2 rounded-full bg-[#0F9D6E]" />
                  Available
                </span>
              </div>

              <p className="mt-7 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#27233A]">
                Kathmandu · Nepal
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#5BA7FF]/10">
                    <MapPin className="h-4 w-4 text-[#5BA7FF]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#27233A]">Location</p>
                    <p className="mt-1 text-sm text-[#706B80]">Sankhamul, Kathmandu</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#5BA7FF]/10">
                    <Phone className="h-4 w-4 text-[#5BA7FF]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#27233A]">Phone</p>
                    <p className="mt-1 text-sm text-[#706B80]">01-523456</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#5BA7FF]/10">
                    <Mail className="h-4 w-4 text-[#5BA7FF]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#27233A]">Email</p>
                    <p className="mt-1 text-sm text-[#706B80]">hello@vedaitlabs.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="mt-12">
              <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-[#27233A]">
                What happens next?
              </h3>

              <div className="mt-6 space-y-5">
                {[
                  { n: "01", t: "We understand", d: "We learn about your goals, your data, and what you're trying to solve." },
                  { n: "02", t: "We scope", d: "We identify which of our five pillars actually fits the problem." },
                  { n: "03", t: "We move forward", d: "If there's a fit, we define the next steps together." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <span className="text-sm font-semibold text-[#FF7187]">{step.n}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#27233A]">{step.t}</h4>
                      <p className="mt-1 text-sm leading-6 text-[#706B80]">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#FFFDF8] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="rounded-[2.5rem] bg-[#27233A] px-8 py-14 sm:px-12 sm:py-16">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <div className="chip bg-white/10 text-[#BDEBFF]">VedAIT Labs</div>
                  <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-[-0.01em] text-white sm:text-4xl">
                    Have an AI problem worth solving?
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/60">
                    Explore how our five AI pillars could fit your next challenge.
                  </p>
                </div>

                <Link
                  href="/solutions"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#27233A] transition-all duration-200 hover:-translate-y-0.5"
                >
                  Explore our solutions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
