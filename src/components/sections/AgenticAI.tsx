import Reveal from "@/components/ui/Reveal";

const satellites = [
  { label: "Knowledge", angle: -90, color: "#FFF09A" },
  { label: "Tools", angle: -18, color: "#FF9FAE" },
  { label: "Memory", angle: 54, color: "#FFD0B8" },
  { label: "APIs", angle: 126, color: "#FFF09A" },
  { label: "Actions", angle: 198, color: "#FF9FAE" },
];

const R = 130;
const CX = 220;
const CY = 190;

function point(angle: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + R * Math.cos(rad), y: CY + R * Math.sin(rad) };
}

export default function AgenticAI() {
  return (
    <section className="bg-[#FFBBD8] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="chip bg-[#27233A] text-white">Generative &amp; Agentic AI</div>
            <h2 className="mt-5 max-w-lg font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-5xl">
              Not a chatbot.{" "}
              <span className="italic text-[#27233A]">An agent.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[#27233A]/70">
              A chatbot answers questions. Our agents reason through tasks,
              call tools, hold memory, and take actions inside your real
              business systems.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <svg viewBox="0 0 440 380" className="mx-auto h-auto w-full max-w-[440px]">
              {satellites.map((s, i) => {
                const p = point(s.angle);
                return (
                  <g key={s.label}>
                    <line x1={CX} y1={CY} x2={p.x} y2={p.y} stroke="#27233A" strokeOpacity="0.3" strokeWidth="1.5" />
                    <circle r="4" fill="#5BA7FF">
                      <animateMotion dur="3.5s" begin={`${i * 0.4}s`} repeatCount="indefinite" path={`M${CX},${CY} L${p.x},${p.y}`} />
                    </circle>
                  </g>
                );
              })}

              {satellites.map((s) => {
                const p = point(s.angle);
                return (
                  <g key={`${s.label}-node`}>
                    <circle cx={p.x} cy={p.y} r="30" fill={s.color} />
                    <text x={p.x} y={p.y + 4} fontSize="10" fontWeight="700" textAnchor="middle" fill="#27233A">
                      {s.label}
                    </text>
                  </g>
                );
              })}

              <circle cx={CX} cy={CY} r="58" fill="#FF7187" />
              <circle cx={CX} cy={CY} r="58" fill="none" stroke="#27233A" strokeOpacity="0.35" strokeWidth="2" className="node-pulse" style={{ transformOrigin: `${CX}px ${CY}px` }} />
              <text x={CX} y={CY - 4} fontSize="12" fontWeight="700" textAnchor="middle" fill="white">
                AI
              </text>
              <text x={CX} y={CY + 12} fontSize="12" fontWeight="700" textAnchor="middle" fill="white">
                AGENT
              </text>
            </svg>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
