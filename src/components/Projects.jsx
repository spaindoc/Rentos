"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ArrowLeftButton from "./ui/buttons/ArrowLeftButton";
import ArrowRightButton from "./ui/buttons/ArrowRightButton";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsCarousel({ projects, locale }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleScrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleScrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleSelect = useCallback((api) => {
    const previous = api.previousScrollSnap();
    const current = api.selectedScrollSnap();
    setDirection(current > previous ? 1 : current < previous ? -1 : 0);
    setSelectedIndex(current);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    handleSelect(emblaApi);
    emblaApi.on("select", handleSelect);
    emblaApi.on("reInit", handleSelect);
    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("reInit", handleSelect);
    };
  }, [emblaApi, handleSelect]);

  if (!projects || projects.length === 0) return null;

  const active = projects[selectedIndex];
  const next = projects[selectedIndex + 1];

  const { _id: id, name, description, imageUrl, link } = active;

  const transition = { duration: 0.5, ease: "easeInOut" };

  const slideVariants = {
    initial: (dir) => ({ x: dir === 1 ? "100%" : "-100%", opacity: 0 }),
    animate: { x: "0%", opacity: 1 },
    exit: (dir) => ({ x: dir === 1 ? "-100%" : "100%", opacity: 0 }),
  };

  const textSlideVariants = {
    initial: (dir) => ({ x: dir === 1 ? 50 : -50, opacity: 0 }),
    animate: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir === 1 ? -50 : 50, opacity: 0 }),
  };

  return (
    <section className='py-16 max-w-[1600px] mx-auto px-2 2xl:px-0'>
      {/* Mobile header */}
      <div className='flex items-center justify-between px-4 mb-10 lg:hidden'>
        <h2 className='text-[32px]] font-oswald'>ПРОЄКТИ</h2>
        <div className='flex gap-2'>
          <ArrowLeftButton
            onClick={handleScrollPrev}
            className='transition-opacity w-11 h-11 md:w-18 md:h-18'
            aria-label='Попередня новина'
          />
          <ArrowRightButton
            onClick={handleScrollNext}
            className='transition-opacity w-11 h-11 md:w-18 md:h-18'
            aria-label='Наступна новина'
          />
        </div>
      </div>

      {/* Desktop header */}
      <h2 className='hidden lg:block 2xl:text-6xl font-oswald text-center mb-12'>
        ПРОЄКТИ
      </h2>

      {/* Embla viewport */}
      <div className='embla__viewport overflow-hidden' ref={emblaRef}>
        <div className='embla__container flex'>
          {projects.map((proj) => (
            <div
              key={proj._id}
              className='embla__slide flex-[0_0_100%] min-w-0'
            />
          ))}
        </div>
      </div>

      {/* Mobile slides */}
      <div className='md:hidden mt-8 px-4 flex flex-col gap-4 relative'>
        <AnimatePresence mode='wait' custom={direction}>
          <motion.div
            key={id + "-mobile"}
            variants={slideVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            custom={direction}
            transition={transition}
            className='flex flex-col gap-4'
          >
            <motion.div
              variants={textSlideVariants}
              animate='animate'
              exit='exit'
              custom={direction}
              transition={transition}
              className='absolute -top-8 left-4 inline-flex items-center border-2 border-black font-oswald bg-transparent z-10'
            >
              <motion.h3
                layoutId={`project-title-${id}-mobile`}
                transition={transition}
                className='text-2xl px-7 py-3 uppercase text-center min-w-[250px] bg-white'
              >
                {name[locale]}
              </motion.h3>
            </motion.div>
            <motion.div
              layoutId={`project-image-${id}-mobile`}
              transition={transition}
              className='relative w-full h-[244px] border-2 border-black'
            >
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={name[locale]}
                fill
                className='object-cover'
              />
              <Link
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='absolute -bottom-8 font-oswald right-0 translate-x-[2px] px-[10px] py-4 bg-black text-white text-xl font-medium uppercase tracking-wider focus:outline-none transition-colors duration-200 border-l-2 border-black hover:bg-[var(--blue)] hover:text-black z-50'
                aria-label={`Перейти на сайт ${name[locale]}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    e.currentTarget.click();
                }}
              >
                ПЕРЕЙТИ НА САЙТ
              </Link>
            </motion.div>
            <motion.p
              variants={textSlideVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              custom={direction}
              transition={transition}
              className='text-roboto text-base text-[var(--gray)] whitespace-pre-line mt-12'
            >
              {description[locale]}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop slides */}
      <AnimatePresence mode='popLayout' custom={direction}>
        <div className='hidden lg:flex flex-col lg:flex-row items-start justify-between mt-8'>
          {/* Active */}
          <motion.div
            key={id + "-active"}
            variants={slideVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            custom={direction}
            transition={transition}
            className='relative flex-1 max-w-5xl'
          >
            <motion.div
              variants={textSlideVariants}
              animate='animate'
              exit='exit'
              custom={direction}
              transition={transition}
              className='absolute top-0 left-32  2xl:right-0 inline-flex items-center border-2 border-black font-oswald bg-white 2xl:bg-transparent z-10'
            >
              <motion.h3
                layoutId={`project-title-${id}`}
                transition={transition}
                className='text-xl 2xl:text-[34px] px-16 py-3 uppercase text-center 2xl:min-w-[422px] bg-white'
              >
                {name[locale]}
              </motion.h3>
              <Link
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='px-9 py-3 2xl:py-6 bg-black text-white text-xl 2xl:text-xl font-medium uppercase tracking-wider focus:outline-none transition-colors duration-200 border-l-2 border-black hover:bg-[var(--blue)] hover:text-black'
                aria-label={`Перейти на сайт ${name[locale]}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    e.currentTarget.click();
                }}
              >
                ПЕРЕЙТИ НА САЙТ
              </Link>
            </motion.div>
            <div className='overflow-hidden'>
              <div className='flex gap-8 items-end'>
                <motion.div
                  layoutId={`project-image-${id}`}
                  transition={transition}
                  className='flex-shrink-0 w-[360px] h-[360px] 2xl:w-[500px] 2xl:h-[512px] overflow-hidden border-2 border-black'
                >
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={name[locale]}
                    width={496}
                    height={512}
                    className='object-cover w-full h-full'
                  />
                </motion.div>
                <motion.div
                  variants={textSlideVariants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  custom={direction}
                  transition={transition}
                  className='flex-1 bg-white'
                >
                  <p className='text-roboto text-base 2xl:text-xl text-[var(--gray)] whitespace-pre-line'>
                    {description[locale]}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Navigation & Next */}
          <div className='flex-shrink-0 flex flex-col items-center lg:items-end gap-20'>
            <div className='flex gap-4 md:gap-10 mb-8'>
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
            {next && (
              <motion.div
                key={next._id + "-next"}
                variants={slideVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                custom={direction}
                transition={transition}
                className='relative flex flex-col items-end w-full min-w-[385px]'
              >
                <motion.div
                  variants={textSlideVariants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  custom={direction}
                  transition={transition}
                  className='absolute top-0 left-2 2xl:right-20 inline-flex items-center border-2 border-black font-oswald bg-transparent z-10'
                >
                  <motion.h3
                    layoutId={`project-title-${next._id}`}
                    transition={transition}
                    className='text-xl 2xl:text-[34px] px-16 py-3 uppercase text-center 2xl:min-w-[422px] bg-white'
                  >
                    {next.name[locale]}
                  </motion.h3>
                </motion.div>
                <motion.div
                  layoutId={`project-image-${next._id}`}
                  transition={transition}
                  className='w-full max-w-[320px] h-[180px] 2xl:max-w-[385px] 2xl:h-[328px] overflow-hidden'
                >
                  <Image
                    src={next.imageUrl || "/placeholder.svg"}
                    alt={next.name[locale]}
                    width={300}
                    height={150}
                    className='object-cover w-full h-full'
                  />
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </AnimatePresence>
    </section>
  );
}
