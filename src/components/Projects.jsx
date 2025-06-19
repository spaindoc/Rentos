"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ArrowLeftButton from "./ui/buttons/ArrowLeftButton";
import ArrowRightButton from "./ui/buttons/ArrowRightButton";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ProjectsCarousel({ projects, locale }) {
  const t = useTranslations("projects");

  const [emblaRef, setEmblaRef] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const [emblaRefCallback, emblaApiInstance] = useEmblaCarousel({
    loop: false,
  });

  useEffect(() => {
    setEmblaRef(emblaApiInstance);
  }, [emblaApiInstance]);

  const handleScrollPrev = useCallback(() => {
    if (emblaRef) emblaRef.scrollPrev();
  }, [emblaRef]);

  const handleScrollNext = useCallback(() => {
    if (emblaRef) emblaRef.scrollNext();
  }, [emblaRef]);

  const handleSelect = useCallback((api) => {
    const previous = api.previousScrollSnap();
    const current = api.selectedScrollSnap();
    setDirection(current > previous ? 1 : current < previous ? -1 : 0);
    setSelectedIndex(current);
  }, []);

  useEffect(() => {
    if (!emblaRef) return;
    handleSelect(emblaRef);
    emblaRef.on("select", handleSelect);
    emblaRef.on("reInit", handleSelect);
    return () => {
      emblaRef.off("select", handleSelect);
      emblaRef.off("reInit", handleSelect);
    };
  }, [emblaRef, handleSelect]);

  if (!projects || projects.length === 0) return null;

  const active = projects[selectedIndex];
  const next = projects[selectedIndex + 1];
  const { _id: id, name, description, imageUrl, link } = active;

  const transition = { duration: 1.2, ease: "easeInOut" };

  // Нові варіанти анімацій для мобільної версії
  const mobileSlideVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  const mobileTextVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Варіанти для десктопу (залишаються без змін)
  const slideVariants = {
    initial: (dir) => ({ x: dir === 1 ? "100%" : "-100%" }),
    animate: { x: "0%" },
    exit: (dir) => ({ x: dir === 1 ? "-100%" : "100%" }),
  };
  const textVariants = {
    initial: (dir) => ({ x: dir === 1 ? 50 : -50, opacity: 0 }),
    animate: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir === 1 ? -50 : 50, opacity: 0 }),
  };

  return (
    <section
      className='py-16 max-w-[1400px] mx-auto px-2 2xl:px-0 scroll-mt-20'
      id='projects'
    >
      {/* Mobile header */}
      <div className='flex justify-between px-4 mb-6 lg:hidden'>
        <h2 className='text-[32px] font-oswald uppercase'>{t("heading")}"</h2>
        <div className='flex gap-2'>
          <ArrowLeftButton
            onClick={handleScrollPrev}
            className='w-11 h-11'
            aria-label='Попередня новина'
          />
          <ArrowRightButton
            onClick={handleScrollNext}
            className='w-11 h-11'
            aria-label='Наступна новина'
          />
        </div>
      </div>

      {/* Desktop header */}
      <h2 className='hidden lg:block text-[54px] w-1/3 mx-auto font-oswald pl-10 mb-12 uppercase'>
        {t("heading")}
      </h2>

      {/* Embla viewport */}
      <div className='embla__viewport overflow-hidden' ref={emblaRefCallback}>
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
        <AnimatePresence mode='wait'>
          <motion.div
            key={id + "-mobile"}
            variants={mobileSlideVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={transition / 2}
            className='flex flex-col gap-4'
          >
            <motion.h3
              className='
    absolute -top-8 left-4
    inline-flex items-center justify-center
    text-center
    border-2 border-black font-oswald bg-white z-10
    px-7 py-3 text-2xl uppercase min-w-[250px]
  '
            >
              {name[locale]}
            </motion.h3>

            <motion.div className='relative w-full h-[244px] border-2 border-black'>
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={name[locale]}
                fill
                className='object-cover'
              />
              <motion.div className='absolute -bottom-8 -right-[2px] px-[10px] py-4 bg-black text-white text-xl font-oswald uppercase tracking-wider'>
                <Link
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Перейти на сайт ${name[locale]}`}
                >
                  {t("read_more_aria")}
                </Link>
              </motion.div>
            </motion.div>

            <motion.p
              transition={{ ...transition, delay: 0.2 }}
              className='text-roboto text-base text-[var(--gray)] whitespace-pre-line mt-12'
            >
              {description[locale]}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop slides */}
      <LayoutGroup>
        <div className='hidden lg:flex flex-col lg:flex-row items-end justify-between mt-8 relative'>
          {/* Active Slide Content */}
          <AnimatePresence mode='popLayout' custom={direction}>
            <motion.div
              key={id + "-active-slide-wrapper"}
              variants={slideVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              custom={direction}
              transition={transition}
              className='relative flex-1 max-w-5xl'
            >
              {/* Active Title Block */}
              <motion.div
                key={`active-title-block-${id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ...transition, duration: 0.6 }}
                className='absolute top-0 right-40 inline-flex items-center border-2 border-black font-oswald bg-white z-10'
              >
                <motion.h3
                  transition={transition}
                  className='text-2xl px-14 py-2 uppercase text-center min-w-[290px]'
                >
                  {name[locale]}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ ...transition, delay: 0.6 }}
                  className='px-9 py-3 bg-black text-white text-base font-oswald uppercase tracking-wider'
                >
                  <Link
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Перейти на сайт ${name[locale]}`}
                  >
                    {t("read_more_aria")}
                  </Link>
                </motion.div>
              </motion.div>

              <div className='overflow-hidden'>
                <div className='flex gap-6 items-end'>
                  {/* Active Image */}
                  <motion.div
                    layoutId={`project-image-${id}`}
                    layout
                    transition={transition}
                    className='relative flex-shrink-0 w-[479px] h-[480px] overflow-hidden border-2 border-black'
                    style={{ willChange: "transform, width, height" }}
                  >
                    <Image
                      src={imageUrl || "/placeholder.svg"}
                      alt={name[locale]}
                      fill
                      className='object-cover'
                    />
                  </motion.div>
                  {/* Description */}
                  <motion.div
                    variants={textVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    custom={direction}
                    transition={transition}
                    className='flex-1 bg-white w-full max-w-1/3'
                  >
                    <p className='text-roboto text-base text-[var(--gray)] whitespace-pre-line'>
                      {description[locale]}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation & Next Preview */}
          <div className='flex gap-4 md:gap-10 mb-8 absolute top-0 right-0'>
            <ArrowLeftButton onClick={handleScrollPrev} className='w-13 h-13' />
            <ArrowRightButton
              onClick={handleScrollNext}
              className='w-13 h-13'
            />
          </div>
          <div className='flex-shrink-0 flex flex-col items-center h-full lg:items-end gap-29'>
            {next && (
              <div className='relative flex flex-col items-end w-full min-w-[382px]'>
                {/* Next Title Block */}
                <AnimatePresence mode='wait' custom={direction}>
                  <motion.div
                    key={`next-title-block-${next._id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ...transition, duration: 0.6 }}
                    className='absolute top-0 -left-15 inline-flex items-center border-2 border-black font-oswald bg-white z-10'
                  >
                    <motion.h3
                      transition={transition}
                      className='text-2xl px-16 py-2 uppercase text-center min-w-[260px]'
                    >
                      {next.name[locale]}
                    </motion.h3>
                  </motion.div>
                </AnimatePresence>

                {/* Next Image Preview */}
                <AnimatePresence mode='popLayout' custom={direction}>
                  <motion.div
                    key={`next-image-wrapper-${next._id}`}
                    layoutId={`project-image-${next._id}`}
                    layout
                    transition={transition}
                    className='relative w-full max-w-[420px] h-[280px] overflow-hidden border-2 border-black cursor-pointer'
                    onClick={handleScrollNext}
                    style={{ willChange: "transform, width, height" }}
                  >
                    <Image
                      src={next.imageUrl || "/placeholder.svg"}
                      alt={next.name[locale]}
                      fill
                      className='object-cover'
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </LayoutGroup>
    </section>
  );
}
