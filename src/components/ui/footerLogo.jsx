import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/black-logo.svg";

export const FooterLogo = () => {
  return (
    <Link
      href='/'
      target='_blank'
      className='flex items-center justify-center group w-full'
    >
      <Image
        className=' w-full max-w-[195px] h-[160px]  '
        src={Logo}
        alt='Footer Logo'
      />
    </Link>
  );
};
