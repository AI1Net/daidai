import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  glow?: boolean;
}

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  glow = true,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50",

        // Sizes
        size === "sm" && "px-5 py-2 text-sm",
        size === "md" && "px-7 py-3 text-base",
        size === "lg" && "px-9 py-4 text-lg",

        // Variants
        variant === "primary" &&
          "bg-blueMain text-white hover:scale-105",

        variant === "secondary" &&
          "bg-redMain text-white hover:scale-105",

        variant === "outline" &&
          "border-2 border-black bg-transparent text-black hover:bg-black hover:text-white",

        variant === "ghost" &&
          "bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black",

        // Glow
        glow &&
          variant === "primary" &&
          "hover:shadow-[0_0_40px_rgba(0,71,255,0.5)]",

        glow &&
          variant === "secondary" &&
          "hover:shadow-[0_0_40px_rgba(255,49,49,0.5)]",

        // Width
        fullWidth && "w-full",

        className
      )}
      {...props}
    >
      {/* Shine Effect */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute left-[-120%] top-0 h-full w-[120%] rotate-12 bg-white/20 blur-xl transition-all duration-700 group-hover:left-[120%]" />
      </span>

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}