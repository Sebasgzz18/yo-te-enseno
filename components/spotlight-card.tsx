"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
}

export const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ className, dark = false, children, ...props }, ref) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn("spotlight", dark && "spotlight-dark", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SpotlightCard.displayName = "SpotlightCard";
