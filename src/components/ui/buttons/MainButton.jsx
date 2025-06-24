"use client";

import Link from "next/link";

export default function Button({
  href,
  fullWidth = false,
  className = "",
  children,
  ...props
}) {
  // общие стили
  const common = `
    font-oswald uppercase font-normal text-center
    text-lg md:text-[22px]
    py-4 px-8 sm:py-3 sm:px-8 lg:py-2 lg:px-12 2xl:py-3 2xl:px-16

    bg-[var(--black)] text-white
    hover:bg-[var(--blue)] hover:text-[var(--black)]
    transition-colors duration-200 ease-in-out cursor-pointer

    border-2 border-transparent hover:border-[var(--black)]
    ${fullWidth ? "w-full px-0 sm:px-8" : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  if (href) {
    return (
      <Link href={href} className={common} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={common} {...props}>
      {children}
    </button>
  );
}
