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
import CorporateResponsibility from "@/components/CorporateResponsibility";

export default function HomePage() {
  return (
    <main className='font-roboto'>
      <Navbar />
      <Hero />
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
      <ProjectsCarousel />
      <NewsCarousel />
      <ContactsSection />
      <Partners />
      <CorporateResponsibility/>
      <Feedback />
      <Footer />
    </main>
  );
}
