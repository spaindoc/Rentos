import Partners from "@/components/partners";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/about";
import CompanyPhilosophy from "@/components/companyPhilosophy";
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

export default async function HomePage({ params }) {
  const locale = await params.locale;
  const heroData = await getHeroData();
  const projectsData = await getProjectsData();
  const newsData = await getNewsData();

  return (
    <main className='font-roboto'>
      <Navbar />
      <Hero data={heroData} locale={locale} />
      <div className='hidden lg:block'>
        {" "}
        {/*Дивись, тут хз як краще, можу просто в інший компонент це засунути або хай залишається так ? */}
        <About />
        <CompanyPhilosophy />
      </div>
      <div className='lg:hidden block'>
        <CompanyPhilosophy />
        <About />
      </div>
      <Services />
      <ProjectsCarousel projects={projectsData} locale={locale} />
      <NewsCarousel newsItems={newsData} locale={locale} />
      <ContactsSection />
      <Partners />
      <CorporateResponsibility/>
      <Feedback />
      <Footer />
    </main>
  );
}
