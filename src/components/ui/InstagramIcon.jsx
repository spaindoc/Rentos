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
            className="flex items-center justify-center group "
        >
            <Image
                className="group-hover:hidden w-[44px] h-[44px] lg:w-[64px] lg:h-[64px] object-contain"
                src={IGIcon}
                alt="Instagram Icon"
                width={64}
                height={64}
            />
            <Image
                className="hidden group-hover:block w-[44px] h-[44px] lg:w-[64px] lg:h-[64px] object-contain"
                src={IGIconHover}
                alt="Instagram Icon Hover"
                width={64}
                height={64}
            />
        </Link>
    );
};

export default InstagramIcon;