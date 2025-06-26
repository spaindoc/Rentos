import Partners from "@/components/partners";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProjectsCarousel from "@/components/Projects";
import Feedback from "@/components/feedback";

import NewsCarousel from "@/components/news-section/NewsCarousel";
import ContactsSection from "@/components/ContactsSection";
import {
  getAboutData,
  getCorporateResponsibilityData,
  getHeroData,
  getNewsData,
  getPartnersData,
  getPhilosophyData,
  getProjectsData,
  getServicesData,
} from "@/lib/sanity-queries";
import CorporateResponsibility from "@/components/CorporateResponsibility";
import About from "@/components/about/about";
import { get } from "react-hook-form";

export async function generateMetadata(props) {
  const { locale } = await props.params;

  return {
    title:
      locale === "uk"
        ? "Rentos Group - Ваш партнер у розвитку бізнесу"
        : "Rentos Group - Your Business Development Partner",
    description:
      locale === "uk"
        ? "Ми об'єднуємо досвід, репутацію та ефективність для довгострокового успіху наших проектів"
        : "We combine experience, reputation and efficiency for long-term success of our projects",
    openGraph: {
      title:
        locale === "uk"
          ? "Rentos Group - Ваш партнер у розвитку бізнесу"
          : "Rentos Group - Your Business Development Partner",
      description:
        locale === "uk"
          ? "Ми об'єднуємо досвід, репутацію та ефективність для довгострокового успіху наших проектів"
          : "We combine experience, reputation and efficiency for long-term success of our projects",
      type: "website",
    },
  };
}

// ✅ HomePage — с await для params
export default async function HomePage(props) {
  const { locale } = await props.params;

  const heroData = await getHeroData();
  const projectsData = await getProjectsData();
  const newsData = await getNewsData();
  const aboutData = await getAboutData();
  const philosophyData = await getPhilosophyData();
  const servicesData = await getServicesData();
  const partnersData = await getPartnersData();
  const corporateData = await getCorporateResponsibilityData();

  return (
    <main className='font-roboto'>
      <Hero data={heroData} locale={locale} />
      <About data={aboutData} philosophyData={philosophyData} locale={locale} />
      <Services data={servicesData} locale={locale} />
      <ProjectsCarousel projects={projectsData} locale={locale} />
      <Partners data={partnersData} />
      <CorporateResponsibility data={corporateData} locale={locale} />
      <NewsCarousel newsItems={newsData} locale={locale} />
      <ContactsSection />
      <Feedback />
    </main>
  );
}
