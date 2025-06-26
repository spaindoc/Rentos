"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { oswald } from "@/lib/font";
import Button from "./ui/buttons/MainButton";

export default function Services({ data, locale }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const items = data?.items || [];
  const CARD_HEADER_HEIGHT = 120; // px

  return (
    <section
      id='services'
      className='relative scroll-mt-10 bg-no-repeat bg-cover md:bg-center'
    >
      {/* фон */}
      <div
        className={`
          absolute inset-0 bg-cover filter blur-sm pointer-events-none
          bg-[url('/mobile-bg-services.png')] bg-[position:50%_50%]
          md:bg-[url('/services.webp')] md:bg-center
        `}
        aria-hidden='true'
      />

      <div className='relative py-6 2xl:py-12 max-w-[1080px] 2xl:max-w-[1400px] mx-auto flex flex-col lg:flex-row md:justify-center md:gap-7 2xl:gap-0 2xl:justify-start w-full'>
        {/* Заголовок */}
        <div
          className={`
            sticky
            top-[140px]    /* старое значение для мобильных */
            md:top-[380px]              /* сместили ниже топов 2 и 3 карточек */
            w-full mb-8 md:mb-0
            px-4 md:px-0
            md:w-2xs 2xl:w-1/3
            h-auto md:h-[320px] 2xl:h-[340px]
            mt-8 md:mt-0               /* добавили отступ сверху только на мобилках */
          `}
        >
          <h2
            className={`
              ${oswald.className}
              text-right md:text-left uppercase
              md:-translate-x-12 2xl:translate-0 2xl:mr-12
              mb-8 md:mb-15
              text-[32px] md:text-[54px]
            `}
          >
            {locale === "en" ? "Services" : "Послуги"}
          </h2>
        </div>

        {/* Колонка карточек */}
        <div ref={ref} className='relative w-full lg:max-w-2xl 2xl:pl-0'>
          {items.map((item, i) => {
            const mobileOffset = 220 + i * CARD_HEADER_HEIGHT;
            const desktopOffset = 180 + i * CARD_HEADER_HEIGHT;
            const zIndex = 10 + i * 10;

            return (
              <motion.div
                key={item.title[locale]}
                style={{
                  "--mobile-top": `${mobileOffset}px`,
                  "--desktop-top": `${desktopOffset}px`,
                  zIndex,
                }}
                className={`
                  sticky
                  top-[var(--mobile-top)]
                  md:top-[var(--desktop-top)]
                  bg-white h-auto mb-5 last:mb-0
                  md:h-[256px] 2xl:h-[340px] md:mb-0
                  border border-black
                  w-full md:w-[560px] 2xl:ml-8
                  py-6 md:py-11 px-4
                  flex flex-col justify-between
                  ${i > 0 ? "mt-4 md:mt-6" : ""}
                `}
              >
                <div className='flex justify-between items-center mb-11 md:mb-0'>
                  <h3 className={`${oswald.className} text-2xl 2xl:text-4xl`}>
                    {item.title[locale]}
                  </h3>
                  <Button
                    className='ml-4 flex-shrink-0'
                    aria-label={locale === "uk" ? "Зв'язатися" : "Contact"}
                    href='#contacts'
                  >
                    {locale === "en" ? "Contact" : "Зв'язатися"}
                  </Button>
                </div>
                <p className='text-base font-roboto 2xl:text-lg leading-relaxed text-[var(--gray)]'>
                  {item.text[locale]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
