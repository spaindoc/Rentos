"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useForm, Controller } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

import desktopBg from "@/../public/feedback_bg.jpg";
import mobileBg from "@/../public/form-bg.png";

import { InputWithAnimatedError } from "./ui/InputWithAnimatedError";
import Button from "./ui/buttons/MainButton";
import { TextareaWithAnimatedError } from "./ui";

export default function Feedback() {
  const t = useTranslations();
  const [isMobile, setIsMobile] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");

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
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();

      reset();
      setPopupMessage(t("Feedback.messages.success"));
      setPopupType("success");
    } catch {
      setPopupMessage(t("Feedback.messages.error"));
      setPopupType("error");
    }

    setTimeout(() => {
      setPopupMessage("");
      setPopupType("");
    }, 4000);
  };

  const bgSrc = isMobile ? mobileBg.src : desktopBg.src;

  return (
    <section
      id='contacts'
      className={`
        relative w-full bg-no-repeat bg-cover bg-center
        min-h-[600px] sm:min-h-[500px] md:min-h-[600px] scroll-mt-35
      `}
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <div
        className={`
          absolute left-1/2
          top-[48%] sm:top-[52%] md:top-[52.5%] lg:top-[51.5%]
          -translate-x-1/2 -translate-y-1/2
          w-[85vw] max-w-[360px] sm:max-w-[400px] md:max-w-[430px]
        `}
      >
        <div className='mx-auto max-w-[1080px] 2xl:max-w-[1400px] h-full flex flex-col items-center justify-center sm:ml-10 sm:mr-8 2xl:mr-0 2xl:ml-3 md:px-1.5'>
          <div
            className='
              w-full mx-auto mb-4 md:mb-8 py-3.5 px-1.5
              text-black bg-white border-2 border-black uppercase
            '
          >
            <h2 className='md:text-[32px] 2xl:text-5xl font-oswald text-center'>
              {t("Feedback.title")}
            </h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full mx-auto mt-4 space-y-4 box-border'
          >
            <Controller
              name='name'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputWithAnimatedError
                  field={field}
                  error={errors.name}
                  placeholder={t("Feedback.form.name")}
                  message={t("Feedback.messages.nameRequired")}
                />
              )}
            />

            <Controller
              name='phone'
              control={control}
              rules={{
                required: true,
                validate: (v) =>
                  /^\+ \d+$/.test(v) || t("Feedback.messages.phoneDigitsOnly"),
              }}
              render={({ field }) => (
                <InputWithAnimatedError
                  field={field}
                  type='tel'
                  error={errors.phone}
                  placeholder='+380 00 000 00 00'
                  message={
                    errors.phone?.type === "required"
                      ? t("Feedback.messages.phoneRequired")
                      : t("Feedback.messages.phoneDigitsOnly")
                  }
                />
              )}
            />

            <Controller
              name='message'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextareaWithAnimatedError
                  {...field}
                  placeholder={t("Feedback.form.question")}
                  message={t("Feedback.messages.messageRequired")}
                  error={errors.message}
                  rows={4}
                  className='mb-6'
                />
              )}
            />

            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full px-0 sm:px-8'
            >
              {isSubmitting
                ? `${t("Feedback.form.submit")}...`
                : t("Feedback.form.submit")}
            </Button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {popupMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className={`
              fixed bottom-8 left-1/2 -translate-x-1/2 z-50
              px-6 py-3 rounded-md shadow-xl text-white text-center
              ${popupType === "success" ? "bg-green-600" : "bg-red-600"}
            `}
          >
            {popupMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
