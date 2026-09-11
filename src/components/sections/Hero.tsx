import Link from "next/link";

const satellites = [
  { label: "DATA", x: 60, y: 70, r: 34, color: "#BDF3D2" },
  { label: "MODEL", x: 340, y: 50, r: 30, color: "#BDEBFF" },
  { label: "AGENT", x: 380, y: 210, r: 32, color: "#FFBBD8" },
  { label: "VISION", x: 60, y: 260, r: 28, color: "#FFD0B8" },
  { label: "KNOWLEDGE", x: 20, y: 165, r: 26, color: "#FFF09A" },
  { label: "ACTION", x: 360, y: 130, r: 24, color: "#FF9FAE" },
];

const CX = 210;
const CY = 165;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] pb-24 pt-[150px] sm:pt-[168px]">
      {/* Subtle technical grid, one corner only */}
      <div className="tech-grid pointer-events-none absolute -right-10 -top-10 h-72 w-72" aria-hidden />

      {/* Oversized cropped editorial type, bleeding off the edge */}
      <span
        className="pointer-events-none absolute -left-6 bottom-0 select-none font-[family-name:var(--font-fraunces)] text-[10rem] font-semibold leading-none tracking-tighter text-[#27233A]/[0.04] sm:text-[14rem]"
        aria-hidden
      >
        AI
      </span>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Copy */}
          <div className="max-w-2xl">
            <div className="chip bg-[#27233A] text-white">
              <span className="relative flex h-1.5 w-1.5">
                <span className="node-pulse absolute inline-flex h-full w-full rounded-full bg-[#FF7187]" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#FF7187]" />
              </span>
              Applied AI Startup
            </div>

            <h1 className="mt-7 font-[family-name:var(--font-fraunces)] text-6xl font-semibold leading-[1.02] tracking-[-0.01em] text-[#27233A] sm:text-7xl">
              AI that moves from{" "}
              <span className="italic text-[#FF7187]">possibility</span> to
              product.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#706B80]">
              VedAIT Labs is an applied AI startup building intelligent
              systems that turn data, AI models, and automation into
              real-world business capabilities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full bg-[#27233A] px-7 py-3.5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                Explore AI Solutions
                <span>↗</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#27233A]/15 bg-white px-7 py-3.5 text-sm font-bold text-[#27233A] transition-colors hover:border-[#27233A]/35"
              >
                Talk to us
              </Link>
            </div>
          </div>

          {/* Solid-object AI composition — no blur, no gradient */}
          <div className="relative mx-auto w-full max-w-[420px]">
            <svg viewBox="0 0 420 330" className="h-[330px] w-full overflow-visible">
              {/* Connections from center to each satellite */}
              {satellites.map((s) => (
                <g key={`line-${s.label}`}>
                  <line x1={CX} y1={CY} x2={s.x} y2={s.y} stroke="#27233A" strokeOpacity="0.12" strokeWidth="1.5" />
                  <line x1={CX} y1={CY} x2={s.x} y2={s.y} stroke="#5BA7FF" strokeOpacity="0.45" strokeWidth="1.5" className="dash-flow" />
                </g>
              ))}

              {/* Traveling particles */}
              <circle r="3.5" fill="#FF7187">
                <animateMotion dur="3s" repeatCount="indefinite" path={`M${CX},${CY} L${satellites[0].x},${satellites[0].y}`} />
              </circle>
              <circle r="3.5" fill="#5BA7FF">
                <animateMotion dur="3.6s" begin="0.6s" repeatCount="indefinite" path={`M${CX},${CY} L${satellites[2].x},${satellites[2].y}`} />
              </circle>
              <circle r="3.5" fill="#FFF09A">
                <animateMotion dur="4.2s" begin="1.2s" repeatCount="indefinite" path={`M${CX},${CY} L${satellites[4].x},${satellites[4].y}`} />
              </circle>

              {/* Satellite solid objects */}
              {satellites.map((s, i) => (
                <g key={s.label} className={i % 2 === 0 ? "float-y" : "float-y-slow"} style={{ transformOrigin: `${s.x}px ${s.y}px` }}>
                  <circle cx={s.x} cy={s.y} r={s.r} fill={s.color} />
                  <text x={s.x} y={s.y + 4} fontSize="9" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fill="#27233A">
                    {s.label}
                  </text>
                </g>
              ))}

              {/* Central INTELLIGENCE object */}
              <circle cx={CX} cy={CY} r="54" fill="#27233A" />
              <circle cx={CX} cy={CY} r="54" fill="none" stroke="#FF7187" strokeOpacity="0.5" strokeWidth="2" className="node-pulse" style={{ transformOrigin: `${CX}px ${CY}px` }} />
              <text x={CX} y={CY - 3} fontSize="11" fontWeight="700" textAnchor="middle" fill="white">
                INTELLI-
              </text>
              <text x={CX} y={CY + 13} fontSize="11" fontWeight="700" textAnchor="middle" fill="white">
                GENCE
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
