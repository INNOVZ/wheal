import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import practitioner from "@/assets/priya-profile.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Together We Heal" },
      { name: "description", content: "Meet Priya Singh, founder of Together We Heal — guiding holistic healing of mind, body, and soul." },
      { property: "og:title", content: "About — Together We Heal" },
      { property: "og:description", content: "Meet Priya Singh and our holistic healing approach." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Our Story" title="About" lead="A practice rooted in compassion, devoted to healing." />
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-12 grid md:grid-cols-2 gap-10 items-start">
        <img
          src={practitioner}
          alt="Priya Singh"
          width={1024}
          height={1280}
          loading="lazy"
          className="rounded-3xl object-cover w-full aspect-[4/5]"
        />
        <div className="space-y-5 text-foreground/80 text-lg leading-relaxed">
          <div className="font-mono text-[11px] text-foreground/55 mb-2">PRIYA SINGH · FOUNDER</div>
          <p>
            With years of experience in hypnosis and emotional wellness, Priya Singh founded
            Together We Heal to guide individuals toward holistic healing — mind, body, and soul.
          </p>
          <p>
            Through subconscious reprogramming, past life regression, and energy balancing,
            Priya helps clients release emotional blocks, overcome fears, and reconnect with
            their true selves.
          </p>
          <p>
            Every session is held in a confidential, compassionate space — combining modern
            psychology with ancient healing traditions.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
