"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

const technologies = [
  {
    number: "01",
    title: "Artificial Intelligence",
    description:
      "We use AI to create systems that can understand information, generate useful outputs, and support smarter digital experiences.",
  },
  {
    number: "02",
    title: "Machine Learning",
    description:
      "We explore machine learning for prediction, classification, pattern recognition, and data-driven decision making.",
  },
  {
    number: "03",
    title: "Software Engineering",
    description:
      "We build reliable web applications, APIs, platforms, and software systems designed around real-world requirements.",
  },
  {
    number: "04",
    title: "Data & Automation",
    description:
      "We connect data, workflows, and intelligent automation to reduce repetitive work and make systems more responsive.",
  },
  {
    number: "05",
    title: "Cloud Technology",
    description:
      "We use modern cloud infrastructure and deployment practices to create scalable and accessible digital systems.",
  },
  {
    number: "06",
    title: "Emerging Technology",
    description:
      "We experiment with new tools, interfaces, and technologies to discover opportunities worth turning into products.",
  },
];

function TechnologyVisual() {
  return (
    <div className="relative flex h-[380px] items-center justify-center overflow-hidden rounded-[2rem] bg-[var(--foreground)] sm:h-[500px]">
      {/* Outer rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-52 w-52 rounded-full border border-[var(--primary)]/40 sm:h-64 sm:w-64"
      />

      {/* Orbit dots */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-72 w-72 sm:h-96 sm:w-96"
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--primary)]" />
        <span className="absolute bottom-[12%] right-[7%] h-2 w-2 rounded-full bg-white/50" />
      </motion.div>

      <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[var(--primary)] shadow-2xl sm:h-40 sm:w-40">
        <div className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
            VedAIT
          </p>
          <p className="mt-1 text-sm font-semibold text-white sm:text-base">
            Technology
          </p>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute left-[8%] top-[18%] text-[10px] uppercase tracking-[0.18em] text-white/40 sm:text-xs">
        AI
      </span>

      <span className="absolute right-[8%] top-[28%] text-[10px] uppercase tracking-[0.18em] text-white/40 sm:text-xs">
        Data
      </span>

      <span className="absolute bottom-[23%] left-[10%] text-[10px] uppercase tracking-[0.18em] text-white/40 sm:text-xs">
        Software
      </span>

      <span className="absolute bottom-[17%] right-[10%] text-[10px] uppercase tracking-[0.18em] text-[var(--primary)] sm:text-xs">
        Innovation
      </span>
    </div>
  );
}

export default function TechnologyPage() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section
        ref={heroRef}
        className="px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-40 lg:px-10 lg:pb-36 lg:pt-48"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              Technology
            </p>

            <h1 className="mt-6 text-[clamp(3.2rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              Exploring what
              <br />
              <span className="text-black/30">technology</span>
              <br />
              can become.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              From artificial intelligence and machine learning to software,
              data, and emerging technologies, we explore the tools that can
              turn ideas into useful systems.
            </p>
          </motion.div>

          <TechnologyVisual />
        </div>
      </section>

      {/* Technology areas */}
      <section className="bg-[var(--foreground)] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Our technology areas
              </p>

              <p className="mt-5 max-w-xs text-sm leading-6 text-white/40">
                We choose technology based on what a problem actually needs,
                not simply what is popular.
              </p>
            </div>

            <div>
              {technologies.map((technology, index) => (
                <motion.article
                  key={technology.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                  }}
                  className={`group grid gap-5 border-t border-white/10 py-9 sm:grid-cols-[70px_1fr] sm:py-11 ${
                    index === technologies.length - 1
                      ? "border-b"
                      : ""
                  }`}
                >
                  <span className="text-xs font-medium text-[var(--primary)]">
                    {technology.number}
                  </span>

                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                      {technology.title}
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
                      {technology.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How technology works together */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Beyond individual tools
              </p>

              <h2 className="mt-6 max-w-xl text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                Technology becomes powerful when it works{" "}
                <span className="text-black/30">together.</span>
              </h2>
            </div>

            <div className="relative">
              <div className="relative mx-auto max-w-xl">
                {/* Connecting lines */}
                <div className="absolute left-[16.5%] right-[16.5%] top-1/2 h-px bg-[var(--border)]" />

                <div className="grid grid-cols-3 gap-3 sm:gap-6">
                  {[
                    {
                      title: "Intelligence",
                      text: "AI",
                    },
                    {
                      title: "Engineering",
                      text: "Code",
                    },
                    {
                      title: "Impact",
                      text: "Product",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.12,
                      }}
                      className="relative"
                    >
                      <div className="flex aspect-square items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
                        <div className="text-center">
                          <p className="text-lg font-semibold tracking-tight sm:text-2xl">
                            {item.text}
                          </p>

                          <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-[var(--muted)] sm:text-[10px]">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <p className="mx-auto mt-8 max-w-md text-center text-sm leading-6 text-[var(--muted)]">
                AI, engineering, and product thinking come together to create
                technology that is more than a collection of tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-[var(--border)] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Our mindset
            </p>

            <h2 className="mt-6 text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              We don't just use technology.
              <br />
              <span className="text-[var(--primary)]">
                We explore what it can become.
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Compact CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 rounded-[1.75rem] bg-[var(--primary)] px-6 py-8 sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                Build with us
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                Have a problem worth solving?
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--background)]"
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