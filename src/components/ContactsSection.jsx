"use client";

import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  FacebookIcon,
  InstagramGradientIcon,
  InstagramIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "./ui/Icons";

import { FB_LINK, INSTAGRAM_LINK } from "@/config/site";
import InstagramLink from "./ui/InstagramLink";

export default function ContactsSection() {
  const t = useTranslations("contacts");

  const center = { lat: 50.6197, lng: 26.2541 };
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    console.error(loadError);
    return <p className='text-red-500'>{t("loadError")}</p>;
  }

  return (
    <section className='py-10 2xl:py-16 px-4 lg:px-0 max-w-[1080px] 2xl:max-w-[1400px] mx-auto'>
      {/* Заголовок */}
      <h2 className='text-[32px] md:text-right lg:text-left lg:text-[54px]  w-1/2 md:w-1/3 ml-auto md:mx-auto font-oswald uppercase mb-6 md:mb-20'>
        {t("contactsTitle")}
      </h2>

      <div className='flex flex-col gap-8 sm:flex-row justify-between'>
        <div className='flex flex-col sm:w-[218px] 2xl:w-1/3 gap-6  2xl:gap-10 justify-between'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-between gap-4'>
              <div className='w-11 h-11 border-2 border-black flex items-center justify-center'>
                <LocationIcon className='stroke-black w-5 h-5' />
              </div>
              <p className='text-base 2xl:text-xl'>
                {t("addressLine1")}
                <br />
                {t("addressLine2")}
              </p>
            </div>
            <Link
              href={INSTAGRAM_LINK}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-shrink-0'
              aria-label={t("instagram")}
            >
              <InstagramGradientIcon className='w-11 h-11 lg:hidden' />
            </Link>
          </div>

          {/* Телефон */}
          <div className='flex items-center gap-4'>
            <div className='w-11 h-11 border-2 border-black flex items-center justify-center'>
              <PhoneIcon className='stroke-black w-5 h-5' />
            </div>
            <Link
              href='tel:+380991168518'
              className='text-base 2xl:text-xl hover:underline'
              aria-label={t("phone")}
            >
              +380 99 116 85 18
            </Link>
          </div>

          {/* Email + Facebook */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <div className='w-11 h-11 border-2 border-black flex items-center justify-center'>
                <MailIcon className='stroke-black w-5 h-5 2xl:w-7 lg:h-7' />
              </div>
              <Link
                href='mailto:rentos.ua@gmail.com'
                className='text-base 2xl:text-xl hover:underline'
                aria-label={t("email")}
              >
                rentos.ua@gmail.com
              </Link>
            </div>
            <Link
              href={FB_LINK}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-shrink-0 bg-[#3D5A98] lg:hidden'
              aria-label={t("facebook")}
            >
              <FacebookIcon className='w-11 h-11 p-1 fill-white stroke-none' />
            </Link>
          </div>

          {/* Иконки Facebook + Instagram на десктопе */}
          <div className='hidden lg:flex items-center gap-15 mt-4'>
            <Link
              href={FB_LINK}
              target='_blank'
              rel='noopener noreferrer'
              className='
                group
                w-11 h-11
                border-2 border-black
                flex items-center justify-center
                text-black
                hover:text-white
                hover:bg-[#3D5A98]
                hover:border-0
                transition
              '
              aria-label={t("facebook")}
            >
              <FacebookIcon
                className='
                  w-5 h-5
                  fill-transparent
                  stroke-current
                  group-hover:fill-white
                  group-hover:stroke-none
                '
              />
            </Link>
            <InstagramLink aria-label={t("instagram")} />
          </div>
        </div>

        {/* ——— Карта ——— */}
        <div className='flex-1 max-w-[700px] 2xl:max-w-2/3 md:-ml-8'>
          <div className='w-full h-64 sm:h-80 2xl:h-[400px] border-2 border-black'>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={center}
                zoom={15}
                options={{
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                }}
              >
                <Marker position={center} />
              </GoogleMap>
            ) : (
              <p className='flex items-center justify-center h-full'>
                {t("loadingMap")}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
