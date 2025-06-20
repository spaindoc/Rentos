// app/[locale]/page.jsx
import Partners from "@/components/partners";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProjectsCarousel from "@/components/Projects";
import Feedback from "@/components/feedback";
import Footer from "@/components/layout/footer";
import NewsCarousel from "@/components/news-section/NewsCarousel";
import ContactsSection from "@/components/ContactsSection";
import {
  getHeroData,
  getNewsData,
  getProjectsData,
} from "@/lib/sanity-queries";
import CorporateResponsibility from "@/components/CorporateResponsibility";
import About from "@/components/about/about";

export async function generateMetadata({ params: { locale } }) {
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

export default async function HomePage({ params: { locale } }) {
  const heroData = await getHeroData();
  const projectsData = await getProjectsData();
  const newsData = await getNewsData();

  return (
    <main className='font-roboto'>
      <Navbar />
      <Hero data={heroData} locale={locale} />
      <About />
      <Services />
      {/* Теперь locale — строка */}
      <ProjectsCarousel projects={projectsData} locale={locale} />
      <Partners />
      <CorporateResponsibility />
      <NewsCarousel newsItems={newsData} locale={locale} />
      <ContactsSection />
      <Feedback />
      <Footer />
    </main>
  );
}
