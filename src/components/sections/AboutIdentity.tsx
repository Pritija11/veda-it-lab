import Reveal from "@/components/ui/Reveal";

const nodes = [
  { x: 60, y: 40, color: "#FF7187" },
  { x: 720, y: 60, color: "#BDEBFF" },
  { x: 90, y: 220, color: "#FFBBD8" },
  { x: 760, y: 240, color: "#5BA7FF" },
];

export default function AboutIdentity() {
  return (
    <section className="relative overflow-hidden bg-[#27233A] py-24 sm:py-32">
      <svg viewBox="0 0 800 280" className="pointer-events-none absolute inset-0 h-full w-full opacity-40" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <line x1={nodes[0].x} y1={nodes[0].y} x2={nodes[1].x} y2={nodes[1].y} stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1.5" />
        <line x1={nodes[2].x} y1={nodes[2].y} x2={nodes[3].x} y2={nodes[3].y} stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1.5" />
        <line x1={nodes[0].x} y1={nodes[0].y} x2={nodes[2].x} y2={nodes[2].y} stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1.5" />
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="7" fill={n.color} className="node-pulse" style={{ transformOrigin: `${n.x}px ${n.y}px`, animationDelay: `${i * 0.5}s` }} />
        ))}
      </svg>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <div className="chip mx-auto bg-white/10 text-[#BDEBFF]">About VedAIT Labs</div>
          <h2 className="mt-7 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.1] tracking-[-0.01em] text-white sm:text-6xl">
            We engineer intelligence{" "}
            <span className="italic text-[#FF9FAE]">for the real world.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-white/70">
            VedAIT Labs is an applied AI startup — not a consultancy, not an
            agency. We build the intelligence layer for modern business.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
