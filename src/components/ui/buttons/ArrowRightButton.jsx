"use client";

import React from "react";

export default function ArrowRightButton(props) {
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
            x='-1'
            y='-1'
            width='70'
            height='70'
            transform='matrix(0 -1 -1 0 70.0568 70.3057)'
            fill='#FDFDFD'
          />
          <rect
            x='-1'
            y='-1'
            width='70'
            height='70'
            transform='matrix(0 -1 -1 0 70.0568 70.3057)'
            stroke='#0D0D0D'
            strokeWidth='2'
          />
          <path
            d='M24.1855 36.3057H47.9281M47.9281 36.3057L39.0246 27.4175M47.9281 36.3057L39.0246 45.1938'
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
