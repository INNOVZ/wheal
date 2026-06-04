import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="px-6 md:px-10 max-w-[1400px] mx-auto pt-24 md:pt-32 pb-16">
      <div className="rounded-3xl bg-foreground text-background p-8 md:p-14 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div>
          <div className="font-mono text-[11px] text-background/60 mb-5">
            GET IN TOUCH
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-background">
            BEGIN YOUR
            <br />
            <span className="text-[var(--color-neon)]">HEALING JOURNEY</span>
          </h2>
          <p className="mt-6 text-background/80 max-w-md leading-relaxed">
            Reach out for a free discovery call. We'll listen, hold space, and
            find the right path forward together.
          </p>
        </div>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);
            const subject = encodeURIComponent(
              "Discovery call — " + (data.get("name") ?? ""),
            );
            const body = encodeURIComponent(
              `Name: ${data.get("name") ?? ""}\nEmail: ${data.get("email") ?? ""}\nService: ${data.get("service") ?? ""}\n\nMessage:\n${data.get("message") ?? ""}`,
            );
            window.location.href = `mailto:tweheal@gmail.com?subject=${subject}&body=${body}`;
          }}
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              required
              name="name"
              placeholder="Full name"
              className="w-full rounded-xl bg-background/10 border border-background/20 px-4 py-3 text-sm placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-neon)] text-background"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full rounded-xl bg-background/10 border border-background/20 px-4 py-3 text-sm placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-neon)] text-background"
            />
          </div>
          <div className="relative">
            <select
              name="service"
              defaultValue=""
              className="w-full appearance-none rounded-xl bg-background/10 border border-background/20 px-4 pr-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-neon)] text-background cursor-pointer hover:border-background/40 transition-colors"
            >
              <option
                value=""
                disabled
                className="text-foreground bg-background"
              >
                Select a service
              </option>
              <option
                value="Mind & Emotional Healing"
                className="text-foreground bg-background"
              >
                Mind & Emotional Healing
              </option>
              <option
                value="Regression Therapy"
                className="text-foreground bg-background"
              >
                Regression Therapy
              </option>
              <option
                value="Behavioral Transformation"
                className="text-foreground bg-background"
              >
                Behavioral Transformation
              </option>
              <option
                value="Energy & Spiritual Healing"
                className="text-foreground bg-background"
              >
                Energy & Spiritual Healing
              </option>
              <option
                value="Not sure yet"
                className="text-foreground bg-background"
              >
                Not sure yet
              </option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-background/70" />
          </div>
          <textarea
            name="message"
            rows={3}
            placeholder="Tell us a little about what brings you here…"
            className="w-full rounded-xl bg-background/10 border border-background/20 px-4 py-3 text-sm placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-neon)] text-background"
          />
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-neon)] text-foreground px-6 py-3 font-mono text-xs hover:opacity-90"
            >
              Send Request <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <Link
              to="/contact"
              className="font-mono text-[11px] text-background/70 hover:text-background underline-offset-4 hover:underline"
            >
              Or visit the contact page →
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
