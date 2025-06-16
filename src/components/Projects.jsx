"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import projects from "@/data/projects";
import { cn } from "@/lib/utils";
import ArrowLeftButton from "./ui/buttons/ArrowLeftButton";
import ArrowRightButton from "./ui/buttons/ArrowRightButton";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleScrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleScrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  const handleSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
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

  return (
    <section className='py-16  max-w-[1600px] mx-auto'>
      <h2 className='text-6xl font-oswald text-center mb-12'>ПРОЄКТИ</h2>
      {/* Embla viewport */}
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

      <div className='flex flex-col lg:flex-row items-start lg:items-end justify-between mt-8'>
        {/* === Блок фото + текст === */}
        <div className='relative flex-1 max-w-5xl'>
          {/* Накладка сверху */}
          <div
            className='
              absolute
              top-0  
              right-0
              inline-flex items-center
              border-2 border-black 
              font-oswald
              bg-transparent
              z-10
            '
          >
            <h3 className='text-[34px] px-16 py-3 uppercase text-center min-w-[422px] bg-white'>
              {activeProject.title}
            </h3>
            <Link
              href={activeProject.link}
              target='_blank'
              rel='noopener noreferrer'
              className='
                px-9 py-6
                bg-black text-white text-xl font-medium uppercase tracking-wider
                focus:outline-none
                transition-colors duration-200
                border-l-2 border-black
                hover:bg-[var(--blue)] hover:text-black
              '
              aria-label={`Перейти на сайт ${activeProject.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.currentTarget.click();
                }
              }}
            >
              ПЕРЕЙТИ НА САЙТ
            </Link>
          </div>

          {/* Контейнер с рамкой (без верхней границы) */}
          <div className=' overflow-hidden'>
            <div className='flex gap-8 items-end'>
              {/* Левое — квадратное фото 500×500 */}
              <div className='flex-shrink-0 w-[500px] h-[500px] overflow-hidden border-2 border-black '>
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  width={496}
                  height={512}
                  className='object-cover w-full h-full transition-all duration-500 ease-in-out'
                />
              </div>
              {/* Правое — текст */}
              <div className='flex-1 bg-white'>
                <p className='text-roboto text-xl text-[var(--gray)] whitespace-pre-line'>
                  {activeProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === Навигация и превью следующего === */}
        <div className='flex-shrink-0 flex flex-col items-center lg:items-end gap-30'>
          <div className='flex gap-4'>
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
            <div className='relative flex flex-col items-end  w-full min-w-[385px]  transition-all duration-500 ease-in-out'>
              <div
                className='
              absolute
              top-0  
              right-20
              inline-flex items-center
              border-2 border-black 
              font-oswald
              bg-transparent
              z-10
            '
              >
                <h3 className='text-[34px] px-16 py-3 uppercase text-center min-w-[422px] bg-white'>
                  {activeProject.title}
                </h3>
              </div>
              <div className=' w-full max-w-[385px] h-[328px] overflow-hidden'>
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  width={300}
                  height={150}
                  className='object-cover  w-full h-full transition-all duration-500 ease-in-out'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
