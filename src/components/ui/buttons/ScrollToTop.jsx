"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='scroll-top-button fixed bottom-8 right-8 sm:right-31 2xl:right-23 z-50'
          aria-label='Scroll to top'
        >
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 73 73'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='xMidYMid meet'
          >
            <rect
              x='1.5'
              y='1.5'
              width='70'
              height='70'
              fill='#FDFDFD'
              stroke='#0D0D0D'
              strokeWidth='2'
            />
            <path
              d='M36.5 24L27.5 33M36.5 24L45.5 33M36.5 24V49'
              stroke='#0D0D0D'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      )}
      <style jsx>{`
        .scroll-top-button {
          background: none;
          border: none;
          padding: 0;
          width: 53px;
          height: 52px;
          cursor: pointer;
          transition:
            transform 0.1s ease,
            filter 0.2s ease;
        }

        .scroll-top-button:hover svg rect {
          fill: #0d0d0d;
          stroke: #fdfdfd;
        }

        .scroll-top-button:hover svg path {
          stroke: #fdfdfd;
        }

        .scroll-top-button:active {
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
}
