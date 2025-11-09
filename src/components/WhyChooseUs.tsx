import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Lock, Palette, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Certified Professional",
      description: "Certified Hypnosis Professional with Proven Track Record",
    },
    {
      icon: Users,
      title: "Personalized Sessions",
      description: "One-on-One Sessions Tailored to Your Needs",
    },
    {
      icon: Lock,
      title: "Confidential Space",
      description: "Confidential & Compassionate Environment",
    },
    {
      icon: Palette,
      title: "Holistic Approach",
      description: "Combination of Modern Psychology and Ancient Healing",
    },
    {
      icon: MapPin,
      title: "Convenient Access",
      description: "Based in UAE — Available Online & In-Person",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with professional, compassionate healing
            guidance
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={200 + index * 100}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 h-full">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
