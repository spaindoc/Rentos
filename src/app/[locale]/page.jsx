import About from "@/app/[locale]/components/about";
import Footer from "@/app/[locale]/components/footer";
import Feedback from "@/app/[locale]/components/feedback";
import Partners from "./components/partners";

export default function Home() {
  return <>
    <Partners/>
    <About/>
    <Feedback/>
    <Footer/>
  </>;
}
