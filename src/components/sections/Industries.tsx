import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 bg-[#FFFDF8] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="chip bg-[#27233A] text-white">Industries</div>
              <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-5xl">
                Where intelligence{" "}
                <span className="italic text-[#FF7187]">actually helps.</span>
              </h2>
            </div>
            <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-bold text-[#27233A] hover:text-[#FF7187]">
              View all industries
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.slug} delay={i * 70}>
                <Link
                  href={`/industries#${industry.slug}`}
                  className="group editorial-tilt relative block overflow-hidden rounded-[1.75rem] p-7"
                  style={{ backgroundColor: industry.bg }}
                >
                  <Icon className="h-6 w-6 text-[#27233A]" />
                  <h3 className="mt-8 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#27233A]">
                    {industry.label}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-6 text-[#27233A]/75 opacity-0 transition-all duration-300 group-hover:mt-2 group-hover:max-h-12 group-hover:opacity-100">
                    {industry.hint}
                  </p>
                  <span className="mt-4 inline-block text-lg text-[#27233A]/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#27233A]">
                    ↗
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
