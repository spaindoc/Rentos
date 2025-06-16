"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import { oswald } from "@/lib/font";
import Button from "./ui/buttons/MainButton";

export default function Services() {
  const t = useTranslations("services");

  const items = [
    {
      title: t("investments.title"),
      text: t("investments.text"),
    },
    {
      title: t("management.title"),
      text: t("management.text"),
    },
    {
      title: t("development.title"),
      text: t("development.text"),
    },
  ];

  const ref = useRef(null);
  useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const topClass = "top-20";
  const zIndices = ["z-10", "z-20", "z-30"];

  return (
    <section
      className="
        bg-[url('/service_bg.png')]
        bg-cover md:bg-center bg-no-repeat 
      "
    >
      <div className='py-8 md:py-36 max-w-[1600px] mx-auto  md:px-0 flex flex-col lg:flex-row justify-start w-full'>
        <div className='w-full  px-4 lg:w-1/3 md:h-[340px] sticky top-5 lg:top-45'>
          <h2
            className={`${oswald.className} text-right mr-12 mb-15 text-[32px] md:text-[62px]`}
          >
            {t("title")}
          </h2>
        </div>

        <div
          ref={ref}
          className='relative w-full lg:max-w-2xl  md:h-[130vh] md:pl-3'
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className={`
                sticky ${topClass} ${zIndices[i]}
                border-1 border-black bg-white
                py-6 md:py-11 px-4 md:h-[340px] w-full flex flex-col justify-between
                ${i > 0 ? "mt-15" : ""}
              `}
            >
              <div className='flex justify-between items-center mb-11 md:mb-0'>
                <h3 className={`${oswald.className} text-2xl md:text-4xl`}>
                  {item.title}
                </h3>
                <Button
                  className='ml-4 flex-shrink-0'
                  // onClick={handleContact}
                  tabIndex={0}
                  aria-label={t("contact")}
                  // onKeyDown={(e) => {
                  //   if (e.key === "Enter") handleContact();
                  // }}
                >
                  {t("contact")}
                </Button>
              </div>
              <p className='text-base md:text-lg leading-relaxed text-[var-(gray)]'>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
