'use client';
import React from 'react';
import Image from "next/image";
import aboutImage from "@/../public/About_img.jpg";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations('AboutSection');

  return (
    <section className="w-full px-2 bg-white text-black py-10 lg:py-20">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        <div className="hidden lg:block flex-shrink-0 w-[334px] xl:w-[496px]">
          <Image
            src={aboutImage}
            alt="about_us"
            className="object-cover w-full h-auto"
            priority
            sizes="(max-width: 1024px) 100vw, 420px"
          />
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-5xl lg:text-7xl font-bold mb-4 lg:mb-10">
            {t('title')}
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-base md:text-lg">{t('description.part1')}</p>
              <ul className="list-disc pl-5 text-base md:text-xl space-y-1">
                <li>{t('list.management')}</li>
                <li>{t('list.development')}</li>
                <li>{t('list.consulting')}</li>
                <li>{t('list.investment')}</li>
              </ul>
            </div>

            <div className="block lg:hidden mx-auto w-full max-w-[340px] md:max-w-[450px]">
              <Image
                src={aboutImage}
                alt="about_us"
                className="object-cover w-full h-auto"
                priority
                sizes="(max-width: 640px) 90vw, 340px"
              />
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <p className="text-base md:text-lg">{t('description.part2')}</p>
              <p className="text-base md:text-lg">{t('description.objects')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
