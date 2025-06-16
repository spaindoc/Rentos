"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import projects from "@/data/projects";
import { cn } from "@/lib/utils";
import ArrowLeftButton from "./ui/buttons/ArrowLeftButton";
import ArrowRightButton from "./ui/buttons/ArrowRightButton";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const handleScrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const handleScrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const handleSelect = useCallback((api) => {
    const previous = api.previousScrollSnap();
    const current = api.selectedScrollSnap();

    if (current > previous) {
      setDirection(1);
    } else if (current < previous) {
      setDirection(-1);
    } else {
      setDirection(0);
    }
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

  const activeProject = projects[selectedIndex];
  const nextProject = projects[selectedIndex + 1];

  const transition = { duration: 0.5, ease: "easeInOut" };

  const slideVariants = {
    initial: (dir) => ({
      x: dir === 1 ? "100%" : "-100%",
      opacity: 0,
    }),
    animate: {
      x: "0%",
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir === 1 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const textSlideVariants = {
    initial: (dir) => ({
      x: dir === 1 ? 50 : -50,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir === 1 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <section className='py-16 max-w-[1600px] mx-auto'>
      {/* Mobile header with title and navigation arrows */}
      <div className='flex items-center justify-between px-4 mb-6 lg:hidden'>
        <h2 className='text-4xl font-oswald'>ПРОЄКТИ</h2>
        <div className='flex gap-2'>
          <ArrowLeftButton
            onClick={handleScrollPrev}
            disabled={selectedIndex === 0}
            className={cn(
              "transition-opacity",
              selectedIndex === 0 && "opacity-50 cursor-not-allowed"
            )}
            aria-label='Попередній проєкт'
          />
          <ArrowRightButton
            onClick={handleScrollNext}
            disabled={selectedIndex === projects.length - 1}
            className={cn(
              "transition-opacity",
              selectedIndex === projects.length - 1 &&
                "opacity-50 cursor-not-allowed"
            )}
            aria-label='Наступний проєкт'
          />
        </div>
      </div>

      {/* Desktop header */}
      <h2 className='hidden lg:block text-6xl font-oswald text-center mb-12'>
        ПРОЄКТИ
      </h2>

      {/* Embla  */}
      <div className='embla__viewport overflow-hidden' ref={emblaRef}>
        <div className='embla__container flex'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='embla__slide flex-[0_0_100%] min-w-0'
            />
          ))}
        </div>
      </div>

      {/* Mobile version content */}
      <div className='md:hidden mt-8 px-4 flex flex-col gap-4 relative'>
        <AnimatePresence mode='wait' custom={direction}>
          <motion.div
            key={activeProject.id + "-mobile-section"}
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
                layoutId={"project-title-" + activeProject.id + "-mobile"}
                transition={transition}
                className='text-2xl px-7 py-3 uppercase text-center min-w-[250px] bg-white'
              >
                {activeProject.title}
              </motion.h3>
            </motion.div>
            <motion.div
              layoutId={"project-image-" + activeProject.id + "-mobile"}
              transition={transition}
              className='relative w-full h-[244px] border-2 border-black'
            >
              <Image
                src={activeProject.image || "/placeholder.svg"}
                alt={activeProject.title}
                fill
                className='object-cover'
              />
              <Link
                href={activeProject.link}
                target='_blank'
                rel='noopener noreferrer'
                className='absolute -bottom-8 font-oswald right-0 translate-x-[2px] px-[10px] py-4 bg-black text-white text-xl font-medium uppercase tracking-wider focus:outline-none transition-colors duration-200 border-l-2 border-black hover:bg-[var(--blue)] hover:text-black z-50'
                aria-label={`Перейти на сайт ${activeProject.title}`}
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
              {activeProject.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop version */}
      <AnimatePresence mode='popLayout' custom={direction}>
        <div className='hidden lg:flex flex-col lg:flex-row items-start justify-between mt-8'>
          {/* Active Project (Left Side) */}
          <motion.div
            key={activeProject.id + "-active-section"}
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
              className='absolute top-0 right-0 inline-flex items-center border-2 border-black font-oswald bg-transparent z-10'
            >
              <motion.h3
                layoutId={"project-title-" + activeProject.id}
                transition={transition}
                className='text-[34px] px-16 py-3 uppercase text-center min-w-[422px] bg-white'
              >
                {activeProject.title}
              </motion.h3>
              <Link
                href={activeProject.link}
                target='_blank'
                rel='noopener noreferrer'
                className='px-9 py-6 bg-black text-white text-xl font-medium uppercase tracking-wider focus:outline-none transition-colors duration-200 border-l-2 border-black hover:bg-[var(--blue)] hover:text-black'
                aria-label={`Перейти на сайт ${activeProject.title}`}
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
                  layoutId={"project-image-" + activeProject.id}
                  transition={transition}
                  className='flex-shrink-0 w-[500px] h-[512px] overflow-hidden border-2 border-black'
                >
                  <Image
                    src={activeProject.image || "/placeholder.svg"}
                    alt={activeProject.title}
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
                  <p className='text-roboto text-xl text-[var(--gray)] whitespace-pre-line'>
                    {activeProject.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Navigation and next preview (Right Side) */}
          <div className='flex-shrink-0 flex flex-col items-center lg:items-end gap-20'>
            <div className='flex gap-4 mb-8'>
              <ArrowLeftButton
                onClick={handleScrollPrev}
                disabled={selectedIndex === 0}
                className={cn(
                  "transition-opacity",
                  selectedIndex === 0 && "opacity-50 cursor-not-allowed"
                )}
                aria-label='Попередній проєкт'
              />
              <ArrowRightButton
                onClick={handleScrollNext}
                disabled={selectedIndex === projects.length - 1}
                className={cn(
                  "transition-opacity",
                  selectedIndex === projects.length - 1 &&
                    "opacity-50 cursor-not-allowed"
                )}
                aria-label='Наступний проєкт'
              />
            </div>
            {nextProject && (
              <motion.div
                key={nextProject.id + "-next-section"}
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
                  className='absolute top-0 right-20 inline-flex items-center border-2 border-black font-oswald bg-transparent z-10'
                >
                  <motion.h3
                    layoutId={"project-title-" + nextProject.id}
                    transition={transition}
                    className='text-[34px] px-16 py-3 uppercase text-center min-w-[422px] bg-white'
                  >
                    {nextProject.title}
                  </motion.h3>
                </motion.div>
                <motion.div
                  layoutId={"project-image-" + nextProject.id}
                  transition={transition}
                  className='w-full max-w-[385px] h-[328px] overflow-hidden'
                >
                  <Image
                    src={nextProject.image || "/placeholder.svg"}
                    alt={nextProject.title}
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