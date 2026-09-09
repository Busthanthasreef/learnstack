import type { HTMLAttributes } from "react";
import { cn } from "../../utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "reading";
}

export function Container({
  className,
  variant = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        variant === "default" ? "max-w-7xl" : "max-w-3xl",
        className
      )}
      {...props}
    />
  );
}
