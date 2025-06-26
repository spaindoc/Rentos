import Facebook from "@/../public/icons/facebook_icon.svg";
import Link from "next/link";
import Image from "next/image";
import { FB_LINK } from "@/config/site";

export const FacebookFooterIcon = () => (
  <Link href={FB_LINK} target='_blank' className='cursor-pointer'>
    <Image
      src={Facebook}
      className='w-[48px] h-[48px] 2xl:w-[64px] 2xl:h-[64px] flex items-center justify-center group rounded-xl cursor-pointer'
      alt={`facebook icon`}
    ></Image>
  </Link>
);
