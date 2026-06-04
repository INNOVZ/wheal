import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-10">
        <h2 className="font-display text-[18vw] md:text-[14vw] leading-[0.85] text-foreground">
          TOGETHER<br />WE HEAL
        </h2>

        <div className="mt-16 grid md:grid-cols-4 gap-10 text-sm">
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <img src={logoDark} alt="Together We Heal" className="h-16 w-auto" />
            </Link>
            <p className="mt-4 text-foreground/70 leading-relaxed max-w-[14rem]">
              Hypnosis, inner child work &amp; energy healing — guided by Priya Singh.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] text-foreground/55 mb-4">Explore</h4>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="hover:text-foreground/60">Services</Link></li>
              <li><Link to="/about" className="hover:text-foreground/60">About</Link></li>
              <li><Link to="/testimonials" className="hover:text-foreground/60">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-foreground/60">Book a session</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] text-foreground/55 mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li><a href="mailto:tweheal@gmail.com" className="hover:text-foreground/60">tweheal@gmail.com</a></li>
              <li><a href="tel:+971585093132" className="hover:text-foreground/60">+971 58 509 3132</a></li>
              <li className="text-foreground/70">United Arab Emirates</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] text-foreground/55 mb-4">Follow</h4>
            <ul className="space-y-2.5">
              <li><a href="https://www.instagram.com/toge_therweheal" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-foreground/60">Instagram <ArrowUpRight className="h-3 w-3" /></a></li>
              <li><a href="https://www.tiktok.com/@toge_therweheal?_r=1&_t=ZS-95wHnCulDVM" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-foreground/60">TikTok <ArrowUpRight className="h-3 w-3" /></a></li>
              <li><a href="https://wa.me/971585093132" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-foreground/60">WhatsApp <ArrowUpRight className="h-3 w-3" /></a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-foreground/15 flex flex-wrap justify-between gap-3 font-mono text-[11px] text-foreground/55">
          <span>© {new Date().getFullYear()} Together We Heal · All rights reserved</span>
          <Link to="/terms-privacy" className="hover:text-foreground/80">Terms &amp; Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
