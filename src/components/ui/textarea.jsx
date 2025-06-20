// ui/Textarea.jsx
"use client";
import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef(
  ({ className, placeholder, onChange, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const [hasText, setHasText] = useState(false);

    const handleChange = (e) => {
      const value = e.target.value;
      setHasText(value.trim() !== "");
      onChange?.(e);
    };

    const showPlaceholder = !hasText;

    return (
      <div className='relative w-full mb-0'>
        {showPlaceholder && (
          <div
            className={cn(
              "pointer-events-none absolute left-4 top-1/3",
              "text-gray text-base md:text-lg leading-tight"
            )}
          >
            {placeholder}
          </div>
        )}

        <textarea
          {...props}
          ref={ref}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={handleChange}
          className={cn(
            "w-full max-w-full min-w-0 box-border",
            "border-2 border-black  text-black",
            "bg-white text-left resize-none focus:outline-none",
            "text-base md:text-lg leading-tight",
            // Меняем padding только по флагу hasText, не по фокусу
            hasText ? "pt-6" : "pt-[52px] lg:pt-[65px]",
            "px-4 min-h-[160px] overflow-y-auto",
            "transition-all duration-200 ease-in-out",
            className
          )}
        />
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
