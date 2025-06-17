'use client';
import React from 'react';
import { Container, Heading2, Paragraph } from "@/components/ui";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CorporateResponsibility = () => {
    const t = useTranslations('corporateResponsibility');

    return (
        <section>
            <Container className="grid grid-cols-3 grid-rows-3">
                <div className="col-span-3">
                    <Heading2 className="text-center mb-12">
                        {t('title')}
                    </Heading2>
                </div>

                {/* Stats Items */}
                <div className="col-span-3 lg:col-span-1">
                    <div className="space-y-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold">{t('items.item_1.title')}</div>
                            <div className="text-lg">{t('items.item_1.title_after')}</div>
                            <div className="mt-2">{t('items.item_1.subtitle')}</div>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 lg:col-span-1">
                    <div className="space-y-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold">{t('items.item_2.title')}</div>
                            <div className="text-lg">{t('items.item_2.title_after')}</div>
                            <div className="mt-2">{t('items.item_2.subtitle')}</div>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 lg:col-span-1">
                    <div className="space-y-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold">{t('items.item_3.title')}</div>
                            <div className="text-lg">{t('items.item_3.title_after')}</div>
                            <div className="mt-2">{t('items.item_3.subtitle')}</div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-span-3 lg:col-span-1">
                    <div className="space-y-6">
                        <Paragraph className="text-lg">
                            {t('sub_1.item_1')}
                        </Paragraph>
                        <Paragraph className="text-lg">
                            {t('sub_1.item_2')}
                        </Paragraph>
                    </div>
                </div>

                <div className="col-span-3 lg:col-span-2">
                    <div className="space-y-6">
                        <Paragraph className="text-lg">
                            {t('sub_2.item_1')}
                        </Paragraph>
                        <Paragraph className="text-lg font-bold">
                            {t('sub_2.item_2')}
                        </Paragraph>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CorporateResponsibility;