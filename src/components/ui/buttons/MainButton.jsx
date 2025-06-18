export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`
        font-oswald uppercase font-normal 
 text-base 2xl:text-xl
        py-2 px-6 sm:py-3 sm:px-8 lg:py-4 lg:px-12 xl:py-4 xl:px-13 2xl:py-3 2xl:px-16
        bg-[var(--black)] text-white 
        hover:bg-[var(--blue)] hover:text-[var(--black)]
        transition-colors duration-200 ease-in-out cursor-pointer 
        border-2 border-transparent hover:border-[var(--black)]
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
