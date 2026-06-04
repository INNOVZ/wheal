import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactCTA } from "@/components/ContactCTA";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import practitioner from "@/assets/priya-profile.png";
import serviceMind from "@/assets/service-mind.jpg";
import serviceRegression from "@/assets/service-regression.jpg";
import serviceEnergy from "@/assets/service-energy.jpg";
import { posts as blogPosts } from "@/data/blog-posts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Together We Heal — Hypnosis & Spiritual Healing" },
      {
        name: "description",
        content:
          "Heal, transform, and awaken the power within through hypnosis, inner child work, and energy healing with Priya Singh.",
      },
      {
        property: "og:title",
        content: "Together We Heal — Hypnosis & Spiritual Healing",
      },
      {
        property: "og:description",
        content: "Deep emotional and spiritual healing — mind, body, and soul.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1">
        <Hero />
        <Programs />
        <Author />
        <Testimonials />
        <Journal />
      </main>
      <ContactCTA />
      <SiteFooter />
    </div>
  );
}

const slides = [
  {
    num: "01",
    category: "harmony",
    eyebrow: "inner child",
    title: "FIND YOUR CALM",
    body: "Practices that release childhood wounds and bring lasting emotional peace.",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=2000&q=80",
    alt: "Woman with eyes closed in soft sunlight",
  },
  {
    num: "02",
    category: "vitality",
    eyebrow: "energy healing",
    title: "RESTORE YOUR POWER",
    body: "Chakra balancing and aura cleansing rituals that renew vitality from within.",
    image:
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=2000&q=80",
    alt: "Hands lifted in soft golden light",
  },
  {
    num: "03",
    category: "clarity",
    eyebrow: "regression",
    title: "AWAKEN THE WITHIN",
    body: "Past life and age regression sessions that reveal direction and lasting purpose.",
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=2000&q=80",
    alt: "Woman meditating outdoors at golden hour",
  },
  {
    num: "04",
    category: "freedom",
    eyebrow: "transformation",
    title: "BREAK THE PATTERN",
    body: "Subconscious reprogramming for habits, fears, weight, and relationships.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=80",
    alt: "Person stretching arms wide in nature",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.num}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <img
            src={s.image}
            alt={s.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/70" />
        </div>
      ))}

      {/* Header overlay */}
      <SiteHeader variant="overlay" />

      {/* Corner labels */}
      <div className="absolute top-24 left-6 md:left-10 font-mono text-[11px] text-white/85 z-10">
        {slides[index].num} / {slides[index].category}
      </div>
      <div className="absolute top-24 right-6 md:right-10 font-mono text-[11px] text-white/85 z-10">
        {slides[index].eyebrow}
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-10 left-6 right-6 md:bottom-14 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 z-10">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-7xl text-white leading-[0.95]">
            {slides[index].title}
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/85 leading-snug max-w-md">
            {slides[index].body}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Previous slide"
            onClick={() => go(-1)}
            className="h-10 w-10 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => go(1)}
            className="h-10 w-10 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-white" : "w-3 bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    tag: "inner work",
    title: "Hypnosis Therapy",
    serviceSlug: "hypnosis-therapy",
    description:
      "Subconscious healing that releases deep emotional blocks and reprograms limiting patterns.",
    image: serviceMind,
  },
  {
    tag: "inner work",
    title: "Inner Child Healing",
    serviceSlug: "inner-child-healing",
    description:
      "Heal childhood wounds and emotional triggers to feel safer and more whole within yourself.",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "energy",
    title: "Energy Healing",
    serviceSlug: "energy-healing",
    description:
      "Aura cleansing and vibrational work to clear blockages and restore inner harmony.",
    image: serviceEnergy,
  },
  {
    tag: "regression",
    title: "Past Life Regression",
    serviceSlug: "past-life-regression-therapy",
    description:
      "Access memories beyond this lifetime to dissolve recurring fears and karmic patterns.",
    image: serviceRegression,
  },
];

function Programs() {
  return (
    <section className="px-6 md:px-10 max-w-[1400px] mx-auto pt-24 md:pt-32">
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-display text-5xl md:text-6xl text-foreground">
          SERVICES
        </h2>
        <Link
          to="/services"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-foreground/40 px-4 py-2 font-mono text-xs hover:bg-foreground hover:text-background transition-colors"
        >
          More <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {services.map((p) => (
          <Link
            key={p.title}
            to="/services"
            search={{ service: p.serviceSlug }}
            className="group relative rounded-3xl overflow-hidden aspect-[40/20]"
          >
            <img
              src={p.image}
              alt={p.title}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <span className="absolute top-4 right-4 text-white font-mono text-[10px] uppercase tracking-wider">
              {p.tag}
            </span>
            <div className="absolute inset-0 p-5 pb-[5%] flex flex-col justify-end">
              <h3 className="font-display text-xl md:text-3xl text-white leading-[0.95]">
                {p.title.toUpperCase()}
              </h3>
              <p className="mt-2 text-sm text-white/85 max-w-xs leading-snug">
                {p.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex md:hidden justify-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/40 px-5 py-2.5 font-mono text-xs hover:bg-foreground hover:text-background transition-colors"
        >
          More <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      quote:
        "Priya's sessions changed my life. I released fears I didn't know I had.",
      name: "Sara M.",
      city: "Dubai",
    },
    {
      quote:
        "The past life regression helped me find closure after years of anxiety.",
      name: "Rohit K.",
      city: "Abu Dhabi",
    },
    {
      quote: "A space of true compassion. I feel reconnected to myself again.",
      name: "Aisha N.",
      city: "Sharjah",
    },
  ];
  return (
    <section className="px-6 md:px-10 max-w-[1400px] mx-auto pt-24 md:pt-32">
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-display text-5xl md:text-6xl text-foreground">
          TESTIMONIALS
        </h2>
        <Link
          to="/testimonials"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-foreground/40 px-4 py-2 font-mono text-xs hover:bg-foreground hover:text-background transition-colors"
        >
          More <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {quotes.map((q) => (
          <figure
            key={q.name}
            className="rounded-3xl bg-cream-deep p-6 md:p-7 flex flex-col"
          >
            <blockquote className="font-display text-xl md:text-2xl text-foreground leading-[1.05] flex-1">
              "{q.quote.toUpperCase()}"
            </blockquote>
            <figcaption className="mt-6 font-mono text-[11px] leading-tight">
              <span className="block text-foreground">
                {q.name.toUpperCase()}
              </span>
              <span className="block text-foreground/60">
                {q.city.toUpperCase()}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-6 flex md:hidden justify-center">
        <Link
          to="/testimonials"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/40 px-5 py-2.5 font-mono text-xs hover:bg-foreground hover:text-background transition-colors"
        >
          More <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}

function Author() {
  return (
    <section className="px-6 md:px-10 max-w-[1400px] mx-auto pt-24 md:pt-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="font-mono text-[11px] text-foreground/55 mb-6">
            AUTHOR
          </div>
          <h2 className="font-display text-6xl md:text-8xl text-foreground leading-[0.9]">
            PRIYA
            <br />
            SINGH
          </h2>
          <p className="mt-8 text-lg text-foreground/80 leading-relaxed max-w-md">
            With years of experience in hypnosis and emotional wellness, Priya
            founded Together We Heal to guide individuals toward holistic
            transformation — mind, body, and soul.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-mono text-xs hover:opacity-90"
          >
            Start today <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="relative">
          <img
            src={practitioner}
            alt="Priya Singh"
            className="rounded-3xl object-cover w-full aspect-square"
          />
        </div>
      </div>
    </section>
  );
}

function Journal() {
  const journal = blogPosts.slice(0, 3);
  return (
    <section className="px-6 md:px-10 max-w-[1400px] mx-auto pt-24 md:pt-32">
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-display text-5xl md:text-6xl text-foreground">
          BLOG
        </h2>
        <Link
          to="/blog"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-foreground/40 px-4 py-2 font-mono text-xs hover:bg-foreground hover:text-background transition-colors"
        >
          More <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {journal.map((j) => (
          <Link
            key={j.slug}
            to="/blog/$slug"
            params={{ slug: j.slug }}
            className="group rounded-2xl overflow-hidden bg-cream-deep block"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={j.image}
                alt={j.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="font-mono text-[10px] text-foreground/55 mb-1.5">
                {j.cat.toUpperCase()}
              </div>
              <h3 className="font-display text-lg md:text-xl text-foreground leading-[1]">
                {j.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex md:hidden justify-center">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/40 px-5 py-2.5 font-mono text-xs hover:bg-foreground hover:text-background transition-colors"
        >
          More <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
