import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?:
    | "fade-up"
    | "fade-in"
    | "slide-left"
    | "slide-right"
    | "scale-in"
    | "fade-up-stagger";
  delay?: number;
  threshold?: number;
}

const AnimatedSection = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  });

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-700 ease-out";

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClass} opacity-0 translate-y-8`;
        case "fade-in":
          return `${baseClass} opacity-0`;
        case "slide-left":
          return `${baseClass} opacity-0 -translate-x-8`;
        case "slide-right":
          return `${baseClass} opacity-0 translate-x-8`;
        case "scale-in":
          return `${baseClass} opacity-0 scale-95`;
        default:
          return `${baseClass} opacity-0 translate-y-8`;
      }
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={elementRef}
      className={cn(getAnimationClass(), className)}
      style={{
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
