import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { posts } from "@/data/blog-posts";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    return {
      meta: [
        {
          title: post
            ? `${post.title} — Together We Heal`
            : "Post — Together We Heal",
        },
        {
          name: "description",
          content: post?.excerpt ?? "Reflections on healing.",
        },
        { property: "og:title", content: post?.title ?? "Together We Heal" },
        { property: "og:description", content: post?.excerpt ?? "" },
        ...(post?.image ? [{ property: "og:image", content: post.image }] : []),
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <PageShell>
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto py-24">
        <h1 className="font-display text-5xl mb-4">POST NOT FOUND</h1>
        <Link to="/blog" className="font-mono text-xs hover:underline">
          ← Back to blog
        </Link>
      </div>
    </PageShell>
  ),
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
});

function BlogPostPage() {
  const { post } = Route.useLoaderData() as { post: (typeof posts)[number] };
  return (
    <PageShell>
      <article className="px-6 md:px-10 max-w-[900px] mx-auto pt-12 pb-20">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-mono text-[11px] text-foreground/60 hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> BACK TO BLOG
        </Link>
        <div className="font-mono text-[11px] text-foreground/55 mb-4">
          {post.cat.toUpperCase()}
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-foreground leading-[0.95] mb-8">
          {post.title}
        </h1>
        <div className="aspect-[16/9] overflow-hidden rounded-3xl mb-10">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="prose prose-lg max-w-none text-foreground/85 leading-relaxed space-y-5">
          {post.body.map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
