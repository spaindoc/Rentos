import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Instagram from '@/../public/icons/instagram_icon.svg'

const InstagramFooterIcon = () => {
    return (
        <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[44px] h-[44px] lg:w-[64px] lg:h-[64px] flex items-center justify-center group rounded-xl cursor-pointer"
        >
            <Image
                src={Instagram}
                alt="Instagram Icon"
            />
        </Link>
    );
};

export default InstagramFooterIcon;