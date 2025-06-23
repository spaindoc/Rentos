import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Container = forwardRef(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        " mx-auto px-4 md:px-0 box-border max-w-[1080px] 2xl:max-w-[1400px] ",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
Container.displayName = "Container";

export const Section = ({
  children,
  className,
  as: Component = "section",
  size = "default", // Чесно хз як тут норм реалізувати, дуже кумарять падінги(
  ...props
}) => {
  const sizeClasses = {
    default: "py-12 lg:py-16",
    small: "py-8 lg:py-8",
    large: "py-16 lg:py-24",
  };

  return (
    <Component className={cn(sizeClasses[size], className)} {...props}>
      {children}
    </Component>
  );
};
