import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { name: "Solutions", href: "/solutions" },
  { name: "Technology", href: "/technology" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7.5h2.52l.38-2.93h-2.9V8.7c0-.85.24-1.43 1.45-1.43h1.55V4.66c-.27-.04-1.19-.11-2.26-.11-2.24 0-3.77 1.37-3.77 3.87v2.15H8v2.93h2.47V21h3.03Z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.6 10.62 20.1 3h-1.54l-5.64 6.62L8.44 3H3.5l6.82 9.94L3.5 21h1.54l5.96-7L15.56 21h4.94l-6.9-10.38Zm-2.11 2.47-.69-1-5.5-7.87h2.37l4.44 6.35.69 1 5.77 8.25h-2.37l-4.71-6.73Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <Image
                src="/logo/logo-1.png"
                alt="VedAIT Labs"
                width={141}
                height={105}
                className="h-10 w-auto"
              />

              <span className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                VedAIT Labs
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">
              A technology startup exploring AI, software, cloud, and emerging
              technologies to build useful digital products and intelligent
              solutions.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center text-sm font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
            >
              Start a conversation

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  <span className="h-4 w-4">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Explore
            </p>

            <nav className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Contact
            </p>

            <div className="mt-5 space-y-5">
              {/* Location */}
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[var(--primary)]"
                />

                <div>
                  <p className="text-sm font-medium text-[var(--foreground)]">
                    New Baneshwor, Kathmandu
                  </p>

                  <p className="mt-1 text-xs text-[var(--muted)]">
                    Nepal
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:01-5234567"
                className="flex w-fit gap-3 transition-colors hover:text-[var(--primary)]"
              >
                <Phone
                  size={18}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[var(--primary)]"
                />

                <span className="text-sm">01-5234567</span>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@vedaitlabs.com"
                className="flex w-fit gap-3 transition-colors hover:text-[var(--primary)]"
              >
                <Mail
                  size={18}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[var(--primary)]"
                />

                <span className="text-sm">hello@vedaitlabs.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-5 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} VedAIT Labs. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}