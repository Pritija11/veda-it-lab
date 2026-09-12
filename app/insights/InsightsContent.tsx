"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const experiments = [
  {
    number: "01",
    title: "Intelligent Systems",
    description:
      "Exploring AI-driven systems that turn data, models, and automation into useful digital experiences.",
    tags: ["AI", "Data", "Automation"],
  },
  {
    number: "02",
    title: "Digital Products",
    description:
      "Designing and engineering web-based products, platforms, and applications around real-world needs.",
    tags: ["Web", "Products", "Engineering"],
  },
  {
    number: "03",
    title: "Emerging Interfaces",
    description:
      "Experimenting with new ways people can interact with intelligent technology and digital systems.",
    tags: ["Experiments", "Interfaces", "Technology"],
  },
];

function ProductInterface() {
  return (
    <div className="relative h-full min-h-[300px] overflow-hidden rounded-[1.5rem] bg-[var(--primary-soft)] p-5 sm:p-7">
      <div className="relative rounded-2xl border border-black/10 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex items-center justify-between border-b border-black/10 pb-4">
          <div>
            <div className="h-2 w-20 rounded-full bg-black/10" />
            <div className="mt-2 h-2 w-12 rounded-full bg-black/5" />
          </div>

          <div className="h-8 w-8 rounded-full bg-[var(--primary)]" />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="h-20 rounded-xl bg-[var(--primary-soft)]" />
          <div className="h-20 rounded-xl bg-black/[0.04]" />
          <div className="h-20 rounded-xl bg-black/[0.04]" />
        </div>

        <div className="mt-4 h-28 rounded-xl bg-black/[0.035] p-4">
          <div className="flex h-full items-end gap-2">
            <div className="h-[35%] flex-1 rounded-t-md bg-black/10" />
            <div className="h-[55%] flex-1 rounded-t-md bg-black/15" />
            <div className="h-[45%] flex-1 rounded-t-md bg-black/10" />
            <div className="h-[80%] flex-1 rounded-t-md bg-[var(--primary)]" />
            <div className="h-[65%] flex-1 rounded-t-md bg-black/10" />
          </div>
        </div>
      </div>

      <p className="absolute bottom-5 left-5 text-xs font-medium uppercase tracking-[0.18em] text-black/45 sm:bottom-7 sm:left-7">
        Digital Product
      </p>
    </div>
  );
}

function ExperimentVisual() {
  return (
    <div className="relative h-full min-h-[300px] overflow-hidden rounded-[1.5rem] bg-[var(--foreground)] p-6 text-white sm:p-8">
      <div className="flex items-start justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
          Experiment / 03
        </span>

        <span className="text-xs text-[var(--primary)]">
          R&D
        </span>
      </div>

      <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 sm:inset-x-8">
        <motion.div
          animate={{ x: [-8, 8, -8] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <p className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[0.82] tracking-[-0.07em]">
            WHAT
          </p>

          <p className="ml-[12%] mt-2 text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[0.82] tracking-[-0.07em] text-[var(--primary)]">
            IF?
          </p>

          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-12 bg-white/20 sm:w-20" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              Explore · Test · Rethink
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 border-t border-white/10 pt-5 sm:bottom-8 sm:left-8 sm:right-8">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="text-xs text-white/40">
              Experimental technology
            </p>

            <p className="mt-1 text-sm font-medium">
              New possibilities
            </p>
          </div>

          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-2xl text-[var(--primary)]"
          >
            →
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:px-10 lg:pb-32"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="mx-auto max-w-7xl"
        >
          <div className="max-w-5xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)] sm:text-sm">
              Selected work & experiments
            </p>

            <h1 className="max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Ideas
              <span className="text-[var(--primary)]"> in motion.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:mt-10 sm:text-lg sm:leading-8">
              From early experiments to digital products, VedAIT Labs explores
              ideas at the intersection of artificial intelligence, software,
              cloud technology, and emerging technology.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Featured Work */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                01 / Featured
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Building with curiosity.
              </h2>
            </div>

            <span className="hidden text-sm text-[var(--muted)] sm:block">
              Selected exploration
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="grid gap-6 rounded-[2rem] border border-[var(--border)] bg-white/60 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                VedAIT Lab 01
              </span>

              <h3 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Intelligence meets engineering.
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                We explore how artificial intelligence, data, software, and
                cloud infrastructure can work together to create useful
                systems rather than technology for technology&apos;s sake.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["AI", "Software", "Cloud", "Data"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex min-h-[260px] items-end rounded-[1.5rem] bg-[var(--primary-soft)] p-6 sm:min-h-[320px] sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
                  Focus
                </p>

                <p className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Building useful technology.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Experiments */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                02 / Experiments
              </p>

              <h2 className="mt-4 max-w-md text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Not every idea starts as a product.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-[var(--muted)]">
                Some ideas need to be explored, tested, and questioned first.
                That is where the lab comes in.
              </p>
            </div>

            <div className="space-y-4">
              {experiments.map((experiment, index) => (
                <motion.div
                  key={experiment.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group rounded-[1.5rem] border border-[var(--border)] bg-white/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:p-8"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-5">
                      <span className="pt-1 text-xs font-semibold text-[var(--primary)]">
                        {experiment.number}
                      </span>

                      <div>
                        <h3 className="text-2xl font-bold tracking-tight">
                          {experiment.title}
                        </h3>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                          {experiment.description}
                        </p>
                      </div>
                    </div>

                    <span className="text-2xl text-[var(--primary)] transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 sm:pl-10">
                    {experiment.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--primary-soft)] px-3 py-1.5 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product + Prototype */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <ProductInterface />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <ExperimentVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[var(--foreground)] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              03 / From idea to product
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Explore first.
              <br />
              Build with purpose.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Explore",
                text: "Start with a question, problem, or possibility.",
              },
              {
                number: "02",
                title: "Experiment",
                text: "Test ideas, technologies, and approaches.",
              },
              {
                number: "03",
                title: "Build",
                text: "Turn what works into something people can use.",
              },
            ].map((item) => (
              <motion.div
                key={item.number}
                whileHover={{ y: -4 }}
                className="bg-[var(--foreground)] p-7 sm:p-9"
              >
                <span className="text-xs font-semibold text-[var(--primary)]">
                  {item.number}
                </span>

                <h3 className="mt-10 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              What comes next
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              The most interesting work is still being{" "}
              <span className="text-[var(--primary)]">explored.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Compact CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-7 rounded-[2rem] bg-[var(--primary)] px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-9 sm:py-9">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Have something worth exploring?
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Let&apos;s turn an idea into something useful.
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--background)]"
            >
              Start a conversation

              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}