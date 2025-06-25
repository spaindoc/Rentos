"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/containers";
import {
  Heading2,
  Heading1,
  Paragraph,
  Heading3,
} from "@/components/ui/typography";

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPolicy");

  return (
    <main className='min-h-screen pt-34 pb-12'>
      <Container className='max-w-4xl mx-auto px-4'>
        <Heading1 className='text-4xl mb-8 pb-2  '>{t("title")}</Heading1>

        <Paragraph className='mb-4 leading-relaxed'>{t("intro1")}</Paragraph>
        <Paragraph className='mb-8 leading-relaxed'>{t("intro2")}</Paragraph>

        <Heading2 className='text-2xl  mt-6 mb-4'>
          {t("section1_title")}
        </Heading2>
        <Heading3 className='text-xl font-medium mt-4 mb-2'>
          {t("section1_subtitle")}
        </Heading3>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            <span className='font-medium'>{t("section1_item1_title")}</span>{" "}
            {t("section1_item1_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section1_item2_title")}</span>{" "}
            {t("section1_item2_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section1_item3_title")}</span>{" "}
            {t("section1_item3_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section1_item4_title")}</span>{" "}
            {t("section1_item4_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section1_item5_title")}</span>{" "}
            {t("section1_item5_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section1_item6_title")}</span>{" "}
            {t("section1_item6_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section1_item7_title")}</span>{" "}
            {t("section1_item7_text")}
          </li>
        </ul>

        <Heading2 className='text-2xl  mt-6 mb-4'>
          {t("section2_title")}
        </Heading2>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            <span className='font-medium'>{t("section2_item1_title")}</span>{" "}
            {t("section2_item1_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section2_item2_title")}</span>{" "}
            {t("section2_item2_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section2_item3_title")}</span>{" "}
            {t("section2_item3_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section2_item4_title")}</span>{" "}
            {t("section2_item4_text")}
          </li>
        </ul>

        <Heading2 className='text-2xl  mt-6 mb-4'>
          {t("section3_title")}
        </Heading2>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            <span className='font-medium'>{t("section3_item1_title")}</span>{" "}
            {t("section3_item1_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section3_item2_title")}</span>{" "}
            {t("section3_item2_text")}
            <ul className='list-disc pl-6 mt-2 space-y-1'>
              <li>
                <span className='font-medium'>
                  {t("section3_item2_subitem1_title")}
                </span>{" "}
                {t("section3_item2_subitem1_text")}
              </li>
              <li>
                <span className='font-medium'>
                  {t("section3_item2_subitem2_title")}
                </span>{" "}
                {t("section3_item2_subitem2_text")}
              </li>
              <li>
                <span className='font-medium'>
                  {t("section3_item2_subitem3_title")}
                </span>{" "}
                {t("section3_item2_subitem3_text")}
              </li>
            </ul>
          </li>
          <li>
            <span className='font-medium'>{t("section3_item3_title")}</span>{" "}
            {t("section3_item3_text")}
            <ul className='list-disc pl-6 mt-2 space-y-1'>
              <li>{t("section3_item3_subitem1_text")}</li>
              <li>{t("section3_item3_subitem2_text")}</li>
              <li>{t("section3_item3_subitem3_text")}</li>
              <li>{t("section3_item3_subitem4_text")}</li>
            </ul>
          </li>
          <li>
            <span className='font-medium'>
              {t("section3_item3_subitem5_title")}
            </span>{" "}
            {t("section3_item3_subitem5_text")}
          </li>
          <li>
            <span className='font-medium'>
              {t("section3_item3_subitem6_title")}
            </span>{" "}
            {t("section3_item3_subitem6_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section3_item4_title")}</span>{" "}
            {t("section3_item4_text")}
          </li>
        </ul>

        <Heading2 className='text-2xl  mt-6 mb-4'>
          {t("section4_title")}
        </Heading2>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            <span className='font-medium'>{t("section4_item1_title")}</span>{" "}
            {t("section4_item1_text")}
            <ul className='list-disc pl-6 mt-2 space-y-1'>
              <li>
                <span className='font-medium'>
                  {t("section4_item1_subitem1_title")}
                </span>{" "}
                {t("section4_item1_subitem1_text")}
              </li>
              <li>
                <span className='font-medium'>
                  {t("section4_item1_subitem2_title")}
                </span>{" "}
                {t("section4_item1_subitem2_text")}
              </li>
              <li>
                <span className='font-medium'>
                  {t("section4_item1_subitem3_title")}
                </span>{" "}
                {t("section4_item1_subitem3_text")}
              </li>
              <li>
                <span className='font-medium'>
                  {t("section4_item1_subitem4_title")}
                </span>{" "}
                {t("section4_item1_subitem4_text")}
              </li>
              <li>
                <span className='font-medium'>
                  {t("section4_item1_subitem5_title")}
                </span>{" "}
                {t("section4_item1_subitem5_text")}
              </li>
              <li>
                <span className='font-medium'>
                  {t("section4_item1_subitem6_title")}
                </span>{" "}
                {t("section4_item1_subitem6_text")}
              </li>
              <li>
                <span className='font-medium'>
                  {t("section4_item1_subitem7_title")}
                </span>{" "}
                {t("section4_item1_subitem7_text")}
              </li>
              <li>
                <span className='font-medium'>
                  {t("section4_item1_subitem8_title")}
                </span>{" "}
                {t("section4_item1_subitem8_text")}
              </li>
              <li>
                <span className='font-medium'>
                  {t("section4_item1_subitem9_title")}
                </span>{" "}
                {t("section4_item1_subitem9_text")}
              </li>
              <li>
                <span className='font-medium'>
                  {t("section4_item1_subitem10_title")}
                </span>{" "}
                {t("section4_item1_subitem10_text")}
              </li>
              <li>
                <span className='font-medium'>
                  {t("section4_item1_subitem11_title")}
                </span>{" "}
                {t("section4_item1_subitem11_text")}
              </li>
              <li>
                <span className='font-medium'>
                  {t("section4_item1_subitem12_title")}
                </span>{" "}
                {t("section4_item1_subitem12_text")}
              </li>
            </ul>
          </li>
        </ul>

        <Heading2 className='text-2xl  mt-6 mb-4'>
          {t("section5_title")}
        </Heading2>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            <span className='font-medium'>{t("section5_item1_title")}</span>{" "}
            {t("section5_item1_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section5_item2_title")}</span>{" "}
            {t("section5_item2_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section5_item3_title")}</span>{" "}
            {t("section5_item3_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section5_item4_title")}</span>{" "}
            {t("section5_item4_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section5_item5_title")}</span>{" "}
            {t("section5_item5_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section5_item6_title")}</span>{" "}
            {t("section5_item6_text")}
          </li>
        </ul>

        <Heading2 className='text-2xl  mt-6 mb-4'>
          {t("section6_title")}
        </Heading2>
        <Heading3 className='text-xl font-medium mt-4 mb-2'>
          {t("section6_subtitle1")}
        </Heading3>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            <span className='font-medium'>{t("section6_item1_title")}</span>{" "}
            {t("section6_item1_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section6_item2_title")}</span>{" "}
            {t("section6_item2_text")}
          </li>
        </ul>
        <Heading3 className='text-xl font-medium mt-4 mb-2'>
          {t("section6_subtitle2")}
        </Heading3>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            <span className='font-medium'>{t("section6_item3_title")}</span>{" "}
            {t("section6_item3_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section6_item4_title")}</span>{" "}
            {t("section6_item4_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section6_item5_title")}</span>{" "}
            {t("section6_item5_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section6_item6_title")}</span>{" "}
            {t("section6_item6_text")}
          </li>
        </ul>

        <Heading2 className='text-2xl  mt-6 mb-4'>
          {t("section7_title")}
        </Heading2>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            <span className='font-medium'>{t("section7_item1_title")}</span>{" "}
            {t("section7_item1_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section7_item2_title")}</span>{" "}
            {t("section7_item2_text")}
            <ul className='list-disc pl-6 mt-2 space-y-1'>
              <li>
                <span className='font-medium'>
                  {t("section7_item2_subitem1_title")}
                </span>{" "}
                {t("section7_item2_subitem1_text")}
              </li>
              <li>
                <span className='font-medium'>
                  {t("section7_item2_subitem2_title")}
                </span>{" "}
                {t("section7_item2_subitem2_text")}
              </li>
              <li>
                <span className='font-medium'>
                  {t("section7_item2_subitem3_title")}
                </span>{" "}
                {t("section7_item2_subitem3_text")}
              </li>
            </ul>
          </li>
        </ul>

        <Heading2 className='text-2xl  mt-6 mb-4'>
          {t("section8_title")}
        </Heading2>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            <span className='font-medium'>{t("section8_item1_title")}</span>{" "}
            {t("section8_item1_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section8_item2_title")}</span>{" "}
            {t("section8_item2_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section8_item3_title")}</span>{" "}
            {t("section8_item3_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section8_item4_title")}</span>{" "}
            {t("section8_item4_text")}
          </li>
        </ul>

        <Heading2 className='text-2xl  mt-6 mb-4'>
          {t("section9_title")}
        </Heading2>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            <span className='font-medium'>{t("section9_item1_title")}</span>{" "}
            {t("section9_item1_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section9_item2_title")}</span>{" "}
            {t("section9_item2_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section9_item3_title")}</span>{" "}
            {t("section9_item3_text")}
          </li>
          <li>
            <span className='font-medium'>{t("section9_item4_title")}</span>{" "}
            {t("section9_item4_text")}
          </li>
        </ul>
      </Container>
    </main>
  );
}
