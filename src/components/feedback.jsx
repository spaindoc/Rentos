"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import desktopBg from "@/../public/feedback_bg.jpg";
import mobileBg from "@/../public/form-bg.png";
import { Input, Textarea, Container } from "./ui";
import Button from "./ui/buttons/MainButton";

const Feedback = () => {
  const t = useTranslations();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement API call
    console.log("Form data:", form);
  };

  const bgSrc = isMobile ? mobileBg.src : desktopBg.src;

  return (
    <section
      id='contacts'
      className={`
        relative
        w-full
        min-h-[580px]
        md:min-h-[780px]
        overflow-y-auto
        bg-no-repeat bg-cover
        flex items-center justify-center

        bg-[position:51%_40%]
        md:bg-[position:50%_50%]
        lg:bg-[position:50%_61%]
        xl:bg-[position:50%_57%]
        2xl:bg-[position:50%_61%]
      `}
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <Container className='h-full flex flex-col items-center justify-center md:-mt-14'>
        <div
          className='
            w-full mx-auto mb-4 md:mb-9 py-3.5 px-2.5
            max-w-[380px] md:max-w-[400px]
            text-black bg-white border-2 border-black uppercase
          '
        >
          <h2 className='md:text-[48px] font-oswald text-center'>
            {t("Feedback.title")}
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className='
            w-full mx-auto mt-4 px-2.5 space-y-4 box-border
            max-w-[420px]
          '
        >
          <Input
            name='name'
            type='text'
            placeholder={t("Feedback.form.name")}
            value={form.name}
            onChange={handleChange}
            className='mb-3 xl:mb-7'
          />

          <Input
            name='phone'
            type='tel'
            placeholder='+380 00 000 00 00'
            value={form.phone}
            onChange={handleChange}
            className='mb-3 xl:mb-7'
          />

          <Textarea
            name='message'
            placeholder={t("Feedback.form.question")}
            rows={4}
            value={form.message}
            onChange={handleChange}
            className='mb-9 2xl:mb-12'
          />

          <Button type='submit' className='w-full'>
            {t("Feedback.form.submit")}
          </Button>
        </form>
      </Container>
    </section>
  );
};

export default Feedback;
