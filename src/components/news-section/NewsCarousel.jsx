// components/news-section/NewsCarousel.jsx
"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ArrowLeftButton from "../ui/buttons/ArrowLeftButton";
import ArrowRightButton from "../ui/buttons/ArrowRightButton";
import Image from "next/image";
import Link from "next/link";
import { Button, Heading2 } from "../ui";
import styles from "./NewsCarousel.module.css";
import { useTranslations, useLocale } from "next-intl";

export default function NewsCarousel({ newsItems }) {
  const t = useTranslations("news");
  const locale = useLocale();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    []
  );

  const handleScrollPrev = useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const handleScrollNext = useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  if (!newsItems?.length) return null;

  return (
    <section
      id='news'
      className='md:py-16 max-w-[1080px] 2xl:max-w-[1400px] mx-auto px-2 sm:px-0 scroll-mt-20'
    >
      {/* Header */}
      <div className='flex items-center justify-between mb-7 md:mb-25 mx-4 md:mx-0'>
        <Heading2 className='text-black md:w-1/3 md:pl-21 md:mx-auto text-left md:mb-8'>
          {t("heading")}
        </Heading2>
        <div className='flex gap-4 md:gap-10'>
          <ArrowLeftButton
            onClick={handleScrollPrev}
            className='transition-opacity w-13 h-13'
            aria-label={t("read_more_aria", { caption: "" })}
          />
          <ArrowRightButton
            onClick={handleScrollNext}
            className='transition-opacity w-13 h-13'
            aria-label={t("read_more_aria", { caption: "" })}
          />
        </div>
      </div>

      {/* Embla viewport */}
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {newsItems.map((item) => {
            return (
              <div key={item._id} className={styles.slide}>
                <div className='h-full max-w-[380px] w-full flex flex-col'>
                  {/* Image */}
                  <div className='relative w-full h-64 2xl:h-[328px] bg-gray-200 overflow-hidden border-2 border-black'>
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.caption[locale]}
                      fill
                      className='object-cover'
                    />
                    <Link
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button
                        className='absolute -bottom-1 -right-1 px-9 py-3 2xl:px-14 2xl:py-5 bg-black text-lg sm:text-[15px] text-white 2xl:text-xl font-oswald focus:outline-none transition-colors duration-200 border-1 border-b-2 border-r-1 border-black hover:bg-[var(--blue)] hover:text-black 2xl:min-w-[156px] uppercase'
                        aria-label={t("read_more_aria", {
                          caption: item.caption[locale],
                        })}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ")
                            e.currentTarget.click();
                        }}
                      >
                        {t("read_more")}
                      </Button>
                    </Link>
                  </div>

                  {/* Text */}
                  <div className='py-2 flex-grow flex flex-col gap-1 justify-between'>
                    <p className='text-base 2xl:text-lg font-roboto text-black'>
                      {item.date}
                    </p>
                    <p className='text-lg font-oswald uppercase whitespace-pre-line min-h-25'>
                      {item.caption[locale]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
