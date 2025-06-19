"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import Button from "../ui/buttons/MainButton";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import GlobeIcon from "../ui/GlobeIcon";
import { oswald } from "@/lib/font";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
    { key: "projects", href: "#projects" },
    { key: "news", href: "#news" },
    { key: "contacts", href: "#contacts" },
  ];

  const handleLanguageSwitch = () => {
    router.replace(pathname, { locale: locale === "uk" ? "en" : "uk" });
  };

  return (
    <nav
      className={`
        bg-white px-4 z-50 transition-all duration-300
        ${isSticky ? "fixed top-0 left-0 right-0 shadow-md" : "relative"}
      `}
    >
      <div className='2xl:max-w-[1400px] mx-auto 2xl:px-0 my-3 h-12 xl:h-24 flex items-center justify-between xl:justify-center relative'>
        {/* Logo */}
        <Link href='/' className='flex items-center xl:absolute xl:left-0'>
          <Image
            src='/logo.svg'
            alt='Logo'
            width={100}
            height={100}
            className='w-[86px] h-[86px]'
          />
        </Link>

        {/* Desktop nav */}
        <div className='hidden xl:flex items-center space-x-4 pl-8'>
          {navigationItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className='text-lg text-black uppercase px-2 py-1 transition-all duration-200 tracking-tight hover:underline'
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        {/* Lang + Контакт */}
        <div className='hidden xl:flex items-center space-x-4 xl:absolute xl:right-0'>
          <button
            onClick={handleLanguageSwitch}
            className='flex items-center gap-1.5 text-lg px-2 py-1 hover:underline'
          >
            <GlobeIcon className='w-6 h-6' /> {t("language")}
          </button>
          <Button className='px-4 py-2 transition-all duration-200 hover:outline-black'>
            {t("contact_button")}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className='xl:hidden text-black focus:outline-none'
        >
          {isMobileMenuOpen ? (
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <Image src='/burger.svg' alt='menu' width={40} height={40} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key='mobileMenu'
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className='fixed inset-0 bg-black text-white z-30 flex flex-col'
          >
            {/* … ваш код мобильного меню, но с теми же href */}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
