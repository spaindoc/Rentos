"use client";

import { useTranslations } from "next-intl";
import { Container, Heading2, Slider, Section } from "./ui";
import Image from "next/image";

// партнери тут
const partnerImages = [
  "/icons/partner_1.png",
  "/icons/partner_2.png",
  "/icons/partner_3.png",
  "/icons/partner_4.png",
  "/icons/partner_5.png",
  "/icons/partner_6.png",
  "/icons/partner_7.png",
  "/icons/partner_8.png",
  "/icons/partner_9.png",
  "/icons/partner_10.png",
  "/icons/partner_11.png",
  "/icons/partner_12.png",
  "/icons/partner_13.png",
  "/icons/partner_14.png",
  "/icons/partner_15.png",
  "/icons/partner_16.png",
  "/icons/partner_17.png",
];

const Partners = () => {
  const t = useTranslations();

  const renderPartner = (partner, index) => (
    <Image
      src={partner}
      alt={`Partner ${index + 1}`}
      fill
      className='object-contain '
    />
  );

  return (
    <Section className='bg-light-blue scroll-mt-20' id='partners'>
      <Container>
        <div className='flex flex-col items-start gap-4 lg:gap-8'>
          <Heading2 className='text-black md:w-1/3 pl-2 2xl:pl-9 ml-auto md:mx-auto text-left mb-8 '>
            {t("Partners.title")}
          </Heading2>
          <div className='flex-1 overflow-hidden flex justify-center items-center w-full'>
            <Slider
              items={partnerImages}
              renderItem={renderPartner}
              itemClassName=' max-w-[158px] lg:max-w-[220px] flex-none basis-1/4 h-[138px] lg:w-[220px] lg:h-[200px] relative cursor-pointer'
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Partners;
