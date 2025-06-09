'use client';
import React, { useState } from 'react';
import { useTranslations } from "next-intl";
import bg from '@/../public/feedback_bg.jpg';
import Button from "@/app/[locale]/components/ui/button";

const Feedback = () => {
    const t = useTranslations();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const onFetch = async (name, phone, message) => {
    };//! Напиши будь ласка апішечку, бо я хз які ендпоінти(

    return (
        <section className="bg-auto min-h-[100vh] bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${bg.src})` }}>
            <div className="border p-2.5 lg:py-2.5 lg:px-5 lg:border-2 border-black uppercase">
                <h3>{t('Feedback.title')}</h3>
            </div>

            <form className="space-y-4 mt-4" onSubmit={(e) => {
                e.preventDefault();
                onFetch(name, phone, message);
            }}>
                <input
                    type="text"
                    placeholder={t('Feedback.form.name')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border p-2.5 lg:py-2.5 lg:px-5 lg:border-2 border-black"
                />

                <input
                    type="tel"
                    placeholder="+380"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border p-2.5 lg:py-2.5 lg:px-5 lg:border-2 border-black"
                />

                <textarea
                    placeholder={t('Feedback.form.question')}
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border p-2.5 lg:py-2.5 lg:px-5 lg:border-2 border-black"
                />

                <Button type="submit">
                    {t('Feedback.form.submit')}
                </Button>
            </form>
        </section>
    );
};

export default Feedback;
