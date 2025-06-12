import About from "@/components/about";
import Feedback from "@/components/feedback";
import Hero from "@/components/Hero";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/Navbar";
import Partners from "@/components/partners";
import ProjectsCarousel from "@/components/Projects";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProjectsCarousel />
      <Partners />
      <Feedback />
      <Footer />
    </main>
  );
}
