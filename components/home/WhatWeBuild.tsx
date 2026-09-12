
"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const areas = [
  {
    number: "01",
    title: "AI & Intelligent Systems",
    description:
      "We explore and build intelligent systems that use AI, data, and automation to solve meaningful problems.",
    tags: ["AI", "Data", "Automation"],
  },
  {
    number: "02",
    title: "Digital Products",
    description:
      "From early concepts to working products, we turn ideas into thoughtful digital experiences and software.",
    tags: ["Software", "Web", "Products"],
  },
  {
    number: "03",
    title: "Emerging Technology",
    description:
      "We experiment with new technologies, prototypes, and ideas that can shape what comes next.",
    tags: ["Research", "Experiments", "Innovation"],
  },
];

function BuildCard({
  area,
  index,
}: {
  area: (typeof areas)[number];
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Each card moves at a slightly different speed.
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index === 1 ? 35 : 55, 0, index === 1 ? -35 : -55]
  );

  // Very subtle rotation while moving through the viewport.
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index === 1 ? 1 : -1, 0, index === 1 ? -1 : 1]
  );

  return (
    <motion.div
      style={{ y, rotate }}
      className="h-full"
    >
      <Link
        ref={ref}
        href="/solutions"
        className="group relative flex min-h-[380px] h-full overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white/40 p-6 transition-shadow duration-500 hover:shadow-xl sm:min-h-[420px] sm:p-8"
      >
        {/* Number */}
        <div className="flex w-full flex-col">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              {area.number}
            </span>

            <span className="text-xl text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </div>

          {/* Technical visual */}
          <div className="relative mt-10 h-32">
            {area.number === "01" && (
              <div className="relative h-full w-full">
                <div className="absolute left-0 top-1/2 h-px w-full bg-[var(--border)]" />

                <motion.div
                  animate={{ x: [0, 120, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[10%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[var(--primary)]"
                />

                <div className="absolute left-[38%] top-1/2 h-10 w-10 -translate-y-1/2 rounded-xl bg-[var(--foreground)]" />

                <div className="absolute right-[25%] top-[15%] h-8 w-8 rounded-full border border-[var(--border)]" />

                <div className="absolute right-[10%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[var(--primary)]" />

                <div className="absolute left-[42%] top-[10%] h-px w-[28%] rotate-[25deg] bg-[var(--border)]" />

                <div className="absolute bottom-[15%] left-[42%] h-px w-[28%] -rotate-[25deg] bg-[var(--border)]" />

                <span className="absolute left-[35%] top-[25%] text-[9px] uppercase tracking-widest text-[var(--muted)]">
                  model
                </span>
              </div>
            )}

            {area.number === "02" && (
              <div className="relative h-full">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[5%] top-[10%] h-24 w-[70%] rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 shadow-sm"
                >
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--border)]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--border)]" />
                  </div>

                  <div className="mt-5 h-2 w-1/2 rounded-full bg-[var(--foreground)]" />

                  <div className="mt-3 flex gap-2">
                    <div className="h-8 flex-1 rounded-md bg-[var(--primary-soft)]" />
                    <div className="h-8 flex-1 rounded-md border border-[var(--border)]" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 right-[5%] h-20 w-[45%] rounded-xl bg-[var(--primary)] p-3 shadow-lg"
                >
                  <div className="h-1.5 w-1/2 rounded-full bg-white/60" />

                  <div className="mt-5 flex gap-1">
                    <span className="h-5 w-5 rounded-md bg-white/80" />
                    <span className="h-5 w-5 rounded-md bg-white/40" />
                    <span className="h-5 w-5 rounded-md bg-white/30" />
                  </div>
                </motion.div>
              </div>
            )}

            {area.number === "03" && (
              <div className="relative h-full">
                <motion.div
                  animate={{ rotate: [45, 50, 45] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[var(--foreground)]"
                />

                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]"
                />

                <div className="absolute left-[8%] top-1/2 h-px w-[28%] bg-[var(--border)]" />

                <div className="absolute right-[8%] top-1/2 h-px w-[28%] bg-[var(--border)]" />

                <div className="absolute left-[12%] top-[15%] h-3 w-3 rounded-full border border-[var(--border)]" />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[15%] right-[12%] h-3 w-3 rounded-full bg-[var(--primary)]"
                />

                <span className="absolute left-[2%] top-[3%] text-[9px] uppercase tracking-widest text-[var(--muted)]">
                  explore
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="mt-8">
            <h3 className="max-w-xs text-2xl font-semibold leading-tight tracking-[-0.035em]">
              {area.title}
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
              {area.description}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-auto flex flex-wrap gap-2 pt-8">
            {area.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function WhatWeBuild() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          style={{ y: headingY }}
          className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              What we build
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
              Turning technology into{" "}
              <span className="text-[var(--muted)]">something useful.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              VedAIT Labs brings together artificial intelligence, software
              engineering, and emerging technology to explore ideas and build
              digital solutions.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-4">
          {areas.map((area, index) => (
            <BuildCard
              key={area.number}
              area={area}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
