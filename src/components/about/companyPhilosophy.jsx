import { useTranslations } from "next-intl";
import { Container, Heading3, List, ListItem, Paragraph, Section } from "../ui";

const companyPhilosophy = () => {
  const t = useTranslations();

  return (
    <Section size='small' className='lg:bg-[var(--light-blue)] lg:mb-32 '>
      <Container className='flex flex-col lg:flex-row gap-8  justify-between text-black'>
        {/*! TODO: Потім винести у окремий компонент */}
        <div className='flex-1 bg-[var(--light-blue)] lg:bg-none  mx-auto w-full px-4 py-8 md:px-0 md:py-0'>
          <Heading3 className='mb-3'>{t("Philosophy.block_1.title")}</Heading3>
          <Paragraph className='max-w-[380px]'>
            {t("Philosophy.block_1.subtitle")}
          </Paragraph>
        </div>
        <div className='flex-1 bg-[var(--light-blue)] lg:bg-none  mx-auto w-full px-4 py-8 md:px-0 md:py-0'>
          <Heading3 className='mb-3'>{t("Philosophy.block_2.title")}</Heading3>
          <Paragraph className='max-w-[380px]'>
            {t("Philosophy.block_2.subtitle")}
          </Paragraph>
        </div>
        <div className='flex-1 bg-[var(--light-blue)] lg:bg-none pl-4  mx-auto w-full px-4 py-8 md:px-0 md:py-0'>
          <Heading3 className='mb-3 '>{t("Philosophy.block_3.title")}</Heading3>
          <List className='max-w-[380px]'>
            <ListItem cl>{t("Philosophy.block_3.item_1")}</ListItem>
            <ListItem>{t("Philosophy.block_3.item_2")}</ListItem>
            <ListItem>{t("Philosophy.block_3.item_3")}</ListItem>
            <ListItem>{t("Philosophy.block_3.item_4")}</ListItem>
          </List>
        </div>
      </Container>
    </Section>
  );
};

export default companyPhilosophy;
