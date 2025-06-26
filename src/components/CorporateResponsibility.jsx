"use client";

import React from "react";
import { Container, Heading2, Paragraph } from "@/components/ui";
import Image from "next/image";
import PatternBackground from "./PatternBackground";
import AnimatedNumber from "./ui/AnimatedNumber";

const CorporateResponsibility = ({ data, locale }) => {
  if (!data) return null;

  const { title, imageUrl, imageAlt, subSections, stats } = data;

  return (
    <section className='py-13 2xl:py-16 relative scroll-mt-20' id=''>
      <Container className='bg-white relative z-10 -mt-13 pt-13 2xl:-mt-16 2xl:pt-16'>
        <div className='flex flex-col lg:flex-row justify-between items-center pb-[42px] pd:mb-16 lg:pb-10 lg:mb-10 w-f'>
          <div className='flex flex-col items-left text-left lg:text-left lg:block w-full'>
            <Heading2 className='mb-6 md:mb-10 max-w-[300px] lg:max-w-[476px] uppercase leading-10 lg:leading-20'>
              {title[locale]}
            </Heading2>
            <div className='flex flex-col lg:flex-row items-start gap-4 md:gap-6 lg:gap-8'>
              <div className='flex flex-col gap-4 md:gap-6 w-full sm:max-w-[330px] 2xl:max-w-[380px] text-gray 2xl:mr-18'>
                <Paragraph>{subSections.sub1.item1[locale]}</Paragraph>
                <Paragraph>{subSections.sub1.item2[locale]}</Paragraph>
              </div>
              <div className='flex-shrink-0 w-full lg:hidden'>
                <Image
                  src={imageUrl}
                  alt={imageAlt || "Corporate Responsibility"}
                  width={600}
                  height={450}
                  className='w-full sm:max-w-[450px] xs:max-h-[300px] sm:max-h-[450px] object-cover border-black'
                />
              </div>
              <div className='flex flex-col gap-4 md:gap-6 sm:max-w-[330px] 2xl:max-w-[380px] text-gray'>
                <Paragraph>{subSections.sub2.item1[locale]}</Paragraph>
                <Paragraph>{subSections.sub2.item2[locale]}</Paragraph>
              </div>
            </div>
          </div>
          <div className='flex-shrink-0 w-full sm:w-[334px] 2xl:w-[440px] h-fit 2xl:h-[430px] hidden lg:block'>
            <Image
              src={imageUrl}
              alt={imageAlt || "Corporate Responsibility"}
              width={600}
              height={430}
              className='w-full h-full object-cover border-2 border-black'
            />
          </div>
        </div>
      </Container>

      <div className='text-left max-w-[1080px] 2xl:max-w-[1400px] mx-auto px-4 sm:px-0'>
        <PatternBackground />
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pt-8 sm:pt-0'>
          {/* Item 1 */}
          <div className='text-left bg-white relative justify-self-start md:justify-self-end -ml-0.5 sm:-ml-0 max-w-[480px]'>
            <Heading2 className='text-[46px]'>
              <AnimatedNumber
                value={parseFloat(stats.item1.value.replace(",", "."))}
                locales='en-US'
                format={{
                  useGrouping: false,
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 1,
                }}
              />
            </Heading2>
            <Paragraph className='-mt-2 2xl:mb-6'>
              {stats.item1.suffix[locale]}
            </Paragraph>
            <Paragraph className='mt-4'>
              {stats.item1.description[locale]}
            </Paragraph>
          </div>

          {/* Item 2 */}
          <div className='text-left bg-white relative justify-self-end md:justify-self-start -ml-3 sm:-ml-0 max-w-[480px]'>
            <Heading2 className='text-[46px]'>
              <AnimatedNumber
                value={parseFloat(stats.item2.value.replace(/\s/g, ""))}
                locales='uk-UA'
                format={{
                  useGrouping: true,
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }}
              />
            </Heading2>
            <Paragraph className='-mt-2 2xl:mb-6'>
              {stats.item2.suffix[locale]}
            </Paragraph>
            <Paragraph className='mt-4'>
              {stats.item2.description[locale]}
            </Paragraph>
          </div>

          {/* Item 3 */}
          <div className='text-left bg-white relative col-span-2 lg:col-span-1 -ml-0.5 sm:-ml-0 2xl:ml-3 mt-12 md:mt-0'>
            <Heading2 className='text-[46px]'>
              <AnimatedNumber
                value={parseFloat(stats.item3.value.replace(",", "."))}
                locales='en-US'
                format={{
                  useGrouping: false,
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }}
              />
            </Heading2>
            <Paragraph className='-mt-2 2xl:mb-6'>
              {stats.item3.suffix[locale]}
            </Paragraph>
            <Paragraph className='mt-4'>
              {stats.item3.description[locale]}
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateResponsibility;
