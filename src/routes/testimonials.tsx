import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Together We Heal" },
      {
        name: "description",
        content:
          "Hear from those who have experienced healing and transformation with Priya Singh.",
      },
      { property: "og:title", content: "Testimonials — Together We Heal" },
      {
        property: "og:description",
        content: "Stories of transformation from our clients.",
      },
    ],
  }),
  component: TestimonialsPage,
});

const quotes = [
  {
    initial: "S",
    quote:
      "Priya's sessions changed my life. I released fears I didn't even know I had.",
    name: "Sara M.",
    city: "Dubai",
  },
  {
    initial: "R",
    quote:
      "The past life regression helped me find closure and peace after years of anxiety.",
    name: "Rohit K.",
    city: "Abu Dhabi",
  },
  {
    initial: "A",
    quote:
      "A space of true compassion. I feel reconnected to myself in a way I haven't in years.",
    name: "Aisha N.",
    city: "Sharjah",
  },
  {
    initial: "M",
    quote:
      "The inner child work was profound. I cannot recommend Priya enough.",
    name: "Maya T.",
    city: "Dubai",
  },
];

function TestimonialsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Client Stories"
        title="Testimonials"
        lead="Hear from those who have experienced transformation."
      />
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-12 grid md:grid-cols-2 gap-5">
        {quotes.map((q) => (
          <figure
            key={q.name}
            className="rounded-3xl bg-cream-deep p-8 md:p-10"
          >
            <blockquote className="font-display text-3xl md:text-4xl text-foreground leading-[0.98]">
              "{q.quote.toUpperCase()}"
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <span className="h-11 w-11 rounded-full bg-foreground text-background font-mono text-sm flex items-center justify-center">
                {q.initial}
              </span>
              <span className="font-mono text-[11px] leading-tight">
                <span className="block text-foreground">
                  {q.name.toUpperCase()}
                </span>
                <span className="block text-foreground/60">
                  {q.city.toUpperCase()}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </section>
    </PageShell>
  );
}
