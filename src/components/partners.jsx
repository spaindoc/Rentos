"use client";

import { useTranslations } from "next-intl";
import { Container, Heading2 } from "./ui";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import logo_1 from "@/../public/logo_1.png";
import logo_2 from "@/../public/logo_2.png";
import logo_3 from "@/../public/logo_3.png";
import logo_4 from "@/../public/logo_4.png";
import logo_5 from "@/../public/logo_5.png";

// дані для прикладу ? потім зробимо апішечку ?
const partners = [logo_1, logo_2, logo_3, logo_4, logo_5];

const Partners = () => {
  const t = useTranslations();

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 1500,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <section className='py-10 bg-light-blue'>
      <Container>
        <div className='flex flex-col lg:flex-row items-start gap-8'>
          <div className='w-full text-center lg:w-fit lg:text-start lg:h-full lg:my-auto'>
            <Heading2 className='text-black'>{t("Partners.title")}</Heading2>
          </div>

          <div className='flex-1 overflow-hidden flex justify-center items-center w-full'>
            <div className='embla lg:w-4/6 w-5/6 mx-auto' ref={emblaRef}>
              <div className='embla__container flex gap-10'>
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className='embla__slide shrink-0 max-w-[158px] flex-none basis-1/4 h-[138px]
                                lg:w-[220px] lg:h-[200px] relative'
                  >
                    <Image
                      src={partner}
                      alt={`logo`} //? ось тут добавимо ще партнерів ім'я теж апішка потрібна(
                      fill
                      className='object-contain '
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
