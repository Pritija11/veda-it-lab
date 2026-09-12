"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const solutions = [
  {
    number: "01",
    title: "AI & Intelligent Systems",
    description:
      "We build intelligent systems that use AI, data, and automation to make complex processes more useful, responsive, and efficient.",
    tags: ["AI", "Machine Learning", "Automation"],
  },
  {
    number: "02",
    title: "Digital Products",
    description:
      "We turn ideas into digital products that people can actually use — from web platforms and SaaS products to custom business applications.",
    tags: ["Web Apps", "SaaS", "Platforms"],
  },
  {
    number: "03",
    title: "Emerging Technology",
    description:
      "We experiment with new technologies, interfaces, and ideas to discover what could become the next useful product.",
    tags: ["R&D", "Prototyping", "Experiments"],
  },
];

function IntelligenceVisual() {
  return (
    <div className="relative flex h-[360px] items-center justify-center overflow-hidden rounded-[2rem] bg-[var(--primary-soft)] sm:h-[430px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-64 w-64 rounded-full border border-[var(--primary)]/20 sm:h-80 sm:w-80"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-44 w-44 rounded-full border border-[var(--primary)]/30 sm:h-56 sm:w-56"
      />

      <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[var(--primary)] shadow-xl sm:h-32 sm:w-32">
        <span className="text-center text-sm font-semibold leading-tight text-white">
          VedAIT
          <br />
          Intelligence
        </span>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[12%] top-[25%] rounded-full border border-[var(--primary)]/20 bg-white px-4 py-2 text-xs font-medium"
      >
        Data
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] top-[35%] rounded-full border border-[var(--primary)]/20 bg-white px-4 py-2 text-xs font-medium"
      >
        Models
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[18%] left-[22%] rounded-full border border-[var(--primary)]/20 bg-white px-4 py-2 text-xs font-medium"
      >
        Automation
      </motion.div>
    </div>
  );
}

function AIDashboardVisual() {
  return (
    <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white p-5 sm:h-[430px] sm:p-8">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Intelligence system
          </p>

          <p className="mt-1 text-sm font-semibold">System activity</p>
        </div>

        <span className="flex items-center gap-2 text-xs text-[var(--muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
          Active
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-[var(--background)] p-5">
          <p className="text-xs text-[var(--muted)]">Model activity</p>

          <div className="mt-4 flex items-end gap-1.5">
            {[45, 70, 55, 85, 65, 92, 76, 100].map((height, index) => (
              <motion.div
                key={index}
                animate={{
                  height: [`${height * 0.7}%`, `${height}%`, `${height * 0.8}%`],
                }}
                transition={{
                  duration: 2.5,
                  delay: index * 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-16 flex-1 rounded-t-sm bg-[var(--primary)]"
              />
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-[var(--muted)]">
            <span>Processing</span>

            <span className="font-semibold text-[var(--foreground)]">
              82%
            </span>
          </div>
        </div>

        <div className="rounded-2xl bg-[var(--foreground)] p-5 text-white">
          <p className="text-xs text-white/50">Automation</p>

          <p className="mt-4 text-3xl font-semibold tracking-tight">24K</p>

          <p className="mt-1 text-xs text-white/50">
            tasks processed
          </p>

          <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{ width: ["35%", "82%", "55%", "90%"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full rounded-full bg-[var(--primary)]"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-[var(--border)] p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium">Recent intelligence</span>

          <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
            Live
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {[
            "Pattern detected",
            "Data processed",
            "Decision generated",
          ].map((item, index) => (
            <motion.div
              key={item}
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 3,
                delay: index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center justify-between border-b border-[var(--border)] pb-3 last:border-0 last:pb-0"
            >
              <span className="text-xs text-[var(--muted)]">{item}</span>

              <span className="text-xs font-medium">
                {index === 0 ? "Detected" : index === 1 ? "Complete" : "Ready"}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductVisual() {
  return (
    <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white p-5 sm:h-[430px] sm:p-8">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
          <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
          <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
        </div>

        <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
          Product system
        </span>
      </div>

      <div className="mt-7 grid grid-cols-[0.7fr_1.3fr] gap-4">
        <div className="space-y-3">
          <div className="h-9 rounded-lg bg-[var(--foreground)]" />
          <div className="h-8 rounded-lg bg-[var(--primary-soft)]" />
          <div className="h-8 rounded-lg bg-[#f0efeb]" />
          <div className="h-8 rounded-lg bg-[#f0efeb]" />
        </div>

        <div className="rounded-xl bg-[#f7f6f2] p-4">
          <div className="flex items-end gap-2">
            <motion.div
              animate={{ height: [70, 110, 85, 120, 70] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full rounded-t bg-[var(--primary)]"
            />

            <motion.div
              animate={{ height: [100, 65, 115, 80, 100] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full rounded-t bg-[var(--foreground)]"
            />

            <motion.div
              animate={{ height: [55, 95, 75, 105, 55] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full rounded-t bg-[#c9c8c3]"
            />
          </div>

          <div className="mt-4 h-px bg-[var(--border)]" />

          <div className="mt-3 h-2 w-20 rounded-full bg-[var(--border)]" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="h-16 rounded-xl bg-[#f7f6f2]" />
        <div className="h-16 rounded-xl bg-[var(--primary-soft)]" />
        <div className="h-16 rounded-xl bg-[#f7f6f2]" />
      </div>
    </div>
  );
}

function EmergingVisual() {
  return (
    <div className="relative h-[360px] overflow-hidden rounded-[2rem] bg-[var(--foreground)] p-6 text-white sm:h-[430px] sm:p-8">
      <div className="flex items-start justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
          Experimental
        </span>

        <span className="text-xs text-[var(--primary)]">03 / 03</span>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          animate={{
            x: [-12, 12, -12],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <p className="text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.8] tracking-[-0.08em]">
            EXPLORE
          </p>

          <p className="ml-10 mt-2 text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.8] tracking-[-0.08em] text-[var(--primary)]">
            TEST
          </p>

          <p className="ml-20 mt-2 text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.8] tracking-[-0.08em] text-white/20">
            RETHINK
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-white/10 pt-5 sm:bottom-8 sm:left-8 sm:right-8">
        <div>
          <p className="text-xs text-white/40">Research</p>

          <p className="mt-1 text-sm font-medium">
            New possibilities
          </p>
        </div>

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-10 w-10 rounded-full border border-[var(--primary)]/50"
        />
      </div>
    </div>
  );
}

export default function SolutionsPage() {
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
        className="relative px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-40 lg:px-10 lg:pb-36 lg:pt-48"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              Solutions
            </p>

            <h1 className="mt-6 max-w-4xl text-[clamp(3.2rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              Ideas into
              <br />
              <span className="text-black/30">intelligent</span>
              <br />
              technology.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              We combine AI, software engineering, and experimentation to
              create technology that is useful in the real world.
            </p>
          </motion.div>

          <IntelligenceVisual />
        </div>
      </section>

      {/* Intro */}
      <section className="border-y border-[var(--border)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            What we focus on
          </p>

          <p className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">
            We don&apos;t limit ourselves to one type of technology. We explore
            where{" "}
            <span className="text-[var(--primary)]">
              intelligence, software, and new ideas
            </span>{" "}
            can create something valuable.
          </p>
        </div>
      </section>

      {/* Solution 01 */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <span className="text-sm font-semibold text-[var(--primary)]">
              {solutions[0].number}
            </span>

            <h2 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
              {solutions[0].title}
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {solutions[0].description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {solutions[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <AIDashboardVisual />
        </div>
      </section>

      {/* Solution 02 */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <ProductVisual />

          <div>
            <span className="text-sm font-semibold text-[var(--primary)]">
              {solutions[1].number}
            </span>

            <h2 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
              {solutions[1].title}
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {solutions[1].description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {solutions[1].tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution 03 */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <span className="text-sm font-semibold text-[var(--primary)]">
              {solutions[2].number}
            </span>

            <h2 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
              {solutions[2].title}
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {solutions[2].description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {solutions[2].tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <EmergingVisual />
        </div>
      </section>

      {/* Closing statement */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl border-t border-[var(--border)] pt-14 sm:pt-20">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              The idea
            </p>

            <h2 className="max-w-5xl text-[clamp(2.5rem,5.5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
              The best technology isn&apos;t the most complicated.
              <span className="text-[var(--primary)]">
                {" "}
                It&apos;s the technology that makes something better.
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
                Have an idea?
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                Let&apos;s explore what&apos;s possible.
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