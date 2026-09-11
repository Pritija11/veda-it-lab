import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react";

import { researchArticles } from "@/data/research";
import { createPageMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/Reveal";

type ResearchArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const categoryColor: Record<string, string> = {
  "Applied AI": "#BDEBFF",
  "Generative & Agentic AI": "#FFBBD8",
  "Data & Intelligence": "#BDF3D2",
  "Computer Vision & Document AI": "#FFD0B8",
  "AI Engineering & Deployment": "#FFF09A",
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

  const article = researchArticles.find((article) => article.slug === slug);

  if (!article) {
    return createPageMetadata(
      "Research Article",
      "Applied AI research and insights from VedAIT Labs, an applied AI startup.",
      `/research/${slug}`,
    );
  }

  return createPageMetadata(article.title, article.excerpt, `/research/${article.slug}`);
}

export default async function ResearchArticlePage({ params }: ResearchArticlePageProps) {
  const { slug } = await params;

  const article = researchArticles.find((article) => article.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#FFFDF8] px-6 pb-24 pt-40 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="chip mx-auto bg-[#27233A] text-white">Insights</div>
          <h1 className="mt-7 font-[family-name:var(--font-fraunces)] text-4xl font-semibold text-[#27233A]">
            Research article not found
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#706B80]">
            The research article you are looking for does not exist.
          </p>
          <Link
            href="/research"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#27233A] px-6 py-3.5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const accent = categoryColor[article.category] ?? "#BDEBFF";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF8] pb-16 pt-[150px] sm:pt-[168px]">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#706B80] transition-colors hover:text-[#FF7187]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>

          <Reveal className="mt-8">
            <span
              className="inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#27233A]"
              style={{ backgroundColor: accent }}
            >
              {article.category}
            </span>

            <h1 className="mt-7 max-w-4xl font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-tight tracking-[-0.01em] text-[#27233A] sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#706B80]">{article.excerpt}</p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#706B80]">
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#5BA7FF]" />
                VedAIT Labs Insights
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#5BA7FF]" />
                5 min read
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article */}
      <article className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <Reveal delay={0}>
            
            <section>
              <p className="text-lg leading-9 text-[#27233A]">
                Applied AI systems are only as good as the judgment behind
                them — knowing which problems actually need a model, which
                data is trustworthy enough to train on, and which parts of the
                system need to survive contact with real users.
              </p>

              <p className="mt-6 leading-8 text-[#706B80]">
                At VedAIT Labs, an applied AI startup, we build across five
                pillars — applied AI, generative and agentic systems, data
                intelligence, computer vision, and AI engineering — and this
                article shares a practical perspective from that work.
              </p>
            </section>
            </Reveal>

            {/* Key idea */}
            <Reveal delay={40}>
            
            <section className="rounded-2xl border border-[#E8E3ED] bg-[#FFFDF8] p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#FF7187]">
                Key perspective
              </span>

              <h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#27233A]">
                {article.title}
              </h2>

              <p className="mt-4 leading-8 text-[#706B80]">{article.excerpt}</p>
            </section>
            </Reveal>

            {/* Section 1 */}
            <Reveal delay={80}>
            
            <section>
              <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#27233A] sm:text-3xl">
                Where teams usually get it wrong
              </h2>
              <p className="mt-5 leading-8 text-[#706B80]">
                Most AI projects don&apos;t fail because the model is bad —
                they fail because the surrounding system was never designed
                for production. The data pipeline breaks silently, nobody
                notices the model has drifted, or the feature was built
                around a demo dataset that looks nothing like real traffic.
              </p>
              <p className="mt-5 leading-8 text-[#706B80]">
                Closing that gap means treating the model as one part of a
                larger system — one that needs monitoring, versioning, and a
                plan for what happens when the world changes underneath it.
              </p>
            </section>
            </Reveal>

            {/* Section 2 */}
            <Reveal delay={120}>
            
            <section>
              <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#27233A] sm:text-3xl">
                What actually matters
              </h2>
              <p className="mt-5 leading-8 text-[#706B80]">
                Choosing an AI approach shouldn&apos;t start with the newest
                model release. It should start with the problem, the data
                that exists today, and what &quot;good enough&quot; actually
                looks like for the people using the system.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Data quality", description: "A model trained on inconsistent data will fail in inconsistent ways." },
                  { title: "Reliability", description: "The system should behave predictably even as inputs and load change." },
                  { title: "Monitoring", description: "Drift and failure should be visible long before a user reports them." },
                  { title: "Judgment", description: "Sometimes the right answer is better software, not a model at all." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-[#E8E3ED] bg-[#FFFDF8] p-6">
                    <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-[#27233A]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#706B80]">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
            </Reveal>

            {/* Section 3 */}
            <Reveal delay={160}>
            
            <section>
              <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#27233A] sm:text-3xl">
                A practical approach
              </h2>
              <p className="mt-5 leading-8 text-[#706B80]">
                A useful starting point is to understand the problem before
                touching a model. From there, teams can evaluate what
                actually needs AI, build around real data, and keep
                improving once the system is live.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Understand the problem and the data that already exists.",
                  "Decide honestly whether AI is the right tool for it.",
                  "Build the pipeline before the model — not after.",
                  "Ship with monitoring, not just an evaluation notebook.",
                  "Plan for retraining as data and requirements shift.",
                ].map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-xl border border-[#E8E3ED] bg-[#FFFDF8] p-5">
                    <span className="text-sm font-semibold text-[#FF7187]">0{index + 1}</span>
                    <p className="text-sm leading-7 text-[#706B80]">{step}</p>
                  </div>
                ))}
              </div>
            </section>
            </Reveal>

            {/* Conclusion */}
            <Reveal delay={200}>
            
            <section className="border-t border-[#E8E3ED] pt-12">
              <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#27233A] sm:text-3xl">
                Looking ahead
              </h2>
              <p className="mt-5 leading-8 text-[#706B80]">
                As applied AI matures, the winners won&apos;t be the teams
                that ship the flashiest demo — they&apos;ll be the ones whose
                systems are still reliable a year later.
              </p>
              <p className="mt-5 leading-8 text-[#706B80]">
                That&apos;s the perspective we build from at VedAIT Labs, and
                the standard we hold our own work to.
              </p>
            </section>
            </Reveal>
          </div>

          {/* Back */}
          <div className="mt-16 border-t border-[#E8E3ED] pt-8">
            <Link
              href="/research"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#27233A] transition-colors hover:text-[#FF7187]"
            >
              <ArrowLeft className="h-4 w-4" />
              View all insights
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
