import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Priya's sessions changed my life. I released fears I didn't even know I had.",
      author: "Sara M.",
      location: "Dubai",
    },
    {
      text: "The past life regression helped me find closure and peace after years of anxiety.",
      author: "Rohit K.",
      location: "Abu Dhabi",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from those who have experienced transformation
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={300 + index * 200}
            >
              <Card
                className="relative hover:shadow-lg transition-all duration-300 border-border/50 h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <Quote className="w-12 h-12 text-primary/20 mb-4" />
                  <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
