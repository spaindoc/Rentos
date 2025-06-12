import About from "@/app/[locale]/components/about";
import Footer from "@/app/[locale]/components/footer";
import Feedback from "@/app/[locale]/components/feedback";
import Partners from "./components/partners";
import companyPhilosophy from './components/companyPhilosophy';
import CompanyPhilosophy from "./components/companyPhilosophy";

export default function Home() {
  return <>
    <Partners/>
    <div className="hidden lg:block"> {/*Дивись, тут хз як краще, можу просто в інший компонент це засунути або хай залишається так ? */}
      <About/>
      <CompanyPhilosophy/>
    </div>
    <div className="lg:hidden block">
      <CompanyPhilosophy/>
      <About/>
    </div>
    <Feedback/>
    <Footer/>
  </>;
}
