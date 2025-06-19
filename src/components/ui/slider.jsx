"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const Slider = ({
  items,
  renderItem,
  className = "",
  containerClassName = "",
  itemClassName = "",
  speed = 50, // px per second
}) => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [x, setX] = useState(0);

  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, [items]);

  useAnimationFrame((t, delta) => {
    setX((prev) => {
      let next = prev - (speed * delta) / 1000;
      if (Math.abs(next) >= width) return 0;
      return next;
    });
  });

  return (
    <div className={`w-full overflow-hidden ${containerClassName}`}>
      <div
        className={`flex w-fit gap-[64px] lg:gap-[110px]  ${className}`}
        ref={containerRef}
        style={{
          transform: `translateX(${x}px)`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <motion.div
            key={index}
            className={`shrink-0 ${itemClassName}`}
            transition={{ duration: 0.2 }}
          >
            {renderItem(item, index % items.length)}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
