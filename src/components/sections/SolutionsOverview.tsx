import Reveal from "@/components/ui/Reveal";
import { pillars } from "@/data/pillars";

const accentStyles: Record<
  string,
  { bg: string; text: string; iconWrap: string; border?: string }
> = {
  ivory: { bg: "bg-white", text: "text-[#27233A]", iconWrap: "bg-[#BDEBFF]/50", border: "border border-[#E8E3ED]" },
  pink: { bg: "bg-[#FFBBD8]", text: "text-[#27233A]", iconWrap: "bg-white/50" },
  mint: { bg: "bg-[#BDF3D2]", text: "text-[#27233A]", iconWrap: "bg-white/50" },
  sky: { bg: "bg-[#BDEBFF]", text: "text-[#27233A]", iconWrap: "bg-white/50" },
  peach: { bg: "bg-[#FFD0B8]", text: "text-[#27233A]", iconWrap: "bg-white/50" },
};

export default function SolutionsOverview() {
  return (
    <section className="bg-[#FFFDF8] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <div className="chip bg-[#27233A] text-white">AI Solutions</div>
            <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-5xl">
              Intelligence built for{" "}
              <span className="italic text-[#FF7187]">real work.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const style = accentStyles[pillar.accent];
            const isLarge = pillar.size === "large";

            return (
              <Reveal key={pillar.id} delay={i * 90} className={isLarge ? "lg:row-span-2" : ""}>
                <div
                  id={pillar.id}
                  className={`editorial-tilt card-shadow scroll-mt-28 flex h-full flex-col rounded-[1.75rem] p-8 ${style.bg} ${style.text} ${style.border ?? ""} ${
                    isLarge ? "justify-between lg:min-h-[520px]" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style.iconWrap}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs font-bold opacity-50">{pillar.number}</span>
                  </div>

                  {isLarge && (
                    <div className="relative my-8 flex h-40 items-center justify-center">
                      <div className="solid-shape shape-float h-16 w-16 rounded-full bg-[#B9C7FF]/60" style={{ left: "6%", top: "10%" }} aria-hidden />
                      <div className="solid-shape shape-float float-y-slow h-10 w-10 rounded-[35%] bg-[#BDEBFF]" style={{ right: "10%", top: "0%" }} aria-hidden />
                      <svg viewBox="0 0 220 160" className="h-40 w-full">
                        <line x1="50" y1="120" x2="170" y2="40" stroke="#27233A" strokeOpacity="0.15" strokeWidth="2" />
                        <circle cx="50" cy="120" r="18" fill="#27233A" fillOpacity="0.1" />
                        <circle cx="110" cy="80" r="14" fill="#5BA7FF" className="node-pulse" />
                        <circle cx="170" cy="40" r="20" fill="#B9C7FF" stroke="#5BA7FF" strokeWidth="1.5" />
                      </svg>
                    </div>
                  )}

                  <div className={isLarge ? "" : "mt-7"}>
                    <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold tracking-[-0.01em]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 opacity-80">{pillar.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
