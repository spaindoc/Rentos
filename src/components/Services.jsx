"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import { oswald } from "@/lib/font";
import Button from "./ui/buttons/MainButton";

export default function Services() {
  const t = useTranslations("services");

  const items = [
    {
      title: t("investments.title"),
      text: t("investments.text"),
    },
    {
      title: t("management.title"),
      text: t("management.text"),
    },
    {
      title: t("development.title"),
      text: t("development.text"),
    },
  ];

  const ref = useRef(null);
  useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const topClass = "top-20 md:top-40"; // Немного поправил top для консистентности
  const zIndices = ["z-10", "z-20", "z-30"];

  return (
    <section
      id='services'
      className='relative scroll-mt-10 bg-no-repeat bg-cover md:bg-center'
    >
      {/* Размытие фонового изображения через абсолютный слой */}
      <div
        className='absolute inset-0 bg-cover bg-center filter blur-sm pointer-events-none'
        style={{ backgroundImage: "url('/services.webp')" }}
        aria-hidden='true'
      />

      {/* Контент с отступом и центровкой */}
      <div className='relative py-8 2xl:py-16 max-w-[1400px] mx-auto  flex flex-col lg:flex-row md:justify-center md:gap-7 2xl:gap-0 2xl:justify-start w-full '>
        {/* Заголовок слева с sticky */}
        <div className='w-full mb-20 md:mb-0 px-4 md:px-0 md:w-2xs 2xl:w-1/3 h-[120px] md:h-[320px] 2xl:h-[340px] sticky top-40 2xl:top-[180px]'>
          <h2
            className={`${oswald.className} text-left md:-translate-x-12 2xl:translate-0 2xl:mr-12 mb-15 text-[32px] md:text-[54px]`}
          >
            {t("title")}
          </h2>
        </div>

        {/* Колонка с карточками */}
        <div
          ref={ref}
          className='relative w-full lg:max-w-2xl 2xl:h-[130vh]  2xl:pl-0'
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className={`
                sticky ${topClass} ${zIndices[i]}
                border border-black bg-white
                py-6 md:py-11 px-4 h-[320px] 2xl:h-[340px] w-full flex flex-col justify-between md:max-w-xl md:ml-2
                ${i > 0 ? "mt-15" : ""}
              `}
            >
              <div className='flex justify-between items-center mb-11 md:mb-0'>
                <h3 className={`${oswald.className} text-2xl 2xl:text-4xl`}>
                  {item.title}
                </h3>
                <Button
                  className='ml-4 flex-shrink-0'
                  tabIndex={0}
                  aria-label={t("contact")}
                >
                  {t("contact")}
                </Button>
              </div>
              <p className='text-base font-roboto 2xl:text-lg leading-relaxed text-[var(--gray)]'>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
