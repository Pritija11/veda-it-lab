import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { researchArticles } from "@/data/research";

const categoryColor: Record<string, string> = {
  "Applied AI": "#BDEBFF",
  "Generative & Agentic AI": "#FFBBD8",
  "Data & Intelligence": "#BDF3D2",
  "Computer Vision & Document AI": "#FFD0B8",
  "AI Engineering & Deployment": "#FFF09A",
};

export default function ResearchPreview() {
  const [featured, ...rest] = researchArticles;

  return (
    <section className="bg-[#FFFDF8] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="chip bg-[#27233A] text-white">Insights</div>
              <h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#27233A] sm:text-5xl">
                Ideas shaping{" "}
                <span className="italic text-[#FF7187]">intelligent systems.</span>
              </h2>
            </div>
            <Link href="/research" className="inline-flex items-center gap-2 text-sm font-bold text-[#27233A] hover:text-[#FF7187]">
              Visit insights
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* Featured */}
          <Reveal>
            <Link
              href={`/research/${featured.slug}`}
              className="editorial-tilt card-shadow group flex h-full flex-col justify-between rounded-[1.75rem] p-9"
              style={{ backgroundColor: categoryColor[featured.category] }}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#27233A]/70">{featured.category}</span>
                <span className="font-[family-name:var(--font-fraunces)] text-5xl font-semibold text-[#27233A]/25">01</span>
              </div>
              <div className="mt-10">
                <h3 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold leading-tight text-[#27233A]">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#27233A]/75">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#27233A] transition-transform group-hover:translate-x-1">
                  Read more <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* List */}
          <div className="flex flex-col gap-3">
            {rest.map((article, i) => (
              <Reveal key={article.slug} delay={i * 80}>
                <Link
                  href={`/research/${article.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-[#E8E3ED] bg-white p-5 transition-colors hover:border-[#FF7187]/30"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-[#27233A]"
                    style={{ backgroundColor: categoryColor[article.category] }}
                  >
                    0{i + 2}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#27233A]">{article.title}</p>
                    <span className="text-xs text-[#9B95AA]">{article.category}</span>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-[#9B95AA] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FF7187]" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
