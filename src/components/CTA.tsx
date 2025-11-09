import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/30 to-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection
          animation="fade-up"
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to heal from <span className="text-primary">within?</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Book Your Free Discovery Call Today and start your transformational
            journey
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all group"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 hover:bg-accent transition-all"
            >
              <Phone className="mr-2 w-5 h-5" />
              +971 52 867 8679
            </Button>
          </div>

          <p className="mt-12 text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">
              Together We Heal
            </span>{" "}
            by Priya Singh
            <br />
            <span className="text-base">
              Transforming lives through Hypnosis & Energy Healing
            </span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
