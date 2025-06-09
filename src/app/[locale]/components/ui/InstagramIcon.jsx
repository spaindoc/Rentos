import React from 'react';
import Link from "next/link";
import Image from "next/image";
import IGIcon from '@/../public/igicon.svg';
import IGIconHover from '@/../public/igicon_hover.svg';

const InstagramIcon = () => {
    return (
        <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full h-full group max-w-[44px] max-h-[44px] lg:max-w-[64px] lg:max-h-[64px]"
        >
            <Image
                className="block group-hover:hidden"
                src={IGIcon}
                alt="Instagram Icon"
                width={44}
                height={44}
            />
            <Image
                className="hidden group-hover:block max-w-[44px] max-h-[44px] lg:max-w-[64px] lg:max-h-[64px]"
                src={IGIconHover}
                alt="Instagram Icon Hover"
                width={44}
                height={44}
            />
        </Link>
    );
};

export default InstagramIcon