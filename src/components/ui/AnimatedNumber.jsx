"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import NumberFlow from "@number-flow/react";

export default function AnimatedNumber({ value, delay = 0, ...props }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setAnimatedValue(value);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isInView, value, delay]);

  return (
    <span ref={ref}>
      <NumberFlow
        value={animatedValue}
        locales='uk-UA'
        format={{
          useGrouping: true,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }}
        transformTiming={{ duration: 0 }}
        spinTiming={{ duration: 1500, easing: "ease-in-out" }}
        opacityTiming={{ duration: 800, easing: "ease-out" }}
        {...props}
      />
    </span>
  );
}
