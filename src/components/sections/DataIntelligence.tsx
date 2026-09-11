import Reveal from "@/components/ui/Reveal";

const points = [
  { x: 40, y: 210, color: "#27233A" },
  { x: 110, y: 140, color: "#5BA7FF" },
  { x: 190, y: 190, color: "#27233A" },
  { x: 260, y: 90, color: "#5BA7FF" },
  { x: 330, y: 150, color: "#27233A" },
  { x: 390, y: 60, color: "#5BA7FF" },
];

export default function DataIntelligence() {
  return (
    <section className="bg-[#BDF3D2] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="chip bg-[#27233A] text-white">Data &amp; Intelligence</div>
            <h2 className="mt-5 max-w-md font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-5xl">
              Turn data into{" "}
              <span className="italic text-[#27233A]">decisions.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[#27233A]/70">
              Pipelines, forecasting, anomaly detection. AI is only as good as
              the data underneath it — this is where that gets built.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative rounded-[2rem] bg-white p-8 sm:p-10">
              <svg viewBox="0 0 430 260" className="h-56 w-full sm:h-64">
                <path
                  d="M40,210 C80,170 90,150 110,140 C140,125 170,180 190,190 C220,205 240,110 260,90 C290,60 310,145 330,150 C355,157 370,80 390,60"
                  fill="none"
                  stroke="#27233A"
                  strokeOpacity="0.2"
                  strokeWidth="2"
                />
                {points.map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r="6" fill={p.color} className="node-pulse" style={{ transformOrigin: `${p.x}px ${p.y}px`, animationDelay: `${i * 0.3}s` }} />
                ))}
              </svg>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="chip bg-[#BDF3D2] text-[#27233A]">Forecasting</span>
                <span className="chip bg-[#BDEBFF] text-[#27233A]">Anomaly detection</span>
                <span className="chip bg-[#F5F3FA] text-[#27233A]">Pipelines</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
