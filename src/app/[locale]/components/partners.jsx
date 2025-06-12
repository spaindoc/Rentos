'use client';

import { useTranslations } from "next-intl";
import { Container, Heading2, InfiniteSlider } from './ui';
import Image from 'next/image';
import logo_1 from "@/../public/logo_1.png";
import logo_2 from "@/../public/logo_2.png";
import logo_3 from "@/../public/logo_3.png";
import logo_4 from "@/../public/logo_4.png";
import logo_5 from "@/../public/logo_5.png";

const partners = [
  logo_1, logo_2, logo_3, logo_4, logo_5
]; // потім зробимо з 

const Partners = () => {
  const t = useTranslations();

  const renderPartner = (partner, index) => ( // Наші спонсори які будуть рендеритися
    <Image
      src={partner}
      alt={`logo`}
      fill
      className="object-contain"
    />
  );

  return (
    <section className="py-10 bg-light-blue">
      <Container>
        <div className="flex flex-col items-start gap-8">
          <Heading2 className="text-black w-full text-center">
            {t('Partners.title')}
          </Heading2>
          <div className="flex-1 overflow-hidden flex justify-center items-center w-full">
            <InfiniteSlider
              items={partners}
              renderItem={renderPartner}
              itemClassName="max-w-[158px] flex-none basis-1/4 h-[138px] lg:w-[220px] lg:h-[200px] relative cursor-pointer"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partners;