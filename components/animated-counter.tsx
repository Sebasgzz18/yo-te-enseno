"use client";

import * as React from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 24,
    stiffness: 60,
  });
  const [display, setDisplay] = React.useState("0");

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  React.useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(
        latest.toLocaleString("es-MX", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      );
    });
    return unsubscribe;
  }, [springValue, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
