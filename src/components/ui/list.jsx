import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const ListItem = forwardRef(({ children, className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("text-base lg:text-lg font-roboto", className)}
    {...props}
  >
    {children}
  </li>
));
ListItem.displayName = "ListItem";

export const List = forwardRef(({ children, className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("list-disc pl-4 space-y-1 text-base ", className)}
    {...props}
  >
    {children}
  </ul>
));
List.displayName = "List";
