import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Together We Heal" },
      { name: "description", content: "Certified, personalized, confidential, holistic healing — available online and in-person across the UAE." },
      { property: "og:title", content: "Why Choose Us — Together We Heal" },
      { property: "og:description", content: "Professional, compassionate healing guidance." },
    ],
  }),
  component: WhyPage,
});

const reasons = [
  { num: "01", title: "Certified Professional", body: "Certified Hypnosis Professional with a proven track record." },
  { num: "02", title: "Personalized Sessions", body: "One-on-one sessions tailored to your unique needs." },
  { num: "03", title: "Confidential Space", body: "A confidential and compassionate environment." },
  { num: "04", title: "Holistic Approach", body: "Modern psychology combined with ancient healing." },
  { num: "05", title: "Convenient Access", body: "Based in the UAE — available online and in-person." },
  { num: "06", title: "Lasting Transformation", body: "Tools and rituals you carry with you long after the session ends." },
];

// Seven chakras with their traditional colors and Sanskrit names
const chakras = [
  { name: "Crown", sanskrit: "Sahasrara", color: "#9b5cf6", top: "6%", left: "12%", size: 120, delay: "0s" },
  { name: "Third Eye", sanskrit: "Ajna", color: "#4f46e5", top: "22%", left: "82%", size: 90, delay: "1.2s" },
  { name: "Throat", sanskrit: "Vishuddha", color: "#0ea5e9", top: "46%", left: "5%", size: 110, delay: "2.4s" },
  { name: "Heart", sanskrit: "Anahata", color: "#00b881", top: "38%", left: "70%", size: 140, delay: "0.6s" },
  { name: "Solar Plexus", sanskrit: "Manipura", color: "#facc15", top: "68%", left: "18%", size: 100, delay: "1.8s" },
  { name: "Sacral", sanskrit: "Svadhisthana", color: "#fb923c", top: "76%", left: "78%", size: 120, delay: "3s" },
  { name: "Root", sanskrit: "Muladhara", color: "#ef4444", top: "90%", left: "44%", size: 130, delay: "0.3s" },
];

function WhyPage() {
  return (
    <PageShell>
      {/* Floating chakras backdrop — constrained to page content (not overlapping ContactCTA) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {chakras.map((c) => (
          <div
            key={c.name}
            className="absolute rounded-full animate-float"
            style={{
              top: c.top,
              left: c.left,
              width: c.size,
              height: c.size,
              background: `radial-gradient(circle at 35% 35%, ${c.color}cc 0%, ${c.color}55 45%, transparent 75%)`,
              filter: "blur(2px)",
              animationDelay: c.delay,
              animationDuration: `${6 + (c.size % 5)}s`,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="relative z-10">
        <PageHeader eyebrow="Our Difference" title="Why Us" lead="Experience the difference with professional, compassionate healing guidance." />

        {/* Chakra legend strip — no background */}
        <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-12">
          <div className="text-center">
            <div className="font-mono text-[11px] text-foreground/55 mb-5">SEVEN ENERGY CENTERS</div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-5">
              {chakras
                .slice()
                .reverse()
                .map((c) => (
                  <div key={c.name} className="flex items-center gap-2.5">
                    <span
                      className="block h-5 w-5 rounded-full animate-float"
                      style={{
                        background: `radial-gradient(circle at 35% 35%, ${c.color} 0%, ${c.color}aa 60%, ${c.color}55 100%)`,
                        boxShadow: `0 0 16px ${c.color}88`,
                        animationDelay: c.delay,
                      }}
                    />
                    <div className="leading-tight text-left">
                      <div className="font-mono text-[10px] text-foreground/60">{c.sanskrit.toUpperCase()}</div>
                      <div className="text-sm text-foreground">{c.name}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ num, title, body }, i) => {
            const accent = chakras[i % chakras.length].color;
            return (
              <div
                key={title}
                className="rounded-3xl p-8 bg-cream-deep/85 backdrop-blur-sm border border-foreground/5 transition-colors"
                style={{ ['--card-accent' as any]: accent }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = accent)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
              >
                <div className="font-mono text-[11px] text-foreground/55 mb-5">{num}</div>
                <h3 className="font-display text-3xl text-foreground mb-3 leading-[0.95]">{title.toUpperCase()}</h3>
                <p className="text-foreground/75 leading-relaxed">{body}</p>
              </div>
            );
          })}
        </section>
      </div>
    </PageShell>
  );
}
