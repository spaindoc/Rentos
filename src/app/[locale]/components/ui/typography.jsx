import { forwardRef } from 'react';
import {cn} from "@/app/[locale]/lib/utils"

export const Heading1 = forwardRef(({ children, className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      'text-[38px] md:text-[55px] lg:text-[77px] font-oswald',
      className
    )}
    {...props}
  >
    {children}
  </h1>
));
Heading1.displayName = 'Heading1';

export const Heading2 = forwardRef(({ children, className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      'text-[32px] md:text-[48px] lg:text-[62px] font-oswald',
      className
    )}
    {...props}
  >
    {children}
  </h2>
));
Heading2.displayName = 'Heading2';

export const Heading3 = forwardRef(({ children, className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-[32px] lg:text-[34px] font-oswald',
      className
    )}
    {...props}
  >
    {children}
  </h3>
));
Heading3.displayName = 'Heading3';


export const Paragraph = forwardRef(({ children, className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-base md:text-[20px] lg:text-[22px] font-roboto',
      className
    )}
    {...props}
  >
    {children}
  </p>
));
Paragraph.displayName = 'Paragraph';
