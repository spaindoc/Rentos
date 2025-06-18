import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/../public/footer_logo.png'

export const FooterLogo = () => {
    return (
        <Link
            href="/"
            target="_blank"
            className="flex items-center justify-center group"
        >
            <Image
                className="w-[186px] h-[151px]  lg:w-[260px] lg:h-[212px]"
                src={Logo}
                alt="Footer Logo"
            />
        </Link>
    )
}