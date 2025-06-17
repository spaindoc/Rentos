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
        // Нахардкожено але працює )
            className="min-w-full overflow-x-hidden bg-auto bg-no-repeat box-border py-10 md:py-15
                       bg-[position:51%_50%] md:bg-[position:50%_50%] lg:bg-[position:50%_66%]
                       md:bg-size-[300%] lg:bg-size-[180%] xl:bg-size-[130%] 3xl:bg-size-[110%]
                       lg:min-h-screen"
            style={{ backgroundImage: `url(${bg.src})` }}
        >
            <Container>
                <div className="w-full mx-auto mb-14 py-3.5 px-2.5
                               xs:max-w-none xs:w-full sm:w-[70%] max-w-[510px] lg:max-w-[400px] xl:max-w-[410px] 2xl:max-w-[490px] 3xl:max-w-[510px]
                               text-black bg-white border-2 border-black uppercase">
                    <Heading2>{t('Feedback.title')}</Heading2>
                </div>

                <form
                    className="w-full mx-auto mt-4 space-y-4 box-border xs:max-w-none xs:w-full
                              max-w-[510px] sm:w-[70%] lg:max-w-[400px] xl:max-w-[410px] 2xl:max-w-[490px] 3xl:max-w-[510px]"
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
                        className="mb-3 xl:mb-6"
                    />

                    <Textarea
                        name="message"
                        placeholder={t('Feedback.form.question')}
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="mb-2 md:mb-4 2xl:mb-14"
                    />

                    <Button
                        type="submit"
                        className="uppercase  max-w-[510px] xs:max-w-none w-full"
                    >
                        {t('Feedback.form.submit')}
                    </Button>
                </form>
            </Container>
        </section>
    );
};

export default Feedback;