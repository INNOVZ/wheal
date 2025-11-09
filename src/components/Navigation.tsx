import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import SmoothNavLink from "./NavLink";
import logo from "@/assets/togetherweheal.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => scrollToSection("#hero")}
          >
            <img
              src={logo}
              alt="Priya Singh - Hypnosis Professional"
              className="w-32 sm:w-40 h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <SmoothNavLink href="#hero">Home</SmoothNavLink>
            <SmoothNavLink href="#about">About</SmoothNavLink>
            <SmoothNavLink href="#services">Services</SmoothNavLink>
            <SmoothNavLink href="#why-choose">Why Choose Us</SmoothNavLink>
            <SmoothNavLink href="#testimonials">Testimonials</SmoothNavLink>
            <SmoothNavLink href="#contact">Contact</SmoothNavLink>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              className="hidden sm:inline-flex shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection("#contact")}
            >
              Book Consultation
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
