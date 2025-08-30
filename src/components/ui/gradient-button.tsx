import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  testId?: string;
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ variant = "primary", size = "md", children, testId, className = "", ...props }, ref) => {
    const baseClasses = "font-semibold transition-all duration-300 transform hover:-translate-y-0.5";
    
    const variantClasses = {
      primary: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl",
      secondary: "border border-gray-300 text-soft-charcoal hover:bg-gray-50"
    };

    const sizeClasses = {
      sm: "px-4 py-2 rounded-lg text-sm",
      md: "px-6 py-3 rounded-xl",
      lg: "px-8 py-4 rounded-full text-lg"
    };

    return (
      <Button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        data-testid={testId}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

GradientButton.displayName = "GradientButton";