import Link from "next/link";
import { InstagramSimpleIcon, InstagramGradientIcon } from "./Icons";

export default function InstagramLink() {
  return (
    <Link
      href='https://www.instagram.com/yourpage'
      target='_blank'
      rel='noopener noreferrer'
      className='group
    relative
    w-11 h-11
    border-2 border-black
    flex items-center justify-center
    bg-transparent
    hover:bg-[radial-gradient(circle_farthest-corner_at_28%_100%,#fcdf8f_0%,#fbd377_10%,#fa8e37_22%,#f73344_35%,transparent_65%),linear-gradient(145deg,#3051f1_10%,#c92bb7_70%)]
    transition-colors duration-200 hover:border-0 '
    >
      <InstagramSimpleIcon
        className='
          relative z-20
          w-full h-full
          transition-opacity duration-200
          group-hover:opacity-0
        '
      />

      <InstagramGradientIcon
        className='
          absolute inset-0 z-10
          w-full h-full
          opacity-0
          transition-opacity duration-200
          group-hover:opacity-100
        '
      />
    </Link>
  );
}
