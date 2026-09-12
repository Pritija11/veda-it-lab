"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Curiosity",
    description:
      "We stay curious about how technology works, where it is heading, and what new possibilities it can unlock.",
  },
  {
    number: "02",
    title: "Experimentation",
    description:
      "We believe useful ideas often begin as experiments. We test, learn, refine, and keep moving forward.",
  },
  {
    number: "03",
    title: "Responsibility",
    description:
      "Technology should create meaningful value. We think carefully about how what we build affects the people who use it.",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const circleRotate = useTransform(scrollYProgress, [0, 1], [0, 35]);

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-40 lg:px-10 lg:pb-36 lg:pt-48"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              About VedAIT Labs
            </p>

            <h1 className="mt-6 max-w-5xl text-[clamp(3.2rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              A lab for
              <br />
              <span className="text-black/30">ideas worth</span>
              <br />
              building.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              VedAIT Labs is a technology startup exploring artificial
              intelligence, software, and emerging technologies to build
              useful digital products and intelligent solutions.
            </p>
          </motion.div>

          {/* Visual */}
          <div className="relative flex h-[360px] items-center justify-center sm:h-[430px]">
            <motion.div
              style={{ rotate: circleRotate }}
              className="relative h-64 w-64 sm:h-80 sm:w-80"
            >
              <div className="absolute inset-0 rounded-full border border-[var(--border)]" />

              <div className="absolute inset-[15%] rounded-full border border-[var(--primary)]/30" />

              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--primary)]" />

              <div className="absolute bottom-[8%] right-[5%] h-2 w-2 rounded-full bg-[var(--foreground)]" />

              <div className="absolute bottom-[16%] left-[4%] h-2.5 w-2.5 rounded-full bg-[var(--primary)]/40" />

              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--primary)] sm:h-32 sm:w-32">
                <div className="text-center text-white">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/60">
                    Ved
                  </p>
                  <p className="mt-1 text-lg font-semibold">AIT</p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/60">
                    Labs
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meaning */}
      <section className="border-y border-[var(--border)] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Why VedAIT Labs?
          </p>

          <div>
            <h2 className="max-w-4xl text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
              Knowledge.
              <br />
              Intelligence.
              <br />
              <span className="text-[var(--primary)]">Experimentation.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              The name reflects what we want to be. A place where knowledge
              meets artificial intelligence, where ideas can be tested, and
              where experiments can become real technology.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Our story
              </p>

              <div className="mt-8 h-px w-16 bg-[var(--primary)]" />
            </div>

            <div className="max-w-4xl">
              <p className="text-2xl font-medium leading-tight tracking-[-0.035em] sm:text-3xl lg:text-4xl">
                Technology is changing quickly. We believe the best way to
                understand that change is to{" "}
                <span className="text-[var(--primary)]">
                  build, experiment, and learn.
                </span>
              </p>

              <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                VedAIT Labs was shaped around this idea. Instead of treating
                technology as a fixed set of tools, we see it as something
                worth continuously exploring.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                That means trying new approaches, understanding real problems,
                building prototypes, and turning the strongest ideas into
                useful digital products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-[var(--foreground)] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                What guides us
              </p>

              <h2 className="mt-6 max-w-sm text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl">
                How we
                <br />
                think.
              </h2>
            </div>

            <div>
              {principles.map((principle, index) => (
                <motion.article
                  key={principle.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className={`grid gap-5 border-t border-white/10 py-9 sm:grid-cols-[70px_1fr] sm:py-11 ${
                    index === principles.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="text-xs font-medium text-[var(--primary)]">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                      {principle.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
                      {principle.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[var(--primary-soft)] px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              Our mission
            </p>

            <h2 className="mt-6 max-w-5xl text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              Make technology
              <br />
              <span className="text-[var(--primary)]">
                more intelligent.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              We want to create technology that is not only technically
              capable, but thoughtful, useful, and capable of making a
              meaningful difference.
            </p>
          </div>
        </div>
      </section>

      {/* Compact CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 rounded-[1.75rem] bg-[var(--foreground)] px-6 py-8 sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                VedAIT Labs
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                Let's build something meaningful.
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Start a conversation

              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}