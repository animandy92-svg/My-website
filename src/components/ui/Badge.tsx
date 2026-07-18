import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-all duration-200",
        {
          "border-transparent bg-muted text-muted-foreground": variant === "default",
          "border-primary/20 bg-primary/10 text-primary": variant === "primary",
          "border-secondary/20 bg-secondary/10 text-secondary": variant === "secondary",
          "border-accent/20 bg-accent/10 text-accent": variant === "accent",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
