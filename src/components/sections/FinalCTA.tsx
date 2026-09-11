import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="bg-[#FFFDF8] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#FF9FAE] px-8 py-16 sm:px-16 sm:py-20">
            <div
              className="solid-shape shape-float float-y-slow h-[110px] w-[110px] rounded-[38%_62%_55%_45%/48%_40%_60%_52%] bg-[#FFF09A]"
              style={{ top: "-30px", left: "-30px" }}
              aria-hidden
            />
            <div
              className="solid-shape shape-float float-y h-[90px] w-[90px] rounded-full bg-[#BDEBFF]"
              style={{ bottom: "-25px", right: "10%", animationDelay: "2s" }}
              aria-hidden
            />
            <div
              className="solid-shape shape-float float-y-fast h-[64px] w-[64px] rounded-[30%] bg-[#BDF3D2]"
              style={{ top: "18%", right: "-18px", animationDelay: "4s" }}
              aria-hidden
            />

            <div className="relative flex flex-col items-start gap-8">
              <div className="chip bg-[#27233A]/10 text-[#27233A]">Let&apos;s talk</div>

              <h2 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-6xl">
                Have an AI idea{" "}
                <span className="italic">worth building?</span>
              </h2>

              <p className="max-w-xl text-lg leading-8 text-[#27233A]/75">
                Let&apos;s turn it into something real — tell us what
                you&apos;re building, where your data lives, or what&apos;s
                stuck between a working demo and a production system.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#27233A] px-8 py-4 text-base font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Let&apos;s Talk
                  <span>↗</span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-[#27233A]/25 px-8 py-4 text-base font-bold text-[#27233A] transition-colors hover:border-[#27233A]/60"
                >
                  Learn about us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
