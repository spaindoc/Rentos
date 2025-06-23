"use client";
import React from "react";
import { Container, Heading2, Paragraph } from "@/components/ui";
import { useTranslations } from "next-intl";
import Image from "next/image";
import img from "@/../public/about.jpg";
import PatternBackground from "./PatternBackground";

const CorporateResponsibility = () => {
  const t = useTranslations("corporateResponsibility");

  return (
    <section className='py-13 2xl:py-16 relative scroll-mt-20' id=''>
      <Container className='bg-white relative z-10 -mt-13 pt-13 2xl:-mt-16 2xl:pt-16'>
        <div className='flex flex-col lg:flex-row justify-between items-center pb-[42px] pd:mb-16 lg:pb-10 lg:mb-10'>
          <div className='flex flex-col items-left text-left lg:text-left lg:block'>
            <Heading2 className='mb-6 md:mb-10  max-w-[300px] lg:max-w-[476px] uppercase leading-10 lg:leading-20 '>
              {t("title")}
            </Heading2>
            <div className='flex flex-col lg:flex-row items-start gap-4 md:gap-6 lg:gap-8'>
              <div className='flex flex-col gap-4 md:gap-6 w-full max-w-[330px] 2xl:max-w-[380px] text-gray 2xl:mr-18'>
                <Paragraph>{t("sub_1.item_1")}</Paragraph>
                <Paragraph>{t("sub_1.item_2")}</Paragraph>
              </div>
              <div className='flex-shrink-0 w-full lg:hidden '>
                <Image
                  src={img}
                  alt='Corporate Responsibility'
                  className='w-full  sm:max-w-[450px] xs:max-h-[300px] sm:max-h-[450px] lg:h-full object-cover border-black'
                />
              </div>
              <div className='flex flex-col gap-4 md:gap-6 max-w-[330px] 2xl:max-w-[380px] text-gray '>
                <Paragraph>{t("sub_2.item_1")}</Paragraph>
                <Paragraph>{t("sub_2.item_2")}</Paragraph>
              </div>
            </div>
          </div>
          <div className='flex-shrink-0 w-full sm:w-[334px] 2xl:w-[440px] h-fit 2xl:h-[430px] hidden lg:block '>
            <Image
              src={img}
              alt='Corporate Responsibility'
              className='w-full h-full object-cover border-2 border-black'
            />
          </div>
        </div>
      </Container>
      <div className='text-left max-w-[1080px] 2xl:max-w-[1400px] mx-auto px-4 sm:px-0'>
        <PatternBackground />
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 '>
          <div className='text-left bg-white relative justify-self-start md:justify-self-auto max-w-[480px]'>
            <Heading2 className='text-[46px]'>
              {t(`items.item_1.title`)}
            </Heading2>
            <Paragraph className='mb-2 2xl:mb-6'>
              {t(`items.item_1.title_after`)}
            </Paragraph>
            <Paragraph className=''>{t(`items.item_1.subtitle`)}</Paragraph>
          </div>

          <div className='text-left bg-white relative justify-self-end md:justify-self-auto  max-w-[480px]'>
            <Heading2 className='text-[46px]'>
              {t(`items.item_2.title`)}
            </Heading2>
            <Paragraph className='mb-2 2xl:mb-6'>
              {t(`items.item_2.title_after`)}
            </Paragraph>
            <Paragraph className=''>{t(`items.item_2.subtitle`)}</Paragraph>
          </div>
          <div className='text-left bg-white relative col-span-2 lg:col-span-1 mt-12 md:mt-0'>
            <Heading2 className='text-[46px]'>
              {t(`items.item_3.title`)}
            </Heading2>
            <Paragraph className='mb-2 2xl:mb-6'>
              {t(`items.item_3.title_after`)}
            </Paragraph>
            <Paragraph className=''>{t(`items.item_3.subtitle`)}</Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateResponsibility;
