"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const stages = [
  {
    number: "01",
    label: "IDEA",
    title: "Start with a question.",
    description:
      "Every meaningful product begins with curiosity, a problem worth solving, or an idea worth exploring.",
  },
  {
    number: "02",
    label: "EXPERIMENT",
    title: "Test what is possible.",
    description:
      "We combine research, technology, and experimentation to discover what can actually work.",
  },
  {
    number: "03",
    label: "PRODUCT",
    title: "Make it useful.",
    description:
      "The strongest ideas become practical digital products, intelligent systems, and technology people can use.",
  },
];

export default function Innovation() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [80, -80]);

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
              From idea to impact
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
              We turn
              <br />
              <span className="text-[var(--muted)]">
                possibilities into products.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              VedAIT Labs is built around experimentation. We explore ideas,
              test emerging technologies, and transform promising concepts
              into useful digital experiences.
            </p>
          </div>
        </div>

        {/* Main visual */}
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* Process */}
          <div>
            {stages.map((stage, index) => (
              <Stage
                key={stage.number}
                stage={stage}
                index={index}
              />
            ))}
          </div>

          {/* Visual */}
          <motion.div
            style={{ y: visualY }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="relative aspect-square">

              {/* Soft background */}
              <div className="absolute left-[12%] top-[12%] h-[70%] w-[70%] rounded-full bg-[var(--primary-soft)]" />

              {/* Connecting path */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 500 500"
                fill="none"
              >
                <path
                  d="M80 350 C140 350 150 150 250 250 C350 350 360 150 430 150"
                  stroke="var(--border)"
                  strokeWidth="1"
                />

                <motion.path
                  d="M80 350 C140 350 150 150 250 250 C350 350 360 150 430 150"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeDasharray="8 14"
                  animate={{
                    strokeDashoffset: [0, -44],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </svg>

              {/* Idea node */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[8%] top-[64%]"
              >
                <Node
                  number="01"
                  label="IDEA"
                  accent={false}
                />
              </motion.div>

              {/* Experiment node */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <Node
                  number="02"
                  label="EXPERIMENT"
                  accent
                />
              </motion.div>

              {/* Product node */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[5%] top-[24%]"
              >
                <Node
                  number="03"
                  label="PRODUCT"
                  accent={false}
                />
              </motion.div>

              {/* Small decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute right-[18%] bottom-[14%] h-12 w-12 rounded-full border border-[var(--border)]"
              />

              <div className="absolute left-[22%] top-[16%] h-2 w-2 rounded-full bg-[var(--primary)]" />

              <div className="absolute right-[20%] top-[12%] h-1.5 w-1.5 rounded-full bg-[var(--foreground)]" />

            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 border-t border-[var(--border)] pt-7 sm:mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[var(--muted)]">
              Research · Experimentation · Engineering
            </p>

            <p className="text-sm font-semibold">
              Building what comes next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stage({
  stage,
  index,
}: {
  stage: (typeof stages)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -30 : 30, 0, index % 2 === 0 ? 15 : -15]
  );

  return (
    <motion.div
      ref={ref}
      style={{ x }}
      className="border-t border-[var(--border)] py-7 sm:py-8"
    >
      <div className="grid gap-5 sm:grid-cols-[70px_1fr] sm:gap-8">

        {/* Number */}
        <div>
          <span className="text-xs font-semibold tracking-[0.16em] text-[var(--primary)]">
            {stage.number}
          </span>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center justify-between gap-5">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                {stage.label}
              </span>

              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                {stage.title}
              </h3>
            </div>

            <span className="text-xl text-[var(--muted)]">
              ↗
            </span>
          </div>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
            {stage.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Node({
  number,
  label,
  accent,
}: {
  number: string;
  label: string;
  accent: boolean;
}) {
  return (
    <div
      className={`flex h-24 w-24 flex-col items-center justify-center rounded-full border sm:h-28 sm:w-28 ${
        accent
          ? "border-[var(--primary)] bg-[var(--primary)] text-white"
          : "border-[var(--border)] bg-[var(--background)]"
      }`}
    >
      <span
        className={`text-[9px] uppercase tracking-[0.16em] ${
          accent ? "text-white/60" : "text-[var(--muted)]"
        }`}
      >
        {number}
      </span>

      <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em]">
        {label}
      </span>
    </div>
  );
}