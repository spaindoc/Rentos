"use client";

import { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const TextareaWithAnimatedError = forwardRef(
  (
    {
      className,
      placeholder,
      error,
      message,
      value,
      onChange,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [hasText, setHasText] = useState(false);

    const handleChange = (e) => {
      const v = e.target.value;
      setHasText(v.trim() !== "");
      onChange(e);
    };

    const showPlaceholder = !hasText;

    return (
      <div className='relative w-full mb-3'>
        {showPlaceholder && (
          <div
            className={cn(
              "pointer-events-none absolute left-4 top-5",
              "text-gray text-base md:text-lg leading-tight"
            )}
          >
            {placeholder}
          </div>
        )}

        <textarea
          {...props}
          ref={ref}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          className={cn(
            "w-full box-border border-2 text-black resize-none focus:outline-none bg-white text-base md:text-lg leading-tight px-4",
            hasText ? "pt-6" : "pt-[52px] lg:pt-[65px]",
            error ? "border-red-600" : "border-black",
            className
          )}
        />

        {error && (
          <>
            <AlertCircle className='absolute right-3 top-4 text-red-600 w-5 h-5' />
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className='absolute right-10 top-4 z-50 bg-red-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap'
              >
                {message}
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    );
  }
);

TextareaWithAnimatedError.displayName = "TextareaWithAnimatedError";
