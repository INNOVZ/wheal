import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import {
  posts,
  serviceTagToCategory,
  type BlogCategory,
} from "@/data/blog-posts";

type BlogSearch = { tag?: string };

const categories: BlogCategory[] = [
  "Inner Work",
  "Energy",
  "Regression",
  "Transformation",
];

export const Route = createFileRoute("/blog/")({
  validateSearch: (search: Record<string, unknown>): BlogSearch => ({
    tag: typeof search.tag === "string" ? search.tag : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Blog — Together We Heal" },
      {
        name: "description",
        content:
          "Reflections, practices, and guidance on hypnosis, inner child work, and energy healing.",
      },
      { property: "og:title", content: "Blog — Together We Heal" },
      {
        property: "og:description",
        content: "Reflections and practices for spiritual healing.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { tag } = Route.useSearch();
  // The "tag" can be either a service tag (Core/Depth/Change/Energy) or a category name.
  const activeCategory: BlogCategory | null = tag
    ? (serviceTagToCategory[tag] ??
      (categories.includes(tag as BlogCategory) ? (tag as BlogCategory) : null))
    : null;

  const visiblePosts = activeCategory
    ? posts.filter((p) => p.cat === activeCategory)
    : posts;

  return (
    <PageShell>
      <PageHeader
        eyebrow="Reflections"
        title="Blog"
        lead={
          activeCategory
            ? `Reading list filtered for ${activeCategory.toLowerCase()}.`
            : "Practices, reflections, and guidance from the healing journey."
        }
      />

      {/* Category filter */}
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto pb-8 flex flex-wrap gap-2">
        <Link
          to="/blog"
          className={`rounded-full border px-4 py-2 font-mono text-[11px] transition-colors ${
            !activeCategory
              ? "bg-foreground text-background border-foreground"
              : "border-foreground/30 text-foreground/70 hover:bg-foreground hover:text-background"
          }`}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c}
            to="/blog"
            search={{ tag: c }}
            className={`rounded-full border px-4 py-2 font-mono text-[11px] transition-colors ${
              activeCategory === c
                ? "bg-foreground text-background border-foreground"
                : "border-foreground/30 text-foreground/70 hover:bg-foreground hover:text-background"
            }`}
          >
            {c}
          </Link>
        ))}
      </div>

      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-16 grid md:grid-cols-2 gap-5">
        {visiblePosts.map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="group rounded-3xl overflow-hidden bg-cream-deep block"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="font-mono text-[11px] text-foreground/55 mb-3">
                {p.cat.toUpperCase()}
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground leading-[0.95]">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                {p.excerpt}
              </p>
              <span className="mt-4 inline-block font-mono text-[11px] text-foreground/70 group-hover:text-foreground">
                READ MORE →
              </span>
            </div>
          </Link>
        ))}
      </section>
    </PageShell>
  );
}
