import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Brain,
  Clock,
  TrendingUp,
  Sparkles
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Mind & Emotional Healing",
      items: [
        "Trauma Release",
        "Inner Child Healing",
        "Self Hypnosis & Conscious Awareness",
      ],
      color: "text-primary",
    },
    {
      icon: Clock,
      title: "Regression Therapy",
      items: [
        "Past Life Regression",
        "Age Regression",
        "Mother's Womb Experience",
      ],
      color: "text-secondary",
    },
    {
      icon: TrendingUp,
      title: "Behavioral Transformation",
      items: [
        "Overcoming Addictions & Habits",
        "Weight & Smoking Management",
        "Relationship Healing",
      ],
      color: "text-primary",
    },
    {
      icon: Sparkles,
      title: "Energy & Spiritual Healing",
      items: [
        "Chakra Balancing",
        "Aura Cleansing",
        "Pain & Stress Management",
        "Tarot Reading",
      ],
      color: "text-secondary",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Services We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healing services designed to transform your life from
            the inside out
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection
                key={index}
                animation="scale-in"
                delay={200 + index * 150}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 h-full">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${service.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <span className="text-primary mt-1">
                            {/* <Icon className="w-4 h-4" /> */}
                          </span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Services;
