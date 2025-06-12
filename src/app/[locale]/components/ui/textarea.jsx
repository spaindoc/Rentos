import { forwardRef } from 'react';
import {cn} from '@/app/[locale]/lib/utils'

export const Textarea = forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'w-full max-w-full min-w-0 box-border',
        'border-2 py-[18px] px-6 border-black',
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