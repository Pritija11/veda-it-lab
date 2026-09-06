import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Cloud Engineering",
    description:
      "Design and build reliable cloud infrastructure that is secure, scalable, and ready for growth.",
    href: "/solutions/cloud-engineering",
    featured: true,
  },
  {
    number: "02",
    title: "DevOps & Automation",
    description:
      "Automate development and deployment workflows to make software delivery faster and more reliable.",
    href: "/solutions/devops-automation",
    featured: true,
  },
  {
    number: "03",
    title: "Infrastructure Security",
    description:
      "Strengthen infrastructure with practical security strategies, controls, and monitoring.",
    href: "/solutions/infrastructure-security",
    featured: false,
  },
  {
    number: "04",
    title: "Software Engineering",
    description:
      "Build modern software systems designed around real business requirements and long-term maintainability.",
    href: "/solutions/software-engineering",
    featured: false,
  },
  {
    number: "05",
    title: "Data & AI",
    description:
      "Explore data-driven solutions and practical AI capabilities that support better products and decisions.",
    href: "/solutions/data-ai",
    featured: false,
  },
  {
    number: "06",
    title: "IT Consulting",
    description:
      "Get technical direction and practical guidance for building, improving, and scaling digital systems.",
    href: "/solutions/it-consulting",
    featured: false,
  },
];

export default function SolutionsOverview() {
  return (
    <section className="border-t border-white/10 bg-[#0D1422] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            What we build
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Technology solutions built for{" "}
            <span className="text-blue-400">real-world systems.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            From cloud infrastructure and automation to software and data,
            VedAIT Labs helps organizations turn technical challenges into
            reliable digital systems.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link
              key={solution.href}
              href={solution.href}
              className={`group relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                solution.featured
                  ? "border-blue-400/20 bg-blue-500/[0.045] hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/[0.07]"
                  : "border-white/10 bg-[#101827] hover:-translate-y-1 hover:border-white/20 hover:bg-[#131d2e]"
              }`}
            >
              {/* Decorative glow */}
              <div
                aria-hidden="true"
                className={`absolute -right-16 -top-16 h-32 w-32 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${
                  solution.featured
                    ? "bg-blue-500/15 opacity-60"
                    : "bg-blue-500/10 opacity-0"
                }`}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-widest text-slate-600">
                    {solution.number}
                  </span>

                  {solution.featured && (
                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-blue-300">
                      Core
                    </span>
                  )}
                </div>

                <h3 className="mt-12 text-xl font-semibold tracking-tight text-slate-100">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {solution.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500 transition-colors duration-200 group-hover:text-blue-400">
                  Explore solution
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-500 transition-all duration-200 group-hover:border-blue-400/30 group-hover:bg-blue-500/10 group-hover:text-blue-400">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}