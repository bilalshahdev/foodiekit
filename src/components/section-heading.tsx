// /components/section-heading.tsx

import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionHeading({
  children,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function SubHeading({
  children,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
