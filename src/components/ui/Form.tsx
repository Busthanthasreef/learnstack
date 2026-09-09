import type { ReactNode, LabelHTMLAttributes } from "react";
import { cn } from "../../utils";

export interface FormGroupProps {
  children: ReactNode;
  className?: string;
}

export function FormGroup({ children, className }: FormGroupProps) {
  return <div className={cn("space-y-2", className)}>{children}</div>;
}

export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  error?: boolean;
}

export function FormLabel({
  className,
  error,
  children,
  ...props
}: FormLabelProps) {
  return (
    <label
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        error && "text-destructive",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}

export interface FormErrorMessageProps {
  children?: ReactNode;
  className?: string;
}

export function FormErrorMessage({
  children,
  className,
}: FormErrorMessageProps) {
  if (!children) return null;

  return (
    <p className={cn("text-xs font-medium text-destructive", className)}>
      {children}
    </p>
  );
}
