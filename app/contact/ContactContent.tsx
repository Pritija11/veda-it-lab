"use client";

import { motion } from "motion/react";
import { FormEvent, useState } from "react";

import { MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const newErrors: Record<string, string> = {};

    if (!name) {
      newErrors.name = "Please enter your name.";
    }

    if (!email) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!message) {
      newErrors.message = "Please tell us a little about your idea.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      form.reset();
    }
  }

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-44 lg:px-10 lg:pb-24 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)] sm:text-sm">
              Contact
            </p>

            <h1 className="mt-6 max-w-5xl text-[clamp(3.2rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
              Let&apos;s build
              <br />
              something{" "}
              <span className="text-[var(--primary)]">meaningful.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              Have an idea, a problem worth solving, or a technology you want to
              explore? Tell us what you&apos;re thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Area */}
      <section className="border-t border-[var(--border)] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Start a conversation
            </p>

            <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
              Good ideas usually start with a conversation.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[var(--muted)] sm:text-base">
              Whether you are looking to build a digital product, explore an AI
              idea, or experiment with emerging technology, we&apos;d love to
              hear what you have in mind.
            </p>

            <div className="mt-10 border-t border-[var(--border)] pt-7">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">
                  <MapPin size={18} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    Visit
                  </p>

                  <p className="mt-2 text-base font-medium">
                    New Baneshwor, Kathmandu
                  </p>

                  <p className="mt-1 text-sm text-[var(--muted)]">Nepal</p>
                </div>
              </div>

              <div className="mt-7 flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">
                  <Phone size={18} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    Call
                  </p>

                  <a
                    href="tel:01-5234567"
                    className="mt-2 inline-block text-base font-medium transition-colors hover:text-[var(--primary)]"
                  >
                    01-5234567
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[1.5rem] bg-[var(--primary-soft)] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
                What we explore
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Digital Products",
                  "Software",
                  "Cloud",
                  "Emerging Technology",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-[var(--border)] bg-white p-6 sm:p-8 lg:p-10"
          >
            {submitted ? (
              <div className="flex min-h-[500px] flex-col justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-soft)] text-xl text-[var(--primary)]">
                  ✓
                </div>

                <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Message received.
                </h2>

                <p className="mt-4 max-w-md text-base leading-7 text-[var(--muted)]">
                  Thanks for reaching out. Your message has been received
                  successfully.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 w-fit rounded-full border border-[var(--border)] px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--foreground)]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    Tell us about it
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    What are you working on?
                  </h2>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className={`mt-2 w-full rounded-xl border bg-[var(--background)] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-[var(--primary)] ${
                          errors.name
                            ? "border-red-400"
                            : "border-[var(--border)]"
                        }`}
                      />

                      {errors.name && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className={`mt-2 w-full rounded-xl border bg-[var(--background)] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-[var(--primary)] ${
                          errors.email
                            ? "border-red-400"
                            : "border-[var(--border)]"
                        }`}
                      />

                      {errors.email && (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="mt-6">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                      <span className="ml-2 text-xs font-normal text-[var(--muted)]">
                        Optional
                      </span>
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company or organization"
                      className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-[var(--primary)]"
                    />
                  </div>

                  {/* Project */}
                  <div className="mt-6">
                    <label htmlFor="message" className="text-sm font-medium">
                      Tell us about your idea
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={7}
                      placeholder="What are you trying to build, explore, or solve?"
                      className={`mt-2 w-full resize-none rounded-xl border bg-[var(--background)] px-4 py-3.5 text-sm leading-6 outline-none transition-colors placeholder:text-black/30 focus:border-[var(--primary)] ${
                        errors.message
                          ? "border-red-400"
                          : "border-[var(--border)]"
                      }`}
                    />

                    {errors.message && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-xs leading-5 text-[var(--muted)]">
                      By submitting this form, you are starting a conversation
                      with VedAIT Labs.
                    </p>

                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary)] sm:w-auto"
                    >
                      Send message
                      <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl border-t border-[var(--border)] pt-12 sm:pt-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[var(--muted)]">
              New ideas are always worth exploring.
            </p>

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              VedAIT Labs
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
