import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: () => <Outlet />,
  notFoundComponent: () => (
    <main className="min-h-screen px-6 md:px-10 py-24">
      <div className="max-w-[900px] mx-auto">
        <h1 className="font-display text-5xl mb-4">Post not found</h1>
        <Link to="/blog" className="font-mono text-xs hover:underline">
          ← Back to blog
        </Link>
      </div>
    </main>
  ),
});
