import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/footer_logo.png";

export const FooterLogo = () => {
  return (
    <Link
      href='/'
      target='_blank'
      className='flex items-center justify-center group w-full'
    >
      <Image
        className=' w-full max-w-[195px] h-[160px]  2xl:w-[260px] 2xl:h-[212px]'
        src={Logo}
        alt='Footer Logo'
      />
    </Link>
  );
};
