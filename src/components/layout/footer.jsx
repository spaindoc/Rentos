// app/components/Footer.tsx
"use client";

import { useLocale, useTranslations } from "next-intl";
import { Container, Heading4 } from "../ui";
import { FooterLogo } from "../ui/footerLogo";
import InstagramFooterIcon from "../ui/InstagramFooterIcon";
import { FacebookFooterIcon } from "../ui/FacebookFooterIcon";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className='bg-black py-10 md:py-20'>
      <Container>
        {/** DESKTOP FOOTER — НИЧЕГО НЕ ТРОГАЕМ **/}
        <div className='hidden md:flex flex-col lg:flex-row items-center 2xl:items-start lg:justify-between h-[324px] 2xl:h-[433px]'>
          <div className='flex flex-col lg:h-full mb-8 lg:mb-0 items-center lg:items-start'>
            <FooterLogo />
            <Link
              href='/privacy-policy'
              locale={locale}
              className='hidden lg:block mt-auto w-[300px] text-center underline text-base 2xl:text-lg text-flink'
            >
              {t("Footer.links.privacyPolicy")}
            </Link>
          </div>

          <div className='flex flex-row justify-between lg:justify-around w-full lg:gap-16 h-full'>
            <div className='flex flex-col lg:h-full'>
              <Heading4 className='text-white mb-6 lg:mb-11 uppercase'>
                {t("Footer.navigation")}
              </Heading4>
              <nav className='flex-1'>
                <ul className='flex flex-col gap-4 lg:gap-5 text-white text-[15px] 2xl:text-xl uppercase'>
                  <li>
                    <Link href='#about'>
                      {t("Footer.navigationLinks.about")}
                    </Link>
                  </li>
                  <li>
                    <Link href='#services'>
                      {t("Footer.navigationLinks.services")}
                    </Link>
                  </li>
                  <li>
                    <Link href='#projects'>
                      {t("Footer.navigationLinks.projects")}
                    </Link>
                  </li>
                  <li>
                    <Link href='#news'>{t("Footer.navigationLinks.news")}</Link>
                  </li>
                  <li>
                    <Link href='#contacts'>
                      {t("Footer.navigationLinks.contacts")}
                    </Link>
                  </li>
                </ul>
              </nav>
              <Link
                href='#'
                className='hidden lg:block mt-auto underline text-base 2xl:text-lg text-flink'
              >
                {t("Footer.links.websiteDevelopment")}
              </Link>
            </div>

            <div className='flex flex-col lg:h-full'>
              <Heading4 className='text-white mb-6 lg:mb-[42px] uppercase'>
                {t("Footer.contacts")}
              </Heading4>
              <div className='flex flex-col flex-1 gap-[24px] lg:gap-[26px] text-base text-white mb-6 lg:flex-1'>
                <p className='text-[16.5px] 2xl:text-lg'>
                  {t("Footer.contactInfo.address_1")}
                </p>
                <p className='text-[16.5px] 2xl:text-lg'>
                  {t("Footer.contactInfo.address_2")}
                </p>
                <Link
                  href={"tel:+380991168518"}
                  className='text-[16.5px] 2xl:text-lg'
                >
                  +380 99 116 85 18
                </Link>
                <Link
                  href={"mailto:rentos.ua@gmail.com"}
                  className='text-[16.5px] 2xl:text-lg'
                >
                  rentos.ua@gmail.com
                </Link>
              </div>
              <div className='flex justify-start lg:justify-between lg:mt-auto gap-7 lg:gap-0'>
                <InstagramFooterIcon />
                <FacebookFooterIcon />
              </div>
            </div>
          </div>
        </div>

        {/** MOBILE FOOTER — ХАРДКОД **/}
        <div className='md:hidden flex flex-col items-center px-4'>
          {/* Логотип */}
          <div className='mb-6'>
            <FooterLogo />
          </div>

          {/* Навігація | Контакти */}
          <div className='flex w-full mb-6'>
            {/* Навігація */}
            <div className='w-1/2 pr-2'>
              <h4 className='text-white text-2xl uppercase  font-oswald mb-4'>
                Навігація
              </h4>
              <ul className='space-y-3 text-white font-oswald  uppercase text-lg'>
                <li>
                  <Link href='#about'>{t("Footer.navigationLinks.about")}</Link>
                </li>
                <li>
                  <Link href='#services'>
                    {t("Footer.navigationLinks.services")}
                  </Link>
                </li>
                <li>
                  <Link href='#projects'>
                    {t("Footer.navigationLinks.projects")}
                  </Link>
                </li>
                <li>
                  <Link href='#news'>{t("Footer.navigationLinks.news")}</Link>
                </li>
                <li>
                  <Link href='#contacts'>
                    {t("Footer.navigationLinks.contacts")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Контакти */}
            <div className='w-1/2 pl-2'>
              <h4 className='text-white uppercase text-2xl font-oswald mb-4'>
                Контакти
              </h4>
              <ul className='space-y-2 text-white text-base'>
                <li>м. Рівне</li>
                <li>вул. Кавказька 9а</li>
                <li>+380 99 116 85 18</li>
                <li>rentos.ua@gmail.com</li>
              </ul>
              <div className='flex justify-start gap-6 mt-4'>
                <InstagramFooterIcon />
                <FacebookFooterIcon />
              </div>
            </div>
          </div>

          {/* Ссылки внизу */}
          <div className='flex flex-col gap-4 mb-6 items-start text-start w-full mt-10 '>
            <Link href='#' className='underline text-flink'>
              Розробка сайту
            </Link>
            <Link
              href='/privacy-policy'
              locale={locale}
              className='underline text-flink'
            >
              Політика конфіденційності
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
