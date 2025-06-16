import {
  InstagramSimpleIcon,
  InstagramGradientIcon,
} from "@/components/ui/Icons";
import Link from "next/link";

export default function InstagramLink() {
  return (
    <Link
      href='https://www.instagram.com/yourpage'
      target='_blank'
      rel='noopener noreferrer'
      className='
        group
        relative              
        w-16 h-16
        border-2 border-black
        flex items-center justify-center
        transition-colors
        hover:border-0
      '
    >
      <InstagramSimpleIcon
        className='
          relative z-10         
          w-16 h-16
          text-current
          group-hover:opacity-0 
          transition-opacity
        '
      />

      <InstagramGradientIcon
        className='
          absolute inset-0     
          w-full h-full
          hidden 
          group-hover:block     
        '
      />
    </Link>
  );
}
