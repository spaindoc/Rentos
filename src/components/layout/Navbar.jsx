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
  const addT = useTranslations("Footer");
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
        fixed top-0 left-0 right-0 py-
      `}
    >
      <div className='2xl:max-w-[1400px] mx-auto max-w-[1080px] 2xl:px-0 2xl:py-10 py-4 flex items-center justify-between 2xl:justify-center relative'>
        {/* Logo */}
        <Link href='/' className='flex-1 w-1/3 items-center 2xl:absolute 2xl:left-0'>
          <Image
            src='/logo.svg'
            alt='Logo'
            width={100}
            height={100}
            className='w-[84px] h-[84px]'
          />
        </Link>

        {/* Desktop nav */}
        <div className='hidden md:flex items-center justify-center flex-1 2xl:max-w-[486px] 2xl:w-full 2xl:pl-12 2xl:space-x-2'>
          {navigationItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className='
                text-[15px] 2xl:text-base  text-black uppercase
                px-1 py-1
                outline outline-transparent outline-offset-2
                transition-all duration-200 tracking-tight
                hover:outline-black
              '
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        {/* Language switch + Contact button */}
        <div className='hidden md:flex items-center ml-5 space-x-5 2xl:absolute xl:right-0 2xl:w-[360px] md:justify-between'>
          <button
            onClick={handleLanguageSwitch}
            className='
              flex items-center gap-1.5 
              text-base  text-black
              px-2 py-1
              outline outline-transparent outline-offset-2
              transition-all duration-200 hover:outline-black
              cursor-pointer
            '
          >
            <GlobeIcon className='w-6 h-6 text-black' />
            {t("language")}
          </button>
          <Button
            className='px-4 py-2 transition-all ml-3 duration-200 hover:outline-black'
            href='#contacts'
          >
            {t("contact_button")}
          </Button>
        </div>

        {/* Mobile burger toggle */}
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

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key='mobileMenu'
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className='fixed inset-0 bg-black text-white z-30 flex flex-col overflow-y-auto'
          >
            <div className='flex items-center justify-between px-4 py-7'>
              <Link href='/' className='flex items-center'>
                <Image src='/logo.png' alt='Logo' width={60} height={60} />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className='focus:outline-none'
              >
                <svg
                  width='800px'
                  height='800px'
                  viewBox='0 0 24 24'
                  fill='none'
                  className='w-11 h-11 '
                >
                  <path
                    d='M6 6L18 18'
                    stroke='currentColor'
                    stroke-linecap='round'
                  />
                  <path
                    d='M18 6L6.00001 18'
                    stroke='currentColor'
                    stroke-linecap='round'
                  />
                </svg>
              </button>
            </div>

            <div className='flex'>
              <nav className='flex-1 flex flex-col px-4 space-y-11'>
                {navigationItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xl ${oswald.className}  text-white uppercase`}
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </nav>
              <div className='px-4 mb-6'>
                <button
                  onClick={handleLanguageSwitch}
                  className={`${oswald.className} flex items-center gap-2 text-lg font-medium`}
                >
                  <GlobeIcon className='w-6 h-6 text-white' />
                  {t("language")}
                </button>
              </div>
            </div>

            <hr className='border-gray-700 mx-4 my-11' />

            <div className='px-4 space-y-6 mt-6'>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 p-3 border border-white flex items-center justify-center'>
                  <Image
                    src='/location.svg'
                    alt='Location'
                    width={24}
                    height={24}
                  />
                </div>
                <div className='text-base leading-snug'>
                  {addT("contactInfo.address_1")}
                  <br />
                  {addT("contactInfo.address_2")}
                </div>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 border border-white flex items-center justify-center'>
                  <Image src='/phone.svg' alt='Phone' width={24} height={24} />
                </div>
                <Link href='tel:+380991168518' className='text-base'>
                  +380 99 116 85 18
                </Link>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 border border-white flex items-center justify-center'>
                  <Image src='/mail.svg' alt='Email' width={24} height={24} />
                </div>
                <Link href='mailto:rentos.ua@gmail.com' className='text-base'>
                  rentos.ua@gmail.com
                </Link>
              </div>
            </div>

            <div className='flex justify-between max-w-56 px-4 py-6'>
              <Link
                href='https://instagram.com/yourprofile'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/instagram.svg'
                  alt='Instagram'
                  width={44}
                  height={44}
                />
              </Link>
              <Link
                href='https://facebook.com/yourpage'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/facebook.svg'
                  alt='Facebook'
                  width={44}
                  height={44}
                  className='rounded-md'
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
