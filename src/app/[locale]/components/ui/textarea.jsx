import { forwardRef } from 'react';
import {cn} from '@/app/[locale]/lib/utils'

export const Textarea = forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'w-full max-w-full min-w-0 box-border',
        'border p-2.5 lg:py-2.5 lg:px-5 lg:border-2 border-black',
        'text-base leading-tight resize-none focus:outline-none',
        'bg-white text-[18px] lg:text-[22px] lg:leading-tight',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea'; 