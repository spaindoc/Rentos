'use client';
import { useState } from 'react';
import { useTranslations } from "next-intl";
import bg from '@/../public/feedback_bg.jpg';
import { Heading2, Input, Textarea, Button, Container } from './ui';

const Feedback = () => {
    const t = useTranslations();
    const [form, setForm] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Implement API call
        console.log('Form data:', form);
    };

    return (
        <section
            className="bg-auto box-border min-h-80 lg:min-h-screen py-15 bg-[position:50%_50%] lg:bg-[position:50%_66%] lg:bg-size-[112%] bg-no-repeat relative overflow-x-hidden min-w-full"
            style={{ backgroundImage: `url(${bg.src})` }}
        >
            <Container>
                <div className="w-full max-w-[510px] mb-14 mx-auto text-black bg-white border-2 py-3.5 px-2.5 border-black uppercase">
                    <Heading2>{t('Feedback.title')}</Heading2>
                </div>

                <form
                    className="w-full max-w-[510px] mx-auto space-y-4 mt-4 box-border text-black"
                    onSubmit={handleSubmit}
                >
                    <Input
                        name="name"
                        type="text"
                        placeholder={t('Feedback.form.name')}
                        value={form.name}
                        onChange={handleChange}
                        className="mb-6"
                    />

                    <Input
                        name="phone"
                        type="tel"
                        placeholder="+380 00 000 00 00"
                        value={form.phone}
                        onChange={handleChange}
                        className="mb-6"
                    />

                    <Textarea
                        name="message"
                        placeholder={t('Feedback.form.question')}
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="mb-14"
                    />

                    <Button
                        type="submit"
                        className="w-full max-w-[510px] uppercase text-[18px] lg:text-4xl"
                    >
                        {t('Feedback.form.submit')}
                    </Button>
                </form>
            </Container>
        </section>
    );
};

export default Feedback;