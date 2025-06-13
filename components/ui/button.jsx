import React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  default: "bg-zinc-900 text-white hover:bg-zinc-800",
  destructive: "bg-red-500 text-white hover:bg-red-600",
  outline: "border border-zinc-200 bg-white hover:bg-zinc-100",
  secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
  ghost: "hover:bg-zinc-100 hover:text-zinc-900",
  link: "text-zinc-900 underline-offset-4 hover:underline",
};

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-11 px-8",
  icon: "h-10 w-10",
};

export function Button({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
} 