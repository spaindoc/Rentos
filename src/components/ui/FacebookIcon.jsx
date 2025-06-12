import React from 'react';
import Link from "next/link";
import Image from "next/image";
import facebook from '@/../public/facebook_icon.svg';
import facebook_hover from '@/../public/facebook_hover.svg';

const FacebookIcon = () => {
    return (
        <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center group"
        >
            <Image
                src={facebook}
                alt="Facebook icon"
                className="block group-hover:hidden  w-[44px] h-[44px] lg:w-[64px] lg:h-[64px] "
                width={64}
                height={64}
            />
            <Image
                src={facebook_hover}
                alt="Facebook icon hover"
                className="hidden group-hover:block w-[44px] h-[44px] lg:w-[64px] lg:h-[64px] "
                width={64}
                height={64}
            />
        </Link>
    );
};

export default FacebookIcon;
