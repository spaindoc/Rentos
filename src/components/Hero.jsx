"use client";

import { useTranslations } from "next-intl";
import Button from "./ui/buttons/MainButton";
import PatternBackground from "./PatternBackground";
import Image from "next/image";
import NumberFlow, { continuous } from "@number-flow/react";
import AnimatedNumber from "./ui/AnimatedNumber";

function StatBlock({
  value,
  suffix,
  title,
  description,
  delay = 0,
  className = "",
}) {
  return (
    <div
      className={`${className} text-center  md:text-left  relative bg-white`}
    >
      <div className='flex items-baseline text-[32px] md:text-[54px] justify-start text-[var(--black)] font-oswald leading-[1.17] '>
        <span className='flex items-baseline'>
          <AnimatedNumber value={value} delay={delay} />
          {suffix && <span className='ml-1'>{suffix}</span>}
        </span>
      </div>
      <p className='text-base font-roboto -mt-3 text-[var(--black)]  mb-2 md:mb-6 text-left'>
        {title}
      </p>
      {description && (
        <p className='font-roboto text-[var(--gray)] text-base  leading-[1.45] text-left max-w-[366px]'>
          {description}
        </p>
      )}
    </div>
  );
}

export default function Hero({ data, locale }) {
  const t = useTranslations("hero");
  const tStats = useTranslations("stats");

  const keys = ["years", "visitors", "projects"];
  const suffix = { years: "+", visitors: "+", projects: "" };
  const blocks = data?.statBlocks || [];

  return (
    <section className='relative bg-white overflow-hidden pt-28'>
      <PatternBackground />
      <div className='2xl:max-w-[1400px]  max-w-[1080px] px-4 md:px-0  mx-auto pt-10 md:pb-7'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
          <div className='relative z-10 w-full md:w-auto md:mb-0 flex flex-col items-start'>
            <div className='relative  '>
              <h1 className='font-oswald uppercase text-[38px] md:text-[57px] 2xl:text-[68px] bg-white text-[var(--black)] mb-4 md:mb-9 max-w-[701px] 2xl:max-w-[860px] w-full leading-[1.29] py-1'>
                {t("title")}
              </h1>
            </div>
            <p className='text-[16.5px] 2xl:text-xl text-gray max-w-md leading-relaxed mb-8 md:hidden bg-white font-roboto'>
              {t("subtitle")}
            </p>
            <Button className='ml-auto translate-x-0.5 sm:translate-x-0 sm:ml-0'>
              {t("cta_button")}
            </Button>
          </div>
          <div className='relative bg-white pl-6 2xl:pl-8 w-1/3 hidden md:block'>
            <p className='text-[16.5px] 2xl:text-xl max-w-sm leading-relaxed text-[var(--gray)]'>
              {t("subtitle")}
            </p>
          </div>
        </div>
      </div>

      <div className='relative w-full h-[300px] md:h-[440px] 2xl:h-[580px] mt-8 md:mt-0'>
        <Image
          src='/hero.webp'
          alt='Hero'
          fill
          className='object-cover'
          priority
        />
      </div>

      <div className='max-w-[1080px] 2xl:max-w-[1400px] mx-auto py-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 px-4 md:px-0 md:gap-9 2xl:gap-12 bg-white'>
          {blocks.map((block, idx) => {
            const key = keys[idx] ?? null;
            if (!key) return null;

            return (
              <StatBlock
                key={key}
                value={block.value}
                suffix={suffix[key]}
                title={tStats(key)}
                description={tStats(`${key}_desc`)}
                delay={key * 50}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
