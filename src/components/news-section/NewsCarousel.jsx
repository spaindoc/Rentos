// components/news-section/NewsCarousel.jsx
"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ArrowLeftButton from "../ui/buttons/ArrowLeftButton";
import ArrowRightButton from "../ui/buttons/ArrowRightButton";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui";
import styles from "./NewsCarousel.module.css";

export default function NewsCarousel({ newsItems, locale }) {
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
    <section className='md:py-16 max-w-[1600px] mx-auto px-2' id="news">
      {/* Header */}
      <div className='flex items-center justify-between mb-7 md:mb-25 mx-4 md:mx-0'>
        <h2 className='text-[32px] md:text-[62px] font-oswald'>НОВИНИ</h2>
        <div className='flex gap-4 md:gap-10'>
          <ArrowLeftButton
            onClick={handleScrollPrev}
            className='transition-opacity w-11 h-11 2xl:w-18 2xl:h-18'
            aria-label='Попередня новина'
          />
          <ArrowRightButton
            onClick={handleScrollNext}
            className='transition-opacity w-11 h-11 2xl:w-18 2xl:h-18'
            aria-label='Наступна новина'
          />
        </div>
      </div>

      {/* Embla viewport */}
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {newsItems.map((item) => (
            <div key={item._id} className={styles.slide}>
              <div className='h-full max-w-[496px] w-full flex flex-col'>
                {/* Image */}
                <div className='relative w-full h-64 2xl:h-[428px] bg-gray-200 overflow-hidden border-2 border-black'>
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
                      className='absolute bottom-0 right-0 2xl:px-14 2xl:y-5 bg-black text-base text-white 2xl:text-xl font-oswald focus:outline-none transition-colors duration-200 border-2 border-b-0 border-r-0 border-black hover:bg-[var(--blue)] hover:text-black 2xl:min-w-[156px]'
                      aria-label={`Детальніше про ${item.caption[locale]}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                          e.currentTarget.click();
                      }}
                    >
                      ДЕТАЛЬНІШЕ
                    </Button>
                  </Link>
                </div>

                {/* Text */}
                <div className='py-3 flex-grow flex flex-col gap-3 justify-between'>
                  <p
                    className='text-base 2xl:text-xl font-roboto text-black
                  '
                  >
                    {item.date}
                  </p>
                  <p className='text-lg 2xl:text-2xl font-oswald uppercase whitespace-pre-line min-h-25'>
                    {item.caption[locale]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
