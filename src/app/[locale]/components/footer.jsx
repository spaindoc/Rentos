'use client';

import Image from "next/image";
import { useTranslations } from "next-intl";
import logo from '@/../public/logo.png';
import InstagramIcon from "@/app/[locale]/components/ui/InstagramIcon";
import FacebookIcon from "@/app/[locale]/components/ui/FacebookIcon";
import {Container, Heading4, Paragraph} from '@/app/[locale]/components/ui'


const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="bg-[#000] py-10">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:h-[433px]">
          <div className="flex flex-col lg:h-full mb-8 lg:mb-0 items-center lg:items-start">
            <Image
              src={logo}
              alt="Rentos Group"
              width={260}
              height={212}
              className="w-[180px] lg:w-[260px] h-auto"
            />
            <a
              href=""
              className="hidden lg:block mt-auto w-[300px] text-center underline text-[18px] lg:text-[22px] text-light-blue"
            >
              {t('Footer.links.privacyPolicy')}
            </a>
          </div>

          <div className="flex flex-row justify-between lg:justify-around w-full lg:gap-16 h-full">
            <div className="flex flex-col lg:h-full">
              <Heading4 className="text-white mb-6 lg:mb-11">
                {t('Footer.navigation')}
              </Heading4>
              <nav className="flex-1">
                <ul className="flex flex-col gap-4 lg:gap-5 text-white text-base lg:text-xl">
                  <li><a href="">{t('Footer.navigationLinks.about')}</a></li>
                  <li><a href="">{t('Footer.navigationLinks.services')}</a></li>
                  <li><a href="">{t('Footer.navigationLinks.projects')}</a></li>
                  <li><a href="">{t('Footer.navigationLinks.news')}</a></li>
                  <li><a href="">{t('Footer.navigationLinks.contacts')}</a></li>
                </ul>
              </nav>
              <a
                href=""
                className="hidden lg:block mt-auto underline text-[18px] lg:text-[22px] text-light-blue"
              >
                {t('Footer.links.websiteDevelopment')}
              </a>
            </div>

            <div className="flex flex-col lg:h-full">
              <Heading4 className="text-white mb-6 lg:mb-11">
                {t('Footer.contacts')}
              </Heading4>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col gap-6 lg:gap-[57px] text-base lg:text-xl text-white mb-6 lg:flex-1">
                  <Paragraph className="max-w-[120px] lg:max-w-none">
                    {t('Footer.contactInfo.address')}
                  </Paragraph>
                  <Paragraph>+380 99 116 85 18</Paragraph>
                  <Paragraph>rentos.ua@gmail.com</Paragraph>
                </div>
                <div className="flex justify-start lg:justify-between lg:mt-auto gap-4 lg:gap-0">
                  <InstagramIcon/>
                  <FacebookIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:hidden mt-8 text-[18px] lg:text-[22px]">
          <a href="" className="text-[18px] underline text-light-blue">
            {t('Footer.links.websiteDevelopment')}
          </a>
          <a href="" className=" underline text-[18px] text-light-blue">
            {t('Footer.links.privacyPolicy')}
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;