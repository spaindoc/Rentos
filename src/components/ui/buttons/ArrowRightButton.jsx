"use client";

import React from "react";

export default function ArrowRightButton({ onClick }) {
  return (
    <button onClick={onClick} aria-label='Arrow right'>
      <svg
        width='73'
        height='73'
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
  );
}
