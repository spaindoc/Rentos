import { oswald } from "@/lib/font";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`
       font-oswald
        uppercase font-normal text-base sm:text-3xl 
        py-4 px-13 sm:py-3 sm:px-16 
        bg-[var(--black)] text-white 
        hover:bg-[var(--blue)] hover:text-[var(--black)]
        transition-colors duration-200 ease-in-out cursor-pointer border-2 border-transparent hover:border-[var(--black)]
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
