import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import {
  companyNavigation,
  legalNavigation,
  solutionNavigation,
} from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080D18]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">

          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="VedAIT Labs"
                width={150}
                height={40}
                className="h-20 w-auto"
              />

              <span className="text-xl font-semibold tracking-tight">
                <span className="text-slate-100">VedAIT</span>{" "}
                <span className="text-blue-400">Labs</span>
              </span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              VedAIT Labs is a technology startup building modern digital and
              infrastructure solutions, with a strong focus on cloud
              engineering, DevOps, automation, and security.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              <span
                aria-label="LinkedIn"
                title="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-semibold text-slate-400 transition-colors hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400"
              >
                in
              </span>

              <span
                aria-label="Facebook"
                title="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-semibold text-slate-400 transition-colors hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400"
              >
                f
              </span>

              <span
                aria-label="X"
                title="X"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-semibold text-slate-400 transition-colors hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400"
              >
                𝕏
              </span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Solutions
            </h3>

            <ul className="mt-5 space-y-3">
              {solutionNavigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyNavigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Contact
            </h3>

            <div className="mt-5 space-y-5">

              {/* Location */}
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Location
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Sankhamul, Kathmandu
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Phone
                  </p>
                  <a
                    href="tel:01-523456"
                    className="mt-1 block text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    01-523456
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Email
                  </p>
                  <a
                    href="mailto:hello@vedaitlabs.com"
                    className="mt-1 block break-all text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    hello@vedaitlabs.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} VedAIT Labs. All rights reserved.
          </p>

          <div className="flex gap-5">
            {legalNavigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-slate-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}