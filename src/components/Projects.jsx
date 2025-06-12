"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import projects from "@/data/projects"; // Import project data
import { cn } from "@/lib/utils";
import ArrowLeftButton from "./ui/buttons/ArrowLeftButton";
import ArrowRightButton from "./ui/buttons/ArrowRightButton";

export default function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleScrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  // Callback to scroll to the next slide
  const handleScrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  // Callback to update the selected index when Embla's selection changes
  const handleSelect = useCallback((emblaApiInstance) => {
    setSelectedIndex(emblaApiInstance.selectedScrollSnap());
  }, []);

  // Effect hook to set up Embla event listeners
  useEffect(() => {
    if (!emblaApi) return;

    // Initialize selected index on mount
    handleSelect(emblaApi);

    // Add event listeners for 'select' and 'reInit'
    emblaApi.on("select", handleSelect);
    emblaApi.on("reInit", handleSelect);

    // Cleanup event listeners on component unmount
    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("reInit", handleSelect);
    };
  }, [emblaApi, handleSelect]);

  // Get the currently active project and the next project for display
  const activeProject = projects[selectedIndex];
  const nextProject = projects[selectedIndex + 1];

  return (
    <section className='py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto'>
      <h2 className='text-4xl font-bold text-center mb-12'>ПРОЄКТИ</h2>

      {/* Hidden Embla viewport to manage the index.
        The actual visual content is rendered outside this viewport. */}
      <div className='overflow-hidden h-0' ref={emblaRef}>
        <div className='flex'>
          {projects.map((project) => (
            // Each slide is an empty placeholder, as Embla is only used for index management
            <div
              key={project.id}
              className='embla__slide flex-[0_0_100%] min-w-0'
            ></div>
          ))}
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16'>
        {/* Active Project Display */}
        <div className='flex-1 flex flex-col md:flex-row items-center md:items-start gap-6 w-full transition-all duration-500 ease-in-out'>
          <div className='relative w-full md:w-2/3 lg:w-[600px] h-[300px] md:h-[400px] overflow-hidden border border-gray-200'>
            <img
              src={activeProject.image || "/placeholder.svg"}
              alt={activeProject.title}
              className='object-cover w-full h-full transition-all duration-500 ease-in-out'
            />
          </div>
          <div className='flex-1 flex flex-col gap-4 w-full md:w-1/3 lg:w-auto'>
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
              <h3 className='text-2xl font-semibold'>{activeProject.title}</h3>
              <a
                href={activeProject.link}
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-3 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors duration-200'
                tabIndex='0'
                aria-label={`Перейти на сайт ${activeProject.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.currentTarget.click();
                  }
                }}
              >
                ПЕРЕЙТИ НА САЙТ
              </a>
            </div>
            <p className='text-gray-700 whitespace-pre-line'>
              {activeProject.description}
            </p>
          </div>
        </div>

        {/* Next Project Preview & Navigation */}
        <div className='flex-shrink-0 flex flex-col items-center lg:items-end gap-8 lg:gap-12 mt-8 lg:mt-0'>
          <div className='flex gap-4'>
            <button
              onClick={handleScrollPrev}
              disabled={selectedIndex === 0}
              className={cn(
                selectedIndex === 0 && "opacity-50 cursor-not-allowed"
              )}
              tabIndex='0'
              aria-label='Попередній проєкт'
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleScrollPrev();
                }
              }}
            >
              <ArrowLeftButton />
            </button>
            <button
              onClick={handleScrollNext}
              disabled={selectedIndex === projects.length - 1}
              className={cn(
                selectedIndex === projects.length - 1 &&
                  "opacity-50 cursor-not-allowed"
              )}
              tabIndex='0'
              aria-label='Наступний проєкт'
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleScrollNext();
                }
              }}
            >
              <ArrowRightButton />
            </button>
          </div>

          {nextProject && (
            <div className='flex flex-col items-center lg:items-end gap-4 w-full max-w-[300px] md:max-w-[400px] lg:max-w-[250px] transition-all duration-500 ease-in-out'>
              <h4 className='text-xl font-semibold text-center lg:text-right'>
                {nextProject.title}
              </h4>
              <div className='relative w-full h-[150px] overflow-hidden border border-gray-200'>
                <img
                  src={nextProject.image || "/placeholder.svg"}
                  alt={nextProject.title}
                  className='object-cover w-full h-full transition-all duration-500 ease-in-out'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
