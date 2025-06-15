'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export const InfiniteSlider = ({ 
  items, 
  renderItem,
  className,
  containerClassName,
  itemClassName,
  speed = 20,
  hoverScale = 1.05,
  gap = 10
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const duplicatedItems = [...items, ...items, ...items]; // Для того щоб слайдер нормально працював

  return (
    <div 
      className={`w-full mx-auto overflow-hidden ${containerClassName || ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`flex gap-${gap} w-fit ${className || ''}`}
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <motion.div
            key={index}
            className={`shrink-0 ${itemClassName || ''}`}
            whileHover={{ scale: hoverScale }}
            transition={{ duration: 0.2 }}
          >
            {renderItem(item, index)} {/* Елемент який буде відображатися  */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}; 