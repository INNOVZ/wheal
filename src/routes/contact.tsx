import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { ArrowRight, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Together We Heal" },
      { name: "description", content: "Book your free discovery call and begin your transformation journey." },
      { property: "og:title", content: "Contact — Together We Heal" },
      { property: "og:description", content: "Get in touch — book your free consultation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell hideContactCTA>
      <PageHeader eyebrow="Get In Touch" title="Contact" lead="Book your free discovery call today." />
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-12 grid md:grid-cols-[1.4fr_1fr] gap-5">
        <form className="rounded-3xl bg-cream-deep p-8 md:p-10 space-y-5">
          <h3 className="font-display text-3xl md:text-4xl text-foreground mb-2 leading-[0.95]">
            BOOK A FREE<br />CONSULTATION
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full Name *" name="name" />
            <Field label="Email Address *" name="email" type="email" />
            <Field label="Phone Number *" name="phone" type="tel" />
            <Field label="Preferred Date" name="date" type="date" />
            <div className="sm:col-span-2">
              <label htmlFor="service" className="block font-mono text-[11px] text-foreground/55 mb-2">
                SERVICE TYPE
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-foreground/15 bg-background/60 px-4 pr-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-neon)]/40 focus:border-[var(--color-neon)] cursor-pointer transition-colors hover:border-foreground/30"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="mind-emotional">Mind & Emotional Healing</option>
                  <option value="regression">Regression Therapy</option>
                  <option value="behavioral">Behavioral Transformation</option>
                  <option value="energy">Energy & Spiritual Healing</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/60" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block font-mono text-[11px] text-foreground/55 mb-2">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-xl border border-foreground/15 bg-background/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/30"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-mono text-xs hover:opacity-90"
          >
            Send Request <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </form>

        <div className="rounded-3xl bg-foreground text-background p-8 md:p-10 flex flex-col">
          <div className="font-mono text-[11px] text-background/60 mb-6">QUICK CONNECT</div>
          <h3 className="font-display text-3xl md:text-4xl mb-3 text-[var(--color-neon)] leading-[0.95]">
            CHAT NOW
          </h3>
          <p className="text-background/85 mb-6 leading-relaxed">
            Get instant responses via WhatsApp.
          </p>
          <a
            href="https://wa.me/971585093132"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-neon)] text-foreground px-6 py-3 font-mono text-xs hover:opacity-90 self-start"
          >
            WhatsApp <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <ul className="mt-10 space-y-4 text-sm border-t border-background/15 pt-6">
            <li>
              <div className="font-mono text-[11px] text-background/60 mb-1">EMAIL</div>
              <a href="mailto:tweheal@gmail.com" className="hover:text-[var(--color-neon)] transition-colors">tweheal@gmail.com</a>
            </li>
            <li>
              <div className="font-mono text-[11px] text-background/60 mb-1">PHONE</div>
              <a href="tel:+971585093132" className="hover:text-[var(--color-neon)] transition-colors">+971 58 509 3132</a>
            </li>
            <li>
              <div className="font-mono text-[11px] text-background/60 mb-1">BASED IN</div>
              United Arab Emirates · Online &amp; In-Person
            </li>
          </ul>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block font-mono text-[11px] text-foreground/55 mb-2">
        {label.toUpperCase()}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full rounded-xl border border-foreground/15 bg-background/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/30"
      />
    </div>
  );
}
