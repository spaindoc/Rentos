// app/components/Feedback.jsx
"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useForm, Controller } from "react-hook-form";

import desktopBg from "@/../public/feedback_bg.jpg";
import mobileBg from "@/../public/form-bg.png";

import { Input, Textarea, Container } from "./ui";
import Button from "./ui/buttons/MainButton";

export default function Feedback() {
  const t = useTranslations();
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: { name: "", phone: "", message: "" },
  });

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const onSubmit = async (data) => {
    setHasError(false);
    setIsSent(false);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      reset();
      setIsSent(true);
    } catch {
      setHasError(true);
    }
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
          onSubmit={handleSubmit(onSubmit)}
          className='
            w-full mx-auto mt-4 px-2.5 space-y-4 box-border
            max-w-[420px]
          '
        >
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                type='text'
                placeholder={t("Feedback.form.name")}
                className='mb-3 xl:mb-7'
              />
            )}
          />
          {errors.name && (
            <p className='text-red-600 text-sm'>
              {t("Feedback.messages.nameRequired")}
            </p>
          )}

          <Controller
            name='phone'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                type='tel'
                placeholder='+380 00 000 00 00'
                className='mb-3 xl:mb-7'
              />
            )}
          />
          {errors.phone && (
            <p className='text-red-600 text-sm'>
              {t("Feedback.messages.phoneRequired")}
            </p>
          )}

          <Controller
            name='message'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Textarea
                {...field}
                placeholder={t("Feedback.form.question")}
                rows={4}
                className='mb-9 2xl:mb-12'
              />
            )}
          />
          {errors.message && (
            <p className='text-red-600 text-sm'>
              {t("Feedback.messages.messageRequired")}
            </p>
          )}

          <Button type='submit' disabled={isSubmitting} className='w-full'>
            {isSubmitting
              ? `${t("Feedback.form.submit")}...`
              : t("Feedback.form.submit")}
          </Button>
        </form>

        {hasError && (
          <p className='mt-4 text-red-600'>{t("Feedback.messages.error")}</p>
        )}
        {isSent && (
          <p className='mt-4 text-green-600'>
            {t("Feedback.messages.success")}
          </p>
        )}
      </Container>
    </section>
  );
}
