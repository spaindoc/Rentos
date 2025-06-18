import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Heading1 = forwardRef(({ children, className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "text-4xl md:text-5xl lg:text-7xl font-oswald text-black",
      className
    )}
    {...props}
  >
    {children}
  </h1>
));
Heading1.displayName = "Heading1";

export const Heading2 = forwardRef(({ children, className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-3xl lg:text-[62px] font-oswald text-black uppercase",
      className
    )}
    {...props}
  >
    {children}
  </h2>
));
Heading2.displayName = "Heading2";

export const Heading3 = forwardRef(({ children, className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-[32px] 2xl:text-5xl font-oswald text-black", className)}
    {...props}
  >
    {children}
  </h3>
));
Heading3.displayName = "Heading3";

export const Heading4 = forwardRef(({ children, className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn(
      "text-[22px] lg:text-[38px] text-white font-oswald ",
      className
    )}
    {...props}
  >
    {children}
  </h4>
));

export const Paragraph = forwardRef(
  ({ children, className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-base  lg:text-[22px] font-roboto", className)}
      {...props}
    >
      {children}
    </p>
  )
);
Paragraph.displayName = "Paragraph";

// export const Link = forwardRef(({ children, href, className, ...props }, ref) => (
//   <a
//     ref={ref}
//     href={href}
//     className={cn(
//       'text-base md:text-[22px] font-roboto text-gray hover:text-black transition-colors',
//       className
//     )}
//     {...props}
//   >
//     {children}
//   </a>
// ));
// Link.displayName = 'Link';  //? Потрібно ?
