import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Star,
  Phone,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#hero", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Services", href: "#services", icon: Briefcase },
    { label: "Why Choose Us", href: "#why-choose", icon: Star },
    { label: "Testimonials", href: "#testimonials", icon: Heart },
    { label: "Contact", href: "#contact", icon: Phone },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="relative z-50 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-full sm:w-80 p-0 bg-gradient-to-br from-background via-background/95 to-primary/5 border-l-2 border-primary/20 mobile-menu-content"
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-lg">Priya Singh</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full hover:bg-accent"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-6">
              <ul className="space-y-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className={cn(
                          "w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all duration-200",
                          "hover:bg-accent hover:shadow-md hover:scale-[1.02]",
                          "focus:outline-none focus:ring-2 focus:ring-primary/20",
                          "group animate-menu-item"
                        )}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer CTA */}
            <div className="p-6 border-t border-border/50 bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="text-center mb-4">
                <p className="text-sm text-muted-foreground mb-2">
                  Ready to start your healing journey?
                </p>
                <Button
                  className="w-full shadow-lg hover:shadow-xl transition-all"
                  onClick={() => {
                    scrollToSection("#contact");
                  }}
                >
                  Book Free Consultation
                </Button>
              </div>
              <div className="text-center text-xs text-muted-foreground">
                <p>Professional Hypnosis & Healing</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
