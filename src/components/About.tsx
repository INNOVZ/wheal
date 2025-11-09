import { Card } from "@/components/ui/card";
import priyaPortrait from "@/assets/priya_singh.jpeg";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  const highlights = [
    "Years of experience in clinical Hypnosis",
    "Specialized in emotional wellness",
    "Holistic healing approach",
    "Mind, body, and soul integration",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-accent/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <AnimatedSection animation="scale-in" delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse-soft" />
              <Card className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={priyaPortrait}
                  alt="Priya Singh - Hypnosis Professional"
                  className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-700"
                />
              </Card>
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <AnimatedSection animation="fade-up" delay={400}>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Priya Singh</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With years of experience in clinical Hypnosis and emotional
              wellness, Priya Singh founded{" "}
              <span className="font-semibold text-foreground">
                Together We Heal
              </span>{" "}
              to guide individuals toward holistic healing — mind, body, and
              soul.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Through techniques like subconscious reprogramming, past life
              regression, and energy balancing, Priya helps clients release
              emotional blocks, overcome fears, and reconnect with their true
              selves.
            </p>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <AnimatedSection
                  key={index}
                  animation="slide-right"
                  delay={600 + index * 100}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
