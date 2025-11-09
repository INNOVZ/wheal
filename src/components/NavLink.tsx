import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

interface SmoothNavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const RouterNavLinkComponent = forwardRef<
  HTMLAnchorElement,
  NavLinkCompatProps
>(({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
  return (
    <RouterNavLink
      ref={ref}
      to={to}
      className={({ isActive, isPending }) =>
        cn(
          className,
          isActive && activeClassName,
          isPending && pendingClassName
        )
      }
      {...props}
    />
  );
});

const SmoothNavLink = ({ href, children, className }: SmoothNavLinkProps) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={() => scrollToSection(href)}
      className={cn(
        "text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium",
        className
      )}
    >
      {children}
    </button>
  );
};

RouterNavLinkComponent.displayName = "RouterNavLink";

// Export both components
export { RouterNavLinkComponent as NavLink };
export default SmoothNavLink;
