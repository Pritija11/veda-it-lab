"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) return;

    const timer = setTimeout(() => {
      setSubmitted(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#101827] p-6 sm:p-8 lg:p-10">
      <div>
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
          Enquiry
        </span>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
          Tell us about your project
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          Share a few details about what you need help with.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-white/10 bg-[#0D1422] px-4 py-3.5 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-[#0D1422] px-4 py-3.5 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10"
          />
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Service
          </label>

          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="w-full appearance-none rounded-xl border border-white/10 bg-[#0D1422] px-4 py-3.5 text-sm text-slate-300 outline-none transition-all focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10"
          >
            <option value="" disabled>
              Select a service
            </option>

            <option value="cloud-engineering">Cloud Engineering</option>
            <option value="devops-automation">DevOps & Automation</option>
            <option value="infrastructure-security">
              Infrastructure Security
            </option>
            <option value="software-engineering">
              Software Engineering
            </option>
            <option value="data-ai">Data & AI</option>
            <option value="it-consulting">IT Consulting</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell us a little about your project or challenge..."
            className="w-full resize-none rounded-xl border border-white/10 bg-[#0D1422] px-4 py-3.5 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
        >
          Submit Enquiry
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Success Message */}
        {submitted && (
          <div className="rounded-xl border border-blue-400/20 bg-blue-500/10 px-5 py-4">
            <p className="text-sm font-semibold text-blue-400">
              Enquiry submitted successfully.
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              Thank you for reaching out. Our team will get back to you soon.
            </p>
          </div>
        )}

        <p className="text-center text-xs text-slate-600">
          We’ll review your enquiry and get back to you soon.
        </p>
      </form>
    </div>
  );
}