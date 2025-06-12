'use client';
import React from 'react';
import Image from "next/image";
import aboutImage from "../../../../public/About_img.jpg";
import { useTranslations } from "next-intl";
import { Heading2, Paragraph, Container, List, ListItem } from './ui';

const About = () => {
  const t = useTranslations('AboutSection');

  return (
    <section className="bg-white text-black py-10 lg:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="hidden lg:block flex-shrink-0 w-[334px] xl:w-[496px]">
            <Image
              src={aboutImage}
              alt="about_us"
              className="object-cover w-full h-auto"
              priority
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <Heading2 className="mb-4 lg:mb-10">
              {t('title')}
            </Heading2>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 text-paragraph">
              <div className="flex-1 flex flex-col gap-4">
                <Paragraph>{t('description.part1')}</Paragraph>
                <List>
                  <ListItem>{t('list.management')}</ListItem>
                  <ListItem>{t('list.development')}</ListItem>
                  <ListItem>{t('list.consulting')}</ListItem>
                  <ListItem>{t('list.investment')}</ListItem>
                </List>
              </div>

              <div className="block lg:hidden mx-auto w-full max-w-[340px] md:max-w-[450px]">
                <Image
                  src={aboutImage}
                  alt="about_us"
                  className="object-cover w-full h-auto"
                  priority
                  sizes="(max-width: 640px) 90vw, 340px"
                />
              </div>

              <div className="flex-1 flex flex-col gap-4">
                <Paragraph>{t('description.part2')}</Paragraph>
                <Paragraph>{t('description.objects')}</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
