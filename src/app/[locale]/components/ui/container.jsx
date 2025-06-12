import { forwardRef } from 'react';
import {cn} from "@/app/[locale]/lib/utils"

export const Container = forwardRef(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'container mx-auto px-4 box-border max-w-[97.5rem]', // Трохи хардкоду куди без нього
      className
    )}
    {...props}
  >
    {children}
  </div>
));
Container.displayName = 'Container';

export const Section = forwardRef(({ children, className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      'py-12 md:py-16 lg:py-20',
      className
    )}
    {...props}
  >
    {children}
  </section>
));
Section.displayName = 'Section'; 