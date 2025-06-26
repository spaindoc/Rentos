"use client";

import { useTranslations } from "next-intl";
import { Container, Heading2, Slider } from "./ui";
import Image from "next/image";

export default function Partners({ data }) {
  const t = useTranslations();

  return (
    <section id='partners' className='bg-light-blue pt-10 md:pt-23 scroll-mt-20'>
      <Container>
        <div className='flex flex-col items-start gap-4 lg:gap-8'>
          <Heading2 className='mr-0  text-black w-1/2 md:w-1/3  2xl:pl-9 ml-auto md:mx-auto text-left mb-8'>
            {t("Partners.title")}
          </Heading2>
          <div className='flex-1 overflow-hidden flex justify-center items-center w-full'>
            <Slider
              items={data.images}
              renderItem={(partner, index) => (
                <Image
                  src={partner.imageUrl}
                  alt={partner.alt || `Partner ${index + 1}`}
                  fill
                  className='object-contain'
                />
              )}
              itemClassName='max-w-[165px] flex-none basis-1/4 h-[138px] relative cursor-pointer'
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
