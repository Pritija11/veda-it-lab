"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Explore",
    description:
      "We start with a problem, an idea, or an emerging technology worth exploring.",
  },
  {
    number: "02",
    title: "Experiment",
    description:
      "We test possibilities, connect technologies, and turn early ideas into working concepts.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We transform validated ideas into reliable digital products and intelligent systems.",
  },
  {
    number: "04",
    title: "Evolve",
    description:
      "We continuously improve what we build as technology, users, and problems change.",
  },
];

function Step({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? 35 : 55, 0, index % 2 === 0 ? -25 : -45]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="relative"
    >
      <div className="border-t border-[var(--border)] py-7 sm:py-8">
        <div className="grid gap-5 sm:grid-cols-[70px_1fr] sm:gap-8">
          
          {/* Number */}
          <span className="text-xs font-semibold tracking-[0.16em] text-[var(--primary)]">
            {step.number}
          </span>

          {/* Content */}
          <div>
            <div className="flex items-start justify-between gap-5">
              <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {step.title}
              </h3>

              <motion.span
                whileHover={{ x: 5, y: -5 }}
                className="text-xl text-[var(--muted)]"
              >
                ↗
              </motion.span>
            </div>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowWeBuild() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    [50, -50]
  );

  const visualRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [-4, 4]
  );

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              Our approach
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
              From curiosity
              <br />
              to{" "}
              <span className="text-[var(--muted)]">
                something real.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              We believe meaningful technology starts with exploration.
              Our process gives ideas room to evolve before turning them
              into useful products and systems.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Visual */}
          <div className="relative min-h-[400px] lg:min-h-[520px]">
            <motion.div
              style={{
                y: visualY,
                rotate: visualRotate,
              }}
              className="sticky top-32"
            >
              <div className="relative mx-auto aspect-square max-w-[430px]">

                {/* Background circle */}
                <div className="absolute inset-[8%] rounded-full bg-[var(--primary-soft)]" />

                {/* Outer ring */}
                <div className="absolute inset-[16%] rounded-full border border-[var(--border)]" />

                {/* Rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[25%] rounded-full border border-dashed border-[var(--border)]"
                />

                {/* Core */}
                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--foreground)] shadow-xl sm:h-36 sm:w-36">
                  <div className="text-center">
                    <span className="block text-[9px] uppercase tracking-[0.2em] text-white/50">
                      VedAIT
                    </span>

                    <span className="mt-2 block text-xl font-semibold text-white sm:text-2xl">
                      Labs
                    </span>
                  </div>
                </div>

                {/* Orbit points */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[25%]"
                >
                  <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--primary)]" />

                  <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[var(--foreground)]" />

                  <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[var(--primary)]" />

                  <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[var(--foreground)]" />
                </motion.div>

                {/* Labels */}
                <div className="absolute left-[4%] top-[25%] rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-2">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                    Ideas
                  </span>
                </div>

                <div className="absolute right-[0%] top-[35%] rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-2">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                    Intelligence
                  </span>
                </div>

                <div className="absolute bottom-[16%] left-[12%] rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-2">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                    Experiments
                  </span>
                </div>

                <div className="absolute bottom-[10%] right-[8%] rounded-full bg-[var(--primary)] px-4 py-2">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
                    Products
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Steps */}
          <div>
            {steps.map((step, index) => (
              <Step
                key={step.number}
                step={step}
                index={index}
              />
            ))}

            <div className="border-t border-[var(--border)]" />
          </div>
        </div>
      </div>
    </section>
  );
}