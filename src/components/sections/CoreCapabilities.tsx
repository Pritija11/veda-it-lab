import { Sparkles, FlaskConical, Rocket, Activity, Gauge } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const stages = [
  { icon: Sparkles, label: "Model" },
  { icon: FlaskConical, label: "Evaluate" },
  { icon: Rocket, label: "Deploy" },
  { icon: Activity, label: "Monitor" },
  { icon: Gauge, label: "Optimize" },
];

const curvePath = "M40,60 C110,140 150,10 220,70 C290,130 320,20 380,80 C420,120 430,90 440,100";

export default function CoreCapabilities() {
  return (
    <section className="relative overflow-hidden bg-[#FFF09A] py-20 sm:py-28">
      <div className="solid-shape shape-float h-24 w-24 rounded-[40%] bg-[#FF9FAE]" style={{ top: "-30px", right: "8%" }} aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <div className="chip bg-[#27233A] text-white">AI Engineering &amp; Deployment</div>
            <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-5xl">
              We don&apos;t just prototype AI.{" "}
              <span className="italic text-[#27233A]">We engineer it.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-16 rounded-[2rem] border border-[#E8E3ED] bg-white p-6 sm:p-10">
            <svg viewBox="0 0 480 140" className="hidden w-full sm:block" preserveAspectRatio="none">
              <path d={curvePath} fill="none" stroke="#E8E3ED" strokeWidth="2" />
              <path d={curvePath} fill="none" stroke="#5BA7FF" strokeOpacity="0.55" strokeWidth="2" className="dash-flow" />
              <circle r="4" fill="#FF7187">
                <animateMotion dur="4.5s" repeatCount="indefinite" path={curvePath} />
              </circle>
            </svg>

            <div className="mt-2 grid grid-cols-3 gap-5 sm:mt-0 sm:grid-cols-5">
              {stages.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <div key={stage.label} className="flex flex-col items-center text-center">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF4FF]">
                      <span className="node-pulse absolute inset-0 rounded-2xl border-2 border-[#5BA7FF]/30" style={{ animationDelay: `${i * 0.4}s` }} />
                      <Icon className="h-6 w-6 text-[#5BA7FF]" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-[#27233A]">{stage.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
