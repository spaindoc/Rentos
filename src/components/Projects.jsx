"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ArrowLeftButton from "./ui/buttons/ArrowLeftButton";
import ArrowRightButton from "./ui/buttons/ArrowRightButton";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export default function ProjectsCarousel({ projects, locale }) {
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

  // Контейнер слайда — только движение по X
  const slideVariants = {
    initial: (dir) => ({ x: dir === 1 ? "100%" : "-100%" }),
    animate: { x: "0%" },
    exit: (dir) => ({ x: dir === 1 ? "-100%" : "100%" }),
  };

  // Общие текстовые анимации для заголовков/описаний
  const textVariants = {
    initial: (dir) => ({ x: dir === 1 ? 50 : -50, opacity: 0 }),
    animate: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir === 1 ? -50 : 50, opacity: 0 }),
  };

  return (
    <section
      className=' py-16 max-w-[1400px] mx-auto px-2 2xl:px-0'
      id='projects'
    >
      {/* Mobile header */}
      <div className='flex  justify-between px-4 mb-6 lg:hidden'>
        <h2 className='text-[32px] font-oswald'>ПРОЄКТИ</h2>
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
      <h2 className='hidden lg:block text-6xl font-oswald text-center mb-12'>
        ПРОЄКТИ
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
              variants={textVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              custom={direction}
              transition={transition}
              className='absolute -top-8 left-4 inline-flex items-center border-2 border-black font-oswald bg-white z-10'
            >
              <motion.h3
                // Removed layoutId from here
                transition={transition}
                className='text-2xl px-7 py-3 uppercase text-center min-w-[250px]'
              >
                {name[locale]}
              </motion.h3>
            </motion.div>

            <motion.div
              layoutId={`project-image-${id}-mobile`}
              layout // Enable layout animations
              transition={transition}
              className='relative w-full h-[244px] border-2 border-black '
            >
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={name[locale]}
                fill
                className='object-cover'
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ...transition, delay: 0.6 }}
                className='absolute -bottom-8 -right-[2px] px-[10px] py-4 bg-black text-white text-xl font-oswald uppercase tracking-wider z-60'
              >
                <Link
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Перейти на сайт ${name[locale]}`}
                >
                  ПЕРЕЙТИ НА САЙТ
                </Link>
              </motion.div>
            </motion.div>

            <motion.p
              variants={textVariants}
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
      <LayoutGroup>
        {" "}
        {/* LayoutGroup wraps the entire desktop section */}
        <div className='hidden lg:flex flex-col lg:flex-row items-end justify-between mt-8 relative'>
          {/* Active Slide Content */}
          <AnimatePresence mode='popLayout' custom={direction}>
            <motion.div
              key={id + "-active-slide-wrapper"} // Unique key for AnimatePresence
              variants={slideVariants} // This makes the whole active block slide out
              initial='initial'
              animate='animate'
              exit='exit'
              custom={direction}
              transition={transition}
              className='relative flex-1 max-w-5xl'
            >
              {/* Active Title Block (appears from 0) */}
              <motion.div
                key={`active-title-block-${id}`} // Unique key for AnimatePresence
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ...transition, duration: 0.6 }}
                className='absolute top-0 right-40 inline-flex items-center border-2 border-black font-oswald bg-white z-10'
              >
                <motion.h3
                  // Removed layoutId from here
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
                    ПЕРЕЙТИ НА САЙТ
                  </Link>
                </motion.div>
              </motion.div>

              <div className='overflow-hidden'>
                <div className='flex gap-6 items-end'>
                  {/* Active Image - this is the target for the next image's layout animation */}
                  <motion.div
                    layoutId={`project-image-${id}`} // Shared layoutId for image
                    layout // Enable layout animations
                    transition={transition}
                    className='relative flex-shrink-0 w-[479px] h-[480px] overflow-hidden border-2 border-black'
                    style={{ willChange: "transform, width, height" }} // Added will-change
                  >
                    <Image
                      src={imageUrl || "/placeholder.svg"}
                      alt={name[locale]}
                      fill // Changed to fill
                      className='object-cover'
                    />
                  </motion.div>
                  {/* Description text - should slide out with the active container */}
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

          {/* Navigation & Next Slide Preview */}
          <div className='flex gap-4 md:gap-10 mb-8 absolute top-0 right-0'>
            <ArrowLeftButton onClick={handleScrollPrev} className='w-13 h-13' />
            <ArrowRightButton
              onClick={handleScrollNext}
              className='w-13 h-13'
            />
          </div>
          <div className='flex-shrink-0 flex flex-col items-center h-full lg:items-end gap-29'>
            {next && (
              // This container for the next slide preview does not exit/enter,
              // only its children (image and title) animate with AnimatePresence/LayoutGroup
              <div className='relative flex flex-col items-end w-full min-w-[382px]'>
                {/* Next Title Block */}
                <AnimatePresence mode='wait' custom={direction}>
                  <motion.div
                    key={`next-title-block-${next._id}`} // Unique key for AnimatePresence
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ...transition, duration: 0.6 }}
                    className='absolute top-0 -left-15 inline-flex items-center border-2 border-black font-oswald bg-white z-10'
                  >
                    <motion.h3
                      // Removed layoutId from here
                      transition={transition}
                      className='text-2xl px-16 py-2 uppercase text-center min-w-[260px]'
                    >
                      {next.name[locale]}
                    </motion.h3>
                  </motion.div>
                </AnimatePresence>

                {/* Next Image - wrapped in its own AnimatePresence for layout transition */}
                <AnimatePresence mode='popLayout' custom={direction}>
                  <motion.div
                    key={`next-image-wrapper-${next._id}`} // Unique key for AnimatePresence
                    layoutId={`project-image-${next._id}`} // Shared layoutId for image
                    layout // Enable layout animations
                    transition={transition}
                    className='relative w-full max-w-[420px] h-[280px] overflow-hidden border-2 border-black cursor-pointer'
                    onClick={handleScrollNext} // Add click handler to next image
                    style={{ willChange: "transform, width, height" }} // Added will-change
                  >
                    <Image
                      src={next.imageUrl || "/placeholder.svg"}
                      alt={next.name[locale]}
                      fill // Changed to fill
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
