"use client";

import { useTranslations } from "next-intl";
import Button from "./ui/buttons/MainButton";
import PatternBackground from "./PatternBackground";
import Image from "next/image";
import NumberFlow, { continuous } from "@number-flow/react";

function StatBlock({ value, suffix, title, description, className = "" }) {
  return (
    <div
      className={`${className} text-center  md:text-left max-w-[488px] relative bg-white`}
    >
      <div className='flex items-baseline text-[32px] md:text-[62px] justify-start text-[var(--black)] font-oswald leading-[1.17]'>
        <span className='flex items-baseline'>
          <NumberFlow value={value} />
          {suffix && <span className='ml-1'>{suffix}</span>}
        </span>
      </div>
      <p className='text-[22px] font-roboto -mt-3 text-[var(--black)]  mb-2 md:mb-6 text-left'>
        {title}
      </p>
      {description && (
        <p className='font-roboto text-[var(--gray)] text-[22px]  leading-[1.45] text-left'>
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
    <section className='relative bg-white overflow-hidden'>
      <PatternBackground />
      <div className='max-w-[1600px] px-4 md:px-6 2xl:px-0 mx-auto pt-14 md:pb-7'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
          <div className='relative z-10 w-full md:w-auto md:mb-0 flex flex-col items-start'>
            <div className='relative  '>
              <h1 className='font-oswald uppercase text-[38px] md:text-[68px] 2xl:text-[77px] bg-white text-[var(--black)] mb-4 md:mb-9 max-w-[934px] w-full leading-[1.29] py-1'>
                {t("title")}
              </h1>
            </div>
            <p className='text-lg md:text-xl text-gray max-w-md leading-relaxed mb-8 md:hidden bg-white font-roboto'>
              {t("subtitle")}
            </p>
            <Button className='ml-auto translate-x-0.5 sm:translate-x-0 sm:ml-0'>
              {t("cta_button")}
            </Button>
          </div>
          <div className='relative bg-white  max-w-lg pl-1 w-1/3 hidden md:block'>
            <p className='text-xl max-w-md leading-relaxed text-[var(--gray)]'>
              {t("subtitle")}
            </p>
          </div>
        </div>
      </div>

      <div className='relative w-full h-[300px] md:h-[580px] mt-8 md:mt-0'>
        <Image
          src='/hero.png'
          alt='Hero'
          fill
          className='object-cover'
          priority
        />
      </div>

      <div className='max-w-[1600px] mx-auto py-16'>
        <div className='grid grid-cols-2 md:grid-cols-3 px-4 md:px-0 lg:gap-9'>
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
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
