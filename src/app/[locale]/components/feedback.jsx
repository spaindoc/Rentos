'use client';
import { useState } from 'react';
import { useTranslations } from "next-intl";
import bg from '@/../public/feedback_bg.jpg';
import { Heading2, Input, Textarea, Button, Container } from './ui';

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
            className="bg-auto box-border min-h-screen py-[10vh] bg-[position:50%_55%] lg:bg-[position:50%_65%] bg-no-repeat relative overflow-x-hidden min-w-full"
            style={{ backgroundImage: `url(${bg.src})` }}
        >
            <Container>
                <div className="w-full max-w-[700px] mb-14 mx-auto text-black bg-white border-2 py-3.5 px-2.5 border-black uppercase">
                    <Heading2>{t('Feedback.title')}</Heading2>
                </div>

                <form
                    className="w-full max-w-[700px] mx-auto space-y-4 mt-4 box-border text-black"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onFetch(name, phone, message);
                    }}
                >
                    <Input
                        type="text"
                        placeholder={t('Feedback.form.name')}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mb-6"
                    />

                    <Input
                        type="tel"
                        placeholder="+380"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mb-6"
                    />

                    <Textarea
                        placeholder={t('Feedback.form.question')}
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mb-12"
                    />

                    <Button
                        type="submit"
                        className="w-full max-w-[700px] uppercase text-[18px] lg:text-4xl"
                        variant="primary"
                    >
                        {t('Feedback.form.submit')}
                    </Button>
                </form>
            </Container>
        </section>
    );
};

export default Feedback;