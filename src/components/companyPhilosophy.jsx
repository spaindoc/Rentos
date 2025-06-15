import {useTranslations} from "next-intl"
import { Container, Heading3, List, ListItem, Paragraph, Section } from "./ui";


const companyPhilosophy = () => {

    const t = useTranslations();

    return ( 
        <Section size="small" className="lg:bg-light-blue lg:mb-20">
            <Container className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-between text-black">
                {/*! TODO: Потім винести у окремий компонент */}
                <div className="flex-1 bg-light-blue lg:bg-none p-2 mx-auto w-full ">
                    <Heading3 className="mb-6">{t('Philosophy.block_1.title')}</Heading3>
                    <Paragraph>{t('Philosophy.block_1.subtitle')}</Paragraph>
                </div>
                <div className="flex-1 bg-light-blue lg:bg-none p-2 mx-auto w-full ">
                    <Heading3 className="mb-6">{t('Philosophy.block_2.title')}</Heading3>
                    <Paragraph>{t('Philosophy.block_2.subtitle')}</Paragraph>
                </div>
                <div className="flex-1 bg-light-blue lg:bg-none p-2 mx-auto w-full">
                    <Heading3 className="mb-6">{t('Philosophy.block_3.title')}</Heading3>
                    <List>
                        <ListItem>{t('Philosophy.block_3.item_1')}</ListItem>
                        <ListItem>{t('Philosophy.block_3.item_2')}</ListItem>
                        <ListItem>{t('Philosophy.block_3.item_3')}</ListItem>
                        <ListItem>{t('Philosophy.block_3.item_4')}</ListItem>
                    </List>
                </div>
            </Container>
        </Section>
     );
}
 
export default companyPhilosophy;