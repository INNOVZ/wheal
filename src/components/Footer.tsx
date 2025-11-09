import { Mail, MapPin, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Together We <span className="text-primary">Heal</span>
            </h3>
            <p className="text-muted-foreground">
              Professional Hypnosis & Energy Healing Services
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+971528678679" className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+971 52 867 8679</span>
              </a>
              <a href="mailto:info@thedesertwhales.com" className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@thedesertwhales.com</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Location</h4>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span className="text-sm">
                M01-198, Commercial Bank of Dubai Building,<br />
                Al Khabeesi, Dubai, UAE
              </span>
            </div>
          </div>

          {/* Website */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Visit Us Online</h4>
            <div className="space-y-3">
              <a href="https://thedesertwhales.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
                <span>thedesertwhales.com</span>
              </a>
              <a href="https://desertwhales.ae" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
                <span>desertwhales.ae</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Together We Heal. All rights reserved.</p>
          <p className="mt-2">Designed by Desert Whales Marketing Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
