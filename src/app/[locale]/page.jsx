import About from "@/app/[locale]/components/about";
import Footer from "@/app/[locale]/components/footer";
import Feedback from "@/app/[locale]/components/feedback";
import Partners from "./components/partners";
import companyPhilosophy from './components/companyPhilosophy';
import CompanyPhilosophy from "./components/companyPhilosophy";

export default function Home() {
  return <>
    <Partners/>
    <CompanyPhilosophy/>
    <About/>
    <Feedback/>
    <Footer/>
  </>;
}
