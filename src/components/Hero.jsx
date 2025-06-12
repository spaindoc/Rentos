"use client";

import { useTranslations } from "next-intl";
import Button from "./ui/buttons/MainButton";
import PatternBackground from "./PatternBackground";
import Image from "next/image";
import { oswald } from "@/lib/font";

function StatBlock({ value, suffix, title, description, className }) {
  return (
    <div
      className={`${className} text-center md:text-left max-w-[180px] md:max-w-md relative`}
    >
      <div
        className={`flex items-baseline text-[32px] md:text-[77px] justify-start text-black ${oswald.className} leading-normal`}
      >
        <span>{value}</span>
        {suffix && <span className='ml-1'>{suffix}</span>}
      </div>
      <p className='text-base md:text-2xl font-medium text-black tracking-wide mb-2 md:mb-6 text-left'>
        {title}
      </p>
      <p className='text-[gray] text-base md:text-xl leading-relaxed text-left'>
        {description}
      </p>
    </div>
  );
}

export default function Hero() {
  const t = useTranslations("hero");
  const tStats = useTranslations("stats");

  return (
    <section className='relative bg-white overflow-hidden'>
      <PatternBackground />

      <div className='max-w-[1600px] px-4 md:px-0 mx-auto pt-14 md:pb-7'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
          <div className='relative z-10 w-full md:w-auto md:mb-0 flex flex-col items-start'>
            <div className='relative scroll -ml-1'>
              <h1
                className={`${oswald.className} uppercase text-[38px] md:text-7xl bg-white mb-4 md:mb-9 max-w-4xl leading-[1.2] py-1`}
              >
                {t("title")}
              </h1>
            </div>
            <p className='text-lg md:text-xl text-gray max-w-md leading-relaxed mb-8 md:hidden bg-white'>
              {t("subtitle")}
            </p>
            <Button className='ml-auto translate-x-0.5 sm:translate-x-0 sm:ml-0'>
              {t("cta_button")}
            </Button>
          </div>

          <div className='relative bg-white w-full max-w-lg pl-1 hidden md:block'>
            <p className='text-xl text-gray max-w-md leading-relaxed'>
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
        <div className='grid grid-cols-2 md:grid-cols-3 px-4 md:px-0  lg:gap-12 bg-white relative'>
          <StatBlock
            value='15'
            suffix='+'
            title={tStats("years")}
            description={tStats("years_desc")}
          />
          <StatBlock
            value='30 000'
            suffix='+'
            title={tStats("visitors")}
            description={tStats("visitors_desc")}
          />

          <div className='col-span-2 md:col-span-1 mt-9 md:mt-0'>
            <StatBlock
              value='10'
              suffix=''
              title={tStats("projects")}
              description={tStats("projects_desc")}
              className='max-w-md'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
