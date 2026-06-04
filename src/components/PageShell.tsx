import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ContactCTA } from "./ContactCTA";

export function PageShell({
  children,
  hideContactCTA = false,
}: {
  children: ReactNode;
  hideContactCTA?: boolean;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 relative">{children}</main>
      {!hideContactCTA && <ContactCTA />}
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="px-6 md:px-10 pt-10 md:pt-16 pb-12 max-w-[1400px] mx-auto">
      {eyebrow && (
        <div className="font-mono text-[11px] text-foreground/55 mb-6">
          {eyebrow.toUpperCase()}
        </div>
      )}
      <h1 className="font-display text-[14vw] md:text-[10vw] leading-[0.9] text-foreground">
        {title.toUpperCase()}
      </h1>
      {lead && (
        <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl leading-snug">
          {lead}
        </p>
      )}
    </section>
  );
}
