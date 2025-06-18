import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full max-w-full min-w-0 box-border",
        "border p-2.5 lg:py-[18px] lg:px-5 lg:border-2 border-black",
        "text-base md:text-[22px] leading-tight focus:outline-none",
        "bg-white text-base lg:leading-tight placeholder-gray",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";
