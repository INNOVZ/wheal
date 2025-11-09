import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-healing.jpg";
import { Sparkles, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Peaceful healing meditation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">
                Professional Hypnosis & Healing Services
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Heal. Transform.{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Awaken the Power Within.
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={600}>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Experience deep emotional and spiritual healing through Hypnosis,
              Inner Child Work, and Energy Transformation with Priya Singh —
              helping you rediscover peace and purpose.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all group"
              >
                Book a Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 hover:bg-accent transition-all group"
              >
                <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Your Healing Journey
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
