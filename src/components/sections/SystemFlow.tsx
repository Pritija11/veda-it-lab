import Reveal from "@/components/ui/Reveal";

const stages = [
  { number: "01", label: "Data", sub: "Ingested, versioned, real", bg: "#BDEBFF" },
  { number: "02", label: "Intelligence", sub: "Models that understand it", bg: "#B9C7FF" },
  { number: "03", label: "Decision", sub: "Reasoned, not guessed", bg: "#FFD0B8" },
  { number: "04", label: "Action", sub: "Executed inside real systems", bg: "#FF9FAE" },
];

export default function SystemFlow() {
  return (
    <section className="bg-[#FFFDF8] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-2xl font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-5xl">
            From signal to{" "}
            <span className="italic text-[#FF7187]">action.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-16">
            <svg viewBox="0 0 900 4" className="absolute left-[10%] right-[10%] top-9 hidden h-1 w-[80%] sm:block" preserveAspectRatio="none">
              <line x1="0" y1="2" x2="900" y2="2" stroke="#27233A" strokeOpacity="0.1" strokeWidth="2" />
              <line x1="0" y1="2" x2="900" y2="2" stroke="#5BA7FF" strokeOpacity="0.45" strokeWidth="2" className="dash-flow" />
            </svg>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stages.map((stage, i) => (
                <div key={stage.label} className="flex flex-col items-center text-center">
                  <div
                    className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full text-2xl font-bold text-[#27233A]"
                    style={{ backgroundColor: stage.bg }}
                  >
                    <span className="node-pulse absolute inset-0 rounded-full border-2 border-[#27233A]/15" style={{ animationDelay: `${i * 0.4}s` }} />
                    {stage.number}
                  </div>
                  <p className="mt-4 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#27233A]">
                    {stage.label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#706B80]">{stage.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
