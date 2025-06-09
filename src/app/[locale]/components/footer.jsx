'use client';

import React from 'react';
import logo from '@/../public/logo.png';
import { useTranslations } from "next-intl";
import Image from "next/image";
import InstagramIcon from "@/app/[locale]/components/ui/InstagramIcon";
import FacebookIcon from "@/app/[locale]/components/ui/FacebookIcon";

const Footer = () => {
  const t = useTranslations();

  return (
      <footer className="w-full bg-[#000] py-6 uppercase font-normal"> {/*? З юай кіту не метчиться бекграунд з лого(*/}
          <div className="container mx-auto px-4 lg:px-2">
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
                          className="underline text-flink text-xl normal-case hidden lg:block mt-auto w-[260px] text-center" // тут трохи хардкоду але нічого не придумав(
                          href=""
                      >
                          {t('Footer.links.privacyPolicy')}
                      </a>
                  </div>

                  <div className="flex flex-row justify-between lg:justify-around w-full lg:gap-16 h-full">
                      <div className="flex flex-col lg:h-full">
                          <h3 className="text-white text-lg lg:text-4xl mb-6 lg:mb-11">
                              {t('Footer.navigation')}
                          </h3>
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
                              className="underline text-flink text-xl normal-case hidden lg:block mt-auto"
                              href=""
                          >
                              {t('Footer.links.websiteDevelopment')}
                          </a>
                      </div>

                      <div className="flex flex-col lg:h-full">
                          <h3 className="text-white text-lg lg:text-4xl mb-6 lg:mb-11">
                              {t('Footer.contacts')}
                          </h3>
                          <div className="flex flex-col flex-1">
                              <div className="flex flex-col gap-6 lg:gap-[57px] text-base lg:text-xl text-white mb-6 lg:flex-1">
                                  <p className="max-w-[120px] lg:max-w-none">
                                      {t('Footer.contactInfo.address')}
                                  </p>
                                  <p>+380 99 116 85 18</p>
                                  <p>rentos.ua@gmail.com</p>
                              </div>
                              <div className="flex justify-start lg:justify-between lg:mt-auto gap-4 lg:gap-0">
                                  <InstagramIcon/>
                                  <FacebookIcon/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="flex flex-col gap-4 lg:hidden mt-8">
                  <a className="underline text-flink text-base normal-case" href="">
                      {t('Footer.links.websiteDevelopment')}
                  </a>
                  <a className="underline text-flink text-base normal-case" href=""> {/*тут трохи хардкоду але нічого не придумав(*/}
                      {t('Footer.links.privacyPolicy')}
                  </a>
              </div>
          </div>
      </footer>
  );
};

export default Footer;