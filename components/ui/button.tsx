import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-lime-500 text-navy-900 shadow-soft hover:bg-lime-400 hover:shadow-glow",
        secondary:
          "bg-navy-900 text-white hover:bg-navy-800",
        outline:
          "border border-navy-900/15 bg-transparent text-navy-900 hover:border-navy-900/30 hover:bg-navy-900/[0.03]",
        outlineLight:
          "border border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/10",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1FBE5A] shadow-soft",
        ghost: "text-navy-900 hover:bg-navy-900/[0.04]",
        orange: "bg-orange-500 text-white hover:bg-orange-600 shadow-soft",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-[13px]",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
