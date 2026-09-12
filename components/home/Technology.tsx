"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const technologies = [
  "Artificial Intelligence",
  "Machine Learning",
  "Web Applications",
  "Data & Automation",
  "Cloud Technology",
  "Emerging Technology",
];

export default function Technology() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const visualScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.92]);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[var(--foreground)] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Top */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              Technology
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,5.5vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              Technology is
              <br />
              <span className="text-white/40">
                our playground.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              We work across AI, software, data, and emerging technologies
              to experiment, build, and discover better ways to solve
              real-world problems.
            </p>
          </div>
        </div>

        {/* Main visual */}
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* Technology list */}
          <div>
            {technologies.map((technology, index) => (
              <TechnologyItem
                key={technology}
                technology={technology}
                index={index}
              />
            ))}
          </div>

          {/* Visual */}
          <motion.div
            style={{
              y: visualY,
              scale: visualScale,
            }}
            className="relative mx-auto aspect-square w-full max-w-[520px]"
          >
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] opacity-10 blur-3xl" />

            {/* Outer circle */}
            <div className="absolute inset-[8%] rounded-full border border-white/10" />

            {/* Second circle */}
            <div className="absolute inset-[20%] rounded-full border border-white/10" />

            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[30%] rounded-full border border-dashed border-white/15"
            />

            {/* Core */}
            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--primary)] shadow-2xl shadow-black/30 sm:h-40 sm:w-40">
              <div className="text-center">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  VedAIT
                </span>

                <span className="mt-2 block text-xl font-semibold sm:text-2xl">
                  Intelligence
                </span>
              </div>
            </div>

            {/* Orbit */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[20%]"
            >
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-white" />

              <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--primary)]" />

              <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/50" />

              <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[var(--primary)]" />
            </motion.div>

            {/* Floating labels */}
            <FloatingLabel
              text="AI"
              className="left-[5%] top-[25%]"
            />

            <FloatingLabel
              text="DATA"
              className="right-[2%] top-[38%]"
            />

            <FloatingLabel
              text="SOFTWARE"
              className="bottom-[18%] left-[8%]"
            />

            <FloatingLabel
              text="RESEARCH"
              className="bottom-[8%] right-[8%]"
            />
          </motion.div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 border-t border-white/10 pt-8 sm:mt-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
              We don't just use technology.
              <span className="text-white/40">
                {" "}
                We explore what it can become.
              </span>
            </p>

            <span className="text-xs uppercase tracking-[0.16em] text-white/35">
              AI · Software · Innovation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologyItem({
  technology,
  index,
}: {
  technology: string;
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
    [index % 2 === 0 ? -25 : 25, 0, index % 2 === 0 ? 15 : -15]
  );

  return (
    <motion.div
      ref={ref}
      style={{ x }}
      className="group border-t border-white/10 py-5 sm:py-6"
    >
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-5">
          <span className="text-[10px] tracking-[0.16em] text-white/30">
            0{index + 1}
          </span>

          <h3 className="text-xl font-semibold tracking-[-0.025em] transition-colors duration-300 group-hover:text-[var(--primary)] sm:text-2xl">
            {technology}
          </h3>
        </div>

        <span className="text-lg text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--primary)]">
          ↗
        </span>
      </div>
    </motion.div>
  );
}

function FloatingLabel({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm ${className}`}
    >
      <span className="text-[9px] font-semibold tracking-[0.16em] text-white/50">
        {text}
      </span>
    </motion.div>
  );
}