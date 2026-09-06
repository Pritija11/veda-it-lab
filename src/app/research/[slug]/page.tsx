import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react";

import { researchArticles } from "@/data/research";
import { createPageMetadata } from "@/lib/seo";

type ResearchArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return researchArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ResearchArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = researchArticles.find(
    (article) => article.slug === slug,
  );

  if (!article) {
    return createPageMetadata(
      "Research Article",
      "Technology research and insights from VedAIT Labs.",
      `/research/${slug}`,
    );
  }

  return createPageMetadata(
    article.title,
    article.excerpt,
    `/research/${article.slug}`,
  );
}

export default async function ResearchArticlePage({
  params,
}: ResearchArticlePageProps) {
  const { slug } = await params;

  const article = researchArticles.find(
    (article) => article.slug === slug,
  );

  if (!article) {
    return (
      <main className="min-h-screen bg-[#070B14] px-6 pb-24 pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
            Research
          </span>

          <h1 className="mt-5 text-4xl font-semibold text-slate-100">
            Research article not found
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            The research article you are looking for does not exist.
          </p>

          <Link
            href="/research"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Research
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#070B14] pt-[76px]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(59,130,246,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Research
          </Link>

          <div className="mt-10">
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              {article.category}
            </span>

            <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              {article.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-400" />
                VedAIT Labs Research
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-400" />
                5 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12">

            {/* Introduction */}
            <section>
              <p className="text-lg leading-9 text-slate-300">
                Technology systems are continuously changing as organizations
                adopt new infrastructure, development practices, and digital
                capabilities. Understanding these changes helps technology
                teams make better decisions and build systems that can evolve
                over time.
              </p>

              <p className="mt-6 leading-8 text-slate-400">
                At VedAIT Labs, we explore practical technology trends and
                engineering approaches to understand how they can be applied
                to real-world systems. This article presents a simplified
                perspective on the topic and highlights areas worth exploring
                further.
              </p>
            </section>

            {/* Key idea */}
            <section className="rounded-2xl border border-white/10 bg-[#0D1422] p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                Key perspective
              </span>

              <h2 className="mt-4 text-2xl font-semibold text-slate-100">
                Technology should solve real problems.
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                New technologies are most valuable when they improve
                reliability, scalability, security, efficiency, or the overall
                experience of the people using a system.
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                Understanding the technology landscape
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Modern software systems increasingly depend on cloud
                infrastructure, automated workflows, distributed services,
                observability, and secure engineering practices. These
                components work together rather than operating as isolated
                technologies.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                This shift means that engineering teams need to consider the
                entire system lifecycle, from architecture and development to
                deployment, monitoring, security, and continuous improvement.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                Why it matters
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Choosing a technology approach should not simply be about using
                the newest tools. The right approach depends on requirements,
                system complexity, available resources, security needs, and
                long-term goals.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Scalability",
                    description:
                      "Systems should be able to handle changing workloads without unnecessary complexity.",
                  },
                  {
                    title: "Reliability",
                    description:
                      "Infrastructure and applications should remain dependable as systems evolve.",
                  },
                  {
                    title: "Security",
                    description:
                      "Security should be considered throughout the system lifecycle.",
                  },
                  {
                    title: "Automation",
                    description:
                      "Automation can reduce repetitive work and improve consistency.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-[#101827] p-6"
                  >
                    <h3 className="text-lg font-semibold text-slate-100">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                A practical approach
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                A useful starting point is to understand the problem before
                selecting a technology. Teams can then evaluate possible
                approaches, build an appropriate solution, observe how it
                performs, and improve it over time.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Understand the requirements and constraints.",
                  "Evaluate technologies based on the actual problem.",
                  "Design an architecture that can evolve.",
                  "Automate repetitive operational processes.",
                  "Monitor the system and continuously improve it.",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-xl border border-white/10 bg-[#0D1422] p-5"
                  >
                    <span className="text-sm font-semibold text-blue-400">
                      0{index + 1}
                    </span>

                    <p className="text-sm leading-7 text-slate-400">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="border-t border-white/10 pt-12">
              <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                Looking ahead
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                As technology continues to evolve, engineering decisions will
                increasingly need to balance innovation with reliability,
                security, maintainability, and business requirements.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Continued research and experimentation can help technology
                teams understand these changes and identify approaches that
                provide meaningful value in real-world environments.
              </p>
            </section>

          </div>

          {/* Back */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <Link
              href="/research"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              <ArrowLeft className="h-4 w-4" />
              View all research
              <ArrowRight className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}