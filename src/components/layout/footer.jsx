'use client';

import Image from "next/image";
import { useTranslations } from "next-intl";
import logo from '@/../public/footer_logo.png';



import { Container, FacebookIcon, Heading4, InstagramIcon, Paragraph } from "../ui";
import { InstagramGradientIcon, InstagramSimpleIcon } from "@/components/ui/Icons";
import { FooterLogo } from "@/components/ui/footerLogo";
import InstagramFooterIcon from "@/components/ui/InstagramFooterIcon";
import { FacebookFooterIcon } from "@/components/ui/FacebookFooterIcon";


const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="bg-[#000] py-10">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:h-[433px]">
          <div className="flex flex-col lg:h-full mb-8 lg:mb-0 items-center lg:items-start">
            <FooterLogo/>
            <a
              href=""
              className="hidden lg:block mt-auto w-[300px] text-center underline text-base lg:text-[22px] text-flink"
            >
              {t('Footer.links.privacyPolicy')}
            </a>
          </div>

          <div className="flex flex-row justify-between lg:justify-around w-full lg:gap-16 h-full">
            <div className="flex flex-col lg:h-full">
              <Heading4 className="text-white mb-6 lg:mb-11 uppercase">
                {t('Footer.navigation')}
              </Heading4>
              <nav className="flex-1">
                <ul className="flex flex-col gap-4 lg:gap-5 text-white text-base lg:text-xl uppercase">
                  <li><a href="#about">{t('Footer.navigationLinks.about')}</a></li>
                  <li><a href="#services">{t('Footer.navigationLinks.services')}</a></li>
                  <li><a href="#projects">{t('Footer.navigationLinks.projects')}</a></li>
                  <li><a href="#news">{t('Footer.navigationLinks.news')}</a></li>
                  <li><a href="#contacts">{t('Footer.navigationLinks.contacts')}</a></li>
                </ul>
              </nav>
              <a
                href=""
                className="hidden lg:block mt-auto underline text-base lg:text-[22px] text-flink"
              >
                {t('Footer.links.websiteDevelopment')}
              </a>
            </div>

            <div className="flex flex-col lg:h-full">
              <Heading4 className="text-white mb-6 lg:mb-[42px] uppercase">
                {t('Footer.contacts')}
              </Heading4>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col gap-[24px] lg:gap-[26px] text-base  text-white mb-6 lg:flex-1">
                  <div className={'flex flex-col gap-1'}>
                    <Paragraph className="">
                      {t('Footer.contactInfo.address_1')}
                    </Paragraph>
                    <Paragraph className="">
                      {t('Footer.contactInfo.address_2')}
                    </Paragraph>
                  </div>
                  {/*<Paragraph>*/}
                  {/*  {t('Footer.contactInfo.address_1')}*/}
                  {/*</Paragraph>*/}
                  <Paragraph>+380 99 116 85 18</Paragraph>
                  <Paragraph>rentos.ua@gmail.com</Paragraph>
                </div>
                <div className="flex justify-start lg:justify-between lg:mt-auto gap-7 lg:gap-0">
                  <InstagramFooterIcon/>
                  <FacebookFooterIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7 lg:hidden mt-8 text-base text-flink">
          <a href="" className="underline">
            {t('Footer.links.websiteDevelopment')}
          </a>
          <a href="" className=" underline text-base ">
            {t('Footer.links.privacyPolicy')}
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;