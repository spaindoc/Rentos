import Partners from "@/components/partners";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import About_temp from "@/components/about/about_temp";
import CompanyPhilosophy from "@/components/about/companyPhilosophy";
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

export default async function HomePage({ params }) {
  const locale = await params.locale;
  const heroData = await getHeroData();
  const projectsData = await getProjectsData();
  const newsData = await getNewsData();

  return (
    <main className='font-roboto'>
      <Navbar />
      <Hero data={heroData} locale={locale} />
      <About/>
      <Services />
      <ProjectsCarousel projects={projectsData} locale={locale} />
      <Partners />
      <CorporateResponsibility/>
      <NewsCarousel newsItems={newsData} locale={locale} />
      <ContactsSection />
      <Feedback />
      <Footer />
    </main>
  );
}
