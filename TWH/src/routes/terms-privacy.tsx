import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/terms-privacy")({
  head: () => ({
    meta: [
      { title: "Terms & Privacy — Together We Heal" },
      { name: "description", content: "Terms of service and privacy policy for Together We Heal." },
      { property: "og:title", content: "Terms & Privacy — Together We Heal" },
      { property: "og:description", content: "How we handle your information and the terms governing our services." },
    ],
  }),
  component: TermsPrivacyPage,
});

function TermsPrivacyPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Legal" title="Terms & Privacy" lead="The terms governing our work together and how we protect your information." />
      <section className="px-6 md:px-10 max-w-[900px] mx-auto pb-16 space-y-10 text-foreground/80 leading-relaxed">
        <div>
          <h2 className="font-display text-3xl text-foreground mb-3">Terms of Service</h2>
          <p>
            By booking a session with Together We Heal, you acknowledge that our services are
            complementary in nature and not a substitute for medical, psychiatric, or psychological
            treatment. Sessions are confidential and offered in good faith to support your personal
            growth and well-being.
          </p>
          <p className="mt-3">
            Bookings may be rescheduled with at least 24 hours notice. Late cancellations or
            no-shows may be subject to a fee at our discretion.
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl text-foreground mb-3">Privacy Policy</h2>
          <p>
            We collect only the information you choose to share with us — typically your name,
            contact details, and the context you provide for your healing journey. This information
            is used solely to deliver our services and communicate with you.
          </p>
          <p className="mt-3">
            We never sell or share your personal data with third parties. All session content is
            kept strictly confidential. You may request deletion of your information at any time
            by emailing <a className="underline" href="mailto:tweheal@gmail.com">tweheal@gmail.com</a>.
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl text-foreground mb-3">Contact</h2>
          <p>
            For any questions about these terms or your privacy, reach out at{" "}
            <a className="underline" href="mailto:tweheal@gmail.com">tweheal@gmail.com</a>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
