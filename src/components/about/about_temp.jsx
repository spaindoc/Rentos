"use client";
import React from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { Heading2, Paragraph } from "../ui";

const About_temp = () => {
  const t = useTranslations("AboutSection");

  return (
    <section className='max-w-[1600px] w-full mx-auto bg-white text-[var(--gray)] py-10 2xl:py-32 px-4 '>
      <div className='mx-auto flex flex-col lg:flex-row items-start gap-10'>
        <div className='hidden lg:block flex-shrink-0 w-[334px] xl:w-[496px]'>
          <Image
            src='/About_img.jpg'
            alt='about_us'
            className='object-cover w-full h-auto'
            priority
            sizes='(max-width: 1024px) 100vw, 420px'
            width={420}
            height={420}
          />
        </div>

        <div className='flex-1 flex flex-col gap-8'>
          <Heading2 className=' mb-4 uppercase text-[32px] md:text-[62px]'>
            {t("title")}
          </Heading2>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
            <div className='flex-1 flex flex-col gap-4'>
              <Paragraph>{t("description.part1")}</Paragraph>
              <ul className='list-disc pl-5 text-base md:text-base 2xl:text-[22px] font-roboto space-y-1'>
                <li>{t("list.management")}</li>
                <li>{t("list.development")}</li>
                <li>{t("list.consulting")}</li>
                <li>{t("list.investment")}</li>
              </ul>
            </div>

            <div className='block lg:hidden mx-auto w-full max-w-[340px] md:max-w-[450px]'>
              <Image
                src='/About_img.jpg'
                alt='about_us'
                className='object-cover w-full h-auto'
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
