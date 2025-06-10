import About from "@/app/[locale]/components/about";
import Footer from "@/app/[locale]/components/footer";
import Feedback from "@/app/[locale]/components/feedback";

export default function Home() {
  return <>
    <About/>
    <Feedback/>
    <Footer/>
  </>;
}
