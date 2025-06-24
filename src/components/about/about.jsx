import React from "react";
import About_temp from "@/components/about/about_temp";
import CompanyPhilosophy from "@/components/about/companyPhilosophy";

const About = ({ data, philosophyData, locale }) => {
  return (
    <section id='about' className='scroll-mt-20'>
      <div className='hidden lg:block'>
        <About_temp data={data} locale={locale} />
        <CompanyPhilosophy data={philosophyData} locale={locale} />
      </div>
      <div className='lg:hidden block'>
        <CompanyPhilosophy data={philosophyData} locale={locale} />
        <About_temp data={data} locale={locale} />
      </div>
    </section>
  );
};

export default About;
