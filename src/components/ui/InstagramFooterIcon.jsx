import React from "react";
import Link from "next/link";
import Image from "next/image";
import Instagram from "@/../public/icons/instagram_icon.svg";
import { INSTAGRAM_LINK } from "@/config/site";

const InstagramFooterIcon = () => {
  return (
    <Link
      href={INSTAGRAM_LINK}
      target='_blank'
      rel='noopener noreferrer'
      className='w-[48px] h-[48px] 2xl:w-[64px] 2xl:h-[64px] flex items-center justify-center group rounded-xl cursor-pointer'
    >
      <Image src={Instagram} alt='Instagram Icon' />
    </Link>
  );
};

export default InstagramFooterIcon;
