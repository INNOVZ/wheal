import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

type ServicesSearch = { service?: string };

export const Route = createFileRoute("/services")({
  validateSearch: (search: Record<string, unknown>): ServicesSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Services — Together We Heal" },
      { name: "description", content: "Hypnosis, regression therapy, behavioral transformation, and energy healing services." },
      { property: "og:title", content: "Services — Together We Heal" },
      { property: "og:description", content: "Comprehensive healing services for mind, body, and soul." },
    ],
  }),
  component: ServicesPage,
});

type Section = { heading: string; bullets?: string[]; body?: string };

type Service = {
  num: string;
  slug?: string;
  title: string;
  subtitle?: string;
  intro: string;
  sections: Section[];
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const groups: Service[] = [
  {
    num: "01",
    title: "Hypnosis Therapy",
    subtitle: "Subconscious Healing",
    intro: "This is one of the core services, designed to work directly with the subconscious mind.",
    sections: [
      {
        heading: "What it does",
        bullets: [
          "Identifies and releases deep-rooted emotional blocks",
          "Reprograms limiting beliefs and patterns",
          "Helps with anxiety, fears, trauma, and emotional overwhelm",
        ],
      },
      {
        heading: "How it helps clients",
        body: "Instead of just talking about problems, hypnosis works at the root cause level—where habits, fears, phobias and emotional responses are actually formed—creating faster and deeper transformation.",
      },
    ],
  },
  {
    num: "02",
    title: "Emotional & Mental Wellness Coaching",
    intro: "A guided, supportive process to help individuals navigate life challenges.",
    sections: [
      {
        heading: "Focus areas",
        bullets: [
          "Anxiety and stress management",
          "Relationship challenges",
          "Emotional healing and self-awareness",
          "Life direction and clarity",
        ],
      },
      {
        heading: "How it helps",
        body: "Clients receive structured guidance, tools, and mindset shifts to move from confusion or emotional heaviness to clarity, stability, and confidence.",
      },
    ],
  },
  {
    num: "03",
    title: "Energy Healing",
    subtitle: "Aura & Vibrational Work",
    intro: "This service focuses on clearing and balancing energetic blockages.",
    sections: [
      {
        heading: "What it includes",
        bullets: [
          "Aura cleansing and healing",
          "Identifying energetic imbalances",
          "Letting go of stuck energy to restore inner harmony",
        ],
      },
      {
        heading: "Benefits",
        bullets: [
          "Improved emotional balance",
          "Increased clarity and lightness",
          "Better alignment in life and relationships",
        ],
      },
      {
        heading: "",
        body: "This is often experienced as a deep reset for both mind and body.",
      },
    ],
  },
  {
    num: "04",
    title: "Inner Child Healing",
    intro: "A specialized emotional healing approach.",
    sections: [
      {
        heading: "What it works on",
        bullets: [
          "Childhood wounds and unresolved emotions",
          "Patterns of abandonment, rejection, or fear",
          "Emotional triggers in adult relationships",
        ],
      },
      {
        heading: "Outcome",
        body: "Clients begin to feel safer within themselves, improving self-worth, relationships, and emotional stability.",
      },
    ],
  },
  {
    num: "05",
    title: "Relationship Healing & Guidance",
    intro: "Focused support for love, attachment patterns, and emotional connections.",
    sections: [
      {
        heading: "Covers",
        bullets: [
          "Breakups and emotional closure",
          "Relationship confusion or stagnation",
          "Reconciliation guidance",
          "Understanding partner dynamics",
        ],
      },
      {
        heading: "Goal",
        body: "To help clients move from emotional dependency or confusion into clarity, empowerment, and healthier relationship patterns.",
      },
    ],
  },
  {
    num: "06",
    title: "Tarot Guidance & Intuitive Readings",
    intro: "A spiritual tool used for clarity and direction.",
    sections: [
      {
        heading: "What clients get",
        bullets: [
          "Insight into past, present and future situations",
          "Guidance on love, career, health and decisions",
          "Understanding of emotional and energetic patterns",
        ],
      },
      {
        heading: "Positioning",
        body: "This is not just prediction-based—it's used as a reflective tool to guide decisions and awareness.",
      },
    ],
  },
  {
    num: "07",
    title: "Lifestyle & Personal Growth Coaching",
    intro: "A holistic approach to becoming aligned in all areas of life.",
    sections: [
      {
        heading: "Focus",
        bullets: [
          "Confidence and self-image",
          "Life purpose and direction",
          "Daily routine alignment",
        ],
      },
      {
        heading: "Result",
        body: "Clients move toward a more intentional, balanced, and fulfilling lifestyle.",
      },
    ],
  },
  {
    num: "08",
    title: "Workshops & Group Healing Experiences",
    intro: "Interactive sessions designed for collective healing.",
    sections: [
      {
        heading: "Examples",
        bullets: [
          "Aura healing workshops",
          "Emotional release sessions",
          "Awareness and mindset sessions",
        ],
      },
      {
        heading: "Value",
        body: "Creates a safe space for shared healing, learning, and community support.",
      },
    ],
  },
  {
    num: "09",
    title: "Mother's Womb Healing Experience",
    intro: "A deeply immersive healing session that takes clients back to their earliest emotional imprint — the time in the mother's womb.",
    sections: [
      {
        heading: "What it works on",
        bullets: [
          "Prenatal emotional imprints (fear, rejection, stress)",
          "Mother-child energetic connection",
          "Feelings of safety, belonging, and acceptance",
        ],
      },
      {
        heading: "How it helps",
        body: "Many emotional patterns begin even before birth. This session helps clients release subconscious imprints absorbed during pregnancy and rebuild a sense of inner safety, nurturing, and emotional grounding.",
      },
    ],
  },
  {
    num: "10",
    title: "Past Life Regression Therapy",
    intro: "A guided hypnotic process that allows clients to access memories beyond their current lifetime.",
    sections: [
      {
        heading: "What it explores",
        bullets: [
          "Unexplained fears, phobias and recurring life patterns",
          "Deep emotional blocks with no clear present-life origin",
          "Karmic connections and relationship patterns",
        ],
      },
      {
        heading: "Outcome",
        body: "By understanding and resolving experiences from past lifetimes, clients often feel a sense of closure, clarity, and emotional release that shifts their present reality.",
      },
    ],
  },
  {
    num: "11",
    title: "Connecting to the Higher Self",
    intro: "A powerful inner alignment session focused on accessing one's highest wisdom and intuitive guidance.",
    sections: [
      {
        heading: "What it does",
        bullets: [
          "Strengthens intuition and inner clarity",
          "Connects clients to their purpose and direction",
          "Helps in decision-making from a grounded, aware state",
        ],
      },
      {
        heading: "Result",
        body: "Clients move from confusion or external dependency to inner trust, alignment, and a deeper sense of purpose.",
      },
    ],
  },
  {
    num: "12",
    title: "Foundation Metaphor Therapy",
    intro: "A unique subconscious technique using guided visualization to understand and rebuild one's internal \"foundation.\"",
    sections: [
      {
        heading: "What it uncovers",
        bullets: [
          "Core belief systems about self, life, and stability",
          "Emotional \"cracks\" formed through past experiences",
          "Hidden fears related to security, worth, and control",
        ],
      },
      {
        heading: "How it helps",
        body: "By reconstructing the internal foundation, clients experience stronger emotional resilience, self-worth, and stability in all areas of life.",
      },
    ],
  },
  {
    num: "13",
    title: "Aura Scanning & Analysis",
    intro: "An intuitive assessment of a client's energetic field to understand their current emotional and energetic state.",
    sections: [
      {
        heading: "What it reveals",
        bullets: [
          "Energy blockages and imbalances",
          "Emotional patterns and stress points",
          "Areas of strength and alignment",
        ],
      },
      {
        heading: "Benefits",
        bullets: [
          "Greater self-awareness",
          "Clarity on what needs healing",
          "A personalized direction for further healing work",
        ],
      },
      {
        heading: "",
        body: "This often acts as a starting point before deeper healing sessions.",
      },
    ],
  },
  {
    num: "14",
    title: "Opening Abundance through Earth Star Chakra Activation",
    intro: "A grounding and energetic alignment session focused on activating the Earth Star Chakra, the energy center below the feet that connects you to stability, resources, and material flow.",
    sections: [
      {
        heading: "What it works on",
        bullets: [
          "Financial instability or blockage in receiving abundance",
          "Lack of grounding, safety, or support in life",
          "Disconnection from Earth energy and material stability",
        ],
      },
      {
        heading: "What happens in the session",
        bullets: [
          "Activation and balancing of the Earth Star Chakra",
          "Release of scarcity-based energetic imprints",
          "Strengthening of grounding and survival-energy stability",
          "Reconnection with Earth's supportive energy field",
        ],
      },
      {
        heading: "How it helps",
        body: "This work helps clients feel more stable, supported, and rooted. When the Earth Star Chakra is activated, abundance flow becomes more practical and grounded—supporting money flow, career stability, and real-world opportunities.",
      },
    ],
  },
];

function ServicesPage() {
  const { service } = Route.useSearch();
  const initialIdx = (() => {
    if (!service) return 0;
    const i = groups.findIndex((g) => (g.slug ?? slugify(g.title)) === service);
    return i >= 0 ? i : 0;
  })();
  const [activeIdx, setActiveIdx] = useState(initialIdx);

  useEffect(() => {
    if (!service) return;
    const i = groups.findIndex((g) => (g.slug ?? slugify(g.title)) === service);
    if (i >= 0) {
      setActiveIdx(i);
      // Scroll to detail panel on mobile after selection from external link
      requestAnimationFrame(() => {
        document.getElementById("service-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [service]);

  const active = groups[activeIdx];

  return (
    <PageShell>
      <PageHeader eyebrow="What We Offer" title="Services" lead="Comprehensive healing services designed to transform your life from the inside out." />
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-16 grid md:grid-cols-[minmax(280px,360px)_1fr] gap-8 md:gap-12">
        {/* Left — vertical list of titles */}
        <nav className="md:sticky md:top-28 md:self-start">
          <ul className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible md:border-l md:border-foreground/10">
            {groups.map((g, i) => {
              const isActive = i === activeIdx;
              return (
                <li key={g.title}>
                  <button
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    className={`w-full text-left whitespace-nowrap md:whitespace-normal pl-4 pr-3 py-3 md:border-l-2 -ml-[2px] transition-all ${
                      isActive
                        ? "md:border-[#00b881] text-foreground font-medium bg-cream-deep md:bg-transparent"
                        : "md:border-transparent text-foreground/55 hover:text-foreground hover:md:border-foreground/30"
                    }`}
                  >
                    <span className="font-mono text-[10px] mr-2 text-foreground/40">{g.num}</span>
                    <span className="text-sm md:text-base">{g.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right — selected service detail */}
        <article id="service-detail" key={active.num} className="rounded-3xl bg-cream-deep p-8 md:p-12 animate-in fade-in slide-in-from-right-2 duration-300 scroll-mt-24">
          <div className="font-mono text-[11px] text-foreground/55 mb-6">{active.num} / SERVICE</div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2 leading-[0.95]">
            {active.title.toUpperCase()}
          </h2>
          {active.subtitle && (
            <div className="font-display text-xl md:text-2xl text-[#00b881] italic mb-6">
              {active.subtitle}
            </div>
          )}
          <p className="text-foreground/75 text-base md:text-lg mb-8 leading-relaxed">
            {active.intro}
          </p>

          <div className="space-y-7">
            {active.sections.map((s, i) => (
              <div key={i}>
                {s.heading && (
                  <h3 className="font-mono text-xs uppercase tracking-wider text-foreground/60 mb-3">
                    {s.heading}
                  </h3>
                )}
                {s.bullets && (
                  <ul className="space-y-2.5 text-foreground/85 text-base md:text-lg">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 items-baseline">
                        <span className="text-[#00b881]">●</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.body && (
                  <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
                    {s.body}
                  </p>
                )}
              </div>
            ))}
          </div>
        </article>
      </section>
    </PageShell>
  );
}
