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
  const currentLocale = locale.split("-")[0];
  const getLocalized = (field) => field[currentLocale] ?? field["en"] ?? "";

  // Embla
  const [emblaRef, setEmblaRef] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [emblaRefCallback, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    setEmblaRef(emblaApi);
  }, [emblaApi]);

  const handleScrollPrev = useCallback(() => {
    emblaRef?.scrollPrev();
  }, [emblaRef]);

  const handleScrollNext = useCallback(() => {
    emblaRef?.scrollNext();
  }, [emblaRef]);

  const handleSelect = useCallback((api) => {
    const prev = api.previousScrollSnap();
    const curr = api.selectedScrollSnap();
    setDirection(curr > prev ? 1 : curr < prev ? -1 : 0);
    setSelectedIndex(curr);
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

  // Оборачиваем индекс по модулю, чтобы next всегда существовал
  const len = projects.length;
  const idx = ((selectedIndex % len) + len) % len;
  const active = projects[idx];
  const next = projects[(idx + 1) % len];

  const { _id: id, name, description, imageUrl, link } = active;
  const transition = { duration: 1.2, ease: "easeInOut" };

  // Варианты анимаций
  const mobileSlideVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
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
      id='projects'
      className='py-16 max-w-[1080px] 2xl:max-w-[1400px] mx-auto px-2 sm:px-0 scroll-mt-20'
    >
      {/* Mobile header */}
      <div className='flex justify-between px-4 mb-6 lg:hidden'>
        <h2 className='text-[32px] font-oswald uppercase'>{t("heading")}</h2>
        <div className='flex gap-2'>
          <ArrowLeftButton
            onClick={handleScrollPrev}
            className='w-11 h-11'
            aria-label={t("prevProject")}
          />
          <ArrowRightButton
            onClick={handleScrollNext}
            className='w-11 h-11'
            aria-label={t("nextProject")}
          />
        </div>
      </div>

      {/* Desktop header */}
      <h2 className='hidden lg:block text-[54px] w-1/3 mx-auto font-oswald pl-2 2xl:pl-10 mb-12 uppercase'>
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
            key={`${id}-mobile`}
            variants={mobileSlideVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
              duration: transition.duration / 2,
              ease: transition.ease,
            }}
            className='flex flex-col gap-4'
          >
            <motion.h3 className='absolute -top-8 left-4 inline-flex items-center justify-center text-center border-2 border-black font-oswald bg-white z-10 px-7 py-3 text-2xl uppercase min-w-[250px]'>
              {getLocalized(name)}
            </motion.h3>

            <motion.div className='relative w-full h-[244px] border-2 border-black'>
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={getLocalized(name)}
                fill
                className='object-cover'
              />
              <motion.div className='absolute -bottom-8 -right-[2px] px-[10px] py-4 bg-black text-white text-xl font-oswald uppercase tracking-wider'>
                <Link
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={t("read_more")}
                >
                  {t("read_more")}
                </Link>
              </motion.div>
            </motion.div>

            <motion.p
              transition={{ ...transition, delay: 0.2 }}
              className='text-roboto text-base text-[var(--gray)] whitespace-pre-line mt-12'
            >
              {getLocalized(description)}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop slides */}
      <LayoutGroup>
        <div className='hidden lg:flex flex-col lg:flex-row items-end justify-between mt-8 relative'>
          {/* Active Slide */}
          <AnimatePresence mode='popLayout' custom={direction}>
            <motion.div
              key={`${id}-active-slide-wrapper`}
              variants={slideVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              custom={direction}
              transition={transition}
              className='relative flex-1 max-w-5xl'
            >
              {/* Title & Button с правым отступом */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ...transition, duration: 0.6 }}
                className='absolute top-0 right-6 lg:right-20 2xl:right-40 inline-flex items-center border-2 border-black font-oswald bg-white z-10'
              >
                <motion.h3
                  transition={transition}
                  className='text-2xl px-14 py-2 uppercase text-center min-w-[290px]'
                >
                  {getLocalized(name)}
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
                    aria-label={t("read_more")}
                  >
                    {t("read_more")}
                  </Link>
                </motion.div>
              </motion.div>

              <div className='overflow-hidden'>
                <div className='flex gap-6 items-end'>
                  {/* Изображение */}
                  <motion.div
                    layoutId={`project-image-${id}`}
                    layout
                    transition={transition}
                    className='relative flex-shrink-0 w-[341px] h-[352px] 2xl:w-[479px] 2xl:h-[480px] overflow-hidden border-2 border-black'
                    style={{ willChange: "transform, width, height" }}
                  >
                    <Image
                      src={imageUrl || "/placeholder.svg"}
                      alt={getLocalized(name)}
                      fill
                      className='object-cover'
                    />
                  </motion.div>
                  {/* Описание */}
                  <motion.div
                    variants={textVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    custom={direction}
                    transition={transition}
                    className='flex-1 bg-white w-full 2xl:max-w-1/3'
                  >
                    <p className='text-roboto text-[15px] 2xl:text-base text-[var(--gray)] whitespace-pre-line'>
                      {getLocalized(description)}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Навигация стрелками */}
          <div className='flex gap-4 md:gap-10 mb-8 absolute top-0 right-0'>
            <ArrowLeftButton
              onClick={handleScrollPrev}
              className='w-13 h-13'
              aria-label={t("prevProject")}
            />
            <ArrowRightButton
              onClick={handleScrollNext}
              className='w-13 h-13'
              aria-label={t("nextProject")}
            />
          </div>

          {/* Next Preview без проверки next && */}
          <div className='flex-shrink-0 flex flex-col items-center h-full lg:items-end gap-29'>
            <div className='relative flex flex-col items-end w-full min-w-[382px]'>
              <AnimatePresence mode='wait' custom={direction}>
                <motion.div
                  key={`next-title-block-${next._id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ ...transition, duration: 0.6 }}
                  className='absolute top-0 left-2 2xl:-left-15 inline-flex items-center border-2 border-black font-oswald bg-white z-10'
                >
                  <motion.h3
                    transition={transition}
                    className='text-2xl px-16 py-2 uppercase text-center min-w-[260px]'
                  >
                    {getLocalized(next.name)}
                  </motion.h3>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode='popLayout' custom={direction}>
                <motion.div
                  key={`next-image-wrapper-${next._id}`}
                  layoutId={`project-image-${next._id}`}
                  layout
                  transition={transition}
                  className='relative w-full max-w-[266px] 2xl:max-w-[420px] h-[225px] 2xl:h-[280px] overflow-hidden border-2 border-black cursor-pointer'
                  onClick={handleScrollNext}
                  style={{ willChange: "transform, width, height" }}
                >
                  <Image
                    src={next.imageUrl || "/placeholder.svg"}
                    alt={getLocalized(next.name)}
                    fill
                    className='object-cover'
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </LayoutGroup>
    </section>
  );
}
