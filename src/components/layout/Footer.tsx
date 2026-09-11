import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import {
  companyNavigation,
  legalNavigation,
  solutionNavigation,
} from "@/data/navigation";

const nodes = [
  { x: 40, y: 30, color: "#FF7187" },
  { x: 110, y: 15, color: "#5BA7FF" },
  { x: 160, y: 45, color: "#FF9FAE" },
  { x: 90, y: 60, color: "#5BA7FF" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#27233A] text-white">
      {/* Small AI node network */}
      <svg viewBox="0 0 200 80" className="pointer-events-none absolute right-6 top-6 h-16 w-40 opacity-70 sm:right-12 sm:top-10" aria-hidden>
        <line x1={nodes[0].x} y1={nodes[0].y} x2={nodes[1].x} y2={nodes[1].y} stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.2" />
        <line x1={nodes[1].x} y1={nodes[1].y} x2={nodes[2].x} y2={nodes[2].y} stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.2" />
        <line x1={nodes[0].x} y1={nodes[0].y} x2={nodes[3].x} y2={nodes[3].y} stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.2" />
        <line x1={nodes[3].x} y1={nodes[3].y} x2={nodes[2].x} y2={nodes[2].y} stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.2" />
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="4" fill={n.color} className="node-pulse" style={{ transformOrigin: `${n.x}px ${n.y}px`, animationDelay: `${i * 0.5}s` }} />
        ))}
        <circle r="2.5" fill="#FFF09A">
          <animateMotion dur="3s" repeatCount="indefinite" path={`M${nodes[0].x},${nodes[0].y} L${nodes[1].x},${nodes[1].y} L${nodes[2].x},${nodes[2].y}`} />
        </circle>
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 lg:px-8">
        <h2 className="max-w-2xl font-[family-name:var(--font-fraunces)] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Intelligence, <span className="italic text-[#FF9FAE]">engineered for reality.</span>
        </h2>

        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo-mark-light.png"
                alt="VedAIT Labs"
                width={40}
                height={40}
                className="h-9 w-9"
              />

              <span className="font-[family-name:var(--font-fraunces)] text-xl font-semibold tracking-tight text-white">
                VedAIT <span className="italic text-[#FF9FAE]">Labs</span>
              </span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Applied AI &amp; Intelligent Systems. VedAIT Labs builds machine
              learning, generative and agentic AI, data intelligence, computer
              vision, and production AI systems for growing teams.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              <span
                aria-label="LinkedIn"
                title="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-sm font-semibold text-white/70 transition-colors hover:border-[#FF7187]/50 hover:text-[#FF9FAE]"
              >
                in
              </span>
              <span
                aria-label="Facebook"
                title="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-sm font-semibold text-white/70 transition-colors hover:border-[#FF7187]/50 hover:text-[#FF9FAE]"
              >
                f
              </span>
              <span
                aria-label="X"
                title="X"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-sm font-semibold text-white/70 transition-colors hover:border-[#FF7187]/50 hover:text-[#FF9FAE]"
              >
                𝕏
              </span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Solutions
            </h3>
            <ul className="mt-5 space-y-3">
              {solutionNavigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-[#FF9FAE]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {companyNavigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-[#FF9FAE]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <div className="mt-5 space-y-5">
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#5BA7FF]/30 bg-[#5BA7FF]/10">
                  <MapPin className="h-4 w-4 text-[#5BA7FF]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/40">Location</p>
                  <p className="mt-1 text-sm leading-6 text-white/70">Sankhamul, Kathmandu</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#5BA7FF]/30 bg-[#5BA7FF]/10">
                  <Phone className="h-4 w-4 text-[#5BA7FF]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/40">Phone</p>
                  <a href="tel:01-523456" className="mt-1 block text-sm text-white/70 transition-colors hover:text-[#FF9FAE]">
                    01-523456
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#5BA7FF]/30 bg-[#5BA7FF]/10">
                  <Mail className="h-4 w-4 text-[#5BA7FF]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/40">Email</p>
                  <a href="mailto:hello@vedaitlabs.com" className="mt-1 block break-all text-sm text-white/70 transition-colors hover:text-[#FF9FAE]">
                    hello@vedaitlabs.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative mt-14 flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VedAIT Labs. All rights reserved.</p>
          <div className="flex gap-5">
            {legalNavigation.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
