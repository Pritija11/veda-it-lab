"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Solutions", href: "/solutions" },
  { name: "Technology", href: "/technology" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between rounded-full border border-[var(--border)] bg-[var(--background)]/95 px-4 py-2.5 shadow-sm backdrop-blur-md sm:px-5">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5"
          >
            <Image
              src="/logo/logo-1.png"
              alt="VedAIT Labs"
              width={141}
              height={105}
              priority
              className="h-9 w-auto"
            />

            <span className="text-lg font-bold tracking-tight text-[var(--foreground)]">
              VedAIT Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[var(--primary)]"
                      : "text-[var(--foreground)] hover:text-[var(--primary)]"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 w-1.5 rounded-full bg-[var(--primary)]" />
                  )}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/contact"
              className={`ml-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                pathname === "/contact"
                  ? "bg-[var(--foreground)] text-white"
                  : "bg-[var(--primary)] text-white hover:-translate-y-0.5"
              }`}
            >
              Let's talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-[var(--foreground)] transition-all duration-300 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2 h-px w-5 bg-[var(--foreground)] transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 top-4 h-px w-5 bg-[var(--foreground)] transition-all duration-300 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen
              ? "mt-4 max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-lg">
            <div className="flex flex-col">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`border-b border-[var(--border)] py-4 text-base font-medium transition-colors ${
                      isActive
                        ? "text-[var(--primary)]"
                        : "text-[var(--foreground)]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 rounded-full bg-[var(--primary)] px-5 py-3 text-center text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Let's talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}