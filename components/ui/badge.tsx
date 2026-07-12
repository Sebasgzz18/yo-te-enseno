import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
  {
    variants: {
      variant: {
        lime: "bg-lime-500/15 text-navy-900 ring-1 ring-inset ring-lime-500/40",
        orange: "bg-orange-500/10 text-orange-600 ring-1 ring-inset ring-orange-500/30",
        navy: "bg-navy-900/5 text-navy-900 ring-1 ring-inset ring-navy-900/10",
        white: "bg-white/10 text-white ring-1 ring-inset ring-white/25",
      },
    },
    defaultVariants: {
      variant: "navy",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
