import { useTranslations } from "next-intl";
import { Container, Heading3, List, ListItem, Paragraph, Section } from "../ui";

const CompanyPhilosophy = ({ data, locale }) => {
  return (
    <Section size='small' className='lg:bg-[var(--light-blue)] lg:mb-32'>
      <Container className='flex flex-col lg:flex-row gap-8 justify-between text-black'>
        <div className='flex-1 bg-[var(--light-blue)] lg:bg-none px-4 py-8'>
          <Heading3 className='mb-3'>{data?.block1?.title?.[locale]}</Heading3>
          <Paragraph className='max-w-[380px]'>
            {data?.block1?.subtitle?.[locale]}
          </Paragraph>
        </div>
        <div className='flex-1 bg-[var(--light-blue)] lg:bg-none px-4 py-8'>
          <Heading3 className='mb-3'>{data?.block2?.title?.[locale]}</Heading3>
          <Paragraph className='max-w-[380px]'>
            {data?.block2?.subtitle?.[locale]}
          </Paragraph>
        </div>
        <div className='flex-1 bg-[var(--light-blue)] lg:bg-none px-4 py-8'>
          <Heading3 className='mb-3'>{data?.block3?.title?.[locale]}</Heading3>
          <List className='max-w-[380px]'>
            {data?.block3?.items?.map((item, idx) => (
              <ListItem key={idx}>{item?.[locale]}</ListItem>
            ))}
          </List>
        </div>
      </Container>
    </Section>
  );
};

export default CompanyPhilosophy;
