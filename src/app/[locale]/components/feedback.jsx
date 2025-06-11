'use client';
import { useState } from 'react';
import { useTranslations } from "next-intl";
import bg from '@/../public/feedback_bg.jpg';
import { Heading3, Input, Textarea, Button, Container } from './ui';

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
            <Container>
                <div className="w-full max-w-[700px] mx-auto text-black bg-white border p-2.5 lg:py-2.5 lg:px-5 lg:border-2 border-black uppercase">
                    <Heading3>{t('Feedback.title')}</Heading3>
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
                    />

                    <Input
                        type="tel"
                        placeholder="+380"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <Textarea
                        placeholder={t('Feedback.form.question')}
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
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