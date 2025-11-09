import { Mail, MapPin, Phone, Globe } from "lucide-react";
import logo from "@/assets/togetherweheal.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Priya Singh - Hypnosis Professional"
              className="w-[200px] h-auto rounded-lg transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+971528678679"
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+971 58 5093132</span>
              </a>
              <a
                href="mailto:info@thedesertwhales.com"
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>tweheal@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Location</h4>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span className="text-sm">Dubai, UAE</span>
            </div>
          </div>

          {/* Website */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Visit Us Online
            </h4>
            <div className="space-y-3">
              <a
                href="https://thedesertwhales.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>thedesertwhales.com</span>
              </a>
              <a
                href="https://desertwhales.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>desertwhales.ae</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} Together We Heal. All rights
            reserved.
          </p>
          <a
            href="https://thedesertwhales.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="mt-2">Developed by Desert Whales</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
