"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const LocationIcon = ({ className, ...props }) => (
  <svg
    width='14'
    height='18'
    viewBox='0 0 14 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={cn(className)}
    {...props}
  >
    <path
      d='M9.08341 6.49984C9.08341 7.05237 8.86392 7.58228 8.47322 7.97298C8.08252 8.36368 7.55262 8.58317 7.00008 8.58317C6.44755 8.58317 5.91764 8.36368 5.52694 7.97298C5.13624 7.58228 4.91675 7.05237 4.91675 6.49984C4.91675 5.9473 5.13624 5.4174 5.52694 5.0267C5.91764 4.636 6.44755 4.4165 7.00008 4.4165C7.55262 4.4165 8.08252 4.636 8.47322 5.0267C8.86392 5.4174 9.08341 5.9473 9.08341 6.49984Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 15.6665C12 16.5873 9.76166 17.3332 6.99999 17.3332C4.23833 17.3332 1.99999 16.5873 1.99999 15.6665M8.04749 13.5782C7.76602 13.849 7.39059 14.0003 6.99999 14.0003C6.60939 14.0003 6.23397 13.849 5.95249 13.5782C3.37833 11.084 -0.0708402 8.29817 1.61083 4.25317C2.52166 2.06567 4.70499 0.666504 6.99999 0.666504C9.29499 0.666504 11.4792 2.0665 12.3892 4.25317C14.0692 8.29234 10.6283 11.0923 8.04749 13.5782Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const MailIcon = ({ className, ...props }) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={cn(className)}
    {...props}
  >
    <g clipPath='url(#clip0)'>
      <path
        d='M18.7501 3.75L9.58341 13.125L0.416748 3.75M0.416748 17.0833L7.17091 10.8333M11.9959 10.8333L18.7501 17.0833'
        stroke='currentColor'
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.7501 3.75H0.416748V17.0833H18.7501V3.75Z'
        stroke='currentColor'
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0'>
        <rect width='20' height='20' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export const PhoneIcon = ({ className, ...props }) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={cn(className)}
    {...props}
  >
    <g clipPath='url(#clip1)'>
      <path
        d='M18.75 5.41667C18.75 3.11542 16.8846 1.25 14.5833 1.25H14.3462C14.0964 1.25004 13.8524 1.32493 13.6456 1.465C13.4387 1.60507 13.2786 1.80389 13.1858 2.03583L12.1583 4.60417C12.0372 4.90699 12.0075 5.23872 12.0731 5.55823C12.1386 5.87775 12.2965 6.171 12.5271 6.40167L13.8092 7.68375C14.0146 7.88917 14.1008 8.18792 14.0167 8.46625C13.617 9.77518 12.9018 10.9659 11.934 11.9336C10.9663 12.9014 9.7756 13.6165 8.46667 14.0162C8.18833 14.1008 7.88958 14.0142 7.68417 13.8087L6.40208 12.5267C6.17142 12.2961 5.87816 12.1382 5.55865 12.0727C5.23913 12.0071 4.90741 12.0368 4.60458 12.1579L2.03583 13.1854C1.80389 13.2782 1.60507 13.4383 1.465 13.6451C1.32493 13.852 1.25004 14.096 1.25 14.3458V14.5833C1.25 16.8846 3.11542 18.75 5.41667 18.75H5.625C12.7542 18.75 18.5558 13.0658 18.7454 5.9825C18.7454 5.98028 18.7461 5.97847 18.7475 5.97708C18.749 5.97565 18.7499 5.97372 18.75 5.97167V5.41667Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip1'>
        <rect width='20' height='20' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export const FacebookIcon = ({ className, ...props }) => (
  <svg
    width='28'
    height='50'
    viewBox='0 0 28 50'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={cn(className)}
    {...props}
  >
    <path
      d='M26.8056 1.5957H19.8207C16.7332 1.5957 13.7721 2.82221 11.5889 5.00541C9.40573 7.18861 8.17922 10.1497 8.17922 13.2372V20.2221H1.19434V29.5353H8.17922V48.1616H17.4924V29.5353H24.4773L26.8056 20.2221H17.4924V13.2372C17.4924 12.6197 17.7377 12.0275 18.1744 11.5908C18.611 11.1542 19.2032 10.9089 19.8207 10.9089H26.8056V1.5957Z'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const InstagramSimpleIcon = ({ className, ...props }) => (
  <svg
    width='64'
    height='65'
    viewBox='0 0 64 65'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={cn(className)}
    {...props}
  >
    <path
      d='M47.5006 12.712C50.0778 12.7122 52.1667 14.8018 52.1667 17.379C52.1665 19.9561 50.0777 22.0449 47.5006 22.045C44.9234 22.045 42.8338 19.9562 42.8336 17.379C42.8336 14.8017 44.9233 12.712 47.5006 12.712Z'
      fill='currentColor'
      stroke='currentColor'
      strokeWidth={2}
    />
    {/* большой круг */}
    <path
      d='M32.0001 44.9341C38.6582 44.9341 44.0557 39.5367 44.0557 32.8786C44.0557 26.2205 38.6582 20.823 32.0001 20.823C25.342 20.823 19.9445 26.2205 19.9445 32.8786C19.9445 39.5367 25.342 44.9341 32.0001 44.9341Z'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
    />
  </svg>
);

/** градиентная иконка Instagram (появится на hover) */
export const InstagramGradientIcon = ({ className, ...props }) => (
  <svg
    viewBox='0 0 512 512'
    role='img'
    aria-label='Instagram'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    className={cn(className)}
    {...props}
  >
    <defs>
      <rect id='insta-bg' width='512' height='512' rx='15%' />
      <radialGradient id='instaRad' cx='0.4' cy='1' r='1'>
        <stop offset='0.1' stopColor='#fd5' />
        <stop offset='0.5' stopColor='#ff543e' />
        <stop offset='1' stopColor='#c837ab' />
      </radialGradient>
      <linearGradient id='instaLin' x2='0.2' y2='1'>
        <stop offset='0.1' stopColor='#3771c8' />
        <stop offset='0.5' stopColor='#60f' stopOpacity='0' />
      </linearGradient>
    </defs>
    {/* фон */}
    <use fill='url(#instaRad)' xlinkHref='#insta-bg' />
    <use fill='url(#instaLin)' xlinkHref='#insta-bg' />
    {/* белые элементы */}
    <g fill='none' stroke='#fff' strokeWidth={30}>
      <rect width={308} height={308} x={102} y={102} rx={81} />
      <circle cx={256} cy={256} r={72} />
      <circle cx={347} cy={165} r={6} />
    </g>
  </svg>
);

export const Icon = ({ name, className, ...props }) => {
  const Comp = iconMap[name];
  return <Comp className={className} {...props} />;
};
