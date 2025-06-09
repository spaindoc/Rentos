import React from 'react';
import Image from "next/image";
import aboutImage from "@/../public/About_img.jpg"
import {useTranslations} from "next-intl";

const About = () => {
    const t = useTranslations('AboutSection')


    return (
        <div className={`flex justify-between items-center`}>
            <Image src={aboutImage} alt={`about_us`}/>
            <div>
                <h2>{t('title')}</h2>
                <div className={`flex justify-between items-center`}>
                    <p>{t('description.part1') }</p>
                        <ul className="list-disc pl-6">
                          <li>{t('list.management')}</li>
                          <li>{t('list.development')}</li>
                          <li>{t('list.consulting')}</li>
                          <li>{t('list.investment')}</li>
                        </ul>
                    <p>
                        {t('description.part2')}
                    </p>
                    <p>{t('description.objects')}</p>
                </div>
            </div>
        </div>
    );
};

export default About;