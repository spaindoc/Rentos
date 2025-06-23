"use client";
import React from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { Heading2, Paragraph } from "../ui";

const About_temp = () => {
  const t = useTranslations("AboutSection");

  return (
    <section className=' max-w-[1080px] 2xl:max-w-[1400px] w-full mx-auto bg-white text-[var(--gray)] py-2 xl:py-25 px-4 md:px-0'>
      <div className='mx-auto flex flex-col lg:flex-row items-start gap-10 2xl:gap-15'>
        <div className='hidden lg:block flex-shrink-0 w-[334px] 2xl:w-[416px]'>
          <Image
            src='/about.jpg'
            alt='about_us'
            className='object-cover w-full h-full border-2 border-black'
            priority
            sizes='(max-width: 1024px) 100vw, 420px'
            width={420}
            height={420}
          />
        </div>

        <div className='flex-1 flex flex-col 2xl:gap-8'>
          <Heading2 className='  uppercase text-[32px] md:text-[54px]'>
            {t("title")}
          </Heading2>
          <div className='flex flex-col md:mt-11 lg:flex-row gap-8 lg:gap-12'>
            <div className='flex-1 flex flex-col gap-4'>
              <Paragraph>{t("description.part1")}</Paragraph>
              <ul className='list-disc pl-5 text-base md:text-[16.5px] 2xl:text-lg font-roboto space-y-1'>
                <li>{t("list.management")}</li>
                <li>{t("list.development")}</li>
                <li>{t("list.consulting")}</li>
                <li>{t("list.investment")}</li>
              </ul>
            </div>

            <div className='block lg:hidden md:mx-auto w-full max-w-[450px]'>
              <Image
                src='/about.jpg'
                alt='about_us'
                className='object-cover w-full h-full border-2 border-black'
                priority
                sizes='(max-width: 640px) 90vw, 340px'
                width={420}
                height={420}
              />
            </div>

            <div className='flex-1 flex flex-col gap-4'>
              <Paragraph>{t("description.part2")}</Paragraph>
              <Paragraph>{t("description.objects")}</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_temp;
