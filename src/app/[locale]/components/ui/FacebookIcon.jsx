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
            className="flex items-center justify-center w-full h-full group"
        >
            <Image
                src={facebook}
                alt="Facebook icon"
                className="block group-hover:hidden"
                width={44}
                height={44}
            />
            <Image
                src={facebook_hover}
                alt="Facebook icon hover"
                className="hidden group-hover:block"
                width={44}
                height={44}
            />
        </Link>
    );
};

export default FacebookIcon;
