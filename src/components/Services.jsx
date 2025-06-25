"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { oswald } from "@/lib/font";
import Button from "./ui/buttons/MainButton";

export default function Services({ data, locale }) {
  const ref = useRef(null);
  useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const zIndices = ["z-10", "z-20", "z-30"];

  // Используем данные из props, если есть, иначе fallback пустой массив
  const items = data?.items || [];

  return (
    <section
      id='services'
      className='relative scroll-mt-10 bg-no-repeat bg-cover md:bg-center'
    >
      {/* Фоновое размытие */}
      <div
        className='absolute inset-0 bg-cover bg-center filter blur-sm pointer-events-none'
        style={{ backgroundImage: "url('/services.webp')" }}
        aria-hidden='true'
      />

      <div className='relative py-8 2xl:py-16 max-w-[1400px] mx-auto flex flex-col lg:flex-row md:justify-center md:gap-7 2xl:gap-0 2xl:justify-start w-full'>
        {/* Заголовок секции */}
        <div
          className={`
            sticky
            top-[calc(92px+20px)]
            md:top-40
            z-40 bg-white md:bg-transparent
            w-full mb-5 md:mb-0
            px-4 md:px-0
            md:w-2xs 2xl:w-1/3
            h-auto md:h-[320px] 2xl:h-[340px]
          `}
        >
          <h2
            className={`${oswald.className}
              text-right md:text-left uppercase
              md:-translate-x-12 2xl:translate-0 2xl:mr-12
              mb-5 md:mb-15
              text-[32px] md:text-[54px]`}
          >
            {locale === "en" ? "Services" : "Послуги"}
          </h2>
        </div>

        {/* Колонка карточек */}
        <div ref={ref} className='relative w-full lg:max-w-2xl 2xl:pl-0'>
          {items.map((item, i) => (
            <motion.div
              key={item.title[locale]}
              className={`
                bg-white
                h-auto mb-5 last:mb-0
                md:h-[320px] 2xl:h-[340px] md:mb-0
                border border-black
                w-full md:w-[560px] md:mx-auto
                py-6 md:py-11 px-4
                flex flex-col justify-between
                sticky
                top-[143px]
                md:top-40
                ${zIndices[i] || ""}
                ${i > 0 ? "md:mt-15" : ""}
              `}
            >
              <div className='flex justify-between items-center mb-11 md:mb-0'>
                <h3 className={`${oswald.className} text-2xl 2xl:text-4xl`}>
                  {item.title[locale]}
                </h3>
                <Button
                  className='ml-4 flex-shrink-0'
                  aria-label={locale === "uk" ? "Зв’язатися" : "Contact"}
                  href={"#contacts"}
                >
                  {locale === "en" ? "Contact" : "Зв’язатися"}
                </Button>
              </div>
              <p className='text-base font-roboto 2xl:text-lg leading-relaxed text-[var(--gray)]'>
                {item.text[locale]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
