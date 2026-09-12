"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* LEFT */}
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Technology Innovation Lab
              </span>
            </div>

            <h1 className="text-[clamp(3.5rem,7vw,7.2rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[var(--foreground)]">
              Building
              <br />
              <span className="text-[var(--primary)]">intelligent</span>
              <br />
              technology.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              VedAIT Labs explores AI, software, and emerging technologies
              to turn ideas and real-world problems into useful digital
              products.
            </p>

            <div className="mt-7 flex items-center gap-6">
              <Link
                href="/solutions"
                className="inline-flex items-center rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
              >
                Explore solutions
                <span className="ml-3">↗</span>
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center text-sm font-semibold text-[var(--foreground)]"
              >
                Let's talk
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT — SYSTEM VISUAL */}
          <div className="relative mx-auto w-full max-w-[680px]">
            <div
              className="relative aspect-[1/0.9] transition-transform duration-700 ease-out"
              style={{
                transform: `translateY(${Math.min(scrollY * 0.08, 35)}px)`,
              }}
            >
              {/* Soft background shape */}
              <div className="absolute left-[18%] top-[10%] h-[65%] w-[65%] rounded-full bg-[var(--primary-soft)]" />

              {/* Main canvas */}
              <div className="absolute inset-[7%] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white/50 p-5 sm:p-7">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    VedAIT / System 01
                  </span>

                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                    Active
                  </span>
                </div>

                {/* System */}
                <div className="relative mt-6 h-[calc(100%-2rem)]">
                  {/* Connecting paths */}
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 600 400"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M90 90 C180 90 190 200 300 200"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-[var(--border)]"
                    />

                    <path
                      d="M90 310 C180 310 190 200 300 200"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-[var(--border)]"
                    />

                    <path
                      d="M300 200 C400 200 420 100 510 100"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-[var(--border)]"
                    />

                    <path
                      d="M300 200 C400 200 420 300 510 300"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-[var(--border)]"
                    />

                    {/* Moving data */}
                    <circle
                      r="4"
                      fill="var(--primary)"
                      className="animate-[dataMove_4s_linear_infinite]"
                    >
                      <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        path="M90 90 C180 90 190 200 300 200 C400 200 420 100 510 100"
                      />
                    </circle>

                    <circle
                      r="3"
                      fill="var(--primary)"
                      opacity="0.7"
                    >
                      <animateMotion
                        dur="5s"
                        begin="1.5s"
                        repeatCount="indefinite"
                        path="M90 310 C180 310 190 200 300 200 C400 200 420 300 510 300"
                      />
                    </circle>
                  </svg>

                  {/* Input: AI */}
                  <div className="absolute left-0 top-[12%]">
                    <div className="w-20 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3 shadow-sm sm:w-28 sm:p-4 lg:w-32">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                        Input
                      </span>

                      <p className="mt-3 text-sm font-semibold">
                        Intelligence
                      </p>

                      <div className="mt-3 h-1 w-10 rounded-full bg-[var(--primary)]" />
                    </div>
                  </div>

                  {/* Input: Data */}
                  <div className="absolute bottom-[7%] left-0">
                    <div className="w-20 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3 shadow-sm sm:w-28 sm:p-4 lg:w-32">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                        Input
                      </span>

                      <p className="mt-3 text-sm font-semibold">Data</p>

                      <div className="mt-3 flex gap-1">
                        <span className="h-1 w-4 rounded-full bg-[var(--primary)]" />
                        <span className="h-1 w-7 rounded-full bg-[var(--border)]" />
                        <span className="h-1 w-3 rounded-full bg-[var(--border)]" />
                      </div>
                    </div>
                  </div>

                  {/* Core */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[var(--foreground)] shadow-xl sm:h-32 sm:w-32 lg:h-40 lg:w-40">
                      <div className="absolute inset-3 rounded-full border border-white/10" />

                      <div className="text-center">
                        <span className="block text-[10px] uppercase tracking-[0.18em] text-white/50">
                          Core
                        </span>

                        <span className="mt-2 block text-lg font-semibold text-white sm:text-xl">
                          VedAIT
                        </span>
                      </div>

                      {/* Pulse */}
                      <span className="absolute inset-0 animate-[pulseRing_3s_ease-out_infinite] rounded-full border border-[var(--primary)]" />
                    </div>
                  </div>

                  {/* Output: Product */}
                  <div className="absolute right-0 top-[15%]">
                    <div className="w-20 rounded-2xl bg-[var(--primary)] p-3 shadow-lg sm:w-28 sm:p-4 lg:w-32">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-white/60">
                        Output
                      </span>

                      <p className="mt-3 text-sm font-semibold text-white">
                        Products
                      </p>

                      <div className="mt-3 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        <span className="h-px w-8 bg-white/40" />
                      </div>
                    </div>
                  </div>

                  {/* Output: Solutions */}
                  <div className="absolute bottom-[8%] right-0">
                    <div className="w-20 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3 shadow-sm sm:w-28 sm:p-4 lg:w-32">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                        Output
                      </span>

                      <p className="mt-3 text-sm font-semibold">Solutions</p>

                      <div className="mt-3 h-1 w-12 rounded-full bg-[var(--foreground)]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating label */}
              <div className="absolute right-[2%] top-[3%] rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 shadow-sm">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em]">
                  AI × Software
                </span>
              </div>

              {/* Small moving accent */}
              <div className="absolute bottom-[4%] left-[7%] h-3 w-3 animate-[float_4s_ease-in-out_infinite] rounded-full bg-[var(--primary)]" />
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--border)] pt-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
            AI · Software · Emerging Technology
          </p>

          <p className="text-xs text-[var(--muted)]">
            Building from Kathmandu, Nepal
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }

          70% {
            transform: scale(1.35);
            opacity: 0;
          }

          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}