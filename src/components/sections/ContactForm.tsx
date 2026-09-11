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

    e.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <div className="card-shadow rounded-[1.75rem] border border-[#E8E3ED] bg-white p-6 sm:p-8 lg:p-10">
      <div>
        <div className="chip bg-[#BDEBFF] text-[#27233A]">Enquiry</div>

        <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-2xl font-semibold tracking-[-0.01em] text-[#27233A] sm:text-3xl">
          Tell us about your project
        </h2>

        <p className="mt-3 text-sm leading-7 text-[#706B80]">
          Share a few details about what you&apos;re building.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#27233A]">
            Name <span className="text-[#FF3B30]">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-[#E8E3ED] bg-[#FFFDF8] px-4 py-3.5 text-sm text-[#27233A] outline-none transition-all placeholder:text-[#9B95AA] focus:border-[#FF7187]/50 focus:ring-2 focus:ring-[#FF7187]/10"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#27233A]">
            Email <span className="text-[#FF3B30]">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-[#E8E3ED] bg-[#FFFDF8] px-4 py-3.5 text-sm text-[#27233A] outline-none transition-all placeholder:text-[#9B95AA] focus:border-[#FF7187]/50 focus:ring-2 focus:ring-[#FF7187]/10"
          />
        </div>

        {/* Solution */}
        <div>
          <label htmlFor="solution" className="mb-2 block text-sm font-medium text-[#27233A]">
            Solution <span className="text-[#FF3B30]">*</span>
          </label>

          <select
            id="solution"
            name="solution"
            required
            defaultValue=""
            className="w-full appearance-none rounded-xl border border-[#E8E3ED] bg-[#FFFDF8] px-4 py-3.5 text-sm text-[#27233A] outline-none transition-all focus:border-[#FF7187]/50 focus:ring-2 focus:ring-[#FF7187]/10"
          >
            <option value="" disabled>
              Select a solution
            </option>

            <option value="applied-ai">Applied AI &amp; Machine Learning</option>
            <option value="generative-agentic-ai">Generative &amp; Agentic AI</option>
            <option value="data-intelligence">Data &amp; Intelligence</option>
            <option value="computer-vision-document-ai">Computer Vision &amp; Document AI</option>
            <option value="ai-engineering-deployment">AI Engineering &amp; Deployment</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#27233A]">
            Message <span className="text-[#FF3B30]">*</span>
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell us a little about your project or challenge..."
            className="w-full resize-none rounded-xl border border-[#E8E3ED] bg-[#FFFDF8] px-4 py-3.5 text-sm text-[#27233A] outline-none transition-all placeholder:text-[#9B95AA] focus:border-[#FF7187]/50 focus:ring-2 focus:ring-[#FF7187]/10"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#27233A] px-6 py-3.5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          Submit Enquiry
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Success Message */}
        {submitted && (
          <div className="rounded-xl border border-[#BDF3D2] bg-[#BDF3D2]/40 px-5 py-4">
            <p className="text-sm font-semibold text-[#27233A]">
              Enquiry submitted successfully.
            </p>

            <p className="mt-1 text-sm leading-6 text-[#27233A]/70">
              Thank you for reaching out. Our team will get back to you soon.
            </p>
          </div>
        )}

        <p className="text-center text-xs text-[#9B95AA]">
          We&apos;ll review your enquiry and get back to you soon.
        </p>
      </form>
    </div>
  );
}
