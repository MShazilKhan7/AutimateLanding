import type { LucideIcon } from "lucide-react";

interface IconBadgeProps {
  icon: LucideIcon;
  gradient: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function IconBadge({ icon: Icon, gradient, size = "md" }: IconBadgeProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16",
    xl: "w-20 h-20"
  };

  const iconSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl", 
    xl: "text-3xl"
  };

  return (
    <div className={`${sizeClasses[size]} bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center`}>
      <Icon className={`text-white ${iconSizes[size]}`} />
    </div>
  );
}