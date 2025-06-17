"use client";

import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import Link from "next/link";

import {
  FacebookIcon,
  InstagramGradientIcon,
  InstagramIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "./ui/Icons";
import InstagramLink from "./ui/InstagramLink";

export default function ContactsSection() {
  const center = { lat: 50.6197, lng: 26.2541 };
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    console.error(loadError);
    return <p className='text-red-500'>Не вдалося завантажити карту</p>;
  }

  return (
    <section className='py-10 2xl:py-16 px-4 lg:px-6 max-w-[1600px] mx-auto'>
      <h2 className=' text-[32px] text-right lg:text-left lg:text-[62px] font-oswald uppercase mb-12'>
        Контакти
      </h2>

      <div className='flex flex-col gap-8 lg:flex-row'>
        {/* ——— Контакти ——— */}
        <div className='flex flex-col lg:w-1/3 gap-5 2xl:gap-10 justify-between'>
          {/* Адресa + Instagram */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <div className='w-11 h-11 lg:w-16 lg:h-16 border-2 border-black flex items-center justify-center'>
                <LocationIcon className='stroke-black w-5 h-5 lg:w-7 lg:h-7' />
              </div>
              <p className=' text-base 2xl:text-xl'>
                М. Рівне
                <br />
                вул. Кавказька 9а
              </p>
            </div>
            <Link
              href='https://www.instagram.com/yourpage'
              target='_blank'
              rel='noopener noreferrer'
              className='flex-shrink-0'
            >
              <InstagramGradientIcon className='w-11 h-11 lg:hidden' />
            </Link>
          </div>

          {/* Телефон */}
          <div className='flex items-center gap-4'>
            <div className='w-11 h-11 lg:w-16 lg:h-16 border-2 border-black flex items-center justify-center'>
              <PhoneIcon className='stroke-black w-5 h-5 lg:w-7 lg:h-7' />
            </div>
            <Link
              href='tel:+380991168518'
              className='text-base 2xl:text-xl hover:underline'
            >
              +380 99 116 85 18
            </Link>
          </div>

          {/* Email + Facebook */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <div className='w-11 h-11 lg:w-16 lg:h-16 border-2 border-black flex items-center justify-center'>
                <MailIcon className='stroke-black w-5 h-5 2xl:w-7 lg:h-7' />
              </div>
              <Link
                href='mailto:rentos.ua@gmail.com'
                className='text-base 2xl:text-xl hover:underline'
              >
                rentos.ua@gmail.com
              </Link>
            </div>
            <Link
              href='https://www.facebook.com/yourpage'
              target='_blank'
              rel='noopener noreferrer'
              className='flex-shrink-0 bg-[#3D5A98]  lg:hidden '
            >
              <FacebookIcon className='w-11 h-11 p-1  fill-white stroke-none ' />
            </Link>
          </div>
          <div className='hidden lg:flex items-center gap-15 mt-4'>
            <Link
              href='https://www.facebook.com/yourpage'
              target='_blank'
              rel='noopener noreferrer'
              className='
              group                    
              w-11 h-11 lg:w-16 lg:h-16
              border-2 border-black
              flex items-center justify-center
              text-black               
              hover:text-white
              hover:bg-[#3D5A98]
              hover:border-0          
              transition'
            >
              <FacebookIcon
                className='
                w-5 h-5 lg:w-7 lg:h-7
                fill-transparent        
                stroke-current         
                group-hover:fill-white   
                group-hover:stroke-none'
              />
            </Link>
            <InstagramLink />
          </div>
        </div>

        {/* ——— Карта ——— */}
        <div className='flex-1 lg:w-2/3'>
          <div className='w-full h-64 sm:h-80 lg:h-[400px] border-2 border-black'>
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
                Завантаження карти…
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
