"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const circleY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const circleRotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--primary)] px-6 py-16 sm:rounded-[2.5rem] sm:px-10 sm:py-20 lg:px-16 lg:py-24">

          {/* Decorative visual */}
          <motion.div
            style={{
              y: circleY,
              rotate: circleRotate,
            }}
            className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/20 sm:h-[550px] sm:w-[550px]"
          />

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-16 -top-16 h-[280px] w-[280px] rounded-full border border-white/20 sm:h-[380px] sm:w-[380px]"
          />

          <div className="pointer-events-none absolute right-[12%] top-[25%] hidden h-3 w-3 rounded-full bg-white sm:block" />

          <div className="pointer-events-none absolute right-[28%] bottom-[18%] hidden h-2 w-2 rounded-full bg-white/50 sm:block" />

          {/* Content */}
          <div className="relative max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
              Let's build something
            </p>

            <h2 className="mt-6 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-white">
              Have an idea?
              <br />
              <span className="text-white/55">
                Let's explore it.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Whether you have a product idea, a technology challenge, or
              simply something worth exploring, we'd love to hear about it.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex w-fit items-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--primary)] transition-transform duration-300 hover:-translate-y-1"
              >
                Start a conversation

                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/about"
                className="group inline-flex w-fit items-center text-sm font-semibold text-white"
              >
                Learn about VedAIT

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom label */}
          <div className="relative mt-16 flex flex-col gap-3 border-t border-white/20 pt-5 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
              VedAIT Labs
            </span>

            <span className="text-[10px] uppercase tracking-[0.16em] text-white/50">
              Kathmandu · Nepal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}