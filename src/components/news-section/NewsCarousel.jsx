"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import news from "@/data/news"; // Импорт данных
import { cn } from "@/lib/utils";
import ArrowLeftButton from "../ui/buttons/ArrowLeftButton";
import ArrowRightButton from "../ui/buttons/ArrowRightButton";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui";
import styles from "./NewsCarousel.module.css";

export default function NewsCarousel() {
  // включаем зацикливание
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    // гарантирует, что у нас всегда ровно один слайд в прокрутке
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleScrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleScrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    // при инициализации и каждом выборе
    handleSelect(emblaApi);
    emblaApi.on("select", handleSelect);
    emblaApi.on("reInit", handleSelect);
    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("reInit", handleSelect);
    };
  }, [emblaApi, handleSelect]);

  return (
    <section className='md:py-16 max-w-[1600px] mx-auto'>
      {/* Header */}
      <div className='flex items-center justify-between mb-7 md:mb-25 mx-4 md:mx-0'>
        <h2 className='text-[32px] md:text-6xl font-oswald '>НОВИНИ</h2>
        <div className='flex gap-4 md:gap-10'>
          <ArrowLeftButton
            onClick={handleScrollPrev}
            disabled={selectedIndex === 0}
            className={cn(
              "transition-opacity w-11 h-11 md:w-18 md:h-18",
              selectedIndex === 0 && "opacity-50 cursor-not-allowed"
            )}
            aria-label='Попередня новина'
          />
          <ArrowRightButton
            onClick={handleScrollNext}
            disabled={selectedIndex === news.length - 1}
            className={cn(
              "transition-opacity w-11 h-11 md:w-18 md:h-18",
              selectedIndex === news.length - 1 &&
                "opacity-50 cursor-not-allowed"
            )}
            aria-label='Наступна новина'
          />
        </div>
      </div>

      {/* Embla viewport */}
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {news.map((item) => (
            <div key={item.id} className={styles.slide}>
              <div className='h-full max-w-[496px] w-full flex flex-col'>
                {/* Изображение с видимой рамкой */}
                <div className='relative w-full  h-64 md:h-[428px] bg-gray-200 overflow-hidden border-2 border-black'>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className='object-cover'
                  />
                  <Link href={item.link}>
                    <Button
                      target='_blank'
                      rel='noopener noreferrer'
                      className='absolute bottom-0 right-0 px-14 py-5 bg-black text-white text-xl font-oswald focus:outline-none transition-colors duration-200 border-2 border-b-0 border-r-0 border-black hover:bg-[var(--blue)] hover:text-black min-w-[156px]'
                      aria-label={`Детальніше про ${item.title}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                          e.currentTarget.click();
                      }}
                    >
                      ДЕТАЛЬНІШЕ
                    </Button>
                  </Link>
                </div>

                {/* Текст */}
                <div className='py-3 flex-grow flex flex-col gap-3 justify-between'>
                  <p className='text-xl font-roboto text-[var(--gray)]'>
                    {item.date}
                  </p>
                  <p className='text-lg md:text-2xl font-oswald uppercase whitespace-pre-line min-h-25'>
                    {item.title}
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
