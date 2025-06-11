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
        //! Напиши будь ласка апішечку, бо я хз які ендпоінти(
    };

    return (
        <section
            className="bg-auto pt-[5vh] pb-[10vh] bg-center bg-no-repeat relative overflow-x-hidden min-w-full"
            style={{ backgroundImage: `url(${bg.src})` }}
        >
            <div className={`relative overflow-x-hidden`}>
                <div className="w-full max-w-full px-4 py-4 box-border">

                    <div className="
                        w-full max-w-[700px]
                        mx-auto text-black bg-white
                        border p-2.5 lg:py-2.5 lg:px-5 lg:border-2 border-black uppercase
                    ">
                        <h3 className="break-words leading-tight text-[38px] lg:text-7xl">
                            {t('Feedback.title')}
                        </h3>
                    </div>

                    <form
                        className="w-full max-w-[700px] mx-auto space-y-4 mt-4 box-border text-black"
                        onSubmit={(e) => {
                            e.preventDefault();
                            onFetch(name, phone, message);
                        }}
                    >
                        <input
                            type="text"
                            placeholder={t('Feedback.form.name')}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="
                                w-full max-w-full min-w-0 box-border
                                border p-2.5 lg:py-2.5 lg:px-5 lg:border-2 border-black
                                text-base leading-tight
                                focus:outline-none
                                bg-white text-[18px] lg:text-[22px] lg:leading-tight
                            "
                        />

                        <input
                            type="tel"
                            placeholder="+380"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="
                                w-full max-w-full min-w-0 box-border
                                border p-2.5 lg:py-2.5 lg:px-5 lg:border-2 border-black
                                text-base leading-tight
                                focus:outline-none bg-white
                                text-[18px] lg:text-[22px] lg:leading-tight
                            "
                        />

                        <textarea
                            placeholder={t('Feedback.form.question')}
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="
                                w-full max-w-full min-w-0 box-border
                                border p-2.5 lg:py-2.5 lg:px-5 lg:border-2 border-black
                                text-base leading-tight resize-none
                                focus:outline-none bg-white
                                text-[18px] lg:text-[22px] lg:leading-tight
                            "
                        />

                        <div className="w-full max-w-full box-border">
                        <button className={`bg-black w-full max-w-[700px] cursor-pointer font-oswald py-4 text-center text-white text-[18px] lg:text-4xl`}>
                            {t('Feedback.form.submit')}
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Feedback;