import Facebook from '@/../public/icons/facebook_icon.svg'
import Link from "next/link";
import Image from "next/image";

export const FacebookFooterIcon = () => (
    <Link href="facebook.com"
    className="cursor-pointer">
        <Image
        src={Facebook}
        className="w-[44px] h-[44px] lg:w-[64px] lg:h-[64px] flex items-center justify-center group rounded-xl cursor-pointer" alt={`facebook icon`}>
        </Image>
    </Link>
)