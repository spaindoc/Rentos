import { forwardRef } from 'react';
import {cn} from '@/lib/utils'

export const ListItem = forwardRef(({ children, className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(
      'text-base md:text-xl lg:text-[22px] font-roboto',
      className
    )}
    {...props}
  >
    {children}
  </li>
));
ListItem.displayName = 'ListItem';

export const List = forwardRef(({ children, className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      'list-disc pl-4 space-y-2',
      className
    )}
    {...props}
  >
    {children}
  </ul>
));
List.displayName = 'List';