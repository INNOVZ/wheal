import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoFull from "@/assets/logo-full.png";
import logoWhite from "@/assets/logo-white.png";

type Variant = "default" | "overlay";

export function SiteHeader({ variant = "default" }: { variant?: Variant } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (variant !== "overlay") return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const isOverlayMode = variant === "overlay" && !scrolled;
  const wrapperCls =
    variant === "overlay"
      ? `fixed top-0 left-0 right-0 z-30 transition-colors duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur border-b border-foreground/10" : "bg-transparent"
        }`
      : "sticky top-0 z-30 bg-background/85 backdrop-blur";
  const mutedCls = isOverlayMode ? "text-white/70 hover:text-white" : "text-foreground/70 hover:text-foreground";
  const activeCls = isOverlayMode ? "text-white" : "text-foreground";
  const ctaCls = isOverlayMode
    ? "bg-white text-black border-white hover:bg-white/90"
    : "border-foreground/40 text-foreground hover:bg-foreground hover:text-background";
  const iconBtnCls = isOverlayMode
    ? "text-white border-white/40 hover:bg-white/10"
    : "text-foreground border-foreground/30 hover:bg-foreground/5";

  return (
    <header className={wrapperCls}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-6">
        <Link to="/" aria-label="Together We Heal — Home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={isOverlayMode ? logoWhite : logoFull}
            alt="Together We Heal"
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <HeaderLink to="/services" mutedCls={mutedCls} activeCls={activeCls}>Services</HeaderLink>
          <HeaderLink to="/about" mutedCls={mutedCls} activeCls={activeCls}>About</HeaderLink>
          <HeaderLink to="/blog" mutedCls={mutedCls} activeCls={activeCls}>Blog</HeaderLink>
          <HeaderLink to="/why-choose-us" mutedCls={mutedCls} activeCls={activeCls}>Why Us</HeaderLink>
          <HeaderLink to="/contact" mutedCls={mutedCls} activeCls={activeCls}>Contact</HeaderLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={`hidden md:inline-flex items-center gap-1.5 rounded-full border md:px-3 md:py-2 lg:px-5 lg:py-2.5 lg:gap-2 font-mono text-[11px] lg:text-xs whitespace-nowrap transition-colors ${ctaCls}`}
          >
            Start today <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border transition-colors ${iconBtnCls}`}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile collapsible menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        } ${isOverlayMode ? "bg-black/80 backdrop-blur" : "bg-background border-t border-foreground/10"}`}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          <MobileLink to="/services" overlay={isOverlayMode} onClick={() => setOpen(false)}>Services</MobileLink>
          <MobileLink to="/about" overlay={isOverlayMode} onClick={() => setOpen(false)}>About</MobileLink>
          <MobileLink to="/blog" overlay={isOverlayMode} onClick={() => setOpen(false)}>Blog</MobileLink>
          <MobileLink to="/why-choose-us" overlay={isOverlayMode} onClick={() => setOpen(false)}>Why Us</MobileLink>
          <MobileLink to="/contact" overlay={isOverlayMode} onClick={() => setOpen(false)}>Contact</MobileLink>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className={`mt-3 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 font-mono text-xs transition-colors ${ctaCls}`}
          >
            Start today <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

function HeaderLink({
  to,
  children,
  mutedCls,
  activeCls,
}: {
  to: "/" | "/about" | "/services" | "/why-choose-us" | "/testimonials" | "/blog" | "/contact";
  children: React.ReactNode;
  mutedCls: string;
  activeCls: string;
}) {
  return (
    <Link
      to={to}
      className={`font-mono text-xs md:px-2 lg:px-3 py-2 transition-colors ${mutedCls}`}
      activeProps={{ className: `font-mono text-xs md:px-2 lg:px-3 py-2 ${activeCls}` }}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  to,
  children,
  overlay,
  onClick,
}: {
  to: "/" | "/about" | "/services" | "/why-choose-us" | "/testimonials" | "/blog" | "/contact";
  children: React.ReactNode;
  overlay: boolean;
  onClick: () => void;
}) {
  const base = overlay ? "text-white/85 hover:text-white" : "text-foreground/80 hover:text-foreground";
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`font-mono text-sm py-3 border-b ${overlay ? "border-white/10" : "border-foreground/10"} ${base}`}
    >
      {children}
    </Link>
  );
}
