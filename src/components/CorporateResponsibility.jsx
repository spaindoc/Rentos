'use client';
import React from 'react';
import { Container, Heading2, Paragraph } from "@/components/ui";
import { useTranslations } from "next-intl";
import Image from "next/image";
import img from '@/../public/About_img.jpg';

const CorporateResponsibility = () => {
    const t = useTranslations('corporateResponsibility');

    return (
        <section className="py-16">
            <Container>
                <div className="flex flex-col lg:flex-row justify-between mb-6 md:mb-10 lg:mb-[130px]">
                    <div className="flex flex-col items-center text-center lg:text-left lg:block">
                        <Heading2 className="mb-6 md:mb-10 lg:mb-[76px] max-w-[476px] uppercase leading-10 lg:leading-20 ">
                            {t('title')}
                        </Heading2>
                        <div className="flex flex-col lg:flex-row items-start gap-4 md:gap-6 lg:gap-8">
                            <div className="flex flex-col gap-4 md:gap-6 max-w-[500px] text-gray">
                                <Paragraph>{t('sub_1.item_1')}</Paragraph>
                                <Paragraph>{t('sub_1.item_2')}</Paragraph>
                            </div>
                            <div className="flex-shrink-0 w-full lg:hidden">
                                <Image
                                    src={img}
                                    alt="Corporate Responsibility"
                                    className="w-full h-[200px] md:h-[300px] xl:h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-4 md:gap-6 max-w-[500px] text-gray ">
                                <Paragraph>{t('sub_2.item_1')}</Paragraph>
                                <Paragraph>{t('sub_2.item_2')}</Paragraph>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-full lg:w-[400px] xl:w-[500px] hidden lg:block">
                        <Image
                            src={img}
                            alt="Corporate Responsibility"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="space-y-1 text-center md:text-left p-4 md:p-6 bg-white rounded-lg shadow-sm">
                            <Heading2 className="">{t(`items.item_${i}.title`)}</Heading2>
                            <Paragraph className="">{t(`items.item_${i}.title_after`)}</Paragraph>
                            <Paragraph className="">{t(`items.item_${i}.subtitle`)}</Paragraph>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default CorporateResponsibility;
