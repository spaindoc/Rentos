"use client";

import React from "react";

// Обратите внимание: svg теперь шириной/высотой 100%
export default function ArrowLeftButton(props) {
  return (
    <>
      <button {...props} className={`${props.className ?? ""} arrow-button`}>
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 73 73'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='1.19739'
            y='71.3057'
            width='70'
            height='70'
            transform='rotate(-90 1.19739 71.3057)'
            fill='#FDFDFD'
          />
          <rect
            x='1.19739'
            y='71.3057'
            width='70'
            height='70'
            transform='rotate(-90 1.19739 71.3057)'
            stroke='#0D0D0D'
            strokeWidth='2'
          />
          <path
            d='M48.0687 36.3057H24.326M24.326 36.3057L33.2295 27.4175M24.326 36.3057L33.2295 45.1938'
            stroke='#0D0D0D'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <style jsx>{`
        .arrow-button {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          display: inline-block;
          transition: transform 0.1s ease, filter 0.2s ease;
        }
        .arrow-button:hover svg rect {
          fill: #0d0d0d;
          stroke: #fdfdfd;
        }
        .arrow-button:hover svg path {
          stroke: #fdfdfd;
        }
        .arrow-button:active {
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
}
